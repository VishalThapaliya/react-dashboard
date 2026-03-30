import { type ReactNode } from 'react'

// Layout props
type LayoutProps = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout;
