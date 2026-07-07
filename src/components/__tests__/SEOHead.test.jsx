import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import SEOHead from '../SEOHead';

describe('SEOHead', () => {
  beforeEach(() => {
    document.title = '';
    document.head.innerHTML = '';
  });

  it('sets the document title', () => {
    render(<SEOHead title="Test Title" />);
    expect(document.title).toBe('Test Title');
  });

  it('uses default title when none provided', () => {
    render(<SEOHead />);
    expect(document.title).toBe(
      'Zaynul Abedin Miah | Agentic AI & Cloud Native Platform Engineer'
    );
  });

  it('sets the meta description', () => {
    render(<SEOHead description="Test description" />);
    const meta = document.querySelector('meta[name="description"]');
    expect(meta).toBeInTheDocument();
    expect(meta).toHaveAttribute('content', 'Test description');
  });

  it('sets the canonical URL', () => {
    render(<SEOHead canonicalPath="/about" />);
    const link = document.querySelector('link[rel="canonical"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://zaynul-abedin-miah.vercel.app/about'
    );
  });

  it('sets Open Graph meta tags', () => {
    render(
      <SEOHead
        title="OG Title"
        description="OG Desc"
        canonicalPath="/page"
        ogImage="/img.png"
      />
    );
    expect(
      document.querySelector('meta[property="og:title"]')
    ).toHaveAttribute('content', 'OG Title');
    expect(
      document.querySelector('meta[property="og:description"]')
    ).toHaveAttribute('content', 'OG Desc');
    expect(
      document.querySelector('meta[property="og:url"]')
    ).toHaveAttribute(
      'content',
      'https://zaynul-abedin-miah.vercel.app/page'
    );
    expect(
      document.querySelector('meta[property="og:image"]')
    ).toHaveAttribute(
      'content',
      'https://zaynul-abedin-miah.vercel.app/img.png'
    );
    expect(
      document.querySelector('meta[property="og:type"]')
    ).toHaveAttribute('content', 'website');
  });

  it('sets Twitter card meta tags', () => {
    render(<SEOHead title="TW Title" description="TW Desc" />);
    expect(
      document.querySelector('meta[name="twitter:card"]')
    ).toHaveAttribute('content', 'summary_large_image');
    expect(
      document.querySelector('meta[name="twitter:title"]')
    ).toHaveAttribute('content', 'TW Title');
    expect(
      document.querySelector('meta[name="twitter:description"]')
    ).toHaveAttribute('content', 'TW Desc');
  });

  it('returns null (renders nothing visible)', () => {
    const { container } = render(<SEOHead />);
    expect(container.innerHTML).toBe('');
  });
});
