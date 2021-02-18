import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotionData } from "../utils/api";

const Sidenav = ({ menuOpen }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getNotionData().then(setTags);
  }, [menuOpen]);
  console.log(tags);

  return (
    <div className="font-medium text-gray-dark text-xl  flex-row flex-wrap  mx-auto pt-16">
      <div className="flex justify-center w-full hover:bg-red hover:text-white cursor-pointer">
        <Link to="/blog" onClick={() => menuOpen()}>
          <p className="p-4">All Posts</p>
        </Link>
      </div>
      <div className="flex justify-center w-full hover:bg-red hover:text-white cursor-pointer">
        <Link to="/author" onClick={() => menuOpen()}>
          <p className="p-4">Автор</p>
        </Link>
      </div>
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex justify-center w-full hover:bg-red hover:text-white cursor-pointer"
        >
          <Link to="/author" onClick={() => menuOpen()}>
            <p className="p-4">{tag}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidenav;
