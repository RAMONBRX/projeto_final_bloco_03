import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";


function Navbar() {
   
    return (
        <>
            
            <div className='w-full flex justify-center py-4 text-white bg-indigo-900 md:py-2'>
                <div className="container flex items-center justify-between mx-6 mt-2 text-lg">
                    
                    <Link to="/home">
                        <img
                            src="https://ik.imagekit.io/RamonBR/produtos_farmacia/logofarmacia.png"
                            alt="Logo"
                            className='w-50 md:w-60'
                        />
                    </Link>
                    
                    <div className="relative flex items-center justify-center w-2/5 text-black max-md:hidden">
                        <SearchForm/>
                    </div>

                    
                    <div className='items-center hidden gap-4 py-4 md:flex'>
                        Produtos
                        <Link to="/categorias">
                        Categorias
                        </Link>
                        <Link to="/cadastrarcategoria">
                        Cadastrar Categoria
                        </Link>
                        <UserIcon size={32} weight='bold' />
                        <ShoppingCartIcon size={32} weight='bold' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar