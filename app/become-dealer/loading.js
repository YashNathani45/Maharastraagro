import Skeleton from '@/components/Skeleton';

export default function BecomeDealerLoading() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-8">
            <div className="text-center">
                <Skeleton className="h-10 w-64 mx-auto" />
                <Skeleton className="h-5 w-96 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full rounded-lg" />
                    ))}
                    <Skeleton className="h-12 w-full rounded-lg" />
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-40 w-full rounded-2xl" />
                    <Skeleton className="h-40 w-full rounded-2xl" />
                    <Skeleton className="h-40 w-full rounded-2xl" />
                </div>
            </div>
        </div>
    );
}





