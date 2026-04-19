import React from "react";
import clinicalSystem from "/clinicalSystem.jpg";
import dns from "/dns.jpg";
import networking from "/networking.jpg";

const ProjectCard = ({image, title, description, link}) => {
    return (
        <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2">
            <div className="absolute z-0 w-40 h-40 bg-[#cd3cf5] rounded-full blur-3xl opacity-20 -top-5 left-10"></div>
            <div className="relative z-10 flex flex-col h-full">
                <figure className="relative h-64 w-full overflow-hidden bg-black">
                    <img src={image} alt={title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white font-bold text-black py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                            Click to View
                        </a>
                    </div>
                </figure>
                <div className="px-6 py-5 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default function Project() {

    const listProjects =[
        {
            image: clinicalSystem,
            title: "Clinic System",
            description: "I created a simple Clinical System which the doctor and patient will input their credentials, then the patient will choose schedule of their prescribe time and doctor availability",
            link: "",
        },
        {
            image: dns,
            title: "Setting Up a DNS server with Bind",
            description: "I created my first DNS server on how to configure a system with one client",
            link: "",
        },
        {
            image: networking,
            title: "Hands-On Network Setup: Rj45 Crimping and LAN Configuration",
            description: "A hands-on networking project involving RJ45 cable crimping, LAN setup, and connectivity testing between computers. " +
                "This project demonstrates practical experience in network infrastructure and basic network troubleshooting.",
            link: "",
        },
    ];
    return (
        <main className="min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-[#111827]">
            <section data-aos="fade-up" data-aos-delay="300" className="relative min-h-screen bg-[#111827] text-white flex flex-col items-center justify-center px-4 py-20 pt-15 overflow-hidden">
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        My Projects
                    </h1>
                </header>
                <section data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap gap-4 justify-center">
                    {listProjects.map((project,index) => (
                        <ProjectCard key={index}
                                     image={project.image}
                                     title={project.title}
                                     description={project.description}
                                     link={project.link} />
                    ))}
                </section>
            </section>
        </main>
    )
}