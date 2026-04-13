import { Link } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";


interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800  text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
            <div className="flex bg-indigo-800 items-center justify-center gap-2 py-2">
                <Link to={`/editarcategoria/${categoria.id}`} >
                   <PencilIcon size={32} color="#F7F7F7" className="hover:cursor-pointer"/>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}>
                    <TrashIcon size={32} color="#F7F7F7" className="hover:cursor-pointer" />
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;