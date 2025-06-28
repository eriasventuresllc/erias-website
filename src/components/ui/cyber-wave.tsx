
import React, { useEffect, useRef, useState } from 'react';

interface CyberWaveProps {
  className?: string;
}

export const CyberWave: React.FC<CyberWaveProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave parameters
    let time = 0;
    const waves = [
      { amplitude: 50, frequency: 0.005, speed: 0.02, offset: 0, color: '#ff0000' },
      { amplitude: 30, frequency: 0.008, speed: 0.015, offset: Math.PI / 3, color: '#ff4444' },
      { amplitude: 40, frequency: 0.006, speed: 0.025, offset: Math.PI / 2, color: '#ff6666' },
      { amplitude: 25, frequency: 0.01, speed: 0.018, offset: Math.PI, color: '#ff8888' },
    ];

    const drawWave = (wave: any, mouseInfluence: number) => {
      ctx.beginPath();
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.7;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerY = height / 2;

      for (let x = 0; x <= width; x += 2) {
        const baseY = centerY + 
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
        
        // Mouse influence
        const mouseDistance = Math.abs(x - mouseRef.current.x);
        const mouseEffect = isMouseOver ? 
          Math.exp(-mouseDistance / 100) * mouseInfluence * 50 : 0;
        
        const y = baseY + mouseEffect * Math.sin(time * 0.05 + x * 0.01);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      
      time += 0.016;
      const mouseInfluence = isMouseOver ? 2 : 1;
      
      waves.forEach(wave => {
        drawWave(wave, mouseInfluence);
      });
      
      // Add glow effect
      ctx.shadowColor = '#ff0000';
      ctx.shadowBlur = isMouseOver ? 20 : 10;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMouseOver]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
