import { DndContext, type DragEndEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import { Avatar, Badge } from '@naejeon-gogo/design';
import { Flame, GripVertical, Skull } from 'lucide-react';
import type { MatchCandidate } from './model';
import type { Member } from '#/client/modules/member';
import { POSITION_LABELS, type Position } from '#/client/modules/position';
import * as styles from './candidate-card.css';

type DragData = { team: 'A' | 'B'; position: Position };

type CandidateCardProps = {
  index: number;
  candidate: MatchCandidate;
  members: Member[];
  selected: boolean;
  onClick: () => void;
  onSwap: (positionA: Position, positionB: Position) => void;
};

export function CandidateCard({
  index,
  candidate,
  members,
  selected,
  onClick,
  onSwap,
}: CandidateCardProps) {
  const memberMap = new Map(members.map((m) => [m.id, m]));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data.current as DragData;
    const overData = over.data.current as DragData;

    if (activeData.team !== overData.team) {
      const posA = activeData.team === 'A' ? activeData.position : overData.position;
      const posB = activeData.team === 'B' ? activeData.position : overData.position;
      onSwap(posA, posB);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.cardRoot({ selected: selected || undefined })} onClick={onClick}>
        <div className={styles.cardHeader({ selected })}>
          <div className={styles.headerLeft}>
            <div className={styles.numCircle({ selected })}>{index + 1}</div>
            <span className={styles.titleText({ selected })}>후보군 {index + 1}</span>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.selLabel}>이 팀 구성 선택</span>
            <div className={styles.radioBtn({ selected })}>
              {selected && <div className={styles.radioDot} />}
            </div>
          </div>
        </div>

        <div className={styles.teamsRow}>
          <div className={styles.teamSection}>
            <div className={styles.teamHeader}>
              <div className={styles.teamDot} style={{ backgroundColor: '#0AC8B9' }} />
              <span className={styles.teamLabel} style={{ color: '#0AC8B9' }}>
                블루팀
              </span>
            </div>
            {candidate.teamA.map((slot) => (
              <DraggablePlayerSlot
                key={slot.memberId}
                id={`${index}-A-${slot.position}`}
                team="A"
                member={memberMap.get(slot.memberId)}
                position={slot.position}
              />
            ))}
          </div>

          <div className={styles.teamsDivider} />

          <div className={styles.teamSection}>
            <div className={styles.teamHeader}>
              <div className={styles.teamDot} style={{ backgroundColor: '#E84057' }} />
              <span className={styles.teamLabel} style={{ color: '#E84057' }}>
                레드팀
              </span>
            </div>
            {candidate.teamB.map((slot) => (
              <DraggablePlayerSlot
                key={slot.memberId}
                id={`${index}-B-${slot.position}`}
                team="B"
                member={memberMap.get(slot.memberId)}
                position={slot.position}
              />
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
}

function DraggablePlayerSlot({
  id,
  team,
  member,
  position,
}: {
  id: string;
  team: 'A' | 'B';
  member: Member | undefined;
  position: Position;
}) {
  const dragData: DragData = { team, position };

  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable({ id, data: dragData });

  const { setNodeRef: setDropRef, isOver } = useDroppable({ id, data: dragData });

  if (!member) return null;

  const streak = member.streak;
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)`, opacity: isDragging ? 0.5 : 1 }
    : undefined;

  return (
    <div
      ref={(node) => {
        setDragRef(node);
        setDropRef(node);
      }}
      className={styles.playerRow}
      style={{
        ...style,
        ...(isOver
          ? { backgroundColor: 'rgba(200, 170, 110, 0.25)', boxShadow: 'inset 0 0 0 1px #C8AA6E' }
          : undefined),
        borderRadius: '4px',
        padding: '4px 6px',
      }}
    >
      <div className={styles.dragHandle} {...attributes} {...listeners}>
        <GripVertical size={14} />
      </div>
      <Avatar size="sm" />
      <div className={styles.playerInfo}>
        <span className={styles.playerName}>{member.name}</span>
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
      <Badge
        size="sm"
        bgColor="rgba(30, 45, 61, 1)"
        textColor="#A09B8C"
        icon={<img src={`/images/roles/${position}.png`} width={14} height={14} alt="" />}
      >
        {POSITION_LABELS[position]}
      </Badge>
    </div>
  );
}
