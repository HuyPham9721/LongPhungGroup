import Link from "next/link";
import { DefaultLayout } from "../../layouts";
import Image from "next/image";
const Shop = (props) => {
  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-shop">
          <div className="lpg-container">
            <div className="lpg-b-header">
              <h2>Showing 1–9 of 21 results</h2>
            </div>
            <div className="lpg-b-body">
              <div className="lpg-b-prod">
                <div className="lpg-b-img">
                  <Link href="">
                    <Image
                      src="/sp-1.jpg"
                      alt=""
                      width={1000}
                      height={800}
                    ></Image>
                  </Link>
                </div>
                <div className="lpg-b-content">
                  <Link href="" className="lpg-title-name">
                    Tẩy Tế Bào Chết
                  </Link>
                </div>
              </div>{" "}
              <div className="lpg-b-prod">
                <div className="lpg-b-img">
                  <Link href="">
                    <Image
                      src="/sp-1.jpg"
                      alt=""
                      width={1000}
                      height={800}
                    ></Image>
                  </Link>
                </div>
                <div className="lpg-b-content">
                  <Link href="" className="lpg-title-name">
                    Tẩy Tế Bào Chết
                  </Link>
                </div>
              </div>{" "}
              <div className="lpg-b-prod">
                <div className="lpg-b-img">
                  <Link href="">
                    <Image
                      src="/sp-1.jpg"
                      alt=""
                      width={1000}
                      height={800}
                    ></Image>
                  </Link>
                </div>
                <div className="lpg-b-content">
                  <Link href="" className="lpg-title-name">
                    Tẩy Tế Bào Chết
                  </Link>
                </div>
              </div>{" "}
              <div className="lpg-b-prod">
                <div className="lpg-b-img">
                  <Link href="">
                    <Image
                      src="/sp-1.jpg"
                      alt=""
                      width={1000}
                      height={800}
                    ></Image>
                  </Link>
                </div>
                <div className="lpg-b-content">
                  <Link href="" className="lpg-title-name">
                    Tẩy Tế Bào Chết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};
export default Shop;
export async function getServerSideProps() {
  return {
    props: {
      breakcrumb: {
        title: "E-Cometic",
        titleLink: "Sản Phẩm",
        link: "/shop",
      },
    },
  };
}
