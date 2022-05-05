import { graphql } from 'gatsby';

export const LocalImage = graphql`
  fragment LocalImageFragment on File {

    __typename
    id
    name
    relativePath
    publicURL
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: BLURRED)
    }

  }
`;
