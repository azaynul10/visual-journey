import React from 'react';
import Icon from './Icon';

/**
 * PipelineDiagram — horizontal flow of icon "nodes" separated by chevrons.
 * Shared across project pages (architecture / processing / observability diagrams).
 *
 * @param {string} label - Small uppercase caption above the flow.
 * @param {Array<{iconName: string, label: string, desc: string, color: string}>} nodes
 * @param {string} [nodeWidth] - Tailwind width utility for each node (e.g. 'w-24').
 * @param {string} [gap] - Tailwind gap utility for the flow container.
 * @param {string} [chevronClassName] - Classes for the separator chevron icon.
 * @param {string} [descClassName] - Classes for the node description text.
 */
export default function PipelineDiagram({
  label,
  nodes = [],
  nodeWidth = 'w-28',
  gap = 'gap-2',
  chevronClassName = 'text-white/15 text-xs',
  descClassName = 'text-[10px] text-gray-500 mt-0.5',
}) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-widest">{label}</p>
      <div className={`flex flex-wrap items-center justify-center ${gap}`}>
        {nodes.map((n, i) => (
          <React.Fragment key={i}>
            <div className={`flex flex-col items-center text-center ${nodeWidth}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 border"
                style={{ backgroundColor: `${n.color}15`, borderColor: `${n.color}30` }}
              >
                <Icon name={n.iconName} className="text-lg" style={{ color: n.color }} />
              </div>
              <span className="text-xs font-bold text-white">{n.label}</span>
              <span className={descClassName}>{n.desc}</span>
            </div>
            {i < nodes.length - 1 && <Icon name="chevron-right" className={chevronClassName} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
