import React from 'react'
import facebook from '/facebook.png'
import instagram from '/instagram.png'
import linkedin from '/linkedin.png'
import github from '/github.png'
import pic from '/pic.jpg'

export default function Contact() {
    return (
        <section data-aos="fade-up"
        data-aos-delay="300"
        className="min-h-screen w-full flex items-center justify-center p-6 pt-24 md:pt-32 bg-[#0f172a]">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>

            <article className="bg-[#1e293b]/40 backdrop-blur-md shadow-2xl rounded-3xl flex flex-col md:flex-row max-w-5xl
            w-full items-center justify-center overflow-hidden border border-slate-700/50">
                <aside className="w-full md:w-1/2 relative flex items-center justify-center p-12 bg-black/5 self-stretch">
                    <div className="absolute w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 rounded-full blur-[140px] animate-pulse -z-10"></div>
                    <img src={pic} alt="Minime Logo" className="relative z-10 w-full max-w-[320px] h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"/>
                </aside>
                <section className="pr-60 pl-10  w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                        <header className="mb-8">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white mb-6 tracking-tight whitespace-nowrap">Contact Information</h2>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-8 mr-5">If you have any question and queries feel free to contact me in all of my social media accounts</p>
                        </header>
                        <div className="flex items-center justify center md:justify-start space-x-6">
                            <a href="https://www.facebook.com/reign.max.3" target="_blank" className="hover:scale-110 transition-transform duration-300">
                                <img src={facebook} alt="Facebook" className="w-10 h-10 md:w-12 md:h-12" />
                            </a>
                            <a href="https://www.instagram.com/raprap_montaril/?hl=en" target="_blank" className="hover:scale-110 transition-transform duration-300">
                                <img src={instagram} alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" />
                            </a>
                            <a href="https://github.com/genji-rr" target="_blank" className="hover:scale-110 transition-transform duration-300">
                                <img src={github} alt="Github" className="w-10 h-10 md:w-12 md:h-12" />
                            </a>
                            <a href="https://www.linkedin.com/in/rainiel-montaril" target="_blank" className="hover:scale-110 transition-transform duration-300">
                                <img src={linkedin} alt="Linkedin" className="w-10 h-10 md:w-12 md:h-12" />
                            </a>
                        </div>
                </section>
            </article>
        </section>
    )
}