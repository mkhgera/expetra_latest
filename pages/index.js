import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import { getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Home = ({ features, speciality, members }) => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={speciality.primary.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              {markdownify(
                speciality.primary.title,
                "h2",
                "mt-4 section-title bar-left text-light"
              )}
              {markdownify(speciality.primary.description, "p", "mt-10")}
              <Link
                href={speciality.primary.button.link}
                className="btn btn-primary mt-5"
              >
                {speciality.primary.button.label}
              </Link>
            </div>
          </div>
          <div className="row items-center">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={speciality.secondary.image}
                width={575}
                height={511}
                alt="secondary speciality"
              />
            </div>
            <div className="animate lg:col-5">
              {markdownify(
                speciality.secondary.title,
                "h2",
                "mt-4 section-title bar-left text-light"
              )}
              {markdownify(speciality.secondary.description, "p", "mt-10")}
              <Link
                href={speciality.secondary.button.link}
                className="btn btn-primary mt-5"
              >
                {speciality.secondary.button.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={features.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              <p className="uppercase">{features.sub_title}</p>

              <div className="pb-20">
                {markdownify(
                  features.feature1.title,
                  "h3",
                  "mt-4 section-title bar-left text-light"
                )}
                {markdownify(features.feature1.description, "p", "mt-10")}
              </div>

              <div className="pt-20">
                {markdownify(
                  features.feature2.title,
                  "h3",
                  "mt-4 section-title bar-left text-light"
                )}
                {markdownify(features.feature2.description, "p", "mt-10")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section container">
          <div className="animate text-center">
            {markdownify(
              members.title,
              "h2",
              "section-title mt-4 text-primary"
            )}
            {markdownify(members.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {members.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 md:col-6 lg:col-4"
                  >
                    <div className="h-auto w-auto rounded-xl border-2 border-primary bg-theme-dark p-5">
                      <h4 className="text-primary">{member.name}</h4>
                      <h5 className="mt-5">{member.price}</h5>
                      <p className="mt-3">{member.field}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { features, speciality, members } = frontmatter;

  return {
    props: {
      features: features,
      speciality: speciality,
      members: members,
    },
  };
};
