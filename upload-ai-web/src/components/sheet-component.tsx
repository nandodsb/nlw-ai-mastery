import { Github } from 'lucide-react';
import { CardComponent } from './card-component';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTrigger
} from './ui/sheet';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
	SiAxios,
	SiFastify,
	SiLinkedin,
	SiNodedotjs,
	SiOpenai,
	SiPnpm,
	SiPostcss,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiZod
} from 'react-icons/si';
import { AvatarComponent } from './avatar-component';

export function SheetComponent() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<Github className="w-4 h-4 mr-2" />
					Github
				</Button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px]">
				<SheetHeader className="justify-center items-center">
					<Card className="w-full">
						<CardHeader className="w-96 items-center">
							<AvatarComponent />
							<CardTitle>Fernando Batista</CardTitle>
							<CardDescription>Fullstack Developer</CardDescription>
							<Button
								asChild
								className="h-10 w-30 text-white font-bold flex justify-center items-center"
							>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/nandoxsb"
								>
									<SiLinkedin />
									&nbsp;Linkedin
								</a>
							</Button>
						</CardHeader>
					</Card>

					<CardComponent />

					<SheetDescription>
						Next Level Week AI. <br></br>The project was developed with these
						technologies
						<span className="flex grid grid-cols-4 items-center gap-3 p-5">
							<SiNodedotjs size={30} />
							<SiFastify size={30} />
							<SiPrisma size={30} />
							<SiZod size={30} />
							<SiOpenai size={30} />
							<SiTypescript size={30} />
							<SiVite size={30} />
							<SiReact size={30} />
							<SiTailwindcss size={30} />
							<SiAxios size={30} />
							<SiPostcss size={30} />
							<SiPnpm
								size={30}
								alt="PNPM"
							/>
						</span>
					</SheetDescription>
				</SheetHeader>

				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
