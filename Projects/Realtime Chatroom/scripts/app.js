// Dom Queries

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
// add a new chat form
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    chatroom.addChat(newChatForm.message.value)
        .then(() => newChatForm.reset())
        .catch((error) => console.log(error.message));
});

//update Username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMessage.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => {
        updateMessage.innerText = '';
    },3000);
    
})
const username  = localStorage.username ? localStorage.username : 'Anonymous';

// Class Instances

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);


// get chats and render

chatroom.getChats((data) => {
    chatUI.render(data);
})

// chatroom.addChat('Whaddup people')
//     .then(() => console.log('Chat Added'))
//     .catch((error) => console.log(error.message));