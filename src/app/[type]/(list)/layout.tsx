"use client";

import LayoutProvider from "@/containers/LayoutContainer";
import Container from "./Container";

export default function Layout({
  type,
  user,
  details,
}: Readonly<{
  type: React.ReactNode;
  user: React.ReactNode;
  details: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <LayoutProvider>
      <Container type={type} user={user} details={details} />
    </LayoutProvider>
  );
}
