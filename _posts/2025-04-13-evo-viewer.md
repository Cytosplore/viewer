---
layout: post
title: "Evo Viewer"
date: 2025-04-13
category: views
permalink: /documentation/evoviewer
---

<link rel="stylesheet" href="/assets/css/tutorial.css" type="text/css">
<link rel="stylesheet" href="/assets/fontawesome/css/fontawesome.min.css" type="text/css"/>

Welcome to the **<span class="cytosplore-gradient-text"><a href="https://viewer.cytosplore.org/" target="_blank">Cytosplore EvoViewer</a></span>** tutorial! Follow the structured steps below to unlock the full potential of EvoViewer.

_This tutorial requires the <span class="cytosplore-gradient-text"><a href="https://viewer.cytosplore.org/" target="_blank">Cytosplore Viewer</a></span> installer which can be downloaded from <span class="cytosplore-gradient-text"><a href="https://viewer.cytosplore.org/#get" target="_blank">here</a></span>._

---

<div class="header-controls">
  <h2 class="tutorial-header">Tutorial Sections</h2>
  <div class="expand-collapse-controls">
    <button id="expand-all" class="control-button">Expand All</button>
    <button id="collapse-all" class="control-button">Collapse All</button>
  </div>
</div>

<details>

<summary class="section-header">
  <span class="icon"><i class="fas fa-project-diagram"></i></span>
   <span class="arrow"></span>Exploring cell types
</summary>

To start exploring the dataset, cells can be selected and analyzed at different levels of the taxonomy.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the cell type rectangles in the cell type hierarchy to select a cell type.<br>
    <i class="fas fa-hand-point-right instruction-icon"></i> Press shift and click on the cell type rectangles in the cell type hierarchy to select multiple cell types.<br>
    <i class="fas fa-hand-point-right instruction-icon"></i> The selected cells will be highlighted in the scatterplot.
  </div>
  <details class="demo-details">
    <summary> Watch how to select cells from the hierarchy</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/select_cells_hierarchy.gif" alt="Select cells from the hierarchy" class="demo-gif">
  </details>
</div>

Zooming in and out of the Hierarchy

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Press Ctrl and click on a cell type rectangle to zoom in.<br/>
  </div>
  <details class="demo-details">
    <summary> Watch how to zoom in</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/zoom_in_hierarchy.gif" alt="Zoom into the hierarchy" class="demo-gif">
  </details>
    <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Press Ctrl and click on a parent cell type rectangle to zoom out.
  </div>
  <details class="demo-details">
    <summary> Watch how to zoom out</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/zoom_out_hierarchy.gif" alt="Zoom out of the hierarchy" class="demo-gif">
  </details>
</div>

Free-Form Selection in Scatterplot

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Cells can also be selected from the scatterplot. <br/> 
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <i class="fas fa-arrow-pointer instruction-icon"></i>in the scatterplot options to access the selection settings.
  </div>
  <details class="demo-details">
    <summary> Watch how to make free-form selections</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/free_form_selection_scatterplot.gif" alt="Free form selection in scatterplot" class="demo-gif">
  </details>
</div>

</details>

<details>

<summary class="section-header">
  <span class="icon"><i class="fas fa-dna"></i></span>
   <span class="arrow"></span>Analyzing Gene and cell type characteristics
</summary>

Analyze the characteristics of genes and cell types to gain deeper insights into the dataset.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <div class="button-text">Update</div> to compute the cell and gene type characteristics of the selected cells.
  </div>
  <details class="demo-details">
    <summary> Watch how to compute characteristics</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/compute_characteristics.gif" alt="Compute gene and cell type characteristics" class="demo-gif">
  </details>
</div>

Customizing Options

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Modify <div class="button-text">N Type</div> to change the type of differential expression calculation. 
    <div class="info-text">
    Options include: <div class="button-text">Positive</div> (mean expression in selected cells minus non-selected cells), <div class="button-text">Negative</div> (the same value but negated), and <div class="button-text">Absolute</div> (the absolute value of the difference).
    </div>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <i class="fas fa-hand-point-screwdriver-wrench"></i> and toggle <div class="button-text">Gene mapping log</div> to get  differential expression values on a log scale. 
  </div>
  <details class="demo-details">
    <summary> Watch how to modify options</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/modify_options.gif" alt="Modify computation options" class="demo-gif">
  </details>
</div>

</details>

<details>
<summary class="section-header">
  <span class="icon"><i class="fas fa-chart-bar"></i></span>
   <span class="arrow"></span>Comparing cell abundance across species
</summary>

Compare the abundance of cell types across species.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Species can be sorted by abundance in the table view by clicking on the table headers.
    <div class="info-text">
    Abundance options include: <div class="button-text">Absolute</div> (Count of selected and Count of all cells per species), and <div class="button-text">Relative</div> (Computed relative to a parent cell type, e.g., Neuronal, GABAergic, or Glutamatergic).
    </div>
  </div>
  <details class="demo-details">
    <summary> Watch how to sort species</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/sort_species_abundance.gif" alt="Sort species by abundance" class="demo-gif">
  </details>
</div>

Exploring Numerical Data

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Expand the table columns or hover over each cell to see the numerical values.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore table values</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/explore_table_values.gif" alt="Explore numerical table values" class="demo-gif">
  </details>
</div>

</details>

<details>

<summary class="section-header">
  <span class="icon"><i class="fas fa-search"></i></span>
   <span class="arrow"></span>Identifying interesting genes
</summary>

Identify genes with high differential expression for a specific cell type (marker genes) in one or more species.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <div class="button-text">Species Appearance</div> table header to sort genes by the number of species they are most relevant to based on the ranking threshold.
  </div>
  <details class="demo-details">
    <summary> Watch how to sort genes</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/sort_genes_species.gif" alt="Sort genes by species appearance" class="demo-gif">
  </details>
</div>

Adjusting Gene Ranking Threshold

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Edit the <div class="button-text">Top N</div> field to automatically update the ranking threshold.
  </div>
  <details class="demo-details">
    <summary> Watch how to modify thresholds</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/modify_gene_threshold.gif" alt="Modify gene ranking threshold" class="demo-gif">
  </details>
</div>

</details>

<details>

<summary class="section-header">
  <span class="icon"><i class="fas fa-exchange-alt"></i></span>
   <span class="arrow"></span>Explore gene relevance across species
</summary>

For identified genes, explore their relevance for the same cell type in other species.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on a gene in the left table view to select a gene<br/>
    <i class="fas fa-hand-point-right instruction-icon"></i> The Scatterplot, Right table, and phylogenetic tree views gets updated based on the selection. <div class="info-text">
  The table on the right displays the species for which the gene is most relevant.  
  The scatterplot shows all cells of the selected species, colored by the expression of the selected gene.  
  The phylogenetic tree is colored based on attribute values such as mean expression, mean differential expression, appearance rank, or abundance.
</div>

  </div>
  <details class="demo-details">
    <summary> Watch how to select a gene for exploration</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/select_gene.gif" alt="Select Gene" class="demo-gif">
  </details>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <div class="button-text">Deselect</div> to deselect the gene selection and go back to the cell type embedding.
  <details class="demo-details">
    <summary> Watch how to deselect</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/deselect_gene.gif" alt="Deselect Gene" class="demo-gif">
  </details>
</div>

Explore table attributes

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i>Sort attribute values such as mean expression, mean differential expression, appearance rank, and abundance for exploration. Expand columns to view the full numerical values, also hover over table cells to reveals these values.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore table attributes</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/explore_table_attributes.gif" alt="Explore table attribute" class="demo-gif">
  </details>
</div>

Explore missed species

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on a species in the right table view to explore the expression patterns of it's cells in the scatterplot colored by the gene's expression.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore missed species</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/explore_missed_species.gif" alt="Explore missed species" class="demo-gif">
  </details>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <div class="button-text">Revert</div> to revert to initial selection.
    <details class="demo-details">
    <summary> Watch how to revert selection</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/revert_selection.gif" alt="Revert Species Selection" class="demo-gif">
  </details>
</div>

Toggle scatterplot selection to explore the expression values for the selected cells

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i>Toggle scatterplot selection from the checkbox <div class="button-text">Show scatterplot selection</div>.
  </div>
  <details class="demo-details">
    <summary> Watch how to toggle scatterplot selection</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/toggle_scatterplot_selection.gif" alt="Toggle scatterplot selection" class="demo-gif">
  </details>
</div>

</details>

<details>
<summary class="section-header">
  <span class="icon"><i class="fas fa-th"></i></span>
   <span class="arrow"></span>Compare species by prior knowledge
</summary>

Compare species according to prior knowledge, such as traits or phylogeny according to differences in marker gene properties by switching between the table attributes.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the top left text or color map in the tree view to switch between attributes.
  </div>
  <details class="demo-details">
    <summary> Watch how to switch between attributes in the tree</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/tree_attribute_switch.gif" alt="Switch between attributes" class="demo-gif">
  </details>
</div>

Explore expression of selected species

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on nodes in the tree to select species.<br/>
    <i class="fas fa-hand-point-right instruction-icon"></i> Press shift and click on nodes in the tree to make multiple selections.<br/>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <div class="button-text">Explore</div> to view the expression patterns of the selected species in the scatterplot.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore expression of selected species</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/explore_tree_selection.gif" alt="Explore expression of selected species" class="demo-gif">
  </details>
</div>

Revert species to initial

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on <div class="button-text">Revert</div> to revert to initial selection.
  </div>
  <details class="demo-details">
    <summary> Watch how to revert tree selection to initial</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/revert_tree_selection.gif" alt="Revert tree selection to initial" class="demo-gif">
  </details>
</div>
</details>

<details>
<summary class="section-header">
  <span class="icon"><i class="fas fa-download"></i></span>
   <span class="arrow"></span>Exporting results
</summary>

Save your analysis results for future use.

Exporting Table Data

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <i class="fas fa-download"></i> icon in the table view.<br>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <div class="button-text">Save Right Species Selection Table</div> button to save species details as csv.<br>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <div class="button-text">Save Left Gene Table</div> button to save gene details as csv.
  </div>
  <details class="demo-details">
    <summary> Watch how to save table data</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/save_table_data.gif" alt="Save table data" class="demo-gif">
  </details>
</div>

Exporting Tree Data

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <i class="fas fa-toolbox"></i> icon in the phylogenetic tree view.<br>
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the <div class="button-text">Save tree data</div> button to save phylogenetic tree details as json.
  </div>
  <details class="demo-details">
    <summary> Watch how to save tree data</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/EvoViewer/TutorialImages/save_tree_data.gif" alt="Save tree data" class="demo-gif">
  </details>
</div>
</details>
<script src="/assets/js/tutorial.js"></script>
