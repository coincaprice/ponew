import { redirect } from "next/navigation";
import { AFFILIATE_LOGIN_URL } from "@/lib/links";

export function GET() {
  redirect(AFFILIATE_LOGIN_URL);
}
