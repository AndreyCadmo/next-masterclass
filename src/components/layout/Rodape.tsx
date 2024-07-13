import { IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
    return (
        <footer>
            <div className="flex justify-end items-center gap-2 bg-zinc-700 p-4 text-zinc-300 text-sm">
                <span>Desenvolvido com</span>
                <IconHeartFilled className="text-red-600" size={18}/>
                <span>por Andrey Cadmo - {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}