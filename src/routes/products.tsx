import * as React from 'react';
import {
  AddProduct,
  ProductTable,
  productsQueryOptions,
  categoriesQueryOptions,
} from '@/components/products';
import { SiteHeader } from '@/components/template';
import { Button, Separator, InputSearch } from '@/components/ui';
import { debounce } from '@/lib/utils';
import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/products')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(productsQueryOptions);
    queryClient.ensureQueryData(categoriesQueryOptions);
  },
  component: Products,
});

function Products() {
  const [category, setCategory] = React.useState<string | null>(null);
  const [searchFilter, setSearchFilter] = React.useState('');

  const { data: products } = useSuspenseQuery(productsQueryOptions);
  const { data: categories } = useSuspenseQuery(categoriesQueryOptions);

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };
  const debounceSearchProduct = debounce(searchProducts);

  const filteredProducts = React.useMemo(() => {
    const parsedSearch = searchFilter.trim().toLowerCase();

    const filtered = products.filter(({ name, category_id, barcode }) => {
      const parsedName = name.toLowerCase();
      const parsedBarcode = barcode.toLowerCase();

      const matchesSearch =
        parsedName.includes(parsedSearch) || parsedBarcode.includes(parsedSearch);
      const matchesCategory = category == null || category === category_id;
      return matchesSearch && matchesCategory;
    });
    return filtered;
  }, [products, category, searchFilter]);

  return (
    <>
      <SiteHeader title="Productos" />
      <div className="h-full space-y-8 p-4">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <InputSearch placeholder="Buscar producto..." onChange={debounceSearchProduct} />
          <AddProduct categories={categories} />
        </div>
        <div className="grid grid-cols-[1fr_auto_5fr] gap-6 items-center">
          <Button variant={!category ? 'default' : 'secondary'} onClick={() => setCategory(null)}>
            Todos
          </Button>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map(({ id, name }) => (
              <Button
                key={id}
                variant={id === category ? 'default' : 'secondary'}
                onClick={() => setCategory(id)}
                className="grow"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
        <ProductTable category={category} products={filteredProducts} />
      </div>
    </>
  );
}
