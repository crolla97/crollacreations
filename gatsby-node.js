exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules'],
      alias: {
        'TweenLite': 'gsap/src/minified/TweenLite.min.js',
        'TweenMax': 'gsap/src/minified/TweenMax.min.js',
        'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
        'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
        'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
        'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
      }
    }
  });
};

const path  = require('path')

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