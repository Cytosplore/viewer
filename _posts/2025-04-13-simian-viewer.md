---
layout: post
title: "Simian Viewer"
date: 2025-04-13
category: views
permalink: /documentation/simianviewer
---

<link rel="stylesheet" href="/assets/css/tutorial.css" type="text/css">
<link rel="stylesheet" href="/assets/css/fontawesome-all.css" type="text/css"/>

Welcome to the **<span class="cytosplore-gradient-text"><a href="https://viewer.cytosplore.org/" target="_blank">Cytosplore SimianViewer</a></span>** tutorial! Follow the structured steps below to unlock the full potential of SimianViewer.

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
   <span class="arrow"></span>Find cross-species clusters via in-species cell attributes
</summary>

Select species and neighborhood of interest <!--<div class="button-text">Button</div> <div class="info-text">Info</div>-->

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Select species from the <div class="button-text">Species1(X-axis)</div> and the <div class="button-text">Species2(Y-axis)</div> dropdowns.
  </div>
  <details class="demo-details">
    <summary> Watch how to select species</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/select_species.gif" alt="Select species" class="demo-gif">
  </details>
    <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Select neighborhood of interest from the <div class="button-text">Neighborhood</div> dropdown.
  </div>
  <details class="demo-details">
    <summary> Watch how to select neighborhood</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/select_neighborhood.gif" alt="Select neighborhood" class="demo-gif">
  </details>
</div>

Explore in-species cluster attributes

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Explore the heatmap color patterns for the inspecies clusters.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore inspecies cluster attributes</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/inspecies_celltype_attr.gif" alt="Inspecies cluster attributes" class="demo-gif">
  </details>
</div>

Compare cluster attributes across species

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Hover over the heatmap cells to compare in-species attributes across species.
  </div>
  <details class="demo-details">
    <summary> Watch how to compare in-species attributes</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/compare_inspecies_attributes.gif" alt="Compare in-species attributes" class="demo-gif">
  </details>
</div>

</details>

<details >

<summary class="section-header">
  <span class="icon"><i class="fas fa-dna"></i></span>
   <span class="arrow"></span> Select key genes using cluster meta info
</summary>

Select cross-species cluster of interest.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Click on the heatmap cells to select a cross-species cluster.
  </div>
  <details class="demo-details">
    <summary> Watch how to select a cross-species cluster</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/select_cross_species_cluster.gif" alt="Select a cross-species cluster" class="demo-gif">
  </details>
</div>

Explore mean and differential expression of the selected cross-species cluster

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Explore the mean and differential expression values by sorting them in the table view.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore the mean and differential expression values</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/explore_mean_differential_exp_values.gif" alt="Explore the mean and differential expression" class="demo-gif">
  </details>
</div>

Search genes of interest

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Search a gene in the table view searchbox <div class="button-text">Filter by ID</div>.
  </div>
  <details class="demo-details">
    <summary> Watch how to search a gene</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/search_gene.gif" alt="Search a gene" class="demo-gif">
  </details>
</div>

Explore if a gene is associated with HARs, HCONDELs, and HAQERs — human-specific regulatory regions.

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Hover over the cells with checkmarks representing if a gene is associated with HARs or HCONDELs or HAQERs.
  </div>
  <details class="demo-details">
    <summary> Watch how to explore HARs, HCONDELs, and HAQERs</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/regulatory_regions.gif" alt="Explore HARs, HCONDELs, and HAQERs" class="demo-gif">
  </details>
</div>

</details>

<details>
<summary class="section-header">
  <span class="icon"><i class="fas fa-chart-line"></i></span>
   <span class="arrow"></span>Compare gene expression across species by cluster

</summary>

Select genes and compare mean expression across species for the selected gene

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Toggle the <div class="button-text">Gene expression: all species</div> radio button.
    <i class="fas fa-hand-point-right instruction-icon"></i> Select a gene from the table.
  </div>
  <details class="demo-details">
    <summary> Watch how to compare mean expression</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/compare_mean_all_species.gif" alt="Compare mean expression" class="demo-gif">
  </details>
</div>

Select genes and compare differential expression for human vs other species species for the selected gene

<div class="instruction-block">
  <div class="instruction-content">
    <i class="fas fa-hand-point-right instruction-icon"></i> Toggle the <div class="button-text">Gene expression: human vs other species species</div> radio button.
    <i class="fas fa-hand-point-right instruction-icon"></i> Select a gene from the table.
  </div>
  <details class="demo-details">
    <summary> Watch how to compare differential expression</summary>
    <img src="https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/SimianViewer/TutorialImages/compare_DE_human_vs_all_species.gif" alt="Compare differential expression" class="demo-gif">
  </details>
</div>

</details>
<script src="/assets/js/tutorial.js"></script>
