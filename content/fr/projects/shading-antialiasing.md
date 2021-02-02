---
title: Specular Antialiasing using Kaplanyan et. al method with BGFX rendering library
description: Projet de master 2 encadré par Xavier Chermain. Le sujet porte sur une technique permettant de diminuer l'aliasing spéculaire dans le cas de l'utilisation de BRDF à micro-facettes pour du rendu basé physique.
date: 2020
thumbnail:
  src: /Images/specular-antialiasing/specular-antialiasing-thumbnail.webp
  alt: Normals Filtering
github: https://github.com/cyrillajarge/specular-antialiasing
---

## Short description

As part of my master's second-year first semester project, I chose to work on specular antialiasing and microfacets BRDFs. The goal of the project was to understand what those are and to implement a microfacets BRDF with the rendering library BGFX [[1]](#1) as well as Kaplanyan et al. [[2]](#2) method for specular antialiasing. A graphical user interface built with ImGui allows the interaction with different parameters of the BRDF and also allows to activate or not the specular antialiasing. For the distribution of normals, you have the choice between isotropic and anisotropic versions of GGX and Beckmann. The specular aliasing can be observed for low roughness values.

The project was supervised by [Xavier Chermain](http://igg.unistra.fr/People/chermain/), a post-doctoral researcher at ICube Laboratory in Strasbourg.

## BGFX Dependencies

- https://github.com/bkaradzic/bx
- https://github.com/bkaradzic/bimg

## How to use

1. Get **bg** as well as **bimg** and put them in the same directory as this repository.
2. Go to the root of bgfx directory and run the command `..\bx\tools\bin\windows\genie.exe --platform=x64 --with-tools --with-examples --with-windows=10 vs2019` to build all examples for Windows with Visual Studio 2019. Consult the help of `genie` to see how to build the project if you are on another platform.
3. The Visual Studio project is then available under the `.build` directory.

The implementation is done in an example called **xx-specular-antialiasing** in `examples`.

## Report

Downloadable written detailed report (in french): <a href="\Files\Rapport_projet_150h_LAJARGE.pdf" download="report-specular-antialiasing">Report</a>.

## Results

<ins>Without specular antialiasing:</ins>

![Result without specular antialiasing](/Images/specular-antialiasing/no_antialiasing.webp)

<ins>With specular antialiasing:</ins>

![Result with specular antialiasing](/Images/specular-antialiasing/antialiasing.webp)

## References

<a id="1">[1]</a>
Kaplanyan, A. S. and Hill, S. and Patney, A. and Lefohn, A. , **Filtering Distributions of Normals for Shading Antialiasing**, 2016  
<a id="2">[2]</a>
https://bkaradzic.github.io/bgfx/index.html
