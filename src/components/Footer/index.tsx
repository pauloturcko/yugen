interface FooterColumn {
  title: string
  links: string[]
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'PRODUCT',
    links: ['Features', 'Pricing', 'Soundscape library', 'Changelog'],
  },
  {
    title: 'PRACTICE',
    links: ['Manifesto', 'Field journal', 'Reading list', 'Community'],
  },
  {
    title: 'QUIET LEGAL',
    links: ['Privacy', 'Terms', 'Refunds', 'Contact'],
  },
]

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 px-6 pt-16 pb-8 sm:px-12 md:px-20 lg:px-24 xl:px-80">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 text-left sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-4 md:col-span-1">
          <div className="font-noto flex items-center gap-2">
            <p className="text-highlight font-noto border-secondary shadow-secondary/50 flex h-7 w-7 items-center justify-center rounded-full border text-[10px] leading-none shadow-lg">
              幽
            </p>
            <h3 className="font-garamond text-lg font-normal tracking-wider text-white">
              Yūgen
            </h3>
          </div>
          <p className="font-manrope mt-4 max-w-xs text-sm font-light text-white/50">
            A sanctuary for deep work. Made slowly, in Lisbon and Kyoto.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <p className="font-noto text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              {column.title}
            </p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-manrope hover:text-highlight text-sm font-light text-white/60 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="font-manrope mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light text-white/40 sm:flex-row">
        <p>© 2026 Yugen Studio. Made for the deep hours.</p>
        <p>幽玄 ・深く、静かに。</p>
      </div>
    </footer>
  )
}
