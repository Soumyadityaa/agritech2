// Array to store posts
const posts = [];

// DOM elements
const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');

// Function to display posts
function displayPosts() {
  postsList.innerHTML = posts.map(post => `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.content}</p> <br>
    </div>
  `).join('');
}

// Function to add a new post
postForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const postTitle = document.getElementById('post-title').value;
  const postContent = document.getElementById('post-content').value;
  const newPost = {
    title: postTitle,
    content: postContent,
  };
  posts.push(newPost);
  displayPosts();
  postForm.reset();
});

// Initial display of posts
displayPosts();
