import { useEffect, useRef, memo } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const textureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip custom cursor processing on touch devices to conserve battery and CPU
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const cursor = cursorRef.current;
        const texture = textureRef.current;
        if (!cursor || !texture) return;

        let rafId: number | null = null;
        let mouseX = -100;
        let mouseY = -100;

        const render = () => {
            cursor.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
            rafId = null;
        };

        const updateMousePosition = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!rafId) {
                rafId = requestAnimationFrame(render);
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'))) {
                cursor.classList.add('hovering');
            } else {
                cursor.classList.remove('hovering');
            }
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div ref={cursorRef} className="cursor-earth">
            <div ref={textureRef} className="earth-texture"></div>
        </div>
    );
};

export default memo(CustomCursor);
