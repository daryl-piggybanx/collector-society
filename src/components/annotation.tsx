'use client'

import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Html } from '@react-three/drei'

// Define props interface
interface AnnotationProps {
  children: ReactNode;
  position?: [number, number, number];
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
}

export default function Annotation({ children, href, onClick, ...htmlProps }: AnnotationProps) {
  const isClickable = href ?? onClick
  
  const content = (
    <div 
      className={`
        annotation rounded p-2 bg-black/80 text-white text-xs whitespace-nowrap 
        transition-all duration-200 ease-in-out uppercase
        ${isClickable ? 'cursor-pointer hover:bg-black/90 hover:scale-105' : 'cursor-default'}
      `}
      onClick={onClick ?? (() => console.log('.'))}
    >
      {href ? (
        <a href={href} className="text-inherit no-underline">
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  )

  return (
    <Html
      {...htmlProps}
      transform
      occlude="blending"
      geometry={
        /** Use a standard plane geometry */
        <planeGeometry args={[1.66, 0.47]} />
      }>
      {content}
    </Html>
  )
}