import { NextResponse } from "next/server";
import { createSessionClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createSessionClient();
    await supabase.auth.signOut();
  } catch {
    // Continue redirect even if sign out errors
  }

  const url = new URL("/admin/login", request.url);
  return NextResponse.redirect(url, { status: 302 });
}
