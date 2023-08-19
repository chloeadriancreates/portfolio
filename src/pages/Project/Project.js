import "./Project.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getProjects } from "../../utils/getProjects";

export default function Project() {
    const dispatch = useDispatch();
    const { key } = useParams();
    const { language } = useSelector((state) => state.language);
    const { projects } = useSelector((state) => state.projects);
    const [project, setProject] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if(!projects.length) {
            getProjects(dispatch);
        } else {
            setProject(projects.filter(project => project.key === key)[0]);
        }
    }, [dispatch, projects, key]);

    useEffect(() => {
        if(project) {
            if(language === "fr") {
                document.title = `${project.name} / Chloé Adrian – Développeuse front-end`;
            } else {
                document.title = `${project.name} / Chloé Adrian – Front-end developer`;
            }
        }
    }, [project, language]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    return (
        <div>
            <Header background="light" />
            { project && windowWidth <= 1100 &&
                <picture className="project_images_thumbnail">
                    <source
                        srcSet={`/img/${project.key}/thumbnail-1000w.jpg`}
                        media="(max-width: 500px)"
                    />
                    <source
                        srcSet={`/img/${project.key}/thumbnail-2000w.jpg`}
                        media="(max-width: 1000px)"
                    />
                    <img
                        srcSet={`/img/${project.key}/thumbnail-4000w.jpg`}
                        alt={language === "fr" ? `Mise en situation du projet ${project.name}` : `${project.name} mockup`}
                        className="project_images_thumbnail_photo"
                    />
                </picture>
            }
            { project &&
                <section className="project">
                    <section className="project_caption">
                        <h2 className="project_caption_title">{project.name}</h2>
                        <div className="project_caption_tags">
                            { project.tags.map(tag => <p className="project_caption_tags_tag" key={project.tags.indexOf(tag)}>{tag}</p>)}
                        </div>
                        <div className="project_caption_links">
                            { project.links.map(link =>
                                <a href={link.link}className="project_caption_links_button" key={project.links.indexOf(link)} target="_blank" rel="noreferrer">{link.title[language]}</a>
                            )}
                        </div>
                        { project.description[language].map(paragraph => <p className="project_caption_description" key={project.description[language].indexOf(paragraph)}>{paragraph}</p>) }
                    </section>
                    <section className="project_images">
                        { windowWidth > 1100 &&
                            <picture className="project_images_thumbnail">
                                <source
                                    srcSet={`/img/${project.key}/thumbnail-2000w.jpg`}
                                    media="(max-width: 2000px)"
                                />
                                <img
                                    srcSet={`/img/${project.key}/thumbnail-4000w.jpg`}
                                    alt={language === "fr" ? `Mise en situation du projet ${project.name}` : `Project ${project.name} mockup`}
                                    className="project_images_thumbnail_photo"
                                />
                            </picture>
                        }
                        { project.images.map(image =>
                            <picture className="project_images_illustration" key={project.images.indexOf(image)}>
                                <source
                                    srcSet={`/img/${project.key}/${image.file}-1000w.jpg`}
                                    media="(max-width: 500px)"
                                />
                                <source
                                    srcSet={`/img/${project.key}/${image.file}-2000w.jpg`}
                                    media="(max-width: 2000px)"
                                />
                                <img
                                    srcSet={`/img/${project.key}/${image.file}-4000w.jpg`}
                                    alt={image.alt[language]}
                                    className="project_images_thumbnail_photo"
                                />
                            </picture>
                        )}
                    </section>
                </section>
            }
            <Footer />
        </div>
    );
}