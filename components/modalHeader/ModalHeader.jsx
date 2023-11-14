import Link from "next/link";
import $ from "jquery";
const ModalHeader = () => {
  return (
    <>
      <div
        className="lpg-modal-menu"
        onClick={() => {
          $(".lpg-modal-menu").removeClass("active");
          $(".lpg-modal-tabs").removeClass("active");
        }}
      >
        <div className="lpg-modal-tabs">
          <div className="lpg-b-header">
            <button
              className="lpg-btn-lose"
              onClick={() => {
                $(".lpg-modal-menu").removeClass("active");
                $(".lpg-modal-tabs").removeClass("active");
              }}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="lpg-b-body">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalHeader;
