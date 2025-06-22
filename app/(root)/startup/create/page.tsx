import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const page = () => {
  const session = auth();

  if (!session) redirect("/");

  return (
    <>
      <div className='heading_container !min-h-[230px]'>
        <h1 className='heading'>Submit your startup</h1>
      </div>

      <StartupForm />
    </>
  );
};

export default page;
