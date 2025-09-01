export default function Bar(){
 const phases = [
    { 
      name: 'Design', 
      percentage: 40,
      description: 'UI/UX design, wireframes, and prototypes'
    },
    { 
      name: 'Code', 
      percentage: 45,
      description: 'Frontend development, backend APIs, and integrations'
    },
    { 
      name: 'Deployment', 
      percentage: 15,
      description: 'Server setup, CI/CD, and production launch'
    },
  ];

  return (
    <div className="flex bg-white/[0.8] backdrop-blur-lg shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-2xl items-center justify-center">
      <div className="bg-white/[0.4] rounded-2xl p-6 shadow-lg w-80">
        {/* Header */}
        <h3 className="text-gray-800 font-semibold text-base mb-4">Website development</h3>
        
        {/* Single bar */}
        <div className=" rounded-xl h-8 flex overflow-hidden">
          <div 
            className="bg-indigo-600 rounded-xl h-full group relative cursor-pointer"
            style={{ width: '40%' }}
          >
            {/* Tooltip */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
              <div className="font-semibold">Design: 40%</div>
              <div className="text-gray-300">{phases[0].description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          <div 
            className="bg-indigo-400  rounded-xl h-full group relative cursor-pointer"
            style={{ width: '45%' }}
          >
            {/* Tooltip */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
              <div className="font-semibold">Code: 45%</div>
              <div className="text-gray-300">{phases[1].description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
          
          <div 
            className="bg-indigo-200  rounded-xl h-full group relative cursor-pointer"
            style={{ width: '15%' }}
          >
            {/* Tooltip */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
              <div className="font-semibold">Deployment: 15%</div>
              <div className="text-gray-300">{phases[2].description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}