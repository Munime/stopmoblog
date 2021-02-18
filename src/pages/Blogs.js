import React from "react";
import "prismjs/themes/prism-tomorrow.css";
import Article from "../components/Article";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  async componentDidMount() {
    const notionTableData = await fetch(
      "https://notion-api.splitbee.io/v1/table/8bd1eaba131e46128e328d2d3e436145"
    ).then((res) => res.json());

    this.setState({
      tableData: notionTableData.filter((post) => post.status === "published"),
    });
  }

  render() {
    const { tableData } = this.state;
    return (
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
        {tableData.map((post, index) => {
          return (
            <Article
              key={index}
              title={post.title}
              desc={post.desc}
              link={"/blog/" + post.slug + "/" + post.id}
              {...post}
            />
          );
        })}
      </div>
    );
  }
}

export default Blogs;
