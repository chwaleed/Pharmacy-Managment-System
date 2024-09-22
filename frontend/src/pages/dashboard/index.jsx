import {
  Ban,
  BellOff,
  BriefcaseBusiness,
  ChartColumn,
  Zap,
  ChartNoAxesCombined,
} from "lucide-react";

function Dashboard() {
  const boxes = [
    {
      primaryText: "Medicines",
      secondaryText: "Report",
      value: 5,
      icon: <BriefcaseBusiness size={33} strokeWidth={3} />,
      colorCode: "bg-[#32BC8B]",
    },
    {
      primaryText: "Sales Of Day",
      secondaryText: "Report",
      value: 5,
      icon: <ChartColumn size={33} strokeWidth={3} />,
      colorCode: "bg-[#337CBB]",
    },
    {
      primaryText: "Sales Of Month",
      secondaryText: "Report",
      value: 5,
      icon: <ChartNoAxesCombined size={33} strokeWidth={3} />,
      colorCode: "bg-[#94E264]",
    },
    {
      primaryText: "Stock Shortage",
      secondaryText: "Report",
      value: 5,
      icon: <BellOff strokeWidth={3} size={33} />,
      colorCode: "bg-[#E89772]",
    },
    {
      primaryText: "Expired Products",
      secondaryText: "Report",
      value: 5,
      icon: <Ban strokeWidth={3} size={33} />,
      colorCode: "bg-[#A97BAA]",
    },
    {
      primaryText: "Near Expiry",
      secondaryText: "Report",
      value: 5,
      icon: <Zap strokeWidth={3} size={33} />,
      colorCode: "bg-[#42DAD2]",
    },
  ];

  return (
    <div className="grid grid-cols-3 text-white  w-full pl-[5%]  content-start pt-[10%] gap-12">
      {boxes.map((item, index) => (
        <div
          key={`boxes-${index}`}
          className={`${item.colorCode} px-5 gap-4 h-[9rem] flex flex-col justify-center w-[24rem]`}
        >
          <h1 className="text-[1.6rem]  font-semibold flex justify-between">
            {item.primaryText} <span>{item.icon}</span>
          </h1>
          <h1 className="font-semibold flex justify-between">
            {item.secondaryText}{" "}
            <span className="text-[1.6rem] font-bold">{item.value}</span>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
