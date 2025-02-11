import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify-icon/react";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { NAV_ITEMS } from "./config";
import { cn } from "../../libs/cn";

const AppNavbar = () => {
  const [expandMobileNav, setExpandMobileNav] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const updateExpandMobileNav = () => setExpandMobileNav((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setExpandMobileNav(false);
      }
    };

    if (expandMobileNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandMobileNav]);

  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(path-to-image.jpg)' }}>
      <nav className="font-poppins py-6 fixed top-0 left-0 right-0 z-30">
        <div className="bg-white shadow-md absolute top-0 left-0 right-0 z-20">
          <div className="container flex justify-between items-center gap-10">
          <div className="flex justify-center items-center h-24">
  <h1
    className="cursor-pointer text-3xl font-bold text-blue-800"
    onClick={() => (window.location.href = "/")}
  >
    SaaraKhalid
  </h1>
</div>

            <section className="mb-4 flex-1 max-w-[1000px] hidden lg:flex items-center gap-20 justify-end">
              <NavItemsWrapper />
            </section>

            <Button
              className="lg:hidden"
              color="primary"
              isIconOnly
              variant="light"
              size="lg"
              onPress={updateExpandMobileNav}
            >
              <Icon className="text-[32px]" icon="mdi:hamburger-menu" />
            </Button>
          </div>
        </div>

        <MobileMenu
          expandMobileState={expandMobileNav}
          updateExpandMobileNav={updateExpandMobileNav}
          menuRef={mobileMenuRef}
        />
      </nav>
    </div>
  );
};

export default AppNavbar;

interface NavItemsWrapperProps {
  updateExpandMobileNav?: () => void;
}

const NavItemsWrapper = ({ updateExpandMobileNav }: NavItemsWrapperProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (updateExpandMobileNav) updateExpandMobileNav();
    navigate(path);
  };

  return (
    <div className="flex flex-row lg:items-center space-x-18 relative">
      {NAV_ITEMS.map((item) => (
        <div key={item.path} className="relative">
          <span
            className={cn(
              "text-sm md:text-lg font-semibold transition duration-300 cursor-pointer pb-2",
              window.location.pathname === item.path
                ? "text-[#0F2F8F] border-b-2 border-blue-600"
                : "text-[#3E5879] hover:text-[#0F2F8F] hover:border-b-2 hover:border-blue-600"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

interface MobileMenuProps {
  expandMobileState: boolean;
  updateExpandMobileNav: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu = ({
  expandMobileState,
  updateExpandMobileNav,
  menuRef,
}: MobileMenuProps) => {
  const navigate = useNavigate();
  const [isMenuHidden, setMenuHidden] = useState(!expandMobileState);

  const variants: Variants = {
    expand: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        opacity: { duration: 0.3 },
      },
    },
    minimize: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        opacity: { duration: 0.3 },
      },
    },
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === "minimize") {
      setMenuHidden(true);
    }
  };

  if (expandMobileState && isMenuHidden) {
    setMenuHidden(false);
  }

  const handleNavigation = (path: string) => {
    updateExpandMobileNav();
    navigate(path);
  };

  return (
    <motion.div
      initial="minimize"
      animate={expandMobileState ? "expand" : "minimize"}
      variants={variants}
      onAnimationComplete={handleAnimationComplete}
      className={cn(
        "flex flex-col bg-white p-4 top-4 w-[280px] absolute z-[999] right-8",
        {
          hidden: isMenuHidden,
        }
      )}
      ref={menuRef}
    >
      <Button
        className="self-end"
        color="primary"
        isIconOnly
        variant="light"
        size="lg"
        onPress={updateExpandMobileNav}
      >
        <Icon className="text-[32px]" icon="line-md:close" />
      </Button>
      <div className="flex flex-col gap-6">
        {NAV_ITEMS.map((item) => (
          <span
            key={item.path}
            className={cn(
              "text-base sm:text-lg transition-colors duration-300 cursor-pointer font-semibold",
              window.location.pathname === item.path
                ? "text-[#0F2F8F] border-b-2 border-blue-600"
                : "hover:text-[#171D4E] hover:border-b-2 hover:border-blue-600"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
