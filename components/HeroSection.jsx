import Image from 'next/image'

const HeroSection = () => {
    return (
        <section class="relative w-full md:py-44 pb-36  pt-10 px-6">
            <div class="absolute inset-0 bg-green-600/5"></div>
            <div class="container">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center md:mt-10 gap-[50px] gap-y-20">
                    <div class="md:col-span-7">
                        <div class="md:mr-6">
                            <span class="text-green-400 text-lg font-medium">Mind Map  Marketing</span>
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your Business <br /> With MindMap</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et illo minus reiciendis voluptates quis saepe, nam dolore adipisci laborum reprehenderit? Facilis ipsa distinctio maiores vel in, eos incidunt ratione.</p>
                        
                            <div class="mt-6 mb-3">
                                <form class="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" class="pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white  shadow" placeholder="Your Email Address :" />
                                    <button type="submit" class="btn absolute top-[2px] right-[3px] h-[46px] bg-green-600 px-4 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-full">Try it for free <i class="uil uil-arrow-right"></i></button>
                                </form>
                            </div>

                            <span class="text-slate-400 font-medium">Looking for help? <a href="" class="text-green-600 cursor-pointer">Get in touch with us</a></span>
                        </div>
                    </div>

                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src="assets/marketing.png" alt="" />
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;