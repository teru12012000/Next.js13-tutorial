import BlogLayout from './blog/layout';
import Head from './head';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <header>こんにちは</header>
        <BlogLayout>
          {children}
        </BlogLayout>
      </body>
    </html>
  )
}
