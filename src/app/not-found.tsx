"use client";
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Страница не найдена</h1>
      <p style={styles.message}>Похоже, что вы зашли на несуществующую страницу.</p>
      <Link href="/">
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#005bb5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0070f3';
            }}
          >
            Вернуться на главную
          </button>
      </Link>
    </div>
  );
}
