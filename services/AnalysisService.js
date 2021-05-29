/**
 *  Service to analyze user text input based on thought patterns data
 */ 
class AnalysisService {

    /**
     * Analyze user text to detect negative thought pattern(s)
     * @param {Array} thoughtPatterns - array of thought pattern objects
     * @param {string} userInput - user input text
     */
    static analyzeStatement (thoughtPatterns, userInput) {
        
        // Convert user intput to lowercase
        const userText = userInput.toLocaleLowerCase();

        // Check for thought pattern keywords in user input text
        const matches = thoughtPatterns.filter((pattern) => {
            return pattern.keywords.some((keyword) => {
                return userText.includes(keyword);
            });
        });

        return matches;
    }

};

module.exports = AnalysisService;