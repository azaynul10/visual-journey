import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProjectPageTemplate from '../ProjectPageTemplate';

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('ProjectPageTemplate', () => {
  const baseProps = {
    title: 'Test Project',
    seo: { title: 'Test SEO Title', canonicalPath: '/test' },
  };

  it('renders the project title as h1', () => {
    renderWithRouter(<ProjectPageTemplate {...baseProps} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Project');
  });

  it('renders breadcrumb navigation', () => {
    renderWithRouter(<ProjectPageTemplate {...baseProps} />);
    const nav = screen.getByLabelText('Breadcrumb');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveTextContent('Home');
    expect(nav).toHaveTextContent('Test Project');
  });

  it('renders subtitle when provided', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} subtitle="A cool project" />
    );
    expect(screen.getByText('A cool project')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = renderWithRouter(
      <ProjectPageTemplate {...baseProps} />
    );
    const subtitle = container.querySelector('.text-lg.text-gray-400.mb-8');
    expect(subtitle).not.toBeInTheDocument();
  });

  it('renders tech stack badges', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} techStack={['React', 'Python', 'K8s']} />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('K8s')).toBeInTheDocument();
  });

  it('renders GitHub link when provided', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} githubLink="https://github.com/test/repo" />
    );
    const link = screen.getByLabelText('View Test Project repository on GitHub');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/test/repo');
  });

  it('does not render GitHub link when not provided', () => {
    renderWithRouter(<ProjectPageTemplate {...baseProps} />);
    expect(screen.queryByText('View Repository')).not.toBeInTheDocument();
  });

  it('renders article link with custom label', () => {
    renderWithRouter(
      <ProjectPageTemplate
        {...baseProps}
        articleLink="https://example.com/article"
        articleLabel="Read Post"
      />
    );
    expect(screen.getByText('Read Post')).toBeInTheDocument();
  });

  it('renders demo link when provided', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} demoLink="https://youtube.com/watch?v=abc" />
    );
    const link = screen.getByLabelText('Watch demo video for Test Project');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://youtube.com/watch?v=abc');
  });

  it('renders notice banner when provided', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} notice="This is a beta project" />
    );
    expect(screen.getByText('This is a beta project')).toBeInTheDocument();
  });

  it('renders problem statement section', () => {
    renderWithRouter(
      <ProjectPageTemplate {...baseProps} problemStatement="The main problem is..." />
    );
    expect(screen.getByText('Problem Statement')).toBeInTheDocument();
    expect(screen.getByText('The main problem is...')).toBeInTheDocument();
  });

  it('renders dynamic sections with string content', () => {
    renderWithRouter(
      <ProjectPageTemplate
        {...baseProps}
        sections={[{ title: 'Approach', content: 'We used method X.' }]}
      />
    );
    expect(screen.getByText('Approach')).toBeInTheDocument();
    expect(screen.getByText('We used method X.')).toBeInTheDocument();
  });

  it('renders dynamic sections with JSX content', () => {
    renderWithRouter(
      <ProjectPageTemplate
        {...baseProps}
        sections={[{ title: 'Details', content: <ul><li>Item A</li></ul> }]}
      />
    );
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Item A')).toBeInTheDocument();
  });

  it('renders measurable results', () => {
    renderWithRouter(
      <ProjectPageTemplate
        {...baseProps}
        results={[
          { value: '99%', label: 'Accuracy' },
          { value: '3x', label: 'Speed Improvement' },
        ]}
      />
    );
    expect(screen.getByText('Measurable Results')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('Accuracy')).toBeInTheDocument();
    expect(screen.getByText('3x')).toBeInTheDocument();
  });

  it('renders What I Learned section', () => {
    renderWithRouter(
      <ProjectPageTemplate
        {...baseProps}
        whatILearned={['Learned to scale K8s', 'Improved observability']}
      />
    );
    expect(screen.getByText('What I Learned')).toBeInTheDocument();
    expect(screen.getByText('Learned to scale K8s')).toBeInTheDocument();
    expect(screen.getByText('Improved observability')).toBeInTheDocument();
  });

  it('renders back to portfolio link', () => {
    renderWithRouter(<ProjectPageTemplate {...baseProps} />);
    const backLink = screen.getByText('Back to Portfolio');
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('does not render optional sections when empty', () => {
    renderWithRouter(<ProjectPageTemplate {...baseProps} />);
    expect(screen.queryByText('Problem Statement')).not.toBeInTheDocument();
    expect(screen.queryByText('Measurable Results')).not.toBeInTheDocument();
    expect(screen.queryByText('What I Learned')).not.toBeInTheDocument();
  });
});
