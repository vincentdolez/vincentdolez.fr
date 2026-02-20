interface EmailLinkProps {
  className?: string;
  showAddress?: boolean;
}

export function EmailLink({ className, showAddress = false }: EmailLinkProps) {
  const email = process.env.CONTACT_EMAIL;
  if (!email) return null;

  return (
    <a href={`mailto:${email}`} className={className}>
      {showAddress ? email : "Email"}
    </a>
  );
}
