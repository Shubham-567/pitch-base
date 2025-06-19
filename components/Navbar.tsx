import { auth, signIn, signOut } from "@/auth";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BadgePlus, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <Link href='/startup/create'>
                <span className='max-sm:hidden'>Create</span>
                <BadgePlus className='size-6 sm:hidden' />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}>
                <button type='submit'>
                  <span className='max-sm:hidden'>Login</span>
                  <LogIn className='size-6 sm:hidden text-red-500' />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image!}
                    alt={session?.user?.name || ""}
                    className='size-10 rounded-full'
                  />
                  <AvatarFallback className='text-16-semibold p-2 rounded-full ring-2'>
                    {getInitials(session?.user?.name!)}
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
              <button type='submit'>
                <span className='max-sm:hidden'>LogIn</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
