# Gatsby + Contentful Skeleton

## Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm install
    npm run develop
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8088!

    _Note: You'll also see a second link: _`http://localhost:8088/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

3. **Integrate Contentful keys**

    You need create a .env file based on .env.example file and fill three environment variables, subsecuently you need uncomment latest section inside gatsby-config.js file

## Other helpful scripts

- `npm run build` -- Compile application and make it ready for deployment
- `npm run clean` -- Wipe out the cache (.cache folder) and public directories
- `npm run serve` -- Serve the production build of your site for testing

## What's inside?

A quick look at the top-level files and directories you'll see inside project.

    .
    ├── node_modules
    ├── src
    |   ├── assets
    |   ├── components
    |   |   ├── elements
    |   |   ├── sections
    |   |   ├── Layout
    |   |   └── SEO
    |   ├── graphql
    |   ├── hooks
    |   ├── pages
    |   ├── styles
    |   ├── templates
    |   └── utils
    ├── .env.example
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
    - **`/src/assets`**: This directory include all Assets/files
    - **`/src/components`**: This directory contains all React components
        - **`/src/components/elements`**: This directory contains all Second group of sub-components
        - **`/src/components/sections`**: This directory contains all First group of sub-components
        - **`/src/components/Layout`**: This directory contains Layout component
        - **`/src/components/Seo`**: This directory contains Seo component
    - **`/src/graphql`**: This directory include all graphql fragments
    - **`/src/hooks`**: This directory include all React custom hooks
    - **`/src/pages`**: This directory include index.jsx, 404.jsx and any main page /{page-name} files
    - **`/src/styles`**: This directory include several style files
    - **`/src/templates`**: This directory include all templates
    - **`/src/utils`**: This directory include several utils functions

3.  **`.env.example`**: Litle file example where include all enviroment variables.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file tells git which files it should not track / not maintain a prettier config.

6.  **`.prettierrc`**: This file include all prettier configuration.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**: A text file containing useful reference information about your project.
