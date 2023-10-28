# Why?
We have many projects with inconsistent formatting. Hopefully this will create a more uniform style

# Goals
- [x] - The start will include some basic community configs. However, my intention is to start handling single rules as time permits  
- [] - Detect if end user is using React. If so then add react rules  
- [] - Detect if end user is using typescript. If so then add typescript rules  
- [] - convert this to TS?  
- [] - maybe split rules into smaller sections that following the headings on Eslint docs  
- [] - could add tests... or not...  

# How to use?
Install eslint per usual then extend this configuration like so:
```json
    {
        "extends": "name coming soon here"
    }
```

# Configs used here
Eslint Recommended with some additional rules that can be found [here](https://eslint.org/docs/latest/rules/)  
React hooks [plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)  
Eslint-plugin-react [here](https://www.npmjs.com/package/eslint-plugin-react)  

# Rules
There are quite a few rules configured, but you can still override them in your individual project if you don't agree with one
```json
    {
        "rules": {
            "max-len": ["error", { "code": 120 }]
        }
```
