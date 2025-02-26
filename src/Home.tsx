import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import "./App.css";
import { Link } from "react-router";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

const SLIDES = [
  {
    imgUrl: "https://showpro.net/images/portfolio_teasers/special_events2.jpg",
    title: "Special Events",
    path: "/special-events",
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
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef}>
      <Header />
      <main>
        <Parallax
          speed={-5}
          scale={[2, 1]}
          startScroll={0}
          endScroll={320}
          translateX={[0, -32]}
          onProgressChange={(progress) => {
            if (pageRef.current) {
              pageRef.current.style.setProperty(
                "--scroll-progress",
                String(progress),
              );
            }
            document
              .querySelector("body")!
              .setAttribute("data-fix-header", String(window.scrollY >= 100));
          }}
        >
          <div className="hero">
            <div className="hero-bg" />
            <div className="company-name">SHOWPRO</div>
          </div>
        </Parallax>

        <div className="slides">
          {SLIDES.map(({ imgUrl, title, path }, i) => (
            <div key={imgUrl} className="gallery-item">
              <Link to={path ?? "#"}>
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
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
