"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 鼠标移动跟踪
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  // 计算人物转身方向
  const getCharacterRotation = () => {
    const rotationIntensity = mousePosition.x * 0.3; // 增加转身幅度
    return {
      // 左右转身 - 鼠标向左时人物向左转身
      rotateY: rotationIntensity,
      // 上下点头
      rotateX: -mousePosition.y * 0.1,
      // 身体倾斜
      rotateZ: mousePosition.x * 0.05,
      // 移动位置
      translateX: mousePosition.x * 0.5,
      translateY: mousePosition.y * 0.3
    };
  };

  const rotation = getCharacterRotation();

  return (
    <div className="w-full h-[960px] pt-105">
      {/* Header - 集成到Hero中 */}
      <header 
        className="w-full top-0 left-0 bg-[#F5F5F5] z-10"
      >
        <nav className="flex items-center justify-between">
             <div className="w-full flex items-center justify-between">
            <a 
              href="#works" 
              className="text-primary-orange text-6xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              WORKS
            </a>
            
            <a 
              href="#about" 
              className="text-primary-orange text-4xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              ABOUT
            </a>

            {/* Logo 元素 */}
            <a 
              href="#home" 
              className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              <div className="w-32 h-32 bg-primary-orange rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">LOGO</span>
              </div>
            </a>

            <a 
              href="#services" 
              className="text-primary-orange text-4xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              SERVICES
            </a>
            
            <a 
              href="#contact" 
              className="text-primary-orange text-4xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              CONTACT
            </a>
          </div>
        </nav>
      </header>

      {/* Background */}
      <div className="w-full left-0 top-0 absolute bg-primary-gray" />
      
      {/* WEB - 在人物后面 (z-index 更低) */}
      <div className="left-[170px] top-[255px] absolute text-primary-orange font-bold font-mango z-10 text-[335px] ">
        WEB
      </div>
      
      {/* 3D 人物图像 - 在WEB前面 */}
      <div className="absolute left-[400px] top-[150px] 3xl:left-[320px] 3xl:top-[120px] z-20">
        <div 
          className="relative transition-transform duration-700 ease-out character-3d floating"
          style={{
            transform: `
              perspective(1200px) 
              rotateY(${rotation.rotateY}deg) 
              rotateX(${rotation.rotateX}deg)
              rotateZ(${rotation.rotateZ}deg)
              translateX(${rotation.translateX}px)
              translateY(${rotation.translateY}px)
              translateZ(30px)
            `,
            transformOrigin: 'center bottom', // 以脚部为旋转中心
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 人物主体 */}
          <div 
            className="relative"
            
          >
            <img 
              className="w-[700px] h-[940px] 3xl:w-[500px] 3xl:h-[675px] object-cover filter drop-shadow-2xl"
              src="/chloechu.png" 
              alt="Portfolio Character" 
              style={{
                objectPosition: 'center top',
                transform: `
                  translateX(${mousePosition.x * 0.2}px) 
                  translateY(${mousePosition.y * 0.1}px)
                `,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
          </div>
          
      
        </div>
      </div>
      
      {/* UI/UX - 左侧 */}
      <div className="left-[10px] top-[520px] absolute text-primary-orange font-bold font-mango z-30 text-[335px] ">
        UI/UX
      </div>
      
    
      {/* DESIGNER - 右下 */}
      <div className="right-[10px] top-[700px] absolute text-primary-orange font-bold font-mango z-30 text-[335px] ">
        DESIGNER
      </div>
      
      {/* Side Content */}
      <p className="w-[400px] top-[400px] right-[10px] absolute text-right text-primary-orange text-2xl font-extrabold font-neue z-30 uppercase">
   I transform ideas and design to stand out, sell smart, and scale beautifully.
</p>
      
      <div className="right-[10px] top-[600px] absolute z-30">
        <div className="justify-start text-amber-600 text-7xl font-bold font-mango">
          START A PROJECT
        </div>
        <div className="w-80 h-4 bg-amber-600 mt-2" />
      </div>
    
    </div>
  );
}
