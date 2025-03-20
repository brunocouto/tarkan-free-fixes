@echo off
echo Reiniciando o servidor Nginx...

echo Verificando se o Docker está em execução...
docker info > nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Docker não está em execução. Inicie o Docker e tente novamente.
    pause
    exit /b 1
)

echo Limpando o cache do nginx...
docker-compose exec nginx rm -rf /var/cache/nginx/*

echo Reiniciando o servidor Nginx...
docker-compose restart nginx

if %errorlevel% neq 0 (
    echo ERRO: Falha ao reiniciar o Nginx. Verifique o status do Docker.
    pause
    exit /b 1
) else (
    echo Servidor Nginx reiniciado com sucesso!
    echo.
    echo Para acessar a aplicação, abra o navegador em http://localhost
    echo Limpe o cache do navegador se necessário (Ctrl+F5)
)

pause