# Ktown's ORFF Greenfield Spike

[ORFF Greenfield Spikes Google Doc](https://docs.google.com/document/d/1Md2N5dgdAztBjLDqsq7H7veTDJZCmmRiaG2axE2uC1w/edit)

## Stack

- [Solito](https://solito.dev/)
- [Expo](https://expo.dev/)
  - [Supabase/Expo](https://supabase.com/docs/guides/getting-started/tutorials/with-expo)
- [Next.js](https://nextjs.org/)
  - [Supabase/Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
- [React Native](https://reactnative.dev/)
- [NativeBase](https://nativebase.io/)
- GraphQL
  - [Expo/GraphQL](https://docs.expo.dev/guides/using-graphql/)
  - [Supabase/GraphQL](https://supabase.com/blog/graphql-now-available#getting-started)
- [Supabase](https://supabase.com/)

## Create Blank Solito Example Monorepo

[Docs](https://solito.dev/starter#start-from-the-terminal)/[GitHub](https://github.com/nandorojo/solito/tree/master/example-monorepos/blank)

```sh
npx create-solito-app@latest ktowns-spike
```
**Note: As of 12/30/22 `forceSwcTransforms` needs to be changed to `true` in `next.config.js` to correct an error and 
allow next.js to compile ([see issue here](https://github.com/nandorojo/solito/issues/265) -- if the issue has been closed 
this note can be removed)**

This monorepo uses Yarn 1.0 workspaces to manage its packages. Read about workspaces [here](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

## Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## Install Expo Go

[Expo Go](https://expo.dev/client) is the app to install on your Android or iOS device to test the mobile app.

## Starting the app

The commands are run from the root directory.

- Install dependencies if necessary: run `yarn`


- Next.js local dev:
  ```shell
  yarn web
  ```
  - Runs `yarn next`
- Expo local dev:
  ```shell
  yarn native
  ```
  - Runs `expo start`

## Adding new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`.

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`.

You can also install the native library inside of `packages/app` if you want to get autoimport for that package 
inside the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. Use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).
