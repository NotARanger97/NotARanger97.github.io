function calculateAPT(){
	var result;
	var atk = document.getElementById("atk").value;
	var ls = document.getElementById("ls").value;
	var links = document.getElementById("links").value;
	var passive = document.getElementById("passive").value;
	var ki = document.getElementById("ki").value;
	var crit = document.getElementById("crit").value;
	var add = document.getElementById("add").value;
	var dm = document.getElementById("dm").value;
	if (atk == 0 || ls == 0 || links == 0 || passive == 0
		|| ki == 0 || crit == 0 || add == 0 || dm == 0){
		window.alert("parameters empty, please enter all the parameters");
		exit();
}
	var preSA = atk * ls * links * passive * ki;
	var SA = preSA * dm;
	var fixedcrit = (0.9 * crit ) + 1;
	var SACrit = (SA * fixedcrit);
	var preSACrit = (preSA * fixedcrit);
	result = SACrit + (SACrit * add) + (preSACrit * add);
	window.alert("your APT is: " + result.toFixed(2));
}