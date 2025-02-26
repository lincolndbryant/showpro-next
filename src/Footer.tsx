import { SocialLinks } from "./SocialLinks.tsx";

export const Footer = () => {
  return (
    <footer>
      <p>For booking information, or general inquiries:</p>
      <h4>Michael Madsen, Head of Business Development</h4>

      <div className="contact-number">
        <a href="tel:+18476912427">(847) 691-2427</a> mobile
      </div>

      <div className="contact-number">
        <a href="tel:+13238058000">(323) 805-8000</a> office
      </div>

      <SocialLinks />
    </footer>
  );
};
