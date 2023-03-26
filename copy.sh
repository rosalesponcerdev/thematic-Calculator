rm -r /etc/nginx/html/thematic-calculator/
mkdir /etc/nginx/html/thematic-calculator

mkdir /etc/nginx/html/thematic-calculator/imgs /etc/nginx/html/thematic-calculator/dist /etc/nginx/html/thematic-calculator/dist/css

cp -rf ./imgs/* /etc/nginx/html/thematic-calculator/imgs/
cp -rf ./dist/css/* /etc/nginx/html/thematic-calculator/dist/css/
cp -rf ./app.js /etc/nginx/html/thematic-calculator/
cp -rf ./index.html /etc/nginx/html/thematic-calculator/