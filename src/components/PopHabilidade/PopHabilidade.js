import { useContext, useEffect, useMemo, useState } from 'react';
import './PopHabilidade.scss'
import { IoCloseSharp } from "react-icons/io5";
import { HabilidadeContext } from '../../context/HabilidadeContext';

export default function PopHabilidade(){

    const { habilidade, setHabilidade } = useContext(HabilidadeContext);

    const [text, setText] = useState('')

    const arrayHabilidades = useMemo(()=> ({
        JavaScript: "JavaScript é uma linguagem de programação usada principalmente para criar interatividade em páginas da web. Com ela, é possível fazer animações, validar formulários, atualizar conteúdos e muito mais. Funciona dentro do navegador e é essencial para o desenvolvimento front-end, junto com HTML e CSS.",

        HTML: "HTML é a linguagem usada para estruturar o conteúdo de páginas da web. Ele organiza os elementos da página, como títulos, parágrafos, imagens, links e listas, usando tags. Por exemplo, um título é definido com <h1> e um parágrafo com <p>.",

        CSS: "CSS é a linguagem usada para definir o estilo de uma página web. Com o CSS, você pode mudar cores, fontes, tamanhos, espaçamentos, posicionamento dos elementos e deixar o site mais bonito e agradável visualmente. Ele trabalha junto com o HTML, que fornece a estrutura da página.",

        React: "React é uma biblioteca JavaScript usada para construir interfaces de usuário, especialmente em aplicações web dinâmicas. Ele permite criar componentes reutilizáveis que atualizam a tela de forma eficiente conforme os dados mudam. Isso facilita o desenvolvimento de sites interativos, rápidos e bem organizados.",
        
        Bootstrap: "Bootstrap é um framework front-end que facilita a criação de sites responsivos e bonitos. Ele fornece um conjunto de estilos prontos e componentes interativos, como botões, menus, formulários e grids, que funcionam bem em diferentes tamanhos de tela (celular, tablet, PC).",

        Sass: "Sass é uma extensão do CSS que adiciona recursos como variáveis, funções, aninhamento de regras e reutilização de código. Ele facilita a organização e manutenção de estilos em projetos grandes, gerando um CSS mais limpo e eficiente.",

        Figma: "Figma é uma ferramenta de design usada para criar interfaces de usuário, protótipos e layouts de sites e aplicativos. Ele permite que várias pessoas colaborem em tempo real, como se estivessem usando o mesmo arquivo ao mesmo tempo. É muito popular entre designers e equipes de desenvolvimento.",

        Node: "Node é uma plataforma que permite executar código JavaScript fora do navegador, geralmente no servidor. Com ele, é possível criar aplicações web completas, APIs, automações e muito mais, usando a mesma linguagem que o front-end. É leve, rápido e muito usado em projetos modernos."
    }), [])

    useEffect(()=>{
        if(habilidade){
            if(arrayHabilidades[habilidade.titulo]){
                setText(arrayHabilidades[habilidade.titulo])
            }
        }
    },[habilidade, arrayHabilidades])

    return(
        <>
            <div className='shadow' 
                style={{display: `${habilidade !== null ? 'initial': 'none'}`}}
                onClick={()=> { setHabilidade(null) }}
            ></div>

            <div className='PopHabilidade'
                style={{display: `${habilidade !== null ? 'flex': 'none'}`}}
            >
                
                <div className='closed'>
                    <IoCloseSharp className='icon'
                    onClick={()=> { setHabilidade(null) }}
                    />
                </div>

                <div className='img'>
                    <img src={habilidade && habilidade.img} alt={habilidade && habilidade.titulo}/>
                </div>

                <h1>{habilidade && habilidade.titulo}</h1>

                <p>
                    {text}
                </p>
            </div>
        </>
    )
}