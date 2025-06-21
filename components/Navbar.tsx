import { auth, signIn, signOut } from "@/auth";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BadgePlus, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();

  // console.log(session?.id);

  return (
    <header className='px-6 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30} />
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session.user ? (
            <>
              <Button variant='default' className='max-sm:hidden'>
                <Link
                  href='/startup/create'
                  className='flex gap-1 items-center'>
                  <span>Create</span>
                  <BadgePlus className='size-6' />
                </Link>
              </Button>

              <Link href='/startup/create' className='sm:hidden'>
                <BadgePlus className='size-6' />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}>
                <Button
                  type='submit'
                  variant='outline'
                  className='flex gap-1 items-center max-sm:hidden'>
                  <span>Logout</span>
                  <LogIn className='size-6' />
                </Button>

                <button type='submit' className='sm:hidden'>
                  <LogIn className='size-6 text-red-500' />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || "Profile picture"}
                    className='size-10 rounded-full'
                  />
                  <AvatarFallback className='text-16-semibold p-2 rounded-full ring-2'>
                    {getInitials(session?.user?.name || "AV")}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}>
              <Button type='submit' className='flex gap-1'>
                <span>Login</span>
                <LogIn className='size-6' />
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
