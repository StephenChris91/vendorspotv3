import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/nav'
import { AuthProvider } from "@/components/authprovider"; 
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vendorspot",
  description: "Buy, Sell, Anything, Anywhere",
};

export const revalidate = 0;


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = createServerComponentClient({ cookies });

  const { data: { session } } = await supabase.auth.getSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <AuthProvider accessToken={session?.access_token}>
          {children}
        </AuthProvider>
        </body>
    </html>
  );
}
