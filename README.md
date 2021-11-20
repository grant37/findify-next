# Findify / Next.js Example

- older versions of `@findify/react-connect` (at least pre-0.7.x) shipped with Node.js-compatible files in `lib`
- seems that `@findify/react-connect@latest` does not - only ES modules
- this prevents the package from working out of the box in a Next.js app. see: https://github.com/vercel/next.js/issues/9890

To reproduce the issue:

- clone this project

```sh
npm i
npm run build
```

expected result: project builds

actual result:

```sh
> build
> next build

info  - Checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully

> Build error occurred
~/findify-next/node_modules/@findify/react-connect/lib/index.js:1
export { createProvider } from './provider/createProvider';
^^^^^^

SyntaxError: Unexpected token 'export'
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.751 (/Users/gsisson/open-source/findify-next/.next/server/pages/index.js:49:39)
    at __webpack_require__ (/Users/gsisson/open-source/findify-next/.next/server/webpack-runtime.js:25:42)
    at __webpack_exec__ (/Users/gsisson/open-source/findify-next/.next/server/pages/index.js:245:39) {
  type: 'SyntaxError'
}
```

You can see the same error in the browser with

```sh
npm run dev
```
