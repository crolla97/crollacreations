const path  = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === 'build-html'
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        ScrollMagic: path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'animation.gsap': path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
        ),
        'debug.addIndicators': path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        ),
      },
    },
  })
}


module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }

}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/post.js')
  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Create blog posts pages
  const posts = res.data.allMarkdownRemark.edges
  
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1.].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.fields.slug}`,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      }
    })
  })
}