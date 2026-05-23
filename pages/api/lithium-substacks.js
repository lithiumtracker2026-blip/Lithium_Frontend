// Fetches RSS feeds from lithium-focused Substack publications
// and merges + sorts them by date

const LITHIUM_SUBSTACK_FEEDS = [
  {
    url: 'https://lithiumventures.substack.com/feed',
    publication: 'Lithium Ventures',
  },
  {
    url: 'https://lithiumenergy.substack.com/feed',
    publication: 'Lithium Energy',
  },
  {
    url: 'https://dearlithium.substack.com/feed',
    publication: 'Dear Lithium',
  },
  {
    url: 'https://lithiumbatterytechnology.substack.com/feed',
    publication: 'Lithium Battery Technology',
  },
  {
    url: 'https://michaelschwabe.substack.com/feed',
    publication: 'Michael Schwabe',
  },
];

// Parse a single <item> XML block into a post object
function parseItem(xml, publication) {
  const get = (tag) => {
    const match = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
    return match ? (match[1] || match[2] || '').trim() : '';
  };

  const title = get('title');
  const link = get('link') || get('guid');
  const pubDate = get('pubDate');
  const description = get('description');
  const content = get('content:encoded') || description;

  // Extract image from enclosure, media:content, or first <img> in content
  let image = '';
  const enclosure = xml.match(/<enclosure[^>]+url="([^"]+)"[^>]*type="image/i);
  if (enclosure) image = enclosure[1];
  if (!image) {
    const media = xml.match(/<media:content[^>]+url="([^"]+)"/i);
    if (media) image = media[1];
  }
  if (!image) {
    const imgTag = content.match(/<img[^>]+src="([^"]+)"/i);
    if (imgTag) image = imgTag[1];
  }

  // Strip HTML from description for excerpt
  const excerpt = description
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 120);

  return {
    title,
    url: link,
    publication,
    image,
    excerpt,
    date: pubDate ? new Date(pubDate).toISOString() : null,
    dateFormatted: pubDate
      ? new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : '',
  };
}

// Fetch and parse one RSS feed, return array of post objects
async function fetchFeed({ url, publication }) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LithiumTracker/1.0)' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    const xml = await res.text();

    // Split into <item> blocks
    const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
    return items.slice(0, 5).map((item) => parseItem(item, publication)).filter((p) => p.title && p.url);
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  // Cache for 30 minutes
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

  try {
    const results = await Promise.allSettled(LITHIUM_SUBSTACK_FEEDS.map(fetchFeed));
    const allPosts = results
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value);

    // Sort by date descending
    allPosts.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });

    res.status(200).json(allPosts.slice(0, 4));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
