import { createFileRoute } from '@tanstack/react-router';
import { HistoryPage } from '#/client/pages/history';

export const Route = createFileRoute('/_app/history')({
  component: HistoryPage,
});
