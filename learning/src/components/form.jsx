import { useEffect, useRef } from "react";

export default function Form({ close, formOpen }) {
    const nameRef = useRef(null);

    useEffect(() => {
        if (formOpen) {
            document.body.style.overflow = 'hidden';
            nameRef.current?.focus();
        } else {
            document.body.style.overflow = 'auto';
        }
        const handleEsc = (e) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener("keydown", handleEsc);
        };
    }, [formOpen, close]);

    if (!formOpen) return null;

    return (
        <div className="fixed inset-0 bg-'rgba(0,0,0,0.7)' bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" aria-modal="true" role="dialog">
            <div className="absolute inset-0 bg-'rgba(0,0,0,0.7)' bg-opacity-40 backdrop-blur-sm" onClick={close} />
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <button onClick={close} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" aria-label="Close">&times;</button>
                <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                <form action="mailto:jayeobapeace19459@mail.com" method="POST" encType="text/plain">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                        <input ref={nameRef} type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" required placeholder="Your name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" required placeholder="example@mail.xyz"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md p-2" required placeholder="Leave a text message for us"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#FF8533] text-white py-2 rounded-md hover:bg-[#e67300]">Submit</button>
                </form>
            </div>
        </div>
    );
}
