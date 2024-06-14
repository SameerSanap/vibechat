"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bottom-bar ">
      <Link href="/profile">
        <img
          src={user?.profileImage || "/assets/person.jpg"}
          alt="profile"
          className="profilePhoto"
        />
      </Link>
    </div>
  );
};

export default BottomBar;
