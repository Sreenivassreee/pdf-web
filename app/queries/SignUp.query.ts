import { gql } from "graphql-request";

export const SignUpQuery = gql`
  mutation signUp($payload: IdentitySignUpInputDto!) {
    signUp(payload: $payload)
  }
`;
