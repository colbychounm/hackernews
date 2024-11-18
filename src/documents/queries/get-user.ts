import { gql } from "@apollo/client";

const GET_USER = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      created
      karma
      about
      submitted
    }
  }
`;

export default GET_USER;
