"use client";

import { useAccount } from "@/components/JazzAndAuth";

export function Nav() {
  const { me, logOut } = useAccount();
  return (
    <nav className="mx-auto flex max-w-4xl justify-between p-6 px-4">
      <div>Jazz Book Shelf</div>
      <div className="flex items-center gap-2">
        <p>{me?.profile?.name}</p> · <button onClick={logOut}>Log out</button>
      </div>
    </nav>
  );
}
