import { gql } from "@apollo/client";

export const JOB_FIELDS = gql`
  fragment JobFields on Job {
    score
    text
    title
    url
  }
`;
