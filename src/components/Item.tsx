"use client";

import { useLayoutContext } from "@/containers/LayoutContainer";
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
  const context = useLayoutContext();
  const story = useFragment(STORY_FIELDS, item);

  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <Link href={`/ask/${item.id}`}>
          <h2 className="text-lg font-bold">{story.title}</h2>
        </Link>

        <div className="flex text-gray-500">
          <button
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.itemId = item.id;
            }}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            {story.kids?.length} comments
          </button>

          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <Link href={`/ask/${item.id}`}>
              {dayjs.unix(item.time).fromNow()}
            </Link>
          </span>

          <button
            className="flex items-center gap-2"
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.userId = item.by;
            }}
          >
            <UserIcon className="w-4 h-4" />
            {item.by}
          </button>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        {story.score}
      </button>
    </div>
  );
}

export function Comment({ item }: ItemProps<typeof COMMENT_FIELDS>) {
  const context = useLayoutContext();

  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <h2 className="text-lg font-bold">Title</h2>
        <div className="flex text-gray-500">
          <span
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.itemId = item.id;
            }}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            100 comments
          </span>
          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            6h ago
          </span>
          <div
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.userId = item.by;
            }}
          >
            by {item.by}
          </div>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        999
      </button>
    </div>
  );
}

export function Job({ item }: ItemProps<typeof JOB_FIELDS>) {
  const context = useLayoutContext();

  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <h2 className="text-lg font-bold">Title</h2>
        <div className="flex text-gray-500">
          <span
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.itemId = item.id;
            }}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            100 comments
          </span>
          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            6h ago
          </span>
          <div
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.userId = item.by;
            }}
          >
            by {item.by}
          </div>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        999
      </button>
    </div>
  );
}

export function Poll({ item }: ItemProps<typeof POLL_FIELDS>) {
  const context = useLayoutContext();

  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <h2 className="text-lg font-bold">Title</h2>
        <div className="flex text-gray-500">
          <span
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.itemId = item.id;
            }}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            100 comments
          </span>
          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            6h ago
          </span>
          <div
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.userId = item.by;
            }}
          >
            by {item.by}
          </div>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        999
      </button>
    </div>
  );
}

export function PollOpt({ item }: ItemProps<typeof POLLOPT_FIELDS>) {
  const context = useLayoutContext();

  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <h2 className="text-lg font-bold">Title</h2>
        <div className="flex text-gray-500">
          <span
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.itemId = item.id;
            }}
            className="w-40 flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            100 comments
          </span>
          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            6h ago
          </span>
          <div
            onClick={() => {
              context.setShouldParallelRoutes(true);
              context.state.userId = item.by;
            }}
          >
            by {item.by}
          </div>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        999
      </button>
    </div>
  );
}

const Item = {
  Story,
  Comment,
  Job,
  Poll,
  PollOpt,
};

export default Item;
