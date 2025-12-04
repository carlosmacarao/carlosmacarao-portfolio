import { GoogleGenAI } from "@google/genai";

// Initialize the client
// API Key is injected via process.env.API_KEY as per requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "PortfolioBot", a friendly AI assistant for a Software Engineer and Data Scientist's portfolio website.
Your goal is to answer questions about the portfolio owner's skills, experience, and projects based on the context below.
Be professional, concise, and enthusiastic.

CONTEXT:
Name: Carlos Macarão
Role: Senior Software Engineer & Data Scientist
Summary: Passionate about building scalable web applications and deriving insights from complex datasets. 
Skills: React, TypeScript, Python, PyTorch, SQL, AWS, Tailwind CSS, Machine Learning, NLP.
Experience:
- Senior Developer at TechCorp (2021-Present): Led frontend migration to React, improved performance by 40%.
- Data Scientist at DataFlow (2018-2021): Built predictive models for customer churn, reducing churn by 15%.
Education:
- MS Computer Science, Stanford University (2018)
- BS Mathematics, MIT (2016)
Projects:
- "Sales Forecaster": Python/Pandas based tool using ARIMA models.
- "E-commerce Platform": Full-stack MERN application.
- "Portfolio AI": This very chat bot!

If asked about contact info, suggest using the contact form on the site or emailing hello@carlosmacarao.com.
If asked about something not in the context, politely say you don't have that specific information but can discuss their general engineering skills.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat with system instruction
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history, 
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("I'm having a little trouble connecting to the server right now. Please try again later.");
  }
};