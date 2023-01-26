- be sure to install PostCSS Language Support in VS Code to remove 'unknown rule @tailwind'in index.css

## Steps to use Tailwind on the project

[using TailwindCss]
[https://tailwindcss.com/docs/guides/vite
]

```
npm create vite@latest my-project -- --template react typescript

cd my-project
nvm use 18.12.0
npm i && npm run dev

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Update tailwind.config.cjs

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your` ./src/index.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your build process

Run your build process with `npm run dev`.

### Start using Tailwind in your project

```
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
```
