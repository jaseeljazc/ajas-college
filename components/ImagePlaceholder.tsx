import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  size?: string;
  aspect?: string; // e.g., "aspect-video", "aspect-square"
  shape?: "rectangle" | "square" | "circle";
  className?: string;
}

export default function ImagePlaceholder({
  label,
  size,
  aspect = "aspect-video",
  shape = "rectangle",
  className = ""
}: ImagePlaceholderProps) {
  const shapeClass = shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-xl aspect-square" : `rounded-2xl ${aspect}`;
  
  return (
    <div className={`w-full flex flex-col items-center justify-center bg-[#f3f4f6] border border-dashed border-[#d1d5db] ${shapeClass} ${className} transition-colors hover:bg-[#ebedf0]`}>
      <ImageIcon size={36} className="text-[#9ca3af] mb-3" />
      <p className="text-sm text-[#9ca3af] font-medium px-4 text-center">{label}</p>
      {size && <p className="text-xs text-[#d1d5db] mt-1">{size}</p>}
      <p className="text-[10px] text-[#9ca3af] mt-3 uppercase tracking-wider">[Replace with actual photo]</p>
    </div>
  );
}
