@echo off
setlocal enabledelayedexpansion
color 0A

echo ==============================================
echo      RENOMBRADOR AUTOMATICO DE FOTOS
echo      Para el regalo de tu novia <3
echo ==============================================
echo.
echo  NOTA: Este script renombrara TODAS las fotos (.jpg, .jpeg, .png)
echo  en esta carpeta y las convertira a formato .jpg
echo.

:PREGUNTA
set /p nombreMes="> Escribe el nombre del mes (ej: enero): "

if "%nombreMes%"=="" goto PREGUNTA

echo.
echo Renombrando archivos a %nombreMes%1.jpg, %nombreMes%2.jpg...
echo.

set contador=1

:: Bucle para buscar imagenes jpg, jpeg y png
for %%f in (*.jpg *.jpeg *.png *.heic) do (
    :: Evitar renombrar el propio script si por error se llama igual
    if not "%%f"=="Renombrador.bat" (
        
        :: Renombrar el archivo
        ren "%%f" "%nombreMes%!contador!.jpg"
        
        echo  - %%f  ahora es  %nombreMes%!contador!.jpg
        
        :: Aumentar el contador
        set /a contador+=1
    )
)

echo.
echo ==============================================
echo      LISTO! Se renombraron !contador! fotos.
echo ==============================================
pause