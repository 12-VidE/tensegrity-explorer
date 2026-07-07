import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import OverflowListFactory from "./OverflowList";
import { classNames } from "../util/lang";
import { i18n } from "../i18n";
import style from "./styles/explorer.scss";
// @ts-expect-error - Inline script loaded as text by esbuild plugin
import script from "./scripts/explorer.inline.ts";

interface FileTrieNode {
  slugSegment?: string;
  slugSegments?: string[];
  displayName?: string;
  isFolder: boolean;
  data: Record<string, unknown> | null;
  children: FileTrieNode[];
}

export interface ExplorerOptions {
  title?: string;
  folderDefaultState: "collapsed" | "open";
  folderClickBehavior: "collapse" | "link";
  useSavedState: boolean;
  sortFn?: (a: FileTrieNode, b: FileTrieNode) => number;
  filterFn?: (node: FileTrieNode) => boolean;
  mapFn?: (node: FileTrieNode) => FileTrieNode;
  order?: Array<"filter" | "map" | "sort">;
}

const defaultOptions: ExplorerOptions = {
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  mapFn: (node: FileTrieNode) => {
    return node;
  },
  sortFn: (a: FileTrieNode, b: FileTrieNode) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
        numeric: true,
        sensitivity: "base",
      });
    }

    if (!a.isFolder && b.isFolder) {
      return 1;
    }
    return -1;
  },
  filterFn: (node: FileTrieNode) => node.slugSegment !== "tags",
  order: ["filter", "map", "sort"],
};

let numExplorers = 0;

function concatenateResources(...resources: (string | undefined)[]): string {
  return resources.filter((r): r is string => !!r).join("\n");
}

export default ((userOpts?: Partial<ExplorerOptions>) => {
  const opts: ExplorerOptions = { ...defaultOptions, ...userOpts };
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory();

  const ExplorerComponent: QuartzComponent = (props: QuartzComponentProps) => {
    const { cfg } = props;
    const displayClass = (props as { displayClass?: "mobile-only" | "desktop-only" }).displayClass;
    const id = `explorer-${numExplorers++}`;

    const title = i18n(cfg?.locale ?? "en-US").components.explorer.title;

    return (
      <div
        class={classNames(displayClass, "explorer", "nav-files-container", "collapsed")}
        data-behavior={opts.folderClickBehavior}
        data-collapsed={opts.folderDefaultState}
        data-savestate={opts.useSavedState}
        data-data-fns={JSON.stringify({
          order: opts.order,
          sortFn: opts.sortFn?.toString(),
          filterFn: opts.filterFn?.toString(),
          mapFn: opts.mapFn?.toString(),
        })}
      >
        {/* "Open Explorer" Button  */}
        <button
          class={classNames(displayClass, "explorer-open")}
          aria-controls={id}
          aria-label={title}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            class="readerIcon"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            aria-label={title}
          >
            <title>{title}</title>
            <g transform="translate(-1.8, -1.8) scale(1.15, 1.2)">
              <path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/>
              <path d="m8 16 3-3-3-3"/>
            </g>
          </svg>
        </button>

        {/* Explorer Modal Window */}
        <div id={id} class="explorer-container" aria-expanded={false} role="group">
          <div class="explorer-header">
            <h2>{title}</h2>
            <div class="explorer-actions">
              {/* Explorer Collapse Button */}
                <button type="button" class="explorer-collapse-all" aria-label="Collapse all folders" title="Collapse All">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  class="readerIcon"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                >
                    <path d="m4 14 8-8 8 8"/>
                    <path d="m4 21 8-8 8 8"/>
                  </svg>
                </button>
              {/* Explorer Close Button */}
              <button type="button" class="explorer-close close-button" aria-label="Close Explorer" title="Close Explorer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  class="readerIcon"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <OverflowList class="explorer-ul" />
        </div>

        <template id="template-file">
          <li>
            <a href="#" class="nav-file-title tree-item-self"></a>
          </li>
        </template>

        <template id="template-folder">
          <li>
            <div class="folder-container nav-folder-title tree-item-self">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="5 8 14 8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="folder-icon nav-folder-collapse-indicator collapse-icon"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <button class="folder-button">
                <span class="folder-title"></span>
              </button>
            </div>
            <div class="folder-outer">
              <ul class="content tree-item-children"></ul>
            </div>
          </li>
        </template>

      </div>
    );
  };

  ExplorerComponent.css = style;
  ExplorerComponent.afterDOMLoaded = concatenateResources(script, overflowListAfterDOMLoaded);
  return ExplorerComponent;
}) satisfies QuartzComponentConstructor;
