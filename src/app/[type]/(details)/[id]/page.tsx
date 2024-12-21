import AskDetails from "@/components/AskDetails";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;

  return <AskDetails id={+id} />;
}
