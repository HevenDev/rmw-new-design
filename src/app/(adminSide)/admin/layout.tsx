import "@/app/admin.css";
import Sidebar from "@/components/sidenav/Sidenav";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Admin panel",
  description: "Admin panel page",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();

  // Now you can access the cookies (get() works after awaiting cookies())
  const token = cookieStore.get("auth_token")?.value; // Accessing the cookie value
  return (
    <html lang="en">
      <body>
        <div className="admin-layout">
          {token && <Sidebar /> }
          <main className="admin-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}