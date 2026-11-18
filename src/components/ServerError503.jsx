import React, { useEffect } from 'react';

const ServerError503 = () => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '503 Service Temporarily Unavailable';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      margin: 0
    }}>
      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          margin: '0 0 12px 0',
          color: '#222222'
        }}>
          503 Service Temporarily Unavailable
        </h1>
        <hr style={{
          border: 'none',
          borderTop: '1px solid #e5e7eb',
          margin: '20px 0'
        }} />
        <p style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#555555',
          margin: '0 0 15px 0'
        }}>
          The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.
        </p>
        <p style={{
          fontSize: '12px',
          color: '#888888',
          margin: '25px 0 0 0',
          fontFamily: 'monospace'
        }}>
          nginx/1.24.0 (Ubuntu)
        </p>
      </div>
    </div>
  );
};

export default ServerError503;
