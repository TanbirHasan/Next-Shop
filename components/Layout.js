import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 rounded-md p-2 px-4"
            onClick={async () => await signIn("google")}
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen flex ">
      <Navbar/>

      <div className="bg-white flex-grow mt-1 mr-1 rounded-lg p-4 mb-2">{children}</div>
    </div>
  );
}
