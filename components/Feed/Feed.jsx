import Stories from '../SocialFeeds/Stories';

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            {/* stories */}
            <Stories />
            {/* post */}
        </section>
        

        <section>
            {/* mini profile */}
            {/* suggestions */}
        </section>
            
    </main>
  )
}

export default Feed