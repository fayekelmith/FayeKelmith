import { IncompleteWarningComponent } from "@/components/mdx/static-components";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="container max-w-7xl mx-auto py-8">
      <div className="mb-8">
        <IncompleteWarningComponent />
      </div>
      <article className="leading-7 mx-20">{children}</article>
    </div>
  );
}
