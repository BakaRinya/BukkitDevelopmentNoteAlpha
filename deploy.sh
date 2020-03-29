set -e

#npm run build
npm run docs:build

cd docs/.vuepress/dist

echo 'alpha.tdiant.net' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/BakaRinya/BukkitDevelopmentNoteAlpha.git master

cd –
