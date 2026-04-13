import { useEffect, useState } from 'react'
import {  RingLoader } from 'react-spinners'

import { listar } from '../../../services/Service'
import type Produto from '../../../model/Produto'
import CardProdutos from '../cardprodutos/CardProdutos'



function ListarProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarProdutos() {
		setIsLoading(true)

		try {
			await listar('/produtos', setProdutos)
		} catch {
			alert('Erro ao listar todos os Produtos!')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		buscarProdutos()
	}, [produtos.length])

	return (
		<>
			{isLoading && (
				<RingLoader
					color="#312C85"
					size={80}
					speedMultiplier={2}
					aria-label="Ring-loading"
					className="mx-auto my-28"
				/>
			)}
			<div className="flex justify-center mt-6 md:mt-8">
				<div className="container flex flex-col m-2 md:my-0">
					{!isLoading && produtos.length === 0 && (
						<span className="my-8 text-3xl text-center">
							Nenhum produto foi encontrado
						</span>
					)}

					<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
						{produtos.map((produto) => (
							<CardProdutos
								key={produto.id}
								produto={produto}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarProdutos