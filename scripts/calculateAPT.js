function calculateAPT(){
	var result;
	var atk = document.getElementById("atk").value;
	var ls = ((document.getElementById("ls").value / 100) * 2) + 1;
	var links = (document.getElementById("links").value / 100) + 1;
	var passive1 = (document.getElementById("passive1").value / 100) + 1;
	var passive2 = (document.getElementById("passive2").value / 100) + 1;
	var passive = passive1 * passive2;
	var ki = (document.getElementById("ki").value / 100);
	var crit1 = (document.getElementById("crit1").value / 100) * 2;
	var crit2 = (document.getElementById("crit2").value / 100);
	var crit;
	if (crit2 == 0)
		crit = crit2;
	else if (crit1 == 0)
		crit = crit2;
	else{
	crit = (crit1 + crit2) - (crit1 * crit2); 
	}
	var add1 = (document.getElementById("add1").value / 100);
	var add2 = (document.getElementById("add2").value / 100) / 2;
	var add;
	if (add1 == 0)
		add = add2;
	else if (add2 == 0)
		add = add1;
	else{
		add = (add1 + add2) - (add1 * add2);
	}
	var dm = 0;
	var raise = 0;
	var SE = 1;
	var SABoost = (document.getElementById("SABoost").value * 5) / 100;
	if (atk == 0 || ki == 0){
		window.alert("parameters empty, please enter all the parameters");
		exit();
	}
	if (document.getElementById("supreme").checked && document.getElementById("SA10").checked)
		dm=4.3;
	if (document.getElementById("immense").checked && document.getElementById("SA10").checked)
		dm=5.05;
	if (document.getElementById("supreme").checked && document.getElementById("SA15").checked)
		dm=5.3;
	if (document.getElementById("immense").checked && document.getElementById("SA15").checked)
		dm=6.3;
	if (document.getElementById("Colossal").checked && document.getElementById("SA10").checked)
		dm=3.45;
	if (document.getElementById("Colossal").checked && document.getElementById("SA15").checked)
		dm=3.7;
	if (document.getElementById("Colossal").checked && document.getElementById("SA20").checked)
		dm=4.25;
	if (document.getElementById("Colossal").checked && document.getElementById("SA25").checked)
		dm=4.50;
	if (document.getElementById("Mega-Colossal").checked && document.getElementById("SA10").checked)
		dm=4.4;
	if (document.getElementById("Mega-Colossal").checked && document.getElementById("SA15").checked)
		dm=4.9;
	if (document.getElementById("Mega-Colossal").checked && document.getElementById("SA20").checked)
		dm=5.7;
	if (document.getElementById("Mega-Colossal").checked && document.getElementById("SA25").checked)
		dm=6.2;
	if (document.getElementById("30Raise").checked)
		raise = 0.3;
	if (document.getElementById("50Raise").checked)
		raise = 0.5;
	if (document.getElementById("100Raise").checked)
		raise = 1;
	dm = dm + SABoost + raise;
		
	if(document.getElementById("yes").checked)
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
