cls
 
 

@echo off
del .git 
git init

git status

pause
git add .
git commit -m  "first commit" %RANDOM%
git branch -M master
git remote add origin https://github.com/danizalm05/js01.git
git remote -v
pause 
cls
git push -u origin master

pause