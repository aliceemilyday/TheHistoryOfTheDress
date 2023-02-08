/*I have created a dynamic website using HTML, CSS and JavaScript. The theme of the website is 'The History of The Dress'
as I have an interest in fashion history and studied it at University. I have chosen to focus on the dress as I felt
'fashion history' would be too broad. On the homepage you will see links to different eras (20s, 40s, 60s), an about
page and saved for later page. 
Within the era pages you will find a brief description of what was happening in fashion at 
the time and 5 iconic dresses from that era. If you click on the dresses it will take you to a detail page with information on 
the dress. On this page you have the option to 'save' the dress which will then store it in your save for later page. If you
press the button twice, it will unsave the dress. You also have the option to like the dress or add comments. 
In the about page you will find a description of the website with a contact us form, and in the saved page you will see your 
saved items.

As a lot of the pages have the same formatting, I have added comments to the following files:
main.js
index.html 
era1920.html 
era1920chanel.html
about.html
saved.html */


/*First I have initialised the arrays used to store the data which is sent to local storage. I have chosen to initialise them on the
main JS file as these arrays are used on multiple pages */
let savedItems = [];
let savedImages = [];
let likedItems = [];
let commentsArray = [];

/*The myLoad function is used on ALL dress detail pages and is called when the body of the HTML loads. I have chosen to use local storage
because I wanted to create a similar functionality to a normal website, where you can come back to the site later and see comments and 
saved items. Using session storage would mean that your saved items would dissapear after leaving the site. */
function myLoad() {
    /*First I have used a control statement to identify if the page has been run before. If it has not, the statement will execute*/
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        //I then set all of the arrays defined above to local storage, using stringify to convert the arrays to text
        localStorage.setItem("saveItems", JSON.stringify(savedItems));
        localStorage.setItem("saveImages", JSON.stringify(savedImages));
        localStorage.setItem("likeItems", JSON.stringify(likedItems));
        localStorage.setItem("comments", JSON.stringify(commentsArray));
        //And set 'hasCodeRunBefore' to true as we have now run the code
        localStorage.setItem("hasCodeRunBefore", true);
    } else { //I've then used an else statement which is executed if the page HAS run before
        //First I get all items from local storage an assign them back to their arrays, after converting back to objects using parse
        savedItems = JSON.parse(localStorage.getItem("saveItems"));
        savedImages = JSON.parse(localStorage.getItem("saveImages"));
        likedItems = JSON.parse(localStorage.getItem("likeItems"));
        commentsArray = JSON.parse(localStorage.getItem("comments"));

        /*Next I have created a function which loops through the values in the savedItems array and sets them to a specific styling. As
        I added data validation in the script directly in the dress detail pages, I know that any items in this array, the user wants
        to be saved for later */
        //First I have stored the saveButton element in a variable
        let saveButton = document.getElementsByClassName('saveButton');
        //And reset the variable with the exact index required
        saveButton = saveButton[0];
        //I've then used a forEach loop to loop through each value in the savedItems array
        savedItems.forEach(function(value){
            //If the value in the array is exactly equal to the saveButton ID, it will style the button to red and change the inner text
            if(value === saveButton.id){
                saveButton.style.backgroundColor = "#f51204";
                saveButton.innerText = 'SAVED';
            }
        });

        /*I have then used the exact same function as above, but for the like button. The reason that I have added these functions into
        myLoad() is because I want them to be executed when the page loads*/
        let likeButton = document.getElementsByClassName('likeButton');
        likeButton = likeButton[0];
        likedItems.forEach(function(value){
            if(value === likeButton.id){
                likeButton.style.backgroundColor = "#f51204";
                likeButton.innerText = 'LIKED';
            }
        });

        /*The following block of code is for the comments section, also on the dress detail pages. This function created HTML elements
        using DOM manipulation from any comments in the commentsArray. This functionality is unfortunately not working as expected, however
        both myself and my mentor could not find a way to get it to work as I would like. With the code as it is, if you add a comment to
        one page, it will show on ALL other detail pages on site. However, if you uncomment the code on line 89 and 105, it only shows the comment
        on the EXACT page you added the comment to, however this only seems to work when leaving the page and coming back to it*/
        //To create the comments section, i've first assigned the HTML element to a variable
        let htmlComments = document.getElementById("commentsContainer");
        //And set the index to 1. This is so each comment will be added separately, rather than replace the original comment
        let i = 1;
        //I've then created a forEach function which executes the specified function on each comment in the commentsArray
        commentsArray.forEach(function(c){
            /*Below i have used a control statement which executes if the comment location is exactly equal to the current window location href.
            I have commented this out so you can see your comments added to the page. However if you uncomment this you will see the comments
            only show on the specific pages they were added to (after exiting the page and coming back)*/
            // if (c.location === window.location.href){
                let divItem = document.createElement("div"); //To create the comment I have first created multiple HTML elements
                let h4Item = document.createElement("h4");
                let h5Item = document.createElement("h5");
                let pItem = document.createElement("p");
                h4Item.innerText = c.name; //I've set the inner text to the specific comment attributes
                h5Item.innerText = c.date;
                pItem.innerText = c.comment;
                divItem.className = 'comment'; //Added a class to the element
                divItem.value = i; //Set the value to i to ensure each comment is added separately
                i = i + 1; //And reset i to +1 so it will increase with each loop of the function
                htmlComments.appendChild(divItem); //Appended the child of the htmlComments element to add the div
                divItem.appendChild(h4Item); //And added the additional elements within the div to get the desired styling
                divItem.appendChild(h5Item);
                divItem.appendChild(pItem);
            // } 
        });
    }
}

/*Below is a similar function to the above, however this is specifically created for the saved for later page. I have created them separately
as the content on the pages is completely different and I found this to be cleaner and easier to read*/
function myLoadSaved(){
    /*Similarly to the above, once the body of the HTMl is loaded, it will execute the following control statement if the code has never
    run before */
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        //Setting the arrays into local storage
        localStorage.setItem("saveItems", JSON.stringify(savedItems));
        localStorage.setItem("saveImages", JSON.stringify(savedImages));
        localStorage.setItem("hasCodeRunBefore", true);
    } else {
        //And getting the arrays from local storage if the code HAS run before
        savedItems = JSON.parse(localStorage.getItem("saveItems"));
        savedImages = JSON.parse(localStorage.getItem("saveImages"));
    }

    /*Next I have created the HTML images which are on the saved for later page. These images only show if the 'saved' button has been clicked
    on the specific dress detail page */
    //I have assigned the savedContainer HTML element to a variable
    let htmlSelect = document.getElementById('savedContainer');
    //Set i to 0 so that with each loop of the below function it creates a new element
    let i = 0;
    //I've used the forEach method to loop through each image in the savedImages array
    savedImages.forEach(function(image){
        //I've then used another forEach loop within it to loop through each item in the savedItems array
        savedItems.forEach(function(item){
            /*If the image ID is equal to the item, the control statement will be executed. This is where using identical IDs on the save button
            and corresponding images comes into play.*/
            if (image.id == item){
                let aItem = document.createElement("a"); //I've then created the HTML anchor link and image elements
                let imgItem = document.createElement("img");
                imgItem.src = image.src; //Set the image src
                imgItem.alt = image.alt; //Alt text
                imgItem.id = image.id; //Image ID
                aItem.href = "./" + item + ".html"; /*I've then set the href to the item value. I made sure to set the ID to exactly match the html
                                                    file name so I could easily create the anchor links*/
                aItem.target = "_blank" //Set the target to blank to open a new tab when the link is clicked
                aItem.value = i; //Set the value to i and increased it by +1 with each item in the array
                i = i + 1;
                aItem.appendChild(imgItem) //And finally appended the child with the newly created elements
                htmlSelect.appendChild(aItem);
            }
        });
    })
}

/*Next is the saveForLater function which is called on the dress detail pages. I have used saveButton as a parameter which is specified on
each detail page with the function is called. This means that I can target the individual button element, rather than styling all elements at once*/
function saveForLater(saveButton){
    //First I have set the button styling
    saveButton.style.backgroundColor = "#f51204";
    saveButton.innerText = 'SAVED';
    /*And pushed the button ID to the savedItems array. This array is used to style all saved buttons when the page is loaded, and in the
    function above/below to match against the corresponding images*/
    savedItems.push(saveButton.id);
    //I've then set the new savedItems array into local storage
    localStorage.setItem("saveItems", JSON.stringify(savedItems));

    //Next I am storing the corresponding image in local storage to the save button that has been clicked
    //First I get the savedImages array from local storage
    savedImages = JSON.parse(localStorage.getItem("saveImages"));
    //I then store all images on the page in a variable
    let images = document.querySelectorAll('img');
    //And create a new empty variable to store the newImage I am about to create
    let newImage;
    //I then use another forEach function to separate each image within the images node list that I created from the img query selector
    images.forEach(function(image){
        //And created another forEach function for the items in the savedItems array
        savedItems.forEach(function(value){
            /*If the item in savedItems is equal to the image.id and is NOT blank, the code will be executed. Again, this is where adding
            the same ID to both the image and the save button comes into play */
            if (value == image.id && image.id != ""){
                //I've then created a new image object from the attributes in the image HTML element
                newImage = new Image(
                image.src,
                image.alt,
                image.id,
                );
            }
        })
    })
    //And pushed the new image object into the saved images array
    savedImages.push(newImage);
    //And set it to local storage
    localStorage.setItem("saveImages", JSON.stringify(savedImages));

    /*Part of the task was to alert the user to how many items they have in their saved for later folder, so I have added this here by
    finding the length of the saved items array */
    alert(`Saved For Later: ${savedItems.length} Items`);
}


/*Next I have created the function to remove an item from saved for later. Similarly to the function above, this function is called on the
dress detail pages and calls the saveButton as a function so it's only triggered when the EXACT button is clicked*/
function unsave(saveButton){
    //I have set the styling back to black and inner text to show that it is not saved
    saveButton.style.backgroundColor = "#000";
    saveButton.innerText = 'SAVE';
    //I have used the saveButton.id to find the index in the savedItems array
    let savedIndex = savedItems.indexOf(saveButton.id);
    //And spliced the index from the array
    savedItems.splice(savedIndex, 1);
    //And set the array to local storage
    localStorage.setItem("saveItems", JSON.stringify(savedItems));

    //I've then done a similar thing with the savedItems array, first using a forEach function to separate each element in the array
    savedImages.forEach(function(image){
        //If the savebutton id is exactly equal to the image id, it will splice the image from the savedImages array
        if (saveButton.id === image.id){
            let savedImgIndex = savedImages.indexOf(image);
            savedImages.splice(savedImgIndex, 1);
            localStorage.setItem("saveImages", JSON.stringify(savedImages));
        }
    })
}

/*Similarly to the saveForLater function, the like function below is used on the dress detail pages and take the specific like button
on the page as a parameter. As I have not created a page for liked items, this function is a lot simpler and just changes the styling
of the button*/
function like(likeButton){
    likeButton.style.backgroundColor = "#f51204";
    likeButton.innerText = 'LIKED';
    likedItems.push(likeButton.id);
    localStorage.setItem("likeItems", JSON.stringify(likedItems));
}

//Similarly to the unsave function, this function sets the styling back to black to show that the item has not been liked
function unlike(likeButton){
    likeButton.style.backgroundColor = "#000";
    likeButton.innerText = 'LIKE';
    let likedIndex = likedItems.indexOf(likeButton.id);
    likedItems.splice(likedIndex, 1);
    localStorage.setItem("likeItems", JSON.stringify(likedItems));
}

//Below is the function to create an Image object 
function Image(src, alt, id) {
    this.src = src;
    this.alt = alt;
    this.id = id;
}

//Below is the function to create a comment object
function Comment(name, date, comment, location) {
    this.name = name;
    this.date = date;
    this.comment = comment;
    this.location = location;
}

/*In the below commentButtonFunction I wanted the comment to show the exact date and time that the comment was submitted, so I have created
a getDate function which returns the exact time and date using built-in functions*/
function getDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes()
    let today = `${day}-${month}-${year} at ${time}`;
    return today;
}

/*Next is the commentButtonFunction which is triggered when the submit button is clicked on the comment section of each dress detail page*/
function commentButtonFunction(){
    //I have added data validated to ensure that the inputs are not empty before the comment is submitted
    if (document.getElementById("commentName").value != "" && document.getElementById("commentComment").value != ""){
        //If they are not empty, a new comment object will be created from the input values
        let newComment = new Comment(
            document.getElementById("commentName").value,
            getDate(),
            document.getElementById("commentComment").value,
            window.location.href
        ); 
        //I've then pushed the new comment into the array and set to local storage
        commentsArray.push(newComment);
        localStorage.setItem("comments", JSON.stringify(commentsArray));

        //I've also added an alert so the user knows their comment has been submitted
        alert(`Thanks for your comment!`)
    }
}

//Next I have created a function which alerts the user when they submitted the contact us form, which is triggered on the about page
function contactUs(){
    //I have used data validation to ensure all inputs are filled, and the email input contains a @. If this is true, it will alert the user
    let contactNameHTML = document.getElementById("contactName");
    let contactEmailHTML = document.getElementById("contactEmail");
    let contactReasonHTML = document.getElementById("contactReason");
    let contactMessageHTML = document.getElementById("contactMessage"); 
    if (contactNameHTML.value != "" && contactEmailHTML.value != "" && /@/.test(contactEmailHTML.value) == true && contactReasonHTML.value != "" && contactMessageHTML.value != ""){
        alert('Thanks for contacting us! We\'ll get back to you within 48 hrs.');
    }
}

/*Finally I have created an event listener on the newsletter sign up button in the footer of every page. If the email input has been filled
out and the button clicked, it will alert the user*/
let newsletterEmail = document.getElementById("newsletter3")
let newsletterButton = document.getElementById("newsletter4");
newsletterButton.addEventListener('click', function(e){
    if (e.type === "click" && newsletterEmail.value != "" && /@/.test(newsletterEmail.value) == true){
        alert('Thanks for signing up!');
    }
});