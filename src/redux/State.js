let store = {
    _state: {
        profilePage: {
            posts: [],
            newPostText: "Злови журавля"
        },

        dialogPage: {
            messages: [
            {
                id: 1,
                message: "hello pollow"
            },
            {
                id: 2,
                message: "hello plate"
            },
            {
                id: 3,
                message: "hello spoon"
            },
            {
                id: 4,
                message: "iron ass"
            },
            {
                id: 6,
                message: "how are you?"
            }

            ],
            dialogs: [
            {id: 1, name: 'Mishka'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Tanya'},
            {id: 4, name: 'Mishelle'},
            {id: 5, name: 'Olya'}
            ]
        },

        sidebar: {
            menuItem: [
            {
                item: "Profile",
                link: "/profile"
            },
            {
                item: "Dialogs",
                link: "/dialogs"
            },
            {
                item: "Settings",
                link: "/settings"
            }
            ],
            friends: [
            {
                id: 1,
                name: "Pete",
                avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
            },
            {
                id: 2,
                name: "John",
                avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
            },
            {
                id: 3,
                name: "Monblan",
                avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
            }
            ]
        }
    },  
    _callSubscriber() {
        console.log('work');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ 
        debugger;
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;