# indybms-frontend-vue-graphql-adminjs

# 🚀 Frontend of Event Management Application built with Node.js 🚀

https://github.com/coding-to-music/indybms-frontend-vue-graphql-adminjs

https://indybms-frontend-vue-graphql-adminjs.vercel.app

See also:

https://github.com/coding-to-music/indybms-adminjs-mongo-graphql-s3

https://indybms-adminjs-mongo-graphql-s3.vercel.app (backend API and AdminJS)

From / By https://github.com/RyanDsilva/indybms-backend

https://github.com/RyanDsilva/indybms-frontend

## Environment variables:

```java
VITE_BACKEND_URL = https://api.indybms-adminjs-mongo-graphql-s3.vercel.app
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/indybms-frontend-vue-graphql-adminjs.git
git push -u origin main
```

# IndyBMS Frontend

Made using [Vue 3](https://vuejs.org/) and [Vuetify](https://next.vuetifyjs.com/en/components/all/)

## Purpose and Target Audience

IndyBMS is an event booking and discovery application targeted at local audiences that allow users to register for events in their neighborhood. The application contains the entire journey from event discovery to registration. Also, an organizer mode where locals can add events that would undergo a vetting process to verify their authenticity.

## Features Implemented

1. User Login / Register
2. Search for Events
3. Find Events from Category
4. View Event Details
5. Register For Event
6. Create Event
7. Edit Event
8. Admin Panel (for Manual Updating)

## Hosted Web App

[IndyBMS - https://indybms.ryandsilva.dev](https://indybms.ryandsilva.dev)

## Pre-Requisites

1. Install Node.js 16.x or above
2. Install Yarn package manager

## Project Setup

1. Create a `.env` file using the `.env.example` file and replace with the correct URL.

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```
