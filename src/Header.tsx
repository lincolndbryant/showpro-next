import { useEffect } from "react";
import { Link } from "react-router";
import { SocialLinks } from "./SocialLinks.tsx";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document
        .querySelector("body")!
        .setAttribute("data-fix-header", String(window.scrollY >= 100));
    });
  }, []);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>SHOWPRO</h1>
          <svg
            width="300px"
            height="275px"
            viewBox="0 0 300 275"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <polygon
              fill="orange"
              stroke="orange"
              strokeWidth="10"
              color="orange"
              points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
            />
          </svg>
        </Link>
      </div>
      <blockquote>Where art and technology meet</blockquote>
      <div className="nav-wrapper">
        <nav>
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
          <Link to="https://blog.showpro.net/">Blog</Link>
        </nav>

        <SocialLinks />
      </div>
    </header>
  );
};
