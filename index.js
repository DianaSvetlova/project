const blockPosts = document.querySelector('.posts')

window.onload = () => {
    fetch('https://project-4cf4c-default-rtdb.firebaseio.com/posts.json')
        .then (response => response.json())
        .then (data => {
            const arr = Object.values(data).map((el,i) => {
                return {
                    ...el,
                    id: Object.keys(data)[i],
                }
            })
            arr.forEach(post => {
                
                const article = document.createElement('div')
                article.classList.add('article')
                const date = document.createElement('div')                
                date.innerText = new Date(post.date).toLocaleString()
                date.classList.add('article__date')
                const title = document.createElement('div')
                title.textContent = post.title
                title.classList.add('article__title') 

                // const article__post = document.createElement('div')                
                // article__post.classList.add('article__post')
                // const article__post__user = document.createElement('div')                
                // article__post.classList.add('article__post__user')
                // const article__post__avatar = document.createElement('div')                
                // article__post.classList.add('article__post__avatar')

                const avatar = document.createElement('img')
                avatar.src="./ava3.webp"
                avatar.classList.add('article__post__avatar_img')
                

                const userName = document.createElement('div')
                userName.textContent = post.userName 
                userName.classList.add('article__post__name') 
                
                const text = document.createElement('div') 
                text.textContent = post.text  
                text.classList.add('article__post__text')
                const btnReadMore = document.createElement ('button')
                btnReadMore.textContent = "читать дальше" 
                btnReadMore.classList.add('button')                 
                

                btnReadMore.onclick = () => {
                    
                    const postId = post.id
                    localStorage.setItem('fullPostId', JSON.stringify(postId))
                    window.location.href='./fullpost/fullpost.html'

                }
                
                article.append(
                    avatar,
                    date, 
                    title, 
                    // article__post,
                    // article__post__user,
                    // article__post__avatar,                     
                    userName, 
                    text, 
                    btnReadMore)
                blockPosts.appendChild(article)

            })           
        })
        .catch (error => console.error('Error:', error))
}






