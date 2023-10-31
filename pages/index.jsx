import { DefaultLayout } from "../layouts";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`11/15/${year}`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Phút: Math.floor((difference / 1000 / 60) % 60),
        Giây: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());
  const timerComponents = [];
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="lpg-timer-promotions">
        {timeLeft[interval]}
        {interval}{" "}
      </span>
    );
  });
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
            <Image src="/founder.jpg" alt="" width={480} height={480}></Image>
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
            <Image
              src="/co-founder.jpg"
              alt=""
              width={480}
              height={480}
            ></Image>
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
          <h1>Long Phụng Days</h1>
          <p>Long Phụng Days là ...................................</p>
          <div className="lpg-b-timer">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <Link href="" className="lpg-time-more">
            Xem Thêm
          </Link>
        </div>
      </section>
      <section className="lpg-s-news">
        <div className="lpg-container">
          <div className="lpg-b-header">
            <h1>Tin Tức Nổi Bật</h1>
          </div>
          <div className="lpg-b-body">
            <div className="lpg-b-items">
              <div className="lpg-b-img">
                <Link href="">
                  <Image
                    src="/Testing570px.jpg"
                    alt=""
                    width={570}
                    height={370}
                  ></Image>
                </Link>
              </div>
              <div className="lpg-b-content">
                <Link href="" className="lpg-a-title">
                  Interior design is the art, the interior designer is the
                  artist.
                </Link>
                <nav className="lpg-nav-day">
                  <ul>
                    <li>
                      <span>Octobe 15, 2022</span>
                    </li>
                    <li>
                      <Link href="">Hastheme</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="lpg-b-items">
              <div className="lpg-b-img">
                <Link href="">
                  <Image
                    src="/Testing570px.jpg"
                    alt=""
                    width={570}
                    height={370}
                  ></Image>
                </Link>
              </div>
              <div className="lpg-b-content">
                <Link href="" className="lpg-a-title">
                  Interior design is the art, the interior designer is the
                  artist.
                </Link>
                <nav className="lpg-nav-day">
                  <ul>
                    <li>
                      <span>Octobe 15, 2022</span>
                    </li>
                    <li>
                      <Link href="">Hastheme</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="lpg-b-items">
              <div className="lpg-b-img">
                <Link href="">
                  <Image
                    src="/Testing570px.jpg"
                    alt=""
                    width={570}
                    height={370}
                  ></Image>
                </Link>
              </div>
              <div className="lpg-b-content">
                <Link href="" className="lpg-a-title">
                  Interior design is the art, the interior designer is the
                  artist.
                </Link>
                <nav className="lpg-nav-day">
                  <ul>
                    <li>
                      <span>Octobe 15, 2022</span>
                    </li>
                    <li>
                      <Link href="">Hastheme</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  return { props: {} };
}
