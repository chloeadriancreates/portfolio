import "./ProjectList.scss";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { createTags, selectTag } from "../../../../app/slices/projectSlice";

export default function ProjectList() {
    const dispatch = useDispatch();
    const { language } = useSelector((state) => state.language);
    const { projects } = useSelector((state) => state.projects);
    const { tags } = useSelector((state) => state.projects);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        dispatch(createTags());
    }, [projects, dispatch]);

    useEffect(() => {
        const filterProjects = () => {
            const selectedTags = tags.filter(tag => tag.selected);
            if(selectedTags.length) {
                return projects.filter(project => {
                    const testSelectedTags = [];
                    selectedTags.forEach(selectedTag => testSelectedTags.push(project.tags.includes(selectedTag.skill)));
                    return testSelectedTags.every((element) => element === true);
                });
            } else {
                return projects;
            }
        };
        if(tags && projects) {
            setFilteredProjects(filterProjects());
        }
    }, [tags, projects]);

    return (
        <section className="projects">
            <h1 className="projects_title">
                {language === "fr" ? "Projets" : "Projects"}
            </h1>
            <div className="projects_filter">
                <p className="projects_filter_title">
                    {language === "fr" ? "Filtrer par compétence" : "Filter by skill"}
                </p>
                <div className="projects_filter_taglist">
                    { tags && tags.map(tag => <button
                    onClick={() => dispatch(selectTag({tag: tag}))}
                    className={`projects_filter_taglist_tag 
                    projects_filter_taglist_tag--${tag.selected ? "selected" : "notSelected"}`}
                    key={tag.skill}>{tag.skill}</button>) }
                </div>
            </div>
            { filteredProjects.length ?
                <div className="projects_list">
                    { filteredProjects.map(project => <ProjectCard key={projects.indexOf(project)} project={project} />)}
                </div>
            :
                <p className="projects_list_error">{language === "fr" ? "Aucun projet n'utilise toutes les compétences sélectionnées. Essayez une autre combinaison !" : "No project uses all the skills selected. Try another combo!"}</p>
            }
        </section>
    );
}