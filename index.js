const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/Vincent-van-Gogh.png",
        post: "images/Van-Gogh.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/Gustave-Courbet.png",
        post: "images/Courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/Joseph-Ducreux.png",
        post: "images/Ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const description = document.getElementById("description")
const postImage = document.getElementById("post-image")
const btnsWrap = document.getElementById("btns-wrap")
const likeBtn = document.getElementById("like-btn")
const count = document.getElementById("count")
const comments = document.getElementById("comments")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
let position = 0
let likesCount = 0



count.textContent = 0

    
desc =  `
		<img class="main-avatar" src="${posts[position].avatar}" alt="small picture of Vincent Van Gogh">
	<div class="info-wrap">
	<p class="name bold">${posts[position].name}</p>
	<p class="location">${posts[position].location}</p>
</div>
`



photo =	`
<img class="main-img" src="${posts[position].post}" alt="A protrait of Van Gogh">
`
    
    
comment =	`
<p class="comments"><span class="bold">${posts[position].username}</span> ${posts[position].comment}</p>
`
    

description.innerHTML = desc
postImage.innerHTML = photo
comments.innerHTML = comment

    

nextBtn.addEventListener("click", nextPost) 
function nextPost(){
    likesCount = 0
    count.textContent = 0
    if(position === posts.length - 1) {
        position = 0
    } else {
        position += 1
    }
    
    desc =  `
    <img class="main-avatar" src="${posts[position].avatar}" alt="small picture of Vincent Van Gogh">
<div class="info-wrap">
<p class="name bold">${posts[position].name}</p>
<p class="location">${posts[position].location}</p>
</div>
`



photo =	`
<img class="main-img" src="${posts[position].post}" alt="A protrait of Van Gogh">
`


comment =	`
<p class="comments"><span class="bold">${posts[position].username}</span> ${posts[position].comment}</p>
`

description.innerHTML = desc
postImage.innerHTML = photo
comments.innerHTML = comment
}

prevBtn.addEventListener("click", prevPost)
function prevPost() {
    likesCount = 0
    count.textContent = 0
    if(position === 0) {
        position = posts.length -1
    } else {
        position --
    }
    desc =  `
    <img class="main-avatar" src="${posts[position].avatar}" alt="small picture of Vincent Van Gogh">
<div class="info-wrap">
<p class="name bold">${posts[position].name}</p>
<p class="location">${posts[position].location}</p>
</div>
`



photo =	`
<img class="main-img" src="${posts[position].post}" alt="A protrait of Van Gogh">
`


comment =	`
<p class="comments"><span class="bold">${posts[position].username}</span> ${posts[position].comment}</p>
`

description.innerHTML = desc
postImage.innerHTML = photo
comments.innerHTML = comment
}



likeBtn.addEventListener("click", addLikes)
postImage.addEventListener("dblclick", addLikes)

function addLikes() {
	likesCount += 1
count.textContent = likesCount
}

