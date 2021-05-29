import React from 'react';
import { useSelector } from 'react-redux';
import Result from './Result';

const Results = () => {
    const results = useSelector(state => state.textAnalysis.result);
    const thoughtText = useSelector(state => state.textAnalysis.thoughtText);

    return (
        <div className="">
            { 
                // Display thought text once submitted
                (thoughtText.length > 0) ? 
                    <div className ="mb3"><span className="b">Results for: </span>"{ thoughtText }"</div> : ''
            }
            
            { 
                // Display results
                results.map(
                    result => <Result title={result.title} description={result.description} example={result.example} actions={result.actions} />
                )
            }

            { 
                // Display message if thought submitted, but no results
                (thoughtText.length > 0 && results.length < 1) ? 
                    <p className="black-60">No matches for submitted text</p> : ''
            }
        </div>
    )
}

export default Results;
