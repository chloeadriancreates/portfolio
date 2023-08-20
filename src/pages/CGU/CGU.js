import "./CGU.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function CGU() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        if(language === "fr") {
            document.title = `Mentions légales | Chloé Adrian – Développeuse front-end`;
        } else {
            document.title = `GCU | Chloé Adrian – Front-end developer`;
        }
    }, [language]);

    return (
        <div>
            <Header background="light" />
            <section className="cgu">
                <h2 className="cgu_title">{language === "fr" ? "Mentions légales" : "General Conditions of Use"}</h2>
                <p className="cgu_subtitle">{language === "fr" ? "En vigueur au 20 août 2023" : "Applicable from August 20th 2023"}</p>
                <p className="cgu_text">{language === "fr" ? "Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site chloeadrian.dev les présentes mentions légales." : "As per Articles 6-III and 19 of French law n°2004-575 from June 21st 2004 for Trust in numeric economy (L.C.E.N), the following conditions of use are presented to the Users of chloeadrian.dev."}
                <br />
                {language === "fr" ? "La connexion et la navigation sur le site chloeadrian.dev par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le site à la rubrique « Mentions légales »." : "Visiting and navigating on chloeadrian.dev implies full consent to the following conditions of use by the User."}
                </p>

                <h3 className="cgu_heading">Article 1{language === "fr" && " "}: Identification</h3>
                <p className="cgu_text">Chloé Adrian<br />
                {language === "fr" ? "Développeuse front-end" : "Front-end developer"}<br />
                50 boulevard saint Symphorien – 57050 Longeville-les-Metz{language === "en" && " – France"}<br />
                hello@chloeadrian.dev</p>

                <h3 className="cgu_heading">Article 2{language === "fr" ? " : L'éditeur" : ": The editor"}</h3>
                <p className="cgu_text">{language === "fr" ? "L’édition et la direction de la publication du site chloeadrian.dev est assurée par Chloé Adrian." : "The content editing and publishing of chloeadrian.dev is handled by Chloé Adrian."}</p>

                <h3 className="cgu_heading">Article 3{language === "fr" ? " : L'hébergeur" : ": The host"}</h3>
                <p className="cgu_text">{language === "fr" ? "L'hébergeur du site chloeadrian.dev est la Société Netlify, dont le siège social est situé au 44 Montgomery St, à San Francisco (STE 300), United States." : "Chloeadrian.dev is hosted by Netlify, whose headquarters are located at 44 Montgomery St, San Francisco (STE 300), United States."}</p>

                <h3 className="cgu_heading">Article 4{language === "fr" ? " : Accès au site" : ": Accessing the website"}</h3>
                <p className="cgu_text">{language === "fr" ? "Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, ou interruption pouvant être programmée ou découler d’une nécessité de maintenance. En cas de modification, interruption ou suspension des services, le site chloeadrian.dev ne saurait être tenu responsable." : "The website is available from anywhere, 24/7, except due to force majeure, or in case of interruption, whether programmed or following a need for maintenance. In case of changes, interruption or paused services, chloeadrian.dev cannot be held responsible."}</p>

                <h3 className="cgu_heading">Article 5{language === "fr" ? " : Collecte des données" : ": Data collecting"}</h3>
                <p className="cgu_text">{language === "fr" ? "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs." : "The website is exempted from declaring to the CNIL, as it doesn't collect any user data."}</p>

                <h3 className="cgu_heading">Article 6{language === "fr" && " "}: Cookies</h3>
                <p className="cgu_text">{language === "fr" ? "L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte." : "The User is aware that while visiting the website, a cookie can automatically be installed in their browser, and accepts them by visiting the website."}
                <br />
                {language === "fr" ? "Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation." : "A cookie is an element that cannot help identifying the User, but is used to save information about their navigation on the website. The User can disable these through their browser settings."}</p>

                <h3 className="cgu_heading">Article 7{language === "fr" ? " : Propriété intellectuelle" : ": Intellectual property"}</h3>
                <p className="cgu_text">{language === "fr" ? "Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site chloeadrian.dev, sans autorisation de l’Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires, telles que prévues par le Code de la propriété intellectuelle et le Code civil." : "Using, copying, spreading, selling or editing the whole or part of chloeadrian.dev without written consent by the Editor is prohibited and can infer legal action, as planned by the French Intellectual Property Code and Civil Code."}</p>
            </section>
            <Footer />
        </div>
    );
}