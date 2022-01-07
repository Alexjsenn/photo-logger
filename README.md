# Photo Logger

This web app was developed to allow enthusiast photographers to track the settings and metadata of each picture they take on film cameras. Due to their mechanical nature, it is not possible to know how a picture will turn out until the whole roll is developed. Therefore, it is common place to note down the settings used for various pictures so that after development the photographer can go back and look at which settings worked and which might need tweaking.

The app is deployed using Heroku [here](https://mighty-peak-26651.herokuapp.com) and has been developed for a mobile experience. While it is usable in a desktop browser, at the moment UI elements will not take advantage of the wider screen size.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technical Details

Due to the short development time of this project (under a week) and the narrow use case (I developed it primarily for a friend to use) some design decisions were taken that are not optimal for widespread use.
Primarily this relates to how the app stores the user's information. Ideally users would log in and all their information would be stored in a database. This would also allow them to login from different devices and always have their data. However, in the persuit of simplicity and time savings the user data is currently being stored using HTML5's LocalStorage API. This makes it easy for a user to jump right in without the need to login, and data persists on their device.

## Deployment

The app has been deployed with Heroku and integrated to automatically deploy the master branch of this repo.

## Development

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run start`

Runs the app in deployment mode.

