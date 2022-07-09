// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import miceprice from "./prices/miceprice";
import ratprice from "./prices/ratprice";
import liveprice from "./prices/liveprice";
import otherprice from "./prices/otherprice";
import services from "./services";
import posts from "./posts";
import blockContent from "./blockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    miceprice,
    ratprice,
    liveprice,
    otherprice,
    services,
    posts,
    blockContent,
  ]),
});
