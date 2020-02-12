# Project Review
​
- Set up github correctly on machine, not counting contributions
  - [Why are my contributions not showing up on my profile? - GitHub Help](https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile#you-havent-added-your-local-git-commit-email-to-your-profile)
- Readme for repository
  - Explanation of project
    - What it does
    - What you used to build it
    - What you need to use it (create an account, etc)
  - How to develop
    - What tools need to be installed on the local machine
    - Where to download/clone the project
    - What steps to run to build and develop (`npm install`, etc)
  - How to deploy
  - Maybe include link to heroku app (if you want it to be visible to the world)
​
## UI
​
- Login
  - Includes link to create account - link is already in header
  - Login has "Back" button - should be home. Does not go back, returns to root
- Account view does not include header
- Footer
  - Sticks to bottom of screen - good!
  - Include the year. Set it as a date object so you don't have to update it every year `new Date().getFullYear()`!
​
## Server
​
- Validation
  - Make sure all validation error messages are full sentences with punctuation.
  - Find a way to show the error messages to the user. Here are some simple tutorials using express and handlebars:
    - [Express Form Validation Tutorial Example From Scratch](https://appdividend.com/2018/02/06/express-form-validation-tutorial/)
    - [Create genre form - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form)
​
## Recommendations for the future
​
- Use something like [Passport.js](http://www.passportjs.org/) for auth. It is an industry standard for node and can help you make sure your app is secure.
- Consider making the node backend talk to a react front end. This will let you apply the concepts from the different classes which is the best way to really learn them.