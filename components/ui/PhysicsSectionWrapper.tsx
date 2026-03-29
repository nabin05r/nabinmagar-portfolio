'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const PhysicsSection = dynamic(
  () => import('@/components/sections/PhysicsSection'),
  { ssr: false }
);

export const PhysicsSectionWrapper = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  if (!isDesktop) return null;

  return <PhysicsSection />;
};