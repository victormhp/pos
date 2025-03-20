import { useBlocker } from '@tanstack/react-router';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function NavigationBlock() {
  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: ({ current }) => {
      return current.pathname.includes('/add') || current.pathname.includes('/edit');
    },
    withResolver: true,
  });

  return (
    <AlertDialog open={status === 'blocked'}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro de que quieres salir?</AlertDialogTitle>
          <AlertDialogDescription>
            Los cambios no guardados se perderán. Si sales ahora, no podrás recuperarlos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={reset}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={proceed}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
