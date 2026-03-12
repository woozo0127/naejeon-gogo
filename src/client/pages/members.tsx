import { Button, Input } from '@naejeon-gogo/design';
import { Gamepad2, UserPlus, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Card } from '#/client/components/card';
import { DataTable } from '#/client/components/data-table';
import { KpiWidget } from '#/client/domains/_shared/components/kpi-widget';
import { PageHeader } from '#/client/components/page-header';
import { useMatches } from '#/client/domains/match';
import { useMembers } from '#/client/domains/member';
import { PlayerTableRow } from '#/client/domains/member/components/player-table-row';
import { filterMembersByName } from '#/client/domains/member/filter-members-by-name';
import * as styles from './members.css';

const TABLE_COLUMNS = [
  { label: '이름', width: 280 as const },
  { label: '포지션', width: 120 as const },
  { label: 'MMR', width: 80 as const },
  { label: '승', width: 60 as const },
  { label: '패', width: 60 as const },
  { label: '승률', width: 100 as const },
  { label: 'KDA', width: 100 as const },
  { label: '내전 수', width: 80 as const },
  { label: '서브 포지션', width: 'fill' as const },
];

export function MembersPage() {
  const { data: members } = useMembers();
  const { data: matches } = useMatches();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => filterMembersByName(members, search), [members, search]);

  const memberStats = useMemo(() => {
    const statsMap = new Map<
      string,
      { win: number; lose: number; winRate: string; kda: string; games: number }
    >();
    for (const member of members) {
      let win = 0;
      let lose = 0;
      for (const match of matches) {
        if (match.status !== 'completed' || !match.winner) continue;
        const inA = match.teamA.some((s) => s.memberId === member.id);
        const inB = match.teamB.some((s) => s.memberId === member.id);
        if (!inA && !inB) continue;
        const memberTeam = inA ? 'A' : 'B';
        if (match.winner === memberTeam) win++;
        else lose++;
      }
      const games = win + lose;
      const winRate = games > 0 ? `${((win / games) * 100).toFixed(1)}%` : '0.0%';
      statsMap.set(member.id, { win, lose, winRate, kda: '-', games });
    }
    return statsMap;
  }, [members, matches]);

  const totalGames = matches.filter((m) => m.status === 'completed').length;

  return (
    <div className={styles.page}>
      <PageHeader
        title="사용자 관리"
        subtitle="등록된 플레이어 목록"
        right={
          <Button variant="primary" icon={UserPlus}>
            사용자 추가
          </Button>
        }
      />

      <div className={styles.statsRow}>
        <KpiWidget icon={Users} value={String(members.length)} label="총 사용자" />
        <KpiWidget icon={Gamepad2} value={String(totalGames)} label="총 게임 수" />
      </div>

      <Card icon={Users} title="플레이어 목록" headerRight={`총 ${members.length}명`}>
        <div className={styles.searchWrap}>
          <Input
            placeholder="사용자 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DataTable columns={TABLE_COLUMNS}>
          {filtered.map((member) => (
            <PlayerTableRow
              key={member.id}
              member={member}
              stats={
                memberStats.get(member.id) ?? {
                  win: 0,
                  lose: 0,
                  winRate: '0.0%',
                  kda: '-',
                  games: 0,
                }
              }
            />
          ))}
        </DataTable>
      </Card>
    </div>
  );
}
