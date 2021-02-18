const Article = ({
  title,
  desc,
  publish_date,
  link,
  cover_image,
  id,
  color,
  tags,
}) => {
  console.log(cover_image);
  return (
    <div className={`bg-${color} font-mono rounded overflow-hidden shadow-lg`}>
      <a href={link}>
        <img
          src={cover_image[0].url}
          className="w-full object-cover h-48"
          alt={id}
        />
        <div className="px-6 py-4">
          <div className="mb-2 font-bold text-gray-dark tracking-widest text-xl">
            <h2>{title}</h2>
          </div>
          <p className="text-gray-light font-light text-sm">{desc}</p>
          <div className="py-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="font-mono font-light inline-block border-blue border-2 rounded px-3 py-1 text-xs text-blue mr-2 mb-2 shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Article;
