import "./globals.css";

export const metadata = {
  title: "Done Do",
  description: "A simple done-do app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="container">
          <div className="flex h-screen justify-center items-center">
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
