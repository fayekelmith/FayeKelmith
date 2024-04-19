"use client";
import { useState } from "react";
import Markdown from "react-markdown";
const Projects = () => {
  const [source, setSource] = useState("");
  return (
    <main className="h-screen flex justify-between">
      <section>
        <textarea
          name="markdown"
          id="markdown"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          cols={30}
          rows={10}
          autoFocus
          className="p-8 outline outline-jade rounded-md"
        />
      </section>
      <section>
        <article>
          <Markdown>{source}</Markdown>
        </article>
      </section>
    </main>
  );
};

export default Projects;
