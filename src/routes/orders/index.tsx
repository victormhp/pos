import { SiteHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title='Pedidos' />
      <div className="p-4">hola</div>
    </>
  );
}
