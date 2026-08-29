import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const Stars = (props: React.ComponentProps<typeof Points>) => {
    const ref = useRef<THREE.Points>(null!);
    // 5004 is evenly divisible by 3 (stride 3) ensuring no buffer overrun
    const sphere = useMemo(() => random.inSphere(new Float32Array(5004), { radius: 1.5 }), []);
    const scrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.pageYOffset || document.documentElement.scrollTop;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            // Smooth rotation based on delta time
            ref.current.rotation.x -= delta * 0.06;
            ref.current.rotation.y -= delta * 0.05;

            // Scroll Reactivity - Warp Speed Effect using cached scroll ref
            const scrollY = scrollYRef.current;
            ref.current.rotation.z = scrollY * 0.0005;
            ref.current.position.z = Math.min(scrollY * 0.002, 5);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#0088ff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6, pointerEvents: 'none' }} aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ powerPreference: 'high-performance', antialias: false }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default React.memo(Hero3D);
