import { BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon  } from '@heroicons/react/outline';
    import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImage, img, caption}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* post header */}
            <div className='flex items-center p-5'>
                <picture>
                <img src={userImage} alt={username} className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                </picture>
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5'/>
            </div>

        {/* image */}
            <picture>
              <img src={img} alt={caption} className="object-cover w-full " />
            </picture>

        {/* buttons */}
        <div className='flex justify-between px-4 pt-4 '>
            <div className='flex space-x-4'>
              <HeartIcon  className='btn'/>
              <ChatIcon className='btn'/>
              <PaperAirplaneIcon className='btn'/>
            </div>

            <BookmarkIcon className='btn'/>
        </div>
            
        {/* caption */}
        <p className='p-5 truncate'>
          <span className='font-bold mr-1'>{username}</span>
          {caption}
        </p>

        {/* comments */}

        {/* input box */}
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input type="text"  
          placeholder="add a comment...."
          className='border-none flex-1 focus:ring-0 outline-none bg-gray-50 mx-1' />
          <button className='font-semibold text-gray-700'>Post</button>
        </form>
    </div>
  )
}

export default Post