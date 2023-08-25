import logo from '../img/logo1.png'

const Navbar = () => {
  return (
    <div>
         <nav className="p-4 shadow-md">
      <div className="container mx-auto">
      <img src={logo} alt="logo"  />
      </div>
    </nav>
       
    </div>
  )
}

export default Navbar