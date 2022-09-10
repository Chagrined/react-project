let state = {
    profilePage: {
        postsState: [
            { id: 1, message: 'I learn React', likeCount: 3 },
            { id: 2, message: 'Next i will learn Node.js', likeCount: 25 },
            { id: 3, message: 'Node.js it is platform for javascript', likeCount: 1000 },
            { id: 4, message: 'I like codding', likeCount: 4000 }
        ],
    },
    dialogsPage: {
        messagesState: [
            { message: "Hi", id: 1, img: 'https://cdn-icons-png.flaticon.com/512/149/149452.png' },
            { message: "How are you?", id: 2, img: 'https://cdn-icons-png.flaticon.com/512/149/149995.png' },
            { message: "what are you doing?", id: 3 },
        ],
        dialogsState: [
            { name: 'Vanya', id: 1, img: 'https://cdn-icons-png.flaticon.com/512/149/149452.png' },
            { name: 'Arsen', id: 2, img: 'https://cdn-icons-png.flaticon.com/512/149/149995.png' },
            { name: 'Dima', id: 3, img: 'https://cdn-icons-png.flaticon.com/512/3843/3843912.png' }
        ]
    },
    sideBar: [
        { name: 'Vanya', id: 1, img: 'https://cdn-icons-png.flaticon.com/512/149/149452.png' },
        { name: 'Arsen', id: 2, img: 'https://cdn-icons-png.flaticon.com/512/149/149995.png' },
        { name: 'Dima', id: 3, img: 'https://cdn-icons-png.flaticon.com/512/3843/3843912.png' }
    ]
}

export default state