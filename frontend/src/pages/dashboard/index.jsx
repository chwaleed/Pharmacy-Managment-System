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
      value: 500,
      icon: "icon",
      colorCode: "#42DAD2",
    },
  ];

  return (
    <div className="grid grid-cols-3 text-white  w-full pl-[5%]  content-start pt-[10%] gap-12">
      {boxes.map((item, index) => (
        <div
          key={`boxes-${index}`}
          className={`bg-[${boxes[index].colorCode}] px-5 gap-4 h-[9rem] flex flex-col justify-center w-[24rem]`}
        >
          <h1 className="text-[1.6rem]  font-semibold flex justify-between">
            {boxes[index].primaryText} <span>{boxes[index].icon}</span>
          </h1>
          <h1 className="  font-semibold flex justify-between">
            {boxes[index].secondaryText}{" "}
            <span className="text-[1.6rem] font-bold">
              {boxes[index].value}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
