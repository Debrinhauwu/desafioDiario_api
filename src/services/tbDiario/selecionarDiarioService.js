import { selecionarDiario } from "../../repository/diarioRepository.js";

export default async function selecionarDiarioService(){
  let registros = selecionarDiario()
  return registros
}