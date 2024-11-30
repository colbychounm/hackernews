import { graphql } from "@/gql";

export const POLLOPT_FIELDS = graphql(`
  fragment PollOptFields on PollOpt {
    poll
    score
    text
  }
`);
