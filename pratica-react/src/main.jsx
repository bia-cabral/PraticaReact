import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produtos from './components/Produtos/Produto.jsx'
import item1 from './assets/item1-cliente.png'
import item2 from './assets/item2-cliente.png'
import item3 from './assets/item3-cliente.png'
import comprarVermelho from './assets/comprar-vermelho.png'
import comprarVerde from './assets/comprar-verde.png'

const informacoes = [
  {
    "titulo": "CLIENTE +",
    "subtitulo": "promo",
    "cor": "vermelho",
    "infosProduto": [
      {
        "imgProduto": item1,
        "tituloProduto": "Item 1",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVermelho
      },
      {
        "imgProduto": item2,
        "tituloProduto": "Item 2",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVermelho
      },
      {
        "imgProduto": item3,
        "tituloProduto": "Item 3",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVermelho
      },
    ]
  },
  {
    "titulo": "OUTROS",
    "subtitulo": "saudável",
    "cor": "verde",
    "infosProduto": [
      {
        "imgProduto": item1,
        "tituloProduto": "Item 1",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVerde
      },
      {
        "imgProduto": item2,
        "tituloProduto": "Item 2",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVerde
      },
      {
        "imgProduto": item3,
        "tituloProduto": "Item 3",
        "kg": "1",
        "valor": "000.000",
        "comprar": comprarVerde
      },
    ]
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produtos dictProdutos={informacoes}/>
  </StrictMode>,
)
