import { redirect } from "next/navigation";
import { AFFILIATE_LOGIN_URL } from "@/config/links";

export function GET() {
  redirect(AFFILIATE_LOGIN_URL);
}
