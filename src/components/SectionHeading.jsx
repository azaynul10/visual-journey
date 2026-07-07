/**
 * SectionHeading — section title preceded by a colored accent bar.
 * Shared across project, community, and speaking pages.
 *
 * @param {string} bar - Tailwind background utility for the accent bar (e.g. 'bg-[#FF9900]').
 * @param {React.ElementType} [as] - Heading tag to render (defaults to 'h2').
 * @param {string} [className] - Classes for the heading element.
 * @param {React.ReactNode} children - Heading text.
 */
export default function SectionHeading({
  bar,
  as: Tag = 'h2',
  className = 'text-xl font-bold mb-4 flex items-center gap-3',
  children,
  ...rest
}) {
  return (
    <Tag className={className} {...rest}>
      <span className={`w-1.5 h-6 ${bar} rounded-full`} aria-hidden="true" />
      {children}
    </Tag>
  );
}
