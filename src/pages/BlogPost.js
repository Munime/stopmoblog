import React from "react";
import { Link } from "react-router-dom";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockMap: {},
    };
  }

  async blogNameToId(blogTitle) {
    const blogsDatabase = await fetch(
      "https://notion-api.splitbee.io/v1/table/8bd1eaba131e46128e328d2d3e436145"
    ).then((res) => res.json());

    try {
      const blog = blogsDatabase
        .filter((blog) => blog.slug === blogTitle)
        .pop();
      return blog.id;
    } catch {
      return null;
    }
  }

  async componentDidMount() {
    const blogId = await this.blogNameToId(this.props.match.params.blogTitle);
    const blogData = await fetch(
      `https://notion-api.splitbee.io/v1/page/${blogId}`
    ).then((res) => res.json());

    this.setState({ blockMap: blogData });
  }

  render() {
    const { blockMap } = this.state;
    console.log(blockMap);
    return (
      <div className="bg-white font-mono text-gray-dark">
        <Link to="/">GO BACK</Link>
        <NotionRenderer
          fullPage
          hideHeader
          blockMap={blockMap}
          className="font-mono"
        />
      </div>
    );
  }
}
