# JS Unit Testing

## Prepare project

Create a new directory for this project and open it

```
mkdir js-unit-testing
cd js-unit-testing
```

Use git

```
git init
```

Use npm

```
npm init -y
```

Open the project with VSCode

```
code .
```

Important: Create a `.gitignore` file with this content:

```
.DS_Store
node_modules
```

## Prepare testing with jest

Install `jest`

```
npm i -D jest @types/jest
```

In the `package.json` file add the following line:

```
"type": "module",
```

In the `package.json` file add the following lines within the `scripts` block:

```
"scripts": {
	"test": "NODE_OPTIONS=--experimental-vm-modules npx jest",
	"test:watch": "NODE_OPTIONS=--experimental-vm-modules npx jest --watch"
},
```

Do initial commit (e.g. like this):

```
git add .
git commit -m "Initial commit"
```

## Run Tests

Single run:

```
npm run test
```

Watch mode:

```
npm run test:watch
```

## Ressources

- [Testing Trophy and Testing Classifications (Kent C. Dodds)](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Jest](https://jestjs.io/)
