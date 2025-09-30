import Skeleton from '@/components/Skeleton';

export default function RootLoading() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-6 w-80" />
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-36" />
                        <Skeleton className="h-10 w-36" />
                    </div>
                </div>
                <Skeleton className="h-[360px] w-full rounded-3xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-8 border border-gray-200 rounded-2xl bg-white">
                        <Skeleton className="h-10 w-10 rounded-full mb-4" />
                        <Skeleton className="h-5 w-40 mb-2" />
                        <Skeleton className="h-4 w-56" />
                    </div>
                ))}
            </div>
        </div>
    );
}





