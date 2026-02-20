"use client";

import { useEffect, useState } from "react";

interface EmailLinkProps {
  className?: string;
  showAddress?: boolean;
}

export function EmailLink({ className, showAddress = false }: EmailLinkProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(["vincent", "vincentdolez.fr"].join("@"));
  }, []);

  if (!email) return null;

  return (
    <a href={`mailto:${email}`} className={className}>
      {showAddress ? email : "Email"}
    </a>
  );
}
