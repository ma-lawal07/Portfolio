import { useState } from 'react';

// Shows public/headshot.jpg when present; otherwise the empty-slot placeholder.
export default function Headshot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="headshot-empty">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span>Add headshot.jpg to client/public</span>
      </div>
    );
  }
  return <img className="headshot-img" src={src} alt={alt} onError={() => setFailed(true)} />;
}
