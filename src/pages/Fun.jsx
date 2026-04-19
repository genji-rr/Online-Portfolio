import React, { useState } from 'react';

export default function Fun() {

    const [luckyNumber, setNumber] = useState("?");
    const [isAnimate, setAnimate] = useState(false);

    const generateNumber = () => {

        const num = Math.floor(Math.random() * 99) + 1;
        setNumber(num);

        // Trigger the animation
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
    };

    return (

        <section

            className="min-h-screen flex items-center justify-center bg-[#111827] text-white p-10 pt-32"
        >
            <div
                data-aos="fade-up"
                className="text-center space-y-8 bg-gray-800/40 p-12 rounded-3xl border border-purple-500/30 backdrop-blur-xl shadow-2xl max-w-lg w-full"
            >
                <header>
                    <h2 className="text-4xl font-bold text-purple-400">Lucky Number</h2>
                    <p className="text-gray-400 mt-2">Click the orb to reveal your Lucky Number</p>
                </header>


                <div
                    onClick={generateNumber}
                    className={`relative w-44 h-44 mx-auto cursor-pointer transition-transform duration-300 ${isAnimate ? 'scale-110' : 'scale-100'}`}
                >
                    <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-900 rounded-full flex items-center justify-center shadow-inner border-4 border-white/10">
                        {/* Displaying the Number inside the Orb */}
                        <span className="text-6xl font-black text-white drop-shadow-lg">
                            {luckyNumber}
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-300 italic">
                        "Trust your number; a rewarding surprise is waiting just around the corner."
                    </p>
                </div>
            </div>
        </section>
    );
}