import { graphql } from "@/gql";

export const JOB_FIELDS = graphql(`
  fragment JobFields on Job {
    score
    text
    title
    url
  }
`);
