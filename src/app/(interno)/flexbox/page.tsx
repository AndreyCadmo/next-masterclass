import Caixa from "@/components/Caixa";

export default function Page() {
    return (
            <div className="flex-grow">
                <h1>FlexBox</h1>
                <div className="
               bg-zinc-700
               h-96
               flex justify-evenly
               items-start
               gap-5
               
               ">
                    <Caixa texto="#1" />
                    <Caixa texto="#2" className="flex-grow" />
                    <Caixa texto="#3" />
                </div>
            </div>
    )
}