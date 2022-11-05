import type { PageData } from "lume/core.ts";

export const layout = "homepage.njk";

export default function ({ search }: PageData) {
  const posts = search.pages("type=post");

  return `
    <h2>Posts</h2>
    <ul>
      ${
    posts.map((post) =>
      `<li><a href="${post.data.url}">${post.data.title}</a></li>`
    ).join("")
  }
    </ul>
  `;
}
