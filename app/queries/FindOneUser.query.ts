import { gql } from "@apollo/client";

export const FindOneUserQuery = gql`
  query FindOneUser {
    findOneUser {
      _id
      primaryEmail
      firstName
      lastName
      orgs {
        OrgName
        OrgId
        users {
          primaryEmail
        }
      }
    }
  }
`;
