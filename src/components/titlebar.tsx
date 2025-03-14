import { getCurrentWindow } from '@tauri-apps/api/window';
import { Minus, Square, X } from 'lucide-react';
import { Button } from './ui';

export function Titlebar() {
  const appWindow = getCurrentWindow();

  return (
    <div
      data-tauri-drag-region
      className="bg-background border-b border-border h-8 select-none flex justify-end"
    >
      <Button
        id="titlebar-minimize"
        size="icon"
        variant="ghost"
        className="rounded-none h-full"
        onClick={() => appWindow.minimize()}
      >
        <Minus />
      </Button>
      <Button
        id="titlebar-maximize"
        size="icon"
        variant="ghost"
        className="rounded-none h-full"
        onClick={() => appWindow.toggleMaximize()}
      >
        <Square />
      </Button>
      <Button
        id="titlebar-close"
        size="icon"
        variant="ghost"
        className="rounded-none h-full hover:bg-red-500"
        onClick={() => appWindow.close()}
      >
        <X />
      </Button>
    </div>
  );
}
