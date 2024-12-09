import ItemDetails from "@/components/ItemDetails";
import { Suspense } from "react";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  return (
    <Suspense fallback={<>Loading details page...</>}>
      <ItemDetails id={+id} />
    </Suspense>
  );
}
