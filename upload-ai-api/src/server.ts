import { fastify } from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';


const app = fastify();

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)


const port = process.env.PORT || 3344

app.listen({
    port: 3344
}).then(() => {
    console.log(`⚡Server is running on ${port}`)
})