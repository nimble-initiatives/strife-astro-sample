import { LitElement, html, css, unsafeCSS } from 'lit';
import sheet from '../../styles/global.css?inline' assert { type: 'css' };

export class PostList extends LitElement {
  static styles = css`
    ${unsafeCSS(sheet)}
  `;
  static properties = {
    posts: { type: Array },
  };
  constructor() {
    super();
    this.posts = [];
  }
  render() {
    return html`
      <ul class="grid grid-cols-1 mt-12 gap-1 gap-y-24 lg:grid-cols-3 sm:grid-cols-2">
      ${this.posts.map(
        (item) => html`
          <li>
            <a href="/posts/${item.url}" title="${item.title}" class="group">
              <article class="flex-1 h-full flex flex-col">
                <div class="block w-full lg:col-span-2">
                  <img
                    class="aspect-[2/3] object-cover bg-center h-full w-full"
                    src=${item.images.listing.source.url}
                    alt=${item.title}
                  />
                </div>
                <div
                  class="flex flex-col items-start justify-between h-full flex-1 w-full p-4"
                >
                  <div>
                    <div class="inline-flex space-x-1 items-center">
                      <p class="text-xs font-medium text-black">${item.author}</p>
                      <span aria-hidden="true">&middot;</span>
                      <div class="flex text-xs text-zinc-400">
                        <time datetime="2020-03-16">${new Date(item.publishedDate).toString().slice(0, 10)}</time>
                      </div>
                    </div>
                    <p class="text-black mt-2 font-display text-xl text-pretty">
                      ${item.title}
                    </p>
                  </div>
                  <p class="mt-4 text-sm text-zinc-500 line-clamp-2">${item.description}</p>

                  <div class="mt-4 flex space-x-2">
                    ${
                      item.labelNames.map((tag) => html`
                        <span class="text-xs font-medium text-black">${tag}</span>
                      `)
                    }
                  </div>
                </div>
              </article>
            </a>
          </li>
        `
      )}
      </ul>
    `;
  }
}

customElements.define('post-list', PostList);
