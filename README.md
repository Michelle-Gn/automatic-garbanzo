# Front End Capstone

This repo is for collaboration on our FEC project associated with HRLAX45.
-----


## Technologies Used:
  * React
  * TBD Styling Library
  * TBD Deployment Platform (currently only local development)

-----
### To use this repo:
1.  Fork and Clone down this repo to your local machine. <br>
    `git clone __repo address__ __local destination folder__`
2. Install dependencies using <br>
    `npm i`
3. This repo doesn't ship with transpiled bundle, so run webpack using <br>
    `npm run build` <br>
    This script has the "watch" flag enabled to track your changes, should you make any. <br>
    
4. Navigate to (https://github.com/settings/tokens) to generate a new key. <br>
    You should only need simple to enable __read:org__ and __user*__ permissions (Unless you like to live dangerously...)<br>
    Now, name your key something funky and copy it for the next step. <br>
5. At the root level of your local repo, you'll need to create a config.js file containing your API_KEY <br>
    `touch config.js`
    | ENV Variable Key | VALUE |
    -------------------|--------
    | API_KEY          | STRING | <br>

  The  `config.js` file is used to authorize API access, so it is included in .gitignore. We don't want to accidentally share it with the world.
  > #### As Gandalf once said:
  > Keep it secret! Keep it safe!

6. Now you should be all set to run `npm start` which will start a localhost server at port 3000, unless you have specified otherwise `PORT` in your node env variables.
