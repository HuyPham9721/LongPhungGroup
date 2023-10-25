import { useEffect } from "react";
import { DefaultLayout } from "../../layouts";
import Image from "next/image";
const Introduce = () => {
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
  return (
    <>
      <DefaultLayout>
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
              <button type="button" className="lpg-b-hst-1"></button>
              <button type="button" className="lpg-b-hst-2"></button>
              <button type="button" className="lpg-b-hst-3"></button>
              <button type="button" className="lpg-b-hst-4"></button>
              <button type="button" className="lpg-b-hst-5"></button>
              <button type="button" className="lpg-b-hst-6"></button>
              <button type="button" className="lpg-b-hst-7"></button>
              <button type="button" className="lpg-b-hst-8"></button>
              <button type="button" className="lpg-b-hst-9"></button>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};
export default Introduce;