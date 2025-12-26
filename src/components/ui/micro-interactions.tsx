import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
  strength?: number;
}

export const MagneticButton = ({ children, className = '', onClick, strength = 0.3 }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}

export const TiltCard = ({ children, className = '', glare = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    setRotateX((y - 0.5) * -10);
    setRotateY((x - 0.5) * 10);
    setGlarePosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
};

interface HoverGlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export const HoverGlow = ({ children, className = '', color = 'rgba(255,255,255,0.1)' }: HoverGlowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered ? `0 0 40px 0 ${color}` : '0 0 0px 0 transparent',
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Ripple effect for buttons
interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const RippleButton = ({ children, className = '', onClick }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.(e);
  };

  return (
    <button className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
          }}
        />
      ))}
    </button>
  );
};

// Animated underline link
interface AnimatedLinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const AnimatedLink = ({ children, className = '', href, onClick }: AnimatedLinkProps) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative inline-block cursor-pointer ${className}`}
      whileHover="hover"
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 h-0.5 bg-current"
        initial={{ width: '0%' }}
        variants={{
          hover: { width: '100%' }
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.a>
  );
};

// Stagger container for children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer = ({ children, className = '', delay = 0.1 }: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' }
        },
      }}
    >
      {children}
    </motion.div>
  );
};
