import "./About.scss";
import { useSelector } from "react-redux";

export default function About() {
    const { language } = useSelector((state) => state.language);

    return (
        <section className="about">
            <article className="about_caption">
                <h1 className="about_caption_title">
                    {language === "fr" ? "À propos" : "About me"}
                </h1>
                <p className="about_caption_text">
                    {language === "fr" ?
                    "Je m’appelle Chloé, j’ai 25 ans et je suis développeuse front-end."
                    : "My name is Chloé, I'm 25 and I'm a front-end developer. What matters most to me is combining the powers of technology, art, and communication to make the world as inclusive as possible."}
                </p>
                <p className="about_caption_text">
                    {language === "fr" ?
                    "Je suis passionnée de développement web et de design graphique depuis que j’ai découvert Gimp à l’âge de 8 ans, et je me suis depuis spécialisée en développement front-end, particulièrement l’écosystème JavaScript."
                    : "I have been passionate about web developement and graphic design ever since I discovered The Gimp when I was 8, and I have since specialized in front-end development, particularly the JavaScript ecosystem."}
                </p>
                <p className="about_caption_text">
                    {language === "fr" ?
                    "Diplômée de deux formations en développement front-end, ce qui m'intéresse le plus est de combiner les pouvoirs de la technologie, de l'art et de la communication pour rendre le monde aussi inclusif que possible. Dans un monde qui peut manquer d'empathie, je veux m'assurer que tout le monde passe un bon moment en utilisant les produits sur lesquels je travaille."
                    : "Graduate from two front-end development programs, what matters most to me is combining the powers of technology, art, and communication to make the world as inclusive as possible. In a world that can lack empathy, I want to make sure everyone has a good time using the products I work on."}
                </p>
                <p className="about_caption_text">
                    {language === "fr" ?
                    "Lorsque je n’ai pas des lignes de code jusqu’aux genoux, vous pouvez me trouver en train de jouer à Donjons & Dragons ou de tricoter devant un bon film !"
                    : "When I'm not knee-deep in code, you can find me playing D&D or knitting in front of a good movie!"}
                </p>
                <p className="about_caption_text">
                    {language === "fr" ?
                    "Je suis actuellement basée à Metz, mais ouverte à toutes les opportunités. N’hésitez pas à me contacter !"
                    : "I am currently located in Metz, France, but I am open to all opportunities. Don't hesitate to contact me!"}
                </p>
            </article>
            <div className="about_illustration">
                <article className="about_illustration_card about_illustration_card--old">
                    <picture>
                        <source
                            srcSet={`/img/about/aboutOld-500w.jpg`}
                            media="(max-width: 380px)"
                        />
                        <source
                            srcSet={`/img/about/aboutOld-1000w.jpg`}
                            media="(max-width: 740px), (min-width: 800px) and (max-width: 1270px)"
                        />
                        <img
                            src={`/img/about/aboutOld-2000w.jpg`}
                            alt={language === "fr" ? "Chloé Adrian en 1999" : "Chloé Adrian, circa 1999"}
                            className="about_illustration_card_photo"
                        />
                    </picture>
                    <p className="about_illustration_card_caption">{language === "fr" ? "Cette photo date de 1999" : "This photo is from 1999"}</p>
                </article>
                <article className="about_illustration_card about_illustration_card--new">
                    <picture>
                        <source
                            srcSet={`/img/about/aboutNew-500w.jpg`}
                            media="(max-width: 380px)"
                        />
                        <source
                            srcSet={`/img/about/aboutNew-1000w.jpg`}
                            media="(max-width: 740px), (min-width: 800px) and (max-width: 1270px)"
                        />
                        <img
                            src={`/img/about/aboutNew-2000w.jpg`}
                            alt={language === "fr" ? "Chloé Adrian en 2021" : "Chloé Adrian, circa 2021"}
                            className="about_illustration_card_photo"
                        />
                    </picture>
                    <p className="about_illustration_card_caption">{language === "fr" ? "Celle-ci est un peu plus récente ;)" : "That one's a bit more recent ;)"}</p>
                </article>
            </div>
        </section>
    );
}