# Corrigir permanência das animações de entrada

## Alterações
- Aplicar `animation-fill-mode: both` à animação inicial.
- Garantir que os keyframes terminem com `opacity: 1` e `transform: none`.
- Ajustar o `IntersectionObserver` para um limiar baixo e manter elementos revelados após a primeira interseção.
- Preservar layout, conteúdo e aparência atuais.

## Validação
- Confirmar que a primeira seção permanece visível após a animação.
- Verificar que a compilação continua sem erros.
