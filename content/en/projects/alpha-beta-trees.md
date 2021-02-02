---
title: Alpha-Omega Connected Components of an image for image segmentation
description: Image segmentation using alpha-beta trees in collaboration with Simon Lucas as part of my Master 2 course on image processing and discrete geometry.
date: 2018
thumbnail:
  src: /Images/alpha-beta-segmentation/alpha-beta-segmentation.webp
  alt: Normals Filtering
github: https://www.github.com
---

## Short description

This project is about image segmentation using alpha-beta trees. I worked on this project in collaboration with [Simon Lucas](http://www.simon-lucas.fr) as part of my Master 2 course on image processing and discrete geometry. The algorithm implemented is based on the one described in the following paper [[1]](#1).

## Python libraries

- numpy
- matplotlib
- queue

## How to use

`python alphatree.py [input-file-path](optional) [alpha] [omega]`  
Outputs are rendered in the output directory and have the same name of the input file with an additional information about the values used for α and ω.

## Definition

Two pixels p and q in an image are (α,ω)-related if there exists a path of neighborhood 4 between those pixels and all pairs of consecutive pixels of this path have a range <= α. Furthermore, the range between all the pixels of the path must be <= ω.  
A single pixel is (α,ω)-related to itself.  
The **(α,ω)-connected component** of a pixel p is the largest αi connected component of p such that αi <= α and the range of this connected component is <= ω.

## Files

- `alphatree.py`, main function and (α,ω)-connected component labelling algorithm
- `helpers.py`, auxilary functions
- `images.py`, test image from figure 2 of the paper [[1]](#1)

## Results

Figure 2 of the paper :

![Article Image Output](/Images/alpha-beta-segmentation/__test_3_3_CC.webp)

circles.png :

![Circles Output](/Images/alpha-beta-segmentation/circles_150_150_CC.webp)

coloured_Voronoi_3D_slice.png :

![Voronoi Output](/Images/alpha-beta-segmentation/Coloured_Voronoi_3D_slice_4_4_CC.webp)

road.jpg :

![Road Output](/Images/alpha-beta-segmentation/road_150_150_CC.webp)

field2.jpg :
![Field Output](/Images/alpha-beta-segmentation/field2_70_70_CC.webp)

## References

<a id="1">[1]</a>
Pierre Soil, **Constrained Connectivity for Hierarchical Image Partitioning and Simplification**, 2008
