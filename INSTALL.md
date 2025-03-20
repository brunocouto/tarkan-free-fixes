# Guia de Instalação para as Correções do Tarkan Free

## Pré-requisitos

- Docker e Docker Compose instalados e funcionando
- Sistema Tarkan Free já instalado

## Passos para Instalação

### 1. Baixar os Arquivos

Faça o download deste repositório:

```bash
git clone https://github.com/brunocouto/tarkan-free-fixes.git
```

Ou baixe como arquivo ZIP e extraia.

### 2. Copiar os Arquivos

Copie os arquivos para as pastas corretas na sua instalação do Tarkan Free:

- Arquivos de JS (`firebase-config.js`, `positions-fix.js`, `auth-fix.js`, `fix-paths.js`) para a pasta `frontend/public/js/`
- O arquivo `app-fixes.css` para a pasta `frontend/public/css/`
- O arquivo `index-template.html` deve ser renomeado para `index.html` e colocado em `frontend/public/`
- O arquivo `restart-nginx.bat` na raiz do projeto

### 3. Reiniciar o Servidor

Execute o script `restart-nginx.bat` para reiniciar o servidor Nginx e limpar os caches.

```bash
./restart-nginx.bat
```

### 4. Limpar o Cache do Navegador

Abra seu navegador e limpe o cache:

- No Chrome/Edge: `Ctrl+F5` ou `Ctrl+Shift+R`
- No Firefox: `Ctrl+Shift+R` ou `Cmd+Shift+R` (macOS)
- No Safari: `Cmd+Option+R`

### 5. Verificar Correções

Acesse a aplicação em `http://localhost` e verifique se os erros no console foram corrigidos.

## Solução de Problemas

### Se os erros persistirem:

1. Verifique se todos os arquivos foram copiados para os diretórios corretos
2. Certifique-se de que o Docker está em execução
3. Execute o script `restart-nginx.bat` novamente
4. Limpe completamente o cache do navegador ou tente em outro navegador

### Logs para Diagnóstico

Para verificar logs do Nginx:

```bash
docker-compose logs nginx
```

## Suporte

Se encontrar problemas, abra uma issue neste repositório com:

- Descrição detalhada do problema
- Capturas de tela dos erros do console
- Detalhes da sua instalação (versão do Docker, sistema operacional)