import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import CredentialsPage from '../../pages/CredentialsPage';

describe('CredentialsPage', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('declares its own canonical URL, not the homepage', () => {
    render(<CredentialsPage />);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://zaynulabedinmiah.com/credentials'
    );
  });
});
