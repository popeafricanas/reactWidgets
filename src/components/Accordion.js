import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null); //useState is a hook // array destructuring 


    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((items, index) => {

        const active = index === activeIndex ? 'active': '';

        return <React.Fragment key={items.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}> 
            
                <i className="dropdown icon"></i>
                {items.title}
            </div>
            <div className={`content ${active}`}>
                <p>{items.content}</p>
            </div>
        </React.Fragment>
    });

    return <div className="ui styled accordion">
        {renderedItems}
        </div>;
};

export default Accordion;