const userName = document.querySelector('.article__user__name__input')
const title = document.querySelector('.article__title__input')
const text = document.getElementById('text')
const btnSubmit = document.querySelector('.article__buttons__submit')

btnSubmit.onclick = () => {
    const post = {
        userName: userName.value,
        title: title.value,
        text: text.value,
        date: new Date(),
    }
    console.log(post);    
    

    fetch(`https://project-4cf4c-default-rtdb.firebaseio.com/posts.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(() => {
        userName.value = ''
        title.value = ''
        text.value = ''        
    })
    .catch(err =>  console.log(err))
}

