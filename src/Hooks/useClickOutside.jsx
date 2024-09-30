import React, { useEffect } from 'react'

const useClickOutside = (handler, ...refs) => {
    useEffect(() => {
        const theHandler = (event) => {
            const clickedOutside = refs.every(ref => 
                !ref.current.contains(event.target)
            );
            if (clickedOutside) {
                handler();
            }
        };
        document.addEventListener('mousedown', theHandler);
        return () => {
            document.removeEventListener('mousedown', theHandler);
        };
    }, 
    [handler, ...refs]
    );
};

export default useClickOutside