import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
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

export function App() {
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
					<span className="text-sm text-muted-foreground">
						Desenvolvido com 💙 na NLW da Rocketseat
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
					<form className="space-y-6">
						<label
							htmlFor="video"
							className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col items-center justify-center text-muted-foreground hover:bg-primary/5"
						>
							<FileVideo className="w-4 h-4" />
							Selecione um vídeo
						</label>

						<input
							type="file"
							accept="video/mp4"
							id="video"
							className="sr-only"
						/>

						<Separator />

						<div className="space-y-2">
							<Label htmlFor="transcription_prompt">
								Prompt de transcrição
							</Label>

							<Textarea
								id="transcription_prompt"
								className="h-20 leading-relaxed resize-none"
								placeholder="Inclua palavras-chave mencionadas no vídeo separadars por vírgula (,)"
							/>
						</div>

						<Button
							type="submit"
							className="w-full"
						>
							Carregar vídeo
							<Upload className="w-4 h-4 ml-2"></Upload>
						</Button>
					</form>

					<Separator />

					<form className="space-y-6">
						<div className="space-y-2">
							<Label>Prompt</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Selecione um prompt..." />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="title">Título do Youtube</SelectItem>
									<SelectItem value="description">
										Descrição do Youtube
									</SelectItem>
								</SelectContent>
							</Select>
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
							/>
							<span className="block text-xs text-muted-foreground italic">
								Valores mais altos tendem a deixar o resultado mais criativo e
								com possíveis erros.
							</span>
						</div>

						<Separator />

						<Button
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
						/>
						<Textarea
							className="resize-none p-4 leading-relaxed"
							placeholder="Resultado gerado pela IA"
							readOnly
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
