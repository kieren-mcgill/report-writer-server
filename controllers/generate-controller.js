import {Configuration, OpenAIApi} from "openai"
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
export const generateReport = async (req, res) => {
    console.log(process.env.OPENAI_API_KEY)
    const {firstName, yearGroup, gender, generalNotes} = req.body
    const prompt = `Write a general statement for an end-of-year school report for a uk student,
                    approximately 100 words long.
                    Student information:
                    Name:  ${firstName};
                    Year group: ${yearGroup};
                    Gender: ${gender};
                    Base the content of the report on the following notes: ${generalNotes}.`
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        const completion = response.data.choices[0].text
        return res.status(200).json({
            success: true,
            message: completion,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Sorry, there was a problem generating this report",
        })
    }
}