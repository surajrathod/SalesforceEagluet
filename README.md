
<h1 align="center">
    <img src="Eagluet.ico" align='' width="100">
    <br>
    SalesforceEagluet 
</h1>

This app is based on the Pomodoro Technique which is Time Management method developed by Francesco Cirillo. It uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by breaks. Each interval is known as a pomodoro.

![Eagluet](https://res.cloudinary.com/atnak/image/upload/v1591102778/homescreen_udwdgd.png)

## Features

- simple to use
- Force you to Rest in rest mode
- notify you before the Break round about to start

Download the [Windows](https://github.com/surajrathod/eagluet/releases/download/0.1.3/eagluet-0.1.3.Setup.exe) version.

this repository is the Salesforce version of the open Source Project by the name [Eagluet](https://github.com/surajrathod/eagluet)

# Installation Process

## Installing the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

2. If you haven't already done so, authorize your hub org and provide it with an alias (**DevHubDefault** in the command below):
   
   You can give your DevHub Org any name

    ```
    sfdx force:auth:web:login -d -a DevHubDefault
    ```

3. Clone the SalesforceEagluet repository:

    ```
    git clone https://github.com/surajrathod/SalesforceEagluet.git
    cd SalesforceEagluet
    ```

4. Create a scratch org and provide it with an alias (**SalesforceEagluet** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a SalesforceEagluet
    ```

5. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

6. Open the scratch org:

    ```
    sfdx force:org:open
    ```
7. In App Launcher, select the **SALES** app.

8. Add the Component **appMain** in SalesApp or MarkatingApp or any other App 
## NOTE

the component name is **appMain** which can be used in **HomePage**, **AppPage**   
