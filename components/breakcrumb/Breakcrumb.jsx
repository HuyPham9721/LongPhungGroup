import Link from "next/link";
const Breakcrumb = ({
  breakcrumb: { title = "", link = "/", titleLink = "" },
}) => {
  return (
    <>
      <section className="lpg-s-breakcrumb">
        <div className="lpg-container">
          <h1>{title}</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">Trang Chủ</Link>
              </li>
              <li>
                <Link href={link}>{titleLink}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Breakcrumb;
