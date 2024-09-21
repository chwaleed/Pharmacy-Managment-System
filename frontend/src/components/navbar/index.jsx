function Navbar() {
  const navList = [
    "Dashboard",
    "Add Medicine",
    "Add Supplier",
    "Sales",
    "Customers",
    "Reports",
  ];
  return (
    <nav className="bg-[#2F4252] flex justify-center items-center flex-col gap-10 h-screen w-[17%]">
      <div className="text-white font-bold text-[3rem]">LOGO</div>
      <ol className="flex flex-col gap-5  w-full">
        {navList.map((item, index) => (
          <li
            className="text-center text-[#D3D3D3] hover:cursor-pointer  focus:text-white text-[1.5rem] font-semibold py-5"
            key={`nav-${index}`}
          >
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Navbar;
