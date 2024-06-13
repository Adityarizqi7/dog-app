import { Inter } from "next/font/google";
import {Providers} from "src/app/provider";
import NextTopLoader from 'nextjs-toploader';

import Navigation from "./components/header/Navigation";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css"

export const metadata = {
  title: {
    template: " %s | Dogs World",
    default: "Dogs World"
  },
  description: "Dogs World Application",
};

export default function RootLayout({ children }) {
  return (
    <html>
        <body className={inter.className}>
          <NextTopLoader />
          <Providers>
            <section id="app">
              <Navigation />
              <main className="sm:mt-10 mt-8">
                  {children}
              </main>
              <footer className="text-center mt-10 py-8 border-t border-solid border-gray-300/80">
              © { new Date().getFullYear() } Dogs World. All Rights Reserved.
              </footer>
            </section>
          </Providers>
        </body>
    </html>
  );
}
