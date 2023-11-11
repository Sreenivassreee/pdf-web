import { gql } from "@apollo/client";

export const FindOneEmailQuery = gql`
  query findOneEmail($payload: EmailInputDto!) {
    findOneEmail(payload: $payload)
  }
`;
