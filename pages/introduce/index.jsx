import { useEffect, useState } from "react";
import { DefaultLayout } from "../../layouts";
import Image from "next/image";
import { Information } from "../../components";
import $ from "jquery";
const Introduce = (props) => {
  useEffect(() => {
    const btn1 = document.querySelector(".lpg-b-hst-1");
    const btn2 = document.querySelector(".lpg-b-hst-2");
    const btn3 = document.querySelector(".lpg-b-hst-3");
    const btn4 = document.querySelector(".lpg-b-hst-4");
    const btn5 = document.querySelector(".lpg-b-hst-5");
    const btn6 = document.querySelector(".lpg-b-hst-6");
    const btn7 = document.querySelector(".lpg-b-hst-7");
    const btn8 = document.querySelector(".lpg-b-hst-8");
    const btn9 = document.querySelector(".lpg-b-hst-9");

    function visible1() {
      btn1.style.opacity = "1";
    }
    function visible2() {
      btn2.style.opacity = "1";
    }
    function visible3() {
      btn3.style.opacity = "1";
    }
    function visible4() {
      btn4.style.opacity = "1";
    }
    function visible5() {
      btn5.style.opacity = "1";
    }
    function visible6() {
      btn6.style.opacity = "1";
    }
    function visible7() {
      btn7.style.opacity = "1";
    }
    function visible8() {
      btn8.style.opacity = "1";
    }
    function visible9() {
      btn9.style.opacity = "1";
    }
    const timeout1 = setTimeout(visible1, 400);
    const timeout2 = setTimeout(visible2, 800);
    const timeout3 = setTimeout(visible3, 1200);
    const timeout4 = setTimeout(visible4, 1600);
    const timeout5 = setTimeout(visible5, 2000);
    const timeout6 = setTimeout(visible6, 2400);
    const timeout7 = setTimeout(visible7, 2800);
    const timeout8 = setTimeout(visible8, 3200);
    const timeout9 = setTimeout(visible9, 3600);

    return () =>
      clearInterval(
        timeout1,
        timeout2,
        timeout3,
        timeout4,
        timeout5,
        timeout6,
        timeout7,
        timeout8,
        timeout9
      );
  }, []);
  const [open, setOpen] = useState(false);

  const gtcl = {
    1: {
      title: "1. Education: GIÁO DỤC ",
      description:
        "Lấy phát triển con người làm gốc để phát triển công việc kinh doanh, Long Phụng Group đặc biệt chú trọng vào giá trị giáo dục. Được ví như một trường Đại học, Long Phụng Group tạo ra một nền giáo dục giúp NPP được học tập & phát triển với tôn chỉ “ Thành nhân trước khi thành công ” cùng với khát vọng to lớn về con đường góp phần “ Thay đổi tư duy cho nền giáo dục Việt Nam ” trong tương lai.",
    },
    2: {
      title: "2. E-cosystem: HỆ SINH THÁI",
      description:
        "Không chỉ tạo ra môi trường làm việc & học tập tiến bộ cho NPP, điều mà Long Phụng Group còn hướng đến đó chính là tạo ra những Hệ sinh thái & ứng dụng những Hệ sinh thái đó vào trong công việc để phát triển công việc kinh doanh, tạo nên tập thể thành công vững mạnh. Đặc biệt những Hệ sinh thái của Long Phụng Group còn phục vụ cho những lợi ích khác nhau của đời sống cho cộng đồng & cho những NPP Long Phụng Group góp phần biến Long Phụng Group không chỉ là nơi đáng học tập, đáng làm việc mà còn là nơi đáng sống, đáng tận hưởng. Chứng minh ngành KDHT nói chung & Long Phụng Group nói riêng là nền tảng thực sự cho mọi sự thành công trong nhiều lĩnh vực của NPP.        ",
    },
    3: {
      title: "3. Enthusiasm: TẬN TÂM",
      description:
        "Nét văn hóa “ GIÚP ĐỠ ” - cho đi vô điều kiện & tinh thần “ ĐỀN ƠN TIẾP NỐI - PAY IT FORWARD ” là văn hóa bất diệt của con người Long Phụng cũng chính là chìa khóa cho sự chuyển tiếp & kế thừa. Long Phụng Group luôn tạo ra môi trường giúp đỡ, yêu thương, chia sẻ, cho đi, phụng sự - tạo nên tính gia đình & đoàn kết của một tập thể xuất sắc.        ",
    },
    4: {
      title: "4. Exaltation: TÔN VINH",
      description:
        "Sự công nhận & tôn vinh là một trong những giá trị cực kì quan trọng đối với mỗi doanh nghiệp, Long Phụng Group luôn là nơi nhìn thấy từng cống hiến dù là nhỏ nhất của mỗi cá nhân, là nơi ghi nhận toàn bộ những nổ lực, những hy sinh, những đánh đổi trên chặng đường chinh phục thành công của các NPP. Tạo giá trị về sự khẳng định bản thân để NPP phát huy toàn bộ những năng lực vượt trội & phẩm chất cao quý.      ",
    },
    5: {
      title: "5. Easiness: DỄ DÀNG",
      description:
        "Long Phụng Group nơi cung cấp hệ thống đường ống dễ dàng theo đúng bản chất “ Đơn giản - Sao chép - Nhân rộng ” của ngành KDHT mà bất kì NPP nào cũng có thể làm được, dẫn đến sự thành công hàng loạt cho tất cả NPP khi đi qua hệ thống đường ống thành công.      ",
    },
    6: {
      title: "6. Equality: BÌNH ĐẲNG",
      description:
        "Để tạo ra môi trường vừa đảm bảo hiệu quả kinh doanh, vừa mang tính gia đình, xoá bỏ những tranh đấu & đố kị trong tập thể thì sự bình đẳng trong doanh nghiệp là yếu tố thực sự cần thiết. Long Phụng Group là nơi mà mỗi NPP luôn có sự phát triển một cách công bằng, bất kì ai cũng được tôn trọng & có thể thành công mà không phân biệt tuổi tác, giới tính, bằng cấp, địa vị,...      ",
    },
    7: {
      title: "7. Economy: KINH TẾ",
      description:
        "Không chỉ dừng lại ở việc xây dựng một mạng lưới phân phối lớn mạnh bằng nền tảng ngành KDHT, Long Phụng Group còn tham vọng trở thành một Tập đoàn kinh tế vững mạnh với trị giá hàng triệu USD, nơi các thành viên của Long Phụng Group được huấn luyện về kinh doanh, tạo ra một sân chơi giúp các thành viên của Long Phụng Group làm giàu, phát triển thu nhập, tạo ra cộng đồng doanh nhân thành đạt - những doanh chủ trong tương lai.      ",
    },
    8: {
      title: "8. Effectiveness: HIỆU QUẢ",
      description:
        "Kết quả là thước đo cuối cùng cho sự thành công. Ý thức được việc đó, Long Phụng Group luôn cung cấp những giải pháp giáo dục & giải pháp kinh doanh hiệu quả cho tất cả NPP Long Phụng Group. Nơi mà học & hành sẽ đi đôi với nhau, luôn đồng hành giúp NPP ra kết quả thực tế trong những chương trình giáo dục & kinh doanh.      ",
    },
    9: {
      title: "9. Escalation: LAN TỎA",
      description:
        "Với kim chỉ nam “ Lợi ích doanh nghiệp phải song song với lợi ích cộng đồng ”, Long Phụng Group luôn là nơi phụng sự để đền ơn tiếp nối & lan rộng những giá trị tốt đẹp về mặt vật chất & tinh thần cho cộng đồng, góp phần tác động tích cực giúp những người xung quanh có được một cuộc sống ý nghĩa hơn, tốt đẹp hơn, tạo nên một cộng đồng người thành đạt, một xã hội nhân văn - tích cực.      ",
    },
  };
  const [cl, setCl] = useState(1);
  const handleOpen = (e) => {
    $(e.target).addClass("clicked");
    if (e.target.value) {
      setCl(e.target.value);
    } else {
      setCl(e.target.value);
    }
    setOpen(true);
    setTimeout(() => {
      $(e.target).removeClass("clicked");
    }, 1500);
  };
  const onCloseModal = () => {
    setOpen(false);
    $(".lpg-b-hst").removeClass("clicked");
  };
  return (
    <>
      <DefaultLayout showBreakcrumb="true" breakcrumb={props.breakcrumb}>
        <section className="lpg-s-banner-introduce">
          <div className="lpg-container">
            <div className="lpg-b-center">
              <Image
                src="/white-logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="lpg-big-logo"
              />
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-1"
                onClick={(e) => handleOpen(e)}
                value={1}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-2"
                onClick={(e) => handleOpen(e)}
                value={2}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-3"
                onClick={(e) => handleOpen(e)}
                value={3}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-4"
                onClick={(e) => handleOpen(e)}
                value={4}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-5"
                onClick={(e) => handleOpen(e)}
                value={5}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-6"
                onClick={(e) => handleOpen(e)}
                value={6}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-7"
                onClick={(e) => handleOpen(e)}
                value={7}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-8"
                onClick={(e) => handleOpen(e)}
                value={8}
              ></button>
              <button
                type="button"
                className="lpg-b-hst lpg-b-hst-9"
                onClick={(e) => handleOpen(e)}
                value={9}
              ></button>
            </div>
          </div>
        </section>
        <div className="lpg-b-tabs-introduce">
          <div className="lpg-container">
            <h1>Hệ Sinh Thái</h1>
            <nav>
              <ul>
                <li>
                  <button>E-system</button>
                </li>
                <li>
                  <button>E-cosmetic</button>
                </li>
                <li>
                  <button>QUỸ AN SINH XÃ HỘI </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <section className="lpg-s-ecomestic"></section>
        <Information
          onCloseModal={onCloseModal}
          open={open}
          title={gtcl[cl] ? gtcl[cl]["title"] : gtcl["1"]["title"]}
          description={
            gtcl[cl] ? gtcl[cl]["description"] : gtcl["1"]["description"]
          }
        ></Information>
      </DefaultLayout>
    </>
  );
};
export default Introduce;
export async function getServerSideProps() {
  return {
    props: {
      breakcrumb: {
        title: "Giới Thiệu",
        link: "/introduce",
        titleLink: "Giới Thiệu",
      },
    },
  };
}
