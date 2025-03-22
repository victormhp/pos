import { type AnyFieldApi } from '@tanstack/react-form';

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length
        ? field.state.meta.errors.map((err) => (
            <em key={err.message} className="block text-destructive text-xs">
              {err.message}
            </em>
          ))
        : null}
      {field.state.meta.isValidating ? <span className="block">Validando...</span> : null}
    </>
  );
}
