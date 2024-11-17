import { Item, ItemConnection } from "../types/resolvers";

export async function generateConnection(
  ids: number[],
  resolver: (id: number) => Promise<Item>,
  first?: number | null,
  after?: number | null
): Promise<ItemConnection> {
  const indexFromCursor = ids.findIndex((id) => id === after);

  const start = indexFromCursor ? indexFromCursor + 1 : 0;
  const end = start + (first || 10);

  const chunkIds = ids.slice(start, end);

  const items = await Promise.all(chunkIds.map((id) => resolver(id)));

  const endCursorIndex = ids.findIndex(
    (id) => id === items[items.length - 1].id
  );

  return {
    edges: items.map((item) => ({
      node: item,
      cursor: item.id,
    })),
    pageInfo: {
      hasNextPage: !!ids[endCursorIndex + 1],
      endCursor: ids[endCursorIndex],
    },
  };
}
