import { Skeleton } from '../ui/skeleton';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';

export function SkeletonMain() {
	return (
		<main className="flex flex-1 p-6 gap-6">
			<aside className="w-80 space-y-6">
				<form className="space-y-6">
					<label
						htmlFor="video"
						className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col items-center justify-center text-muted-foreground hover:bg-primary/5"
					>
						<Skeleton className="w-4 h-4" />
						<Skeleton className="h-4 w-48" />
					</label>
					<input className="sr-only" />
					<Separator />
					<div className="space-y-2">
						<Label htmlFor="transcription_prompt">
							<Skeleton className="h-4 w-40" />
						</Label>

						<div className="h-20 p-1 border rounded-md ">
							<Skeleton className="h-4 w-50 mt-2" />
							<Skeleton className="h-4 w-44 mt-2" />
						</div>
					</div>
					<Skeleton className="h-[2.5rem] w-full rotate-0 scale-100 aspect-square" />
				</form>

				<Separator />

				<form className="space-y-6">
					<div className="space-y-2">
						<Label>
							<Skeleton className="h-4 w-14" />
						</Label>

						<Skeleton className="h-[2rem] w-full rotate-0 scale-100 aspect-square" />
					</div>

					<Separator />

					<div className="space-y-2">
						<Label>
							<Skeleton className="h-4 w-14" />
						</Label>

						<Skeleton className="h-[2rem] w-full rotate-0 scale-100 aspect-square" />

						<span className="block text-xs ">
							<Skeleton className="h-4 w-[14rem]" />
						</span>
					</div>

					<Separator />

					<div className="space-y-2">
						<Label>
							<Skeleton className="h-4 w-18" />
						</Label>
						<Skeleton className="h-2 w-full" />
						<span className="p-1 block text-xs text-muted-foreground italic">
							<Skeleton className="h-4 w-full mt-2" />
							<Skeleton
								className="h-4 w-40"
								mt-2
							/>
						</span>
					</div>

					<Separator />

					<Skeleton className="h-[2rem] w-full rotate-0 scale-100 aspect-square" />
				</form>
			</aside>

			<section className="flex flex-col flex-1 gap-4">
				<div className="grid grid-rows-2 items-stretch gap-2 flex-1">
					<Skeleton className="h-[25rem] w-full rotate-0 scale-100 aspect-square p-4">
						<Skeleton className="h-4 w-28" />
					</Skeleton>
					<Skeleton className="h-[25rem] w-full rotate-0 scale-100 aspect-square p-4">
						<Skeleton className="h-4 w-28" />
					</Skeleton>
				</div>

				<p className="text-sm text-muted-foreground">
					<Skeleton className="h-4 w-18" />
				</p>
			</section>
		</main>
	);
}
