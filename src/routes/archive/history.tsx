import { createFileRoute } from '@tanstack/react-router';
import { HistoryPage } from '#/client/_archive/pages/history/history-page';
import { matchesQueryOptions } from '#/client/modules/match';
import { membersQueryOptions } from '#/client/modules/member';

export const Route = createFileRoute('/archive/history')({
  loader: ({ context: { queryClient } }) =>
    Promise.all([
      queryClient.ensureQueryData(matchesQueryOptions),
      queryClient.ensureQueryData(membersQueryOptions),
    ]),
  component: HistoryPage,
});
