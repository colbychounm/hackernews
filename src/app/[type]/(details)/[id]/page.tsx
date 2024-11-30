import { Suspense } from "react";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  return (
    <Suspense fallback={<>Loading details page...</>}>
      Details page with {id}
    </Suspense>
  );
}
