import { DashboardHeader } from '@/components/template';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/materials/add')({
  component: MaterialAddLayout,
});

export function MaterialAddLayout() {
  return (
    <>
      <DashboardHeader showBackButton backPath="/materials" />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
