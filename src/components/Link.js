import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        if(event.metaKey || event.crtlKey){ // lets you open in new tab if true stops everything after
            return;
        }
        
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a 
            onClick={onClick}
            className={className}
            href={href}
        >
        {children}
        </a>
    )
}

export default Link;