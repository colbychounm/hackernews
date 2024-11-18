import UserDetails from "./UserDetails";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  return (
    <>
      User details Page
      <UserDetails userId={id} />
    </>
  );
}
