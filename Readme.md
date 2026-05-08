# 2. Mantener tu rama actualizada con main !!!!!! Antes de empezar a trabajar cada día !!!! :

git checkout viktor   # o  git checkout mimi
git fetch origin
git merge origin/main

# 3. Hacer cambios y subirlos a tu rama Mimi

git add .
git commit -m "sección X tocada"
git push

# 3. Subir los cambios en main , no se hace a la vez cada uno debe actualizarse al main
git checkout main
git pull origin main
git merge viktor # o mimi
git push origin main

# 4. Dependencias
npm install next-intl

# 4. Subir la pagina en servidor
npm run build
#  Creamos el index 
out/index.html

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/es/" />
    <title>VM Agency</title>
</head>
<body></body>
</html>


npx serve out
