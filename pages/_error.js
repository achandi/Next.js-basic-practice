import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Something Went Wrong</h1>
    <p>
      <Link href="/">
        <a>Try Going Back</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
