"use client";

import { useEffect, useRef, useState } from "react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";

// import Embed from "@editorjs/embed";
// import LinkTool from "@editorjs/link";
// import Marker from "@editorjs/marker";
// import Checklist from "@editorjs/checklist";
// import InlineCode from "@editorjs/inline-code";


export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS | null>(null);

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const ImageTool = (await import("@editorjs/image")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const Delimiter = (await import("@editorjs/delimiter")).default;
    const CodeTool = (await import("@editorjs/code")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: {
            class: Header as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          list: {
            class: List as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool as unknown as ToolConstructable,
            config: {
              endpoints: {
                byFile: "/api/upload", // Your API route for file uploads
                byUrl: "/api/fetch-image",
              },
            },
          },
          quote: {
            class: Quote as unknown as ToolConstructable,
            inlineToolbar: true,
            config: { quotePlaceholder: "Enter a quote", captionPlaceholder: "Author" },
          },
          // embed: {
          //   class: Embed as unknown as ToolConstructable,
          //   config: { services: { youtube: true, twitter: true, instagram: true } },
          // },
          delimiter: {
            class: Delimiter as unknown as ToolConstructable,
            
          },
          code: {
            class: CodeTool as unknown as ToolConstructable,
          },
          // linkTool: {
          //   class: LinkTool as unknown as ToolConstructable,
          //   config: { endpoint: "/api/fetch-url" }, // API route to fetch link metadata
          // },
          table: {
            class: Table as unknown as ToolConstructable,
            inlineToolbar: true,
            config: { rows: 2, cols: 3 },
          },
          // marker: {
          //   class: Marker as unknown as ToolConstructable,
          // },
          // checklist: {
          //   class: Checklist as unknown as ToolConstructable,
          //   inlineToolbar: true,
          // },
          // inlineCode: {
          //   class: InlineCode as unknown as ToolConstructable,
          // },
        },

      });
      ref.current = editor;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);
  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log("Article data : ", outputData);
        alert(JSON.stringify(outputData));
      });
    }
  };
  return (
    <>
      <div id="editorjs" className="max-w-full min-h-[500px]"></div>
      <button onClick={save}>Save</button>
    </>
  );
}
