export const getNotionData = async () => {
  const notionTableData = await fetch(
    "https://notion-api.splitbee.io/v1/table/8bd1eaba131e46128e328d2d3e436145"
  ).then((res) => res.json());
  const tags = notionTableData.map((post) => post.tags).flat(2);
  console.log(tags);
  return tags;
};
