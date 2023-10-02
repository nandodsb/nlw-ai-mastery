import { fastify } from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

app.register(fastifyCors, {
    origin: '*' ?? process.env.ORIGIN_URL,
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

const host = '0.0.0.0'
const port = process.env.PORT ? Number(process.env.port) : 3344

app.listen({
    host: host,
    port: 3344
}).then(() => {
    console.log(`⚡ Server is running on ${port}!`)
})