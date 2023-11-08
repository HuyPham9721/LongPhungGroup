import { DefaultLayout } from "../../layouts";
import Link from "next/link";
import Image from "next/image";
const News = (props) => {
  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-news">
          <div className="lpg-container">
            <div className="lpg-b-header">
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
    </>
  );
};
export default News;
export async function getServerSideProps() {
  return {
    props: {
      breakcrumb: {
        title: "Tin Tức",
        link: "/news",
      },
    },
  };
}
