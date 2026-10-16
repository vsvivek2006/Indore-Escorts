"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import { useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
} from "lucide-react";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const lastEmittedHtml = useRef<string>(content || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            "text-[#e31777] font-semibold underline decoration-pink-400 underline-offset-4 hover:text-[#c41164] transition-colors cursor-pointer",
        },
      }),
      ImageExtension.configure({
        inline: true,
        HTMLAttributes: {
          class: "rounded-lg max-w-full my-4 border border-gray-200",
        },
      }),
    ],
    content: content || "",
    editorProps: {
      attributes: {
        class:
          "tiptap-editor-surface min-h-[320px] p-5 text-gray-900 focus:outline-none max-w-none text-base leading-relaxed bg-white",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      lastEmittedHtml.current = html;
      onChange(html);
    },
  });

  // Sync external content if updated (e.g. from AI generation or reset)
  useEffect(() => {
    if (editor && content !== lastEmittedHtml.current) {
      lastEmittedHtml.current = content || "";
      editor.commands.setContent(content || "", { emitUpdate: false });
    }
  }, [content, editor]);

  if (!editor) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 min-h-[350px] flex items-center justify-center text-gray-400 text-sm">
        Loading editor...
      </div>
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL:", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="rounded-xl border border-gray-300 bg-white overflow-hidden focus-within:border-[#e31777] focus-within:ring-1 focus-within:ring-pink-300 transition-all shadow-xs">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
      />
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("bold")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("italic")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("strike")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("heading", { level: 2 })
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("heading", { level: 3 })
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("bulletList")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("orderedList")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("blockquote")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Blockquote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-1.5 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
          title="Divider"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={setLink}
          className={`p-1.5 rounded text-sm transition-colors cursor-pointer ${
            editor.isActive("link")
              ? "bg-[#e31777] text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={addImage}
          className="p-1.5 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
          title="Add Image via URL"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-1.5 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors disabled:opacity-40 cursor-pointer"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-1.5 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors disabled:opacity-40 cursor-pointer"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />
    </div>
  );
}
