import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMember } from '#/server/member/member.controller';
import { MEMBERS_QUERY_KEY } from './use-members';

export function useDeleteMember() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => deleteMember({ data: id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY }),
  });
  return {
    execute: (id: string) => mutation.mutateAsync(id),
    isPending: mutation.isPending,
  };
}
