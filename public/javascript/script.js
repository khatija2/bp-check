let assess = document.querySelector("#assess")
let modCont = document.querySelector("#mod-cont")
let systolic = document.querySelector("#systolic")
let diastolic = document.querySelector("#diastolic")
let optimal = document.querySelector("#optimal")


function checkBp () {
	document.querySelector("#assess").addEventListener('click', () => {
	let systolicN = parseInt(document.getElementById("systolic").value)
	let diastolicN = parseInt(document.getElementById("diastolic").value)
	if (systolicN <= 120 && systolicN>=80 && diastolicN <= 80 && diastolicN >= 50 ){
document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: green; color: white">
              <h5 class="modal-title">Congratulations!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Your blood pressure is optimal!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `

} else if (systolicN > 120 && systolicN <= 129 && diastolicN <= 86) {
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: rgb(120, 243, 19)">
              <h5 class="modal-title">Great!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Your blood pressure is normal!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
} else if (systolicN >=130 && systolicN < 140 && diastolicN < 90 ) {
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: yellow">
              <h5 class="modal-title">Caution!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Your blood pressure is high-normal!  Implement lifestyle changes and see your doctor if necessary.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
	
} else if(systolicN >=140 && systolicN <180 && diastolicN <=120 ){
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: rgb(240, 14, 14); color: white">
              <h5 class="modal-title">See your doctor!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Your blood pressure is high!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
	
}  else if(systolicN >=180 && systolicN <=250){
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: rgb(131, 8, 8); color: white">
              <h5 class="modal-title">Danger! Hypertensive crisis!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Seek emergency care!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
	

} else if(diastolicN >= 90 && diastolicN <=120 ){
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: rgb(240, 14, 14); color: white">
              <h5 class="modal-title">See your doctor!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Your blood pressure is high!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
		
} else if(diastolicN >=120 && diastolicN <=250){
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: rgb(131, 8, 8); color: white">
              <h5 class="modal-title">Danger! Hypertensive crisis!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Seek emergency care!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
} else {
	document.querySelector("#mod-cont").innerHTML = ` <div class="modal-header" style="background-color: grey; color: white">
              <h5 class="modal-title">Error</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Chat to your pharmacist</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Return to survey</button>
            </div> `	
	
}
	})}

checkBp ()

