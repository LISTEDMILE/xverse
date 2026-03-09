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
  const section2CostingYorRevenue = [
    {
      logo: "/LandingPage/section2CostingYouRevenue/watsapp.png",
      title: "Missed WhatsApp Messages",
      para: "Stay connected and never miss important WhatsApp messages.",
      backColor: "#F0B83B",
    },
    {
      logo: "/LandingPage/section2CostingYouRevenue/slowFollow.png",
      title: "Slow follow-ups on Calls",
      para: "Delayed responses and missed callbacks can weaken client relationships",
      backColor: "#9CD59E",
    },
    {
      logo: "/LandingPage/section2CostingYouRevenue/inconsistent.png",
      title: "Inconsistent Agent Responses",
      para: "Inconsistent agent responses undermine reliability",
      backColor: "#ACD3EA",
    },
    {
      logo: "/LandingPage/section2CostingYouRevenue/visibility.png",
      title: "No visibility into Performance",
      para: "Driving measurable growth through strategic performance optimization.",
      backColor: "#F9BCF6",
    },
    {
      logo: "/LandingPage/section2CostingYouRevenue/manualHandling.png",
      title: "Leads lost due to Manual Handling",
      para: "Inconsistent agent responses undermine reliability",
      backColor: "#E7A7A7",
    },
  ];

  const section4TotalControl = [
    {
      title: "AI-Driven Chat & Voice",
      img: "/LandingPage/section4TotalControl/one.png",
      points: [
        "Intelligent conversations powered by real-time AI across chat and voice.",
        "Seamless AI communication that understands, responds, and adapts instantly.",
        "Smart voice and chat experiences built for modern businesses.",
      ],
    },
    {
      title: "24/7 Automated Engagement",
      img: "/LandingPage/section4TotalControl/two.png",
      points: [
        "Turn every moment into an opportunity with intelligent, nonstop customer interaction.",
        "Capture, convert, and connect — even while you sleep.",
      ],
    },
    {
      title: "Inbound + Outbound Handling",
      img: "/LandingPage/section4TotalControl/three.png",
      points: [
        "Optimizing Every Touchpoint of Your Supply Chain",
        "Precision Handling from Arrival to Departure",
      ],
    },
    {
      title: "24/7 Automated Engagement",
      img: "/LandingPage/section4TotalControl/four.png",
      points: [
        "Turn every moment into an opportunity with intelligent, nonstop customer interaction.",
        "Capture, convert, and connect — even while you sleep.",
      ],
    },
  ];
  return (
    <>
      <section className=" min-h-screen w-screen flex flex-col sm:flex-row gap-10 justify-center items-center p-6 sm:p-24">
        <div className="absolute inset-0 bg-[url('/LandingPage/section1/bg.png')]  bg-cover bg-center opacity-40 h-full w-full z-[-10] " />

        <div className="flex flex-col gap-6 w-full sm:w-[50%] justify-center h-fit sm:h-full ">
          <h1 className="text-4xl font-bold sm:text-5xl leading-normal pt-30 sm:pt-0">
            AI That Converts <br />
            <DiffSpan data="Conversations" /> Into Revenue
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
          className=" w-[650px]  rounded-2xl"
        />
      </section>

      <section className="flex flex-col gap-24 py-15 px-6 sm:p-20 bg-[#FFE6726E]/57 items-center justify-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Your <DiffSpan data="Conversations" /> Are Costing{" "}
          <DiffSpan data="You Revenue" />{" "}
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center ">
          {section2CostingYorRevenue.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex flex-col relative p-8 pt-[50px] rounded-lg w-full items-center gap-1 text-center mt-[50px]"
                style={{ backgroundColor: `${ele.backColor}67` }}
              >
                <div
                  className="p-2 border-2 top-0 border-white shadow-sm shadow-black/30 h-fit w-fit rounded-full absolute -translate-y-1/2"
                  style={{ backgroundColor: `${ele.backColor}` }}
                >
                  <img src={ele.logo} className="h-[60px] w-[60px]" />
                </div>
                <h2 className="font-medium text-sm">{ele.title}</h2>
                <p className="text-xs">{ele.para}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex justify-center flex-col sm:flex-row gap-10 py-15 px-6 sm:p-20 items-center w-screen bg-[#FFEBF3]">
        <div className="w-full sm:w-[50%] flex justify-center items-center">
          <video
            src="/LandingPage/section3Video/section3Video.mp4"
            controls
            className="w-full sm:w-[600px] h-auto"
          />
        </div>

        <div className="w-full sm:w-[50%] sm:p-20">
          {" "}
          <h1 className=" font-bold text-2xl border-b-4 border-white pb-4 w-fit mb-4 ">
            Video
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            tempora, velit quia temporibus officiis fugiat quo nesciunt mollitia
            earum, tempore, porro doloribus consectetur dolore quisquam? Ratione
            natus iusto harum unde.
          </p>
        </div>
      </section>

      <section className="relative flex justify-center flex-col gap-24 py-15 px-6 sm:p-20 items-center items-center w-screen">
        <img
          className="absolute top-20 left-0 w-20 sm:w-45 z-[-10] h-auto"
          src="LandingPage/section4TotalControl/sideImage.png"
        />
        <img
          className="absolute bottom-20 rotate-z-180 opacity-50 right-0 w-20 sm:w-45 h-auto"
          src="LandingPage/section4TotalControl/sideImage.png"
        />

        <div className="flex flex-col items-center w-full sm:w-[60%]">
          <h1 className="text-2xl sm:text-5xl text-center font-semibold">
            One Intelligent System. Total Control Over Conversations.
          </h1>
          <div className="border-b-6 border-b-[#0664B7] w-[150px] mt-6 " />
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap w-full sm:w-[80vw] gap-12 justify-around">
          {section4TotalControl.map((ele) => {
            return (
              <div className="rounded-md overflow-hidden w-full sm:w-[40%] flex shadow-xl shadow-black flex-col sm:flex-row">
                <div className="w-full sm:w-[50%] relative">
                  <img src={ele.img} className="w-full h-full object-cover" />
                  <div
                    className="absolute top-0 right-0 h-full w-32 bg-white"
                    style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%)" }}
                  ></div>{" "}
                </div>
                <div className="flex flex-col gap-6 w-full sm:w-[50%] p-6 bg-white">
                  <h3 className="text-2xl font-bold">{ele.title}</h3>
                  <ul className="flex flex-col gap-3 list-[circle] marker:text-yellow-400 marker:text-xl pl-5 text-xs">
                    {ele.points.map((p) => {
                      return <li>{p}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative flex justify-center flex-col gap-24 py-15 px-6 sm:p-20 items-center items-center w-screen bg-[#FCE18B6E]/57">
       
        <div className="flex flex-col items-center w-full sm:w-[60%]">
          <h1 className="text-2xl sm:text-5xl text-center font-semibold">
Product Spilit          </h1>
          <div className="border-b-6 border-b-[#0664B7] w-[150px] mt-6 " />
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap w-full sm:w-[80vw] gap-12 justify-around">
          {section4TotalControl.map((ele) => {
            return (
              <div className="rounded-md overflow-hidden w-full sm:w-[40%] flex shadow-xl shadow-black flex-col sm:flex-row">
                <div className="w-full sm:w-[50%] relative">
                  <img src={ele.img} className="w-full h-full object-cover" />
                  <div
                    className="absolute top-0 right-0 h-full w-32 bg-white"
                    style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%)" }}
                  ></div>{" "}
                </div>
                <div className="flex flex-col gap-6 w-full sm:w-[50%] p-6 bg-white">
                  <h3 className="text-2xl font-bold">{ele.title}</h3>
                  <ul className="flex flex-col gap-3 list-[circle] marker:text-yellow-400 marker:text-xl pl-5 text-xs">
                    {ele.points.map((p) => {
                      return <li>{p}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
