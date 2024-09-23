import Image from "next/image";
import Link from "next/link";
import logoImg from "@/img/logo.svg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
      <Link href="/">
        <Image src={logoImg} alt="logo" width={40} />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="chadcn" />
            <AvatarFallback className="text-black">GR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="cursor-pointer" href="/profile">
              Perfil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link  className="cursor-pointer" href="/auth">Salir</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
