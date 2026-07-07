import ProjectPageTemplate from '../components/ProjectPageTemplate';
import PipelineDiagram from '../components/PipelineDiagram';
import Icon from '../components/Icon';

const ianNodes = [
  { iconName: 'camera', label: 'Camera Input', desc: 'Real-time video', color: '#446CE3' },
  { iconName: 'eye', label: 'Gemini Vision', desc: '2.5 Flash analysis', color: '#FF9900' },
  { iconName: 'comment-dots', label: 'Scene Description', desc: 'Natural language', color: '#a855f7' },
  { iconName: 'volume-up', label: 'TTS Output', desc: 'Spoken guidance', color: '#22c55e' },
];

export default function IANPage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: 'IAN: Intelligent Accessibility Navigator | Zaynul Abedin Miah',
        description: 'Real-time visual assistance system for the visually impaired using Gemini 2.5 Vision, deployed on Google Cloud Run with TTS output.',
        canonicalPath: '/projects/intelligent-accessibility-navigator',
      }}
      title="IAN: Intelligent Accessibility Navigator"
      subtitle="A real-time visual-assistance system for the visually impaired utilizing Gemini Vision capabilities, deployed on Google Cloud Run."
      problemStatement="Visually impaired individuals face daily challenges navigating physical environments without real-time contextual information. Existing assistive tools often provide limited scene understanding. IAN leverages multimodal AI to provide natural language descriptions of visual scenes in real-time."
      architectureDiagram={<PipelineDiagram label="Processing Pipeline" nodes={ianNodes} />}
      techStack={['Gemini 2.5 Vision', 'Google Cloud Run', 'Text-to-Speech', 'Python', 'REST API']}
      sections={[
        {
          title: 'Visual Assets',
          content: (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="accessibility" className="text-2xl text-gray-500" />
              </div>
              <p className="text-sm text-gray-400">Demo recording and accessibility testing screenshots coming soon.</p>
            </div>
          ),
        },
      ]}
      results={[
        { value: 'Real-Time', label: 'Scene description pipeline' },
        { value: 'Cloud Run', label: 'Serverless deployment' },
        { value: 'Multimodal', label: 'Vision + Language + Speech' },
        { value: 'Accessible', label: 'Designed for visually impaired users' },
      ]}
      whatILearned={[
        'Designing for accessibility-first rather than retrofitting — the entire architecture serves users with visual impairments.',
        'Using Gemini Vision for real-time scene understanding and converting visual data to natural language.',
        'Deploying latency-sensitive AI services on Cloud Run for auto-scaling serverless inference.',
        'TTS integration challenges — balancing response speed with natural-sounding spoken output.',
      ]}
      githubLink="https://github.com/azaynul10/ian-accessibility-agent"
    />
  );
}
