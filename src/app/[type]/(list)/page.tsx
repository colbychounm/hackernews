import Loading from "@/components/Loading";
import PaginatedList from "@/components/PaginatedList";
import { ListType } from "@/gql/graphql";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export const dynamicParams = false;

const listTypesParams = {
  newest: "news",
  ask: "ask",
  show: "show",
  jobs: "jobs",
};

export async function generateStaticParams() {
  return Object.values(listTypesParams).map((type) => ({
    type,
  }));
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
      return null;
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams?: Promise<{
    sortBy: ListType.Beststories | ListType.Topstories;
  }>;
}) {
  const param = (await params).type;
  const sortBy = (await searchParams)?.sortBy;
  const listType = sortBy || mappingListType(param);

  if (!listType) return null;

  const shouldShowNewsSortButton = [
    ListType.Newstories,
    ListType.Topstories,
    ListType.Beststories,
  ].includes(listType);

  return (
    <>
      <div className="flex my-4 items-center justify-between bg-white">
        <p className="font-bold text-2xl">
          {param.slice(0, 1).toUpperCase() + param.slice(1)}
        </p>

        {shouldShowNewsSortButton && (
          <div className="flex gap-4 items-center">
            <Link
              href={{
                pathname: param,
                query: {
                  sortBy: ListType.Topstories,
                },
              }}
              className={`nav-link ${
                sortBy === ListType.Topstories ? "nav-link-active" : ""
              }`}
            >
              Latest
            </Link>
            <Link
              href={{
                pathname: param,
                query: {
                  sortBy: ListType.Beststories,
                },
              }}
              className={`nav-link ${
                sortBy === ListType.Beststories ? "nav-link-active" : ""
              }`}
            >
              Popular
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 px-8  bg-grey-100 rounded-lg">
        <MagnifyingGlassIcon className="icon-md text-grey-900" />
        <input
          className="h-14 w-full text-lg bg-grey-100 text-grey-900 focus:outline-none"
          placeholder="Search..."
        />
      </div>

      <Suspense
        fallback={
          <div className="my-4">
            <Loading />
          </div>
        }
      >
        <PaginatedList listType={listType} />
      </Suspense>
    </>
  );
}
