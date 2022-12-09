
const Features = () => {
    let arr = Array(6).fill(0);
    return (
        <div className="container mx-auto w-full py-12 px-6">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                <div className="lg:col-span-8 md:col-span-12">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 text-2xl font-semibold text-center leading-normal md:text-3xl md:leading-normal">Instant Smart Solutions</h3>
                    </div>
                </div>

                {arr.map((_, i) => (
                    <div key={i} className="lg:col-span-4 md:col-span-6 col-span-12">
                        <div className="px-6 py-10 transition duration-500 bg-white shadow hover:shadow-md rounded-2xl">
                            <i data-feather="users" className="w-12 h-12 text-green-600 stroke-1"></i>

                            <div className="content mt-7">
                                <a href="page-services.html" className="text-lg font-medium title h5 hover:text-indigo-600">User Forum Forum</a>
                                <p className="mt-3 text-slate-400">The phrasal sequence of the is now so that many campaign and benefit</p>

                                <div className="mt-5 cursor-pointer">
                                    <a href="#" className="text-green-600 duration-500 ease-in-out cursor-pointer hover:text-green-600 after:bg-green-600">Read More <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:left-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-1/4 after:right-0 after:-z-1 after:rounded-full"></div>
            </div>
        </div>
    );
}

export default Features;