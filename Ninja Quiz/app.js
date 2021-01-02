const  correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((ans,index) => {
        if(ans === correctAnswers[index]) score += 25;
    });
    result.classList.remove('d-none');
    result.querySelector('span').textContent = `${score}%`;
    window.scrollTo(0,0); // or simply scrollTo(0,0) as window is inferred
});


// Window Object.
//we dont need to type window as it is automatically inferred
//console.log() is same as window.console.log()
//window.alert() --> alert()
//window.setTimeout(() => ,3000) --> setTimeout(() => ,3000)
