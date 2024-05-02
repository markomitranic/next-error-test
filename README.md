# Managing error pages in Next 14

In short:
1. `global-error.tsx` can't be accessed in dev mode.
2. `global-error.tsx` always has to have its own html+body.
3. A root-level `layout.tsx` must always exist, even if it does nothing, because:
4. Root-level `not-found.tsx` or `error.tsx` will attempt to use the root-level `layout.tsx`.

## Scenario 1: Happy path according to docs

![AppDir Structure](/docs/happy-path/1-appDir.png)

The root-level `layout.tsx` and `global-error.tsx` must have a html+body wrapper, as they will serve as roots of all errors and pages.

The root page throws and will use the `global-error.tsx` to render the error. Keep in mind that this page will always be overriden in `dev` so you must run `next build --experimental-build-mode=compile && next start` repeatedly to work on it locally.
![Root Error](/docs/happy-path/2-root.png)

Not Found is a special error and will use the root layout as well as the `not-found.tsx`
![404 Error](/docs/happy-path/3-notFound.png)

A subfolder without its own error file will fall back to the nearest parent. In this case that means using `global-error.tsx` to render the error.
![Subfolder Error](/docs/happy-path/4-subfolder.png)

A subfolder with its own error file will render the local `error.tsx` as a child of the parent layout. It will not touch the global intercept.
![404 Error](/docs/happy-path/5-subfolderWithError.png)

A subfolder with its own layout will use both layouts before rendering a local error.
![404 Error](/docs/happy-path/6-subfolderWithLayout.png)

## Scenario 2: Localized

![AppDir Structure](/docs/happy-path/1-appDir.png)

We've put everything into a `[locale]` subfolder. The only file that can't go there and MUST remain in the root is the `global-error.tsx`. Next docs state that a root-level layout MUST always exist, even if it just proxies the children:

```tsx
export default function RootLayout({ children }: { children: unknown }) {
  return children;
}
```

Most things works just fine and exactly the same as before. There is a bit of a difference in what happens if the `layout.tsx` inside of the `[locale]` folder fails, or causes a 404.

For example. If the layout causes a 404, we have a weird case. Next will attempt to use the root-level `not-found.tsx` and the nearest layout relative to it, which is in this case the root-level `layout.tsx`.
![404 Error](/docs/localized/2-notFound.png)
