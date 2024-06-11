import { useEffect } from 'react';

const useScrollBackground = (sectionsConfig) => {
    useEffect(() => {
        const sections = document.querySelectorAll(sectionsConfig.map(({ id }) => `#${id}`).join(', '));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.body.style.backgroundColor = entry.target.dataset.bgcolor;
                }
            });
        }, {
            threshold: 0.5 // Adjust based on when you want to trigger the change
        });

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, [sectionsConfig]);
};

export default useScrollBackground;
