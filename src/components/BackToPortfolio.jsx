import { Link } from 'react-router-dom';
import Icon from './Icon';

/**
 * BackToPortfolio — trailing "Back to Portfolio" link shown at the bottom of pages.
 */
export default function BackToPortfolio() {
  return (
    <div className="pt-8 border-t border-white/5">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors min-h-[44px]">
        <Icon name="arrow-left" className="text-xs" /> Back to Portfolio
      </Link>
    </div>
  );
}
