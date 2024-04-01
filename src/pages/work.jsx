import appFitzy from "../assets/app-fitzy.png"
import appVegas from "../assets/app-vegas.png"
import comingSoon from "../assets/coming-soon.jpg"

function Work() {
    return (<section id="work" className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Work</h2>
        <div className="flex flex-wrap lg:gap-4">
        
        <div className="w-full md:w-1/2 lg:w-1/4 smaller-gaps relative" style={{width:"300px"}}>
            
            <div className="absolute top-0 right-0" style={{zIndex:10}}>
                <a href="https://github.com/waltscode/Fitzys_Fades/" target="_blank">
                    <i className="ri-github-fill"></i>
                </a>
            </div>
            <a href="https://fizzyfads.onrender.com/" target="_blank" className="block relative group">
                <img src={appFitzy} alt="Application 1" className="rounded-lg object-cover h-96 md:h-64 w-full" style={{width:"100%", height:"20rem"}}/>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-50 text-white group-hover:bg-opacity-75 transition-all duration-300">
                <h3 className="font-bold">Application 1</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </a>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 smaller-gaps relative">
            <div className="absolute top-0 right-0" style={{zIndex:10}}>
                <a href="https://github.com/ozdaldogru/Las-Vegas-Trip-Organizer" target="_blank">
                    <i className="ri-github-fill"></i>
                </a>
            </div>
            <a href="https://ozdaldogru.github.io/Las-Vegas-Trip-Organizer/" target="_blank" className="block relative group">
                <img src={appVegas} alt="Application 2" className="rounded-lg object-cover h-64 w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-50 text-white group-hover:bg-opacity-75 transition-all duration-300">
                    <h3 className="font-bold">Application 2</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 smaller-gaps relative">
            <div className="absolute top-0 right-0" style={{zIndex:10}}>
                <a href="https://ozdaldogru.github.io/Las-Vegas-Trip-Organizer/" target="_blank">
                    <i className="ri-github-fill"></i>
                </a>
            </div>
            <a href="#" target="_blank" className="block relative group">
                <img src={comingSoon} alt="Application 2" className="rounded-lg object-cover h-64 w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-50 text-white group-hover:bg-opacity-75 transition-all duration-300">
                    <h3 className="font-bold">COMING SOON</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
        </div>
    
        </div>
    </section>)
  }
  

  export default Work