import React from "react";

// Props
function ProjectCard({image, title, description, link}) {
    return (
        <article className="project-card">
            <img src={image} alt={'Gambar ${title}'} className="project-image"/>
            <div className="project-overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="{link}" className="project-link">Lihat Detail</a>
            </div>
        </article>
    )
}

export default ProjectCard;