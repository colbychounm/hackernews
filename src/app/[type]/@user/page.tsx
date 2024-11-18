"use client";

import { useLayoutContext } from "@/containers/LayoutContainer";
import Link from "next/link";

export default function Page() {
  const context = useLayoutContext();
  return (
    <>
      <Link href={`/user/${context.state.userId}`}>Expand</Link>
    </>
  );
}
