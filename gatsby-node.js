
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const foo = [
    "dynamic-page-1", 
    "dynamic-page-2", 
    "dynamic-page-3",
  ];

  foo.map(titlePage => {

    createPage({
      path: `/subpath/${titlePage}`,
      component: require.resolve('./src/templates/example.jsx'),
      context: {
        titlePage,
      },
    });
  })

};
