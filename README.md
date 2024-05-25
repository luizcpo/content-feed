# Contend Feed

This is a simple challenge using T3, a bundle from Vercel to start an application with tRPC, Next.js, React, TailwindCSS and more. This is a very simple application:

- [Backend] We created a simple server with tRPC that fetches information from an external API. 
- [Fron-end] We created a server page that calls the tRPC endpoint a retrieves the posts from the above mentioned API, and 2 client components where we manage stage by using the React Hook useState.
- [Usability] For every post we normilize the size of the image, and hide when the text with more than 3 lines, and by default we hide the comments.
- [Typescritp] For normilizing the API information we created a type Post with several subtypes including Comment.

This is a simple yet modern application with the latest tools in web development with TypeScript.

## What's next? How to improve this app?

- [Backend] To improve performance and scale better we should include a caching strategy and avoid reaching the API everytime.
- [Usability] Implement a infinite scroll using infinit query would be a nice add to the usability. Also do some tests around UX to get hints on what to improve.
- [Tests] As we don't have many business rules yet, the best tests we can get are end-to-end and implement those in the future would be also a fantastic way to improve quality.


## How to run this application?
```console
user@computer:~$ npm install 
user@computer:~$ npm run dev
```