import styles from './Produto.module.css'

const Produtos = ({dictProdutos}) => {
    return (
        <div className={styles.Produtos}>
            {
                dictProdutos.map((produto) => (
                    <div className={styles.unProd}>
                        <div className={styles.textosPrincipais}>
                            <p className={styles.tituloCategoria}>{produto.titulo}</p>
                            <p className={styles.subtitle}>{produto.subtitulo}</p>
                        </div>

                        <div className={styles.unCard}>
                            {
                                produto["infosProduto"].map((cardProd) => (
                                    <div className={styles.cardProd}>
                                        <img src={cardProd.imgProduto} alt="imagem do produto" className={styles.imgProduto}/>
                                        <div className={styles.textos}>
                                            <p className={styles.tituloProd}>{cardProd.tituloProduto}</p>
                                            <p className={styles.pesoProd}>{cardProd.kg}Kg/Preço</p>
                                            <p className={styles.valorProd}>R$ {cardProd.valor}</p>
                                        </div>
                                        <img src={cardProd.comprar} alt="comprar produto" className={styles.comprar}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Produtos