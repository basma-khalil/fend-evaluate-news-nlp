# Evaluate a News Article with Natural Language Processing

This is my Udacity Front End Nanodegree fourth project

## Table of Contents

- [Evaluate a News Article with Natural Language Processing](#evaluate-a-news-article-with-natural-language-processing)
  - [Table of Contents](#table-of-contents)
  - [Instructions](#instructions)
    - [More About Natural Language Processing](#more-about-natural-language-processing)
  - [Project Specification](#project-specification)
  - [Installation](#installation)
  - [Content Sources License](#content-sources-license)

## Instructions

This project requires building a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites, using an exciting new API called Aylien. This tool will give back pertinent information about the article, such as whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be the web server and routing, and Webpack will be the build tool of choice.

**The goal of this project is to practice with:**
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

* [You can find the starter project here](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp "Go to link")

### More About Natural Language Processing

This is the Wikipedia definition:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Project Specification

You can review **project rubric** from [here](https://review.udacity.com/#!/rubrics/2668/view "Go to link").

## Installation

To get started, you need [node.js](https://nodejs.org/en/download "Go to link") and npm installed on your local machine.

Once you have that setup, just run: `npm install` in your project directory.

You will also need to sign up to [Aylien](https://developer.aylien.com/signup) to get your API ID and API key.

Then, replace `application_id` and `application_key` values in `src/server/aylienAPI.js` file with your API ID and API key:

```
application_id: Your API ID,
application_key: Your API KEY
```
* __To create "dist" folder run:__

  `npm run build-prod`

* __To start the project in the development environment with "webpack-dev-server" live preview:__

  `npm run build-dev`

* __To start the server run:__

  `npm start`

  _"The project is running on localhost: 8081"_

* __To start Jest test run:__

  `npm test`

## Content Sources License

* SVG emoji icons made by [Roundicons](https://www.flaticon.com/authors/roundicons "Go to link") from [www.flaticon.com](https://www.flaticon.com "Go to link")