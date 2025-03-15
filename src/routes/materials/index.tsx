import { MaterialsTable } from '@/components/materials';
import { DashboardHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/materials/')({
  component: Materials,
});

function Materials() {
  return (
    <>
      <DashboardHeader />
      <div className="p-4">
        <MaterialsTable />
      </div>
    </>
  );
}
