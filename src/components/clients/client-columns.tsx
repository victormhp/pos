import { Client } from "./";
import { ColumnDef } from "@tanstack/react-table";

  export const clientColumns: ColumnDef<Client>[] = [
    {
      accessorKey: 'name',
      header: 'Cliente',
    },
    {
      accessorKey: 'phone',
      header: 'Teléfono',
    },
    {
      accessorKey: 'ext_number',
      header: 'Número Exterior',
    },
    {
      accessorKey: 'street',
      header: 'Calle',
    },
    {
      accessorKey: 'neighborhood',
      header: 'Colonia',
    },
    {
      accessorKey: 'reference',
      header: 'Referencia',
    },
  ];
