"use client";

import { useLayoutContext } from "@/containers/LayoutContainer";
import React from "react";

export default function Container({
  type,
  user,
  details,
}: Readonly<{
  type: React.ReactNode;
  user: React.ReactNode;
  details: React.ReactNode;
}>) {
  const context = useLayoutContext();

  return (
    <div className="flex px-8 gap-4">
      <div className="flex-1">{type}</div>
      {context?.parallelRoute && (
        <div className="sub-side">
          <div className="h-full overflow-auto bg-secondary-100 p-4 rounded-xl">
            {context.parallelRoute === "user" && user}
            {context.parallelRoute === "details" && details}
          </div>
        </div>
      )}
    </div>
  );
}
