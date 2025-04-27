

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Personal Finance Visualizer</title>
        </head>
        <body className="bg-gray-100">
          {children}
        </body>
      </html>
    );
  }
  