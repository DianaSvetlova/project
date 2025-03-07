const blockPosts = document.querySelector('.posts') //получаем нужные элементы из html
const imgLogo = document.querySelector('.header__logo__img')

window.onload = () => {
    fetch('https://project-4cf4c-default-rtdb.firebaseio.com/posts.json') //по загрузке окна получаем все посты из firebase
        .then (response => response.json())
        .then (data => {
            const arr = Object.values(data).map((el,i) => {
                return {
                    ...el,
                    id: Object.keys(data)[i],
                }
            })
            arr.forEach(post => {
                
                const article = document.createElement('div')   //обрабатываем каждый полученный объект в читаемый пост
                article.classList.add('article')
                const date = document.createElement('div')                
                date.innerText = new Date(post.date).toLocaleString()   //дата по региону
                date.classList.add('article__date')
                const title = document.createElement('div')
                title.textContent = post.title
                title.classList.add('article__title') 
                const avatar = document.createElement('img')
                avatar.alt = 'аватарка'                                 //альтернативный текст, когда нет картинки
                avatar.src="./ava3.webp"                                //статичная картинка
                avatar.classList.add('article__post__avatar_img')
                const userName = document.createElement('div')
                userName.textContent = post.userName 
                userName.classList.add('article__post__name')
                const text = document.createElement('div') 
                text.textContent = post.text  
                text.classList.add('article__post__text')
                const btnReadMore = document.createElement ('button')
                btnReadMore.textContent = "читать дальше" 
                btnReadMore.classList.add('btn-Read-More') 

                btnReadMore.onclick = () => {       
                    
                    const postId = post.id  //по кнопке "читать дальше" id выбранного поста отправляется в local storage
                    localStorage.setItem('fullPostId', JSON.stringify(postId))

                    window.location.href='./fullpost/fullpost.html' //перенаправление на страницу с полным постом
                }
                
                article.append(
                    avatar,
                    date, 
                    title,             
                    userName, 
                    text, 
                    btnReadMore)
                blockPosts.appendChild(article)

            })           
        })
        .catch (error => console.error('Error:', error))
}

imgLogo.onclick = () => { 
    window.location.href='./index.html' //перенаправление на главную
}




