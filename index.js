// Add JavaScript below
document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts');
  
    // Fetch data from the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
  
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
  
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => console.error('Could not fetch that data, my guy!:', error));
  });
  