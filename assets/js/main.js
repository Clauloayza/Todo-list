function task(title, id, userId){
        this.title = title;
        this.id = id;
        this.userId = userId;
        this.completed = false;
}

function todoList(){
    
    this.listaTareas = [];
    this.btnAgregar = document.getElementById('agregar');
    
    this.iniciarLista = function(){
        this.btnAgregar.onclick =()=>{
            let textarea = document.getElementById('texto').value;
            this.add(textarea);
            document.getElementById('texto').value = "";
            document.getElementById('texto').addEventListener("keyup", function(_evt){
               _evt.preventDefault();
                if(_evt.keyCode == 13){
                    document.getElementById('agregar').click();
                }
            });
        };
    }
    
    this.drawTasksList = function(){
        let lista = document.getElementById("lista");
        let drawList = '<ul>';
        for (let i=0; i<this.listaTareas.length; i++){
            
       if(this.listaTareas[i].completed)
        drawList+= "<li><input class='check' type=checkbox value="+i+" checked><span class='agregando' id="+i+"><strike> "+this.listaTareas[i].title+ "</strike></span><span class='eliminar glyphicon glyphicon-trash' style='float:right'></span></li>";
      else
        drawList +="<li><input class='check' type=checkbox value="+i+"><span  class='agregando' id="+i+"> "+this.listaTareas[i].title+ "</span><span class='eliminar glyphicon glyphicon-trash' style='float:right'></span></li>";
   
        }
        drawList += "</ul>";
        lista.innerHTML= drawList;
        this.empezar();
    };
    
    this.add = function(textarea){
        this.listaTareas.push(new task(1,this.listaTareas.length+1,textarea));
        this.drawTasksList();
        this.empezar(); 
    }
    this.empezar = function(){
        let inputclass = document.getElementsByClassName('check');
        for (let i=0 ; i<inputclass.length ; i++)
            inputclass[i].onclick = (_evt) => {
                this.cambio(_evt);
            };
        
        let clear = document.getElementsByClassName('eliminar');
        for(let i=0; i<clear.length;i++)
            clear[i].onclick = (_evt) => {
                this.allEdit(_evt);
            };
        
        let allList = document.getElementsByClassName('agregando');
        for (let i=0; i<allList.length; i++)
            allList[i].onclick = (_evt) => {
                this.edit(_evt);
            };
    }
    this.edit = function(f){
        if(!this.listaTareas[f.target.id].completed){
            f.target.contentEditable=true;
            f.target.onkeydown = (_evt) => {
                if(_evt.keyCode == 13) {
                    f.target.contentEditable=false;
                    this.listaTareas[f.target.id].title = f.target.textContent;
                    this.drawTasksList();
                    }
            };
        } 
        
   };
   this.allEdit = function(_evt){
       this.listaTareas.splice((_evt.target.name),1);
       this.drawTasksList();
   };
   this.cambio = function(_evt){
       this.listaTareas[_evt.target.value].completed = _evt.target.checked;
       this.drawTasksList();
   };
}

let All = new todoList();
All.iniciarLista() ;
All.drawTasksList();
All.empezar();


    
    

/*************++

this.agregar = function(){
    let textarea = document.getElementById('texto');
    let agregar = document.getElementById('boton');
    
    if(textarea.value == "" || textarea.value == 0){
		alert('Tienes que ingresar tarea');
	}else{
		
		this.listaTareas.push({nombre:textarea.value, isDone:false});
		this.drawTasksList();
	}
}

this.drawTasksList = function (){

	let lista = document.getElementById("lista");
	
	//funcion dibujar tareas
	lista.innerHTML = "";
	for (let i in listaTareas){
		let html = "<li class='works' style = '"+ (listaTareas[i].isDone?"text-decoration:line-through":"") + "' ><input type='checkbox' onclick='checkList("+i+")'  "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre + "<i class='glyphicon glyphicon-trash' onclick='selecTach("+i+")'>" + "</Li>"; 
		
		lista.innerHTML += html;
		
	}
	
	textarea.value = "";
	textarea.focus();
	}
	


this.checkList =function (box){
	
	listaTareas[box].isDone = !listaTareas[box].isDone;
	
	
	/*if(listaTareas[box].isDone == false){
		listaTareas[box].isDone = true;
		//console.log();
		//lista.getElementsByClassName("works")[box].style.textDecoration="line-through";
	}else{
		listaTareas[box].isDone = false;
		//lista.getElementsByClassName("works")[box].style.textDecoration="none";
	}
	
	this.drawTasksList();
}

this.selecTach = function (tach){
	this.listaTareas.splice(tach,1);
	this.drawTasksList();
	
}
    */


