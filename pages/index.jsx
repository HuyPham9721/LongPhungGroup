import { DefaultLayout } from "../layouts";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Countdown from "react-countdown";
export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const settings_executive_board = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
                src="/banner1.jpg"
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
      <section className="lpg-s-founder">
        <div className="lpg-container">
          <div className="lpg-b-inf4 lpg-founder">
            <Image src="/founder.jpg" width={480} height={480}></Image>
            <div className="lpg-b-contact">
              <h1>Founder</h1>
              <Link className="lpg-a-name" href="">
                Nguyễn Thị Ngọc Thủy
              </Link>
              <span>
                Khi chúng ta mong ước cuộc đời không nghịch cảnh, hãy nhớ rằng
                cây sồi trở nên mạnh mẽ trong gió ngược, và kim cương hình thành
                dưới áp lực.
              </span>
              <Link className="lpg-a-readmore" href="">
                Xem Thêm
              </Link>
            </div>
          </div>
          <div className="lpg-b-inf4 lpg-cofounder">
            <Image src="/co-founder.jpg" width={480} height={480}></Image>
            <div className="lpg-b-contact">
              <h1>Co-Founder</h1>
              <Link className="lpg-a-name" href="">
                Nguyễn Kim Trọng
              </Link>
              <span>
                Bạn thật sự có thể tạo ra điều khác biệt. Tuy nhiên, bạn không
                thể thay đổi thế giới chỉ trong một đêm. Điều đó nghe thật nản
                lòng. Bởi vì thay đổi là một điều khó khăn nên phải cần rất
                nhiều sự nỗ lực.
              </span>
              <Link className="lpg-a-readmore" href="">
                Xem Thêm
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="lpg-s-executive-board">
        <div className="lpg-container">
          <div className="lpg-b-header">
            <h1>Ban Điều Hành</h1>
          </div>
          <div className="lpg-b-body">
            <Slider {...settings_executive_board}>
              <div className="lpg-b-item">
                <div className="lpg-b-img">
                  <Image
                    src="/founder.jpg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </div>
                <div className="lpg-b-content">
                  <h1>Diamond</h1>
                  <Link href="">Nguyễn Thị Ngọc Thủy</Link>
                </div>
              </div>
              <div className="lpg-b-item">
                <div className="lpg-b-img">
                  <Image
                    src="/founder.jpg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </div>
                <div className="lpg-b-content">
                  <h1>Diamond</h1>
                  <Link href="">Nguyễn Thị Ngọc Thủy</Link>
                </div>
              </div>
              <div className="lpg-b-item">
                <div className="lpg-b-img">
                  <Image
                    src="/founder.jpg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </div>
                <div className="lpg-b-content">
                  <h1>Diamond</h1>
                  <Link href="">Nguyễn Thị Ngọc Thủy</Link>
                </div>
              </div>
              <div className="lpg-b-item">
                <div className="lpg-b-img">
                  <Image
                    src="/founder.jpg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </div>
                <div className="lpg-b-content">
                  <h1>Diamond</h1>
                  <Link href="">Nguyễn Thị Ngọc Thủy</Link>
                </div>
              </div>
              <div className="lpg-b-item">
                <div className="lpg-b-img">
                  <Image
                    src="/founder.jpg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </div>
                <div className="lpg-b-content">
                  <h1>Diamond</h1>
                  <Link href="">Nguyễn Thị Ngọc Thủy</Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="lpg-s-promotions">
        <div className="lpg-container">
          <h1>Promotions</h1>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            for those. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et
            Malorum
          </p>
          <span>
            <Countdown date={Date.now() + 1000000} onTick={true} />
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
