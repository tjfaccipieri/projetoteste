// @ts-ignore
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import homeImg from '../../assets/homeImg.png'
import banner from '../../assets/banner.png'

function Home() {
    const navigate = useNavigate(); // Obtenha a função de navegação

    const handleVerProdutos = () => {
        // Navegar para a rota de produtos quando o botão for clicado
        navigate('/produtos');
    }

    return (
        <>
            <div className="bg-green-900 flex justify-center">
                {/* <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo(a)</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalProduto />
                            <button className='border rounded px-4 hover:bg-white hover:text-green-800' onClick={handleVerProdutos}>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeImg} alt="" className='w-2/3' />

                    </div>
                </div> */}
                
                <div className='banner'>
                    <div className="bg-black/20 w-full sm:w-1/2 ml-auto h-full flex flex-col justify-between p-6">
                        <h2 className='font-bold text-white text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium inventore et placeat est laboriosam nulla sapiente voluptatibus quis excepturi rerum expedita vitae debitis saepe, asperiores itaque temporibus sunt ipsa!</h2>
                        <p className='font-semibold text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore quidem inventore nulla assumenda expedita optio asperiores dolor aliquid accusamus.</p>
                    </div>
                </div>
            </div>
            <ListaProdutos/>
        </>
    );
}

export default Home;
