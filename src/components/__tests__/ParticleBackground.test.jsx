import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ParticleBackground from '../ParticleBackground';

describe('ParticleBackground', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // Mock canvas getContext since happy-dom doesn't support Canvas API
    HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
      clearRect: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      createRadialGradient: vi.fn(() => ({
        addColorStop: vi.fn(),
      })),
    }));
  });

  it('renders a canvas element', () => {
    const { container } = render(<ParticleBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('canvas is hidden from accessibility tree', () => {
    const { container } = render(<ParticleBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveAttribute('aria-hidden', 'true');
  });

  it('canvas has correct styling classes', () => {
    const { container } = render(<ParticleBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas.getAttribute('class')).toContain('fixed');
    expect(canvas.getAttribute('class')).toContain('pointer-events-none');
  });

  it('canvas has opacity style', () => {
    const { container } = render(<ParticleBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveStyle({ opacity: '0.12' });
  });

  it('respects prefers-reduced-motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true });
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame');

    render(<ParticleBackground />);
    // When reduced motion is preferred, no animation should start
    expect(rafSpy).not.toHaveBeenCalled();
  });
});
