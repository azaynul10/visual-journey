import React from 'react';
import ProjectPageTemplate from '../components/ProjectPageTemplate';
import Icon from '../components/Icon';

function ArchDiagram() {
  const stages = [
    { iconName: 'rocket', label: 'Deploy', desc: 'Apply K8s manifests', color: '#446CE3' },
    { iconName: 'eye', label: 'Monitor', desc: 'Watch pod health & events', color: '#00e5ff' },
    { iconName: 'brain', label: 'Diagnose', desc: 'GPT-4o Structured Outputs', color: '#FF9900' },
    { iconName: 'shield', label: 'Validate', desc: 'Pydantic guardrails', color: '#a855f7' },
    { iconName: 'wrench', label: 'Repair', desc: 'Namespace-isolated fix', color: '#22c55e' },
    { iconName: 'chart-line', label: 'Observe', desc: 'MLflow experiment log', color: '#ef4444' },
  ];

  return (
    <figure className="glass-card p-6 border border-white/5 bg-white/[0.01]">
      <figcaption className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 flex justify-between items-center">
        <span>Autonomous Healing Loop</span>
        <div className="flex items-center gap-3 text-xs normal-case font-normal text-gray-500">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00e5ff]"></span> Observation</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FF9900]"></span> LLM Core</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#a855f7]"></span> Guardrails</div>
        </div>
      </figcaption>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {stages.map((stage, i) => (
          <React.Fragment key={i}>
            <div 
              className="flex flex-col items-center text-center w-28 motion-safe:animate-pulse"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 border"
                style={{ backgroundColor: `${stage.color}15`, borderColor: `${stage.color}30` }}>
                <Icon name={stage.iconName} className="text-2xl" style={{ color: stage.color }} />
              </div>
              <span className="text-sm font-bold text-white mb-1">{stage.label}</span>
              <span className="text-xs text-gray-400 leading-tight">{stage.desc}</span>
            </div>
            {i < stages.length - 1 && (
              <Icon name="arrow-right" className="text-gray-600 text-lg mx-2 shrink-0" aria-label="flows into" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="flex items-center justify-center mt-8 pt-4 border-t border-white/5 gap-3">
        <Icon name="rotate" className="text-[#446CE3] text-lg motion-safe:animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true" />
        <span className="text-sm text-gray-300 font-medium">Closed-loop architecture: automatically re-enters <strong className="text-[#00e5ff]">Monitor</strong> state after every fix attempt.</span>
      </div>
    </figure>
  );
}

export default function KubeAutoFixPage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: 'Kube-AutoFix: Autonomous Kubernetes SRE Agent | Zaynul Abedin Miah',
        description: 'Kube-AutoFix is a closed-loop autonomous Kubernetes debugging and self-healing agent using GPT-4o Structured Outputs, Pydantic validation, and MLflow experiment tracking.',
        canonicalPath: '/projects/kube-autofix-autonomous-kubernetes-sre-agent',
      }}
      title="Kube-AutoFix: Autonomous Kubernetes SRE Agent"
      subtitle="A closed-loop autonomous agent that monitors, diagnoses, and self-heals Kubernetes clusters using GPT-4o Structured Outputs with deny-by-default validation guardrails."
      problemStatement="Kubernetes misconfiguration is the #1 cause of outages in cloud-native environments. Traditional debugging requires manual log analysis, which is slow and error-prone. Kube-AutoFix automates the entire lifecycle: detect → diagnose → propose fix → validate → apply — without human intervention."
      architectureDiagram={<ArchDiagram />}
      techStack={[
        'OpenAI GPT-4o',
        'Kubernetes',
        'Python',
        'Pydantic',
        'MLflow',
        'YAML',
        'Structured Outputs',
      ]}
      sections={[
        {
          title: 'Key Innovation: Deny-by-Default Validation',
          content: (
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p><strong className="text-white">Problem:</strong> LLMs hallucinate YAML. If an AI agent generates a Kubernetes manifest with an invalid Kind, missing namespace, or privilege escalation, deploying it could destroy your cluster.</p>
              <p><strong className="text-white">Solution:</strong> Every proposed mutation passes through a Pydantic validation pipeline that enforces structural invariants <em>before</em> any kubectl apply. The agent operates on a deny-by-default policy — if the fix doesn't pass every check, it is rejected and the agent re-diagnoses.</p>
              <p><strong className="text-white">Result:</strong> Zero unvalidated changes reach the cluster. The agent reduces risk of cascading failures from LLM hallucinations.</p>
            </div>
          ),
        },
        {
          title: 'Latest Release',
          content: (
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>
                <a href="https://github.com/azaynul10/kube-autofix/releases/tag/v0.1.0" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline font-medium inline-flex items-center gap-2">
                  <Icon name="github" className="text-sm" /> Kube-AutoFix v0.1.0 release: MLflow observability for autonomous Kubernetes SRE agent runs.
                </a>
              </p>
            </div>
          ),
        },
        {
          title: 'Visual Assets',
          content: (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="terminal" className="text-2xl text-gray-500" />
              </div>
              <p className="text-sm text-gray-400">Architecture diagram and terminal screenshots coming soon.</p>
              <p className="text-xs text-gray-500 mt-2">Check the GitHub repository for the latest code and documentation.</p>
            </div>
          ),
        },
      ]}
      results={[
        { value: '100%', label: 'Mutation validation coverage' },
        { value: '< 30s', label: 'Average diagnosis-to-fix cycle' },
        { value: '0', label: 'Unvalidated changes deployed' },
        { value: 'MLflow', label: 'Full experiment tracking integration' },
      ]}
      whatILearned={[
        'How to use OpenAI Structured Outputs with response_format to enforce JSON schema compliance — not just prompt engineering, but actual compile-time guarantees on LLM output shape.',
        'Building a deny-by-default security model for AI-generated infrastructure changes — the importance of never trusting LLM output without structural validation.',
        'Designing autonomous agent loops that balance speed with safety: every cycle must include diagnosis, proposal, validation, and rollback capability.',
        'Integrating MLflow experiment tracking to log every agent decision — transforming opaque AI behavior into auditable, comparable experiment runs.',
      ]}
      githubLink="https://github.com/azaynul10/kube-autofix"
      articleLink="https://github.com/openai/openai-cookbook/pull/2659"
      articleLabel="View Cookbook PR (under review)"
    />
  );
}
