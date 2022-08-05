import Button from "../components/Button";
import NavLink from "../components/NavLink";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import IconButton from "./IconButton";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLightTheme, handleSwitchTheme } = useTheme();
  // menu functions
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`border-b sticky top-0 z-50 ${
        isLightTheme ? "bg-white" : "bg-black"
      }`}
    >
      <div className="h-[80px] relative flex items-center justify-between">
        <Logo inHeader />
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            <NavLink> Products </NavLink>
            <NavLink> Pricing </NavLink>
            <NavLink> Docs </NavLink>
            <NavLink> Company </NavLink>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <Button link="/auth/login" normal>
            Log in
          </Button>
          <Button link="/auth/signin" fill>
            Sign up
          </Button>
          <IconButton
            icon={isLightTheme ? <MdLightMode /> : <MdDarkMode />}
            text={isLightTheme ? "Light" : "Dark"}
            isRightIcon
            isNoTextInMobile
            onClick={handleSwitchTheme}
          />
          <div className="lg:hidden">
            {isMenuOpen ? (
              <MdClose
                onClick={closeMenu}
                size={23}
                className="ml-2 cursor-pointer text-emerald-500"
              />
            ) : (
              <GiHamburgerMenu
                onClick={openMenu}
                size={23}
                className="ml-2 cursor-pointer text-emerald-500"
              />
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden p-3 z-40 bg-neutral-100 flex flex-col gap-4">
            <NavLink inMobile> Products </NavLink>
            <NavLink inMobile> Pricing </NavLink>
            <NavLink inMobile> Docs </NavLink>
            <NavLink inMobile> Company </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
