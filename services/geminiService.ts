
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI assistant of Naseef P., a professional Flutter Developer.
Your goal is to answer questions about Naseef based on his background:
- 2+ years of experience in Flutter/Dart.
- Currently working at Polosys Technologies LLP.
- Expert in Clean Architecture, DDD, MVVM, and state management (Riverpod/Provider).
- Built apps like Polosys Care, Polosys Books, Mazra Fresh, and BonPlat.
- Passionate about iOS-inspired UI and high-performance apps.
- Located in Malappuram, Kerala.

Be professional, concise, and helpful. If you don't know an answer, suggest the user contact Naseef at naseefpnp098@gmail.com.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now! Please try again or reach out to Naseef directly.";
  }
};
