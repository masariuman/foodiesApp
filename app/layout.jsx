import "./globals.css";
import MainHeader from "@/layout/main-header/header";

export const metadata = {
  title: "GorengGorengan",
  description: "Gorengan Enak, yang Dibagikan Oleh Komunitas Pecinta Gorengan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
