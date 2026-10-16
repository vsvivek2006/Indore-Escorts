import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    if (key && vals.length > 0) {
      process.env[key.trim()] = vals.join("=").trim();
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function createAdmin() {
  const args = process.argv.slice(2);
  const email = args[0] || "admin@mysecretgirl69.com";
  const password = args[1] || "Admin@Indore2026";

  console.log(`Creating Admin user: ${email}...`);

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    app_metadata: {
      role: "superadmin",
    },
    user_metadata: {
      full_name: "Lead Administrator",
    },
  });

  if (error) {
    console.error("Failed to create admin:", error.message);
  } else {
    console.log("✅ Admin user successfully created!");
    console.log(`- ID: ${data.user.id}`);
    console.log(`- Email: ${data.user.email}`);
    console.log(`- Role: ${data.user.app_metadata.role}`);
    console.log(`- Password: ${password}`);
    console.log("\nYou can now sign in at http://localhost:3000/admin/login");
  }
}

createAdmin().catch(console.error);
