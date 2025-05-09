import { GoogleGenerativeAI } from "@google/generative-ai";

// Your API key
const API_KEY = 'AIzaSyDcfciGuZCzWdLcgCmq-t2hJy2pLXgeqtw'; // Replace with your actual API key

// Initialize the Generative AI API
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" });

/**
 * Function to run the chat with Gemini model
 * @param {string} prompt - User prompt text
 * @returns {Promise<string>} - Response from the model
 */
const runChat = async (prompt) => {
  try {
    // Configure generation parameters
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 65536,
    };

    // Generate content based on the user prompt
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    // Return the response text
    return result.response.text();
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};

export default runChat;
  