import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { NavSidebar } from '@/components/template';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <NavSidebar />
        <SidebarInset className="grid grid-rows-[auto_1fr] min-h-screen">
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools position="top-right" />
    </>
  ),
});
