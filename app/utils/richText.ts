import type { RichTextNode } from "~/types/richText";

export const getRichTextContent = (node: RichTextNode): string => {
  if (node.type === "text") return node.text ?? "";
  if (node.type === "hardBreak") return "\n";
  const text = (node.content ?? []).map(getRichTextContent).join("");
  return ["paragraph", "heading", "listItem", "blockquote", "codeBlock"].includes(node.type)
    ? `${text}\n` : text;
};

export const getRichTextLink = (value: unknown): string | undefined => {
  if (typeof value !== "string") return;
  const href = value.trim();
  if (/[\u0000-\u0020\u007f]/.test(href)) return;
  if (/^(https?:\/\/|mailto:|tel:|#|\/(?![\/\\]))/i.test(href)) return href;
};
