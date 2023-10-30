# Why?
We have many projects with inconsistent formatting. Hopefully this will create a more uniform style  
This is meant to be a collaboration for EV devs to adjust, add, and remove rules as we see fit  
This will be published on NPM so to properly adjust you need to run `npm version <update_type>` where update_type can be: patch, major, or minor  
Then run `npm publish` so packages that use this can know of changes


# Install  
This config includes the elephant ventures prettier config by default.  
To install all necessary dependencies run  
```bash
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @elephantventures/prettier-config @elephantventures/eslint-config-base
```

# How to use?
Install then extend this configuration like so in your `eslintrc`
```json
    {
        "extends": "@elephantventures/eslint-config-base"
    }
```
Then add this to your `package.json`
```json
{
    "prettier": "@elephantventures/prettier-config"
}
```

# Configs and Rules used
Eslint Recommended with some additional rules that can be found [here](https://eslint.org/docs/latest/rules/)  

# ESLint Notes
ESlint will be deprecating formatting rules November 3 [blog](https://eslint.org/blog/2023/10/deprecating-formatting-rules/)  
ESlint is also changing their configuration format in the next major release v9  


# Overrides
You can still override any rules in your individual project if you don't agree with one  
However, keep in mind this is for code consistency so please don't go override crazy
```json
    {
        "rules": {
            "complexity": "off"
        }
    }
```
