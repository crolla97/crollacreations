---
title: "Learning Gatsby"
date: "2019-09-11"
description: 'Porttitor massa id neque aliquam vestibulum morbi blandit. Neque laoreet suspendisse interdum consectetur.'
featured: false
---

Porttitor massa id neque aliquam vestibulum morbi blandit. Neque laoreet suspendisse interdum consectetur.

## Topics Covered

1. What is Gatsby?
2. Gatsby Docs
3. Other Resources

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero. Duis ultricies lacus sed turpis tincidunt id aliquet. Porttitor massa id neque aliquam vestibulum morbi blandit. Neque laoreet suspendisse interdum consectetur.

```js
query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    html
  }
}
```

## Lorem Ipsum

>"Platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros. Purus ut faucibus pulvinar elementum. Leo urna molestie at elementum eu facilisis sed odio morbi. Lorem mollis aliquam ut porttitor leo a diam".

Feugiat in ante metus dictum. In aliquam sem fringilla ut morbi tincidunt augue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Ante in nibh mauris cursus mattis molestie a. Eget gravida cum sociis natoque penatibus et magnis dis.
