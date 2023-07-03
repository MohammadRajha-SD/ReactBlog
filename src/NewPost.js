
const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className="NewPost">
      <h1>New Post</h1>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input 
          required
          id="postTitle"
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="postBody">Post: </label>
        <textarea 
          required
          id="postBody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
