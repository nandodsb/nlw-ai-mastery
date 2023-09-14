import { SkeletonHeader } from './skeletons/skeleton-header';
import { SkeletonLayout } from './skeletons/skeleton-layout';
import { SkeletonMain } from './skeletons/skeleton-main';

export function SkeletonApp() {
	return (
		<div className="min-h-screen flex flex-col">
			<SkeletonHeader />
			<SkeletonMain />
		</div>
	);
}
