# Steps to reproduce the issue

I am using `Node v20.11.0`

1. Clone the repo.
2. Run `npm i`.
3. Run `node index.cjs` and open the url, it will crash.

If you run `node dist/server/index.cjs` and open the url, it will work fine.

Both `index.cjs` files are added by me as a workaround to allow running ESM with iis-node on Azure on Windows.

It seems to be a path issue trying to locate the `client` folder when the `dist/server/index.mjs` is loaded from the root vs directly inside the `dist/server` path.
