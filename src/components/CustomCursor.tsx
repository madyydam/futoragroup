import { useEffect, useRef, memo } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const textureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const texture = textureRef.current;
        if (!cursor || !texture) return;

        const updateMousePosition = (e: MouseEvent) => {
            // Move the parent container only
            cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                // Apply 'hovering' class to the parent, but purely for child selection state
                cursor.classList.add('hovering');
            } else {
                cursor.classList.remove('hovering');
            }
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div ref={cursorRef} className="cursor-earth">
            {/* Inner element handles the scaling and texture */}
            <div ref={textureRef} className="earth-texture"></div>
        </div>
    );
};

export default memo(CustomCursor);
