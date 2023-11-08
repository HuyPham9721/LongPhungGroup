import Link from "next/link";
import { DefaultLayout } from "../../layouts";
import Image from "next/image";
const Shop = (props) => {
  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-shop">
          <div className="lpg-container">
            <aside>
              <div className="lpg-b-aside-title">
                <h2>Categories</h2>
                <nav>
                  <ul>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="lpg-b-aside-title">
                <h2>Categories</h2>
                <nav>
                  <ul>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                    <li>
                      <button type="button" className="">
                        All
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
            <article>
              <div className="lpg-b-prod">
                <div className="lpg-b-img">
                  <Link href="">
                    <Image
                      src="/sp-1.jpg"
                      alt=""
                      width={1000}
                      height={800}
                    ></Image>
                    <div>
                      <button className="" type="button">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="lpg-b-content">
                  <Link href="" className="lpg-title-name">
                    Tẩy Tế Bào Chết
                  </Link>
                  <span className="lpg-title-price">399.000 VND</span>
                </div>
              </div>
            </article>
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
        title: "Sản Phẩm",
        link: "/shop",
      },
    },
  };
}
