import "./Error.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Error() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        if(language === "fr") {
            document.title = `Page inexistante | Chloé Adrian – Développeuse front-end`;
        } else {
            document.title = `This page doesn't exist | Chloé Adrian – Front-end developer`;
        }
    }, [language]);

    return (
        <div className="error">
            <Header background="light" />
            <section className="error_section">
                <h2 className="error_section_title">404</h2>
                <p className="error_section_text">{language === "fr" ? "Oups! On dirait qu'un dragon a mis feu à la page que vous cherchiez." : "Woops! Looks like a dragon breathed fire on the page you were looking for."}</p>
                <Link to={"/"}
                className="error_section_button"
                title={language === "fr" ? "Accueil" : "Homepage"}>
                    <div className="error_section_button_icon fa-solid fa-dragon"></div>
                    <p className="error_section_button_text">{language === "fr" ? "Désolé ! Je vous ramène à l'accueil ?" : "Sorry! Let's get you back home?"}</p>
                </Link>
            </section>
            <Footer />
        </div>
    );
}