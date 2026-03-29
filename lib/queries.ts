export const GET_PROJECTS = `
  query GetProjects {
    projects {
      nodes {
        id
        title
        projectUrl
        featured
        results {
          description
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;