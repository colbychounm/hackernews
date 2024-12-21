"use client";

import { JOB_FIELDS } from "@/documents/fragments/job";
import { STORY_FIELDS } from "@/documents/fragments/story";
import { FragmentType, useFragment } from "@/gql";
import { BaseItem, ListType } from "@/gql/graphql";
import dayjs from "@/lib/dayjs";
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import {
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useMemo } from "react";

interface ItemProps<Document extends DocumentTypeDecoration<unknown, unknown>> {
  item: BaseItem & FragmentType<Document>;
  listType?: ListType;
}

export function Story({ item, listType }: ItemProps<typeof STORY_FIELDS>) {
  const story = useFragment(STORY_FIELDS, item);

  const headingHref = useMemo(() => {
    switch (listType) {
      case ListType.Askstories:
        return `/ask/${item.id}`;
      case ListType.Newstories:
      case ListType.Beststories:
      case ListType.Topstories:
        return `/news/${item.id}`;
      case ListType.Showstories:
        return story.url!;
      default:
        return "/";
    }
  }, []);

  const ReferenceUrl = useMemo(() => {
    if (!story.url) return;

    let url;

    if (listType === ListType.Showstories) {
      url = `/from/${item.by}`;
    } else {
      url = story.url;
    }

    return <ReferenceLink text={new URL(story.url).hostname} to={url} />;
  }, []);

  return (
    <div className="flex items-center py-4 border-b border-divider last:border-0">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          {story.title && <Heading text={story.title} to={headingHref} />}

          {ReferenceUrl}
        </div>

        <div className="flex text-gray-500">
          {item.by && <CreatedBy name={item.by} to={`/user/${item.by}`} />}

          <CreatedTime
            time={dayjs.unix(item.time).fromNow()}
            to={headingHref}
          />

          <Comments count={story.kids?.length || 0} to={headingHref} />
        </div>
      </div>

      <VoteButton
        score={story.score}
        isVoted={false}
        onVote={() => console.log("Voted")}
        onUnVote={() => console.log("UnVoted")}
      />
    </div>
  );
}

export function Job({ item }: ItemProps<typeof JOB_FIELDS>) {
  return null;
}

const Item = {
  Story,
  Job,
};

export default Item;

function Heading({ text, to }: { text: string; to: string }) {
  return (
    <Link href={to}>
      <h2 className="text-lg font-bold">{text}</h2>
    </Link>
  );
}

function ReferenceLink({ text, to }: { text: string; to: string }) {
  return (
    <Link href={to}>
      <h4 className="text-grey-500">({text})</h4>
    </Link>
  );
}

function VoteButton({
  score,
  isVoted,
  onVote,
  onUnVote,
}: {
  score: number;
  isVoted: boolean;
  onVote: VoidFunction;
  onUnVote: VoidFunction;
}) {
  return (
    <button
      className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-primary-100 text-primary-900 text-sm font-bold"
      onClick={isVoted ? onUnVote : onVote}
    >
      {!isVoted && <ChevronUpIcon />}
      {score}
    </button>
  );
}

function CreatedBy({ name, to }: { name: string; to: string }) {
  return (
    <Link href={to} className="w-40 flex items-center gap-2">
      <UserIcon className="icon-sm" />
      {name}
    </Link>
  );
}

function CreatedTime({ time, to }: { time: string; to: string }) {
  return (
    <Link href={to} className="w-40 flex items-center gap-2">
      <ClockIcon className="icon-sm" />
      {time}
    </Link>
  );
}

function Comments({ count, to }: { count: number; to: string }) {
  return (
    <Link href={to} className="w-40 flex items-center gap-2">
      <ChatBubbleBottomCenterTextIcon className="icon-sm" />
      {count ? `${count} ${count === 1 ? "comment" : "comments"}` : "discuss"}
    </Link>
  );
}
