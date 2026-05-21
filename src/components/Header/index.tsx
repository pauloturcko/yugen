import { useState, useEffect } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
        isScrolled || isOpen
          ? 'py-4 bg-background/90 backdrop-blur-md border-b border-white/5 shadow-md' 
          : 'pt-8 pb-4 bg-transparent border-transparent'
      }`}
    >
      {/* Logo */}
      <div className="relative z-50 flex gap-2 font-noto items-center">
        <p className="text-highlight font-noto flex items-center justify-center text-[10px] leading-none border rounded-full w-7 h-7 border-secondary shadow-[0_0_10px_var(--color-secondary)]">幽</p>
        <h1 className="font-normal font-garamond tracking-wider text-lg">Yūgen</h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="relative z-50 flex flex-col justify-between w-5 h-3.5 focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-in-out origin-center ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 translate-x-4' : ''
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-in-out origin-center ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-garamond text-lg tracking-widest">
        {['Manifesto', 'Features', 'Pricing', 'FAQ'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-highlight transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out md:hidden origin-top ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <ul
          className="flex flex-col items-start px-6 py-6 gap-2 text-muted text-md font-manrope tracking-widest"
        >
          {['Manifesto', 'Features', 'Pricing', 'FAQ'].map((item) => (
            <li key={item} className="w-full">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-highlight transition-colors duration-300 block w-full border-b border-white/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};