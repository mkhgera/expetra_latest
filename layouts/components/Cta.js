import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Circle from "./Rectangle";
import ImageFallback from "./ImageFallback";

function Cta() {
  const { title, content, buttonIos, buttonAndroid, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <section className="cta section pt-0 ">
      <div className="container-xl">
        <div className="section relative px-4 text-center">
          <div className="animate">
            {markdownify(title, "h2", "section-title text-light")}
            {markdownify(content, "p", "mt-10")}
            <Link href={buttonIos.link} className="btn btn-primary mt-10 mr-10">
              {buttonIos.label}
            </Link>
            <Link href={buttonAndroid.link} className="btn btn-primary mt-10 ml-10">
              {buttonAndroid.label}
            </Link>
          </div>
          <div className="bg-theme animated-bg absolute top-0 left-0 w-full after:hidden">
            <ImageFallback
              src="/images/wave.svg"
              fill={true}
              sizes="100vw"
              alt="bg wave"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
