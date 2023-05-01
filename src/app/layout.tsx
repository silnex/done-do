export const metadata = {
  title: 'Done Do',
  description: 'A simple done-do app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
