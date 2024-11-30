import { graphql } from "@/gql";

const GET_ITEM = graphql(`
  query Item($id: Int!) {
    item(id: $id) {
      id
      type
      by
      time
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
`);

export default GET_ITEM;
