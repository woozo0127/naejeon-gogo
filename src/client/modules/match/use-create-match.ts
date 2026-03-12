import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMatch } from '#/server/match/match.controller';
import type { TeamSlot } from './model';
import { MATCHES_QUERY_KEY } from './use-matches';

export function useCreateMatch() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: { teamA: TeamSlot[]; teamB: TeamSlot[] }) => createMatch({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEY });
    },
  });
  return {
    execute: (data: { teamA: TeamSlot[]; teamB: TeamSlot[] }) => mutation.mutateAsync(data),
    isPending: mutation.isPending,
  };
}
