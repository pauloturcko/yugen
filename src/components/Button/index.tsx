import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  bg?: string
  padding?: string
  borderColor?: string
  textColor?: string
  fontSize?: string
  width?: string
}

export const Button = ({
  children,
  bg = 'bg-white/80',
  padding = 'px-6 py-3',
  borderColor,
  textColor = 'text-[#0A0A0A]',
  fontSize = 'text-base',
  width = 'w-auto',
  className = '',
  ...props
}: ButtonProps) => {
  const borderClasses = borderColor ? `border ${borderColor}` : ''

  return (
    <button
      className={`${className || 'inline-flex'} items-center justify-center rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:pointer-events-none disabled:opacity-50 ${bg} ${textColor} ${fontSize} ${width} ${padding} ${borderClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}
