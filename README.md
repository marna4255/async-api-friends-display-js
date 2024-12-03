## Your Space: Top Five Friends

This project demonstrates how to fetch data asynchronously from an API and dynamically display it on a webpage. It uses the fetch API and async/await to fetch and display a list of five random friends.

## Overview

Asynchronous Data Fetching: The project uses async/await to fetch data from the random user API and process it asynchronously.
Dynamic HTML Rendering: The fetched data is used to dynamically generate thumbnails of friends and display their names.
Clean and Simple Structure: The project consists of just three files: index.html, style.css, and script.js.

## Features

Fetches data from https://randomuser.me/api/?results=5 to get five random users.
Uses the fetch API with async/await to handle asynchronous operations.
Dynamically generates a list of friend images and names and displays them on the webpage.

## How it Works

Fetching Data:
The findFriend function is an async function that fetches data from the API.
await is used to wait for the API response before processing it.
Displaying Data:
After the data is fetched, the displayData function dynamically creates HTML elements (images and text) to display the friends on the webpage.

## How to Use

Clone this repository: https://github.com/marna4255/async-api-friends-display-js.git
Open the index.html file in your browser to see the Top Five Friends displayed.
Technologies Used
HTML
CSS
JavaScript (with fetch, async/await)
