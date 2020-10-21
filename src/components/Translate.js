//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options =[
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [langauge, setLangauge] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            
            
            <Dropdown 
            label="Select a Langauge"
            selected={langauge}
            onSelectedChange={setLangauge}
            options={options}/>
            <hr />
            <h3 className="ui header">Output:</h3>
            <Convert text={text} language={langauge}/>
        </div>
    )
}

export default Translate;