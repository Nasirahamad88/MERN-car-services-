import Image from "next/image"
// import Logo from '../Logo.svg'
import Link from "next/link"


function Navbar() {
    

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><Link href='/'>Home</Link></li>
       <li><Link href='/about'>About</Link></li>
                  <li><Link href='/services'>Services</Link></li>
                  <li><Link href='/products'>Products</Link></li>
      </ul>
    </div>
              <Link href='/' className="btn btn-ghost text-xl">
                  <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/1/10/Car_Magazine_Logo.svg"
                  width={120}
                  height={ 120} />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-xl">
               <li><Link href='/'>Home</Link></li>
       <li><Link href='/about'>About</Link></li>
                  <li><Link href='/services'>Services</Link></li>
                  <li><Link href='/products'>Products</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='/login' className="btn text-2xl">Login</Link>
  </div>
</div>
  )
}

export default Navbar