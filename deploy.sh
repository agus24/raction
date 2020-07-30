set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/agus24/raction-publish.git
git push -f origin master

cd ..