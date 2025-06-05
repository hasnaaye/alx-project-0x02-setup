const Header: React.FC = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">About</a>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Header;

