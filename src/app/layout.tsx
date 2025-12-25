import type { Metadata } from 'next';
import './globals.css';
import { ThemeToggle } from './theme-toggle';

export const metadata: Metadata = {
  title: 'Muflyw Starter',
  description: 'Next.js 14+ starter with theming tokens and CI-ready config.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <div className="stack" style={{ gap: 'var(--space-lg)' }}>
            <header className="stack" style={{ gap: 'var(--space-sm)' }}>
              <div className="stack" style={{ gap: 'var(--space-2xs)' }}>
                <p className="badge">Starter</p>
                <h1 style={{ fontSize: '2.5rem' }}>Muflyw</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Next.js App Router baseline with light/dark tokens and white-label-ready CSS
                  variables.
                </p>
              </div>
              <ThemeToggle />
            </header>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
