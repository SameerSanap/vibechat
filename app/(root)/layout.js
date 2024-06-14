import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import TopBar from "@components/TopBar";
import BottomBar from "@components/BottomBar";
import SideBar from "@components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VibeChat",
  description: "A Next.js 14 Chat App ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-600 via-indigo-400 to-indigo-200
          `}
      >
        <Provider>
          <TopBar />
          <div className="grid md:grid-cols-[15rem_1fr] gap-9 ">
            <SideBar />
            {children}
          </div>
          <BottomBar />
        </Provider>
      </body>
    </html>
  );
}
