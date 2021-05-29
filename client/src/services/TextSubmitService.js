import axios from 'axios';

/**
 * Service to handle posting user input to analysis endpoint and returning result
 */
export class TextSubmitService {

    /**
     * Static function to analyze user text for negative thought patterns
     * @param {string} text - user text
     * @returns array of matched thought patterns
     */
    static analyzeText = async (text) => {
        const requestData = {
            text: text
        }
        const response = await axios
            .post(`/api/thoughtpatterns`, requestData)
            .then(res => { return res.data; })
            .catch(error => { return error; });
        return response;
    }
}