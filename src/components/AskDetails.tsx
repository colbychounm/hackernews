"use client";

import { STORY_FIELDS } from "@/documents/fragments/story";
import GET_ITEM from "@/documents/queries/get-item";
import { useFragment } from "@/gql";
import { useQuery } from "@apollo/client";

export default function AskDetails({ id }: { id: number }) {
  const { data } = useQuery(GET_ITEM, {
    variables: {
      id: Number(id),
    },
  });

  if (data?.item?.__typename !== "Story") return null;

  const story = useFragment(STORY_FIELDS, data?.item);

  return (
    <div
      className="leading-loose"
      dangerouslySetInnerHTML={{ __html: story.title || "" }}
    />
  );
}
