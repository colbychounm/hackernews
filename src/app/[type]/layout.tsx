"use client";

import LayoutProvider from "@/containers/LayoutContainer";
import Container from "./Container";

export default function Layout({
  type,
  user,
  params,
}: Readonly<{
  type: React.ReactNode;
  user: React.ReactNode;
  params: Promise<{ type: string }>;
}>) {
  return (
    <LayoutProvider>
      <h1 className="m-8 text-2xl font-bold">Heading</h1>
      <Container type={type} user={user} />
    </LayoutProvider>
  );
}
