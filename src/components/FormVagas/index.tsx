import { FormEvent, useState } from 'react'

import { Vagas, BotaoPesquisa, Pesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Vagas onSubmit={aoEnviarForm}>
      <Pesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa>Pesquisar</BotaoPesquisa>
    </Vagas>
  )
}
export default FormVagas
