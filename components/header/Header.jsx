import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="lpg-container lpg-hdr">
        <div className="lpg-b-logo">
          <Image
            src="/logo-lpg.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <span className="lpg-span-name">Long Phụng Group</span>
        </div>
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
            <li>
              <Link href="">Đăng Ký</Link>
            </li>
            <li>
              <Link href="">Đăng Nhập</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
