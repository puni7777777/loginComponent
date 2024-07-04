import React from 'react'

function Signup() {
    return (
        <div className="py-8 flex flex-col gap-4 w-2/4 h-full items-center rounded-lg">
            <h2 className="text-lg font-bold">Create Account</h2>
            <div className="flex gap-4">
                <a href="#" role="button" className="h-9">
                    <div className="rounded-full mb-2 inline-block p-3 text-xs shadow-sm transition-all ease-in-out hover:fill-blue-500 hover:shadow-blue-500 hover:cursor-pointer hover:outline-dotte">
                        <span className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7
            20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2
            0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        </span>
                    </div>
                </a>
                <a href="#" role="button" className="h-9">
                    <div className="rounded-full mb-2 inline-block p-3 shadow-sm  transition-all ease-in-out hover:fill-yellow-500 hover:shadow-yellow-500 hover:cursor-pointer hover:outline-dotte">
                        <span className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448
          204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9
          128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9
          54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7
          109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                            </svg>
                        </span>
                    </div>
                </a>
                <a href="#" role="button" className="h-9">
                    <div className="rounded-full mb-2 inline-block p-3 shadow-sm transition-all ease-in-out hover:fill-blue-800 hover:shadow-blue-900 hover:cursor-pointer hover:outline-dotte">
                        <span className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8
              53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3
              0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3
              61.9 111.3 142.3V448z" />
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
            <div className="text-sm text-gray-700"><h5>or use your email for registration</h5></div>
            <div className="flex flex-col gap-4">
                <input type="name" placeholder="Name" className="border-none bg-gray-300 p-2 rounded-lg outline-none caret-red-500 text-red-600" />
                <input type="email" placeholder="Email" className="border-none bg-gray-300 p-2 rounded-lg outline-none caret-red-500 text-red-600" />
                <input type="password" placeholder="Password" className="border-none bg-gray-300 p-2 rounded-lg outline-none caret-red-500 text-red-600" />
            </div>
            <div className="flex justify-center text-white font-bold">
                <button className="w-32 bg-red-600 rounded-full p-2 hover:bg-red-500">
                    SIGNUP
                </button>
            </div>
        </div>
    )
}

export default Signup
