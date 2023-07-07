import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: "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"
})

const openai = new OpenAIApi(configuration)
export const generateReport = async (req, res) => {
    const { firstName, yearGroup, gender } = req.body
    console.log(req.body)
    const prompt = `Write an end of year report for a uk student approximately 100 words long. 
                    The student is ${gender}, is called ${firstName} and is in year ${yearGroup}`
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
        console.log(error.message)
    }
}