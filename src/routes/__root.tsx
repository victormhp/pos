import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ProductCategory } from '@/components/products';
import { NavSidebar } from '@/components/template';
import { NavigationBlock } from '@/components/navigation-block';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { type QueryClient } from '@tanstack/react-query';

interface RouterContext {
  queryClient: QueryClient;
  categories?: ProductCategory[];
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <NavSidebar />
        <SidebarInset className="grid grid-rows-[auto_1fr] min-h-screen">
          <Outlet />
          <NavigationBlock />
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools position="top-right" />
    </>
  );
}
