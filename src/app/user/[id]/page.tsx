import { Suspense } from "react";
import UserDetails from "../../../components/UserDetails";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  return (
    <Suspense fallback={<>Loading user details...</>}>
      <h1 className="m-8 text-2xl font-bold">User details</h1>
      <div className="flex px-8 gap-4">
        <UserDetails userId={id} />
      </div>
    </Suspense>
  );
}
