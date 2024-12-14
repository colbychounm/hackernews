"use client";

import ItemDetails from "@/components/ItemDetails";
import { useLayoutContext } from "@/containers/LayoutContainer";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  const context = useLayoutContext();
  return (
    <>
      <div className="flex justify-end gap-3">
        <Link href={`/ask/${context.state.itemId}`}>
          <ArrowsPointingOutIcon className="icon-md text-secondary-900" />
        </Link>
        <button
          onClick={() => {
            context.setParallelRoute("");
          }}
        >
          <XMarkIcon className="icon-md text-secondary-900" />
        </button>
      </div>

      <Suspense fallback={<>Loading details...</>}>
        <ItemDetails id={context.state.itemId?.toString()!} />
      </Suspense>
    </>
  );
}
