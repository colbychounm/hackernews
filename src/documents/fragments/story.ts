import { graphql } from "@/gql";

export const STORY_FIELDS = graphql(`
  fragment StoryFields on Story {
    text
    descendants
    kids
    score
    title
    url
  }
`);
