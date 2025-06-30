const Login = () => {
    return <div className="flex justify-center items-center min-h-min px-8 py-5">
        <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-6">
            <div className="relative m-2.5 items-center flex justify-center text-slate-800 h-24 rounded-md">
                <h3 className="text-3xl font-bold">
                    Sign In
                </h3>
            </div>
            <div className="flex flex-col gap-4 px-6 py-2">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Email
                    </label>
                    <input 
                        type="email" 
                        className="w-full bg-transparent placeholder:text-slate-400
                         text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                         transition duration-300 ease focus:outline-none focus:border-slate-400
                          hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Your Email" 
                    />
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="w-full bg-transparent placeholder:text-slate-400
                         text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                         transition duration-300 ease focus:outline-none focus:border-slate-400
                          hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Your Password" 
                    />
                </div>

                <div className="inline-flex items-center mt-2">
                    <label className="flex items-center cursor-pointer relative">
                        <input 
                            type="checkbox" 
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-orange-600 checked:border-orange-800" 
                            id="check-2" 
                        />
                        <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                            </svg>
                        </span>
                    </label>
                    <label className="cursor-pointer ml-2 text-slate-600 text-sm">
                        Remember Me
                    </label>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button 
                    className="w-full rounded-md bg-orange-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all
                     shadow-md hover:shadow-lg focus:bg-orange-700 focus:shadow-none active:bg-orange-700
                      hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50
                       disabled:shadow-none" 
                    type="button"
                >
                    Sign In
                </button>
                <p className="flex justify-center mt-6 text-sm text-slate-600">
                    Don&apos;t have an account?
                    <a href="#signup" className="ml-1 text-sm font-semibold text-orange-600 underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    </div>
}

export default Login;