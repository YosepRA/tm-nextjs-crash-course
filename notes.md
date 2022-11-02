# Notes

Notes during the course.

Official documentation: [Link](https://nextjs.org/docs/getting-started).  
Official learning page: [Link](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website).

---

- Next.js is a React framework to quickly build a Server-Side Rendering (SSR) app, and many other features and optimizations that it may offer.
- It generates HTML on the server. But after that, it will operate just like your usual SPA would.
- Routing is dictated through file-system structure. It's a framework, expect the structure will be opinionated.
- You can customize `head` on each component using `next/head` package.
- You can customize `document` to modify `html` and `body` by creating a `_document.js` file inside `pages` directory.
- `_app.js` is the root. `Component` will become the primary result of your content. Therefore, you can play with wrapper components such as navigation and footer there.
