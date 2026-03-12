import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import type { MatchCandidate } from '#/client/domains/match/model';
import { useCreateMatch } from '#/client/domains/match/use-create-match';
import { useGenerateMatch } from '#/client/domains/match';
import { useMembers } from '#/client/domains/member';
import type { Position } from '#/client/domains/position/model';
import * as styles from './match.css';
import { MatchStepCandidates } from './match-step-candidates';
import { MatchStepSelect } from './match-step-select';

type Step = 'select' | 'candidates';

export function MatchPage() {
  const navigate = useNavigate();
  const { data: members } = useMembers();
  const { execute: generateMatch, isPending: isGenerating } = useGenerateMatch();
  const { execute: createMatch, isPending: isCreating } = useCreateMatch();

  const [step, setStep] = useState<Step>('select');
  const [candidates, setCandidates] = useState<MatchCandidate[]>([]);

  async function handleStartMatch(memberIds: string[]) {
    const result = await generateMatch(memberIds);
    setCandidates(result);
    setStep('candidates');
  }

  function handleReshuffle() {
    setCandidates([]);
    setStep('select');
  }

  function handleSwap(candidateIndex: number, positionA: Position, positionB: Position) {
    setCandidates((prev) =>
      prev.map((c, i) => {
        if (i !== candidateIndex) return c;
        const aSlotIdx = c.teamA.findIndex((s) => s.position === positionA);
        const bSlotIdx = c.teamB.findIndex((s) => s.position === positionB);
        if (aSlotIdx === -1 || bSlotIdx === -1) return c;

        const newTeamA = [...c.teamA];
        const newTeamB = [...c.teamB];
        const tempId = newTeamA[aSlotIdx].memberId;
        newTeamA[aSlotIdx] = { ...newTeamA[aSlotIdx], memberId: newTeamB[bSlotIdx].memberId };
        newTeamB[bSlotIdx] = { ...newTeamB[bSlotIdx], memberId: tempId };

        return { ...c, teamA: newTeamA, teamB: newTeamB };
      }),
    );
  }

  async function handleConfirm(candidate: MatchCandidate) {
    await createMatch({ teamA: candidate.teamA, teamB: candidate.teamB });
    navigate({ to: '/history' });
  }

  return (
    <div className={styles.page}>
      {step === 'select' && (
        <MatchStepSelect onStartMatch={handleStartMatch} isPending={isGenerating} />
      )}
      {step === 'candidates' && (
        <MatchStepCandidates
          candidates={candidates}
          members={members}
          onReshuffle={handleReshuffle}
          onConfirm={handleConfirm}
          onSwap={handleSwap}
          isPending={isCreating}
        />
      )}
    </div>
  );
}
