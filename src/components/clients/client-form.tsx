import { insertClient, clientSchema } from './';
import { FieldInfo } from '@/components/field-info';
import { Label, Input, Textarea, Button } from '@/components/ui';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useForm } from '@tanstack/react-form';
import { Plus } from 'lucide-react';

export function ClientForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      street: '',
      neighborhood: '',
      ext_number: '',
      reference: '',
    },
    validators: {
      onSubmit: clientSchema,
    },
    onSubmit: async ({ formApi, value }) => {
      insertClient(value);
      formApi.reset();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const cancel = () => {
    form.reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="search" variant="outline">
          <Plus className="size-5" />
          <span>Añadir cliente</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="overflow-y-auto"
        aria-describedby="Formulario para agregar un nuevo client"
      >
        <SheetHeader>
          <SheetTitle className="text-3xl font-medium pb-8">Añadir Cliente</SheetTitle>
        </SheetHeader>
        <form className="space-y-8 px-4 h-full" onSubmit={handleSubmit}>
          <form.Field
            name="name"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Producto
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa el nombre del cliente"
                  autoComplete="off"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="phone"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Número de teléfono
                </Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa el número de teléfono"
                  autoComplete="off"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="street"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Calle
                </Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa calle"
                  autoComplete="off"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="neighborhood"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Colonia
                </Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa la colonia"
                  autoComplete="off"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="ext_number"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Número Exterior
                </Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa el número exterior"
                  autoComplete="off"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="reference"
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor={field.name}>
                  Referencia
                </Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingresa la referencia" />
                <FieldInfo field={field} />
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
