const fullPostId = localStorage.getItem('fullPostId')

const blockPost = document.querySelector('.blockPost')
const btnLike = document.querySelector('.article__like__button')
const countLike = document.querySelector('.article__like__count')


console.log(fullPostId);
const theFullPostId = JSON.parse(fullPostId)

function getFullPost () {

    fetch(`https://project-4cf4c-default-rtdb.firebaseio.com/posts/${theFullPostId}.json`)
        .then (response => response.json())
        
      
        .then (post => {
            console.log(post); 
            const article = document.createElement('div')
            article.classList.add('article')
            const avatar = document.createElement('img')
            avatar.src="../ava3.webp"
            avatar.classList.add('article__post__avatar_img')
            const date = document.createElement('div')                
            date.innerText = new Date(post.date).toLocaleString()
            date.classList.add('article__date')
            const title = document.createElement('div')
            title.textContent = post.title
            title.classList.add('article__title') 

            const userName = document.createElement('div')
            userName.textContent = post.userName 
            userName.classList.add('article__post__name') 

            const text = document.createElement('div') 
            text.textContent = post.text  
            text.classList.add('article__post__text')


            article.append(avatar, date, title, userName, text, btnLike, countLike)
            blockPost.appendChild(article)         
            

        })
        .catch (error => console.error('Error:', error))

}

getFullPost ()

btnLike.onclick = () => {
    countLike.textContent = parseInt(countLike.textContent) + 1; 
    btnLike.style.display = 'none'
    const imgLike = document.createElement ('img')
    imgLike.src="./like.png"
    imgLike.classList.add('article__like__button__img__change')
    const article = document.querySelector('.article')
    article.appendChild(imgLike)  
}



