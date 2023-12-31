import "./Home.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Welcome from "./sections/Welcome/Welcome";
import Header from "../../components/Header/Header";
import ProjectList from "./sections/ProjectList/ProjectList";
import About from "./sections/About/About";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        if(language === "fr") {
            document.title = "Chloé Adrian – Développeuse front-end";
        } else {
            document.title = "Chloé Adrian – Front-end developer";
        }
    }, [language]);

    return (
        <div>
            <Welcome />
            <Header background="light" />
            <ProjectList />
            <About />
            <Footer />
        </div>
    );
}