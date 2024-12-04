# Next.js 15 - `await` Error in `pages/about.js`

This repository demonstrates a common error encountered in Next.js 15 applications when using `await` outside of an `async` function.  The error arises from attempting to use `await` within a component's main body where it's not supported.

**Bug Description:**

The `pages/about.js` file attempts to use `await` directly within the component function to fetch data. This results in a runtime error because `await` must be used within an `async` function. 

**Solution:**

The solution involves wrapping the `fetch` and data processing code within an `async` function. This allows the `await` keyword to function correctly. This is demonstrated in the `pages/aboutSolution.js` file.