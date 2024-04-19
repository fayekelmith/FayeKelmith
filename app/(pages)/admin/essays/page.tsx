"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";
import { CodeBlock, Pre } from "@/components/Code";
import MarkdownHeaeder from "@/components/MarkdownHeader";
import { Schema, defaultSchema } from "hast-util-sanitize";

const MarkDownComposer = () => {
  const [source, setSource] = useState("");
  const options = { code: CodeBlock, pre: Pre };
  const feedElement = (syntax: string) => {
    return setSource(source + syntax);
  };
  const schema: Schema = {
    ...defaultSchema,
  };

  schema.tagNames = [...(schema.tagNames ?? []), "u"];
  schema.attributes = {
    ...defaultSchema.attributes,
    ["*"]: ["style", "class"],
  };

  return (
    <div className="h-[80vh] flex justify-between mx-8 bg-slate-100 dark:bg-slate-800">
      <section className="rounded-md w-full p-8">
        <MarkdownHeaeder feedElement={feedElement} />
        <textarea
          name="markdown"
          id="markdown"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          autoFocus
          className="p-8 rounded-md w-full h-full bg-slate-50 dark:bg-slate-900 mt-4"
        />
      </section>
      <section className="w-full p-8 rounded-md overflow-scroll ">
        <article className=" p-8">
          <Markdown
            className="prose dark:prose-invert min-w-full"
            remarkPlugins={[
              remarkGfm,
              [remarkRehype, { allowDangerousHtml: true }],
            ]}
            rehypePlugins={[
              [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
              [rehypeRaw],
              [rehypeSanitize, schema],
            ]}
            components={options}
          >
            {source}
          </Markdown>
        </article>
      </section>
    </div>
  );
};

export default MarkDownComposer;
