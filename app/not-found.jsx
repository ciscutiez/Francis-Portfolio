import { Crimson_Text } from "next/font/google";
import Link from "next/link";
import React from "react";

const CrimsonTextFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function NotFound() {
  return (
    <main className={`${CrimsonTextFont.className} text-center`}>
      <h2 className="pt-[280px] text-4xl">There was a problem</h2>
      <p className="pt-[30px] text-[20px]">
        We could not found the page you were looking for.
      </p>
      <p className="text-[20px]">
        Go back to the
        <Link href="/" className="pl-[3px] text-[#2f3696] underline">
          Homepage
        </Link>
      </p>
    </main>
  );
}
