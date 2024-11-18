import List from "@/components/List";
import { ListType } from "@/gql/graphql";

export const dynamic = "force-static";

const listTypesParams = {
  newest: "newest",
  front: "front",
  newComments: "newcomments",
  ask: "ask",
  show: "show",
  jobs: "jobs",
};

export async function generateStaticParams() {
  return Object.values(listTypesParams).map((type) => ({
    type,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = mappingListType((await params).type);
  return (
    <div className="h-full px-8">
      <List type={type} />
    </div>
  );
}

function mappingListType(param: string) {
  switch (param) {
    case listTypesParams.ask:
      return ListType.Askstories;
    case listTypesParams.jobs:
      return ListType.Jobstories;
    case listTypesParams.newest:
      return ListType.Newstories;
    case listTypesParams.show:
      return ListType.Showstories;
    default:
      return ListType.Askstories;
  }
}
