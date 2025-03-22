import * as React from 'react';
import { Button, Separator } from '@/components/ui';

export function Clock() {
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());
  const [isNumeric, setIsNumeric] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const currentDateNumeric = currentTime.toLocaleString('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const currentDateText = currentTime.toLocaleString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const currentHour = currentTime.toLocaleString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const toggleDateFormat = () => {
    setIsNumeric((prev) => !prev);
  };

  return (
    <Button
      className="text-muted-foreground text-sm tabular-nums"
      variant="ghost"
      onClick={toggleDateFormat}
    >
      <span>{isNumeric ? currentDateNumeric : currentDateText}</span>
      <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />
      <span>{currentHour}</span>
    </Button>
  );
}
