import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <section className="h-screen min-h-screen w-screen flex flex-col sm:flex-row gap-16   justify-center items-center">
        <div className="absolute inset-0 bg-[url('/LandingPage/section1/bg.png')]  bg-cover bg-center opacity-40 h-full w-full z-[-10] p-24" />

        <div className="flex flex-col gap-6 w-full sm:w-[50%] justify-center h-full">
          <h1 className="text-5xl leading-normal">
                      AI That Converts{" "}
                      <br/>
            <span className="text-pink-600">Conversations</span> Into Revenue
          </h1>
          <p className=" capitalize"> 
            Voxa is an intelligent communication system that autonomously
            manages WhatsApp chats and web calls — capturing leads, qualifying
            prospects, and delivering real-time insights for faster growth.
            Primary CTA
          </p>
          <div className="flex gap-5">
            <Link
              to={""}
              className="bg-blue-700 text-white rounded-lg px-14 py-2"
            >
              Try it Free
            </Link>
            <Link
              to={""}
              className="border-blue-700 rounded-lg px-14 py-2 border-2"
            >
              Try it Free
            </Link>
          </div>
        </div>

        <img
          src="/LandingPage/section1/sideImage.png"
          className="h-[450px] w-[550px] object-cover rounded-2xl"
        />
      </section>
    </>
  );
}
