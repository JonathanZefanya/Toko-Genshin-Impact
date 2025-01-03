// app/errors/not-found.tsx
import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff4d4f' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <a style={{ fontSize: '1.2rem', color: '#0070f3', textDecoration: 'none' }}>
          Go back to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
