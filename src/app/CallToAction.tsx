"use client";

import Link from "next/link";

const CallToAction = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <button className="px-8 py-4 bg-solarized-blue text-solarized-light rounded-lg font-semibold text-lg text-center hover:bg-opacity-90 transition">
        {text}
      </button>
    </Link>
  );
};

export default CallToAction;
