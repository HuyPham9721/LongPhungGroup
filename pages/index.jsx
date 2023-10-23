import { DefaultLayout } from "../layouts";
import Slider from "react-slick";
import Image from "next/image";
export default function Home({ seo }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <DefaultLayout>
      <section className="lpg-s-banner-home">
        <div className="lpg-b-banner">
          <Slider {...settings}>
            <div className="lpg-b-img">
              <Image
                src="/slider_1.webp"
                width={1920}
                height={1080}
                alt="Picture of the author"
              />
            </div>
            <div className="lpg-b-img">
              <Image
                src="/slider_5.webp"
                width={1920}
                height={1080}
                alt="Picture of the author"
              />
            </div>
          </Slider>
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
