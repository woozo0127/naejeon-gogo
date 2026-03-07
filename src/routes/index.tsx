import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div style={{ color: '#F0E6D2', padding: 40 }}>새 디자인 시스템 적용 중...</div>,
});
