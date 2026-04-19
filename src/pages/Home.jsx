
import React from 'react'
import minime from '/minime.jpg'

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center p-6 md:px-16 pt-32 bg-[#0f172a]"
        >
            <article className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">


                <div className="w-full md:w-1/2 text-left space-y-6 md:pr-10">
                    <header className="space-y-2">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight pb-5">Hi, I'm Raph</h1>
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-slate-400">Information Technology</h2>
                    </header>
                    <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
                        Motivated IT professional aiming to develop proficiency in system and software technologies. With an attitude of discipline and commitment, I am transforming my technical computer knowledge into practical digital solutions.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            src={minime}
                            alt="Profile Illustration"
                            className="w-full max-w-[350px] md:max-w-[450px] h-auto object-cover rounded-3xl transition all duration-500"
                        />
                    </div>
                </div>

            </article>
        </section>
    )
}