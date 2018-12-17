---
layout: post
title:  "Advanced Settings"
date:   2018-06-13
category: startingup
permalink: /documentation/advancedsettings
---
Cytosplore Viewer allows to define a few advanced (default) settings, for example for the A-tSNE computation (such as the number of iterations) and visualization options (e.g. point size for the scatter plots, highlighting mode).
These defaults can be customized through the Cytosplore.ini file located in the program folder.

```
; lines with a preceding ; are comments
[section headers] are marked with square brackets

[tsne]
; the number of iterations for the A-tSNE gradient descent
iterations=300
; the A-tSNE gradient descent has three phases, in the first the forces are exaggerated to achieve quicker 'pre-sorting' of the points. exaggerationItererations sets the number of iterations for this phase
exaggerationItererations=100
; in the second phase the axagerated forces are gradually removed. exponentialDecay sets the number of iterations for this phase. The third phase resembling regular t-SNE starts after exaggerationItererations + exponentialDecay iterations.
exponentialDecay=70
; The perplexity (i.e. the local neighborhood to consider) for the A-tSNE
perplexity=30

[statistics]
; the minimum number of expression values required for beta and differential mean computations
minimumSizeThreshold=5
; the minimum number of expression values required to rank-sum test
rankSumThreshold=10
; threshold value for beta computation
betaValueThreshold=1.0
; turn the progress bar on or off
showProgressBar=1;

[sliderSettings]
; the relative point size in the map viewer
pointSize=110
; the relative size ofthe halos around the points for highlighting in the map viewer
haloSize=40
; the opacity of the points in the map viewer (0% to 100%)
pointOpacity=60
; toggle for different modes of the 'hide selection' toggle
hideSelection=0

[hierarchy]
; the number of beta and differential expression values shown in the hierarchy view per cluster
nrOfExpressions=10
```
