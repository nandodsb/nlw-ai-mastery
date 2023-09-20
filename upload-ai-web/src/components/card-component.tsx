import { Card } from '@/components/ui/card';

export function CardComponent() {
	return (
		<Card className="w-[350px] p-2 flex justify-center items-center">
			<a href="https://github.com/nandodsb/nlw-ai-mastery">
				<img
					src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/nandodsb/nlw-ai-mastery.png"
					width="460px"
				/>
			</a>
		</Card>
	);
}
