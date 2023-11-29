import { gql } from '@apollo/client';
export const GET_ME = gql`
query Me {
    me {
      _id
      email
      username
      savedBooks {
        title
        description
        authors
        bookId
        image
        link
      }
    }
  }
  `