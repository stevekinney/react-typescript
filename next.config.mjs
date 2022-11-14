import mdx from "@next/mdx";
import frontmatter from "remark-frontmatter";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
    rehypePlugins: [],
  },
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
