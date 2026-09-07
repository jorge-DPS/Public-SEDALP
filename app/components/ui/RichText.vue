<script lang="ts">
import { defineComponent, h } from "vue";
import type { PropType, VNodeChild } from "vue";
import type { RichTextDocument, RichTextNode } from "~/types/richText";
import { getRichTextLink } from "~/utils/richText";

const blockTags: Record<string, string> = {
  paragraph: "p", bulletList: "ul", orderedList: "ol", listItem: "li",
  blockquote: "blockquote", codeBlock: "pre", hardBreak: "br", horizontalRule: "hr",
  table: "table", tableRow: "tr", tableHeader: "th", tableCell: "td",
};
const markTags: Record<string, string> = {
  bold: "strong", italic: "em", underline: "u", strike: "s",
  code: "code", subscript: "sub", superscript: "sup",
};

const renderNode = (node: RichTextNode): VNodeChild => {
  if (node.type === "text") {
    return (node.marks ?? []).reduce<VNodeChild>((text, mark) => {
      if (mark.type === "link") {
        const href = getRichTextLink(mark.attrs?.href);
        return href ? h("a", { href, rel: "noopener noreferrer" }, [text]) : text;
      }
      const tag = Object.hasOwn(markTags, mark.type) ? markTags[mark.type] : undefined;
      return tag ? h(tag, {}, [text]) : text;
    }, node.text ?? "");
  }
  const children = (node.content ?? []).map(renderNode);
  if (node.type === "doc") return children;
  const attrs: Record<string, unknown> = {};
  let tag = Object.hasOwn(blockTags, node.type) ? blockTags[node.type] : undefined;
  if (node.type === "heading") {
    const level = Number(node.attrs?.level);
    tag = `h${Number.isInteger(level) && level >= 2 && level <= 6 ? level : 2}`;
  }
  if (!tag) return children;
  const alignment = node.attrs?.textAlign;
  if (["paragraph", "heading"].includes(node.type) && typeof alignment === "string"
    && ["left", "center", "right", "justify"].includes(alignment)) {
    attrs.style = { textAlign: alignment };
  }
  if (node.type === "orderedList" && Number.isSafeInteger(node.attrs?.start)) attrs.start = node.attrs?.start;
  if (node.type === "codeBlock") return h("pre", {}, [h("code", {}, children)]);
  return h(tag, attrs, children);
};

export default defineComponent({
  props: { document: { type: Object as PropType<RichTextDocument>, required: true } },
  setup: (props) => () => h("div", { class: "rich-text" }, [renderNode(props.document)]),
});
</script>

<style scoped>
.rich-text :deep(p + p), .rich-text :deep(ul), .rich-text :deep(ol), .rich-text :deep(blockquote) { margin-top: 1.25rem; }
.rich-text :deep(h2), .rich-text :deep(h3), .rich-text :deep(h4), .rich-text :deep(h5), .rich-text :deep(h6) { margin-top: 1.75rem; margin-bottom: .75rem; font-size: 1.25em; font-weight: 600; line-height: 1.4; }
.rich-text :deep(ul) { list-style: disc; padding-left: 1.5rem; }
.rich-text :deep(ol) { list-style: decimal; padding-left: 1.5rem; }
.rich-text :deep(li + li) { margin-top: .5rem; }
.rich-text :deep(blockquote) { border-left: 2px solid var(--color-brand-copper); padding-left: 1.25rem; }
.rich-text :deep(a) { color: var(--color-brand-copper-dark); text-decoration: underline; overflow-wrap: anywhere; }
.rich-text :deep(pre) { margin-top: 1.25rem; overflow-x: auto; padding: 1rem; background: var(--color-brand-cream); border-radius: .5rem; white-space: pre-wrap; }
.rich-text :deep(hr) { margin: 1.5rem 0; }
.rich-text :deep(table) { display: block; overflow-x: auto; border-collapse: collapse; margin-top: 1.25rem; }
.rich-text :deep(td), .rich-text :deep(th) { border: 1px solid var(--color-border-soft); padding: .5rem; }
</style>
