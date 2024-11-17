import { gql } from "@apollo/client";

export const CORE_ITEM_FIELDS = gql`
  fragment CoreItemFields on BaseItem {
    id
    by
    time
    type
  }
`;
