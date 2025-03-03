const postIdForFullPost = JSON.parse(localStorage.getItem('fullPostId'))

const post = JSON.parse(fullPostPage)


const div = document.createElement('div')
const date = document.createElement('p')
date.innerText = post.date
const title = document.createElement('p')
title.textContent = post.title
const userName = document.createElement('p')
userName.textContent = post.userName 
const text = document.createElement('div') 
text.textContent = post.text  