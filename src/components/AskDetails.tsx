"use client";

import {
  COMMENT_FIELDS,
  COMMENT_FIELDS_RECURSIVE,
} from "@/documents/fragments/comment";
import { STORY_FIELDS } from "@/documents/fragments/story";
import GET_ITEM from "@/documents/queries/get-item";
import { useFragment } from "@/gql";
import {
  CommentFieldsFragment,
  CommentFieldsRecursiveFragment,
} from "@/gql/graphql";
import dayjs from "@/lib/dayjs";
import { useQuery } from "@apollo/client";
import {
  ChatBubbleBottomCenterTextIcon,
  HandThumbUpIcon,
  PaperAirplaneIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ReactNode, useRef, useState } from "react";

export default function AskDetails({ id }: { id: number }) {
  const { data } = useQuery(GET_ITEM, {
    variables: {
      id: Number(id),
    },
  });

  if (data?.item?.__typename !== "Story") return null;

  const story = useFragment(STORY_FIELDS, data?.item);
  const comments = useFragment(COMMENT_FIELDS_RECURSIVE, story);

  const commentDetailsRecursive = (
    comments: CommentFieldsRecursiveFragment["comments"] | undefined | null,
    parentId: number
  ): ReactNode => {
    if (!comments) return;

    return comments?.map((comment, index) => {
      const currentCommentFragment = useFragment(COMMENT_FIELDS, comment);
      const prevCommentFragment = useFragment(
        COMMENT_FIELDS,
        comments[index - 1]
      );
      const nextCommentFragment = useFragment(
        COMMENT_FIELDS,
        comments[index + 1]
      );

      return (
        <div
          key={currentCommentFragment.id}
          className={`flex flex-col ${
            currentCommentFragment.parent !== parentId ? "pl-8" : ""
          }`}
        >
          {currentCommentFragment.by && currentCommentFragment.text && (
            <CommentSection
              comment={currentCommentFragment}
              prev={prevCommentFragment?.id}
              next={nextCommentFragment?.id}
            />
          )}

          {commentDetailsRecursive(
            currentCommentFragment.comments,
            currentCommentFragment.parent
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="font-bold text-lg mt-4">{story.title}</div>
      <div className="flex gap-2 text-grey-500 text-sm mb-2">
        {data.item.by && <div>by {data.item.by}</div>}
        <div>{dayjs.unix(data.item.time).fromNow()}</div>
      </div>

      <div className="flex gap-6 text-grey-500 mb-6">
        <div className="flex items-center gap-2">
          <HandThumbUpIcon className="icon-sm" />
          {`${story.score} points`}
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="icon-sm" />
          Favorite
        </div>
        <div className="flex items-center gap-2">
          <ChatBubbleBottomCenterTextIcon className="icon-sm" />
          Reply
        </div>
      </div>

      {story.text && (
        <div
          className="mb-6"
          dangerouslySetInnerHTML={{ __html: story.text }}
        />
      )}

      <CommentTextArea />

      <div className="flex flex-col gap-4 pb-8">
        {commentDetailsRecursive(comments.comments, data.item.id)}
      </div>
    </div>
  );
}

function CommentTextArea() {
  return (
    <>
      <div className="flex items-center gap-4 px-8 bg-grey-100 rounded-lg py-4 mb-2">
        <textarea
          className="h-28 w-full text-md bg-grey-100 text-grey-900 focus:outline-none"
          placeholder="Reply"
        />
      </div>
      <button className="w-fit px-4 py-2 flex gap-2 items-center text-grey-500 border border-divider rounded-md">
        Send
        <PaperAirplaneIcon className="icon-sm" />
      </button>
    </>
  );
}

function CommentSection({
  comment,
  prev,
  next,
  parent,
  root,
}: {
  comment: CommentFieldsFragment;
  prev?: number;
  next?: number;
  parent?: number;
  root?: number;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <div className="flex gap-3 items-center text-grey-500 text-sm mt-3 mb-1">
        <div>{comment.by}</div>
        <div>{dayjs.unix(comment.time).fromNow()}</div>
        <span>|</span>
        <p>Like</p>
        <span>|</span>
        <button onClick={() => setIsOpen(true)}>Reply</button>
        {root && (
          <>
            <span>|</span>
            <div>root</div>
          </>
        )}
        {parent && (
          <>
            <span>|</span>
            <div>parent</div>
          </>
        )}
        {prev && (
          <>
            <span>|</span>
            <button
              onClick={() => {
                console.log(divRef.current?.previousElementSibling);
                divRef.current?.previousElementSibling?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              prev
            </button>
          </>
        )}
        {next && (
          <>
            <span>|</span>
            <button
              onClick={() => {
                console.log(divRef.current?.nextElementSibling);
                divRef.current?.nextElementSibling?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              next
            </button>
          </>
        )}
      </div>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: comment.text || "" }}
      />

      {isOpen && <CommentTextArea />}
    </div>
  );
}
