import { SiteHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sales/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title='Ventas'/>
      <div className="p-4">hola</div>
    </>
  );
}
