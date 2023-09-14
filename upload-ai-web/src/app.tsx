import { Github, Wand2 } from 'lucide-react';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from './components/ui/select';
import { Slider } from './components/ui/slider';
import { ModeToggle } from './components/mode-toggle';
import { VideoInputForm } from './components/video-input-form';
import { Skeleton } from './components/ui/skeleton';
import { PromptSelect } from './components/prompt-select';
import { useState } from 'react';
import { useCompletion } from 'ai/react';

export function App() {
	const [temperature, setTemperature] = useState(0.5);
	const [videoId, setVideoId] = useState<String | null>(null);

	const {
		input,
		setInput,
		handleInputChange,
		handleSubmit,
		completion,
		isLoading
	} = useCompletion({
		api: 'http://localhost:3344/ai/complete',
		body: {
			videoId,
			temperature
		},
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return (
		<div className="min-h-screen flex flex-col">
			<header className="px-6 py-3 flex items-center justify-between border-b">
				<h1 className="text-xl font-bold flex flex-row gap-2">
					<span className=" flex items-center justify-center">🤖</span>
					<p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
						upload.ai
					</p>
				</h1>

				<div className="flex items-center gap-3">
					<span className="text-sm text-muted-foreground ">
						Desenvolvido com 💜 na NLW da Rocketseat
					</span>

					<Separator
						orientation="vertical"
						className="h-6"
					/>

					<ModeToggle />

					<Separator
						orientation="vertical"
						className="h-6"
					/>

					<Button variant="outline">
						<Github className="w-4 h-4 mr-2" />
						Github
					</Button>
				</div>
			</header>

			<main className="flex flex-1 p-6 gap-6">
				<aside className="w-80 space-y-6">
					<VideoInputForm onVideoUploaded={setVideoId} />

					<Separator />

					<form
						onSubmit={handleSubmit}
						className="space-y-6"
					>
						<div className="space-y-2">
							<Label>Prompt</Label>
							<PromptSelect onPromptSelected={setInput} />
						</div>

						<Separator />

						<div className="space-y-2">
							<Label>Modelo</Label>
							<Select
								defaultValue="gpt3.5"
								disabled
							>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
								</SelectContent>
							</Select>

							<span className="block text-xs text-muted-foreground italic">
								Você poderá customizar esta opção em breve
							</span>
						</div>

						<Separator />

						<div className="space-y-2">
							<Label>Temperatura</Label>
							<Slider
								min={0}
								max={1}
								step={0.1}
								value={[temperature]}
								onValueChange={(value) => setTemperature(value[0])}
							/>
							<span className="block text-xs text-muted-foreground italic">
								Valores mais altos tendem a deixar o resultado mais criativo e
								com possíveis erros.
							</span>
						</div>

						<Separator />

						<Button
							disabled={isLoading}
							type="submit"
							className="w-full"
						>
							Executar
							<Wand2
								className="w-4
								h-4
								ml-2"
							/>
						</Button>
					</form>
				</aside>

				<section className="flex flex-col flex-1 gap-4">
					<div className="grid grid-rows-2 gap-4 flex-1">
						<Textarea
							className="resize-none p-4 leading-relaxed"
							placeholder="Inclua o prompt para a IA..."
							value={input}
							onChange={handleInputChange}
						/>
						<Textarea
							className="resize-none p-4 leading-relaxed"
							placeholder="Resultado gerado pela IA"
							readOnly
							value={completion}
						/>
					</div>

					<p className="text-sm text-muted-foreground">
						Lembre-se: você pode utilizar a variável &nbsp;
						<code className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
							&#10100;transcription&#10101;&nbsp;
						</code>
						no seu prompt para adicionar o conteúdo da transcição do vídeo
						selecionado.
					</p>
				</section>
			</main>
		</div>
	);
}
