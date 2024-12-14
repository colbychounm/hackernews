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
          className="my-2 px-8 py-2 rounded-xl border border-divider"
          onClick={() => {
            fetchMore({
              variables: {
                after: data.items.pageInfo.endCursor,
              },
            });
          }}
        >
          View More
        </button>
      )}
    </div>
  );
}

export default PaginatedList;
