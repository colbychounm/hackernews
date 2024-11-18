import { gql } from "@apollo/client";
import { COMMENT_FIELDS } from "../fragments/comment";
import { JOB_FIELDS } from "../fragments/job";
import { POLL_FIELDS } from "../fragments/poll";
import { POLLOPT_FIELDS } from "../fragments/pollopt";
import { STORY_FIELDS } from "../fragments/story";

const GET_ITEMS = gql`
  query Items($type: ListType!, $first: Int, $after: Int) {
    items(type: $type, first: $first, after: $after) {
      edges {
        cursor
        node {
          __typename
          ... on Comment {
            ...CommentFields
          }
          ... on Story {
            ...StoryFields
          }
          ... on Job {
            ...JobFields
          }
          ... on Poll {
            ...PollFields
          }
          ... on PollOpt {
            ...PollOptFields
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${COMMENT_FIELDS}
  ${STORY_FIELDS}
  ${JOB_FIELDS}
  ${POLL_FIELDS}
  ${POLLOPT_FIELDS}
`;

export default GET_ITEMS;
