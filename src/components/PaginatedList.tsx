"use client";

import GET_ITEMS from "@/documents/queries/get-items";
import { ListType } from "@/gql/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import Item from "./Item";

interface ListProps {
  listType: ListType;
}

function PaginatedList({ listType }: ListProps) {
  const [isPending, startTransition] = useTransition();
  const { data, fetchMore } = useSuspenseQuery(GET_ITEMS, {
    variables: {
      type: listType,
    },
  });

  return (
    <div className="flex-1">
      <ul className="py-4">
        {data?.items.edges.map(({ cursor, node }) => {
          switch (node.__typename) {
            case "Story":
              return (
                <Item.Story key={cursor} item={node} listType={listType} />
              );
            case "Job":
              return <Item.Job key={cursor} item={node} />;
          }
        })}
      </ul>
      {data?.items.pageInfo.hasNextPage && (
        <button
          className="mt-2 mb-8 px-8 py-2 w-40 h-12 relative left-auto right-auto rounded-xl border border-divider"
          onClick={() => {
            startTransition(() => {
              fetchMore({
                variables: {
                  after: data.items.pageInfo.endCursor,
                },
              });
            });
          }}
          disabled={isPending}
        >
          {isPending ? (
            <ArrowPathIcon className="icon-sm animate-spin mx-auto" />
          ) : (
            "View More"
          )}
        </button>
      )}
    </div>
  );
}

export default PaginatedList;
