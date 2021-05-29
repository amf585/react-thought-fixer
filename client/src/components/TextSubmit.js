import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateResult } from '../redux/actions';
import { TextSubmitService } from '../services/TextSubmitService';

const TextSubmit = () => {
    const [thoughtText, setThoughtText] = useState('');
    const dispatch = useDispatch();

    /**
     * Send user text to endpoint for analysis and update store with result
     */
    const analyzeText = async ($event) => {
        $event.preventDefault(); 
        const response = await TextSubmitService.analyzeText(thoughtText); 
        dispatch(updateResult(response, thoughtText)); 
    }

    return (
        <form onSubmit={ $event => analyzeText($event) }>
            <div className="flex flex-column items-center">
                <label htmlFor="thought-input" className="b f6 db mb2 self-start">Enter a Negative Thought</label>
                <input id="thought-input" name="thought-input" 
                    type="text"
                    className="ba bg-near-white border-box br2 mb1 pa2 w-100"
                    onChange={ $event => setThoughtText($event.target.value) } 
                    placeholder="Ex. I am terrible at everything"
                    minLength="1"
                    value={ thoughtText } 
                    required />

                <button
                    className="bg-blue br3 db f4 link mb5 mt3 ph3 pv2 shadow-hover white"
                    type="submit"
                    disabled={ thoughtText.trim().length < 1 } >   
                    Analyze Thought
                </button>
            </div>
        </form>
    )
}

export default TextSubmit;
