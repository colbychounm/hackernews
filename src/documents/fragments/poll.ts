import { graphql } from "@/gql";

export const POLL_FIELDS = graphql(`
  fragment PollFields on Poll {
    descendants
    kids
    parts
    score
    text
    title
  }
`);
