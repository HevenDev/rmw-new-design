import "@/app/admin.css";
import Sidebar from "@/components/sidenav/Sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin panel",
  description: "Admin panel page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="admin-layout">
          <Sidebar /> 
          <main className="admin-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
