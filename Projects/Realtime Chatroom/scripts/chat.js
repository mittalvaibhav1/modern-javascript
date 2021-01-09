class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message) {
        const now = new Date();
        const newChat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await this.chats.add(newChat);
        return response;
    }
    getChats(callback) {
        this.unsub = this.chats
        .where('room','==',this.room) //Conditional snapshot , where(property,condition,value)
        //.orderBy('created_at') 
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                const doc = change.doc;
                if(change.type === 'added') {
                    callback(doc.data());
                }
            });
        })
    }
    updateName(username) {
        this.username = username;
    }
    updateRoom(room) {
        this.room = room;
        if(this.unsub)
            this.unsub();
    }
}

//const chatroom = new Chatroom('gaming', 'boyle');


// chatroom.addChat('Whaddup people')
//     .then(() => console.log('Chat Added'))
//     .catch((error) => console.log(error.message));
