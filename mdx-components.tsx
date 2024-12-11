import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "48px",
          paddingBottom: "0.5rem",
          paddingTop: "1rem",
        }}
      >
        {children}
      </h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    p: (props) => (
      <p className="text-xl" style={{ lineHeight: 1.6 }}>
        {props.children}
      </p>
    ),
    blockquote: (props) => (
      <blockquote
        className=" border-l-4 
      border-zinc-600 pl-8 my-4"
      >
        {props.children}
      </blockquote>
    ),
    ...components,
  };
}
