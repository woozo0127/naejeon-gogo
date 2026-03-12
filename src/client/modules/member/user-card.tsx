import { Avatar, Badge } from '@naejeon-gogo/design';
import { Flame, Skull } from 'lucide-react';
import { POSITION_LABELS, type Position } from '#/client/modules/position';
import type { Streak } from './model';
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
    <div className={styles.cardRoot({ selected: selected || undefined })} onClick={onClick}>
      <Avatar size="sm" />
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{name}</span>
          {streak && streak.count >= 2 && (
            <Badge
              size="sm"
              bgColor="rgba(30, 45, 61, 1)"
              textColor={streak.type === 'win' ? '#0ACE83' : '#E84057'}
              icon={streak.type === 'win' ? <Flame size={9} /> : <Skull size={9} />}
            >
              {streak.count}연{streak.type === 'win' ? '승' : '패'}
            </Badge>
          )}
        </div>
      </div>
      <Badge
        size="sm"
        bgColor="rgba(30, 45, 61, 1)"
        textColor="#A09B8C"
        icon={<img src={`/images/roles/${mainPosition}.png`} width={14} height={14} alt="" />}
      >
        {POSITION_LABELS[mainPosition]}
      </Badge>
    </div>
  );
}
