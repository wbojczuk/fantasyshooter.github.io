var oonlyOne = 1;
var mainContainerr = document.getElementById("mainContainer");
var onlyOne = 1;
var onlyOne1 = 1;
var onlyOne111 = 1;
var powerOneToggle = false; 
var power1On = 0;
var allThingOneHitbox;
var allThingOneLengthHitbox;
var thingOneNode;
var redPotionNode;
var extraHeartOrbNode;
var blueCrystalNode;
var snowflakeNode;



function lvl1Pre() {
    
    
            

   
                randomNum1 = Math.floor(getRndInteger(5, 120));
                currentLvl = "lvl1";
                oonlyOne = 1;
                onlyOne111 = 1;
                // SET LEVEL ONE BACKGROUND
                document.getElementById("body").style.backgroundImage = "url('img/lvl1/lvl1_background.jpg')";
                document.getElementById("body").style.backgroundSize = "cover";
                document.getElementById("body").style.backgroundRepeat = "no-repeat";
                document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";
                
                
                
                currentTime = 1; 

                //  Set InterVals
                
                 
                 
                


                //  NODE CREATIONS
                // DEFAUL FALLING CONTAINER NODE
                var fallingContainerNode = document.createElement("div");
                fallingContainerNode.setAttribute("class", "falling-container");
                fallingContainerNode.setAttribute("value", "0");

                // Default hitbox
                var thingOneHitboxNode =  document.createElement("div");
                thingOneHitboxNode.setAttribute("class", "thing-one-hitbox");
                
                //  BOMB NODE CREATION

                // Bomb Clickbox
                var bombClickboxNode = document.createElement("div");
                bombClickboxNode.setAttribute("class", "pow1 clickbox bomb-clickbox");
                // Bomb Image Box
                var thingOneDisplayNode = document.createElement("div");
                thingOneDisplayNode.setAttribute("class", "thing-one");

                // MAIN BOMB NODE

                thingOneNode = fallingContainerNode.cloneNode(false);

                thingOneNode.appendChild(bombClickboxNode.cloneNode(false));
                thingOneNode.firstChild.appendChild(thingOneDisplayNode.cloneNode(false));
                thingOneNode.firstChild.firstChild.appendChild(thingOneHitboxNode.cloneNode(false));



                // RED POTION 

                var redPotionClickboxNode = document.createElement("div");
                redPotionClickboxNode.setAttribute("class", "pow1 clickbox red-potion-clickbox");
                // POTION Image Box
                var redPotionDisplayNode = document.createElement("div");
                redPotionDisplayNode.setAttribute("class", "red-potion");

                // MAIN REDPOTION NODE
                redPotionNode = fallingContainerNode.cloneNode(false);
                redPotionNode.appendChild(redPotionClickboxNode.cloneNode(false));
                redPotionNode.firstChild.appendChild(redPotionDisplayNode.cloneNode(false));
                


                // Extra Heart Orb NODE

                var extraHeartOrbClickboxNode = document.createElement("div");
                extraHeartOrbClickboxNode.setAttribute("class", "pow1 clickbox extra-heart-orb-clickbox");
                // Extra Heart Orb Image Box
                var extraHeartOrbDisplayNode = document.createElement("div");
                extraHeartOrbDisplayNode.setAttribute("class", "extra-heart-orb");

                // MAIN Extra Heart Orb NODE
                extraHeartOrbNode = fallingContainerNode.cloneNode(false);
                extraHeartOrbNode.appendChild(extraHeartOrbClickboxNode.cloneNode(false));
                extraHeartOrbNode.firstChild.appendChild(extraHeartOrbDisplayNode.cloneNode(false));


                 // Blue Crystal Clickbox
                 var blueCrystalClickboxNode = document.createElement("div");
                 blueCrystalClickboxNode.setAttribute("class", "pow1 clickbox blue-crystal-clickbox");
                 // Blue Crystal Image Box
                 var blueCrystalDisplayNode = document.createElement("div");
                 blueCrystalDisplayNode.setAttribute("class", "blue-crystal");
 
                 // MAIN Blue Crystal NODE
 
                 blueCrystalNode = fallingContainerNode.cloneNode(false);
                 blueCrystalNode .setAttribute("class", "falling-container blue-crystal-falling-container");
 
                 blueCrystalNode.appendChild(blueCrystalClickboxNode.cloneNode(false));
                 blueCrystalNode.firstChild.appendChild(blueCrystalDisplayNode.cloneNode(false));
                 blueCrystalNode.firstChild.firstChild.appendChild(thingOneHitboxNode.cloneNode(false));



                 // Snowflake NODE

                var snowflakeClickboxNode = document.createElement("div");
                snowflakeClickboxNode.setAttribute("class", "pow1 clickbox snowflake-clickbox");
                // Snowflake Image Box
                var snowflakeDisplayNode = document.createElement("div");
                snowflakeDisplayNode.setAttribute("class", "snowflake");

                // MAIN Snowflake NODE
                snowflakeNode = fallingContainerNode.cloneNode(false);
                snowflakeNode.appendChild(snowflakeClickboxNode.cloneNode(false));
                snowflakeNode.firstChild.appendChild(snowflakeDisplayNode.cloneNode(false));




                
                 testViewportRepeat = setInterval(testViewport, 10);
                 checkPowersrepeat = setInterval(checkPowers, 100);
                 moveItemsRepeat = setInterval(moveItems, 10);
                 generationRepeat = setInterval(lvlOneGeneration, 1000);


    
                
                
   
        
}
        // Main Function
            function lvlOneGeneration(){
                var nodeContainer = document.createElement("div");


                    // GENERATE RANDOMLY PLACED FALLING CELLS
                

                // Bomb Generation
                if (counter % 3 == 0) {   
                    nodeContainer.appendChild(thingOneNode.cloneNode(true)); 
                    nodeContainer.appendChild(thingOneNode.cloneNode(true)); 
                } 
                if (counter % 5 == 0) {   
                    nodeContainer.appendChild(thingOneNode.cloneNode(true)); 
                    
                } 
                
                if (counter % 7 == 0) {   
                    nodeContainer.appendChild(thingOneNode.cloneNode(true));
                    nodeContainer.appendChild(thingOneNode.cloneNode(true));
                } 
                if (counter % 13 == 0) {
                    nodeContainer.appendChild(thingOneNode.cloneNode(true));
                    nodeContainer.appendChild(thingOneNode.cloneNode(true));
                    
                }

                if (counter % 9 == 0) {
                    nodeContainer.appendChild(thingOneNode.cloneNode(true));
                }

            // Blue Crystal generation
                if (counter % 8 == 0) {
                    nodeContainer.appendChild(blueCrystalNode.cloneNode(true));
                }
           
            // SNOWFLAKE GENERATION

            if (counter == 5) {
                nodeContainer.appendChild(snowflakeNode.cloneNode(true));
            }

            // EXTRA HEART ORB GENERATION

            if ( counter == Math.floor(getRndInteger(1, 200)) ) {
                nodeContainer.appendChild(extraHeartOrbNode.cloneNode(true));
            }
            if ( counter == Math.floor(getRndInteger(200, 300)) ) {
                nodeContainer.appendChild(extraHeartOrbNode.cloneNode(true));
            }

            // RED POTION GENERATION


            if ( counter == Math.floor(getRndInteger(20 , 30))) {
                nodeContainer.appendChild(redPotionNode.cloneNode(true));
            }

             if ( counter == Math.floor(getRndInteger(30 , 40))) {
                nodeContainer.appendChild(redPotionNode.cloneNode(true));
             }

             if ( counter == Math.floor(getRndInteger(60 , 70)) ) {
                nodeContainer.appendChild(redPotionNode.cloneNode(true));
             }
             if ( counter == Math.floor(getRndInteger(100 , 120)) ) {
                nodeContainer.appendChild(redPotionNode.cloneNode(true));
             }


                // APPLY INDIVIDUAL PROPERTIES TO NODES
                var nodeContainerLength = nodeContainer.children.length;
                for (var i = 0; i < nodeContainerLength; i++) {

                    
                    var tempNode = nodeContainer.children[i];

                    // USE THIS NODE CLONE
                    var tempNodeMain = tempNode.cloneNode(true);

                    // SET Random X-Axis Placement
                    tempNodeMain.firstChild.setAttribute("style", "left: " + getRndInteger(1 , 90) +  "vw");
                    
                    
                    // Attach Events

                    // SET BOMBS EVENTS
                    var allThingOne = tempNodeMain.querySelectorAll(".bomb-clickbox");
                    var allThingOneLength = allThingOne.length;
                        
                            if (allThingOneLength >= 1){
                                
                                tempNodeMain.firstChild.addEventListener("click", bombClicked);
                            }


                            //SET RED POTION EVENTS
                    var redPotions = tempNodeMain.querySelectorAll(".red-potion-clickbox");
                    var redPotionslength = redPotions.length;
                    if (redPotionslength >= 1){
                                    
                        tempNodeMain.firstChild.addEventListener("click", redPotionEffect);
                    }

                    //SET Extra Heart Orb EVENTS
                var extraHeartOrb = tempNodeMain.querySelectorAll(".extra-heart-orb-clickbox");
                var extraHeartOrblength = extraHeartOrb.length;

                if (extraHeartOrblength >= 1){
                                    
                    tempNodeMain.firstChild.addEventListener("click", extraHeartOrbEffect);
                }

                // SET BLUE CRYSTAL EVENTS

                var blueCrystal = tempNodeMain.querySelectorAll(".blue-crystal-clickbox");
                var blueCrystalLength = blueCrystal.length;

                if (blueCrystalLength >= 1){
                                    
                    tempNodeMain.firstChild.addEventListener("click", blueCrystalEffect);
                }


                // SET SNOWFLAKE EVENTS
                var snowFlake = tempNodeMain.querySelectorAll(".snowflake-clickbox");
                var snowFlakeLength = snowFlake.length;

                for (let i = 0; i < snowFlakeLength; i++) {
                    if (snowFlakeLength >= 1){
                                    
                        tempNodeMain.firstChild.addEventListener("click", snowflakeEffect);
                    }
                }
                        
    
                    
                    // Print cells to screen
                    mainContainerr.prepend(tempNodeMain);
                    
                    
                }
                

                


                
                

                
                

                

                //   Speed things based on time

    
                if (counter == 15) {
                    currentTime = 2;
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9); 
                }
    
                if (counter == 25) {
                    currentTime = 3;
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 7); 
                }
    
                if (counter == 50) {
                    currentTime = 4; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5); 
                }
    
                if (counter == 60) {
                    currentTime = 5; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5); 
                }
    
                if (counter == 75) {
                    currentTime = 6; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5);
                }
                if (counter == 100) {
                    currentTime = 7; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5);
                }
    
                if (counter == 120) {
                    currentTime = 8; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 3);
                }
    
                if (counter == 140) {
                    currentTime = 9; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 2);
                }
                if (counter == 160) {
                    currentTime = 10; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 1);
                }

                if (counter == 180) {
                    currentTime = 11; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 1);
                }
    
                // TEMP DISABLE COUNTER TRIGGERS
            counter += .0001;
                
                    }


                
                    
            


                // MOVE FALLING CONTAINERS
               function moveItems() {
                  
                   var fallingContainerss = document.querySelectorAll(".falling-container");
                   var fallingContainersLengths = fallingContainerss.length;


                   if ((currentTime == 1) || (currentTime == 2) || (currentTime == 3)){

                   for (let i = 0; i < fallingContainersLengths; i++){
                        var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 1;
                        
                    
                       fallingContainerss[i].style.top =  tempppValue + "px";
                       fallingContainerss[i].setAttribute("value", tempppValue);
                   }
                }else if (currentTime == 4){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 } else if (currentTime == 5){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 6){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 3;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 7){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 4;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 8){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 4;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 9){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 5;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 10){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 6;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 11){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 7;
                         
                     
                         fallingContainerss[i].style.top =  tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                }

                 var blueCrystal = document.querySelectorAll(".blue-crystal-falling-container");
                var BlueCrystalLength = blueCrystal.length;

                for (let i = 0; i < BlueCrystalLength; i++) {
                    
                    var tempValue = parseInt(blueCrystal[i].getAttribute("value")) + 1;
                blueCrystal[i].style.top =  tempValue + "px";
                blueCrystal[i].setAttribute("value", tempValue);
                }


               }


                // Function to test if element is in viewport 
                var isInViewport = function (elem) {
                    var bounding = elem.getBoundingClientRect();
                    return (
                        bounding.top >= 0 &&
                        bounding.left >= 0 &&
                        bounding.bottom <= (window.innerHeight) &&
                        bounding.right <= (window.innerWidth)
                    );
                };


                


                

        

            // Test if cell hitbox is in viewport

            function testViewport(){

            allThingOneHitbox = document.querySelectorAll(".thing-one-hitbox");
            allThingOneLengthHitbox = allThingOneHitbox.length;

            for (let i = 0; i < allThingOneLengthHitbox; i++) {

                if (isInViewport(allThingOneHitbox[i]) === false ) {

                    var hearts = document.querySelectorAll(".heart-img");
                    hearts[heartLost].style.backgroundImage = "url('img/heart1.png')";
                    hearts[heartLost].classList.add("heart-gone");
                    hearts[heartLost].classList.remove("heart-here");
                var audio = new Audio('sounds/lose_heart.mp3');
                audio.volume = 0.2;
                audio.playbackRate = 1;
                audio.play();

                    heartLost += 1;

                    allThingOneHitbox[i].remove();

                    // FAILLLLL
            

                    
                        if (heartLost == hearts.length) {
                            // SET lvl 1 HIGHSCORE
                            if (parseInt(localStorage.getItem("FSlvl1HS")) < score) {
                                localStorage.setItem("FSlvl1HS", score);
                                localStorage.saveServer
                            }

                            document.getElementById("lvl1Highscore").textContent = localStorage.getItem("FSlvl1HS");
                            failScreen();
                            removePowers();
                            resetVariables();
                        }
                    
                }
                

            }
            var viewTest = document.getElementById("mainContainer");
            var viewSubject = viewTest.lastElementChild;

            var fallingCount = document.querySelectorAll(".falling-container");
            var fallingCountLength = fallingCount.length;

           
            for(let i = 0; i < fallingCountLength; i++){
            if (isInViewport(viewSubject) === false) {
  
               viewSubject.remove();

               viewSubject = viewTest.lastElementChild;

            }
        }

            // WIN GAME
            if (score >= 1500 && onlyOne111 == 1){
                localStorage.setItem("FSlvl1Won", "true");
                localStorage.setItem("FSlvl2Unlocked", "true");
                localStorage.saveServer

                document.getElementById("lvl2Slide").src = "img/lvl2/lvl2_background.jpg";
                document.getElementById("lvl2Slide").style.backgroundImage = "none";

                onlyOne111 += 1;
                document.getElementById("lvlAlertText").textContent = "Level Won!";
                document.getElementById("potionBar").style.display = "none";
                document.getElementById("lvlAlertText").style.display = "inline-block";
                document.getElementById("lvlAlertAnimation").style.display = "inline-block";

                setTimeout(function(){
                    document.getElementById("potionBar").style.display = "flex";
                document.getElementById("lvlAlertText").style.display = "none";
                document.getElementById("lvlAlertAnimation").style.display = "none";
                }, 4000);
            }
    }

            // Test if falling-container is in viewport

            

            



            
            
            function checkPowers() {
                if (score >= 500 && onlyOne11 == 1) {
                    power1Repeat = setInterval(power1Function, 10);
                    onlyOne11 += 1;
                }
            }

            

           


            // Add powers based on score

            function power1Function() {
            // MOUSEOVER BOMBS AKA POWER1
            
                power1On = 1;
                
            

            if(power1On == 1){
                
                // Set Events
                while (onlyOne == 1) {
                    document.getElementById("mainContainer").addEventListener("mousedown", function(evt) {
                        powerOneToggle = true;
                    });
                    document.getElementById("mainContainer").addEventListener("mouseup", function(evt) {
                        powerOneToggle = false;
                    });

                    // SET ICON
                var pow1IconHTML = "<div class='power-icon power1' id='power1Icon'></div>";

                document.getElementById("potionBar").insertAdjacentHTML("afterbegin", pow1IconHTML);
                
                    
                    onlyOne += 1;
                }

                if (powerOneToggle == true) {
                    document.getElementById("body").style.cursor = "url('img/lvl1/power1.cur'), crosshair"
                   var extraHeartOrbP1 = mainContainerr.querySelectorAll(".pow1.extra-heart-orb-clickbox");
                   var blueCrystalP1 = mainContainerr.querySelectorAll(".pow1.blue-crystal-clickbox");
                   var redPotionsP1 = mainContainerr.querySelectorAll(".pow1.red-potion-clickbox");
                   var bombsP1 = mainContainerr.querySelectorAll(".pow1.bomb-clickbox");
                   var bombsLengthP1 = bombsP1.length;
                   var snowflakeP1 = mainContainerr.querySelectorAll(".pow1.snowflake-clickbox");
                   var snowflakeLengthP1 = snowflakeP1.length;
                   var redPotionslengthP1 = redPotionsP1.length;
                   var extraHeartOrblengthP1 = extraHeartOrbP1.length;
                   var blueCrystalLengthP1 = blueCrystalP1.length;
                   
                   
                    
                for (let i = 0; i < bombsLengthP1; i++) {
                    bombsP1[i].addEventListener("mouseover", bombClicked);
                    bombsP1[i].classList.remove("pow1");
                    
                }

                for (let i = 0; i < redPotionslengthP1; i++) {
                    redPotionsP1[i].addEventListener("mouseover", redPotionEffect);
                    redPotionsP1[i].classList.remove("pow1");
                }

                for (let i = 0; i < extraHeartOrblengthP1; i++) {
                    extraHeartOrbP1[i].addEventListener("mouseover", extraHeartOrbEffect);
                    extraHeartOrbP1[i].classList.remove("pow1");
                }

                for (let i = 0; i < blueCrystalLengthP1; i++) {
                    blueCrystalP1[i].addEventListener("mouseover", blueCrystalEffect);
                    blueCrystalP1[i].classList.remove("pow1");
                }

                for (let i = 0; i < snowflakeLengthP1; i++) {
                    snowflakeP1[i].addEventListener("mouseover", snowflakeEffect);
                    snowflakeP1[i].classList.remove("pow1");
                }
                
            
            
            }

                if (powerOneToggle == false) {
                    document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";
                var extraHeartOrbP1 = mainContainerr.querySelectorAll(".extra-heart-orb-clickbox:not(.pow1)");
                   var redPotionsP1 = mainContainerr.querySelectorAll(".red-potion-clickbox:not(.pow1)");
                   var bombsP1 = mainContainerr.querySelectorAll(".bomb-clickbox:not(.pow1)");
                   var blueCrystalP1 = mainContainerr.querySelectorAll(".blue-crystal-clickbox:not(.pow1)");
                   var snowflakeP1 = mainContainerr.querySelectorAll(".snowflake-clickbox:not(.pow1)");
                   var snowflakeLengthP1 = snowflakeP1.length;
                   var blueCrystalLengthP1 = blueCrystalP1.length;
                   var bombsLengthP1 = bombsP1.length;
                   var redPotionslengthP1 = redPotionsP1.length;
                   var extraHeartOrblengthP1 = extraHeartOrbP1.length;
                   

                   for (let i = 0; i < bombsLengthP1; i++) {
                    bombsP1[i].removeEventListener("mouseover", bombClicked);
                    bombsP1[i].classList.add("pow1");
                }

                for (let i = 0; i < redPotionslengthP1; i++) {
                    redPotionsP1[i].removeEventListener("mouseover", redPotionEffect);
                    redPotionsP1[i].classList.add("pow1");
                }

                for (let i = 0; i < extraHeartOrblengthP1; i++) {
                    extraHeartOrbP1[i].removeEventListener("mouseover", extraHeartOrbEffect);
                    extraHeartOrbP1[i].classList.add("pow1");
                }

                for (let i = 0; i < blueCrystalLengthP1; i++) {
                    blueCrystalP1[i].removeEventListener("mouseover", blueCrystalEffect);
                    blueCrystalP1[i].classList.add("pow1");
                }

                for (let i = 0; i < snowflakeLengthP1; i++) {
                    snowflakeP1[i].removeEventListener("mouseover", snowflakeEffect);
                    snowflakeP1[i].classList.add("pow1");
                }
                
            }

                
            }
            if (power1On == 2) {
                while (onlyOne1 == 1){
                document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
                    powerOneToggle = true;
                });
                document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
                    powerOneToggle = false;
                });
                document.querySelector(".power1").remove();
                onlyOne1 += 1;
            }

            }

            


            
        }

        function power2Function(evt) {
            console.log(evt.button);
            if ((evt.key == "S") || (evt.key == "s") || (evt.button == "0")) {
                tempSpeed = 0;
                document.querySelector(".power2.power-icon").style.boxShadow = "0px 0px 15px 10px rgba(0, 204, 255, 0.664)";
                window.removeEventListener("keydown", power2Function);
                document.getElementById("power2Icon").removeEventListener("click", power2Function);
                var tempCounterr = counter;
                clearInterval(generationRepeat);

                var audio = new Audio('sounds/lvl1/ice_cracking.mp3');
                audio.volume = 1;
                audio.playbackRate = 1.9;
                audio.play();

                document.getElementById("mainWrapper").style.backgroundImage = "url('img/lvl1/frost_overlay.png')";
                document.getElementById("mainWrapper").style.backgroundSize = "100% 100%";

                if (currentTime == 1) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 15);
                    tempSpeed = 1;
                }

                if (currentTime == 2) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 14);
                    tempSpeed = 2;
                }

                if (currentTime == 3) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 13);
                    tempSpeed = 3;
                }

                if ((currentTime == 4) || (currentTime == 5) || (currentTime == 6)){
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9);
                    tempSpeed = 4;
                }

                if (currentTime == 7) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9);
                    tempSpeed = 5;
                }

                if (currentTime == 8) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9);
                    tempSpeed = 6;
                }

                if (currentTime == 9) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9);
                    tempSpeed = 7;
                }

                if (currentTime == 10 || currentTime == 11) {
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9);
                    tempSpeed = 8;
                }
                
                setTimeout(function(){
                    if (pow2Good == true){
                    if (tempSpeed == 1) {
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 10); 
                    }
        
                    if (tempSpeed == 2) {
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 9); 
                    }
        
                    if (tempSpeed == 3) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 7); 
                    }
        
                    if (tempSpeed == 4) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 5); 
                    }
        

                    if (tempSpeed == 5) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 4);
                    }
        
                    if (tempSpeed == 6) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 3);
                    }
        
                    if (tempSpeed == 7) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 2);
                    }
                    if (tempSpeed == 8) {
                        
                        clearInterval(moveItemsRepeat);
                        moveItemsRepeat = setInterval(moveItems, 1);
                    }
                    generationRepeat = setInterval(lvlOneGeneration, 1000);
                    counter = tempCounterr;
                    document.getElementById("mainWrapper").style.backgroundImage = "none";
                    document.querySelector(".power2.power-icon").remove();
                }
                },5000);

            }

        }
    
    
    
    // REMOVE POWERS
    function removePowers() {
        // POWER ONE REMOVAL

        var power1Current = document.querySelectorAll('.power1.power-icon');

        if (power1Current.length >= 1) { 

        document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
            powerOneToggle = true;
        });
        document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
            powerOneToggle = false;
        });
        
        powerOneToggle = false;
        power1On = 0;
        onlyOne = 1;
        document.querySelector(".power1.power-icon").remove();

        // POWER 2
        
    }

    var power2Current = document.querySelectorAll(".power2.power-icon");
    pow2Good = false;

    if (power2Current.length >= 1){

        
            clearInterval(moveItemsRepeat);
            
        
        
        document.getElementById("mainWrapper").style.backgroundImage = "none";
        
        power2Current[0].remove();
        window.removeEventListener("keydown", power2Function);
    }
    }

    function resetVariables() {
        onlyOne = 1;
        onlyOne1 = 1;
        score = 0;
    }


    
















// ONCLICK FUNCTIONS

// BOMBS

function bombClicked(evt) {
    this.removeEventListener("click", bombClicked);
    this.removeEventListener("mouseover", bombClicked);
    
    this.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.4;
    audio.playbackRate = 1.1;
    audio.play();
    var targetElementTemp = this.querySelectorAll(".thing-one");
    var targetElement = targetElementTemp[0];
    
    this.querySelector(".thing-one-hitbox").remove();
    targetElement.style.height = "7.5vw";
    targetElement.style.width = "9.5vw";
    var nowLeft = this.style.getPropertyValue("left");
    var calcLeft = parseInt(nowLeft) - 1;
    this.style.left = calcLeft + "vw";
    
    targetElement.style.background = "url('img/lvl1/bomb_explosion_sprite.png')" ;
    targetElement.style.animation = "bomb_explosion 400ms steps(8)";
    targetElement.style.backgroundSize= "800% 100%";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        this.remove();
    }, 390);
}



// RED POTIONS

function redPotionEffect(evt) {
    
    this.removeEventListener("click", redPotionEffect);
    this.removeEventListener("mouseover", redPotionEffect);

    var goneHeartState = document.querySelectorAll(".heart-gone");

    score += 15;
    document.getElementById("score").innerHTML = score;
    var targetElement = this.querySelector(".red-potion");
    if (goneHeartState.length >= 1){
        this.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.4;
        audio.playbackRate = 1;
        audio.play();
        
        targetElement.style.background = "url('img/red_splash_sprite.png')" ;
        targetElement.style.animation = "red_splash 480ms steps(24)";
        targetElement.style.backgroundSize= "2400% 100%";
        var targetHeart = goneHeartState.length - 1;
        goneHeartState[targetHeart].style.backgroundImage = "url('img/heart.png')";
        goneHeartState[targetHeart].classList.remove("heart-gone");
        goneHeartState[targetHeart].classList.add("heart-here");
        heartLost -= 1;
    } else {
        this.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.2;
        audio.playbackRate = 1;
        audio.play();
        targetElement.style.background = "url('img/red_splash_sprite.png')" ;
        targetElement.style.animation = "red_splash 480ms steps(24)";
        targetElement.style.backgroundSize= "2400% 100%";
}

    setTimeout(() => {
        this.remove();
    }, 480);
}


// RARE EXTRA HEART ORB

    function extraHeartOrbEffect(evt) {
        
        var targetElement = this.querySelector(".extra-heart-orb");
        
        this.removeEventListener("click", extraHeartOrbEffect);
        this.removeEventListener("mouseover", extraHeartOrbEffect);
        score += 80;
        document.getElementById("score").innerHTML = score;
        this.style.zIndex = "1";
        var audio = new Audio('sounds/lvl1/heart_orb.mp3');
        audio.volume = 0.2;
        audio.playbackRate = 1;
        audio.play();
        targetElement.style.height = "8vw";
        targetElement.style.width = "8vw";
        
        targetElement.style.background = "url('img/extra_heart_orb_explosion_sprite.png')" ;
        targetElement.style.animation = "extra_heart_orb_explosion 480ms steps(19)";
        targetElement.style.backgroundSize= "1900% 8vw";

        // Insert heart before the first alive heart
        var heartsHere = document.querySelectorAll(".heart-here");
        heartsHere[0].insertAdjacentHTML("beforebegin", "<div class='heart-img heart-here extra-heart' id='heartImage'></div>");

        setTimeout(() => {
            this.remove();
        }, 470);
    }

    function blueCrystalEffect(evt) {
        var targetElement = this.querySelector(".blue-crystal");
        
        this.removeEventListener("click", blueCrystalEffect);
        this.removeEventListener("mouseover", blueCrystalEffect);
        this.querySelector(".thing-one-hitbox").remove();
        score += 10;
        document.getElementById("score").innerHTML = score;
        this.style.zIndex = "1";
        var audio = new Audio('sounds/blue_crystal_explosion.mp3');
        audio.volume = 0.1;
        audio.playbackRate = 1;
        audio.play();
        targetElement.style.height = "8vw";
        targetElement.style.width = "8vw";

        targetElement.style.background = "url('img/blue_crystal_explosion_sprite.png')" ;
        targetElement.style.animation = "blue_crystal_explosion 300ms steps(15)";
        targetElement.style.backgroundSize= "1500% 8vw";

        setTimeout(() => {
            this.remove();
        }, 300);
    }



function snowflakeEffect(evt) {
    pow2Good = true;
    var targetElement = this.querySelector(".snowflake");
        
        this.removeEventListener("click", snowflakeEffect);
        this.removeEventListener("mouseover", snowflakeEffect);
        score += 100;
        document.getElementById("score").innerHTML = score;
        this.style.zIndex = "1";
        var audio = new Audio('sounds/lvl1/ice_break.mp3');
        audio.volume = 0.2;
        audio.playbackRate = 1;
        audio.play();
        targetElement.style.height = "5.6vw";
        targetElement.style.width = "4.5vw";
        
        targetElement.style.background = "url('img/snowflake_explosion_sprite.png')" ;
        targetElement.style.animation = "snowflake_explosion 300ms steps(16)";
        targetElement.style.backgroundSize= "1600% 5.6vw";

        var pow2IconHTML = "<div class='power-icon power2' id='power2Icon'></div>";

       

        document.getElementById("potionBar").insertAdjacentHTML("afterbegin", pow2IconHTML);

         // MAKE ICON CLICKABLE

         document.getElementById("power2Icon").addEventListener("click", power2Function);

        // POWERRR 2

        window.addEventListener("keydown", power2Function);


        setTimeout(() => {
            this.remove();
        }, 300);
}

    