import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { footer_content } = config.params;
  const { email } = config.contact_info;
  return (
    <footer className="bg-theme-dark">
      <div className="container">
        <div className="row py-12 flex justify-between">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
              {email && <Link href={`mailto:${email}`}>{email}</Link>}
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
