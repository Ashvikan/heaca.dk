import { useEffect } from 'react';

const useScrollBackground = (sectionsConfig) => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isInViewport = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                if (isInViewport) {
                    const sectionConfig = sectionsConfig.find((config) => config.id === section.id);
                    if (sectionConfig) {
                        document.body.style.backgroundColor = sectionConfig.color;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to set the background based on the current scroll position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionsConfig]);
};

export default useScrollBackground;
