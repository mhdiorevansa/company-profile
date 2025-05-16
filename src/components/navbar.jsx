const Navbar = () => {
   return (
      <div className="navbar py-4 shadow-sm rounded-lg">
         <div className="flex-1">
            <a className="btn btn-ghost text-2xl">Company</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal text-lg space-x-2">
               <li><a>Home</a></li>
               <li><a>About Us</a></li>
               <li><a>Our Product</a></li>
               <li><a>Contact</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Navbar;