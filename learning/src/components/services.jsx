

const Blog = (props) => {
    const services = props.services;

    return (
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
        <div
            className={`flex p-4 bg-white rounded-lg shadow-md items-start ${service.hoverColor ? `hover:${service.hoverColor}` : ''}`}
            key={i}
        >
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
    );

}
export default Blog;