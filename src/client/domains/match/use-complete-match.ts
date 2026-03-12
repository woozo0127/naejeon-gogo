import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MEMBERS_QUERY_KEY } from '#/client/domains/member';
import { MATCHES_QUERY_KEY } from '#/client/domains/match/use-matches';
import type { TeamSide } from '#/client/domains/position/model';
import { completeMatch } from '#/server/match/match.controller';

export function useCompleteMatch() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: { id: string; winner: TeamSide }) => completeMatch({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY });
    },
  });
  return {
    execute: (data: { id: string; winner: TeamSide }) => mutation.mutateAsync(data),
    isPending: mutation.isPending,
  };
}
