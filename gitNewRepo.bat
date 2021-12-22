cls
 
 

@echo off
del .git 
git init
git remote add origin https://github.com/danizalm05/js01.git
git remote -v
git status

pause
git add .
git commit -m   %RANDOM%
git  
git push -u origin master

pause