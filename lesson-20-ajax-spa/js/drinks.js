	"use strict";
	
var drinkStorage = new tAJAXStorage("lsDrink"),
	drinkName = document.getElementById("drinkName"),
	drinkInfo = document.getElementById("drinkInfo"),
	drinkInfoDel = document.getElementById("drinkInfoDel"),
	drinkList = document.getElementById("drinkList"),
	drinkInfoP = document.getElementById("drinkInfoP");

drinkInfoP.classList.add("drinkInfoP");//устанавливаем готовый css класс

drinkName.onclick = function() {
	var keyP = prompt("напишите название напитка"),
		valueC = {};

	valueC.alcohol = confirm(keyP + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");
	valueC.recipe = prompt("напишите рецепт напитка - " + keyP);
	drinkStorage.addValue(keyP, valueC);
}
	
drinkInfo.onclick = function() {
	var drinkInf = prompt("Напишите название напитка"),
		drinkInfoP = document.getElementById("drinkInfoP"),
		answer = drinkStorage.getValue(drinkInf);

	if (drinkStorage.getValue(drinkInf) !== undefined) {
		drinkInfoP.style.height = "auto";
		drinkInfoP.innerHTML = "Название напиток: " + drinkInf + 
							   "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") + 
							   "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
	} else {
		drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
	}
}	

drinkInfoDel.onclick = function() {
	var drinkInfoDel = prompt("Напишите название напитка"),
		drinkInfoP = document.getElementById("drinkInfoP");

	if (drinkStorage.deleteValue(drinkInfoDel) === true) {
		drinkInfoP.innerHTML = "информация о напитке УДАЛЕНО!";
	} else {
		drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
	}
}
	
drinkList.onclick = function() {
	var drinkInfoP = document.getElementById("drinkInfoP");
	drinkInfoP.innerHTML = drinkStorage.getKeys();
}