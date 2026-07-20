import styles from "./index.module.css";

import {
    History,
    BookOpen,
    Clock3,
    PenTool,
    Trophy,
    Star,
    ArrowRight,
    MoreVertical,
} from "lucide-react";

const cards = [
    {
        icon: <BookOpen color="#61a6fa"/>,
        titulo: "Livros lidos",
        valor: "48",
        mes: "+5 este mês"
    },
    {
        icon: <Clock3 color="#b05cff"/>,
        titulo: "Horas de leitura",
        valor: "126h",
        mes: "+18h este mês"
    },
    {
        icon: <PenTool color="#4ade80"/>,
        titulo: "Obras escritas",
        valor: "7",
        mes: "+2 este mês"
    },
    {
        icon: <Trophy color="#ffdb0c"/>,
        titulo: "Conquistas",
        valor: "24",
        mes: "+4 este mês"
    },
    {
        icon: <Star color="#2ea9ff"/>,
        titulo: "XP acumulado",
        valor: "24.850",
        mes: "+2.450 este mês"
    },
];

const livros = [
    {
        capa:"img/duna.jpg",
        nome:"Duna",
        autor:"Frank Herbert",
        genero:"Ficção Científica",
        paginas:"688 páginas",
        data:"12/05/2024",
        nota:"★★★★★"
    },
    {
        capa:"img/jogos.jpg",
        nome:"Jogos Vorazes",
        autor:"Suzanne Collins",
        genero:"Aventura",
        paginas:"374 páginas",
        data:"05/05/2024",
        nota:"★★★★☆"
    }
];

function Historico(){

    return(

        <div className={styles.container}>

            <div className={styles.header}>

                <History/>

                <div>

                    <h1>Histórico</h1>

                    <p>
                        Revise sua jornada, celebre conquistas e continue evoluindo.
                    </p>

                </div>

            </div>

            <section className={styles.cards}>

                {cards.map((card,index)=>(
                    <div key={index} className={styles.card}>

                        {card.icon}

                        <span>{card.titulo}</span>

                        <h2>{card.valor}</h2>

                        <p>{card.mes}</p>

                    </div>
                ))}

            </section>

            <div className={styles.titleSection}>

                <h2>Histórico de Leituras</h2>

                <button>

                    Ver todas

                    <ArrowRight size={18}/>

                </button>

            </div>

            <section className={styles.listaLivros}>

                {livros.map((livro,index)=>(

                    <div className={styles.livro} key={index}>

                        <img src={livro.capa}/>

                        <div className={styles.info}>

                            <h3>{livro.nome}</h3>

                            <p>{livro.autor}</p>

                            <span className={styles.genero}>
                                {livro.genero}
                            </span>

                            <small>{livro.paginas}</small>

                        </div>

                        <div className={styles.progresso}>

                            <p>Concluído em {livro.data}</p>

                            <div className={styles.barra}>

                                <div className={styles.preenchimento}></div>

                            </div>

                            <span>100%</span>

                        </div>

                        <button className={styles.botao}>
                            Ver resumo
                        </button>

                        <div className={styles.nota}>
                            {livro.nota}
                        </div>

                        <MoreVertical/>

                    </div>

                ))}

            </section>

        </div>

    )

}

export default Historico;