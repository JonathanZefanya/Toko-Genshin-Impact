// app/errors/error.tsx
'use client';

import React from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff4d4f' }}>Something went wrong!</h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
