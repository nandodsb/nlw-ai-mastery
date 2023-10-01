import { Wand2 } from 'lucide-react';
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
import { PromptSelect } from './components/prompt-select';
import { useEffect, useState } from 'react';
import { useCompletion } from 'ai/react';
import { SkeletonApp } from './components/skeleton-app';
import { SheetComponent } from './components/sheet-component';
import { Intro } from './components/intro';
import { api } from './lib/axios';

export function App() {
	const [isPresenting, setIsPresenting] = useState(true);
	const [isRendering, setIsRendering] = useState(true);
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
		api: `${api}/ai/complete`,
		body: {
			videoId,
			temperature
		},
		headers: {
			'Content-Type': 'application/json'
		}
	});

	useEffect(() => {
		const delay = setTimeout(() => {
			setIsPresenting(false);
		}, 5000);

		return () => {
			clearTimeout(delay);
		};
	}, [isPresenting]);

	useEffect(() => {
		const delay = setTimeout(() => {
			setIsRendering(false);
		}, 10000);

		return () => {
			clearTimeout(delay);
		};
	}, [isRendering]);

	return (
		<>
			{isPresenting ? (
				<Intro />
			) : (
				<>
					{isRendering ? (
						<>
							<SkeletonApp />
						</>
					) : (
						<div className="desktop:min-h-screen flex flex-col mobile:justify-center">
							<header className="px-6 py-3 flex items-center justify-between border-b">
								<h1 className="text-xl font-bold flex flex-row gap-2 ">
									<span className=" flex items-center justify-center">🤖</span>
									<p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
										upload.ai
									</p>
								</h1>

								<div className="flex items-center gap-3">
									<span className="desktop:block text-sm text-muted-foreground mobile:hidden ">
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

									<SheetComponent />
								</div>
							</header>

							<main className="desktop:flex flex-1 p-6 gap-6 mobile:block items-center justify-center w-full ">
								<aside className="desktop:w-80 space-y-2 mobile:w-full my-1">
									<VideoInputForm onVideoUploaded={setVideoId} />

									<Separator />

									<form
										onSubmit={handleSubmit}
										className="space-y-6"
									>
										<div className="space-y-2 ">
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
													<SelectItem value="gpt3.5">
														GPT 3.5-turbo 16k
													</SelectItem>
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
												Valores mais altos tendem a deixar o resultado mais
												criativo e com possíveis erros.
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

								<section className="desktop: flex flex-col flex-1 gap-4  mobile:space-y-6">
									<div className="grid grid-rows-2 gap-4 flex-1 mobile: space-y-6">
										<Textarea
											className="desktop: resize-none p-4 leading-relaxed mobile:h-96"
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

									<p className="text-sm text-justify justify-center text-muted-foreground mobile:text-justify">
										Lembre-se: você pode utilizar a variável &nbsp;
										<code className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
											&#10100;transcription&#10101;&nbsp;
										</code>
										no seu prompt para adicionar o conteúdo da transcição do
										vídeo selecionado.
									</p>
								</section>
							</main>
						</div>
					)}
				</>
			)}
		</>
	);
}
