function Namer(event)
{
	var Area = event.currentTarget;
	
	var MapSourses = MapObj.getBoundingClientRect();	
	var MapTop = MapSourses.top;											//Отступ карты сверху
    var MapLeft = MapSourses.left;
	var MapBW = (MapSourses.width - MapObj.clientWidth)/2;	

	var outX = event.clientX ;
	var OutLeft = outX - MapLeft;	

	if (outX < MapLeft+ MapBW)									// Если левый край выходит за внутренний край рамки 
	{
		OutLeft = DX;
    }
	
    var outY = event.clientY - OutH - MapBW;					// Y координата верхней стороны элемента
    var topOut = outY - MapTop - MapBW;							// Позиция элемента внутри рамки
   
    if (outY < MapTop+MapBW)									// Если левый край выходит за внутренний край рамки 
	{
		topOut = DY;
    }
    OutObj.style.left = OutLeft + "px";
    OutObj.style.top = topOut + "px";
	
	OutObj.textContent = Area.alt;
	OutObj.style.display = "block";
	
	Area.removeEventListener("mouseover",Namer, false);
	Area.addEventListener("mousemove",mover, false);
	Area.addEventListener("mouseout",invis, false);
}

function mover(event)
{
	var Area = event.currentTarget;
	var MapSourses = MapObj.getBoundingClientRect();	
	var MapTop = MapSourses.top;											//Отступ карты сверху
    var MapLeft = MapSourses.left;
	var MapBW = (MapSourses.width - MapObj.clientWidth)/2;
	var outX = event.clientX ;
	var OutLeft = outX - MapLeft;
	if (outX < MapLeft+ MapBW)									// Если левый край выходит за внутренний край рамки 
	{
		OutLeft = DX;
    }
    var outY = event.clientY -OutH- MapBW;							// Y координата верхней стороны элемента
    var topOut = outY - MapTop-MapBW;							// Позиция элемента внутри рамки
    if (outY < MapTop+MapBW){
		topOut = DY;
    }  
    OutObj.style.left = OutLeft + "px";
    OutObj.style.top = topOut + "px";
}

function invis(event)
{
	OutObj.textContent = "";
	OutObj.style.display = "none";
	var Area = event.currentTarget;
	Area.removeEventListener("mouseout",invis, false);
	Area.addEventListener("mouseover",Namer, false);
	Area.removeEventListener("mousemove",mover, false);
}