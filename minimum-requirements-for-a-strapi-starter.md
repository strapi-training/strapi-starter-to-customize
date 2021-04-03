# Minimum Requirements for a Strapi Starter Repo
Following are the hard requirements for a bare-bones, [strapi starter]((https://strapi.io/blog/announcing-the-strapi-starter-cli) repo.

Optional features are also included below .

# Hard Requirements

## ❗️ Publicly Accessible Repo
A publicly accessible, Github repo is required so that the [strapi starter CLI](https://github.com/strapi/strapi/tree/master/packages/create-strapi-starter) can do its work.

**Make sure your starter repo is public**.

## ❗️ `starter` Folder

The `starter` folder is what contains the web app that will be ultimately become the `frontend` folder in the final, output that will be a fully-functional, full-stack, strapi web application.

This folder can contain any web app tech, such as a [NextJs](https://nextjs.org/) app, a [Gatsby](https://www.gatsbyjs.com/) app, an [ExpressJs](https://expressjs.com/) app, etc.  This app will be what consumes the respective strapi API, in the final, fully-functional, full-stack, strapi web application.

## ❗️ `develop` Script for `frontend` Web App

In order for the strapi starter to build and execute successfully:

* make sure that your frontend web app (in the `starter` folder) has a `develop` script that executes the web app in dev mode.
* this `develop` script needs to be in the `scripts` node of the `package.json` file of your frontend web app.
* this script should have the appropriate commands to run your web app in dev mode. e.g. `NODE_ENV=develop node server.js`.

NOTE: although, technically speaking, your final, full stack app will still work, it will not be functional from the root folder of the [monorepo](https://strapi.training/videos/monorepos-in-strapi-starters), where the strapi starter CLI runs both `frontend` and `backend`, which slightly defeats the purpose of the CLI.  So, I included it in here as a hard requirement. 👍

## ❗️ `starter.json` File

A `starter.json` file is required to reside in the root folder of your strapi starter repo.

Its contents are simply: 
```
{
  "template": "<url_to_your_strapi_template_repo>"
}
```

where `<url_to_your_strapi_template_repo>` can also be the shortcut name equivalent (instead of the url). 

See (link TBA) for details on what a shortcut name is for a strapi template.

## ❗️ Respective Strapi Template Exists

Make sure that the corresponding, strapi template exists! ✔

This strapi template is referenced by the `starter.json` file, as described above.

Also, the strapi template has any and all strapi, content types created, so that your starter's frontend app can consume that data, if applicable.

# Optional Features

## Optional: Strapi Naming Convention

The [strapi starter CLI](https://github.com/strapi/strapi/tree/master/packages/create-strapi-starter) uses a convention that allows custom starters to be referenced by their corresponding shortcut name.  

To provide this convnetion in your custom strapi starter, be sure to name your starter repo using the following pattern:

`strapi-starter-<your_frontend_name>`

where `<your_frontend_name>` is typically something that describes what the front end, web app is written in (e.g. [NextJs](https://nextjs.org/), etc.). So, for example if we used [ExpressJs](https://expressjs.com/) to create our custom front end, web app, we could name our starter repo something like: 

`strapi-starter-my-express-app`

Now, when we use our strapi starter on the command line, we could type something like: 

```
yarn create strapi-starter  <new_project_folder_name>  <your_github_org_or_user>/my-express-app
```

instead of something like:

```
yarn create strapi-starter  <new_project_folder_name>  https://github.com/<your_github_org_or_user>/my-express-app
```
## Convenient Checklist
Use this checklist as you are creating and customizing your dev team's strapi starter: 
- [X] Visit and watch [strapi.training](https://strapi.training) (TBD) video
- [ ] [Ensure Github repo is public](#%EF%B8%8F-publicly-accessible-repo)
- [ ] [Modify or replace the `starter` folder](#%EF%B8%8F-starter-folder)
- [ ] Have your [`start.json` in the root folder](#%EF%B8%8F-starterjson-file)
    - [ ] Ensure that the `template` node points to your, respective, strapi template repo. (`template` node is, of course, in the `start.json`) 
- [ ] [Ensure Respective Strapi Template Exists](tba)
