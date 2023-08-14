import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectList.scss";
import { useSelector } from "react-redux";

export default function ProjectList() {
    const { language } = useSelector((state) => state.language);
    const projectList = [{
        name: "Liam O'Brien",
        type: {
            en: "UI Design",
            fr: "Design UI"
        },
        thumbnail: "thumbnail1.png",
        tags: ["React, Sass"]
    },
    {
        name: "Marisha Ray",
        type: {
            en: "Front-end development",
            fr: "Développement front-end"
        },
        thumbnail: "thumbnail2.png",
        tags: ["React, Redux"]
    },
    {
        name: "Taliesin Jaffe",
        type: {
            en: "UX Design",
            fr: "Design UX"
        },
        thumbnail: "thumbnail3.png",
        tags: ["Figma, CSS"]
    }];

    return (
        <section className="projects">
            <h1 className="projects_title">
                {language === "fr" ? "Projets" : "Projects"}
            </h1>
            <div className="projects_list">
                { projectList.map(project => <ProjectCard key={projectList.indexOf(project)} project={project} />) }
            </div>
        </section>
    );
}