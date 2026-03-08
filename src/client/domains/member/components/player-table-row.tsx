import { Flame, Skull } from 'lucide-react';
import { POSITION_LABELS } from '#/client/domains/position/model';
import type { Member } from '#/client/domains/member/model';
import * as styles from './player-table-row.css';

type PlayerTableRowProps = {
  member: Member;
  stats: {
    win: number;
    lose: number;
    winRate: string;
    kda: string;
    games: number;
  };
};

function getStreakStyle(streak: Member['streak']) {
  if (!streak || streak.count < 2) return {};
  if (streak.type === 'win') {
    return { boxShadow: `0 0 ${Math.min(streak.count * 4, 12)}px #0ACE8325` };
  }
  return { boxShadow: `0 0 ${Math.min(streak.count * 4, 12)}px #E8405725` };
}

export function PlayerTableRow({ member, stats }: PlayerTableRowProps) {
  return (
    <div className={styles.row} style={getStreakStyle(member.streak)}>
      <div className={styles.nameSection}>
        <span className={styles.nameText}>{member.name}</span>
        {member.streak && member.streak.count >= 2 && (
          <span
            className={styles.streakBadge}
            style={{
              backgroundColor: member.streak.type === 'win' ? '#1A3C28' : '#3C1418',
              color: member.streak.type === 'win' ? '#0ACE83' : '#E84057',
            }}
          >
            {member.streak.type === 'win' ? <Flame size={10} /> : <Skull size={10} />}
            {member.streak.count}연{member.streak.type === 'win' ? '승' : '패'}
          </span>
        )}
      </div>
      <div className={styles.positionSection}>
        <span className={styles.positionBadge}>
          <img src={`/images/roles/${member.mainPosition}.png`} width={14} height={14} alt="" />
          {POSITION_LABELS[member.mainPosition]}
        </span>
      </div>
      <span className={styles.cell} style={{ width: 80 }}>{member.mmr.toLocaleString()}</span>
      <span className={styles.cell} style={{ width: 60, color: '#0ACE83' }}>{stats.win}</span>
      <span className={styles.cell} style={{ width: 60, color: '#E84057' }}>{stats.lose}</span>
      <span
        className={styles.cell}
        style={{
          width: 100,
          fontWeight: '600',
          color: Number.parseFloat(stats.winRate) >= 50 ? '#0ACE83' : '#E84057',
        }}
      >
        {stats.winRate}
      </span>
      <span className={styles.cell} style={{ width: 100 }}>{stats.kda}</span>
      <span className={styles.cell} style={{ width: 80 }}>{stats.games}</span>
      <div className={styles.subPositions} style={{ flex: 1 }}>
        {member.subPositions.map((pos) => (
          <span key={pos} className={styles.subPosBadge}>
            <img src={`/images/roles/${pos}.png`} width={9} height={9} alt="" />
            {POSITION_LABELS[pos]}
          </span>
        ))}
      </div>
    </div>
  );
}
