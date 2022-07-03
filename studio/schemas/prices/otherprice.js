export default {
  name: "other",
  title: "Other",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    { name: "name", type: "string", title: "Feeder name" },

    {
      title: "Prices",
      name: "prices",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
