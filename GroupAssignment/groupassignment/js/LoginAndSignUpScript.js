function confirmAction() {
     var submit= confirm("Are you sure to submit?");
	 
	return submit;	  
    }
function resetForm() {
    var reset = confirm('Reset all fields?');
    if (reset) {
        console.log("Resetting form modifications.");
        // note - could do this with an array of required fields
        
    }
    return reset;
}

function alertUser(){
	return alert("In put your name with A-Z only")
}