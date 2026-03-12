import { Badge, Button, Input } from '@naejeon-gogo/design';
import { Play, RotateCcw, Shuffle, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Card } from '#/client/components/card';
import { PageHeader } from '#/client/components/page-header';
import { filterMembersByName, UserCard, useMembers } from '#/client/modules/member';
import * as styles from './match-step-select.css';

type MatchStepSelectProps = {
  onStartMatch: (memberIds: string[]) => void;
  isPending: boolean;
};

export function MatchStepSelect({ onStartMatch, isPending }: MatchStepSelectProps) {
  const { data: members } = useMembers();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => filterMembersByName(members, search), [members, search]);

  function toggleMember(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 10) next.add(id);
      return next;
    });
  }

  function resetSelection() {
    setSelectedIds(new Set());
  }

  function randomSelect() {
    const ids = members.map((m) => m.id);
    const shuffled = ids.sort(() => Math.random() - 0.5).slice(0, 10);
    setSelectedIds(new Set(shuffled));
  }

  return (
    <div className={styles.container}>
      <PageHeader
        title="내전 매칭"
        subtitle="참가할 사용자 10명을 선택하세요"
        right={
          <Badge
            size="sm"
            bgColor="rgba(30, 45, 61, 1)"
            textColor="#F0E6D2"
            icon={<Users size={14} style={{ color: '#C8AA6E' }} />}
          >
            {selectedIds.size} / 10 선택됨
          </Badge>
        }
      />

      <Card icon={Users} title="참가자 선택">
        <div className={styles.cardContent}>
          <Input
            placeholder="사용자 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.userGrid}>
            {filtered.map((member) => (
              <UserCard
                key={member.id}
                name={member.name}
                mainPosition={member.mainPosition}
                streak={member.streak}
                selected={selectedIds.has(member.id)}
                onClick={() => toggleMember(member.id)}
              />
            ))}
          </div>
        </div>
      </Card>

      <div className={styles.actionBar}>
        <Button variant="ghost" icon={RotateCcw} onClick={resetSelection}>
          초기화
        </Button>
        <Button variant="secondary" icon={Shuffle} onClick={randomSelect}>
          무작위 선택
        </Button>
        <Button
          variant="primary"
          icon={Play}
          disabled={selectedIds.size !== 10 || isPending}
          onClick={() => onStartMatch([...selectedIds])}
        >
          매칭 시작
        </Button>
      </div>
    </div>
  );
}
