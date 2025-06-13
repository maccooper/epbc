// src/app/layout.tsx

export const metadata = {
  title: 'Blank Next.js App',
  description: 'Starter with no boilerplate',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, backgroundColor: '#13111E', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}

