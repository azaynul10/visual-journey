import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

// Mock heavy components to keep tests fast and focused on routing
vi.mock('../ParticleBackground', () => ({
  default: () => <div data-testid="particle-bg" />,
}));

describe('App', () => {
  it('renders the home page at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Layout renders nav with "Home" links (nav + footer)
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('renders the navigation bar', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Community').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Speaking').length).toBeGreaterThan(0);
  });

  it('renders the footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText('Zaynul Abedin Miah').length).toBeGreaterThan(0);
  });

  it('renders fallback to home for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-page']}>
        <App />
      </MemoryRouter>
    );
    // Should still render layout with nav links
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('renders brand logo link in nav', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const logo = screen.getByLabelText('Home');
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('A');
  });
});
