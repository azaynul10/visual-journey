import ProjectPageTemplate from '../components/ProjectPageTemplate';
import PipelineDiagram from '../components/PipelineDiagram';

const aqmsNodes = [
  { iconName: 'microchip', label: 'IoT Sensors', desc: 'PM2.5, CO, O₃', color: '#22c55e' },
  { iconName: 'wifi', label: 'Stream', desc: 'Cross-border', color: '#00e5ff' },
  { iconName: 'brain', label: 'ML Pipeline', desc: 'Random Forest', color: '#FF9900' },
  { iconName: 'chart-bar', label: 'AQI Output', desc: '89% accuracy', color: '#a855f7' },
  { iconName: 'robot', label: 'ADK Agent', desc: 'Google ADK', color: '#446CE3' },
];

export default function AirQualityPage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: 'Transnational Air Quality AI Agent | Zaynul Abedin Miah',
        description: 'IoT-driven Air Quality Monitoring with Google ADK multi-agent architecture and Random Forest ML predicting AQI at 89% accuracy.',
        canonicalPath: '/projects/transnational-air-quality-ai-agent',
      }}
      title="Transnational Air Quality AI Agent"
      subtitle="An IoT-driven Air Quality Monitoring System with cross-border data aggregation, powered by Google ADK multi-agent architecture and Random Forest ML."
      problemStatement="Air pollution doesn't respect borders. Existing monitoring systems are siloed within national boundaries. This project explores how IoT sensor networks combined with machine learning can provide real-time, transnational AQI predictions."
      architectureDiagram={<PipelineDiagram label="System Architecture" nodeWidth="w-24" nodes={aqmsNodes} />}
      techStack={['Google ADK', 'PyTorch', 'Random Forest', 'IoT', 'C++', 'Python']}
      results={[
        { value: '89%', label: 'AQI prediction accuracy' },
        { value: 'Multi-Agent', label: 'Google ADK architecture' },
        { value: 'Cross-Border', label: 'Transnational data aggregation' },
        { value: 'Real-Time', label: 'IoT sensor streaming' },
      ]}
      whatILearned={[
        'Designing IoT data pipelines that normalize heterogeneous sensor formats across regions.',
        'Feature engineering for environmental data — temporal patterns, spatial correlations.',
        'Building multi-agent systems with Google ADK where each agent has a specialized role.',
        'Challenges of cross-border data governance and policy-aware technical design.',
      ]}
      githubLink="https://github.com/azaynul10/adk-breathe-together"
      demoLink="https://youtu.be/P8x1D-2WdYw"
    />
  );
}
