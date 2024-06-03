import React, { useEffect, useRef } from 'react';

const Resume = () => {
    const linkRef = useRef(null);

    useEffect(() => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    }, []);

    return (
        <div>
            <a href="https://careers.dasa.ncsu.edu/wp-content/uploads/sites/37/2023/07/Communications-major-resume-example.jpg" target="_blank" rel="noopener noreferrer" ref={linkRef} style={{display: 'none'}}>Open Resume</a>
        </div>
    )
}

export default Resume;