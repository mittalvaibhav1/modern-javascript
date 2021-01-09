// Dom Queries

const chatList = document.querySelector('.chat-list');

// Class Instances

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'Boyle');

// get chats and render

chatroom.getChats((data) => {
    chatUI.render(data);
})

// chatroom.addChat('Whaddup people')
//     .then(() => console.log('Chat Added'))
//     .catch((error) => console.log(error.message));