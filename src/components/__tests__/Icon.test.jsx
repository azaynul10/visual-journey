import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Icon from '../Icon';

describe('Icon', () => {
  it('renders an SVG for a known icon name', () => {
    const { container } = render(<Icon name="github" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg.querySelector('path')).toHaveAttribute('d');
  });

  it('renders the AWS text SVG for name="aws"', () => {
    const { container } = render(<Icon name="aws" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 60 36');
    expect(svg.querySelector('text')).toBeInTheDocument();
  });

  it('renders a fallback span for an unknown icon name', () => {
    const { container } = render(<Icon name="nonexistent" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeInTheDocument();
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('N');
  });

  it('applies custom className', () => {
    const { container } = render(<Icon name="github" className="text-red-500" />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('class')).toContain('text-red-500');
  });

  it('applies custom style', () => {
    const { container } = render(<Icon name="github" style={{ color: 'red' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ color: 'red' });
  });

  it('sets aria-label when label prop is provided', () => {
    const { container } = render(<Icon name="github" label="GitHub icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-label', 'GitHub icon');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('hides from accessibility tree when no label is provided', () => {
    const { container } = render(<Icon name="github" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
  });

  it('renders fallback with aria-label from label prop', () => {
    render(<Icon name="unknown" label="Unknown" />);
    const span = screen.getByRole('img', { name: 'Unknown' });
    expect(span).toBeInTheDocument();
  });

  it('renders fallback with aria-label from name when no label', () => {
    render(<Icon name="mystery" />);
    const span = screen.getByRole('img', { name: 'mystery' });
    expect(span).toBeInTheDocument();
  });

  it('renders different paths for different icon names', () => {
    const { container: c1 } = render(<Icon name="github" />);
    const { container: c2 } = render(<Icon name="linkedin" />);
    const path1 = c1.querySelector('path').getAttribute('d');
    const path2 = c2.querySelector('path').getAttribute('d');
    expect(path1).not.toEqual(path2);
  });
});
