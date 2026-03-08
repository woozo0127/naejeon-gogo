import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/history')({
  component: () => <div style={{ color: '#F0E6D2', padding: 40 }}>전적 페이지 (구현 예정)</div>,
});
