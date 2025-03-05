const blockPosts = document.querySelector('.posts') //получаем нужные элементы из html

window.onload = () => {     //по загрузке окна получаем с firebase все посты
    fetch('https://project-4cf4c-default-rtdb.firebaseio.com/posts.json')
        .then (response => response.json())
        .then (data => {
            const arr = Object.values(data).map((el,i) => {
                return {
                    ...el,
                    id: Object.keys(data)[i],
                }
            })
            arr.forEach(post => {       //обрабатываем необходимые поля из полученных объектов
                const div = document.createElement('div')
                const title = document.createElement('p')
                title.textContent = post.title
                const userName = document.createElement('p')
                userName.textContent = post.userName
                const delBtn = document.createElement('button') 
                delBtn.textContent = 'УДАЛИТЬ ПОСТ'
                delBtn.classList.add('delBtn')

                delBtn.onclick = () => {       //по кнопке 'УДАЛИТЬ ПОСТ' удаляется пост из firebase             
                                    
                    fetch(`https://project-4cf4c-default-rtdb.firebaseio.com/posts/${post.id}.json`, {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json'
                        },        
                        
                    })
                        .then (data => data.json())                           
                        .then (div.style.display = 'none')     //удаляется блок с постом со страницы админки                           
                        .catch (error => console.error('Error:', error))
                        
                }                

                div.append(title, userName,delBtn)
                blockPosts.appendChild(div)

            })           
        })
        .catch (error => console.error('Error:', error))
}






