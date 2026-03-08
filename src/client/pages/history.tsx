import { useMemo } from 'react';
import { ScrollText } from 'lucide-react';
import { PageHeader } from '#/client/domains/_shared/components/page-header';
import { Card } from '#/client/domains/_shared/components/card';
import { DataTable } from '#/client/domains/_shared/components/data-table';
import { LiveGameCard } from '#/client/domains/match/components/live-game-card';
import { MatchHistoryRow } from '#/client/domains/match/components/match-history-row';
import { useMatches } from '#/client/domains/match';
import { useMembers } from '#/client/domains/member';
import * as styles from './history.css';

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

  return (
    <div className={styles.page}>
      <PageHeader title="전적 기록" subtitle="내전 경기 결과 및 통계" />

      {liveMatch && (
        <div className={styles.liveRow}>
          <LiveGameCard
            elapsedTime="--:--"
            bluePlayers={getTeamNames(liveMatch.teamA)}
            redPlayers={getTeamNames(liveMatch.teamB)}
          />
        </div>
      )}

      <Card
        icon={ScrollText}
        title="내전 기록"
        headerRight={`총 ${completedMatches.length}경기`}
      >
        <DataTable columns={HISTORY_COLUMNS}>
          {completedMatches.map((match, i) => (
            <MatchHistoryRow
              key={match.id}
              date={new Date(match.date).toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit' })}
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
