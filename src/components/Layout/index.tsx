import { type ReactNode } from 'react'

// Layout props
type LayoutProps = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl max-auto p-4">
        {children}
      </div>
    </div>
  )
}

export default Layout;
