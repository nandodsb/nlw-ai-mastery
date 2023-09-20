import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export function AvatarComponent() {
	return (
		<Avatar className="h-32 w-32">
			<AvatarImage
				src="https://avatars.githubusercontent.com/u/42349534?v=4"
				alt=""
			/>

			<AvatarFallback>Fernando Batista</AvatarFallback>
		</Avatar>
	);
}
