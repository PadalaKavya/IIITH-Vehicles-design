import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createuser(
    $ARAIMileage: String!
    $TransmissionType: String!
    $bhp: String
  ) {
    createuser(
      ARAIMileage: $ARAIMileage
      TransmissionType: $TransmissionType
      bhp: $bhp
    ) {
      id
    }
  }
`;