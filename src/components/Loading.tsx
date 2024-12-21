import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";

export default function Loading() {
  return (
    <div className="flex gap-4 items-center">
      <ArrowPathIcon className="icon-sm animate-spin" />
      <p className="font-extrabold">Loading...</p>
    </div>
  );
}
