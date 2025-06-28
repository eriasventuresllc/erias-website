
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

    // Wave parameters - sharper and more bold
    let time = 0;
    const waves = [
      { amplitude: 80, frequency: 0.012, speed: 0.05, offset: 0, color: '#ff0000' },
      { amplitude: 60, frequency: 0.018, speed: 0.04, offset: Math.PI / 3, color: '#ff2222' },
      { amplitude: 70, frequency: 0.015, speed: 0.06, offset: Math.PI / 2, color: '#ff4444' },
      { amplitude: 50, frequency: 0.022, speed: 0.045, offset: Math.PI, color: '#ff6666' },
    ];

    const createFadeGradient = (width: number) => {
      const fadeDistance = width * 0.15; // Reduced fade for sharper edges
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(fadeDistance / width, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1 - fadeDistance / width, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      return gradient;
    };

    const drawWave = (wave: any, mouseInfluence: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerY = height / 2;

      ctx.save();
      
      // Create path for the wave
      ctx.beginPath();
      for (let x = 0; x <= width; x += 0.5) { // Smaller step for sharper curves
        const baseY = centerY + 
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
        
        // Mouse influence - more dramatic effect
        const mouseDistance = Math.abs(x - mouseRef.current.x);
        const mouseEffect = isMouseOver ? 
          Math.exp(-mouseDistance / 80) * mouseInfluence * 50 : 0;
        
        const y = baseY + mouseEffect * Math.sin(time * 0.1 + x * 0.03);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Draw multiple glow layers for enhanced boldness
      const glowLayers = [
        { blur: 30, alpha: 0.15, width: 8 },
        { blur: 20, alpha: 0.25, width: 6 },
        { blur: 15, alpha: 0.35, width: 4 },
        { blur: 8, alpha: 0.5, width: 3 }
      ];

      // Draw glow layers
      glowLayers.forEach(layer => {
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = layer.width;
        ctx.globalAlpha = layer.alpha * (isMouseOver ? 1.8 : 1.2);
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = layer.blur * (isMouseOver ? 1.8 : 1.2);
        ctx.stroke();
      });

      // Draw main wave line - bolder
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 3;
      ctx.globalAlpha = 1;
      ctx.shadowColor = wave.color;
      ctx.shadowBlur = isMouseOver ? 35 : 20;
      ctx.stroke();

      // Apply fade effect
      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = createFadeGradient(width);
      ctx.fillRect(0, 0, width, height);
      
      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      
      // Increment time for animation - increased for more visible movement
      time += 0.04;
      const mouseInfluence = isMouseOver ? 4 : 1.5;
      
      // Draw all waves
      waves.forEach(wave => {
        drawWave(wave, mouseInfluence);
      });
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
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
