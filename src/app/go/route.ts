import { redirect } from "next/navigation";
import { AFFILIATE_URL } from "@/config/links";

export function GET() {
  redirect(AFFILIATE_URL);
}
