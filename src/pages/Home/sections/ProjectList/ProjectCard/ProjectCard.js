import { Link } from "react-router-dom";
import "./ProjectCard.scss";
import { useSelector } from "react-redux";

export default function ProjectCard({project}) {
    const { language } = useSelector((state) => state.language);

    return (
        <Link to={`/project/${project.key}`} className="projectCard">
            <picture className="projectCard_thumbnail">
                <source
                    srcSet={`./img/${project.key}/thumbnail-500w.jpg`}
                    media="(max-width: 355px)"
                />
                <source
                    srcSet={`./img/${project.key}/thumbnail-1000w.jpg`}
                    media="(max-width: 730px), (min-width: 800px) and (max-width: 1800px)"
                />
                <img
                    srcSet={`./img/${project.key}/thumbnail-2000w.jpg`}
                    alt={project.name}
                    className="projectCard_thumbnail_photo"
                />
            </picture>
            <div className="projectCard_caption">
                <h3 className="projectCard_caption_name">{project.name}</h3>
                <h4 className="projectCard_caption_type">{project.type[language]}</h4>
            </div>
        </Link>
    );
}