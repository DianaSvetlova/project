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
                
                const div = document.createElement('div')
                const date = document.createElement('p')
                date.innerText = new Date(post.date).toUTCString()
                const title = document.createElement('p')
                title.textContent = post.title
                const userName = document.createElement('p')
                userName.textContent = post.userName 
                const text = document.createElement('div') 
                text.textContent = post.text  
                const btnReadMore = document.createElement ('button')
                btnReadMore.textContent = "читать дальше"  

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



                div.append(date, title, userName, text, btnReadMore)
                blockPosts.appendChild(div)

            })           
        })
        .catch (error => console.error('Error:', error))
}






