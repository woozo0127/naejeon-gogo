import type { TeamSide } from '#/client/domains/position/model';
import * as styles from './match-history-row.css';

type MatchHistoryRowProps = {
  date: string;
  winner: TeamSide;
  blueTeamNames: string[];
  redTeamNames: string[];
  duration: string;
  even?: boolean;
};

export function MatchHistoryRow({
  date,
  winner,
  blueTeamNames,
  redTeamNames,
  duration,
  even,
}: MatchHistoryRowProps) {
  const isBlueWin = winner === 'A';

  return (
    <div className={styles.row} style={{ backgroundColor: even ? '#0F1923' : undefined }}>
      <span className={styles.dateText}>{date}</span>
      <div className={styles.resultWrapper}>
        <span
          className={styles.resultBadge}
          style={{
            backgroundColor: isBlueWin ? '#0A3C28' : '#3C1418',
            color: isBlueWin ? '#0ACE83' : '#E84057',
          }}
        >
          {isBlueWin ? '블루 승' : '레드 승'}
        </span>
      </div>
      <span
        className={styles.teamText}
        style={{
          color: isBlueWin ? '#0AC8B9' : '#5B5A56',
          fontWeight: isBlueWin ? '600' : 'normal',
        }}
      >
        {blueTeamNames.join(', ')}
      </span>
      <span
        className={styles.teamText}
        style={{
          color: isBlueWin ? '#5B5A56' : '#E84057',
          fontWeight: isBlueWin ? 'normal' : '600',
        }}
      >
        {redTeamNames.join(', ')}
      </span>
      <span className={styles.durationText}>{duration}</span>
    </div>
  );
}
