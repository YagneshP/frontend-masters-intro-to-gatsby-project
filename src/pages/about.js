import * as React from 'react';
import { Link } from 'gatsby';
//pages are export default function component

export default function About() {
  return (
    <main>
      <h1>About Page</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}
