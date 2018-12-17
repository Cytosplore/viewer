---
layout: post
title:  "Installation"
date:   2017-01-02
category: prerun
permalink: /documentation/installation
---
We provide an easy to use installer including all dependencies for Windows. You can download the installer from the [main site][main].
Clicking the download button will save the installer to your disk. Double-click the icon to start the installation. It looks like this in your download folder:

![Cytosplore Viewer Installer Icon][installer_icon]{:width="90px"}<span class="caption">Figure 1: The Cytosplore Viewer Installer Icon after downloading.</span>

The installer will ask for administrator rights on the computer. This is due to the fact that we include the [Microsoft Visual C++ Redistributable Packages][vcredist]{:target="_blank_"}. Cytosplore Viewer itself does not need or makes use of these rights. To continue the installation click *Yes*. You will be prompted to enter the administrator password.

![Cytosplore Viewer Installer Admin Rights Dialog][installer_admin]{:width="340px"}<span class="caption">Figure 2: The dialog asking for administrator rights on Windows 10. Click *__Yes__*, to continue the installation.</span>

The installer will show the license agreement, that your have to accept. Most importantly it states that the software can be used free of charge in an academic setting and if it is used in the scope of a scientific article the original Cytosplore Viewer article needs to be cited:
Hodge, Bakken, et al. **Conserved cell types with divergent features between human and mouse cortex**, bioRxiv, 2018.

Click *__I accept the agreement__* and then *__Next >__*.

![Cytosplore Viewer Installer License Dialog][installer_license]{:width="376px"}<span class="caption">Figure 3: The dialog asking to accept the Cytosplore Viewer license agreement on Windows 10. Click *__I accept the agreement__* and then *__Next >__*, to continue the installation.</span>

Next you can define the location where Cytosplore Viewer should be installed or simply click *__Next >__*.

![Cytosplore Viewer Installer Location Dialog][installer_location]{:width="376px"}<span class="caption">Figure 4: The dialog to define the target folder to install Cytosplore Viewer. Click *__Next >__*, to continue the installation or change the folder as desired.</span>

In the next dialog you can define the name of or decide not to create a t Cytosplore Viewer start menu folder. Click *__Next >__* to continue without changes.

![Cytosplore Viewer Installer Start Menu Dialog][installer_startmenu]{:width="376px"}<span class="caption">Figure 5: The dialog to define the start menu folder. Click *__Next >__*, to continue the installation or change the folder name.</span>

Now you will be asked if you want to create a desktop shortcut. If yes, just click *__Next >__* to continue.

![Cytosplore Viewer Installer Desktop Shortcut Dialog][installer_desktopsc]{:width="376px"}<span class="caption">Figure 6: The dialog to create a desktop shortcut. Click *__Next >__*, to continue the installation with the default setting.</span>

The last dialog before putting the files in the appropriate locations shows a summary of the previous settings. Click *__Install__* to prepare the Cytosplore Viewer installation.

![Cytosplore Viewer Installer Summary Dialog][installer_summary]{:width="376px"}<span class="caption">Figure 7: The summary dialog. Click *__Install__*, to carry out the installation.</span>

After a successful installation the following dialog will show. You can decide whether to launch Cytosplore Viewer now, and click *__Finish__* to complete the process.

![Cytosplore Viewer Installer Finished Dialog][installer_finished]{:width="376px"}<span class="caption">Figure 8: The final dialog. Click *__Finish__*, to finalize the installation and start Cytosplore Viewer.</span>

Cytosplore Viewer includes an automatic updating system. Upon launching, Cytosplore Viewer has the option to automatically check for updates and new versions. You can also choose to manually
check for updates through the Help menu.


[main]: https://viewer.cytosplore.org/#get
[vcredist]: https://www.microsoft.com/en-gb/download/details.aspx?id=40784
[first_run]: {{ site.baseurl }}/documentation/firstrun

[installer_icon]: {{ site.baseurl }}/assets/documentation/install_icon.png "Cytosplore Viewer Installer Icon"
[installer_admin]: {{ site.baseurl }}/assets/documentation/installer_admin.png "Cytosplore Viewer Installer Admin Rights Dialog"
[installer_license]: {{ site.baseurl }}/assets/documentation/installer_license.png "Cytosplore Viewer Installer License Dialog"
[installer_location]: {{ site.baseurl }}/assets/documentation/installer_location.png "Cytosplore Viewer Installer Location Dialog"
[installer_startmenu]: {{ site.baseurl }}/assets/documentation/installer_startmenu.png "Cytosplore Viewer Installer Startmenu Dialog"
[installer_desktopsc]: {{ site.baseurl }}/assets/documentation/installer_desktopsc.png "Cytosplore Viewer Installer Desktop Shortcut Dialog"
[installer_summary]: {{ site.baseurl }}/assets/documentation/installer_summary.png "Cytosplore Viewer Installer Summary Dialog"
[installer_finished]: {{ site.baseurl }}/assets/documentation/installer_finished.png "Cytosplore Viewer Finished Installation Dialog"
