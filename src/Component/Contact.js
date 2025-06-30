const Contact = () => {
    return <div className="flex justify-center items-center min-h-min px-8 py-5">
        <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-6">
            <div className="relative m-2.5 items-center flex justify-center text-slate-800 h-24 rounded-md">
                <h3 className="text-3xl font-bold">
                    Contact Us
                </h3>
            </div>
            <div className="flex flex-col gap-4 px-6 py-2">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Name
                    </label>
                    <input type="text" className="w-full bg-transparent placeholder:text-slate-400
                     text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                     transition duration-300 ease focus:outline-none focus:border-slate-400
                      hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Email
                    </label>
                    <input type="email" className="w-full bg-transparent placeholder:text-slate-400
                     text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                     transition duration-300 ease focus:outline-none focus:border-slate-400
                      hover:border-slate-300 shadow-sm focus:shadow" placeholder="you@example.com" />
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Message
                    </label>
                    <textarea rows="4" className="w-full bg-transparent placeholder:text-slate-400
                     text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                     transition duration-300 ease focus:outline-none focus:border-slate-400
                      hover:border-slate-300 shadow-sm focus:shadow resize-none" 
                     placeholder="Your message..."></textarea>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button className="w-full rounded-md bg-orange-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all
                 shadow-md hover:shadow-lg focus:bg-orange-700 focus:shadow-none active:bg-orange-700
                  hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50
                   disabled:shadow-none" type="button">
                    Send Message
                </button>
                <p className="flex justify-center mt-6 text-sm text-slate-600">
                    Need immediate help?
                    <a href="#support" className="ml-1 text-sm font-semibold text-orange-600 underline">
                        Get Support
                    </a>
                </p>
            </div>
        </div>
    </div>
}

export default Contact;
