export default function Testimonials({ testimonials }) {
    // const testimonials = props.testimonials;
    return (
        <div className="flex-1 flex flex-col gap-8 mt-8 md:mt-0">
        {testimonials.map((testimony) =>  
        <div className= {`bg-white rounded-lg shadow-md p-6 relative max-w-xl ml-auto border-l-4 ${testimony.color}`}>
            <span className="absolute top-4 right-6 text-3xl text-[#020340] font-bold select-none">”</span>
            <h3 className="font-bold text-[#020340] mb-1">{testimony.name}</h3>
            <p className="text-[#020340]">
            {testimony.feedback}
            </p>
        </div>
        )};
        </div>
)};