import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialLinks from '../SocialLinks';

describe('SocialLinks', () => {
  it('renders all 5 social links in footer mode by default', () => {
    const { container } = render(<SocialLinks />);
    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(5);
  });

  it('renders links with correct hrefs', () => {
    const { container } = render(<SocialLinks mode="footer" />);
    const links = container.querySelectorAll('a');
    const hrefs = Array.from(links).map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/azaynul10');
    expect(hrefs).toContain('https://linkedin.com/in/zaynul-abedin-miah/');
    expect(hrefs).toContain('https://www.youtube.com/@zaynulabedinmiah');
    expect(hrefs).toContain('https://x.com/azaynul123');
    expect(hrefs).toContain('https://www.facebook.com/azaynul123');
  });

  it('opens links in a new tab', () => {
    const { container } = render(<SocialLinks />);
    const links = container.querySelectorAll('a');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders aria-labels on all links', () => {
    render(<SocialLinks />);
    expect(
      screen.getByLabelText("View Zaynul's GitHub Profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Connect with Zaynul on LinkedIn')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Subscribe to Zaynul's YouTube Channel")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Follow Zaynul on X')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Connect with Zaynul on Facebook')
    ).toBeInTheDocument();
  });

  it('renders sidebar mode with tooltips', () => {
    const { container } = render(<SocialLinks mode="sidebar" />);
    const tooltips = container.querySelectorAll('span');
    const tooltipTexts = Array.from(tooltips).map((t) => t.textContent);
    expect(tooltipTexts).toContain('GitHub');
    expect(tooltipTexts).toContain('LinkedIn');
    expect(tooltipTexts).toContain('YouTube');
    expect(tooltipTexts).toContain('X (Twitter)');
    expect(tooltipTexts).toContain('Facebook');
  });

  it('renders a vertical line in sidebar mode', () => {
    const { container } = render(<SocialLinks mode="sidebar" />);
    const line = container.querySelector('.w-px');
    expect(line).toBeInTheDocument();
  });

  it('does not render a vertical line in footer mode', () => {
    const { container } = render(<SocialLinks mode="footer" />);
    const line = container.querySelector('.w-px');
    expect(line).not.toBeInTheDocument();
  });
});
