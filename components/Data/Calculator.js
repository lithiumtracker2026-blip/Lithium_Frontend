// components/Calculator.js
"use client";

import React, { useState } from "react";

export default function Calculator() {
  const [quantity, setQuantity] = useState(1);
  const [unitFactor, setUnitFactor] = useState(1); // default: tonne
  const [productPrice, setProductPrice] = useState(11000);
  const [productLabel, setProductLabel] = useState("LCE $/t");

  const calcValue = () => {
    const tonnes = quantity * unitFactor;
    const value = tonnes * productPrice;
    return value;
  };

  const formatCurrency = (val) =>
    `$${val.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  return (
    <section id="calculator" className="py-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4">
        <p className="text-sm text-gray-500">Calculator</p>
        <h2 className="text-2xl font-bold mb-2">
          Lithium Unit Conversion &amp; Value Calculator
        </h2>
        <p className="text-gray-600 mb-6">
          Convert between lithium units and calculate market value. Prices
          pre-filled from today’s assessments. Runs entirely in your browser.
        </p>

        {/* Input Grid */}
        <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Unit</label>
            <select
              value={unitFactor}
              onChange={(e) => setUnitFactor(parseFloat(e.target.value))}
              className="w-full border rounded px-3 py-2"
            >
              <option value={1}>Metric tonne (t)</option>
              <option value={0.001}>Kilogram (kg)</option>
              <option value={0.000001}>Gram (g)</option>
              <option value={1000}>Kilotonne (kt)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Product</label>
            <select
              value={productPrice}
              onChange={(e) => {
                setProductPrice(parseFloat(e.target.value));
                setProductLabel(
                  e.target.options[e.target.selectedIndex].dataset.u
                );
              }}
              className="w-full border rounded px-3 py-2"
            >
              <option value={11000} data-u="LCE $/t">
                LCE (carbonate equiv.) — $11,000/t
              </option>
              <option value={13500} data-u="LiOH $/t">
                Li Hydroxide (LiOH) — $13,500/t
              </option>
              <option value={800} data-u="SC6 $/t">
                Spodumene SC6 — $800/t
              </option>
              <option value={65000} data-u="Li metal $/t">
                Li Metal battery-grade — $65,000/t
              </option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="flex items-center justify-between bg-indigo-50 border rounded-lg p-4 mb-6">
          <div>
            <p className="text-sm font-medium">Market value</p>
            <p className="text-xs text-gray-600">
              {quantity} {unitFactor === 1 ? "t" : ""} {productLabel} at $
              {productPrice.toLocaleString()}/t
            </p>
          </div>
          <p className="text-xl font-bold text-indigo-600">
            {formatCurrency(calcValue())}
          </p>
        </div>

        {/* Quick Reference Table */}
        <p className="text-sm font-semibold text-gray-800 mb-2">
          Quick reference conversions
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Unit</th>
                <th className="border px-3 py-2">Value at current prices</th>
                <th className="border px-3 py-2">Conversion factor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">1 tonne LCE</td>
                <td className="border px-3 py-2">$11,000</td>
                <td className="border px-3 py-2">Industry standard unit</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">1 tonne Li₂CO₃</td>
                <td className="border px-3 py-2">$2,067</td>
                <td className="border px-3 py-2">÷ 5.323 = LCE per tonne</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">1 tonne SC6 spodumene</td>
                <td className="border px-3 py-2">$800</td>
                <td className="border px-3 py-2">× 8.9 = 1 tonne LCE</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">1 EV battery (75 kWh LFP)</td>
                <td className="border px-3 py-2">$535</td>
                <td className="border px-3 py-2">48.7 kg LCE × $11k/t ÷ 1000</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">1 GWh grid storage</td>
                <td className="border px-3 py-2">$7,150,000</td>
                <td className="border px-3 py-2">650 t LCE/GWh × $11k/t</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">1 EV battery at 2022 ATH</td>
                <td className="border px-3 py-2 text-red-600">$3,896</td>
                <td className="border px-3 py-2">48.7 kg LCE × $80k/t ÷ 1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
