# Build An AI Image Generator With OpenAI & Node.js
11:00
https://www.youtube.com/watch?v=fU4o_BKaUZE
----------------------------------
This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/img/screen.png" width="500">

## Usage


1. npm init -y # Generate   jason file without having it ask any questions 
2. npm install express openai dotenv
3. npm i -D nodemon

4. In the "package.json" file change the  scripts item to:

   "scripts": {
        "start": "node index",
        "dev": "nodemon index"
     },
Rename the `example.env` file to `.env`.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

 

Run server:       npm run dev

Visit `http://localhost:5000` in your browser.

The endpoint is at `POST http://localhost:5000/openai/generateimage`.


