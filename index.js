
const blogsArray = [
    {
        image: "./Images/blog-1.png",
        date: "JULY 23, 2022",
        title: "Blog one",
        content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
         After several months of learning in the Frontend Developer Career Path.`
    }
    ,
    {
        image: "./Images/blog-2.png",
        date: "JULY 23, 2022",
        title: "Blog two",
        content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
         After several months of learning in the Frontend Developer Career Path.`
    }
    ,
    {
        image: "./Images/blog-3.png",
        date: "JULY 23, 2022",
        title: "Blog Three",
        content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
         After several months of learning in the Frontend Developer Career Path.`
    }
]


const viewMoreBtn = document.getElementById("view-more-btn");
const feed = document.getElementById("feed");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




 const renderFeed = () => {
    feed.innerHTML = blogsArray.map(blog => {
   
        return `<div class="blog">
                <img src="${blog.image}" >
                <h2>${blog.date}</h2>
                <h1>${blog.title}</h1>
                <p>${blog.content}</p>
    
    
            </div>`
        
    }).join("")
 }

  renderFeed()


 const viewMore = () => {

    blogsArray.push( 
        {
            image: "./Images/blog-4.png",
            date: "JULY 23, 2022",
            title: "Blog four",
            content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
             After several months of learning in the Frontend Developer Career Path.`
        }
        ,
        {
            image: "./Images/blog-5.png",
            date: "JULY 23, 2022",
            title: "Blog five",
            content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
             After several months of learning in the Frontend Developer Career Path.`
        }
        ,
        {
            image: "./Images/blog-6.png",
            date: "JULY 23, 2022",
            title: "Blog six",
            content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
             After several months of learning in the Frontend Developer Career Path.`
        }

       
    )

    
    viewMoreBtn.removeEventListener("click", viewMore)
    viewMoreBtn.innerHTML = ''

 renderFeed()
   

 }

viewMoreBtn.addEventListener("click", viewMore)