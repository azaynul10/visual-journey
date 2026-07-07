import ProjectPageTemplate from '../components/ProjectPageTemplate';
import PipelineDiagram from '../components/PipelineDiagram';
import Icon from '../components/Icon';

const mlflowNodes = [
  { iconName: 'robot', label: 'Agent Action', desc: 'K8s fix attempt', color: '#446CE3' },
  { iconName: 'database', label: 'MLflow Log', desc: 'Params, metrics, artifacts', color: '#FF9900' },
  { iconName: 'chart-bar', label: 'Dashboard', desc: 'Compare runs & drift', color: '#a855f7' },
  { iconName: 'search', label: 'Analysis', desc: 'Success rate, latency', color: '#22c55e' },
];

export default function MLflowObservabilityPage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: 'MLflow Agent Observability on Databricks | Zaynul Abedin Miah',
        description: 'Focused observability extension of Kube-AutoFix: MLflow experiment tracking for autonomous AI agent decisions on Databricks.',
        canonicalPath: '/projects/mlflow-agent-observability-databricks',
      }}
      title="MLflow Agent Observability on Databricks"
      subtitle="A focused observability extension of Kube-AutoFix — tracking AI agent decisions, remediation outcomes, and drift analysis with MLflow on Databricks."
      notice="This is a focused observability extension of Kube-AutoFix, not a separate standalone repository. All code lives in the Kube-AutoFix repo."
      problemStatement="When an AI agent autonomously modifies infrastructure, you need to observe and audit every decision it makes. Without structured experiment tracking, it's impossible to evaluate whether the agent is improving, drifting, or causing regressions. MLflow provides the observability layer that makes autonomous agent behavior auditable."
      architectureDiagram={
        <PipelineDiagram
          label="Observability Pipeline"
          nodes={mlflowNodes}
          gap="gap-1"
          chevronClassName="text-white/15 text-xs mx-1"
          descClassName="text-[10px] text-gray-500 leading-tight mt-0.5"
        />
      }
      techStack={[
        'MLflow',
        'Databricks',
        'Python',
        'OpenAI GPT-4o',
        'Kubernetes',
        'Pydantic',
      ]}
      sections={[
        {
          title: 'What Gets Tracked',
          content: (
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p><strong className="text-white">Parameters:</strong> Agent configuration — model version, temperature, max retries, target namespace, and validation mode.</p>
              <p><strong className="text-white">Metrics:</strong> Fix success rate, diagnosis latency, validation pass/fail ratio, and iteration count per healing cycle.</p>
              <p><strong className="text-white">Artifacts:</strong> Raw GPT-4o responses, generated YAML patches, Pydantic validation reports, and pod event snapshots.</p>
              <p><strong className="text-white">Run Comparison:</strong> Compare agent performance across different model versions, prompt strategies, or cluster configurations.</p>
            </div>
          ),
        },
        {
          title: 'Visual Assets',
          content: (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="chart-line" className="text-2xl text-gray-500" />
              </div>
              <p className="text-sm text-gray-400">MLflow dashboard screenshots and comparison charts coming soon.</p>
              <p className="text-xs text-gray-500 mt-2">Check the Kube-AutoFix repository for the latest observability code.</p>
            </div>
          ),
        },
      ]}
      results={[
        { value: 'MLflow', label: 'Full experiment tracking integration' },
        { value: 'Databricks', label: 'Aligned observability workflow' },
        { value: 'Auditable', label: 'Every agent decision logged' },
        { value: 'Comparable', label: 'Cross-run performance analysis' },
      ]}
      whatILearned={[
        'How to instrument an autonomous agent loop with MLflow to create an auditable decision trail.',
        'The difference between tracking model training metrics versus agent action metrics — agent observability requires logging decisions, not just loss curves.',
        'Setting up MLflow on Databricks for collaborative experiment review across team members.',
        'Why observability is a prerequisite for trust in autonomous AI systems — you cannot deploy what you cannot audit.',
      ]}
      githubLink="https://github.com/azaynul10/kube-autofix"
    />
  );
}
