"use client";

import {
  Bars3Icon,
  BarsArrowUpIcon,
  EyeIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

const NAVIGATION: NavigationProps[] = [
  {
    label: "News",
    to: "/news",
    Icon: BarsArrowUpIcon,
  },
  {
    label: "Ask",
    to: "/ask",
    Icon: QuestionMarkCircleIcon,
  },
  {
    label: "Show",
    to: "/show",
    Icon: EyeIcon,
  },
  {
    label: "Jobs",
    to: "/jobs",
    Icon: LightBulbIcon,
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full mx-4">
      <div className="flex items-center h-24">
        <Link href="/news" className="font-extrabold text-lg">
          <Image
            src="/yc-logo.svg"
            alt="YC Logo"
            width={32}
            height={32}
            className="inline-block mr-2"
          />
          Hacker News
        </Link>
      </div>
      <nav className="flex-1">
        <ul>
          {NAVIGATION.map(({ to, label, Icon }) => (
            <li key={label}>
              <Navigation to={to} label={label} Icon={Icon} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-20">
        <button className="navigation w-full">
          <Bars3Icon className="icon-md m-3" />
          More
        </button>
      </div>
    </div>
  );
}

interface NavigationProps {
  to: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

function Navigation({ to, label, Icon }: NavigationProps) {
  const pathname = usePathname();

  return (
    <Link href={to} className={`navigation ${pathname === to ? "active" : ""}`}>
      <Icon className="icon-md m-3" />
      {label}
    </Link>
  );
}
