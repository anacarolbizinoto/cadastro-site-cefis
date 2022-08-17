import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const cursos = [
        'Curso1',
        'Curso2',
        'Curso3',
        'Curso4',
        'Curso5',
        'Curso6'
    ]

    const funcao =[
        'Aluno',
        'Professor'
    ]

    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[cargo, setCargo] = useState('')
    const[curso, setCurso] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('O cadastro foi submetido =>', nome, email, senha, cargo, curso)
    } 

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>CADASTRO</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="E-mail" 
                placeholder="Digite o seu e-mail"
                valor={email}
                aoAlterado={valor => setEmail(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Senha" 
                placeholder="Digite a sua senha"
                valor={senha}
                aoAlterado={valor => setSenha(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Aluno ou Professor" 
                itens={funcao} 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Escolha o Curso" 
                itens={cursos} 
                valor={curso}
                aoAlterado={valor => setCurso(valor)}
            />
            <Botao obrigatorio={true}>
                Inscrever-se!
            </Botao>
            </form>
        </section>
    )
}
export default Formulario