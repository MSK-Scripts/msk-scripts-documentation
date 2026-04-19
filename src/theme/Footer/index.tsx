import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

const columns = [
  {
    title: 'Resources',
    links: [
      { label: 'Discord Ticketbot', to: '/docs/discord_ticketbot/getting-started' },
      { label: 'MSK Core', to: '/docs/msk_core/getting-started' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Tebex', to: 'https://www.msk-scripts.de' },
      { label: 'GitHub', to: 'https://github.com/MSK-Scripts' },
      { label: 'Discord', to: 'https://discord.gg/5hHSBRHvJE' },
    ],
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            <img
              src="/img/logo.png"
              alt="MSK Scripts Logo"
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>MSK Scripts Documentation</span>
          </Link>
          <p className={styles.brandTagline}>
            Documentation for MSK Scripts resources.
          </p>
          <div className={styles.brandBadge}>Official</div>
        </div>

        {/* Link Columns */}
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <p className={styles.columnTitle}>{col.title}</p>
              <ul className={styles.columnList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link className={styles.columnLink} to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} MSK Scripts. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          This is an official documentation site by MSK Scripts.
        </p>
      </div>
    </footer>
  );
}
