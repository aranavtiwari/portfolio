import React, { useState, useEffect } from 'react';
import catSvg from '../img/cat.svg';

const CatChaser = () => {
    const [catPosition, setCatPosition] = useState({ x: 100, y: 100 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);
    const [legPhase, setLegPhase] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cat chases the mouse with a delay (smooth following)
    useEffect(() => {
        const interval = setInterval(() => {
            setCatPosition((prev) => {
                const dx = mousePosition.x - prev.x;
                const dy = mousePosition.y - prev.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Only move if cat is far enough from cursor
                if (distance > 80) {
                    setIsMoving(true);
                    const speed = 0.05; // Lower = slower chase

                    // Flip based on horizontal direction (left or right)
                    setIsFlipped(dx < 0);

                    return {
                        x: prev.x + dx * speed,
                        y: prev.y + dy * speed
                    };
                } else {
                    setIsMoving(false);
                }
                return prev;
            });
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, [mousePosition]);

    // Leg animation - zig zag walking effect
    useEffect(() => {
        if (!isMoving) return;

        const legInterval = setInterval(() => {
            setLegPhase((prev) => (prev + 1) % 4);
        }, 100); // Speed of leg movement

        return () => clearInterval(legInterval);
    }, [isMoving]);

    // Calculate distance to cursor
    const distanceToCursor = Math.sqrt(
        Math.pow(mousePosition.x - catPosition.x, 2) +
        Math.pow(mousePosition.y - catPosition.y, 2)
    );

    // Leg positions based on phase (zig-zag walking)
    const getLegTransform = () => {
        if (!isMoving) return {};

        const legOffsets = [
            { frontLeft: 5, frontRight: -5, backLeft: -5, backRight: 5 },
            { frontLeft: 0, frontRight: 0, backLeft: 0, backRight: 0 },
            { frontLeft: -5, frontRight: 5, backLeft: 5, backRight: -5 },
            { frontLeft: 0, frontRight: 0, backLeft: 0, backRight: 0 },
        ];
        return legOffsets[legPhase];
    };

    const legTransform = getLegTransform();

    return (
        <div
            className="cat-chaser"
            style={{
                position: 'fixed',
                left: catPosition.x - 22,
                top: catPosition.y - 22,
                width: '44px',
                height: '44px',
                pointerEvents: 'none',
                zIndex: 9999,
                transition: 'opacity 0.2s ease',
                transform: `scaleX(${isFlipped ? -1 : 1})`,
                opacity: distanceToCursor < 60 ? 0.5 : 1,
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64">
                {/* Cat body (side view) - Golden color */}
                <ellipse cx="32" cy="32" rx="18" ry="12" fill="#D4A547" />

                {/* Cat head */}
                <circle cx="50" cy="24" r="10" fill="#D4A547" />

                {/* Ears */}
                <path d="M44 16 L46 8 L50 14 Z" fill="#D4A547" />
                <path d="M45 15 L46 10 L49 14 Z" fill="#C4944A" />
                <path d="M52 14 L56 6 L58 14 Z" fill="#D4A547" />
                <path d="M53 13 L56 8 L57 13 Z" fill="#C4944A" />

                {/* Eye */}
                <ellipse cx="52" cy="22" rx="2.5" ry="3" fill="#0e111a" />
                <circle cx="53" cy="21" r="1" fill="white" />

                {/* Nose */}
                <ellipse cx="58" cy="26" rx="2" ry="1.5" fill="#E8B4A0" />

                {/* Whiskers */}
                <line x1="58" y1="24" x2="64" y2="22" stroke="#8B7355" strokeWidth="0.8" />
                <line x1="58" y1="26" x2="64" y2="26" stroke="#8B7355" strokeWidth="0.8" />
                <line x1="58" y1="28" x2="64" y2="30" stroke="#8B7355" strokeWidth="0.8" />

                {/* Tail */}
                <path d="M14 28 Q6 20 8 12" fill="none" stroke="#D4A547" strokeWidth="4" strokeLinecap="round" />

                {/* Front legs - animated */}
                <path
                    d={`M42 42 L${44 + (legTransform.frontLeft || 0)} 54`}
                    stroke="#D4A547"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d={`M36 42 L${32 + (legTransform.frontRight || 0)} 54`}
                    stroke="#D4A547"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                {/* Back legs - animated */}
                <path
                    d={`M26 42 L${28 + (legTransform.backLeft || 0)} 54`}
                    stroke="#D4A547"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d={`M20 42 L${16 + (legTransform.backRight || 0)} 54`}
                    stroke="#D4A547"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                {/* Paws - animated */}
                <ellipse cx={44 + (legTransform.frontLeft || 0)} cy="56" rx="3" ry="2" fill="#E8B4A0" />
                <ellipse cx={32 + (legTransform.frontRight || 0)} cy="56" rx="3" ry="2" fill="#E8B4A0" />
                <ellipse cx={28 + (legTransform.backLeft || 0)} cy="56" rx="3" ry="2" fill="#E8B4A0" />
                <ellipse cx={16 + (legTransform.backRight || 0)} cy="56" rx="3" ry="2" fill="#E8B4A0" />
            </svg>
        </div>
    );
};

export default CatChaser;
