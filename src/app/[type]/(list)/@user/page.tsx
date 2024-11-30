"use client";

import UserDetails from "@/app/user/[id]/UserDetails";
import { useLayoutContext } from "@/containers/LayoutContainer";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  const context = useLayoutContext();
  return (
    <>
      <div className="flex justify-end gap-3">
        <Link href={`/user/${context.state.userId}`}>
          <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500" />
        </Link>
        <button
          onClick={() => {
            context.setShouldParallelRoutes(false);
          }}
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <Suspense fallback={<>Loading user details...</>}>
        <UserDetails userId={context.state.userId!} />
      </Suspense>
    </>
  );
}
