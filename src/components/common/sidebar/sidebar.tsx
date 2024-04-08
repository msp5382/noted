import { ChevronDown, ChevronLeft } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="border-border w-full max-w-[300px] border-r p-4 font-mono">
      <p className="text-lg font-bold">Note</p>
      <div className="py-4">
        <div className="flex items-center">
          <ChevronLeft
            width={20}
            height={20}
            className="text-text mr-2 aspect-square "
          />
          <div className="border-border w-full rounded-lg border bg-white/5 px-2 py-1">
            <p className="text-sm">current menu</p>
          </div>
        </div>
        <hr className="border-border border-0.5 my-4" />
        <div className="text-sm">
          <div className="flex items-center rounded-lg p-2 hover:bg-white/5">
            <ChevronDown
              width={16}
              height={16}
              className="text-text mr-2 aspect-square "
            />
            <p>Test Note</p>
          </div>
          <div className="rounded-lg p-2 hover:bg-white/5">
            <p>Test Note</p>
          </div>
        </div>
      </div>
    </div>
  );
};
