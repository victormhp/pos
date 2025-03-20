import { SiteHeader } from '@/components/template';
import { categoriesQueryOptions, ProductsTable } from '@/components/products';
import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/products/')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(categoriesQueryOptions);
  },
  component: Products,
});

function Products() {
  const categoriesQuery = useSuspenseQuery(categoriesQueryOptions);
  const categories = categoriesQuery.data;

  return (
    <>
      <SiteHeader title='Productos'/>
      <div className="p-4">
        <ProductsTable categories={categories} />
      </div>
    </>
  );
}
