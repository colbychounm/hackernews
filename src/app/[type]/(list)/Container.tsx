"use client";

import { useLayoutContext } from "@/containers/LayoutContainer";

export default function Container({
  type,
  user,
}: Readonly<{
  type: React.ReactNode;
  user: React.ReactNode;
}>) {
  const context = useLayoutContext();

  return (
    <div className="flex px-8 gap-4">
      <div className="flex-1">{type}</div>
      {context?.shouldParallelRoutes && (
        <div className="details sticky top-16">
          <div className="h-full overflow-auto bg-gray-500 bg-opacity-20 p-4 rounded-xl">
            {user}
          </div>
        </div>
      )}
    </div>
  );
}
