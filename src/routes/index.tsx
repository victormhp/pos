import { SiteHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader title="Inicio" />
      <div className="p-4">hola</div>
    </>
  );
}
