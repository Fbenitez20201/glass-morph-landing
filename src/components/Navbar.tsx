import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = ({ linkGetStarted }: { linkGetStarted?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleClick = useCallback(() => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [closeMenu]);

  const links = [
    { text: "Conócenos", path: "/about" },
    { text: "Características", path: "/features" },
    { text: "Precios", path: "/pricing" },
    { text: "Contáctanos", path: "/contact" },
    { text: "Actualizaciones", path: "/changelog" },
    { text: "Integraciones", path: "/integration" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-[6px]" role="navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <NavLinksBase
              links={links}
              pathname={path.pathname}
              onClick={(link) => {
                if (path.pathname === link) handleClick();
              }}
            />
          </div>

          <div className="hidden xl:block">
            <CTAButton
              link={linkGetStarted ?? "/contact"}
              onClick={linkGetStarted ? handleClick : undefined}
            />
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden bg-black/60 backdrop-blur-lg border-t transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center px-4 pt-4 pb-2 space-y-1">
          <NavLinksBase
            links={links}
            pathname={path.pathname}
            onClick={(link) => {
              if (path.pathname === link) {
                closeMenu();
                handleClick();
              }
            }}
            mobile
          />
        </div>
        <div className="p-4">
          <CTAButton
            link={linkGetStarted ?? "/contact"}
            onClick={linkGetStarted ? handleClick : undefined}
          />
        </div>
      </div>
    </nav>
  );
};

const Logo = () => (
  <Link to="/" className="flex items-center w-[9rem] lg:w-[13rem]">
    <img src="/logo1.png" alt="logo" className="object-cover w-full h-full" />
  </Link>
);

const CTAButton = ({ link, onClick }: { link: string; onClick?: () => void }) => (
  <Link to={link}>
    <Button
      onClick={onClick}
      className="w-full border border-orange-600 bg-transparent text-white hover:bg-white/80 hover:text-black rounded-full px-6"
    >
      Empieza Ahora
    </Button>
  </Link>
);

const NavLinksBase = ({
  links,
  pathname,
  onClick,
  mobile = false,
}: {
  links: { text: string; path: string }[];
  pathname: string;
  onClick: (link: string) => void;
  mobile?: boolean;
}) => (
  <>
    {links.map((link) => (
      <Link
        key={link.text}
        to={link.path}
        onClick={() => onClick(link.path)}
        className={`$${mobile ? "block text-base" : "text-sm"} text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors`}
      >
        {link.text}
      </Link>
    ))}
  </>
);

export default Navbar;
