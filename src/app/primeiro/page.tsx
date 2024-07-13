import Pagina from "@/components/layout/Pagina"
import Link from "next/link"

export default function Page() {
    const raio = 4.5
    const PI = 3.14159

    const titulo = <div>
        <h1>Primeiro Componente</h1>
        <h2>Assuntos importantes para o primeiro componente</h2>
    </div>

    function anoAtual() {
        return new Date().getFullYear()
    }

    function gerarUmaLista() {
        return (
            <ul className="pl-12 list-disc">
                <li>João</li>
                <li>Maria</li>
                <li>José</li>
            </ul>
        )
    }

    return (
        <Pagina>
            <div>
                {titulo}
                <Link href={"/"}>Home</Link>
                <div className="flex flex-col">
                    <span>{1 + 1}</span>
                    <span>{Math.random()}</span>
                    <span>{anoAtual()}</span>
                    <span>{gerarUmaLista()}</span>
                </div>
            </div>
        </Pagina>
    )
}