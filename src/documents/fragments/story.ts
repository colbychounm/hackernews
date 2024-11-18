import gql from "graphql-tag";

export const STORY_FIELDS = gql`
  fragment StoryFields on Story {
    id
    by
    time
    type
    text
    descendants
    kids
    score
    title
    url
  }
`;
