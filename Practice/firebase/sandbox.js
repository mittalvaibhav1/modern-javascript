const list = document.querySelector('ul');
const form = document.querySelector('form');

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

//Real time listeners


// Get Document 
db.collection('recipies').get().then((snapshot) => {
    //When we ge tthe data
    snapshot.docs.forEach((doc) =>{
        addRecipe(doc.data(),doc.id);
    });
})
.catch((err) => {
    console.log(err.message);
})

// Add document
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title : form.recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)
    }
    db.collection('recipies').add(recipe).then(() => {

    }).catch(err => {
        console.log(err.message);
    })
});

// Delete documents 
list.addEventListener('click',(e) => {
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('recipies').doc(id).delete().then(() => {
            console.log('deleted');
        }).catch(err => console.log(err.message));
    }
})