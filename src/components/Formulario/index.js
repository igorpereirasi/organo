import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o caro do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite sua Imagem"/>
            </form>
        </section>
    )
}

export default Formulario