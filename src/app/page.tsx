const tokens = [
  { name: '--brand-primary', description: 'Primary brand color', swatch: 'var(--brand-primary)' },
  {
    name: '--brand-surface',
    description: 'Background surface for cards and layouts',
    swatch: 'var(--brand-surface)',
    outline: true,
  },
  { name: '--color-text', description: 'Primary text color', swatch: 'var(--brand-text)', outline: true },
  { name: '--color-accent', description: 'Accent color for highlights', swatch: 'var(--color-accent)' },
  { name: '--color-danger', description: 'Destructive states', swatch: 'var(--color-danger)' },
];

export default function HomePage() {
  return (
    <div className="stack">
      <section className="card stack">
        <div className="stack">
          <h2>Design tokens</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Global CSS variables support light/dark themes and can be overridden for white-label
            deployments via <code>:root</code> or scoped data attributes.
          </p>
        </div>
        <div className="tokens-grid">
          {tokens.map((token) => (
            <div key={token.name} className="token-swatch">
              <span
                className="swatch"
                style={{
                  background: token.swatch,
                  border: token.outline ? `1px solid var(--brand-border)` : 'none',
                }}
              />
              <div className="meta">
                <strong style={{ fontFamily: 'ui-monospace, SFMono-Regular, SFMono-Regular' }}>
                  {token.name}
                </strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  {token.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card stack">
        <div className="stack">
          <h2>White-label ready</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Swap out <code>--brand-*</code> tokens via a per-tenant attribute (e.g.
            <code>data-brand</code>) or a custom stylesheet to align visuals without touching
            components.
          </p>
        </div>
        <div className="stack" style={{ gap: 'var(--space-sm)' }}>
          <button className="button" type="button">
            Primary CTA
          </button>
          <button className="button secondary" type="button">
            Secondary action
          </button>
        </div>
      </section>
    </div>
  );
}
