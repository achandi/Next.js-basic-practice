import React from 'react';
import Link from 'next/link';

const user = props => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <p>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </p>
    <style jsx>
      {`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2p 3px #ccc;
          padding: 10px;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default user;
