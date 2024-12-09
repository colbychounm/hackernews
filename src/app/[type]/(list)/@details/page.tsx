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
          <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500" />
        </Link>
        <button
          onClick={() => {
            context.setParallelRoute("");
          }}
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <Suspense fallback={<>Loading details...</>}>
        <ItemDetails id={context.state.itemId?.toString()!} />
      </Suspense>
    </>
  );
}
