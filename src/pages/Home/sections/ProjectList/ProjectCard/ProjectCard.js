import { Link } from "react-router-dom";
import "./ProjectCard.scss";
import { useSelector } from "react-redux";

export default function ProjectCard({project}) {
    const { language } = useSelector((state) => state.language);

    return (
        <Link className="projectCard">
            <img src={`./img/${project.thumbnail}`} className="projectCard_thumbnail" alt={project.name} />
            <div className="projectCard_caption">
                <h3 className="projectCard_caption_name">{project.name}</h3>
                <h4 className="projectCard_caption_type">{project.type[language]}</h4>
            </div>
        </Link>
    );
}