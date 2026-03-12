import { Button, Dialog } from '@naejeon-gogo/design';
import { Check, Info, Shuffle, TriangleAlert } from 'lucide-react';
import { overlay } from 'overlay-kit';
import { useState } from 'react';
import { PageHeader } from '#/client/domains/_shared/components/page-header';
import { CandidateCard } from '#/client/domains/match/components/candidate-card';
import type { MatchCandidate } from '#/client/domains/match/model';
import type { Member } from '#/client/domains/member/model';
import type { Position } from '#/client/domains/position/model';
import * as styles from './match-step-candidates.css';

function openConfirmDialog(): Promise<boolean> {
  return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => (
    <Dialog
      open={isOpen}
      onOverlayClick={() => close(false)}
      onExited={unmount}
      header={
        <>
          <Dialog.Icon icon={TriangleAlert} variant="danger" />
          팀 구성을 확정하시겠습니까?
        </>
      }
      body="확정 후에는 선택한 팀 구성으로 내전이 시작됩니다. 이 작업은 되돌릴 수 없습니다."
      footer={
        <>
          <Button variant="secondary" onClick={() => close(false)}>
            취소
          </Button>
          <Button variant="primary" icon={Check} onClick={() => close(true)}>
            확정
          </Button>
        </>
      }
    />
  ));
}

type MatchStepCandidatesProps = {
  candidates: MatchCandidate[];
  members: Member[];
  onReshuffle: () => void;
  onConfirm: (candidate: MatchCandidate) => void;
  onSwap: (candidateIndex: number, positionA: Position, positionB: Position) => void;
  isPending: boolean;
};

export function MatchStepCandidates({
  candidates,
  members,
  onReshuffle,
  onConfirm,
  onSwap,
  isPending,
}: MatchStepCandidatesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleConfirm = async () => {
    const confirmed = await openConfirmDialog();
    if (confirmed) {
      onConfirm(candidates[selectedIndex]);
    }
  };

  return (
    <div className={styles.container}>
      <PageHeader
        title="내전 매칭"
        subtitle="매칭 후보군을 확인하고 팀을 구성하세요"
        right={
          <div className={styles.stepBadge}>
            <div className={styles.stepIndicator}>
              <div className={styles.stepDot} />
              <div className={styles.stepDotActive} />
              <div className={styles.stepDot} />
            </div>
            <span className={styles.stepLabel}>3개 후보군 중 1개를 선택하세요</span>
          </div>
        }
      />

      <div className={styles.candidateList}>
        {candidates.map((candidate, i) => (
          <CandidateCard
            key={i}
            index={i}
            candidate={candidate}
            members={members}
            selected={selectedIndex === i}
            onClick={() => setSelectedIndex(i)}
            onSwap={(posA, posB) => onSwap(i, posA, posB)}
          />
        ))}
      </div>

      <div className={styles.actionBar}>
        <div className={styles.leftInfo}>
          <Info size={16} style={{ color: '#5B5A56' }} />
          <span className={styles.infoText}>
            팀 구성에 동의하지 않으면 재추첨을 요청할 수 있습니다
          </span>
        </div>
        <div className={styles.rightButtons}>
          <Button variant="secondary" icon={Shuffle} onClick={onReshuffle}>
            재추첨
          </Button>
          <Button
            variant="primary"
            icon={Check}
            disabled={isPending}
            onClick={handleConfirm}
          >
            팀 구성 확정
          </Button>
        </div>
      </div>
    </div>
  );
}
