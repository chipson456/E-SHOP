import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const RevealContainer = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ScrollReveal = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <RevealContainer ref={ref}>{children}</RevealContainer>;
};
