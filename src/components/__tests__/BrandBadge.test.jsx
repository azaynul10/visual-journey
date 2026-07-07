import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BrandBadge from '../BrandBadge';

describe('BrandBadge', () => {
  describe('compact mode', () => {
    it('renders a span element', () => {
      const { container } = render(<BrandBadge label="AWS" compact />);
      const span = container.querySelector('span');
      expect(span).toBeInTheDocument();
    });

    it('displays the label text', () => {
      render(<BrandBadge label="CNCF" compact />);
      expect(screen.getByText('CNCF')).toBeInTheDocument();
    });

    it('applies accentColor as text color', () => {
      const { container } = render(
        <BrandBadge label="AWS" compact accentColor="#FF9900" />
      );
      const badge = container.querySelector('[role="img"]');
      expect(badge).toHaveStyle({ color: '#FF9900' });
    });

    it('renders with default aria-label', () => {
      render(<BrandBadge label="AWS" compact />);
      expect(
        screen.getByRole('img', { name: 'AWS affiliation' })
      ).toBeInTheDocument();
    });

    it('renders with custom aria-label', () => {
      render(
        <BrandBadge label="AWS" compact ariaLabel="Amazon Web Services" />
      );
      expect(
        screen.getByRole('img', { name: 'Amazon Web Services' })
      ).toBeInTheDocument();
    });

    it('renders accent dot indicator', () => {
      const { container } = render(
        <BrandBadge label="GCP" compact accentColor="#4285F4" />
      );
      const dot = container.querySelector('.rounded-full');
      expect(dot).toBeInTheDocument();
      expect(dot).toHaveStyle({ backgroundColor: '#4285F4' });
    });
  });

  describe('full (default) mode', () => {
    it('renders a div element with role img', () => {
      render(<BrandBadge label="CNCF" subtitle="Ambassador" />);
      const badge = screen.getByRole('img', {
        name: 'CNCF Ambassador affiliation',
      });
      expect(badge).toBeInTheDocument();
      expect(badge.tagName).toBe('DIV');
    });

    it('displays the label and subtitle', () => {
      render(<BrandBadge label="CNCF" subtitle="Ambassador" />);
      expect(screen.getByText('CNCF')).toBeInTheDocument();
      expect(screen.getByText('Ambassador')).toBeInTheDocument();
    });

    it('renders without subtitle when not provided', () => {
      render(<BrandBadge label="Docker" />);
      expect(screen.getByText('Docker')).toBeInTheDocument();
      const badge = screen.getByRole('img', { name: 'Docker affiliation' });
      expect(badge).toBeInTheDocument();
    });

    it('applies accentGradient to the label', () => {
      const gradient = 'linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58)';
      const { container } = render(
        <BrandBadge label="Google" accentGradient={gradient} />
      );
      const labelEl = container.querySelector('.font-extrabold');
      const style = labelEl.getAttribute('style');
      expect(style).toContain(gradient);
      // backgroundClip: 'text' is rendered
      expect(style).toContain('text');
    });

    it('applies accentColor as text color when no gradient', () => {
      const { container } = render(
        <BrandBadge label="AWS" accentColor="#FF9900" />
      );
      const labelEl = container.querySelector('.font-extrabold');
      expect(labelEl).toHaveStyle({ color: '#FF9900' });
    });

    it('applies custom className', () => {
      const { container } = render(
        <BrandBadge label="Test" className="my-custom-class" />
      );
      const badge = container.querySelector('.my-custom-class');
      expect(badge).toBeInTheDocument();
    });

    it('renders accent glow strip', () => {
      const { container } = render(
        <BrandBadge label="AWS" accentColor="#FF9900" />
      );
      const strip = container.querySelector('.h-\\[2px\\]');
      expect(strip).toBeInTheDocument();
    });
  });
});
