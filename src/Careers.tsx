import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

export const Careers = () => {
  return (
    <>
      <Header />
      <div className="hero-banner">
        <img
          className="hero"
          src="https://www.showpro.net/images/2024-06_blog_sunbelt.jpg"
        />
      </div>

      <div className="route-careers">
        <h3 className="careers-subheading">
          We are always on the lookout for sharp, creative folks who love to
          collaborate.
        </h3>

        <h4>Freelancers</h4>
        <p>
          Please let us know if you would like to join our freelance audio,
          video, lighting, LED or programming teams.
        </p>
        <a className="button" href="mailto:info@showpro.net" target="_blank">
          FREELANCER INQUIRIES
        </a>

        <h4>Career Opportunities</h4>
        <p>
          We don't have any full time career opportunities now, but we often do.
          Please check back regularly. The best way to get your resume to the
          top of the full time staff positions is to freelance with us. Please
          come join our team!
        </p>
      </div>

      <Footer />
    </>
  );
};
