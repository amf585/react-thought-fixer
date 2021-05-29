import { React, useState } from 'react';

const Result = ({ title, description, example, actions }) => {
    const [showContent, setshowContent] = useState(false);

    return (
        <div className="mb3">
            <button class="bg-light-blue b--none br2 outline-0 pa3 tl shadow-hover w-100"
                    onClick={() => setshowContent(!showContent) }>
                { title }
            </button>
            <div className={showContent ? "db" : "dn" } >
                <p><span className="b">What it is:</span> { description }</p>
                <p><span className="b">Example:</span> { example }</p>
                <p className="b mb0">Tips:</p>
                <ul className="mt1">
                    { actions.map(action => <li>{ action }</li> ) }
                </ul>
            </div>
        </div> 
    )
}

export default Result;
