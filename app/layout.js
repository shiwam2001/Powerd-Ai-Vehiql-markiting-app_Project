import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/createComp/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "vehiql-app",
  description: "Generated by his coder",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

   

      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />

          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className=" mx-auto text-xl px-4 text-gray-600 text-center">
              <p>Made with ❤️ by Shiwam</p>
            </div>
          </footer>
        </body>
      </html>
      </ClerkProvider>
  );
}
