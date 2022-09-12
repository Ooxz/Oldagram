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

const mainEl = document.getElementById("main-el")
let allCards = ""

	for(let i = 0; i < posts.length; i++) {
		console.log(posts[i])
		allCards += `<div class="description">
		<img class="main-avatar" src="${posts[i].avatar}" alt="small picture of Vincent Van Gogh">
	<div class="info-wrap">
	<p class="name bold">${posts[i].name}</p>
	<p class="location">${posts[i].location}</p>
</div>
</div>
	<img class="main-img" src="${posts[i].post}" alt="A protrait of Van Gogh">
	<div class="incons-wrap">
	<img class="like" id="like-btn" src="images/like.png" alt="like icon">
	<img class="comment" src="images/comment.png" alt="comment icon">
	<img class="share" src="images/share.png" alt="like icon">
		</div>
		<p class="likes-numbers bold" id="likes-increment">${posts[i].likes} likes</p>
<p class="comments"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>`
	}
	mainEl.innerHTML = allCards
	console.log(allCards)



// const likeBtn = document.getElementById("like-btn");
// const likesIncrement = document.getElementById("likes-increment")

// let likes = likes
// console.log(likes ++)
// console.log(likes, likesIncrement, likeBtn)

// likesIncrement.innerHTML = `${likes} likes`

// likeBtn.addEventListener("click", addLikes)

// function addLikes() {
// 	console.log("clicked")
// 	likes = likes + 1
// likesIncrement.innerHTML = `${likes} likes`
// }

