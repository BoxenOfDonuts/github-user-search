# Github User Search
A simple front end for using the github user search api.

Allows you to search for a username, and will return paginated results including the username, login, bio, email and location (if available).

There are a few different sort options as well, such as: 
* The default of Best Match
* Most Followers
* Most Repos
* Most Recently joined

One thing to keep in mind is the rate-limiter for the `GET /users/{username}` . Un-authenticated users only get 60/hour, and getting information for each user is one. For cases when you run out, I have included saved some sample responses you will be able to load in.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

