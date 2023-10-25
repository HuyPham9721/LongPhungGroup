import Link from "next/link";
const Breakcrumb = () => {
  return (
    <>
      <section className="lpg-s-breakcrumb">
        <div className="lpg-container">
          <h1>Contact</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Breakcrumb;
