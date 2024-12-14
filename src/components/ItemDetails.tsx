"use client";

import { COMMENT_FIELDS } from "@/documents/fragments/comment";
import GET_ITEM_WITH_COMMENTS from "@/documents/queries/get-item-with-comments";
import { useFragment } from "@/gql";
import dayjs from "@/lib/dayjs";
import { useQuery } from "@apollo/client";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ItemDetails({ id }: { id: number }) {
  const { data } = useQuery(GET_ITEM_WITH_COMMENTS, {
    variables: {
      id: Number(id),
    },
  });

  if (data?.item?.__typename !== "Story") return null;

  return (
    <div className="flex flex-col gap-6">
      {data?.item.comments?.map((comment, index) => {
        const { text, comments } = useFragment(COMMENT_FIELDS, comment);
        if (!text) return null;

        return (
          <div key={index} className="flex flex-col pb-8 border-divider">
            <div className="flex flex-col text-sm">
              <div className="font-bold">{comment.by}</div>
              <div className="flex items-center gap-1">
                <ClockIcon className="icon-sm" />
                <div>{dayjs.unix(comment.time).fromNow()}</div>
              </div>
              {/* <button>
                <MinusIcon className="w-3 h-3 text-gray-500" />
              </button> */}
            </div>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            {comments?.map((comment, index) => (
              <CommentSection key={index} comment={comment} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function CommentSection({ comment }: { comment: any }) {
  if (!comment.text) return null;

  return (
    <div>
      <div className="flex flex-col gap-1 text-sm text-grey-900">
        <div>{comment.by}</div>
        <div className="flex items-center gap-1">
          <ClockIcon className="icon-sm" />
          <div>{dayjs.unix(comment.time).fromNow()}</div>
        </div>
        {/* <button>
          <MinusIcon className="w-3 h-3 text-gray-500" />
        </button> */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  );
}
