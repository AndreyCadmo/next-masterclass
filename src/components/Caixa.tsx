export default function Caixa(props: any){
    return (
        <div className={`
        flex justify-center
        items-center
        p-3 bg-red-900 rounded-md
        border-2 border-zinc-500
        ${props.className}
        `}>
            <span>{props.texto}</span>
        </div>
    )
}