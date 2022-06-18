

function loadMDO(){

    document.getElementById('work_subHeading').style.display = "none";
    //console.log(Options_DB);
    let mdoCount = Options_DB.length;

    let mdoDropDown = document.getElementById("MDO_DropDown");

    for(let i =0;i<mdoCount;i++){

        let option = document.createElement('option');
        option.text = Options_DB[i];
        mdoDropDown.add(option);
    }

    loadWorkAllocation();
}


function loadWorkAllocation(){
    
    clearPreviousWorkItems();

    let mdoDropDown = document.getElementById('MDO_DropDown');
    
    let mdoName = mdoDropDown.options[mdoDropDown.selectedIndex].text;

    let num_MDO = AOBR_QB.length;

    for (let i = 0; i< num_MDO;i++){

        if(mdoName == AOBR_QB[i][0]){
            console.log(AOBR_QB[i][1].length);

            let num_work_items = AOBR_QB[i][1].length;
            let bulletList = document.getElementById('list_work');

            for(let j = 0; j<num_work_items;j++){
                let para = document.createElement('li');
                para.innerHTML = AOBR_QB[i][1][j];

               

                //This code bolds the important work allocation items
                if(para.innerHTML.substring(0,1)=="*"){
                    para.style.fontWeight="bold";
                    let strlen = para.innerHTML.length; // the length is needed to slice the string
                    para.innerHTML = para.innerHTML.substring(1,strlen); // The * is being removed
                }  
                bulletList.appendChild(para);              
                
            }
        }

       
    }

    updateSubHeading(mdoName);
    // nextMDO();
}

function clearPreviousWorkItems(){

    let bulletList = document.getElementById('list_work');

    while(bulletList.hasChildNodes()){
        bulletList.removeChild(bulletList.firstChild);
    }

}

function updateSubHeading(name){

    let spanName = document.getElementById("name_mdo");
    let paraName = document.getElementById("work_subHeading");

    spanName.innerHTML = name;

    paraName.style.display = 'block';

}

// function nextMDO(){
//     let mdoLength = Options_DB.length-1;
//     let mdoDropDown = document.getElementById('MDO_DropDown');
//     let currentIndex = mdoDropDown.selectedIndex;
//     console.log("currentIndex"+currentIndex);
//     console.log("mdolenth"+mdoLength);
//     let aglaElement = document.getElementById('nextEntry');
//     // if(currentIndex==mdoLength){
//     //     aglaElement.style.display="hidden";
//     // }
//     // else{
//         aglaElement.innerHTML = mdoDropDown.options[mdoDropDown.selectedIndex+1].text;
//     // }
    
// }

// function showNext(){

//     clearPreviousWorkItems();

//     let mdoDropDown = document.getElementById('MDO_DropDown');
    
//     let mdoName = mdoDropDown.options[mdoDropDown.selectedIndex+1].text;

//     let num_MDO = AOBR_QB.length;

//     for (let i = 0; i< num_MDO;i++){

//         if(mdoName == AOBR_QB[i][0]){
//             console.log(AOBR_QB[i][1].length);

//             let num_work_items = AOBR_QB[i][1].length;
//             let bulletList = document.getElementById('list_work');

//             for(let j = 0; j<num_work_items;j++){
//                 let para = document.createElement('li');
//                 para.innerHTML = AOBR_QB[i][1][j];

               

//                 //This code bolds the important work allocation items
//                 if(para.innerHTML.substring(0,1)=="*"){
//                     para.style.fontWeight="bold";
//                     let strlen = para.innerHTML.length; // the length is needed to slice the string
//                     para.innerHTML = para.innerHTML.substring(1,strlen); // The * is being removed
//                 }  
//                 bulletList.appendChild(para);              
                
//             }
//         }

       
//     }

//     updateSubHeading(mdoName);
//     nextMDO();

// }