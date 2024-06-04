import "./globals.css";
import { Header } from './components/Header/Header'
import { Footer } from "./components/Footer/Footer";

export const metadata = {
  title: "Кроссы и точка.",
  description: "Магизин кроссовок",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
