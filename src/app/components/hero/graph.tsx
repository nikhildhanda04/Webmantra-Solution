import { TrendingUp} from 'lucide-react';

export default function Graph() {
      const data = [
    { month: 'Jan', value: 30, growth: '+5%' },
    { month: 'Feb', value: 45, growth: '+12%' },
    { month: 'Mar', value: 35, growth: '-8%' },
    { month: 'Apr', value: 65, growth: '+18%' },
    { month: 'May', value: 55, growth: '-4%' },
    { month: 'Jun', value: 80, growth: '+25%' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  // Generate curved path for the line
  const generateCurvePath = () => {
    const points = data.map((item, index) => ({
      x: 40 + (index * 60), // Spacing between points
      y: 180 - (item.value / maxValue) * 120 // Y position based on value
    }));

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlX = (prevPoint.x + currentPoint.x) / 2;
      
      path += ` Q ${controlX} ${prevPoint.y} ${currentPoint.x} ${currentPoint.y}`;
    }
    
    return path;
  };

  return (
    <div className="bg-white/[0.8] backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 w-[500px] hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-green-200/20 to-transparent rounded-full"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-gray-800 font-bold text-2xl mb-1">Revenue Growth</h3>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-green-100 px-4 py-2 rounded-full border-2 border-green-200">
              <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-bold text-lg">+23%</span>
            </div>
          </div>
        </div>
        
        {/* Illustrative Graph Area */}
        <div className="mb-8 relative">
          <svg width="420" height="200" className="overflow-visible">
            {/* Grid lines - dashed and subtle */}
            <defs>
              <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="420" height="200" fill="url(#grid)" />
            
            {/* Data points and bars */}
            {data.map((item, index) => {
              const x = 40 + (index * 60);
              const barHeight = (item.value / maxValue) * 120;
              const y = 180 - barHeight;
              
              return (
                <g key={index}>
                  {/* Thick illustrative bar */}
                  <rect
                    x={x - 15}
                    y={y}
                    width="30"
                    height={barHeight}
                    fill="url(#barGradient)"
                    rx="15"
                    ry="15"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Value circle on top */}
                  <circle
                    cx={x}
                    cy={y - 10}
                    r="12"
                    fill="#3b82f6"
                    className="drop-shadow-md"
                  />
                  <circle
                    cx={x}
                    cy={y - 10}
                    r="8"
                    fill="white"
                  />
                  
                  {/* Month labels */}
                  <text
                    x={x}
                    y="200"
                    textAnchor="middle"
                    className="fill-gray-600 font-semibold text-sm"
                  >
                    {item.month}
                  </text>
                </g>
              );
            })}
            
            {/* Curved trend line */}
            <path
              d={generateCurvePath()}
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            />
            
            {/* Rounded arrow at the end */}
            <g transform={`translate(${40 + (data.length - 1) * 60 + 20}, ${180 - (data[data.length - 1].value / maxValue) * 120 - 10})`}>
              {/* Arrow body */}
              <path
                d="M 0 0 L 25 -5 L 20 0 L 25 5 Z"
                fill="#10b981"
                strokeWidth="2"
                stroke="#059669"
                strokeLinejoin="round"
                className="drop-shadow-md"
              />
              {/* Arrow head circle */}
              <circle cx="25" cy="0" r="4" fill="#059669" />
            </g>
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating value indicators */}
          {data.map((item, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full px-3 py-1 text-xs font-bold text-gray-700 shadow-lg border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                left: `${40 + (index * 60) - 20}px`,
                top: `${180 - (item.value / maxValue) * 120 - 40}px`
              }}
            >
              ${item.value}k
            </div>
          ))}
        </div>
        
        {/* Illustrative summary cards */}
        <div className="grid grid-cols-3 gap-4">

        </div>
      </div>
    </div>
  );
}