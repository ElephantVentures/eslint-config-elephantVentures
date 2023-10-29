# Why?
We have many projects with inconsistent formatting. Hopefully this will create a more uniform style

# How to use?
Install eslint per usual then extend this configuration like so:
```json
    {
        "extends": "name coming soon here"
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
