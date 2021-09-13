# Smartbrain learning project - Frontend

This project was made as a learning experience in making a web app.
Comes from "The Complete Web Developer in 2021: Zero to Mastery" course from [@aneagoie]("https://github.com/aneagoie").
Functionality is simple, put an image in and it will detect if there are any faces on it using Clarifai AI pretrained model for that purpose.
Outside of that, it also has a very simple login/signup form.
This is the frontend  part of the project, which uses [React](http://reactjs.com) via [create-react-app](https://create-react-app.dev/) as the framework, [tachyons](https://tachyons.io/) as the CSS toolkit, and [tsparticles](https://github.com/matteobruni/tsparticles) for the cool background.

## Getting started

Clone this repo with:

```shell
git clone https://github.com/llomellamomario/smartbrain-frontend.git
```

Then install dependencies and start the development server with:


```shell
yarn install
yarn start
```

It should automatically open a new tab on your browser (usually http://localhost:3000).
While it will show the basic sign in page, you will need the backend running for it to work (will add the repo soon).
In case you want to see the different pages without the backend, you can hack your way in by modifying `App.js`, parameter `this.state.route`.
Valid routes are `signin`, `home`, and `register`.
As for now, you can search faces with the frontend only (provided you supply `App.js` with your own Clarifai API key) but that functinality will be moved to the backed.

## TO-DO

- [ ] Properly clean state on sign-out
- [ ] Detach the initial stte, so it can be reset easily on logout
- [ ] Move Clarifai API calls to the backend, so the API key doesn't get exposed to a (malicious) end user.
- [ ] Draw boxes over all faces, not only the first one of them
- [ ] Make a proper footer more than having a single line in `App.js`

