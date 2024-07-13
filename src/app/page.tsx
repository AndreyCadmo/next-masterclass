import Pagina from "@/components/layout/Pagina";
import { IconDashboard } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center">
        <IconDashboard size={100} stroke={0.5} className="text-zinc-500"/>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black">Olá Usuário</h1>
          <p className="text-lg text-zinc-400">Seja Bem Vindo ao Sistema!!</p>
        </div>
      </div>
    </Pagina>
  );
}
