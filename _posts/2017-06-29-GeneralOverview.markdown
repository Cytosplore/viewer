---
layout: post
title:  "General Overview"
date:   2017-06-29
category: faq
permalink: /documentation/generaloverview
---
The graphical user interface of Cytosplore MTG Viewer consists of three
main components: A) the Hierarchy Viewer, B) the Map Viewer and C) the
Differential Expression Viewer.

<img src="/assets/images/Overview/image1.png" style="width:6.5in;" />

# Navigating the Hierarchy Viewer


Clicking on a submap in the Hierarchy Viewer activates the submap in the
Map Viewer. Upon zooming in on a submap with shift-left click, the
submap of interest will be opened in the center of the ring, with its
children in the outer rings. This gives individual clusters in the
submap more space along the ring and an easier inspection of the cluster
specific gene expression in the gray panels.

<img src="/assets/images/Overview/image4.png" style="width:6.5in;" />

In the top-left, there are two navigation aids that show where the
current map is situated in the hierarchy:

<img src="/assets/images/Overview/image5.png" style="width:6.5in" />

1.  A pictogram of the full hierarchy wheel. In blue the current zoom
    trace is displayed from the overview map to the currently active sub
    map in the center of the ring. Left-clicking in the small gray
    panels in the wheel pictogram will zoom into the segment of
    interest.

2.  A “breadcrumb trace” that displays the trace to the overview map
    (root node of the hierarchy), and the names of the submaps along the
    trace. Clicking on the trace arrows opens to the corresponding
    submap.

Both these tools can be used to zoom out to the overview level as well.

The color panels along the ring represent pre-specified clusters of
cells, based on the AIBS clustering and color convention. Hovering over
the ring segments shows the cluster name, and clicking on the segment
selects the cells in the cluster. The gray panels enable a quick
exploration of genes with localized expression in the corresponding
cluster. The panels are sorted by locality score Beta, and clicking on a
gray panel activates the corresponding submap colored by the expression
of that particular gene. Note that the genes in the ring are drawn from
the gene subsets that were used to compute the submap. Exploration of
the full feature set is possible from the differential expression viewer
(see page 7).  

# Map Viewer

<img src="/assets/images/Overview/image6.png" style="width:6.5in;" />The
Map Viewer is designed for interactive exploration of tSNE submaps at
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

# Differential Expression Viewer


The Differential Expression Viewer is designed to mine the full feature
set for differential expression between either one selection of cells
and all other cells, or between two selections of cells.

There are three methods to select cells / nuclei:

-   Manual drawing of cell selections in the Map Viewer (Left-click and
    drag).

-   Clicking on a colored ring segment in the hierarchy viewer selects
    the cells in that cluster / preset.

-   Using the metadata legend in the map viewer: clicking on a metadata
    item in the legend selects the corresponding cells.

Selections can be emptied by left-clicking in an empty space in the map
viewer. By default selections are stored in selection 1. Pressing the
left-alt key while performing these actions will fill selection 2.

<img src="/assets/images/Overview/image7.png"  />

Once the selections are set, clicking the Compute Differential
Expression button will compute differential expression statistics over
the full feature set and will fill the table.

The default behavior for the differential expression viewer is as
follows:

-   If a selection 1 and a selection 2 exist, they are contrasted
    against each other.
-   Differential expression and Beta are only computed if a gene is
    expressed in at least 5 cells in each selection, and otherwise set
    to 0.
-   P-values for differential expression are computed if a gene is
    expressed in at least 10 cells in each selection using the
    Wilcoxon rank-sum test, or otherwise set to 1.
-   P-values are corrected for multiple testing through Bonferroni
    correction.
-   Compute times may increase with larger selections.

Once the differential expression computation has finished, the analysis
results can be explored as follows:

-   ***Gene expression coloring*** ***in the map view*** can be
    performed by clicking on a gene name in the left column. This will
    display the expression of the selected gene in the Map View
-   ***Gene sorting*** can be performed by left-clicking on the sorting
    variable names at the top of each column. Left clicking again will
    sort the variable in reverse order. The columns can be reordered
    by clicking on the column name, and dragging it to a new position
    in the table.
-   ***Gene filtering*** can be performed to reduce the number of listed
    genes by typing gene symbol characters in the “Filter by gene
    symbol” field.
-   ***Cell selections*** can be inspected, loaded from file or saved
    through a separate tab “Selected Cells”.
-   ***Result export*** can be achieved through the clipboard by
    right-clicking on the result table, or by pressing the “save”
    button.

For an instructional video highlighting the user interface
functionality, see: viewer.cytosplore.org

# Context-sensitive user interactions


<img src="/assets/images/Overview/image3.png" style="width:6.5in" />

# General functions to organize views


The default organization of the different views can be customized by
clicking and dragging on the top bar of each view. The organization of
the windows can be cusomized as follows:

-   **Move a view within the application window:** drag and drop within
    the application window will reorganize the other views. Dropping the
    view in the middle of another view will add it as a tab to the
    target view.
-   **Resize a view:** each of the views can be resized by moving the
    mouse over the boundary of the view: arrows appear, and the border
    can be dragged to resize the view.
-   **Dock a view outside of the application:** drag and drop to a
    location outside of the application window will float the view as a
    separate window, while maintaining the interactive links to all
    other views. This can be convenient for instance on a PC with two
    screens: views can be docked to a second screen.
-   **Close a view:** a view can be closed by clicking the X in the
    right upper corner of each view.
-   **Retrieve a closed view:** each view can be retrieved by
    right-clicking on the top bar of a view: this will bing up a list of
    views that can be toggled on or off. See below for an example.

    <img src="/assets/images/Overview/image8.png" style="width:6.5in" />

# Personal Settings

Personal default settings for t-SNE (such as the number of iterations)
and visualization options (e.g. for the scatter plot) of Cytosplore MTG
Viewer can be customized through the Cytosplore.ini file located in the
program folder. Documention regarding the settings can be found in the
ini fie.