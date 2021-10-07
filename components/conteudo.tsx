import { HiOutlineChevronDown } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'

const Conteudo = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-2/12 bg-gray-200 ">
        <h3 className="text-blue-500 mb-4 mt-4 ml-2 ">Saúde com agente</h3>

        <ul className="pl-4">
          <li className="text-sm mb-4">Conteúdo</li>
          <li className="text-sm mb-4">Fóruns</li>
          <li className="text-sm mb-4">Atividades</li>
          <li className="text-sm mb-4">Notas</li>
          <li className="text-sm mb-4">Mensagens</li>
          <li className="text-sm mb-4">Anotações</li>
          <li className="text-sm mb-4">Sobre este curso</li>
        </ul>
      </div>

      <div className="w-10/12 flex-wrap bg-white px-24 py-6">
        <div className="border-2">
          <IoIosClose size={24} className="inline" />
          <p className="text-blue-500 text-2xl pl-4 pt-4">Bem-Vindo</p>
          <p className="text-sm p-4">
            No Cursso Saúde com agente você aprenderá a promover saúde e
            prevenir doenças entre grupos sociais em situação de vunerabilidade,
            conectado equipes da Estratégias de Saúde da Família (ESF) à
            comunidade.
          </p>
        </div>
        <div className="">
          <ul>
            <li className="text-blue-500 text-2xl pt-4">Conteúdo</li>
            <li className="mb-4 mt-2">Módulo 1 - Epidemiologia</li>
            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 1 - Aspectos Epdemiológicos
              <HiOutlineChevronDown className="inline" />
            </li>

            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 2 - Situação atual ou perspectiva da vacinação da COVID 19
              <HiOutlineChevronDown className="inline" />
            </li>

            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 3 - Bases imunológicas
              <HiOutlineChevronDown className="inline" />
            </li>
            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 4 - Programa Nacional de imunizações
              <HiOutlineChevronDown className="inline" />
            </li>
            <li className="text-sm bg-gray-200 p-2">
              Aula 5 - Cuidade em saúde
              <HiOutlineChevronDown className="inline" />
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="mb-4 mt-4">Módulo 2 - Imunização</li>
            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 1 - Aspectos Epdemiológicos
              <HiOutlineChevronDown className="inline" />
            </li>
            <li className="text-sm bg-gray-200 p-2 mb-4">
              Aula 2 - Situação atual ou perspectiva da vacinação da COVID 19 no
              Brasil
              <HiOutlineChevronDown className="inline" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Conteudo.displayName = 'conteudo'

export default Conteudo
