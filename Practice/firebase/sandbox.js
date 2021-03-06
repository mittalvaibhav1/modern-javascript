const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe,id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id ="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger">Delete</button>
        </li>
    `;
    list.innerHTML += html;
}

const deleteRecipe = (id) => {
    const recipie = document.querySelector(`[data-id='${id}']`);
    if(recipie) recipie.remove();
}
//Real time listeners // onSnapshot() // Whenever data changes
//Firebase takes a snapshot. Thus onSnapshot will be executed.

const unsub = db.collection('recipies').onSnapshot(snapshot => {
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        if(change.type === 'added') {
            addRecipe(doc.data(),doc.id);
        }
        else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
})



// Get Document // Fetches 1 time. We need it to be realtime 
// db.collection('recipies').get().then((snapshot) => {
//     //When we ge tthe data
//     snapshot.docs.forEach((doc) =>{
//         addRecipe(doc.data(),doc.id);
//     });
// })
// .catch((err) => {
//     console.log(err.message);
// })

// Add document
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title : form.recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)
    }
    form.reset();
    db.collection('recipies').add(recipe).then(() => {
        
    }).catch(err => {
        console.log(err.message);
    })
});

// Delete documents 
list.addEventListener('click',(e) => {
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipies').doc(id).delete().then(() => {
            console.log('deleted');
        }).catch(err => console.log(err.message));
    }
})

button.addEventListener('click', () => {
    unsub();
    console.log('unsubbed');
})