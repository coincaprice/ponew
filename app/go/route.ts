import { redirect } from "next/navigation";
import { AFFILIATE_URL } from "@/lib/links";

export function GET() {
  redirect(AFFILIATE_URL);
}
