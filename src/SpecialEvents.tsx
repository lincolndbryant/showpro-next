import { useEffect, useRef } from "react";
import { Header } from "./Header.tsx";
// @ts-expect-error no types
import Masonry from "masonry-layout";

const GALLERY = [
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-107-450-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0011-0405acm-lak-lakers-431-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-110-451-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/dsc-4697-457-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…00/004-megavision-1005meg-lb-430-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-310-453-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/116acm-ali-1-432-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/200-blk-ferrari-433-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0305new-tvg-tv-guide-6-434-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0405k1-bel-k-1-11-435-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0502k1a-box3-k-1-2-436-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0502k1a-box3-k-1-4-437-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0502k1a-box3-k-1-39-438-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/0515acd-gcs3-fox-gcs-2-439-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…00/0912kkbt-par-kkbt-float-3-440-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/1999-poko-sun-valley-1-441-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/2000-lakers-442-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…-e1ca-48dc-bfcd-b4b436f3c23e-443-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…didas-supershell-pr-color-02-444-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…didas-interactive-projection-445-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/blue-use-me-446-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/bmw-course-447-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/bon-jovi-still-1-448-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-002-449-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-306-452-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/cyw-adidasallstar-445-454-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/dsc-0034-455-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/dsc-0106-456-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/dsc-4736-458-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…0/e210272011espys-071311--04-459-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…0/e210272011espys-071311--80-460-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/ford-truss-3-461-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/hdc-soccer-use-me-462-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/hdc-stars-use-me-463-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…epot-0606acm-hom3-logos-1670-464-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-1326-465-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-1732-466-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2370-467-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2371-468-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2491-469-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2674-470-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2750-471-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-2877-472-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-3111-473-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-3224-474-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-3876-475-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-4089-476-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-4430-477-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-4502-478-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-5339-479-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-5432-480-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-5527-481-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-5790-482-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-6002-483-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-6717-484-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-6952-485-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-8822-486-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-8889-487-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-9187-488-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-9592-489-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-9595-490-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img-9610-491-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/img00259-492-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/jordanselectsday2-011-493-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/jordanselectsday4-021-494-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/journey-6-495-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/kamp-adidas-led-floor-496-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/kamp-alphabounce-497-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/40…dumbo-interactive-projection-498-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/la-kings-opener-1-499-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/401-500/la-kings-opener-3-500-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/lakers-501-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/led-train-2-502-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/mbc-goldsmith-02-503-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/50…sion-arts-stadium-projection-504-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/mm-and-johnny-505-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/oceans-13-use-me-506-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/p1000305-507-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/photo-1-508-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/pxl-20230109-064929095-509-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/pxl-20230109-064947080-510-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/50…600/sb-exp-rock-hall-booth-5-511-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/sb1-6768-512-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/501-600/sc-0801-513-680-1000-100.jpg",
  "https://www.showpro.net/images/igallery/resized/50…isoft-press-conference",
];

export const SpecialEvents = () => {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (grid.current) {
      new Masonry(grid.current, {
        itemSelector: "img",
        columnWidth: "img",
        percentPosition: true,
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div ref={grid} className="masonry-grid">
        {GALLERY.map((imgSrc) => (
          <img key={imgSrc} src={imgSrc} />
        ))}
      </div>
    </>
  );
};
