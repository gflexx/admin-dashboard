import Link from "next/link";
import React from "react";
import logo from "../../assets/Group 1686551587.svg";
import profileImg from "../../assets/1681073508132.jpg";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-3 px-5 flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" width={15} className="rounded-full" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src={profileImg.src} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="account">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="subscription">Subscriptions</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="auth">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
