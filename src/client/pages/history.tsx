import { Button, Dialog } from '@naejeon-gogo/design';
import { ScrollText, TriangleAlert } from 'lucide-react';
import { overlay } from 'overlay-kit';
import { useMemo } from 'react';
import { Card } from '#/client/components/card';
import { DataTable } from '#/client/components/data-table';
import { PageHeader } from '#/client/components/page-header';
import {
  LiveGameCard,
  MatchHistoryRow,
  useCancelMatch,
  useCompleteMatch,
  useMatches,
} from '#/client/modules/match';
import type { TeamSide } from '#/client/modules/position';
import { useMembers } from '#/client/modules/member';
import * as styles from './history.css';

function openWinConfirmDialog(teamLabel: string): Promise<boolean> {
  return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => (
    <Dialog
      open={isOpen}
      onOverlayClick={() => close(false)}
      onExited={unmount}
      header={
        <>
          <Dialog.Icon icon={TriangleAlert} variant="danger" />
          {teamLabel} 승리로 기록하시겠습니까?
        </>
      }
      body="확정 후 각 팀원의 MMR이 변동됩니다. 이 작업은 되돌릴 수 없습니다."
      footer={
        <>
          <Button variant="secondary" onClick={() => close(false)}>
            취소
          </Button>
          <Button variant="primary" onClick={() => close(true)}>
            확정
          </Button>
        </>
      }
    />
  ));
}

function openCancelConfirmDialog(): Promise<boolean> {
  return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => (
    <Dialog
      open={isOpen}
      onOverlayClick={() => close(false)}
      onExited={unmount}
      header={
        <>
          <Dialog.Icon icon={TriangleAlert} variant="danger" />
          경기를 취소하시겠습니까?
        </>
      }
      body="취소된 경기는 기록에서 완전히 삭제됩니다."
      footer={
        <>
          <Button variant="secondary" onClick={() => close(false)}>
            돌아가기
          </Button>
          <Button variant="danger" onClick={() => close(true)}>
            경기 취소
          </Button>
        </>
      }
    />
  ));
}

const HISTORY_COLUMNS = [
  { label: '날짜', width: 100 as const },
  { label: '승리팀', width: 80 as const },
  { label: '블루팀', width: 'fill' as const, color: '#0AC8B9' },
  { label: '레드팀', width: 'fill' as const, color: '#E84057' },
  { label: '시간', width: 60 as const, align: 'right' as const },
];

export function HistoryPage() {
  const { data: matches } = useMatches();
  const { data: members } = useMembers();
  const { execute: completeMatch, isPending: isCompleting } = useCompleteMatch();
  const { execute: cancelMatch, isPending: isCanceling } = useCancelMatch();

  const isPending = isCompleting || isCanceling;

  const memberNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const m of members) map.set(m.id, m.name);
    return map;
  }, [members]);

  const liveMatch = matches.find((m) => m.status === 'in_progress');
  const completedMatches = matches
    .filter((m) => m.status === 'completed' && m.winner)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  function getTeamNames(team: { memberId: string }[]) {
    return team.map((s) => memberNameMap.get(s.memberId) ?? '알 수 없음');
  }

  const handleComplete = async (winner: TeamSide) => {
    if (!liveMatch || isPending) return;
    const teamLabel = winner === 'A' ? '블루팀' : '레드팀';
    const confirmed = await openWinConfirmDialog(teamLabel);
    if (!confirmed) return;
    try {
      await completeMatch({ id: liveMatch.id, winner });
    } catch (e) {
      console.error('경기 완료 실패:', e);
    }
  };

  const handleCancel = async () => {
    if (!liveMatch || isPending) return;
    const confirmed = await openCancelConfirmDialog();
    if (!confirmed) return;
    try {
      await cancelMatch(liveMatch.id);
    } catch (e) {
      console.error('경기 취소 실패:', e);
    }
  };

  return (
    <div className={styles.page}>
      <PageHeader title="전적 기록" subtitle="내전 경기 결과 및 통계" />

      {liveMatch && (
        <div className={styles.liveRow}>
          <LiveGameCard
            elapsedTime="--:--"
            bluePlayers={getTeamNames(liveMatch.teamA)}
            redPlayers={getTeamNames(liveMatch.teamB)}
            onBlueWin={() => handleComplete('A')}
            onRedWin={() => handleComplete('B')}
            onCancel={handleCancel}
            isPending={isPending}
          />
        </div>
      )}

      <Card icon={ScrollText} title="내전 기록" headerRight={`총 ${completedMatches.length}경기`}>
        <DataTable columns={HISTORY_COLUMNS}>
          {completedMatches.map((match, i) => (
            <MatchHistoryRow
              key={match.id}
              date={new Date(match.date).toLocaleDateString('ko-KR', {
                month: '2-digit',
                day: '2-digit',
              })}
              winner={match.winner!}
              blueTeamNames={getTeamNames(match.teamA)}
              redTeamNames={getTeamNames(match.teamB)}
              duration="-"
              even={i % 2 === 1}
            />
          ))}
        </DataTable>
      </Card>
    </div>
  );
}
