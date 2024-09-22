function Dashboard() {
  const boxes = [
    {
      primaryText: "Medicines",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#32BC8B",
    },
    {
      primaryText: "Sales Of Day",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#337CBB",
    },
    {
      primaryText: "Sales Of Month",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#94E264",
    },
    {
      primaryText: "Stock Shortage",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#E89772",
    },
    {
      primaryText: "Expired Products",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#A97BAA",
    },
    {
      primaryText: "Near Expiry",
      secondaryText: "Report",
      value: 5,
      icon: "icon",
      colorCode: "#42DAD2",
    },
  ];

  return (
    <div className="grid grid-cols-3 text-white  w-full pl-[5%]  content-start pt-[10%] gap-12">
      <div className="bg-[#32BC8B]  h-[9rem] flex flex-col justify-center w-[22rem]">
        <h1 className="text-[1.2rem] font-semibold flex justify-between">
          TEXT <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
      <div className="bg-[#337CBB] h-[9rem] flex flex-col justify-center w-[22rem]">
        <h1 className="text-[1.6rem]  font-semibold flex justify-between">
          Sales Of Day <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
      <div className="bg-[#94E264] h-[9rem] flex flex-col justify-center w-[22rem]">
        <h1 className="text-[1.2rem] font-semibold flex justify-between">
          TEXT <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
      <div className="bg-[#E89772] h-[9rem] flex flex-col justify-center w-[22em]">
        <h1 className="text-[1.2rem] font-semibold flex justify-between">
          TEXT <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
      <div className="bg-[#A97BAA] h-[9rem] flex flex-col justify-center w-[22rem]">
        <h1 className="text-[1.2rem] font-semibold flex justify-between">
          TEXT <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
      <div className="bg-[#42DAD2] h-[9rem] flex flex-col justify-center w-[22rem]">
        <h1 className="text-[1.2rem] font-semibold flex justify-between">
          TEXT <span>Icon</span>
        </h1>
        <h1>
          Secondary Text <span>Value</span>
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
