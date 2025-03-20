// Script para corrigir caminhos de imagens
(function() {
    // Executa quando o DOM estiver carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Monitora mudanças no DOM para corrigir caminhos em elementos dinâmicos
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const el = mutation.target;
                    corrigirEstilo(el);
                } else if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Elemento
                            corrigirElementoRecursivo(node);
                        }
                    });
                }
            });
        });

        // Função para corrigir estilos de um elemento
        function corrigirEstilo(el) {
            let style = el.getAttribute('style');
            if (!style) return;
            
            // Substituir referências incorretas de caminhos de imagens
            if (style.includes('/tarkan/assets/custom/')) {
                style = style.replace(/\/tarkan\/assets\/custom\/([\\w.-]+\\.(jpg|png|gif))/g, '/img/$1');
                el.setAttribute('style', style);
            }
        }

        // Função para corrigir recursivamente elementos
        function corrigirElementoRecursivo(el) {
            corrigirEstilo(el);
            
            // Verificar filhos
            if (el.children && el.children.length > 0) {
                Array.from(el.children).forEach(corrigirElementoRecursivo);
            }
        }

        // Corrigir elementos existentes
        document.querySelectorAll('[style*="/tarkan/assets/custom/"]').forEach(corrigirEstilo);

        // Observar futuras mudanças
        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeFilter: ['style']
        });

        console.log('Correção de caminhos de imagens inicializada');
    });
})();