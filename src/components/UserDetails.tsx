"use client";

import GET_USER from "@/documents/queries/get-user";
import dayjs from "@/lib/dayjs";
import { useQuery } from "@apollo/client";

export default function UserDetails({
  userId,
}: Readonly<{
  userId: string;
}>) {
  const { data } = useQuery(GET_USER, {
    variables: {
      id: userId,
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <p className="font-bold w-24 text-sm">User</p>
        <p>{data?.user?.id}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold w-24 text-sm">Created</p>
        <p>
          {data?.user?.created &&
            dayjs.unix(data?.user?.created).toDate().toLocaleDateString()}
        </p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold w-24 text-sm">Karma</p>
        <p>{data?.user?.karma}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold w-24 text-sm">About</p>
        <p>{data?.user?.about}</p>
      </div>
    </div>
  );
}
