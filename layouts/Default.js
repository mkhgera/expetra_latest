import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";

const Default = ({ data }) => {
  const { mdxContent } = data;
  return (
    <section className="section">
      <div className="container mt-10">
        <div className="content">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default Default;
