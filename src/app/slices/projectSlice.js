import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [{
        name: "Liam O'Brien",
        type: {
            en: "UI Design",
            fr: "Design UI"
        },
        thumbnail: "thumbnail1.png",
        tags: ["React", "HTML"]
    },
    {
        name: "Marisha Ray",
        type: {
            en: "Front-end development",
            fr: "Développement front-end"
        },
        thumbnail: "thumbnail2.png",
        tags: ["CSS", "Redux"]
    },
    {
        name: "Taliesin Jaffe",
        type: {
            en: "UX Design",
            fr: "Design UX"
        },
        thumbnail: "thumbnail3.png",
        tags: ["Figma", "Sass"]
    }],
    tags: null
};

export const projectSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    createTags: (state) => {
        let tempTags = [];
        state.projects.forEach(project => project.tags.forEach(tag => tempTags.push(tag)));
        tempTags = [...new Set(tempTags)];
        tempTags.sort();
        let objectTags = [];
        tempTags.forEach(tag => objectTags.push({skill: tag, selected: false}));
        state.tags = objectTags;
    },
    selectTag: (state, action) => {
        const tagInArray = state.tags.find(tag => tag.skill === action.payload.tag.skill);
        tagInArray.selected = !tagInArray.selected;
    }
  }
});

export const { createTags, selectTag } = projectSlice.actions;
export default projectSlice.reducer;