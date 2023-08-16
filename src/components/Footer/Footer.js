import "./Footer.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Footer() {
    const { language } = useSelector((state) => state.language);
    const [emailLabel, setEmailLabel] = useState("Copy my email address");

    const copyEmail = () => {
        navigator.clipboard.writeText("hi@chloeadrian.dev");
        if(language === "fr") {
            setEmailLabel("Adresse mail copiée !");
        } else {
            setEmailLabel("Address copied to clipboard!");
        }

        setTimeout(() => {
            if(language === "fr") {
                document.getElementById("mail-button").blur();
                setEmailLabel("Copier mon adresse mail");
            } else {
                setEmailLabel("Copy my email address");
            }
        }, 1500);
    };

    useEffect(() => {
        if(language === "fr") {
            setEmailLabel("Copier mon adresse mail");
        } else {
            setEmailLabel("Copy my email address");
        }
    }, [language]);

    return (
        <footer className="footer">
            <nav className="footer_nav">
                <div className="footer_nav_category">
                    <button id="mail-button" className="footer_nav_category_button"
                    onClick={copyEmail}>
                        <div className="footer_nav_category_button_icon fa-solid fa-envelope"></div>
                    </button>
                    <p id="mail-label" className="footer_nav_category_label">{emailLabel}</p>
                </div>
                <div className="footer_nav_category">
                    <a href="https://github.com/chloeadriancreates?tab=stars"
                    title={language === "fr" ? "Profil GitHub" : "GitHub profile"}
                    lang={language}
                    target="_blank"
                    rel="noreferrer"
                    className="footer_nav_category_button">
                        <div className="footer_nav_category_button_icon fa-brands fa-github"></div>
                    </a>
                    <p id="github-label" className="footer_nav_category_label">{language === "fr" ? "Visiter mon profil GitHub" : "Visit my GitHub profile"}</p>
                </div>
                <div className="footer_nav_category">
                    <a href="https://www.linkedin.com/in/chloeadriancreates/"
                    title={language === "fr" ? "Profil LinkedIn" : "LinkedIn profile"}
                    lang={language}
                    target="_blank"
                    rel="noreferrer"
                    className="footer_nav_category_button">
                        <div className="footer_nav_category_button_icon fa-brands fa-linkedin"></div>
                    </a>
                    <p id="linkedin-label" className="footer_nav_category_label">{language === "fr" ? "Visiter mon profil LinkedIn" : "Visit my LinkedIn profile"}</p>
                </div>
            </nav>
            <div className="footer_text">
                <p className="footer_text_copyright">{language === "fr" ? "Fait avec ♥ par Chloé Adrian en 2023" : "Made with ♥ by Chloé Adrian in 2023"}</p>
                <Link to={"/"}
                className="footer_text_link"
                lang={language}>
                    {language === "fr" ? "Mentions légales" : "General Conditions of Use"}
                </Link>
            </div>
        </footer>
    );
}