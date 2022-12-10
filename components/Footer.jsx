const Footer = () => {
    return (
       <footer className="w-full px-6 py-2 bg-green-200">
         <div className="container">
           <div className="py-4 border-[#9999] border-b-2">
             <div className="grid items-center grid-cols-12">
                <div className="col-span-12 py-4 md:col-span-2">
                  <div className="logo">
                    <h2>MindMap</h2> 
                  </div>  
                </div>
                <div className="col-span-12 md:col-span-10">
                    <ul className="flex flex-wrap justify-between w-full gap-y-4 lg:flex">
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                      <li className="flex font-medium cursor-pointer basis-1/2 sm:basis-0"><a href="#"> Home </a></li>   
                    </ul>
                </div>
             </div>
            </div> 
         </div>
       </footer>
    );
}

export default Footer;
