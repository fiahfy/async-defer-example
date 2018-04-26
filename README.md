# async-defer-sandbox

> Sandbox for async/defer attribute for external scripts

![screenshot](./graph.png?raw=true)

## Development
``` bash
# install dependencies
yarn

# serve with hot reload
yarn dev
```

### Pseudo script
```
<script src="script.js?d=5&l=10"></script>
```
#### Parameters
| Name | Description |
| ---- | ---- |
| d | Delay script download time (sec) |
| l | For-loops count (l * 100000000) |
