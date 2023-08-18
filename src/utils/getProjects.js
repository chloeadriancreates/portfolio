import { setProjects } from "../app/slices/projectSlice";

export const getProjects = async(dispatch) => {
    try {
        const response = await fetch("/data/projects.json");
        const responseJS = await response.json();
        dispatch(setProjects({projects: responseJS}));
    } catch(error) {
        console.log(error);
    }
};