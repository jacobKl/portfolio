const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/Post.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query Posts {
        allContentfulPost {
            edges {
                node {
                    title
                    author,
                    slug,
                    intro,
                    content {
                      raw
                    },
                    image {
                      gatsbyImageData
                    },
                    postedAt,
                    imageInfo,
                    secondTitle
                }
            }
        }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulPost.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: postTemplate,
        context: {
          title: edge.node.title,
          slug: edge.node.slug,
          author: edge.node.author,
          intro: edge.node.intro,
          image: edge.node.image,
          postedAt: edge.node.postedAt,
          imageInfo: edge.node.imageInfo,
          secondTitle: edge.node.secondTitle,
          content: edge.node.content
        },
      })
    })
  })
}