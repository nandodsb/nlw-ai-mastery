import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '../ui/separator';

export function SkeletonHeader() {
	return (
		<header className="px-6 py-3 flex items-center justify-between border-b">
			<h1 className="text-xl font-bold flex flex-row gap-2">
				<Skeleton className=" flex items-center">
					<Skeleton className="h-6 w-6 aspect-square" />
				</Skeleton>
				<Skeleton className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
					<Skeleton className="h-4 w-24" />
				</Skeleton>
			</h1>

			<div className="flex items-center gap-3">
				<Skeleton className="text-sm text-muted-foreground ">
					<Skeleton className="h-4 w-48" />
				</Skeleton>

				<Separator
					orientation="vertical"
					className="h-6"
				/>

				<Skeleton className="h-[2rem] w-[2rem] rotate-0 scale-100 aspect-square" />

				<Separator
					orientation="vertical"
					className="h-6"
				/>

				<Skeleton className="h-[2rem] w-[6.2rem] rotate-0 scale-100 aspect-square" />
			</div>
		</header>
	);
}
