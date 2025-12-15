// Libraries imports
import { FC, ReactNode } from 'react'

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'
import Footer from './Footer'

type BaseLayoutProps = {
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderNavigationBar />
      <section className="pages">{children}</section>
      <Footer/>
    </>
  )
}

export default Layout
