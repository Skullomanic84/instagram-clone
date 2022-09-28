

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <picture>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo" alt="" className="w-16 h-16 rounded-full border p-[2px] "/>
        </picture>

        <div className="flex-1 mx-4">
            <h2 className="font-bold">Jahmaine</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>

        <button className="text-blue-400 text-sm text-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile