import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    tags: null
};

export const projectSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setProjects: (state, action) => {
        state.projects = action.payload.projects;
    },
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

export const { setProjects, createTags, selectTag } = projectSlice.actions;
export default projectSlice.reducer;