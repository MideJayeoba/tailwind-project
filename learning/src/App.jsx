import { useState } from 'react'
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
import meetingRoom from './assets/image.png'

let navbar = ["Home", "Services", "Testimonials", "About", "Contact"]

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

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#F9F9F9] w-full min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav id='home' className="max-w-7xl w-full h-16 flex justify-between items-center mx-auto px-4 pt-4 relative">
        <p className="flex items-center pt-2">
          <b className="text-[#020340]">Brand</b>
          <b className="text-[#FF8533]">Folio</b>
        </p>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 bg-[#020340] mb-1 transition-all ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#020340] mb-1 transition-all ${navOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#020340] transition-all ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Nav links */}
        <ul className={`
          flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4
          absolute md:static top-16 left-0 w-full md:w-auto bg-[#F9F9F9] md:bg-transparent z-20
          transition-all duration-300
          ${navOpen ? 'flex' : 'hidden'} md:flex
          shadow md:shadow-none
          px-4 md:px-0 py-4 md:py-0
        `}>
          {navbar.map((item, index) => (
            <li className="p-2 w-full md:w-auto text-center" key={index}>
              <a
                className="text-[#020340] hover:text-[#FF8533] transition-colors duration-200"
                href={`#${item.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <button className="ml-0 md:ml-4 px-4 py-1 bg-[#FF8533] rounded-full text-[#F9F9F9] hover:bg-[#020340] transition-colors duration-400 w-full md:w-auto mt-2 md:mt-0">
            Join for free
          </button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl w-full mx-auto px-4">
        <p className="mt-10 md:mt-28 flex justify-center font-sora text-green-600 text-center text-[15px] md:text-[17px]">
          Your sure plug for business growth
        </p>
        <div className="p-1 flex flex-col items-center w-full max-w-[848px] mx-auto">
          <h1 className="p-2 flex justify-center text-[28px] md:text-[48px] w-full text-center text-[#020340]">
            Turn Your Vision into a Brand That Inspires
          </h1>
          <p className="flex w-full max-w-[818px] text-[16px] md:text-[18px] justify-center text-center text-[#020340] pb-6 md:pb-10">
            We create bold and memorable brand identities that connect with your audience and drive growth. Let’s build your story together.
          </p>
          <button className="px-4 py-1 bg-[#FF8533] rounded-xl text-[#F9F9F9] mb-6 hover:bg-[#020340] transition-colors duration-400">
            Get Started
          </button>
          <img
            src={smileWoman}
            alt=""
            className="w-full max-w-[300px] md:max-w-none"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl w-full mx-auto px-4 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 w-full max-w-7xl px-0 md:px-4">
          <img
            className="p-2 w-full max-w-[300px] md:max-w-[484px] rounded-lg h-auto md:h-[579px] object-cover mx-auto"
            src={group}
            alt=""
          />
          <div className="flex flex-col p-4 md:m-20 md:mr-24 self-center">
            <p className="mb-2 text-[16px] md:text-[18px] text-[#020340]">Who We Are</p>
            <p className="text-[15px] md:text-[24px] mb-4 text-[#020340]">
              At BrandFolio, we specialize in crafting strategic and creative brand identities that resonate. With 5 years of experience, we’ve helped 100+ businesses transform their ideas into powerful visual stories. From startups to established enterprises, we’re committed to building brands that stand the test of time.
            </p>
            <a
              className="flex items-center bg-none text-[#FF8533] text-[18px] md:text-[20px] rounded-lg w-fit px-3 py-2 hover:text-[#F9F9F9] hover:bg-[#020340] transition-colors duration-200"
              href=""
            >
              Learn more
              <img className="pl-2 w-5 h-5" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl w-full mx-auto px-4 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row w-full max-w-7xl px-0 md:px-4">
          <div className="text-center flex flex-col p-4 md:m-20 md:mr-24 self-center w-full">
            <p className="text-[24px] font-bold mb-2 text-[#020340] md:text-[36px]">Our Services</p>
            <p className="text-[#020340] text-[15px] md:text-[24px] mb-4">
              Building brands with strategy, creativity, and precision.
            </p>
            <div
              className="
                grid 
                grid-cols-1
                sm:grid-cols-2
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
                    <h1 className="font-bold text-[#020340] mb-1">{service.title}</h1>
                    <p className="text-start text-[#020340]">
                      {service.description}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-7xl w-full mx-auto px-4 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row w-full max-w-7xl px-0 md:px-4">
          {/* Left: Heading */}
          <div className="flex-1 flex flex-col justify-center md:items-start items-center text-left md:pr-16">
            <p className="text-[#FF8533] text-[16px] md:text-[18px] mb-1 font-medium tracking-wide">Testimonials</p>
            <h2 className="text-[#020340] font-bold text-[24px] md:text-[32px] mb-2">What Our Clients Say</h2>
            <p className="text-[#020340] text-[16px] md:text-[20px] max-w-md">
              Hear from the people who’ve trusted us to elevate their brands.
            </p>
          </div>
          {/* Right: Testimonial Cards */}
          <div className="flex-1 flex flex-col gap-8 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 relative max-w-xl ml-auto border-l-4 border-green-600">
              <span className="absolute top-4 right-6 text-3xl text-[#020340] font-bold select-none">”</span>
              <h3 className="font-bold text-[#020340] mb-1">Taiwan Airways</h3>
              <p className="text-[#020340]">
                BrandFolio transformed our brand into something we’re incredibly proud of. Their creativity and professionalism are unmatched.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 relative max-w-xl ml-auto border-l-4 border-blue-700">
              <span className="absolute top-4 right-6 text-3xl text-[#020340] font-bold select-none">”</span>
              <h3 className="font-bold text-[#020340] mb-1">Taiwan Airways</h3>
              <p className="text-[#020340]">
                Working with BrandFolio was a game-changer. The branding has truly resonated with our audience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 relative max-w-xl ml-auto border-l-4 border-purple-700">
              <span className="absolute top-4 right-6 text-3xl text-[#020340] font-bold select-none">”</span>
              <h3 className="font-bold text-[#020340] mb-1">Taiwan Airways</h3>
              <p className="text-[#020340]">
                BrandFolio transformed our brand into something we’re incredibly proud of. Their creativity and professionalism are unmatched.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="max-w-7xl w-full mx-auto px-4 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#f7f3f1] rounded-3xl p-6 md:p-16 shadow-md" style={{backgroundImage: "url('/your-bg-pattern.svg')", backgroundSize: 'cover'}}>
          <img
            src={meetingRoom} // replace with your image import if needed
            alt="Team meeting"
            className="w-full max-w-md rounded-2xl shadow-lg mb-8 md:mb-0 md:mr-12"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[#020340] font-bold text-2xl md:text-3xl mb-4">Ready to Build Your Brand?</h2>
            <p className="text-[#020340] text-lg md:text-xl mb-8 max-w-lg">
              Let’s work together to create a brand that speaks volumes. Whether you’re just starting out or need a refresh, we’re here to help.
            </p>
            <button className="bg-[#FF8533] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-[#020340] transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f9f9f9] py-12 flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col md: flex flex-col items-center justify-center gap-6 mx-auto">
          <h3 className="text-lg md:text-2lg font-semibold text-center md:text-left flex-1">
            Join our community for branding tips and insights straight to your inbox.
          </h3>
          <form className="flex w-full md:w-auto flex-1 max-w-xl" action="mailto:midejayeoba1@gmail.com" method="post" enctype="text/plain">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 px-6 py-4 rounded-tl-full rounded-bl-full text-lg bg-white placeholder-gray-400 outline-none mr-none"
              required
              
            >
              <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Sent!");
              }}
              className="ml-2 bg-[#FF8533] hover:bg-[#ff9b4b] text-white font-semibold text-lg px-10 py-3 rounded-full transition-colors duration-200"
            >
              Join us
            </button>
            </input>
            
          </form>
        </div>
      </section>
    </div>
  )
}
