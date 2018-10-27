function fulltime () 
{
	
	var time=new Date();/*Создание объекта для вызова функций*/
	var tex = document.getElementById('cl');
	tex.textContent = time.toLocaleString();/*Привязка к тегу form (обращение через точки) и вызов функции объекта time*/
	setTimeout('fulltime()',1000); /*Установка инервала между вызовами функци*/
}

function Divrun() 
{
	var b = Left;
	var a = Top;
	var timerId;
	var rand = 0.5 + Math.random() * (4.5);	/*Генерация не целого числа от 1 до 4*/
	rand = Math.round(rand);	/*Округление сгенерированного числа до целого*/
	if(rand === 1)
	{	// начать повторы с интервалом
		timerId = setInterval(function() { INCDECLT(timerId, b, a); }, 0);
		JObj.src = 'img/jet2.gif';
	}
	else if(rand === 2)
	{	
		timerId = setInterval(function() { INCINCLT(timerId, b, a); }, 0);
		JObj.src = 'img/jet2.gif';
	}
	else if(rand === 3)
	{	
		timerId = setInterval(function() { DECINCLT(timerId, b, a); }, 0);
		JObj.src = 'img/jet.gif';
	}
	else if(rand === 4)
	{
		timerId = setInterval(function() { DECDECLT(timerId, b, a); }, 0);
		JObj.src = 'img/jet.gif';
	}
	tim = setTimeout('Divrun()', 400);
}

function INCDECLT(timerId, b, a) 
{
	if(Left==1870){
		clearInterval(timerId);
	}
	else if(Left-b < Math.abs(250)){
		Left++;
	}	
	else{
		clearInterval(timerId);
	}
	if(Top==200){
		clearInterval(timerId);	
	}
	else if(Top-a < Math.abs(250)){
		Top--;
	}	
	else{
		clearInterval(timerId);
	}
	GObj.style.left = Left+"px";/*Преобразование числа в строку и изменения стиля объекта*/
	GObj.style.top = Top+"px";/*Преобразование числа в строку и изменения стиля объекта*/
}
function INCINCLT(timerId, b, a) 
{
		if(Left==1870){
		clearInterval(timerId);
	}
	else if(Left-b < Math.abs(250)){
		Left++;
	}	
	else{
		clearInterval(timerId);
	}
	if(Top==5000){
		clearInterval(timerId);	
	}
	else if(Top-a < Math.abs(250)){
		Top++;
	}	
	else{
		clearInterval(timerId);
	}
	GObj.style.left = Left+"px";/*Преобразование числа в строку и изменения стиля объекта*/
	GObj.style.top = Top+"px";/*Преобразование числа в строку и изменения стиля объекта*/
}
function DECINCLT(timerId, b, a) 
{
		if(Left==50){
		clearInterval(timerId);
	}
	else if(Left-b < Math.abs(250)){
		Left--;
	}	
	else{
		clearInterval(timerId);
	}
	if(Top==5000){
		clearInterval(timerId);	
	}
	else if(Top-a < Math.abs(250)){
		Top++;
	}	
	else{
		clearInterval(timerId);
	}
	GObj.style.left = Left+"px";/*Преобразование числа в строку и изменения стиля объекта*/
	GObj.style.top = Top+"px";/*Преобразование числа в строку и изменения стиля объекта*/
}
function DECDECLT(timerId, b, a) 
{
		if(Left==50){
		clearInterval(timerId);
	}
	else if(Left-b < Math.abs(250)){
		Left--;
	}	
	else{
		clearInterval(timerId);
	}
	if(Top==200){
		clearInterval(timerId);	
	}
	else if(Top-a < Math.abs(250)){
		Top--;
	}	
	else{
		clearInterval(timerId);
	}
	GObj.style.left = Left+"px";/*Преобразование числа в строку и изменения стиля объекта*/
	GObj.style.top = Top+"px";/*Преобразование числа в строку и изменения стиля объекта*/
}

function cleaner()
{
	clearInterval(tim);
	GObj.innerHTML = "<a href=#Fragment5><img id=jet src='img/crash.gif' alt=Реклама></a>";
	JObj = document.getElementById('jet');
}

function obr(image, element)
{
    var image = document.getElementById(image)
    var element = document.getElementById(element)
	
    // Определить состояние элемента
    if (element.style.display == "none")
	{ 
		// Если элемент скрыт, то показать его
		element.style.display = "block";
		image.src = "img/open.gif"//open
    }
	else
	{
		// Если элемент показывается, то скрыть его
		element.style.display = "none";
		image.src = "img/close.gif";//close
    }
}

function ShowCoordinates()
{
	objOut.textContent = "X: " + Left + " Y: " + Top; 
	setTimeout('ShowCoordinates()', 10);
}

function ret(event)
{
	var updownElem  = document.getElementById('updown');
	
	var Y = window.pageYOffset || document.documentElement.scrollTop;
	
	var innerHeight = document.documentElement.clientHeight;

	switch (updownElem.className)
	{
    case '':
	if (Y > innerHeight) 
	{
		updownElem.className = 'up';
    }
	break;
    case 'up':
	if (Y < innerHeight)
	{
		updownElem.className = 'down';
	}
	case 'down':
	if (Y > innerHeight)
	{
		updownElem.className = 'up';
	}
	break;

  }
}

function SearchResult(event)
{
	var objForm = event.currentTarget.parentElement;
	event = event || window.event;
	var ch = event.which || event.keyCode;	//Получение кода нажатой клавиши. Браузеры по-разному
											//сохраняют коды символов в свойствах 
											//which, keycode и charCode.											
	if(ch==13)	//Если нажата Enter, то поиск
	{
		var substr = objForm.thisname.value;
		var obj = document.getElementById("dmain");
		obj.innerHTML = obj.innerHTML.replace(new RegExp(substr, 'gi'),"<span id='metka' style='background: rgba(255, 239, 17, 0.5)'>"+substr+"</span>");
		objForm.thisname.value = "";		//Очистка поля ввода поиска
		window.location ="#metka";		//Изменяет положение окна
	}
}