export const Post = () => {
  return <> I am post </>;
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = (pageContext = pageContext.query.slug);
  console.log(pageSlug);
  if (!pageSlug) {
    return {
      notfound: true,
    };
  }
};

export default Post;
