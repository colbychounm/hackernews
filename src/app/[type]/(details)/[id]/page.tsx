"use client";

import { STORY_FIELDS } from "@/documents/fragments/story";
import GET_ITEM from "@/documents/queries/get-item";
import { useFragment } from "@/gql";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  const { data } = useQuery(GET_ITEM, {
    variables: {
      id: Number(id),
    },
  });

  if (data?.item?.__typename !== "Story") return null;

  const story = useFragment(STORY_FIELDS, data?.item);
  return (
    <Suspense fallback={<>Loading details page...</>}>
      return (
      <div
        className="leading-loose"
        dangerouslySetInnerHTML={{ __html: story.text || "" }}
      />
      );
    </Suspense>
  );
}
