---
title: Antialiasing spéculaire avec la méthode de Kaplanyan et al. dans le moteur de rendu BGFX
description: Projet de master 2 encadré par Xavier Chermain. Le sujet porte sur une technique permettant de diminuer l'aliasing spéculaire dans le cas de l'utilisation de BRDF à micro-facettes pour du rendu basé physique.
date: 2020
tag: université
thumbnail:
  src: /Images/specular-antialiasing/specular-antialiasing-thumbnail.webp
  alt: Normals Filtering
github: https://github.com/cyrillajarge/specular-antialiasing
---

## Courte description

Dans le cadre de mon premier semestre de M2, j'ai choisi de travailler sur les BRDFs à microfacettes ainsi que l'antialiasing spéculaire. Le but du projet était de comprendre ces notions et d'implémenter un modèle de BRDF à micro-facette ainsi que la méthode d'antialiasing de Kaplanyan et al. [[2]](#2) dans le moteur de rendu BGFX [[1]](#1). Une interface graphique construite avec **ImGui** permet d'interagir avec les différents paramètres de la BRDF et permet aussi d'activer ou non l'antialiasing spéculaire. Pour la distribution de normales, on a le choix entre les versions isotropes et anisotropes de GGX et Beckmann. L'aliasing spéculaire peut être observé pour des valeurs de rugosité très faibles.

Le projet a été supervisé par [Xavier Chermain](http://igg.unistra.fr/People/chermain/), chercheur post-doctoral au laboratoire ICube à Strasbourg.

## Dépendances de BGFX

- https://github.com/bkaradzic/bx
- https://github.com/bkaradzic/bimg

## Utilisation

1. Récupérer **bg** ainsi que **bimg** et les mettre dans le même dossier que celui-ci.
2. Aller à la racine de ce répertoire et exécuter la commande suivante `..\bx\tools\bin\windows\genie.exe --platform=x64 --with-tools --with-examples --with-windows=10 vs2019` pour compiler tous les exemples pour Windows avec Visual Studio 2019. Consulter l'aide de `genie` pour voire comment compiler le projet si vous êtes sur une autre plateforme.
3. Le projet Visual Studio est ensuite disponible dans le dossier `.build`.

L'implémentation est faite dans un exemple nommé **xx-specular-antialiasing** dans le dossier `examples`.

## Rapport

Rapport écrit détaillé téléchargeable: <a href="\Files\Rapport_projet_150h_LAJARGE.pdf" download="rapport-antialiasing-speculaire">Rapport</a>.

## Résultats

<ins>Sans antialiasing spéculaire:</ins>  
![Résultat sans antialiasing spéculaire](/Images/specular-antialiasing/no_antialiasing.webp)
<ins>Avec antialiasing spéculaire:</ins>
![Résultat avec antialiasing spéculaire](/Images/specular-antialiasing/antialiasing.webp)

## Références

<a id="1">[1]</a>
Kaplanyan, A. S. and Hill, S. and Patney, A. and Lefohn, A. , **Filtering Distributions of Normals for Shading Antialiasing**, 2016  
<a id="2">[2]</a>
https://bkaradzic.github.io/bgfx/index.html
