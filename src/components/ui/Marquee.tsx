"use client";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]", className)}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-4 py-1",
          "animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
        aria-hidden
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-4 py-1",
          "animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
