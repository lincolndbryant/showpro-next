import { Header } from "./Header.tsx";

export const Careers = () => {
  return (
    <>
      <Header />
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
        <a
          href="mailto:info@showpro.net"
          target="_blank"
          id="btn-cfc534e5-2704-4bcd-a7fe-5d53e631292a"
          className="sppb-btn  sppb-btn-default sppb-btn-rounded"
        >
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
    </>
  );
};
