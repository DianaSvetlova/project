const userName = document.querySelector('.article__user__name__input')  //получаем нужные элементы из html
const title = document.querySelector('.article__title__input')
const text = document.getElementById('text')
const btnSubmit = document.querySelector('.article__buttons__submit')
const btnReset = document.querySelector('.article__buttons__del')

btnSubmit.onclick = () => {         //по кнопке "отправить" создаём объект из данных, введённых в поля вручную 
    const post = {
        userName: userName.value,
        title: title.value,
        text: text.value,
        date: new Date(),
    }
    console.log(post);  

    fetch(`https://project-4cf4c-default-rtdb.firebaseio.com/posts.json`, {    //отправляем полученные на данный на firebase
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

btnReset.onclick = () => {      //по кнопке "удалить черновик" удаляем введённые, но неотправленные данные
    userName.value = ''
        title.value = ''
        text.value = ''    
}
