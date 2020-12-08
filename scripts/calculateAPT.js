function calculateAPT(){
	var result;
	var atk = document.getElementById("atk").value;
	var ls = document.getElementById("ls").value;
	var links = document.getElementById("links").value;
	var passive = document.getElementById("passive").value;
	var ki = document.getElementById("ki").value;
	var crit = document.getElementById("crit").value;
	var add = document.getElementById("add").value / 2;
	var dm = document.getElementById("dm").value;
	var SE = 1;
	if (atk == 0 || ls == 0 || links == 0 || passive == 0
		|| ki == 0 || dm == 0){
		window.alert("parameters empty, please enter all the parameters");
		exit();
	}
	if (document.getElementById("yes").checked)
		SE = 1.5;
	var preSA = atk * ls * links * passive * ki;
	var SA = preSA * dm;
	var SACrit = SA * 1.9 * crit;
	var SAnoCrit = SA * SE * (1-crit);
	var SATOT = SACrit + SAnoCrit;
	var preSACrit = preSA * 1.9 * crit;
	var preSAnoCrit = preSA * SE * (1-crit);
	var preSATOT = preSACrit + preSAnoCrit;
	result = SATOT + (SATOT * add) + (preSATOT * add);
	var value = result.toLocaleString(
  	undefined, // leave undefined to use the browser's locale,
             // or use a string like 'en-US' to override it.
  	{ minimumFractionDigits: 2 }
	);
	window.alert("your APT is: " + value);
}