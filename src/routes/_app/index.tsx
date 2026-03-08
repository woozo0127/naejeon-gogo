import { createFileRoute } from '@tanstack/react-router';
import { MatchPage } from '#/client/pages/match';

export const Route = createFileRoute('/_app/')({
  component: MatchPage,
});
