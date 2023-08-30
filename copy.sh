rm -r /var/www/briefcase/thematic-calculator/
mkdir /var/www/briefcase/thematic-calculator

mkdir /var/www/briefcase/thematic-calculator/imgs /var/www/briefcase/thematic-calculator/dist /var/www/briefcase/thematic-calculator/dist/css

mv ./imgs/* /var/www/briefcase/thematic-calculator/imgs/
mv ./dist/css/* /var/www/briefcase/thematic-calculator/dist/css/
mv ./app.js /var/www/briefcase/thematic-calculator/
mv ./index.html /var/www/briefcase/thematic-calculator/

rm -r node_modules/
