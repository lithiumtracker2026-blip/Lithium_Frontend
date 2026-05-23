import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FALLBACK_IMG = 'https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack-icon.png';

const SkeletonItem = () => (
  <div className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 animate-pulse">
    <div className="w-[72px] h-[64px] rounded-md bg-gray-200 shrink-0" />
    <div className="flex-1 space-y-2">
      <div className="h-2.5 bg-gray-200 rounded w-1/3" />
      <div className="h-3.5 bg-gray-200 rounded w-full" />
      <div className="h-3.5 bg-gray-200 rounded w-4/5" />
      <div className="h-2.5 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
);

const LithiumSubstacks = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/lithium-substacks')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full border border-black/10 p-4 rounded-xl">
      {/* Header */}
      <h2 className="text-[21px] cambay font-bold border-b border-gray-200 pb-2 mb-4">
        Lithium Substacks
      </h2>

      {/* Loading */}
      {loading && (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <SkeletonItem key={i} />)}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="text-sm text-red-500 py-4 text-center">
          Could not load Substack posts.
        </p>
      )}

      {/* Empty */}
      {!loading && !error && posts.length === 0 && (
        <p className="text-sm text-gray-400 py-4 text-center">
          No posts available right now.
        </p>
      )}

      {/* Posts */}
      {!loading && !error && posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-[72px] h-[64px] rounded-md overflow-hidden shrink-0 bg-gray-100">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => { e.target.src = FALLBACK_IMG; }}
                  />
                ) : (
                  <img
                    src={FALLBACK_IMG}
                    alt="Substack"
                    className="w-full h-full object-cover opacity-40"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-accent uppercase tracking-wide mb-0.5 truncate">
                  {post.publication}
                </p>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                {post.dateFormatted && (
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    {post.dateFormatted}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LithiumSubstacks;
