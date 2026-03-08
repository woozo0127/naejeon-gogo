import { Flame, Skull } from 'lucide-react';
import { Avatar, Badge } from '@naejeon-gogo/design';
import { POSITION_LABELS, type Position } from '#/client/domains/position/model';
import type { Streak } from '#/client/domains/member/model';
import * as styles from './user-card.css';

type UserCardProps = {
  name: string;
  mainPosition: Position;
  streak: Streak | null;
  selected?: boolean;
  onClick?: () => void;
};

export function UserCard({ name, mainPosition, streak, selected, onClick }: UserCardProps) {
  return (
    <div
      className={styles.cardRoot({ selected: selected || undefined })}
      onClick={onClick}
    >
      <Avatar size="sm" />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {streak && streak.count >= 2 && (
          <span
            className={styles.streakBadge}
            style={{ color: streak.type === 'win' ? '#0ACE83' : '#E84057' }}
          >
            {streak.type === 'win' ? <Flame size={12} /> : <Skull size={12} />}
            {streak.count}연{streak.type === 'win' ? '승' : '패'}
          </span>
        )}
      </div>
      <Badge
        size="sm"
        bgColor="rgba(30, 45, 61, 1)"
        textColor="#A09B8C"
        icon={<img src={`/images/roles/${mainPosition}.png`} width={12} height={12} alt="" />}
      >
        {POSITION_LABELS[mainPosition]}
      </Badge>
    </div>
  );
}
