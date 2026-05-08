interface SkeletonProps {
  className?: string;
  count?: number;
}

export default function LoadingSkeleton({ className = "", count = 1 }: SkeletonProps) {
  return (
    <div className="space-y-3 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`bg-[#f3f4f6] animate-pulse rounded-lg w-full ${className}`}
        ></div>
      ))}
    </div>
  );
}
