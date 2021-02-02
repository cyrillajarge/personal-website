---
title: Alpha-omega composantes connexes d'une image pour la segmentation d'images
description: Segmentation d'image en utilisant des arbres alpha-beta en collaboration avec Simon Lucas dans le cadre de mon cours de M2 sur le traitement d'image et la géométrie discrète.
date: 2020
tag: université
thumbnail:
  src: /Images/alpha-beta-segmentation/alpha-beta-segmentation.webp
  alt: Normals Filtering
github: https://github.com/cyrillajarge/alpha-beta-segmentation
---

## Courte description

Ce projet porte sur la segmentation d'images à partir d'arbres alpha-beta. J'ai travaillé sur ce project en collaboration avec [Simon Lucas](http://www.simon-lucas.fr) dans le cadre de mon cours de traitement d'image et géométrie discrète de mon master 2. L'algorithme implémenté est basé sur celui présenté dans le papier suivant [[1]](#1).

## Librairies python

- numpy
- matplotlib
- queue

## Utilisation

`python alphatree.py [input-file-path](optional) [alpha] [omega]`  
Les sorties sont enregistrées dans le dossier `Outputs` et ont le même nom que le fichier en entrée suivante d'un suffixe contenant des informations sur les paramètres utilisés telle que les valeurs de α et ω.

## Définition

Deux pixels p et q dans une image sont (α,ω)-connexes s'il existe un chemin de voisinage 4 entre ces deux pixels et toutes les paires consécutives de pixels de ce chemin ayant une différence <= α. De plus, la différence entre tous les pixels du chemin doit être <= ω.  
Un pixel unique est par définition (α,ω)-connexe à lui-même.  
Les **(α,ω) composantes connexes** d'un pixel p est la plus grande αi composante connexe de p de telle manière que αi <= α et la différence entre les pixels de cette composante connexe est <= ω.

## Files

- `alphatree.py`, fonction main et algorithme de labélisation des (α,ω) composantes connexes.
- `helpers.py`, fonctions auxiliaires.
- `images.py`, image de teste de la figure 2 du papier [[1]](#1)

## Résultats

Figure 2 du papier :

![Résultat image article](/Images/alpha-beta-segmentation/__test_3_3_CC.webp)

circles.png :

![Résultat Circles](/Images/alpha-beta-segmentation/circles_150_150_CC.webp)

coloured_Voronoi_3D_slice.png :

![Résultats Voronoi](/Images/alpha-beta-segmentation/Coloured_Voronoi_3D_slice_4_4_CC.webp)

road.jpg :

![Résultats Road](/Images/alpha-beta-segmentation/road_150_150_CC.webp)

field2.jpg :
![Résultat Field](/Images/alpha-beta-segmentation/field2_70_70_CC.webp)

## Références

<a id="1">[1]</a>
Pierre Soil, **Constrained Connectivity for Hierarchical Image Partitioning and Simplification**, 2008
