import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
      <div className="logo">logo</div>
      <ul>
        <li>
          <Link className="link" to="/page-transitions-2">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/page-transitions-2/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
