

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
                bulletList.appendChild(para);
            }
        }
    }

    updateSubHeading(mdoName);
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