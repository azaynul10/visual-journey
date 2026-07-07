import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProjectsGrid from '../ProjectsGrid';

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('ProjectsGrid', () => {
  it('renders the section heading', () => {
    renderWithRouter(<ProjectsGrid />);
    expect(
      screen.getByRole('heading', { name: 'Featured Engineering' })
    ).toBeInTheDocument();
  });

  it('renders all 4 project cards', () => {
    renderWithRouter(<ProjectsGrid />);
    expect(screen.getByText('Kube-AutoFix: Autonomous K8s Debugging Agent')).toBeInTheDocument();
    expect(screen.getByText('Transnational AQMS via IoT')).toBeInTheDocument();
    expect(screen.getByText('Multimodal Fall Detection')).toBeInTheDocument();
    expect(screen.getByText('IAN: Intelligent Accessibility Navigator')).toBeInTheDocument();
  });

  it('renders tech stack info for each project', () => {
    renderWithRouter(<ProjectsGrid />);
    expect(screen.getByText('OpenAI Codex, Kubernetes, Databricks, MLflow')).toBeInTheDocument();
    expect(screen.getByText('Google ADK, PyTorch, C++')).toBeInTheDocument();
    expect(screen.getByText('PyTorch, Computer Vision')).toBeInTheDocument();
    expect(screen.getByText('Gemini 2.5 Vision, Cloud Run, TTS')).toBeInTheDocument();
  });

  it('renders "Read More" links only for projects with internalPath', () => {
    renderWithRouter(<ProjectsGrid />);
    const readMoreLinks = screen.getAllByText('Read More');
    // Kube-AutoFix, Transnational AQMS, and IAN have internalPath
    expect(readMoreLinks).toHaveLength(3);
  });

  it('renders GitHub links for all projects', () => {
    renderWithRouter(<ProjectsGrid />);
    const githubLinks = screen.getAllByText('GitHub');
    expect(githubLinks).toHaveLength(4);
  });

  it('renders Demo button only for projects with a demo link', () => {
    renderWithRouter(<ProjectsGrid />);
    // Only Transnational AQMS has a demo
    const demoLinks = screen.getAllByText('Demo');
    expect(demoLinks).toHaveLength(1);
  });

  it('sets correct external link attributes on GitHub links', () => {
    renderWithRouter(<ProjectsGrid />);
    const githubLinks = screen.getAllByText('GitHub');
    githubLinks.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('target', '_blank');
      expect(link.closest('a')).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('renders accessible aria-labels for read more links', () => {
    renderWithRouter(<ProjectsGrid />);
    expect(
      screen.getByLabelText('Read more about Kube-AutoFix: Autonomous K8s Debugging Agent')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Read more about IAN: Intelligent Accessibility Navigator')
    ).toBeInTheDocument();
  });

  it('renders accessible aria-labels for GitHub links', () => {
    renderWithRouter(<ProjectsGrid />);
    expect(
      screen.getByLabelText('View Kube-AutoFix: Autonomous K8s Debugging Agent on GitHub')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('View Multimodal Fall Detection on GitHub')
    ).toBeInTheDocument();
  });

  it('has correct section landmark with aria-labelledby', () => {
    renderWithRouter(<ProjectsGrid />);
    const section = screen.getByRole('region', { name: 'Featured Engineering' });
    expect(section).toBeInTheDocument();
  });
});
