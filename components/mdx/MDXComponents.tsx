/* eslint-disable @typescript-eslint/no-explicit-any */

export const mdxComponents: Record<string, (props: any) => React.ReactNode> = {
  h1: (props: any) => (
    <h1
      className="gradient-text mb-6 font-serif text-4xl leading-tight tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="gradient-text mb-4 mt-12 font-serif text-2xl leading-snug tracking-tight"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mb-3 mt-8 font-serif text-xl leading-snug tracking-tight"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-loose text-text" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-text" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-text" {...props} />
  ),
  li: (props: any) => <li className="leading-normal" {...props} />,
  a: (props: any) => (
    <a
      className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors duration-[var(--duration-default)] hover:decoration-accent"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-2 border-stone-300 pl-4 italic text-muted"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-stone-800 p-4 font-mono text-sm text-stone-100"
      {...props}
    />
  ),
  hr: () => <hr className="hairline-fade my-12" />,
};
