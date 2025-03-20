import * as React from 'react';
import { Button, Separator, DataTable, InputSearch } from '@/components/ui';
import { debounce } from '@/lib/utils';
import { productsQueryOptions } from './products.handlers';
import type { ProductCategory, Product } from './products.model';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { ProductsForm } from './products-form';

interface MaterialsTableProps {
  categories: ProductCategory[];
}

export function ProductsTable({ categories }: MaterialsTableProps) {
  const [category, setCategory] = React.useState<string | null>(null);
  const [searchFilter, setSearchFilter] = React.useState('');

  const { data: products } = useQuery(productsQueryOptions(category));

  const productColumns: ColumnDef<Product>[] = [
    {
      accessorKey: 'name',
      header: 'Producto',
    },
    {
      accessorFn: (row) => row.expand.category_id.name,
      header: 'Categoría',
      id: 'category',
    },
    {
      accessorKey: 'purchase_price',
      header: 'Precio de compra',
    },
    {
      accessorKey: 'sales_price',
      header: 'Precio de venta',
    },
    {
      accessorKey: 'weight',
      header: 'Peso (kg)',
    },
    {
      accessorKey: 'barcode',
      header: 'Código de barras',
    },
  ];

  const filteredMaterialColumns = productColumns.filter((column) => column.id !== 'category');

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const debounceSearchProduct = debounce(searchProducts);

  const filteredMaterials = React.useMemo(() => {
    const parsedSearch = searchFilter.trim().toLowerCase();

    const filtered = products?.filter(({ name, barcode }) => {
      const parsedName = name.toLowerCase();
      const parsedBarcode = barcode.toLowerCase();

      return parsedName.includes(parsedSearch) || parsedBarcode.includes(parsedSearch);
    });
    return filtered ?? [];
  }, [products, searchFilter]);

  return (
    <div className="space-y-8 h-full">
      <div className="flex items-center justify-between gap-4">
        <InputSearch placeholder="Buscar producto..." onChange={debounceSearchProduct} />
        <ProductsForm categories={categories} />
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
      <DataTable
        columns={!category ? productColumns : filteredMaterialColumns}
        data={filteredMaterials ?? []}
      />
    </div>
  );
}
