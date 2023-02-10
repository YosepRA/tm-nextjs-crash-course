# Notes

Notes during the course.

Official documentation: [Link](https://nextjs.org/docs/getting-started).  
Official learning page: [Link](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website).

---

- Next.js is a React framework to quickly build a Server-Side Rendering (SSR) app, and many other features and optimizations that it may offer.
- It generates HTML on the server. But after that, it will operate just like your usual SPA would.
- Routing is dictated through file-system structure. It's a framework, expect the structure to be opinionated.
- You can customize `head` on each component using `next/head` package.
- You can customize `document` to modify `html` and `body` by creating a `_document.js` file inside `pages` directory.
- `_app.jsx` is the root. `Component` will become the primary result of your content. Therefore, you can play with wrapper components such as navigation and footer there.
- Use `Link` from `next/link` to create links in Next.js. Just the usual SPA links stuff, the same as React-Router.
- How to create nested routing:
  - Create a folder inside `pages` according to the type of your data, e.g. "article".
  - For a specific data such as article detail page,
    - Create a folder inside your `pages/{your-data}`.
    - Name it the parameter of your specific data wrapped in a square bracket. For example, for an article with a specific `id`, you can name your folder with `[id]`.
    - Therefore, your folder structure will be `pages/article/[id]`.
    - Create an `index.js` file inside that folder and you can put your layout code there.
- You can access route dynamic parameter using `useRouter` hook from `next/router` package. Then you can access `router.query` object and find your parameter there.
