## Set

  npm init -y 

## install dev dependencies

   npm install --save-dev @babel/core @babel/cli @babel/preset-env 
   npm install --save-dev nodemon

## configure .babelrc 

  {
    "presets": ["@babel/preset-env"]
  }

## configure package.json

    "babel-node": "babel-node --presets=latest",
    "start": "nodemon --exec npm run babel-node -- ./index.js",
