# portfolio

Portfolio site created with Next.js, TypeScript, Tailwind & Storybook.

![Screenshot of project](https://raw.githubusercontent.com/slvstr-dev/portfolio/master/screenshot.png)

## Setting up Storyblok

_Install mkcert for creating a valid certificate and Install localhost with mkcert_

```
brew install mkcert
mkcert -install
mkcert localhost
```

_Install the HTTPS proxy and run the proxy with the commands below_

```
npm install -g local-ssl-proxy // Installing the proxy
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem  // Running the proxy to target port 3000, you can change that any port of your choice but it should be what your app is running on in development.
```

_Generate component types_

```
pnpm codegen:storyblok
```

## TODO

- [x] Fix forwardRef console error
- [x] Add Octokit for typed GitHub REST API
- [x] Refactor Link to only accept href -> open Modal on intercepting route
- [x] Improve layout of pages to handle as much content as possible
- [x] Fix forwardRef console error on Anchor
- [x] Check remaining TODO's in project
- [x] Add Avatar
- [x] Add slider with Framer Motion
- [x] Replace current relevant animations with Framer Motion
- [x] Replace icons
- [x] Refactor UserInfo
- [x] Improve responsiveness
- [x] Add form inputs
- [x] Replace Octokit with GraphQL + codegen
- [x] Check use of 'use client'
- [x] Decide on creation of Image to remove duplicate styling
- [x] Clean up translations
- [x] Fix broken stories
- [x] Add sizes to images with fill
- [x] Check letter spacing
- [x] Check semantic HTML
- [x] Improve prepare script
- [x] Add statically typed routes through next-intl
- [ ] Replace static content with dynamic content
- [ ] Replace isLight with TW variants
- [ ] Add relevant meta data
- [ ] Fix missing font override for 'Playfair'
- [ ] Upgrade Prettier to ^3.0.0
- [ ] Add LinkedIn content through api
