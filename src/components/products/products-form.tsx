import { Label, Input, Button } from '@/components/ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { type ProductCategory, productFormSchema } from './products.model';
import { useForm } from '@tanstack/react-form';
import { Plus } from 'lucide-react';

interface MaterialFormProps {
  categories: ProductCategory[];
}

export function ProductsForm({ categories }: MaterialFormProps) {
  const form = useForm({
    defaultValues: {
      name: '',
      category: '',
      purchase_price: 0,
      sales_price: 0,
      weight: 0,
      barcode: '',
    },
    validators: {
      onSubmit: productFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const addMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const cancel = (_: React.MouseEvent) => {
    form.reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="search" variant="outline">
          <Plus className="size-5" />
          <span>Añadir producto</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-3xl font-medium pb-8">Añadir Producto</SheetTitle>
        </SheetHeader>
        <form className="space-y-8 px-4 h-full" onSubmit={addMaterial}>
          <form.Field
            name="name"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Producto</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa el nombre del producto"
                  autoComplete="off"
                />
              </div>
            )}
          />
          <form.Field
            name="category"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Categoria</Label>
                <Select
                  name={field.name}
                  onValueChange={field.handleChange}
                  defaultValue={field.state.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(({ id, name }) => (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          <form.Field
            name="purchase_price"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Precio de Compra</Label>
                <Input
                  id={field.name}
                  type="number"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  placeholder="Ingresa el precio de compra"
                  min="0"
                  autoComplete="off"
                />
              </div>
            )}
          />
          <form.Field
            name="sales_price"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Precio de Venta</Label>
                <Input
                  id={field.name}
                  type="number"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  placeholder="Ingresa el precio de venta"
                  min="0"
                  autoComplete="off"
                />
              </div>
            )}
          />
          <form.Field
            name="weight"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Peso (kg)</Label>
                <Input
                  id={field.name}
                  type="number"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  placeholder="Ingresa el peso del producto"
                  min="0"
                  autoComplete="off"
                />
              </div>
            )}
          />
          <form.Field
            name="barcode"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Código de barras</Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa el código de barras"
                  autoComplete="off"
                />
              </div>
            )}
          />
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit]) => (
              <SheetFooter className="px-0 flex-row">
                <SheetClose asChild>
                  <Button className="grow" type="reset" variant="outline" onClick={cancel}>
                    Cancelar
                  </Button>
                </SheetClose>
                <Button className="grow" type="submit" disabled={!canSubmit}>
                  Guardar
                </Button>
              </SheetFooter>
            )}
          />
        </form>
      </SheetContent>
    </Sheet>
  );
}
