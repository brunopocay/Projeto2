export function MaskValores(valor: number): string {
  const valorFormatado = valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return valorFormatado;
}
