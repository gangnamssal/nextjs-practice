import Link from "next/link";

function Nav() {
  return (
    <>
      <header>
        <label htmlFor="hamberger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <input type="checkbox" id="hamberger" />
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/list">리스트</Link>
          </li>
          <li>
            <Link href="/list/abc">abc</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
