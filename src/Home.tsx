import { useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "./App.css";
import { Link } from "react-router";

const SLIDES = [
  {
    imgUrl: "https://showpro.net/images/portfolio_teasers/special_events2.jpg",
    title: "Special Events",
  },
  {
    imgUrl:
      "https://showpro.net/images/igallery/original/101-200/img_s05-164.jpg",
    title: "Corporate Meetings",
  },
  {
    imgUrl:
      "https://showpro.net/images/igallery/original/401-500/img-8822-486.jpg",
    title: "Sports Entertainment",
  },
  {
    imgUrl:
      "https://showpro.net/images/video/showpro_videos/2015-09_emmys_2015_time_lapse.jpg",
    title: "Permanent Installations",
  },
  {
    imgUrl:
      "https://showpro.net/images/igallery/original/301-400/special_img_s01_61_1920_1080-358.jpg",
    title: "Exhibits",
  },
  {
    imgUrl:
      "https://showpro.net/images/igallery/original/301-400/2014_doug_aitken_station_to_station_us_tour-339.jpg",
    title: "Touring & Experimental",
  },
];

export const Home = () => {
  const [fixHeader, setFixHeader] = useState(false);
  const pageRef = useRef<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <header className={fixHeader ? "is-fixed" : undefined}>
        <div className="logo">
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
              stroke-width="10"
              color="orange"
              points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
            />
          </svg>
        </div>
        <blockquote>Where art and technology meet</blockquote>
      </header>
      <nav>
        <Link to="/capabilities">Capabilities</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <main>
        <Parallax
          speed={-5}
          scale={[2, 1]}
          startScroll={100}
          endScroll={320}
          translateX={[0, -32]}
          onProgressChange={(progress) => {
            pageRef.current.style.setProperty("--scroll-progress", progress);
            setFixHeader(progress >= 1);
          }}
        >
          <div className="hero">
            <div className="hero-bg" />
            <div className="company-name">SHOWPRO</div>
          </div>
        </Parallax>

        <div className="slides">
          {SLIDES.map(({ imgUrl, title }, i) => (
            <div className="gallery-item">
              <div className="item-bg" />
              <Parallax
                key={i}
                //speed={10 * (i / 2)}
                speed={5}
                //scaleY={[1, 0.8]}
                easing="easeInQuad"
              >
                <img alt={title} src={imgUrl} />
              </Parallax>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>For booking information, or general inquiries:</p>

        <h3>Michael Madsen, Head of Business Development</h3>

      </footer>
    </div>
  );
};
