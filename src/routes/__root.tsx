import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteSidebar } from '@/components/template';
import { NavigationBlock } from '@/components/navigation-block';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { type QueryClient } from '@tanstack/react-query';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <SiteSidebar />
        <SidebarInset className="grid grid-rows-[auto_1fr] min-h-screen">
          <Outlet />
          <NavigationBlock />
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
