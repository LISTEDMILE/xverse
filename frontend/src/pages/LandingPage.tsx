import { Link } from "react-router-dom";

type Props = {
  data: string;
};

function DiffSpan({ data }: Props) {
  return (
    <>
      <span className="text-[#D55586]">{data}</span>
    </>
  );
}


export default function LandingPage() {

    const section2CostingYorRevenue = [{ logo: "/LandingPage/section2CostingYouRevenue/watsapp.png", title: "Missed WhatsApp Messages", para: "Stay connected and never miss important WhatsApp messages.", backColor: "#F0B83B" },
        { logo: "/LandingPage/section2CostingYouRevenue/slowFollow.png", title: "Slow follow-ups on Calls", para: "Delayed responses and missed callbacks can weaken client relationships", backColor: "#9CD59E" }
        ,
        { logo: "/LandingPage/section2CostingYouRevenue/inconsistent.png", title: "Inconsistent Agent Responses", para: "Inconsistent agent responses undermine reliability", backColor: "#ACD3EA" },
        { logo: "/LandingPage/section2CostingYouRevenue/visibility.png", title: "No visibility into Performance", para: "Driving measurable growth through strategic performance optimization.", backColor: "#F9BCF6" },
        {logo:"/LandingPage/section2CostingYouRevenue/manualHandling.png",title:"Leads lost due to Manual Handling",para:"Inconsistent agent responses undermine reliability",backColor:"#E7A7A7"}
    ];
  return (
    <>
      <section className=" min-h-screen w-screen flex flex-col sm:flex-row gap-16 justify-center items-center p-6 sm:p-24">
        <div className="absolute inset-0 bg-[url('/LandingPage/section1/bg.png')]  bg-cover bg-center opacity-40 h-full w-full z-[-10] " />

        <div className="flex flex-col gap-6 w-full sm:w-[50%] justify-center h-fit sm:h-full ">
          <h1 className="text-4xl font-bold sm:text-5xl leading-normal pt-30 sm:pt-0">
                      AI That Converts{" "}
                      <br/>
            <DiffSpan data="Conversations"/> Into Revenue
          </h1>
          <p className=" capitalize"> 
            Voxa is an intelligent communication system that autonomously
            manages WhatsApp chats and web calls — capturing leads, qualifying
            prospects, and delivering real-time insights for faster growth.
            Primary CTA
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to={""}
              className="bg-[#2276B6] text-white rounded-lg px-14 py-2"
            >
              Try it Free
            </Link>
            <Link
              to={""}
              className="border-[#2276B6] text-[#2276B6] rounded-lg px-14 py-2 border-2"
            >
             Book A Live Demo
            </Link>
          </div>
        </div>

        <img
          src="/LandingPage/section1/sideImage.png"
          className="h-[450px] w-[550px] object-cover rounded-2xl"
        />
          </section>
          
          <section className="flex flex-col gap-24 py-15 px-6 sm:p-20 bg-[#FFE6726E]/57 items-center min-h-screen justify-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Your  <DiffSpan data="Conversations"/>  Are Costing  <DiffSpan data="You Revenue"/> </h1>
              <div className="flex flex-col sm:flex-row gap-6 justify-center ">
                 {section2CostingYorRevenue.map((ele, index) => {
  return (
    <div
      key={index}
      className="flex flex-col relative p-8 pt-[50px] rounded-lg w-full items-center gap-1 text-center mt-[50px]"
      style={{ backgroundColor: `${ele.backColor}67` }}
      >
          <div className="p-2 border-2 top-0 border-white shadow-sm shadow-black/30 h-fit w-fit rounded-full absolute -translate-y-1/2" style={{ backgroundColor: `${ele.backColor}` }}>
              <img src={ele.logo} className="h-[60px] w-[60px]" />
              </div>
      <h2 className="font-medium text-sm">{ele.title}</h2>
      <p className="text-xs">{ele.para}</p>
    </div>
  );
})}
              </div>
          </section>
    </>
  );
}
