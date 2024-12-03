// Functions declared with the async keyword allow us to write asynchronous code
// in a synchronous manner.
// And together with the fetch API, we can make asynchronous API requests.

//In this challenge, you're building a new component for Your Space,
// a brand new social media application that allows you to find friends.
// This component displays a user's top five friends.

// Given some JSON data returned from the random user API,
// you should dynamically generate image thumbnails for the top five friends.
// You should use the fetch API to call the random user API.
// You can use the URL https://randomuser.me/api/?results=5 to get data for
// five users. Your solution should also use async/await.

// Space;
// TopFiveFriends;

// Fetch 5 random friends from the API
async function findFriend() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json(); // Wait for the response to be converted to JSON
    return data.results; // Return the results array (5 friends)
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Display friends on the page
async function displayData() {
  try {
    const friends = await findFriend(); // Wait for the data to load
    // Select the container where we'll add the thumbnails
    const container = document.getElementById("friends-container");
    // Clear the container in case of multiple calls
    container.innerHTML = "";
    // Loop through each friend and create elements
    friends.forEach((friend) => {
      // Create a div for each friend
      const friendDiv = document.createElement("div");

      // Create an image element for the thumbnail
      const img = document.createElement("img");
      img.src = friend.picture.thumbnail;
      img.alt = `${friend.name.first} ${friend.name.last}`;
      img.classList.add("friend-img"); // Add class to apply styles from CSS

      // Create a paragraph for the name
      const name = document.createElement("p");
      name.textContent = `${friend.name.first} ${friend.name.last}`;

      // Append the image and name to the div
      friendDiv.appendChild(img);
      friendDiv.appendChild(name);

      // Append the friend div to the container
      container.appendChild(friendDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

displayData();
