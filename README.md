# <p align=center>The History of The Dress Website</p>

## Contents

**1. Project Description** <br/>
**2. Installation Guide** <br/>
**3. Usage Guide** <br/>
&emsp;&emsp;- Homepage <br/>
&emsp;&emsp;- Era Pages <br/>
&emsp;&emsp;- Dress Detail Pages <br/>
&emsp;&emsp;- Saved for Later <br/>
&emsp;&emsp;- About Page <br/>
&emsp;&emsp;- JavaScript & CSS <br/>
**4. Credits**


### Project Description

The aim of this project was to create a dynamic website, utilising the skills we have developed in **HTML**, **CSS** and **JavaScript.** <br/>
I have created a website called *'The History of The Dress'* which celebrates specific eras that changed the iconic garment and shines a light on dresses from that time.<br/>
As you navigate through the website, you will see examples of **responsive design**, **object-oriented** and **defensive programming**, **functions**, **control structures**,
**DOM manipulation**, **event handling** and usage of **local storage**.

### Installation Guide

To install my project localling, download all files in the repository (including images). Once downloaded, open **index.html** in your browser.

### Usage Guide

#### Homepage
Once you have opened index.html on your browser, you will be on the homepage. On this page you will see a main heading, navigation, hero image, quote and footer. <br/>
If you would like to see an example of **responsive design**, try shrinking the width of the page to see the image and header resize. <br/>
In the navigation you will find a newsletter sign-up form. As this form is not yet functional, i've added an alert as a placeholder when the user presses the submit button. </br>
The navigation, heading and footer are present on all pages across the site.

<p align=center><img width="946" alt="image" src="https://user-images.githubusercontent.com/108631501/217566895-7527180e-612a-4a63-a988-60c7ea704baa.png">
<img width="943" alt="image" src="https://user-images.githubusercontent.com/108631501/217567070-8d4a198d-362a-4600-b51c-dd76d376510a.png"></p>

#### Era Pages
If you hover over *'ERA'* in the navigation, you will see a sub-navigation appear which was created using **CSS**. Click on any of the links and you will see an era page which 
gives a short description of what happened during that period of history and how it impacted fashion. <br/>
Scrolling down, you'll see a selection of iconic dresses from that era. <br/>
<sub>*To edit any of the era pages, the file names are era1920.html, era1940.html and era1960.html and can be found in the Secondary-Pages folder.*</sub>

<p align=center><img width="940" alt="image" src="https://user-images.githubusercontent.com/108631501/217567575-7ecf4cd8-f1be-4ddf-940b-9fd25afcd78c.png">
<img width="938" alt="image" src="https://user-images.githubusercontent.com/108631501/217568698-c2993d12-703d-4b66-acb2-8cbf6750925f.png">
</p>

#### Dress Detail Pages
Once you have clicked on one of the dresses on the era page, you will be taken to a dress detail page which opens in a new tab so you can view multiple dresses at once. 
This page takes an in-depth look at the selected dress and gives information on the designer, materials used and more. <br/>
Under the table of information are *'like'* and *'save'* buttons. Clicking the like button once, you will see the styling change to represent that the post has been liked. 
Clicking the button again, it will be unliked. This has been created using **DOM manipulation**, **functions** and utilising **local storage.** <br/>
The save button works in exactly the same manner as *'like'*, however once you press the button it stores the dress image in your *'Saved For Later'* page and you'll be alerted
to how many items you have saved. Clicking the button a second time then removes it from the page. </br>
Scrolling down, you will see an 'add comment' section which allows the user to add a comment to the page. After adding a comment, a new div element will be created with 
the user's name, current date & time and the comment itself. I utilised **DOM manipulation** and **local storage** to create this functionality. <br/>
Finally at the bottom of the page you will see additional dresses from the selected era. <br/>
<sub>*To edit any of the dress detail pages, the file names are era1920chanel.html, era1940balenciaga.html, etc.*</sub>

<p align=center><img width="937" alt="image" src="https://user-images.githubusercontent.com/108631501/217568900-ed05dde6-5491-4c30-a004-214008d78042.png">
<img width="943" alt="image" src="https://user-images.githubusercontent.com/108631501/217569989-69ecae86-25a2-4ac9-b7c9-e7593ba1a813.png">
<img width="946" alt="image" src="https://user-images.githubusercontent.com/108631501/217570069-ac27cfc5-23ec-4a75-9915-e49815cc2ebf.png">
<img width="119" alt="image" src="https://user-images.githubusercontent.com/108631501/217569236-3c3fcef2-cd25-490f-b51f-1c012cdcd482.png">   <img width="344" alt="image" src="https://user-images.githubusercontent.com/108631501/217569069-40d34153-7d29-4139-b889-b00e563cd03a.png">

</p>

#### Saved for Later
Once a dress has been saved using the *'save'* button on the dress detail pages, the image of the dress will be shown on the *'SAVED'* page with a link to the specified page.<br/>
To create this functionality, I utilised **local storage** by setting the corresponding image to the save button that has been clicked into local storage. I then get this image 
and create a new image **object**, which is then converted into a **HTML element** using **DOM manipulation**. This page also shows an example of **resposive web design** using **flex-box.**<br/>
In the next iteration of this website, I would like to create the functionality on the *SAVED* page to allow the user to remove items from the list without having to go back 
into the dress detail pages.<br/>
<sub>*To edit the saved for later page, the file name is saved.html and can be found in the Secondary-Pages folder.*</sub>

<p align=center><img width="945" alt="image" src="https://user-images.githubusercontent.com/108631501/217570800-6f6deaee-517b-4499-a1b1-46e5d8ca7230.png">
</p>

#### About Page
Finally we have the about page which gives a short description of the website and *'contact us'* form. As this form is not yet functional, i've added an alert as a placeholder 
when the user presses the submit button. <br/>
<sub>*To edit the about page, the file name is about.html and can be found in the Secondary-Pages folder.*</sub>

<p align=center><img width="941" alt="image" src="https://user-images.githubusercontent.com/108631501/217572333-0216e1d3-404a-4c97-a597-8e8a59213023.png">
<img width="944" alt="image" src="https://user-images.githubusercontent.com/108631501/217572716-98968c7e-93b6-4f6d-a703-17330a57aff2.png">

</p>

#### JavaScript & CSS
The external JavaScript (main.js) and CSS (myStyles.css) files for this project can be found in the master folder. Throughout my code I have given detailed descriptions of what 
each function is used for and my reasonings for creating it. 

<p align=center><img width="544" alt="image" src="https://user-images.githubusercontent.com/108631501/217571994-b700f393-df8a-4d22-b2b0-925a46a4c33d.png">
<img width="665" alt="image" src="https://user-images.githubusercontent.com/108631501/217572260-d2362595-2205-4b51-abd4-fb03aa342c90.png">

</p>

### Credits
**Author:** *Alice Day* </p>
