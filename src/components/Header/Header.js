import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../app/slices/languageSlice";
import { Link } from "react-router-dom";

export default function Header({background}) {
    const dispatch = useDispatch();
    const { language } = useSelector((state) => state.language);

    return (
        <header className={`header header--${background}`}>
            <Link to={"/"}
            className="header_title" 
            title={language === "en" ? "Home" : "Accueil"}
            lang={language}>
                Chloé Adrian
            </Link>
            <button
            aria-label={language === "en" ? "Passer au français" : "Switch to English"}
            lang={language === "en" ? "fr" : "en"}
            className={`header_languageSwitch header_languageSwitch--${background}--${language}`}
            onClick={() => dispatch(switchLanguage())}>
                <div className={`header_languageSwitch_language header_languageSwitch_language--${background} header_languageSwitch_language--${language}`}>
                    <p className="header_languageSwitch_language_text">{language.toUpperCase()}</p>
                </div>
            </button>
        </header>
    )
}