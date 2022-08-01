import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
      <div className="logo">logo</div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
