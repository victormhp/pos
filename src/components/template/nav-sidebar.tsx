import * as React from 'react';
import { Home, List, Package, ShoppingCart, UserRound } from 'lucide-react';
import { NavMain } from '@/components/template/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Inicio',
      url: '/',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Ventas',
      url: '/sales',
      icon: ShoppingCart,
    },
    {
      title: 'Pedidos',
      url: '/orders',
      icon: List,
    },
    {
      title: 'Materiales',
      url: '/materials',
      icon: Package,
    },
    {
      title: 'Clientes',
      url: '/clients',
      icon: UserRound,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
