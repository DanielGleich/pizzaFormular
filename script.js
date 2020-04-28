function checkSex() {
	if (!document.forms[0].elements[0].checked && !document.forms[0].elements[1].checked)
	{
		window.alert("Geben Sie Ihre Anrede an!");
		return false;
	}
	return true;
}

function checkGivenName() {
	if (document.forms[0].elements[2].value == "")
	{
		window.alert("Geben Sie Ihren Vornamen an!");
		return false;
	}
	return true;
}

function checkSurName() {
	if (document.forms[0].elements[3].value == "")
	{
		window.alert("Geben Sie Ihren Nachnamen an!");
		return false;
	}
	return true;
}

function checkZIPcode() {
	if (document.forms[0].elements[4].value == "")
	{
		window.alert("Geben Sie Ihre Postleitzahl an!");
		return false;
	}
	return true;
}

function checkAll()
{

}