function Navbar(){
    return (
        <header className="border-b bg-white border-gray-200">

    <nav className="flex-col flex  gap-5 items-center h-24  px-8  mx-auto max-w-7xl">

        <h1 className="font-extrabold text-4xl text-blue-600 cursor-pointer">DreamSetu</h1>

        <ul className="flex gap-10 list-none">

        
     
            <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Problem </li>   
                
            <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Solution</li>

            <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Features</li>

            <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">How It Works</li>

            <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Roadmap</li>

        </ul>

        <div className="flex flex-col items-cnter gap-4">

            <button className="font-medium text-gray-700 hover:text-blue-600">Login</button>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-colors">Get Started</button>

        </div>

    </nav>

</header>
 
    );
}
export default Navbar;