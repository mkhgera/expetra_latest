import NotFound from "@layouts/404";
import Subscription from "@layouts/Subscription";
import Base from "@layouts/Baseof";
import SignIn from "@layouts/SignIn";
import Default from "@layouts/Default";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;
  const activeChainId = ChainId.BinanceSmartChainTestnet;
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <Base
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      >
        {layout === "404" ? (
          <NotFound data={data} />
        ) : layout === "subscription" ? (
          <Subscription data={data} />
        ) : layout === "signin" ? (
          <SignIn data={data} />
        ) : (
          <Default data={data} />
        )}
      </Base>
    </ThirdwebProvider>
  );
};
export default RegularPages;

export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
