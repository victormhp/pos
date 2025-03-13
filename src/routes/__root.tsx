import { BaseLayout } from '@/layouts';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
      <TanStackRouterDevtools />
    </>
  ),
});
