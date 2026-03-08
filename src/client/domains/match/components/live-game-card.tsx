import * as styles from './live-game-card.css';

type LiveGameCardProps = {
  elapsedTime: string;
  bluePlayers: string[];
  redPlayers: string[];
};

export function LiveGameCard({ elapsedTime, bluePlayers, redPlayers }: LiveGameCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.gradientBorder} />
      <div className={styles.cardInner}>
        <div className={styles.liveHeader}>
          <div className={styles.liveHeaderLeft}>
            <div className={styles.liveDot} />
            <span className={styles.liveLabel}>진행 중인 게임</span>
          </div>
          <span className={styles.timeLabel}>{elapsedTime}</span>
        </div>
        <div className={styles.teamsRow}>
          <div
            className={styles.teamBox}
            style={{ backgroundColor: '#0D1B2A', border: '1px solid #0AC8B930' }}
          >
            <span className={styles.teamHeader} style={{ color: '#0AC8B9' }}>블루팀</span>
            <span className={styles.teamPlayers} style={{ color: '#0AC8B9' }}>
              {bluePlayers.join('\n')}
            </span>
          </div>
          <span className={styles.vsText}>VS</span>
          <div
            className={styles.teamBox}
            style={{ backgroundColor: '#1C0D18', border: '1px solid #E8405730' }}
          >
            <span className={styles.teamHeader} style={{ color: '#E84057', textAlign: 'right' }}>
              레드팀
            </span>
            <span className={styles.teamPlayers} style={{ color: '#E84057', textAlign: 'right' }}>
              {redPlayers.join('\n')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
