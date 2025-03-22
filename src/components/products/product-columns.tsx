import { Product } from './product.model';
import { ColumnDef } from '@tanstack/react-table';

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Producto',
  },
  {
    accessorKey: 'expand.category_id.name',
    header: 'Categoría',
    cell: ({ row }) => {
      const categoryName = String(row.getValue('category'));
      return (
        <div className="border border-border text-xs font-medium w-max px-2 py-0.5 text-muted-foreground rounded-md">
          {categoryName}
        </div>
      );
    },
    id: 'category',
  },
  {
    accessorKey: 'purchase_price',
    header: 'Precio de Compra',
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue('purchase_price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'sales_price',
    header: 'Precio de Venta',
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue('purchase_price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'weight',
    header: 'Peso (kg)',
    cell: ({ row }) => {
      const weight = Number.parseFloat(row.getValue('weight'));
      const formatted = `${weight} kg`;
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'barcode',
    header: 'Código de barras',
  },
];

export const filteredProductColumns = productColumns.filter((column) => column.id !== 'category');
