import { Link } from 'react-router-dom';

/**
 * Breadcrumb — "Home / {current}" navigation used at the top of standalone pages.
 *
 * @param {React.ReactNode} current - Label for the current page (the trailing crumb).
 * @param {string} [currentClassName] - Classes for the current-page span.
 */
export default function Breadcrumb({ current, currentClassName = 'text-gray-300' }) {
  return (
    <nav
      className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 mb-8"
      aria-label="Breadcrumb"
    >
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      <span aria-hidden="true">/</span>
      <span className={currentClassName}>{current}</span>
    </nav>
  );
}
