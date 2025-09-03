import Image from "next/image";
import styles from "./marketsection.module.css";

export default function Home() {
  return (
    <div className="cf">
      <section className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/images/bg.png" width={500} height={250} className={styles.image} alt="backgroud"/>
        </div>

        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Analises precisas</h1>
          <p className={styles.subtitle}>
            Obtenha insights poderosos, gráficos interativos e relatórios em
            tempo real para tomar decisões mais inteligentes.
          </p>
          <button className={styles.ctaButton}>Começar Agora</button>
        </div>
      </section>

      <section className={styles.containerColum}>
        <h2>Processos da Informação</h2>
        <p>
          O processo da geração de informação na plataforma passa por rotinas
          costumeiras na vida de um empreendedor.
        </p>
        <p>
          Tudo começa por uma sequência de etapas e coleta de dados em APIs que
          são frequentemente utilizadas nesse nicho; iniciando pelo Google
          Trends, onde é adquirido insight de buscas e pesquisas pelo produto
          nas sub-regiões brasileiras.
        </p>
        <p>
          Em sequência, é realizada a busca de dados sobre o mercado no IBGE
          sobre cidades, sua estimativa, densidade demográfica, faixa etária,
          economia, educação, saúde, índices de desenvolvimento etc. Aplicado
          scraping na região para saber a precificação do mesmo produto.{" "}
        </p>
        <p>
          É passado então para o estudo sobre a concorrência, analisando
          concorrentes que já atuam online. Tamanho dos concorrentes.
        </p>
        <p>
          Em seguida, passado para a etapa de conhecimento do público-alvo, são
          utilizadas bases de dados sobre consumidores, data frame deep e
          insigners da API Instagram de produtos brasileiros.
        </p>
        <p>
          Depois de tudo isso, chegado então na etapa de síntese e decisão, onde
          são realizados e cruzados dados de uma matriz SWOT, de análises
          anteriores, com atributos de força do produto, fraqueza, oportunidade
          e ameaça.{" "}
        </p>
      </section>
    </div>
  );
}
