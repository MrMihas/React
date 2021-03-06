const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [],
    newPostText: "Злови журавля"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }
    return state;
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;