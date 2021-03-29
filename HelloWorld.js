function submit() {
  var varfname = document.getElementById("idfname");
  var varmname = document.getElementById("idmname");
  var varlname = document.getElementById("idlname");
  var varsugg = document.getElementById("idsugg");
  if(idmale.checked == true){
	  var vargndr = "Mr. ";
  }if(idfemale.checked == true){
	  var vargndr = "Ms. ";
  }
}
if(varfname.value== ""|| varlname.value== ""|| varsugg.value== ""|| (!(idmale.checked){
	alert("Please Enter the required field");
}
function reset() {
  document.getElementById("formfeedback").reset();
}

