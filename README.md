# Managing error pages in Next 14

## Scenario 1: Happy path according to docs

![AppDir Structure](/docs/happy-path/1-appDir.png)

The root-level `layout.tsx` and `global-error.tsx` must have a html+body wrapper, as they will serve as roots of all errors and pages.

The root page throws and will use the `global-error.tsx` to render the error.
![Root Error](/docs/happy-path/2-root.png)

Not Found is a special error and will use the root layout as well as the `not-found.tsx`
![404 Error](/docs/happy-path/3-notFound.png)

A subfolder without its own error file will fall back to the nearest parent. In this case that means using `global-error.tsx` to render the error.
![Subfolder Error](/docs/happy-path/4-subfolder.png)

A subfolder with its own error file will render the local `error.tsx` as a child of the parent layout. It will not touch the global intercept.
![404 Error](/docs/happy-path/5-subfolderWithError.png)

A subfolder with its own layout will use both layouts before rendering a local error.
![404 Error](/docs/happy-path/6-subfolderWithLayout.png)
