import { Link } from "react-router-dom";


const Navbar = () => {
  const links = [{

  }]
  return (
    <nav className="bg-white shadow h-16 flex gap-5 items-center justify-center">
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to="/cart">carts</Link>
    </nav>
  );
};

export default Navbar;