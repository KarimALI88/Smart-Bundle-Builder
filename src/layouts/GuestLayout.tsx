import type { ReactNode } from 'react'

interface GuestLayoutProps {
  children?: ReactNode
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default GuestLayout