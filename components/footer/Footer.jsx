import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <footer className="lpg-footer">
        <div className="lpg-container">
          <div className="lpg-info-1">
            <Image
              src="/logo-lpg-1.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <span>
              Thành công của chúng tôi trong việc tạo ra các giải pháp kinh
              doanh phần lớn nhờ vào đội ngũ tài năng và tận tâm của chúng tôi.
            </span>
          </div>
          <div className="lpg-info-2">
            <h2>Long Phụng Group</h2>
            <nav className="lpg-b-nav">
              <ul>
                <li>
                  <Link href="">Trang Chủ</Link>
                </li>
                <li>
                  <Link href="">Giới Thiệu</Link>
                </li>
                <li>
                  <Link href="">Sản Phẩm</Link>
                </li>
                <li>
                  <Link href="">Tin Tức</Link>
                </li>
                <li>
                  <Link href="">Liên Hệ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lpg-info-3">
            <h2>Hệ Sinh Thái</h2>
            {/* <div
              class="fb-page"
              data-href="https://www.facebook.com/longphunggroup97"
              data-tabs=""
              data-width="400"
              data-height="300"
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/longphunggroup97"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/longphunggroup97">
                  Long Phụng Group
                </a>
              </blockquote>
            </div> */}
          </div>
          <div className="lpg-info-4">
            <h2>Đăng ký bản tin</h2>
            <div className="lpg-form">
              <div className="lpg-form-group">
                <input type="text" placeholder="Email ... " />
              </div>
              <div className="lpg-form-group">
                <button type="button" className="lpg-btn">
                  Đăng Ký Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
