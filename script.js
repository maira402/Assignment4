const name = document.getElementById("name");  
const startingBid = document.getElementById("startingbid");
const education = document.getElementById("education"); 
const family = document.getElementById("family"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const reputation = document.getElementsByName("reputation");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");


submitQuote.addEventListener('click', function(){
		if (familyNet.options[familyNet.selectedIndex].text == "More than 100,000$") {
			answer = 500 * 2;
		  } else if (familyNet.options[familyNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
			answer = 500 * 1.5;
		  } else {
			answer = 500 * 1.2;
		  }  
		if (brideEducation.options[brideEducation.selectedIndex].text == "Undergraduate degree") {
			answer = answer * 1.5;
		  } else if (brideEducation.options[brideEducation.selectedIndex].text == "College degree") {
			answer = answer * 1.2;
		  } else if (brideEducation.options[brideEducation.selectedIndex].text == "High school degree") {
			answer = answer * 1.05;
		  } else 
			answer = answer*0.9;
			var skills = document.getElementsByTagName("input");
			for (var i = 0; i < 4; i++)
			{
			   if (skills[i].checked)
			   {
				  answer += (skills[i].value * 1);
			   }
			}
const getCheckboxValuesForLoop = (age, price) => { 
	for (let i=0; i < age.length; i++) {  
		if (age[i].checked && Number.isInteger(Number(age[i].value))) {
			price = price + Number(age[i].value)
		}
		else if (age[i].checked && !Number.isInteger(age[i].value)) {
			price = price * Number(age[i].value)
		}
	}
	return price;
}
button.addEventListener("click", calculate);
});