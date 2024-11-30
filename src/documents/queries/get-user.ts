import { graphql } from "@/gql";

const GET_USER = graphql(`
  query User($id: String!) {
    user(id: $id) {
      id
      created
      karma
      about
      submitted
    }
  }
`);

export default GET_USER;
