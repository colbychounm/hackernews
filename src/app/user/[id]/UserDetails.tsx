"use client";

import GET_USER from "@/documents/queries/get-user";
import { UserQuery, UserQueryVariables } from "@/gql/graphql";
import { useQuery } from "@apollo/client";

export default function UserDetails({
  userId,
}: Readonly<{
  userId: string;
}>) {
  const { data } = useQuery<UserQuery, UserQueryVariables>(GET_USER, {
    variables: {
      id: userId,
    },
  });

  return (
    <div>
      <div className="flex">
        <p>User:</p> <p>{data?.user?.id}</p>
      </div>
      <div className="flex">
        <p>Created:</p> <p>{data?.user?.created}</p>
      </div>
      <div className="flex">
        <p>Karma:</p> <p>{data?.user?.karma}</p>
      </div>
      <div className="flex">
        <p>About:</p> <p>{data?.user?.about}</p>
      </div>
    </div>
  );
}
