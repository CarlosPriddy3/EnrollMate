Delivery Documentation
EnrollMate, Team JID 8121
Release Notes
New software features for this release
* Can scroll through all classes currently offered by the University of Alabama in Huntsville
* All classes have a dropdown menu which opens to a detailed view of information about the class, including past enrollment data and a visualization of past and current enrollment
* Classes currently at over 85% capacity are highlighted and have a flame icon next to them.
* Can search for classes by name
* Can filter classes by college, credit hours, and days of the week


Bug fixes made since the last release
As this is the first release of this application, there are no bug fixes made since the last release.


Known bugs and defects
* Currently we do not have projections of the next semester’s expected enrollment.
* Did not make a separate page for comparisons due to testing finding it more useful to simply open the site in two windows in order to compare.
* The initial load time for the page is relatively high, but afterwards runs smoothly.
Install Guide
Pre-requisites




Dependent libraries that must be installed
* The most recent version of Node.js must be installed
   * Available for download here: https://nodejs.org/en/download/ 
   * Assuming a Windows installation:
      * Download the Windows installer from the Nodes.js web site
      * Run the installer (the .msi file you downloaded in the previous step.)
      * Follow the prompts in the installer (Accept the license agreement, click the NEXT button until you are able to accept the default installation settings).
   * Assuming a Mac Installation:
      * Xcode will need to be installed from the Apple App Store here: https://itunes.apple.com/us/app/xcode/id497799835?mt=12 
      * Homebrew, a package manager, will need to be installed by opening a terminal window and running the command: “ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"” (without external quotation marks) then hit enter.
         * You’ll see messages in the Terminal explaining what you need to do to complete the installation process.
      * After doing the above, open the Terminal and type: “brew install node” (without quotation marks) then hit enter.






Download instructions
* Clone or download EnrollMate’s GitHub respository into local machine
   * Available here: https://github.com/CarlosPriddy3/EnrollMate 
   * Click the green “Clone or Download” button and click “download ZIP”


Installation of actual application
* Open terminal into the directory of the cloned/downloaded repository
* Use the command  npm install  to install all necessary dependencies


Run instructions
* Use the command  npm run dev  to execute the application
* The application should be able to be viewed in any web browser at http://localhost:8080


Troubleshooting
* Provided the above instructions were followed, installation errors should be rare. In general, if there is an error, your terminal window should give instructions on how to fix the issue.