# Usa uma imagem com servidor Nginx
FROM nginx:alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia seus arquivos para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acessar via navegador
EXPOSE 80
