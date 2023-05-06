import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between rounded-lg overflow-hidden">
        <h2>Hello, {session.user?.name}</h2>
        <div className="flex bg-gray-300 text-black gap-1">
          <img src={session.user?.image} alt="" className="w-6 h-6 " />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
