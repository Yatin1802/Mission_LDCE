
//var workItems=[]; //all the work items along with MDO name will be loaded in to this array when the page loads


var DBsize = AOBR_QB.length;

function loadAllWorkItems(){
    if(localStorage.getItem('sessionValidity')=='true'){
        let inputStr = document.getElementById('search_input'); 

         if(inputStr.value.length>0){

            inputStr.value='';

           }
    }

    else{
        location.assign('../index.html');
    }
  
}

// function checkIntegrity(){
//     for(let i = 0;i<10;i++){
//         console.log(workItems[i]);
       
        
//     }
// }

function loadLookupTable(){

    resetTable();
    document.getElementById('noMatch').innerHTML="";

    if(document.getElementById('search_input').value.length>2)
    {
        console.log(document.getElementById('search_input').value.length);
        for(let i=0;i<DBsize;i++){

            let mdoName = AOBR_QB[i][0];
            let filteredArr = AOBR_QB[i][1].filter(matchStr);

            console.log(filteredArr);
        
            if (filteredArr.length > 0){
                addRow(mdoName, filteredArr);
            }
        }
    }
    // if(document.getElementById('search_input').value.length==0){
    //     resetTable();
    // }
   
   if(document.getElementById('lookup_results').rows.length<=1){
       if(document.getElementById('search_input').value.length>2){
           document.getElementById('noMatch').innerHTML="No Match Found";
       }
    
   }


    //console.log(filteredArr);
   
   // filterArray();
    //addRow(filteredArr);
}

function matchStr(strInput){

    var inputStr= document.getElementById('search_input').value;
    return strInput.toLowerCase().includes(inputStr.toLowerCase());
}



function addRow(name, arr){

    //console.log(inputStr);
    let result_Table = document.getElementById('lookup_results');
    let strCount = arr.length;
    //let numRows = result_Table.rows.length;

    for(let i =1;i<=strCount;i++){

        let row =result_Table.insertRow(result_Table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell2.innerHTML = name;
        cell1.innerHTML = arr[i-1];
        if(cell1.innerHTML.substring(0,1)=="*"){
            cell1.style.fontWeight="bold";
            let strlen = cell1.innerHTML.length; // the length is needed to slice the string
            cell1.innerHTML = cell1.innerHTML.substring(1,strlen); // The * is being removed
        }

    }
    

}

function resetTable(){
    
    let result_Table = document.getElementById('lookup_results');
    let numRow = result_Table.rows.length;
    console.log('tab'+numRow);
    for(let i=numRow;i>1;i--){
        result_Table.deleteRow(i-1);
        console.log('table');
    }
}