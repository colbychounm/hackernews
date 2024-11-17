import {
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface ListItemProps<T> {
  item: T;
}

export default function ListItem<T>({ item }: ListItemProps<T>) {
  return (
    <div className="flex items-center py-4 border-b border-gray-500 border-opacity-65 last:border-0">
      <div className="flex-1">
        <h2 className="text-lg font-bold">Title</h2>
        <div className="flex text-gray-500">
          <span className="w-40 flex items-center gap-2">
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            100 comments
          </span>
          <span className="w-40 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            6h ago
          </span>
        </div>
      </div>

      <button className="w-10 h-10 flex flex-col items-center p-1 rounded-md bg-gray-600 bg-opacity-25 text-sm font-bold">
        <ChevronUpIcon />
        999
      </button>
    </div>
  );
}
