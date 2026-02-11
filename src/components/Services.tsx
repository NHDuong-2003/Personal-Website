import './Services.css';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Web Development",
            desc: "Creating responsive and performant websites using modern technologies.",
            iconPath: "M2 20h20V4H2v16zm2-14h16v10H4V6z"
        },
        {
            id: 2,
            title: "App Development",
            desc: "Building cross-platform mobile applications for iOS and Android.",
            iconPath: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
        },
        {
            id: 3,
            title: "Digital Marketing",
            desc: "Strategic marketing to grow your online presence and reach.",
            iconPath: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
        },
        {
            id: 4,
            title: "Email Marketing",
            desc: "Automated email campaigns to engage and convert your audience.",
            iconPath: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        }
    ];

    return (
        <section id="service" className="section-container">
            <div className="section-header">
                <h2 className="section-title">Our Features & Services</h2>
            </div>
            <div className="services-grid">
                {servicesData.map((svc) => (
                    <div key={svc.id} className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="#4f46e5"><path d={svc.iconPath} /></svg>
                        </div>
                        <h3>{svc.title}</h3>
                        <p>{svc.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;