class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message) {
        const now = new Date();
        const newChat = {
            message: message,
            username: this.username,
            room: this.room,
            create_at: firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await this.chats.add(newChat);
        return response;
    }
    getChats(callback) {
        this.chats
        .where('room','==',this.room) //Conditional snapshot , where(property,condition,value)
        .orderBy('created_at') // requires index to order
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                const doc = change.doc;
                if(change.type === 'added') {
                    callback(doc.data());
                }
            });
        })
    }
}

const chatroom = new Chatroom('gaming', 'boyle');

chatroom.getChats((data) => {
    console.log(data);
});
// chatroom.addChat('Hellooo')
//     .then(() => console.log('Chat Added'))
//     .catch((error) => console.log(error.message));
