import './App.css'
import smileWoman from './assets/satisfied-woman.png'
import group from './assets/Group 11.png'
import arrow from './assets/arrow-right.png'
import path from './assets/path.png'
import design from './assets/designtools.png'
import designTools from './assets/designtools1.png'
import message from './assets/message-text.png'
import pentool from './assets/pen-tool-2.png'
import bezier from './assets/bezier.png'



let navbar = ["Home", "Services", "Testimonials", "About", "Contact"]
let color = [
  "#020340", // Orange
  "#FF8533", // dark Blue
  "#F9F9F9" // Light Gray
];

const services = [
    {
      title: "Brand Identity Design",
      description: "Create a cohesive and unique identity that reflects your brand’s essence.",
      icon: path,
      color: "bg-pink-200"
    },
    {
      title: "Logo Design",
      description: "Design logos and visual systems that make your brand instantly recognizable.",
      icon: design,
      color: "bg-blue-200"
    },
    {
      title: "Graphic Design",
      description: "Design stunning graphics that communicate your brand’s message effectively.",
      icon: designTools,
      color: "bg-green-300"
    },
    {
      title: "Product Design",
      description: "Design products that are both functional and visually appealing.",
      icon: pentool,
      color: "bg-green-200"
    },
    {
      title: "Web & Digital Design",
      description: "Build engaging digital experiences that convert visitors into customers.",
      icon: message,
      color: "bg-gray-200"
    },
    {
      title: "Consulting & Workshops",
      description: "Empower your team with brand training and expert guidance.",
      icon: bezier,
      color: "bg-purple-300"
    },
  ];

export default function App(){
  return (
    <div className={`bg-[${color[2]}] w-full min-h-screen flex flex-col items-center`}>
      <nav id='home' className="max-w-7xl w-full h-16 flex justify-between items-center mx-auto px-4 pt-4">
        <p className="flex items-center pt-2">
          <b className={`text-[${color[0]}]`}>Brand</b>
          <b className={`text-[${color[1]}]`}>Folio</b>
        </p>
        <ul className="flex flex-row items-center space-x-4">
          {navbar.map((item, index) => (
            <li className="p-2" key={index}>
              <a
                className={`text-[${color[0]}] hover:text-[${color[1]}] transition-colors duration-200`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
          <button className={`ml-4 md:ml-10 px-4 py-1 bg-[${color[1]}] rounded-full text-[${color[2]}] hover:bg-[${color[0]}] transition-colors duration-400`}>
            Join for free
          </button>
        </ul>
      </nav>
      <section id="home" className="max-w-7xl w-full mx-auto px-4">
        <p className="mt-16 md:mt-28 flex justify-center font-sora text-green-600 text-center text-[15px] md:text-[17px]">
          Your sure plug for business growth
        </p>
        <div className="p-1 flex flex-col items-center w-full max-w-[848px] mx-auto">
          <h1 className={`p-2 flex justify-center text-[32px] md:text-[48px] w-full text-center text-[${color[0]}]`}>
            Turn Your Vision into a Brand That Inspires
          </h1>
          <p className={`flex w-full max-w-[818px] text-[16px] md:text-[18px] justify-center text-center text-[${color[0]}] pb-6 md:pb-10`}>
            We create bold and memorable brand identities that connect with your audience and drive growth. Let’s build your story together.
          </p>
          <button className={`px-4 py-1 bg-[${color[1]}] rounded-xl text-[${color[2]}] mb-6 hover:bg-[${color[0]}] transition-colors duration-400`}>
            Get Started
          </button>
          <img
            src={smileWoman}
            alt=""
            className="w-full max-w-[400px] md:max-w-none"
          />
        </div>
      </section>
      <section id="about" className="max-w-7xl w-full mx-auto px-4 mt-20">
        <div className="flex flex md:flex mt-10 md:mt-20 w-full max-w-7xl px-4">
          <img
            className="p-2 w-full max-w-[300px] md:max-w-[484px] rounded-lg h-auto md:h-[579px] object-cover mx-auto"
            src={group}
            alt=""
          />
          <div className="flex flex-col p-4 md:m-20 md:mr-24 self-center">
            <p className={`mb-2 text-[16px] md:text-[18px] text-[${color[0]}]`}>Who We Are</p>
            <p className={`text-[15px] md:text-[24px] mb-4 text-[${color[0]}]`}>
              At BrandFolio, we specialize in crafting strategic and creative brand identities that resonate. With 5 years of experience, we’ve helped 100+ businesses transform their ideas into powerful visual stories. From startups to established enterprises, we’re committed to building brands that stand the test of time.
            </p>
            <a
              className={`flex items-center bg-none text-[${color[1]}] text-[18px] md:text-[20px] rounded-lg w-fit px-3 py-2 hover:text-[${color[2]}] hover:bg-[${color[0]}] transition-colors duration-200`}
              href=""
            >
              Learn more
              <img className="pl-2 w-5 h-5" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl w-full mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row w-full max-w-7xl px-4">
          <div className="text-center flex flex-col p-4 md:m-20 md:mr-24 self-center w-full">
            <p className={`text-[24px] font-bold mb-2 text-[${color[0]}] md:text-[36px]`}>Our Services</p>
            <p className={`text-[${color[0]}] text-[15px] md:text-[24px] mb-4`}>
              Building brands with strategy, creativity, and precision.
            </p>
            {/* Responsive grid: 1 column on mobile, 2 on md, 3 on lg */}
            {/*
              Define your services as an array of objects for easier mapping and scalability.
            */}
              
          
          <div
            className="
              grid 
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              justify-center
              items-stretch
              w-full
            "
          >
            {services.map((service, i) => (
              <div className={`flex p-4 bg-white rounded-lg shadow-md items-start hover:${service.color}`} key={i}>
                <img className={`w-[36px] h-[30px] p-1 ${service.color} m-2 rounded`} src={service.icon} alt="" />
                <span className="flex flex-col items-start w-full">
                  <h1 className={`font-bold text-[${color[0]}] mb-1`}>{service.title}</h1>
                  <p className={`text-start text-[${color[0]}]`}>
                    {service.description}
                  </p>
                </span>
              </div>
            ))}
          </div>
        
          </div>
        </div>
      </section>
      <section id="testimonials" className="max-w-7xl w-full mx-auto px-4 mt-20">
        <div className='flex flex-col md:flex-row w-full max-w-7xl px-4'>
          <div className="text-center flex flex-col p-4 md:m-20 md:mr-24 self-center w-full">
            <p className={`text-[24px] font-bold mb-2 text-[${color[0]}] md:text-[36px]`}>Testimonials</p>
            <p className={`text-[${color[0]}] text-[15px] md:text-[24px] mb-4`}>
              What our clients say about us
            </p>
            <p>
              Hear from the people who’ve trusted us to elevate their brands.
            </p>
          </div>
          {/* Testimonials content goes here */}

        </div>
      </section>
      <section id="contact" className="max-w-7xl w-full mx-auto px-4 mt-20">
        {/* Contact content goes here */}
      </section>
    </div>
  )
}
