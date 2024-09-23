import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Opticas UI",
  description: "application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <SideBar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
