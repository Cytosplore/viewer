---
layout: post
title:  "Map Viewer"
date:   2018-06-05
category: startingup
permalink: /documentation/mapviewer
---

![map viewer image][mapviewer_image]{:width="453px"}
The Map Viewer is designed for interactive exploration of tSNE submaps at
the single cell level, with the following features:

-   Metadata on each cell can be viewed by scrolling with the mouse
    wheel while hovering over the Metadata text box. This will bring up
    a legend box with the metadata items in that particular submap.

-   tSNE maps can be recomputed on the fly, and paused during
    computation for detail inspection and analysis. Note that linear
    structures during A-tSNE computation with exponential force decay
    have been shown to suggest differentiation pathways and lineage
    relations \[5\].

-   Expression of an arbitrary gene can be painted in the map by
    starting to type the gene name in the expression text box, and
    selecting the target gene from the drop down menu.

-   Hovering over a cell brings up an information panel with the detail
    metadata on each nucleus.
	
	
[mapviewer_image]: {{ site.baseurl }}/assets/images/Overview/mapviewer.png "Map Viewer"