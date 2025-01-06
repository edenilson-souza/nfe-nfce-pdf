import type { GeneratePdf } from '../../../../types';
import { MoneyMaskBR } from '../../../../utils';
import { linhaHorizontal } from './linha-horizontal';
import { linhaVertical } from './linha-vertical';
import { normal } from './normal';
import { secao } from './secao';
import { titulo } from './titulo';

export function getDadosAdicionais({
  doc,
  ajusteX,
  ajusteY,
  margemEsquerda,
  margemTopo,
  margemDireita,
  larguraDoFormulario,
  infAdic,
  extra,
  finalEspacoDet
}: GeneratePdf.InputDadosAdicionais): void {
  linhaHorizontal({ x1: 0, x2: 0, y: finalEspacoDet + 8, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
  linhaHorizontal({ x1: 0, x2: 0, y: 821.8, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
  linhaVertical({ y1: finalEspacoDet + 8, y2: 821.8, x: 0, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
  linhaVertical({ y1: finalEspacoDet + 8, y2: 821.8, x: 388.25, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
  linhaVertical({ y1: finalEspacoDet + 8, y2: 821.8, x: larguraDoFormulario, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });

  secao({ doc, value: 'DADOS ADICIONAIS', x: 1.5, y: finalEspacoDet, largura: 0, ajusteX, ajusteY, margemEsquerda, margemTopo });
  titulo({
    value: 'INFORMAÇÕES COMPLEMENTARES',
    x: 1.5,
    y: finalEspacoDet + 10,
    largura: 385.5,
    ajusteX,
    ajusteY,
    doc,
    margemEsquerda,
    margemTopo
  });
  titulo({
    value: 'RESERVADO AO FISCO',
    x: 390,
    y: finalEspacoDet + 10,
    largura: 195,
    ajusteX,
    ajusteY,
    doc,
    margemEsquerda,
    margemTopo
  });

  const informacoesComplementares = [
    infAdic.infCpl ? `Inf. Contribuinte: ${infAdic.infCpl}` : undefined,
    infAdic.infAdFisco ? `Inf. fisco: ${infAdic.infAdFisco}` : undefined,
    extra.emailDest ? `Email do Destinatário: ${extra.emailDest}` : undefined,
    extra.vTotTrib ? `Valor Aproximado dos Tributos : ${MoneyMaskBR(Number(extra.vTotTrib ?? '0'))}` : undefined
  ];

  normal({
    doc,
    value: informacoesComplementares.filter((a) => a).join(' - '),
    x: 1,
    y: finalEspacoDet + 17.5,
    largura: 386,
    alinhamento: 'justify',
    tamanho: 6,
    ajusteX,
    ajusteY,
    margemEsquerda,
    margemTopo
  });
}
