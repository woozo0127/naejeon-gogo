import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cancelMatch } from '#/server/match/match.controller';
import { MATCHES_QUERY_KEY } from './use-matches';

export function useCancelMatch() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => cancelMatch({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MATCHES_QUERY_KEY });
    },
  });
  return {
    execute: (id: string) => mutation.mutateAsync(id),
    isPending: mutation.isPending,
  };
}
