import type { Metadata } from "next";
import { Toaster } from "sonner";
import { assertAdminUser } from "@/lib/authorization";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Portal | MySecretGirl69 Indore",
  description: "Executive Management Portal for MySecretGirl69 Indore VIP Escorts",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let adminEmail: string | null = null;
  let adminRole: string | null = null;

  try {
    const adminUser = await assertAdminUser();
    adminEmail = adminUser.email;
    adminRole = adminUser.role;
  } catch {
    // If unauthenticated (e.g. on /admin/login), let login page render without shell
    adminEmail = null;
    adminRole = null;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Toaster richColors position="top-right" theme="light" closeButton />

      {adminEmail ? (
        <AdminShell userEmail={adminEmail} userRole={adminRole}>
          {children}
        </AdminShell>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
}
