# React Social Media Web App: Around the US 

This project is a React-based web application that allows users to edit their profiles, add and delete posts, and like posts in a social media-like setting. The application is built using modern front-end technologies and follows good coding practices.

## Technologies Used
- React
- Fetch API
- JavaScript ES6+ syntax

## Key Features
- React Hooks: The project heavily utilizes React's functional components and hooks, such as useState, useEffect, and useContext to manage the app's state and to trigger certain actions when changes are made.
- API calls: The project uses Fetch API to make HTTP requests to a server to fetch and post data. It makes use of promises to handle the response data and errors.
- Context: The project utilizes React's context API to provide global state management and to pass data between different components.
- Conditional Rendering: The project uses conditional rendering techniques to control which UI elements are displayed to the user based on certain conditions, such as whether a modal is open or whether the user is authenticated.
- Error Handling: The project uses try-catch blocks to handle errors that may occur during API calls, and displays error messages to the user.
- ES6+ JavaScript syntax: The project uses modern JavaScript syntax, such as arrow functions, template literals, and destructuring, to write cleaner and more concise code.

## Custom Hook
This code exports a custom hook called **'useFormAndValidation'** that can be used in a React functional component to handle form validation. The hook returns an object that contains the current values of the form fields, a function to handle changes to the form fields, an object of validation errors for each field, a boolean value indicating whether the form is currently valid, a function to reset the form to its initial state, and functions to manually set the form values and validity.

The hook uses the **"useState"** hook to maintain state for the form values, errors, and validity. The useCallback hook is also used to memoize the **"resetForm"** function, which can be passed down to child components as a prop to reset the form.

The **"handleChange"** function is called when a form field is changed and updates the state of the form values and errors based on the new value of the changed field. It also updates the validity of the form by checking the validity of the closest form element using the **"checkValidity()"** method.

Note that the code assumes that each form field has a name attribute and a **"validationMessage"** property on its validity object, which is set by the browser's built-in validation.

## API
This code exports an **"api"** object that provides methods to interact with a RESTful API at a specific base URL (**"BASE_URL"**) using a specific authorization token (**"AUTH_TOKEN"**).

The **"Api"** class constructor takes an options object with **"baseUrl"** and **"headers"** properties. The headers property includes the authorization token and sets the content type to **"application/json"**. The class also includes several methods to perform different types of API requests including **"GET"**, **"POST"**, **"DELETE"**, and **"PATCH"** methods.

The api object is an instance of the Api class with the base URL and headers set as options. This object exports the methods to interact with the RESTful API.

Note that this project is based on a previous project that was built using vanilla JavaScript. However, this project has been re-done from the ground up using React to take advantage of modern front-end technologies and coding practices.
