import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="dflex dflex-between dflex-d-column vh-100">
      <Header />

      <main className="dflex dflex-d-column dflex-auto w-100 overflow-hidden">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout