"use client";

import { COMMENT_FIELDS } from "@/documents/fragments/comment";
import { JOB_FIELDS } from "@/documents/fragments/job";
import { POLL_FIELDS } from "@/documents/fragments/poll";
import { POLLOPT_FIELDS } from "@/documents/fragments/pollopt";
import { STORY_FIELDS } from "@/documents/fragments/story";
import { FragmentType, useFragment } from "@/gql";
import { BaseItem } from "@/gql/graphql";
import dayjs from "@/lib/dayjs";
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import {
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ItemProps<Document extends DocumentTypeDecoration<unknown, unknown>> {
  item: BaseItem & FragmentType<Document>;
}

export function Story({ item }: ItemProps<typeof STORY_FIELDS>) {
  const story = useFragment(STORY_FIELDS, item);

  return (
    <div className="flex items-center py-4 border-b border-divider last:border-0">
      <div className="flex-1">
        <Link href={`/ask/${item.id}`}>
          <h2 className="text-lg font-bold">{story.title}</h2>
        </Link>

        <div className="flex text-gray-500">
          <Link
            href={`/ask/${item.id}`}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="icon-sm" />
            {story.kids?.length} comments
          </Link>

          <Link
            href={`/ask/${item.id}`}
            className="w-40 flex items-center gap-2"
          >
            <ClockIcon className="icon-sm" />
            {dayjs.unix(item.time).fromNow()}
          </Link>

          <Link href={`/user/${item.by}`} className="flex items-center gap-2">
            <UserIcon className="icon-sm" />
            {item.by}
          </Link>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-primary-100 text-primary-900 text-sm font-bold">
        <ChevronUpIcon />
        {story.score}
      </button>
    </div>
  );
}

export function Comment({ item }: ItemProps<typeof COMMENT_FIELDS>) {
  return null;
}

export function Job({ item }: ItemProps<typeof JOB_FIELDS>) {
  return null;
}

export function Poll({ item }: ItemProps<typeof POLL_FIELDS>) {
  return null;
}

export function PollOpt({ item }: ItemProps<typeof POLLOPT_FIELDS>) {
  return null;
}

const Item = {
  Story,
  Comment,
  Job,
  Poll,
  PollOpt,
};

export default Item;
