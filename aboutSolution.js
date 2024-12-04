```javascript
// pages/aboutSolution.js

export default async function About() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json();
    return (
      <div>
        <h1>About Page</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>About Page</h1>
        <p>Error loading data.</p>
      </div>
    );
  }
}
```