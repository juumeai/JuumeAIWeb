import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FaChevronDown, FaBars } from "react-icons/fa"
import logo from "../images/logo.png"

const Navbar = () => {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activePage, setActivePage] = useState("home")
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const toggleMobileDropdown = (menu) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("home")
    } else if (location.pathname === "/home") {
      setActivePage("home")
    } else if (location.pathname === "/about-us") {
      setActivePage("about-us")
    } else if (location.pathname === "/use-cases") {
      setActivePage("use-cases")
    } else if (location.pathname === "/ai-frameworks") {
      setActivePage("ai-frameworks")
    } else if (location.pathname === "/cybersecurity-frameworks") {
      setActivePage("cybersecurity-frameworks")
    } else if (location.pathname === "/byop") {
      setActivePage("byop")
    } else if (location.pathname === "/blogs") {
      setActivePage("blogs")
    } else if (location.pathname === "/podcasts") {
      setActivePage("podcasts")
    } else if (location.pathname === "/press") {
      setActivePage("press")
    } else if (location.pathname === "/why-join-us") {
      setActivePage("why-join-us")
    } else if (location.pathname === "/open-positions") {
      setActivePage("open-positions")
    } else if (location.pathname === "/contact-us") {
      setActivePage("contact-us")
    }
  })

  const dropdownMenus = {
    Solution: [
      { name: "Use Cases", path: "/use-cases" },
      { name: "AI Frameworks & Compliance", path: "/ai-frameworks" },
      { name: "Cybersecurity Frameworks & Compliance", path: "/cybersecurity-frameworks" },
      { name: "BYOP", path: "/byop" },
    ],
    Community: [
      { name: "Blogs", path: "/blogs" },
      { name: "Podcasts", path: "/podcasts" },
      { name: "Press", path: "/press" },
    ],
    Careers: [
      { name: "Why Join Us", path: "/why-join-us" },
      { name: "Open Positions", path: "/open-positions" },
    ],
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link to="/home" className="flex-shrink-0">
            <img src={logo || "/placeholder.svg"} alt="JUUME AI Logo" className="h-14 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <Link
                to="/home"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activePage === "home"
                    ? "text-purple-700 border-2 font-bold rounded-lg border-purple-500"
                    : "text-black font-semibold hover:text-purple-600"
                }`}
                onClick={() => setActivePage("home")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activePage === "about-us"
                    ? "text-purple-700 border-2 font-bold rounded-lg border-purple-500"
                    : "text-black font-semibold hover:text-purple-600"
                }`}
                onClick={() => setActivePage("about-us")}
              >
                About Us
              </Link>
            </li>

            {Object.entries(dropdownMenus).map(([menu, items]) => (
              <li key={menu} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className={`flex items-center space-x-1 transition px-4 py-2 rounded-md ${
                    activePage === menu.toLowerCase()
                      ? "text-purple-700 border-2 rounded-lg border-purple-500 font-bold"
                      : "text-black font-semibold hover:text-purple-600"
                  }`}
                >
                  <span>{menu}</span>
                  <FaChevronDown size={12} className="ml-1" />
                </button>

                {openDropdown === menu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border py-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-black font-semibold hover:bg-gray-100 hover:text-purple-600"
                          onClick={() => setActivePage(item.path.replace("/", ""))}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact-us"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activePage === "contact-us"
                    ? "text-purple-700 border-2 font-bold rounded-lg border-purple-500"
                    : "text-black font-semibold hover:text-purple-600"
                }`}
                onClick={() => setActivePage("contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none p-2">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <ul className="space-y-2">
              {["Home", "About Us"].map((menu) => {
                const path = `/${menu.replace(/\s+/g, "-").toLowerCase()}`
                return (
                  <li key={menu}>
                    <Link
                      to={path}
                      className="block px-4 py-2 text-black font-semibold hover:text-purple-600"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {menu}
                    </Link>
                  </li>
                )
              })}

              {Object.entries(dropdownMenus).map(([menu, items]) => (
                <li key={menu} className="space-y-1">
                  <button
                    onClick={() => toggleMobileDropdown(menu)}
                    className="w-full text-left px-4 py-2 text-black hover:text-purple-600 font-bold flex justify-between items-center"
                  >
                    {menu}
                    <FaChevronDown size={12} />
                  </button>

                  {openMobileDropdown === menu && (
                    <ul className="pl-6 space-y-1">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-black font-semibold hover:text-purple-600"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-black font-semibold hover:text-purple-600"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;