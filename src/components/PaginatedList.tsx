"use client";

import GET_ITEMS from "@/documents/queries/get-items";
import { ListType } from "@/gql/graphql";
import { useQuery } from "@apollo/client";
import Item from "./Item";

interface ListProps {
  type: ListType;
}

function PaginatedList({ type }: ListProps) {
  const { data, fetchMore } = useQuery(GET_ITEMS, {
    variables: {
      type,
    },
  });

  return (
    <div className="flex-1">
      <ul className="py-4">
        {data?.items.edges.map(({ cursor, node }) => {
          switch (node.__typename) {
            case "Story":
              return <Item.Story key={cursor} item={node} />;
            case "Comment":
              return <Item.Comment key={cursor} item={node} />;
            case "Job":
              return <Item.Job key={cursor} item={node} />;
            case "Poll":
              return <Item.Poll key={cursor} item={node} />;
            case "PollOpt":
              return <Item.PollOpt key={cursor} item={node} />;
          }
        })}
      </ul>
      {data?.items.pageInfo.hasNextPage && (
        <button
          className="w-20 my-2 p-2 border rounded-md bg-slate-400 text-black"
          onClick={() => {
            fetchMore({
              variables: {
                after: data.items.pageInfo.endCursor,
              },
            });
          }}
        >
          More
        </button>
      )}
    </div>
  );
}

export default PaginatedList;
