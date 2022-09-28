import Post from "./Post"

const posts = [
    {
        "id": "1",
        username: "Jahmaine",   
        userImage: "https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo",
        caption: "this is dope images",
    },
    {
        "id": "2",
        username: "Jahmaine",   
        userImage: "https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo",
        caption: "this is dope images",
    },
]



function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id}
            id={post.id}
            username={post.username}
            userImage={post.userImage}
            img={post.img}
            caption={post.caption} />
        ))}
    </div>
  )
}

export default Posts