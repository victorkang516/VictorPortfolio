import { cn } from "@/lib/utils";

const SectionHeader = ({ children, className }) => {
  return (
    <h1 className={cn("font-freeman font-bold text-4xl lg:text-6xl mb-4", className)}>
      {children}
    </h1>
  );
};

export default SectionHeader;
