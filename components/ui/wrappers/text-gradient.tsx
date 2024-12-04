import { cn } from "@/lib/utils";

interface TextGradientProps {
  text: string;
  className?: string;
}

const TextGradient = ({ text, className }: TextGradientProps) => {
  return (
    <span
      className={cn(
        "text-transparent bg-gradient-to-r from-jade to-teal-600 bg-clip-text inline-block",
        className
      )}
    >
      {text}
    </span>
  );
};
export default TextGradient;
