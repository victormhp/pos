import { DashboardHeader } from '@/components/template';
import { Button } from '@/components/ui';
import { createBackup } from '@/lib/pocketbase';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/config')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardHeader />
      <div className="p-4">
        <Button onClick={createBackup}>Create Backup</Button>
        <Button
          onClick={() => {
            console.log(import.meta.env.VITE_SUPERUSER);
          }}
        >
          test
        </Button>
      </div>
    </>
  );
}
