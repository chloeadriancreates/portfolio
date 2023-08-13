import "./Welcome.scss";
import Header from "../../../../components/Header/Header";
import { useSelector } from "react-redux";

export default function Welcome() {
    const { language } = useSelector((state) => state.language);

    return (
        <section className="welcome">
            <Header background="bright" />
            <h1 className="welcome_title">
                {language === "fr" ? "Bonjour !" : "Hello!"}
            </h1>
            <p className="welcome_caption">
                {language === "fr" ?
                "Je m’appelle Chloé et je suis développeuse front-end. Ce qui m'intéresse le plus est de combiner les pouvoirs de la technologie, de l'art et de la communication pour rendre le monde aussi inclusif que possible."
                : "My name is Chloé and I'm a front-end developer. What matters most to me is combining the powers of technology, art, and communication to make the world as inclusive as possible."}
            </p>
            <button className="welcome_button" onClick={() => {
                window.scrollTo({
                    top: document.getElementById("header_light").offsetTop,
                    behavior: "smooth"
               });
            }}>
                {language === "fr" ? "Découvrir mon univers" : "Dive into my universe"}
            </button>
        </section>
    );
}