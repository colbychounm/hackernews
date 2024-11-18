"use client";

import { useLayoutContext } from "@/containers/LayoutContainer";
import { Suspense } from "react";
import Loading from "./loading";

export default function Container({
  type,
  user,
}: Readonly<{
  type: React.ReactNode;
  user: React.ReactNode;
}>) {
  const context = useLayoutContext();

  return (
    <div className="flex">
      <div className="flex-1">{type}</div>
      {context?.shouldParallelRoutes && (
        <div className="details sticky top-16">
          <div className="h-full overflow-auto bg-gray-500 bg-opacity-65 border p-4 border-gray-500 border-opacity-45 rounded-xl">
            <Suspense fallback={<Loading />}>{user}</Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
