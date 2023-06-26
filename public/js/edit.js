// Add new comment
const addComment = async (event, blogId) => {
  if (event.target.hasAttribute('data-comment')) {
    const id = event.target.getAttribute('data-comment');
    const comment = document.querySelector(`#comment-${id}`).value;
    const response = await fetch(`/edit/${id}`, {
      method: 'POST',
      body: JSON.stringify({ blog_id: blogId, comment }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      document.location.replace(`/edit/${id}`);
    } else {
      alert('Failed to comment post');
    }
  }
};

document.querySelectorAll('.btn-comment').forEach(button => {
  const blogId = button.getAttribute('data-comment');
  button.addEventListener('click', event => addComment(event, blogId));
});

// Delete comment
const deleteComment = async (event) => {
  if (event.target.hasAttribute('data-delete-comment')) {
    const id = event.target.getAttribute('data-delete-comment');
    console.log(id);
    const response = await fetch(`/edit/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete comment');
    }
  }
};

document.querySelectorAll('.btn-delete-comment').forEach(button => {
  button.addEventListener('click', deleteComment);
});

