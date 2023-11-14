import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    let header = document.getElementById("myHeader");
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }, []);
  return (
    <>
      <header className="lpg-hdr" id="myHeader">
        <div className="lpg-container">
          <div className="lpg-b-logo">
            <Link href="/">
              <Image
                className="lpg-logo"
                src="/logo-lpg-1.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="lpg-span-name">
                <Image
                  className="lpg-font-logo"
                  src="/fontLPG.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </Link>
          </div>
          <nav className="lpg-b-nav">
            <ul>
              <li>
                <Link href="/">Trang Chủ</Link>
              </li>
              <li>
                <Link href="/introduce">Giới Thiệu</Link>
              </li>
              <li>
                <Link href="/shop">Sản Phẩm</Link>
              </li>
              <li>
                <Link href="/news">Tin Tức</Link>
              </li>
              <li>
                <Link href="/contact-us">Liên Hệ</Link>
              </li>
              <li>
                <Link href="/register" className="lpg-register">
                  Đăng Ký
                </Link>
              </li>
              <li>
                <Link href="/login" className="lpg-login">
                  Đăng Nhập
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lpg-b-hide">
            <button
              className="lpg-btn-hide"
              onClick={() => {
                $(".lpg-modal-menu").addClass("active");
                $(".lpg-modal-tabs").addClass("active");
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
