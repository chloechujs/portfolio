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
    <div className="w-full h-[960px] pt-95">
      {/* Header - 集成到Hero中 */}
      <header 
        className="w-full top-0 left-0 bg-none z-10"
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
              className="text-primary-orange text-6xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
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
              className="text-primary-orange text-6xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              SERVICES
            </a>
            
            <a 
              href="#contact" 
              className="text-primary-orange text-6xl font-black font-mango cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              CONTACT
            </a>
          </div>
        </nav>
      </header>

      {/* Background */}
      <div className="w-full left-0 absolute bg-primary-gray" />

      {/* 主要内容区域 - 添加padding避免文字被裁剪 */}
      <div className="relative w-full h-full px-8 lg:px-16 xl:px-24">
        
        {/* WEB - 在人物后面 (z-index 更低) */}
        <div className="left-[120px] top-[150px] absolute text-primary-orange font-bold font-mango z-10 text-[280px] xl:text-[320px] 2xl:text-[360px] 3xl:text-[400px]">
          WEB
        </div>
      
      {/* 3D 人物图像 - 在WEB前面 */}
      <div className="absolute left-[400px] top-[100px] 3xl:left-[320px] 3xl:top-[80px] z-20">
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
              className="w-[700px] h-[940px] xl:w-[800px] xl:h-[1080px] 2xl:w-[900px] 2xl:h-[1200px] 3xl:w-[1000px] 3xl:h-[1350px] object-cover filter drop-shadow-2xl"
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
      <div className="left-[20px] top-[480px] absolute text-primary-orange font-bold font-mango z-30 text-[280px] xl:text-[320px] 2xl:text-[360px] 3xl:text-[400px]">
        UI/UX
      </div>
      
    
      {/* DESIGNER - 右下 */}
      <div className="right-[20px] top-[680px] absolute text-primary-orange font-bold font-mango z-30 text-[280px] xl:text-[320px] 2xl:text-[360px] 3xl:text-[400px]">
        DESIGNER
      </div>
      
      {/* Side Content */}
      <p className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] top-[400px] right-[10px] absolute text-right text-primary-orange text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-extrabold font-neue z-30 uppercase leading-tight">
   I transform ideas and design to stand out, sell smart, and scale beautifully.
</p>
      
      <div className="right-[10px] top-[600px] absolute z-30">
        <div className="justify-start text-amber-600 text-7xl font-bold font-mango">
          START A PROJECT
        </div>
        <div className="w-80 h-4 bg-amber-600 mt-2" />
      </div>
      
      </div> {/* 内容容器结束 */}
    
    </div>
  );
}
