import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            id: 1,
            title: "Data Management for Chatbot",
            desc: "",
            tags: ["Python", "PostgreSQL"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 2,
            title: "User Interface for Data Management",
            desc: "",
            tags: ["HTML", "CSS", "TypeScript", "Node.js", "React"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 3,
            title: "Business Report Extractor",
            desc: "",
            tags: ["Python", "PostgreSQL"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 4,
            title: "User Interface for Business Report Extractor",
            desc: "",
            tags: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 5,
            title: "MCP Server",
            desc: "",
            tags: ["Python"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 6,
            title: "Schema generate output control / Background comparision",
            desc: "",
            tags: ["Python"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 7,
            title: "Predict fear and greed index for VNINDEX",
            desc: "",
            tags: ["Python", "PostgreSQL"],
            img: "https://via.placeholder.com/400x200",
        },
        {
            id: 8,
            title: "Backend & Frontend for financial management",
            desc: "",
            tags: ["CSS", "HTML", "Javascript", "Python", "PostgreSQL"],
            img: "https://via.placeholder.com/400x200",
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="section-container">
            <div className="section-header">
                <h2 className="section-title">Featured Work</h2>
                <p className="section-subtitle">Check out some of my recent projects showcasing my skills.</p>
            </div>

            <div className="projects-grid">
                {projectsData.map((item) => (
                    <div
                        key={item.id}
                        className="project-card"
                        onClick={() => openModal(item)}
                    >
                        <div className="project-img-box">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="project-content">
                            <h3>{item.title}</h3>
                            {/* Description REMOVED from here */}

                            <div className="tags-row">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>

                            {/* Buttons: Added stopPropagation so clicking a specific button doesn't double-trigger if logic changes */}
                            <div className="project-actions">
                                <button className="btn-sm btn-dark" onClick={(e) => e.stopPropagation()}>Github</button>
                                <button className="btn-sm btn-blue" onClick={(e) => e.stopPropagation()}>Live Demo</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* POPUP / MODAL */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>&times;</button>

                        <div className="modal-img-box">
                            <img src={selectedProject.img} alt={selectedProject.title} />
                        </div>

                        <div className="modal-body">
                            <h2>{selectedProject.title}</h2>
                            {/* Description DISPLAYED here */}
                            <p className="modal-desc">
                                {selectedProject.desc || "No description available for this project."}
                            </p>

                            <div className="tags-row">
                                {selectedProject.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-actions" style={{ marginTop: '2rem' }}>
                                <button className="btn-sm btn-dark">Github</button>
                                <button className="btn-sm btn-blue">Live Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;