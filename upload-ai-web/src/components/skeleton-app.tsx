import { SkeletonHeader } from './skeletons/skeleton-header';
import { SkeletonMain } from './skeletons/skeleton-main';

export function SkeletonApp() {
	return (
		<div className="min-h-screen flex flex-col">
			<SkeletonHeader />
			<SkeletonMain />
		</div>
	);
}
