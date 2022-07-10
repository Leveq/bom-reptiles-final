export default {
  name: "posts",
  type: "document",
  title: "Blog Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
};
