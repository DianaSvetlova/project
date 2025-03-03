const blockPosts = document.querySelector('.posts')
// const deletePost = document.querySelector('.delete-post');

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
                const title = document.createElement('p')
                const userName = document.createElement('p')
                const delBtn = document.createElement('button')

                title.textContent = post.title
                userName.textContent = post.userName
                delBtn.textContent = 'DELETE'

                delBtn.onclick = () => {                    
                                    
                    fetch(`https://project-4cf4c-default-rtdb.firebaseio.com/posts/${post.id}.json`, {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json'
                        },        
                        
                    })
                        .then (data => data.json())                           
                        .then (div.style.display = 'none')                                
                        .catch (error => console.error('Error:', error))
                        
                }                

                div.append(title, userName,delBtn)
                blockPosts.appendChild(div)

            })           
        })
        .catch (error => console.error('Error:', error))
}






