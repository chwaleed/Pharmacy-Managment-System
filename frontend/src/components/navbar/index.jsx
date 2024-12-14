import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const navList = [
    {
      text: "Dashboard",
      link: "dashboard",
    },
    {
      text: "Medicine",
      link: "medicine",
    },
    {
      text: "Supplier",
      link: "supplier",
    },
    {
      text: "Sales",
      link: "sales",
    },
    {
      text: "Customers",
      link: "customers",
    },
    {
      text: "Reports",
      link: "reports",
    },
  ];
  return (
    <nav className="bg-[#2F4252] flex justify-center items-center flex-col gap-10 h-screen min-w-[17%]">
      <div className="text-white font-bold text-[3rem]">LOGO</div>
      <ol className="flex flex-col gap-5  w-full">
        {navList.map((item, index) => (
          <li
            onClick={() => navigate(`/${navList[index].link}`)}
            className="text-center text-[#D3D3D3] hover:cursor-pointer  focus:text-white text-[1.5rem] font-semibold py-5"
            key={`nav-${index}`}
          >
            {navList[index].text}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Navbar;
