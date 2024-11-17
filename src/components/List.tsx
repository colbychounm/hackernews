"use client";

import GET_ITEMS from "@/documents/queries/get-items";
import { ItemsQuery, ListType } from "@/gql/graphql";
import { useQuery } from "@apollo/client";
import ListItem from "./ListItem";

interface ListProps {
  type: ListType;
}

function List({ type }: ListProps) {
  const { data, fetchMore } = useQuery<ItemsQuery>(GET_ITEMS, {
    variables: {
      type,
    },
  });

  return (
    <div className="flex-1">
      <ul className="py-4">
        {data?.items.edges.map(({ cursor, node }) => (
          <ListItem key={cursor} item={node} />
        ))}
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

export default List;
