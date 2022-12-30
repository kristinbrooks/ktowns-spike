# Ktown's Greenfield Spike

[ORFF Greenfield Spikes Google Doc](https://docs.google.com/document/d/1Md2N5dgdAztBjLDqsq7H7veTDJZCmmRiaG2axE2uC1w/edit)

Table of Contents
=================

* [About](#about)
  * [Monorepo Structure](#monorepo-structure)
    * [Workspaces](#workspaces)
  * [Tech Stack](#tech-stack)
    * [Solito](#solito)
    * [Expo](#expo)
    * [React Native](#react-native)
    * [Next.js](#next.js)
    * [NativeBase](#nativebase)
    * [Supabase](#supabase)
    * [TypeScript](#typescript)
* [Create Blank Solito Monorepo](#create-blank-solito-monorepo)
* [Folder Layout](#folder-layout)
* [Expo CLI](#expo-cli)
* [Expo Go](#expo-go)
* [Starting the App](#starting-the-app)
* [Adding New Dependencies](#adding-new-dependencies)
  * [Pure JS Dependencies](#pure-js-dependencies)
  * [Native Dependencies](#native-dependencies)

## About

### Monorepo Structure

*Monorepos, or "monolithic repositories", are single repositories containing multiple apps or packages. It can help
speed up development for larger projects, make it easier to share code, and act as a single source of truth.*
([source](https://docs.expo.dev/guides/monorepos/))

#### Workspaces

This monorepo uses Yarn 1.0 workspaces to manage its packages.
Read about workspaces [here](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

### Tech Stack

Links:
- [Solito](https://solito.dev/)
- [Expo](https://expo.dev/)
- [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NativeBase](https://nativebase.io/)
- [Supabase](https://supabase.com/)
- [TypeScript](https://www.typescriptlang.org/)


- Maybe GraphQL?
  - [Expo/GraphQL](https://docs.expo.dev/guides/using-graphql/)
  - [Supabase/GraphQL](https://supabase.com/blog/graphql-now-available#getting-started)

#### Solito

>Solito describes itself as *'...the missing piece for using React Native with Next.js to build powerful cross-platform 
>apps.'* ([source](https://solito.dev/))
>
>> This library is two things:
>> 
>> 1. A tiny wrapper around React Navigation and Next.js that lets you share navigation code across platforms.
>> 2. A set of patterns and examples for building cross-platform apps with React Native + Next.js.
>> 
>> ([source](https://solito.dev/#about))

#### Expo

> *'Expo is an open-source framework for apps that run natively on Android, iOS, and the web. Expo brings together the 
> best of mobile and the web and enables many important features for building and scaling an app like live updates, 
> instantly sharing your app, and web support.'* ([source](https://docs.expo.dev/introduction/faq/))
> 
> It also makes it much simpler to test React Native apps on both Android and iOS, which is the main reason (along 
> with the ability for mobile and web to share code), that we're using this framework.

#### React Native

> *'React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build 
> natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various 
> platforms by using the same codebase.'* ([source](https://www.netguru.com/glossary/react-native))

#### Next.js

> *'Next.js is a React framework that gives you building blocks to create web applications.'*
> 
> *'By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional 
> structure, features, and optimizations for your application.'*
> ([source](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs))
> 
> One of the reasons we've chosen Next.js is because it is an opinionated framework, which can help create a more 
> consistent codebase and be easier for new developers to jump into.
> [This article](https://hackernoon.com/opinionated-or-not-choosing-the-right-framework-for-the-job-6x1u2ga0) has a 
> nice description of opinionated frameworks along with some example comparisons of some well known frameworks.

#### NativeBase

>NativeBase is a component library that works in iOS, Android, and on the web. This will allow for consistent styling on web and mobile and the ability to share some components between the two.

#### Supabase

> Supabase is an open source BaaS (Backend as a Service) platform for building web and mobile apps without servers. It 
> provides a Postgres database, authentication, file storage, [edge functions](https://www.netlify.com/blog/edge-functions-explained/#:~:text=What%20are%20Edge%20Functions%3F,site%20visitors%20around%20the%20globe.),
> and auto-generated APIs. These tools allow setting up and maintaining the backend to be easier and faster that with 
> a custom backend. [Here](https://blog.back4app.com/what-are-the-benefits-baas-backend-as-a-service/) is some info 
> on the benefits of using a BaaS.

#### TypeScript

> *'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any
> scale.* ([source](https://www.typescriptlang.org/))
>
> Integers, Strings, Booleans, etc. are examples of types. In a strongly typed languages variables must be assigned a
> specific type when they are declared and restrictions will be enforced on if or how the types can be mixed. An
> error/exception will occur if these restrictions are violated.

## Create Blank Solito Monorepo

Run:
```shell
npx create-solito-app@latest ktowns-spike
```
[Solito Starter Doc Page](https://solito.dev/starter#start-from-the-terminal) /
[GitHub](https://githubcom/nandorojo/solito/tree/master/example-monorepos/blank)

**Note: As of 12/30/22 `forceSwcTransforms` needs to be changed to `true` in `next.config.js` to correct an error and 
allow next.js to compile ([see issue here](https://github.com/nandorojo/solito/issues/265) -- if the issue has been closed 
this note can be removed)**

> This monorepo will install Solito, Expo, React Native, and Next.js into the appropriate monorepo structure for Expo. 
> As a bonus, it also sets up TypeScript, Prettier, and Eslint with all the config already done for us.


## Folder Layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## Expo CLI

Run:
```shell
npm install --global expo-cli
```

[Intro Instructions Here](https://docs.expo.dev/get-started/installation/#expo-cli)

- Note in the requirements that macOS and Linux users need to install [Watchman](https://facebook.github.
io/watchman/docs/install.html). 

[More In-Depth Instructions Here](https://docs.expo.dev/workflow/expo-cli/)

## Expo Go

[Expo Go](https://expo.dev/client) is the app to install on your Android or iOS device to test the mobile app.

## Starting the App

These commands are run from the **root directory**.

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

## Adding New Dependencies

### Pure JS Dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`.

### Native Dependencies

If you're installing a library with any native code, you must install it in `apps/expo`.

You can also install the native library inside of `packages/app` if you want to get autoimport for that package 
inside the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. Use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).
