import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//Page component which containes all UI elements for page

export default ({data}) => {

  const posts = data.allContentfulBlogPost.edges.map((post)=>
    <li><Link to={post.node.slug}>{post.node.title}</Link></li>
  );
  return (
      <ul>
        {posts}
      </ul>
  );
}

export const query = graphql`
  query{
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          body {
            json
          }
          publishDate
        }
      }
    }
  }
`