"use client";
import { defaultEditorContent } from "@/lib/content";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  EditorRoot,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorContent,
  type JSONContent,
  type EditorInstance,
  EditorCommandList,
} from "novel";
import { ImageResizer, handleCommandNavigation } from "novel/extensions";
import { defaultExtensions } from "./extensions";

import { slashCommand, suggestionItems } from "./slash-command";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { uploadFn } from "./image-upload";

const extensions = [...defaultExtensions, slashCommand];

const TailwindAdvancedEditor = () => {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(
    defaultEditorContent,
  );

  if (!initialContent) return null;

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="bg-accent text-muted-foreground absolute right-5 top-5 z-10 mb-5 rounded-lg px-2 py-1 text-sm">
        {/* {saveStatus} */}
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="mx-auto"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: `space-y-[1em] prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
            },
          }}
          onUpdate={({ editor }) => {
            // setSaveStatus("Unsaved");
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="border-muted bg-background z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="text-muted-foreground px-2">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item?.command?.(val)}
                  className={`hover:bg-accent aria-selected:bg-accent flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm `}
                  key={item.title}
                >
                  <div className="border-muted bg-background flex h-10 w-10 items-center justify-center rounded-md border">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground text-xs">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
