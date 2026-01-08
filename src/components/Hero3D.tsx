import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const Stars = (props: React.ComponentProps<typeof Points>) => {
    const ref = useRef<THREE.Points>(null!);
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((_state, delta) => {
        if (ref.current) {
            // Basic rotation
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;

            // Scroll Reactivity - Warp Speed Effect
            const scrollY = window.scrollY;
            ref.current.rotation.z = scrollY * 0.0005;
            ref.current.position.z = Math.min(scrollY * 0.002, 5); // Move forward but cap it
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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.6 }}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default Hero3D;
