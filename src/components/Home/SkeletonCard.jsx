import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <div className=" p-2">
      <Skeleton
        className=""
        height={100}
        baseColor="#2a2a2a"
        highlightColor="#3a3a3a"
      />
      <Skeleton className="" baseColor="#2a2a2a" highlightColor="#3a3a3a" />
      <Skeleton
        className=""
        count={2}
        height={6}
        baseColor="#2a2a2a"
        highlightColor="#3a3a3a"
      />
    </div>
  );
}
