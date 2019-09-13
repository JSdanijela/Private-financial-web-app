const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const title = document.querySelector('#naslov');
const setupUI = (user) => {
if(user){
	//toggle UI elements
	loggedInLinks.forEach(item => item.style.display ="block");
	loggedOutLinks.forEach(item => item.style.display = "none");
	title.style.visibility = "visible";
}else{
	//toggle UI elements
		loggedInLinks.forEach(item => item.style.display ="none");
	loggedOutLinks.forEach(item => item.style.display = "block");
		title.style.visibility = "hidden";
}
}
//setup guides
const setupGuides = (data) => {

if(data.length) {
let html = '';
let sum = 0;
data.forEach(doc => {
const guide = doc.data();
sum += +guide.content;
const li = `
    <tr>
<td class="table-header white" id="ime">${guide.title}</td>
<td class="table-body grey lighten-4" id="datum">${guide.date}</td>
<td class="table-body white" id="opis">${guide.description}</td>
<td class="table-body white" id="iznos">${guide.content.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
</tr>
    `;

html += li

});


guideList.innerHTML = `
${html}
<tr>
<td class="table-body white"></td>
<td class="table-body white"></td>
<td class=""table-body white" style="font-weight: bold;">Sum:</td>
<td class=""table-body grey lighten-4">${sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
</tr>
`;

} else{
	guideList.innerHTML = '<h1 id="pocetna" class="center-align">You have to be logged in</h1>'
}
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

var modals = document.querySelectorAll('.modal');
M.Modal.init(modals);

});

//SELECT
  $(document).ready(function() {
         $('select').material_select();
         });

//FILTER

 function nameSearch() {
  var input2, filter2, td2, input3, filter3, td3, input, filter, table, tr, td, i, td4, filter4, input4;
  input = document.getElementById("mylist");
  filter = input.value.toUpperCase();

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  input2 = document.getElementById("mylist2");
 filter2 = input2.value.toUpperCase();

   input3 = document.getElementById("mylist3");
 filter3 = input3.value;

  input4 = document.getElementById("mylist4");
 filter4 = input4.value;


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[2];
     td3 = tr[i].getElementsByTagName("td")[1];
  td4 = tr[i].getElementsByTagName("td")[1];

    if (td && td2) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 &&
       td2.innerHTML.toUpperCase().indexOf(filter2) > -1 && 
       td3.innerHTML.indexOf(filter3.toString()) > -1 && 
       td4.innerHTML.slice(3,5).indexOf(filter4.toString()) > -1)   {
        tr[i].style.display = "";

      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//SORTING
 function convertDate(d) {
  var p = d.split("/");
  return +(p[2]+p[1]+p[0]);
}

function sortByDate() {
  var tbody = document.querySelector("#myTable tbody");
  // get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(b.cells[1].innerHTML) - convertDate(a.cells[1].innerHTML);
  });
  
  rows.forEach(function(v) {
    tbody.appendChild(v); //  .appendChild() *moves* elements
  });
}

document.querySelector("#sort").addEventListener("onclick", sortByDate);
   
function sortByDate2() {
  var tbody = document.querySelector("#myTable tbody");
  // get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[1].innerHTML) - convertDate(b.cells[1].innerHTML);
  });
  
  rows.forEach(function(v) {
    tbody.appendChild(v); // .appendChild() *moves* elements
  });
}

document.querySelector("#sort2").addEventListener("onclick", sortByDate2);






