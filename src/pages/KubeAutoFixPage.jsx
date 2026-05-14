import React from 'react';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

/* Lightweight JSX architecture diagram — no fake screenshots */
function KubeAutoFixDiagram() {
  const stages = [
    { icon: 'fa-rocket', label: 'Deploy', desc: 'Apply K8s manifests', color: '#446CE3' },
    { icon: 'fa-eye', label: 'Monitor', desc: 'Watch pod health & events', color: '#00e5ff' },
    { icon: 'fa-brain', label: 'Diagnose', desc: 'GPT-4o Structured Outputs', color: '#FF9900' },
    { icon: 'fa-shield-halved', label: 'Validate', desc: 'Pydantic guardrails', color: '#a855f7' },
    { icon: 'fa-wrench', label: 'Repair', desc: 'Namespace-isolated fix', color: '#22c55e' },
    { icon: 'fa-chart-line', label: 'Observe', desc: 'MLflow experiment log', color: '#ef4444' },
  ];

  return (
    <div>
      <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-widest">Closed-Loop Autonomous Cycle</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col items-center text-center w-24">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 border"
                style={{ backgroundColor: `${stage.color}15`, borderColor: `${stage.color}30` }}
              >
                <i className={`fas ${stage.icon} text-lg`} style={{ color: stage.color }}></i>
              </div>
              <span className="text-xs font-bold text-white">{stage.label}</span>
              <span className="text-[10px] text-gray-500 leading-tight mt-0.5">{stage.desc}</span>
            </div>
            {i < stages.length - 1 && (
              <i className="fas fa-chevron-right text-white/15 text-xs mx-1"></i>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
          <i className="fas fa-rotate-right text-[#446CE3]"></i>
          <span>Loop repeats autonomously</span>
        </div>
      </div>
    </div>
  );
}

export default function KubeAutoFixPage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: 'Kube-AutoFix: Autonomous K8s SRE Agent | Zaynul Abedin Miah',
        description: 'An autonomous Kubernetes SRE agent prototype that monitors, diagnoses, and self-heals clusters using GPT-4o Structured Outputs with Pydantic validation guardrails and MLflow observability.',
        canonicalPath: '/projects/kube-autofix-autonomous-kubernetes-sre-agent',
      }}
      title="Kube-AutoFix: Autonomous Kubernetes SRE Agent"
      subtitle="An autonomous Kubernetes SRE agent prototype that monitors, diagnoses, and self-heals clusters using GPT-4o Structured Outputs with validation guardrails and Databricks-aligned MLflow observability."
      problemStatement="Manual Kubernetes debugging is slow and error-prone. When pods crash or services degrade, SRE teams spend significant time gathering logs, interpreting error states, and applying fixes — often under pressure. Kube-AutoFix explores how an AI agent can automate this cycle with structural safety controls."
      architectureDiagram={<KubeAutoFixDiagram />}
      techStack={[
        'OpenAI GPT-4o',
        'Structured Outputs',
        'Pydantic',
        'Kubernetes',
        'Python',
        'MLflow',
        'Databricks',
        'YAML',
      ]}
      sections={[
        {
          title: 'How It Works',
          content: (
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p><strong className="text-white">Deploy:</strong> The agent applies Kubernetes manifests to a target cluster or namespace.</p>
              <p><strong className="text-white">Monitor:</strong> It watches pod status, events, and container logs for anomalies (CrashLoopBackOff, ImagePullBackOff, OOMKilled, etc.).</p>
              <p><strong className="text-white">Diagnose:</strong> When failures are detected, the agent sends structured context to GPT-4o using OpenAI Structured Outputs to generate a typed remediation plan.</p>
              <p><strong className="text-white">Validate:</strong> Every proposed mutation passes through Pydantic validation guardrails. Only whitelisted resource kinds (Deployment, Service) are allowed. Hallucinated or unsafe mutations are rejected before execution.</p>
              <p><strong className="text-white">Repair:</strong> Validated fixes are applied within namespace isolation to reduce risk of collateral changes.</p>
              <p><strong className="text-white">Observe:</strong> Each cycle is logged to MLflow for experiment tracking, enabling Databricks-aligned observability of agent decisions over time.</p>
            </div>
          ),
        },
        {
          title: 'Visual Assets',
          content: (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-terminal text-2xl text-gray-500"></i>
              </div>
              <p className="text-sm text-gray-400">Demo terminal recording and architecture screenshots coming soon.</p>
              <p className="text-xs text-gray-500 mt-2">Check the GitHub repository for the latest code and documentation.</p>
            </div>
          ),
        },
      ]}
      results={[
        { value: 'PR #2659', label: 'OpenAI Cookbook — Codex-reviewed' },
        { value: 'Autonomous', label: 'Closed-loop debug cycle' },
        { value: 'Pydantic', label: 'Typed validation guardrails' },
        { value: 'MLflow', label: 'Databricks-aligned observability' },
      ]}
      whatILearned={[
        'Designing deny-by-default validation for LLM-generated Kubernetes manifests to prevent hallucinated resource mutations.',
        'Using OpenAI Structured Outputs to enforce typed response schemas at inference time, eliminating post-hoc parsing failures.',
        'Building MLflow experiment tracking into an agent loop for Databricks-aligned observability of autonomous decisions.',
        'The importance of namespace isolation as a risk-reduction boundary when an AI agent applies changes to live clusters.',
        'How to structure an OpenAI Cookbook contribution that passes Codex review — focusing on reproducibility, safety, and clear documentation.',
      ]}
      githubLink="https://github.com/azaynul10/kube-autofix"
      articleLink="https://github.com/openai/openai-cookbook/pull/2659"
    />
  );
}
