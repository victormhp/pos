import { MaterialsForm } from '@/components/materials';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/materials/add/')({
  component: MaterialsAdd,
});

function MaterialsAdd() {
  return <MaterialsForm />;
}
