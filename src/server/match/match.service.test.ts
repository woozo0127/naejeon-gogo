import { beforeEach, describe, expect, it } from 'vitest';
import type { IMatchRepository } from '#/server/match/match.repository';
import { MatchService } from '#/server/match/match.service';
import type { IMmrCalculator } from '#/server/match/mmr-calculator';
import type { Match, MmrDelta, TeamSlot } from '#/server/match/types';

function createStubRepo(): IMatchRepository {
  const store = new Map<string, Match>();
  return {
    findAll: async () => [...store.values()],
    findById: async (id) => store.get(id) ?? null,
    save: async (match) => {
      store.set(match.id, match);
    },
    delete: async (id) => {
      store.delete(id);
    },
  };
}

function createStubMmrCalculator(): IMmrCalculator {
  return {
    calculate: (winnerIds: string[], loserIds: string[]): MmrDelta[] => [
      ...winnerIds.map((id) => ({ memberId: id, delta: 25 })),
      ...loserIds.map((id) => ({ memberId: id, delta: -25 })),
    ],
  };
}

const TEAM_A: TeamSlot[] = [
  { memberId: 'a1', position: 'top' },
  { memberId: 'a2', position: 'jungle' },
  { memberId: 'a3', position: 'mid' },
  { memberId: 'a4', position: 'adc' },
  { memberId: 'a5', position: 'support' },
];

const TEAM_B: TeamSlot[] = [
  { memberId: 'b1', position: 'top' },
  { memberId: 'b2', position: 'jungle' },
  { memberId: 'b3', position: 'mid' },
  { memberId: 'b4', position: 'adc' },
  { memberId: 'b5', position: 'support' },
];

describe('MatchService', () => {
  let repo: IMatchRepository;
  let service: MatchService;

  beforeEach(() => {
    repo = createStubRepo();
    service = new MatchService(repo, createStubMmrCalculator());
  });

  describe('completeMatch', () => {
    it('진행 중인 매치를 A팀 승리로 완료', async () => {
      const match = await service.createMatch(TEAM_A, TEAM_B);
      const { match: completed, deltas } = await service.completeMatch(match.id, 'A');

      expect(completed.status).toBe('completed');
      expect(completed.winner).toBe('A');
      expect(deltas).toHaveLength(10);
      expect(deltas.filter((d) => d.delta > 0).map((d) => d.memberId)).toEqual(
        expect.arrayContaining(['a1', 'a2', 'a3', 'a4', 'a5']),
      );
    });

    it('진행 중인 매치를 B팀 승리로 완료', async () => {
      const match = await service.createMatch(TEAM_A, TEAM_B);
      const { match: completed } = await service.completeMatch(match.id, 'B');

      expect(completed.status).toBe('completed');
      expect(completed.winner).toBe('B');
    });

    it('이미 완료된 매치를 완료하면 에러', async () => {
      const match = await service.createMatch(TEAM_A, TEAM_B);
      await service.completeMatch(match.id, 'A');

      await expect(service.completeMatch(match.id, 'B')).rejects.toThrow(
        '진행 중인 매치만 완료할 수 있습니다.',
      );
    });

    it('존재하지 않는 매치를 완료하면 에러', async () => {
      await expect(service.completeMatch('non-existent', 'A')).rejects.toThrow(
        '매치를 찾을 수 없습니다.',
      );
    });
  });

  describe('cancelMatch', () => {
    it('진행 중인 매치를 취소(삭제)', async () => {
      const match = await service.createMatch(TEAM_A, TEAM_B);
      await service.cancelMatch(match.id);

      const found = await service.getById(match.id);
      expect(found).toBeNull();
    });

    it('이미 완료된 매치를 취소하면 에러', async () => {
      const match = await service.createMatch(TEAM_A, TEAM_B);
      await service.completeMatch(match.id, 'A');

      await expect(service.cancelMatch(match.id)).rejects.toThrow(
        '진행 중인 매치만 취소할 수 있습니다.',
      );
    });

    it('존재하지 않는 매치를 취소하면 에러', async () => {
      await expect(service.cancelMatch('non-existent')).rejects.toThrow(
        '매치를 찾을 수 없습니다.',
      );
    });
  });
});
