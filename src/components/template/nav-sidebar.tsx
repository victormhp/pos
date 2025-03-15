import * as React from 'react';
import { Home, List, Package, ShoppingCart, UserRound } from 'lucide-react';
import { NavHeader, NavMain, NavFooter } from './';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'deivid',
    email: 'deivid@gmail.com',
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

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
