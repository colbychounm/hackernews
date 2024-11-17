import { gql } from "@apollo/client";
import { CORE_ITEM_FIELDS } from "../fragments/base-item";
import { COMMENT_FIELDS } from "../fragments/comment";
import { JOB_FIELDS } from "../fragments/job";
import { POLL_FIELDS } from "../fragments/poll";
import { POLLOPT_FIELDS } from "../fragments/pollopt";
import { STORY_FIELDS } from "../fragments/story";

const GET_ITEM = gql`
  query Item($id: Int!) {
    item(id: $id) {
      __typename
      ... on BaseItem {
        ...CoreItemFields
      }
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
  ${CORE_ITEM_FIELDS}
  ${COMMENT_FIELDS}
  ${STORY_FIELDS}
  ${JOB_FIELDS}
  ${POLL_FIELDS}
  ${POLLOPT_FIELDS}
`;

export default GET_ITEM;
