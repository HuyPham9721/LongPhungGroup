import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="lpg-container lpg-hdr">
        <div className="lpg-b-logo">
          <Link href="/">
            {" "}
            <Image
              src="/logo-lpg.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <span className="lpg-span-name">Long Phụng Group</span>
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
              <Link href="">Sản Phẩm</Link>
            </li>
            <li>
              <Link href="">Tin Tức</Link>
            </li>
            <li>
              <Link href="/contact-us">Liên Hệ</Link>
            </li>
            <li>
              <button type="button" className="lpg-btn-search"></button>
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
      </header>
    </>
  );
};
export default Header;
