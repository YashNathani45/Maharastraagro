import Skeleton from '@/components/Skeleton';

export default function AboutLoading() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto px-6">
            <Skeleton className="h-56 w-full rounded-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Skeleton className="h-8 w-40" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
            <Skeleton className="h-56 w-full rounded-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-40 w-full rounded-2xl" />
                ))}
            </div>
        </div>
    );
}





