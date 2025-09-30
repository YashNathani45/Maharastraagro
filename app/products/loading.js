import Skeleton from '@/components/Skeleton';

export default function ProductsLoading() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <Skeleton className="h-10 w-72 mx-auto" />
                <Skeleton className="h-6 w-40 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="aspect-[4/3] w-full rounded-xl" />
                    ))}
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {[...Array(4)].map((_, i) => (
                            <Skeleton key={i} className="h-12 w-full rounded-lg" />
                        ))}
                    </div>
                    <div className="flex gap-3 mt-6">
                        <Skeleton className="h-10 w-48" />
                        <Skeleton className="h-10 w-36" />
                    </div>
                </div>
            </div>
        </div>
    );
}



