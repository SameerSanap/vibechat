import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <form>
      <button onClick={handleLogout}>Sign out</button>
    </form>
  );
}
