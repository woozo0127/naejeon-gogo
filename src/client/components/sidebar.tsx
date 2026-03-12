import { Link, useMatchRoute } from '@tanstack/react-router';
import { ScrollText, Swords, Users } from 'lucide-react';
import * as styles from './sidebar.css';

const NAV_ITEMS = [
  { to: '/', label: '내전', icon: Swords },
  { to: '/members', label: '사용자', icon: Users },
  { to: '/history', label: '전적', icon: ScrollText },
] as const;

export function Sidebar() {
  const matchRoute = useMatchRoute();

  return (
    <nav className={styles.sidebarRoot}>
      <div className={styles.logoSection}>
        <img src="/images/logo.png" alt="내전고고 로고" className={styles.logoImage} />
        <span className={styles.logoText}>내전고고</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.navSection}>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
          const isActive =
            matchRoute({ to, fuzzy: to !== '/' }) !== false ||
            (to === '/' && matchRoute({ to: '/' }) !== false);
          return (
            <Link key={to} to={to} className={styles.navItem({ active: isActive || undefined })}>
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
