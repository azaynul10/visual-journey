import React, { useState, useCallback } from 'react';

/**
 * LiteYouTube — click-to-load YouTube facade (no iframe until user clicks).
 *
 * Renders a lazy-loaded thumbnail from i.ytimg.com with a play button.
 * On first pointer/focus interaction it warms up connections (preconnect),
 * and only injects the real iframe after an explicit click/keypress.
 *
 * @param {string} id     - YouTube video ID
 * @param {string} title  - Accessible video title
 * @param {string} className - Extra classes for the wrapper
 */

let preconnected = false;
function warmConnections() {
  if (preconnected) return;
  preconnected = true;
  ['https://www.youtube-nocookie.com', 'https://www.google.com'].forEach((origin) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    document.head.appendChild(link);
  });
}

export default function LiteYouTube({ id, title, className = '' }) {
  const [activated, setActivated] = useState(false);
  const [thumbQuality, setThumbQuality] = useState('maxresdefault');

  const activate = useCallback(() => setActivated(true), []);

  // maxresdefault doesn't exist for every video. YouTube either 404s (onError)
  // or serves a 120x90 gray placeholder (detected via naturalWidth onLoad).
  // hqdefault always exists, so fall back to it.
  const fallbackToHq = useCallback(() => {
    setThumbQuality((q) => (q === 'maxresdefault' ? 'hqdefault' : q));
  }, []);

  if (activated) {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-black ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={activate}
      onPointerOver={warmConnections}
      onFocus={warmConnections}
      className={`group relative w-full aspect-video rounded-xl overflow-hidden bg-black/60 border border-white/10 hover:border-white/25 transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 cursor-pointer ${className}`}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/${thumbQuality}.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        onError={fallbackToHq}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth <= 120) fallbackToHq();
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      {/* Dark gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
      {/* Play button */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600/90 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      {/* Title bar */}
      <span className="absolute bottom-0 left-0 right-0 p-3 text-left">
        <span className="text-xs font-bold text-white leading-snug line-clamp-2">{title}</span>
      </span>
    </button>
  );
}
