import React from 'react'
import java from  '/java.png'
import python from  '/python.png'
import react from  '/react.png'
import tailwindCss from  '/tailwindCss.jpg'

const skillsData=[
    {id:1,image:java,title:'JavaScript',description:'Use modern ES6+features and efficient DOM manipulation to build seamless user interfaces and craft dynamic and interactive web experiences',hoverBg: 'hover:bg-yellow-600/20'},
    {id:2,image:react,title:'React',description:'Building smart websites using reusable building blocks to make apps fast, organized, and easy to update',hoverBg: 'hover:bg-cyan-500/20'},
    {id:3,image:python,title:'Python',description:'Building flexible solutions from automation scripts and dat processing to strong backend logic with clean readable, and efficient code',hoverBg: 'hover:bg-blue-500/20'},
    {id:4,image:tailwindCss,title:'Tailwindcss',description:'Modern and responsive layouts using utility-first CSS that allow for quick development without sacrificing unique aesthetics',hoverBg: 'hover:bg-teal-500/20'}
];

const SkillBox = ({ image, title, description, hoverBg}) => (
    <article className={`bg-[#1e293b] p-6 rounded-xl shadow-xl text-center border border-slate-700/50 hover:border-slate-500 transition-all duration-500 cursor pointer hover:scale-105 hover:shadow-2xl ${hoverBg}`}>
        <figure className="flex justify-center mb-4">
            <img src={image} alt={title} className="w-16 h-16 object-contain"/>
        </figure>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
    </article>
);

export default function Skills() {
    return (
        <section data-aos="fade-up" data-aos-delay="300" className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f172a] px-4 py-20 pt-32 overflow-hidden">
            <div className="2text-center space-y-10 max-w-7xl w-full">
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 text-center space-y-6 sm:space-y-10">
                <header>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        My Expertise and Skills
                    </h1>
                    <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Motivated by a positive attitude towards work and a strong sense of responsibility, I use my computer skills to develop highly effective solutions.
                        I am determined to provide excellent work through constant learning and effective performance.
                    </p>
                </header>
                <section data-aos="fade up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
                    {skillsData.map((skill) => (
                        <SkillBox
                        key={skill.id} image={skill.image} title={skill.title} description={skill.description} hoverBg={skill.hoverBg} />
                    ))}
                </section>
            </div>
        </section>
    )
}