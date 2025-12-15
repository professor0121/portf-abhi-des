// Libraries imports
import { NavLink } from 'react-router-dom'

const HeaderNavigationBar = () => {
  return (
    <section className="bg-red-700">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contactUs">Contact Us</NavLink>
    </section>
  )
}

export default HeaderNavigationBar
