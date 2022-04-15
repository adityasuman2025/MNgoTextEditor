# mngo-text-editor
This library is available at [mngo-text-editor](https://www.npmjs.com/package/mngo-text-editor)

## Demo
[mngo.in](https://mngo.in)

[adityasuman.mngo.in](https://adityasuman.mngo.in)

## Brief:

A JavaScript Library (npm package ) to memic the design of Sublime Text Editor. One can easily create his web profile in react.js by installing `mngo-text-editor` package

## Usage
    <MNgoTextEditor
        titleBarHeight={string}
        tabBarHeight={string}
        filesListBarWidth={string}
        title={string}
        typeWriterText1={string}
        typeWriterText2={string}
        files={array}
        filesContent={object}
    />

`props example`

1. `titleBarHeight`  default value is "25px"
2. `tabBarHeight`  default value is  "30px"
3. `filesListBarWidth`  default value is "220px"
4. `title` "adityasuman2025"
5. `typeWriterText1` "Hello <b>World</b>" (html string)
6. `typeWriterText2` "This is <b>Aditya</b> <a>Suman</a>" (html string)
7. `files`  
        

            [
                {
                    "type": "folder", "srcKey": "adityasuman", "defaultOpen": true,
                    "files": [
                        { "type": "file", "srcKey": "about_me.html" },
                        { "type": "file", "srcKey": "contact_me.html" },
                        {
                            "type": "folder", "srcKey": "work_experience",
                            "files": [ ]
                        }
                    ]
                },
                { "type": "file", "srcKey": "follow_me.html" },
            ]

        
    1. `type` can be `file` or `folder`
    2. `srcKey` is the name of the file that will appear in left side bar and the same `key` is used in `filesContent` props to contain content of that file
8. `filesContent`  
        

            {
                "about_me.html": {
                    "title": "<About Me>",
                    "content": 'I\'m a programmer and a computer geek.<br>I have professional skill in Mobile & Web Application Development. <br>Currently I am Full Time Software Engineer at <a href="https://www.byjus.com/" target="_blank" class="title_a">Byjus</a> and have done internship at <b>ISRO, UpBrinGO & 4 other startups</b>.<br>Other than programming I use to spend time in reading novels, listening songs, graphics designing and nature photography.'
                },
            }

        
    1. key (about_me.html) is the `srcKey` from `files` props
    2. `title` is the title of the file (string)
    3. `content` is the content of the file (html string)

## Installation

1. npm install
2. npm start

## Available Scripts

In the project directory, you can run

### `npm start`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build-publish`

this command make build of the project and publishes it, basically it is combination of `npm run babel-build` and `npm publish`
### `npm run babel-build`

it is for final package build which create `dist` folder.

### `npm publish`

to publish the project on npm

`Note`: do `npm run babel-build` before `npm publish` because it publishes dist folder as defined as key main, module, files in package.json, and do not forget to login in npm using `npm login`


## License

All rights reserved under MNgo.
