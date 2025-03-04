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
                const avatar = document.createElement('img')
                avatar.src="./ava3.webp"
                avatar.classList.add('article__post__avatar_img')
                const date = document.createElement('div')                
                date.innerText = new Date(post.date).toUTCString()
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
                const btnReadMore = document.createElement ('button')
                btnReadMore.textContent = "читать дальше" 
                btnReadMore.classList.add('button') 

                btnReadMore.onclick = () => {
                    const postId = 
                    fetch('https://project-4cf4c-default-rtdb.firebaseio.com/posts/${id}.json') // как достать нужный Id
                    .then (response => response.json())
                    .then (data => console.log(data))



                    
                    // const post = {
                    //     date: date.value,
                    //     title: title.value,
                    //     userName: userName.value,                        
                    //     text: text.value,                        
                    // }
                    // console.log(post);
                    
                    localStorage.setItem('fullPostId', JSON.stringify(postId))


                    // window.location.href='./fullpost/fullpost.html'

                }


                
                article.append(avatar, date, title, userName, text, btnReadMore)
                blockPosts.appendChild(article)

            })           
        })
        .catch (error => console.error('Error:', error))
}






