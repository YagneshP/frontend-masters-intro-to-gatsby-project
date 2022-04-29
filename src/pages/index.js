import { Link } from 'gatsby';
import * as React from 'react';

//pages are export default function component

export default function IndexPage() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link to="/about">About Page</Link>
    </main>
  );
}
