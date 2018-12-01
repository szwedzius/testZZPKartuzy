var drewno = 500;
var kamien = 2000;
var ludzie = 30;
var koszary = 0;
var zolnierze = 0;
var zloto = 1000;
var mozliwosci = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
var bank = 0;
var ilosc_mozliwosci = 10;
var nazwyGraczy = "";
var uchwyt = 0;
var liczbaGraczy = 0;
var Gracz1 = "";
var Gracz2 = "";
var Gracz3 = "";
var Gracz4 = "";
class Gracz
{
    constructor(name,drewno,kamien,ludzie,koszary,zolnierze,zloto)
    {
     this.name = name;
     this.drewno = drewno;
     this.kamien = kamien;
     this.ludzie = ludzie;
     this.koszary = koszary;
     this.zolnierze = zolnierze;
     this.zloto = zloto;
            
     this.mozliwosci =  function wypisz_mozliwosci(kamien,zloto,drewno,koszary,zolnierze,ludzie)
        {
            
            for(i=0;i<1;i++)
            {

            
            if(kamien >= 200)
            {
                mozliwosci += " możesz zbudować kopalnie <br/> 200 kamienia <br/> <br/>";
            }
            if(zloto >= 1000 && drewno >= 500)
            {
                mozliwosci += "możesz zbudować bank <br/> 1000 złota i 500 drewna <br/> <br/>";
            }
            if(drewno >= 200 && kamien >= 300)
            {
                mozliwosci += "możesz zbudować dom <br/> 200 drewna 300 kamienia <br/> <br/>";
            }
            if(drewno >=300 && kamien >=600 && ludzie >=20)
            {
                mozliwosci += "możesz zbudować koszary <br/> 300 drewna 600 kamienia <br/> 20 ludzi";
            }
            if(koszary!=0)
            {
                mozliwosci += "możesz wyszkolić żołnierzy <br/>";
            }
            
            document.getElementById('lblue').innerHTML = mozliwosci;
            }
            
        }   
        this.zasoby =  function wypisz_zasoby(drewno,zloto,kamien,ludzie)
        {
            document.getElementById("zasoby").innerHTML = + drewno + " drewna  <br/>" + kamien + " kamieni  <br/>" + zloto + " złota <br/>" + ludzie + " ludzi <br/> " ;
            alert("xD");
        }

    }
}     



    

       




function wypisz_badziew()
{
    document.getElementById("green").innerHTML ="badziew";
}


function lista_graczy()
{
    var napis = " ";
    uchwyt = document.getElementById("liczba_graczy").value;
    liczbaGraczy = Number(uchwyt);

    for(i=0;i<liczbaGraczy;i++)
    {
        napis += '<input type="text" id = gracz_' + i + '><br/> <br/>';
    }
    
    document.getElementById("green").innerHTML = 'Podaj nazwy graczy <br/> <br/>'+ napis + '<br/> <br/> <input type="button" onclick="wypisz_graczy()" value="działaj"/>';
} 

function wypisz_graczy()
{
    
        if(liczbaGraczy==2)
        {
            var napis_graczy ="";
            napis_graczy += document.getElementById("gracz_0").value;
            Gracz1  =  new Gracz(document.getElementById("gracz_0").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_1").value;
            Gracz2  =  new Gracz(document.getElementById("gracz_1").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            document.getElementById("blue").innerHTML = napis_graczy;
            
        }
        if(liczbaGraczy==3)
        {
            var napis_graczy ="";
            napis_graczy += document.getElementById("gracz_0").value;
            Gracz1  =  new Gracz(document.getElementById("gracz_0").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_1").value;
            Gracz2  =  new Gracz(document.getElementById("gracz_1").value,500,2000,20,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_2").value;
            Gracz3  =  new Gracz(document.getElementById("gracz_2").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            document.getElementById("blue").innerHTML = napis_graczy;
            
        }
        if(liczbaGraczy==4)
        {
            var napis_graczy ="";
            napis_graczy += document.getElementById("gracz_0").value;
            Gracz1  =  new Gracz(document.getElementById("gracz_0").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_1").value;
            Gracz2  =  new Gracz(document.getElementById("gracz_1").value,500,2000,20,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_2").value;
            Gracz3  =  new Gracz(document.getElementById("gracz_2").value,500,2000,30,0,0,1000);
            napis_graczy += "<br/> <br/>";
            napis_graczy += document.getElementById("gracz_3").value;
            Gracz4  =  new Gracz(document.getElementById("gracz_3").value,500,2000,10,0,0,1000);
            napis_graczy += "<br/> <br/>";
            document.getElementById("blue").innerHTML = napis_graczy;
            
        }
        start();
        
    document.getElementById("green").innerHTML = "";
    
}
function start()
{
    for(i=1;i>0;i++)
    {
        if(i % 2==0 && i % 3!=0 && i % 4 !=0)
        {
            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Gracz2.name;
            Gracz2.mozliwosci(Gracz2.kamien,Gracz2.zloto,Gracz2.drewno,Gracz2.koszary,Gracz2.zolnierze,Gracz2.ludzie);
            Gracz2.zasoby(Gracz2.drewno,Gracz2.zloto,Gracz2.kamien,Gracz2.ludzie);
        }
        else if(i % 3 == 0 && i % 4 != 0 )
        {
            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Gracz3.name;
            Gracz3.mozliwosci(Gracz3.kamien,Gracz3.zloto,Gracz3.drewno,Gracz3.koszary,Gracz3.zolnierze,Gracz3.ludzie);
            Gracz3.zasoby(Gracz3.drewno,Gracz3.zloto,Gracz3.kamien,Gracz3.ludzie);
        }
        else if(i%4 == 0)
        {
            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Gracz4.name;
            Gracz4.mozliwosci(Gracz4.kamien,Gracz4.zloto,Gracz4.drewno,Gracz4.koszary,Gracz4.zolnierze,Gracz4.ludzie);
            Gracz4.zasoby(Gracz4.drewno,Gracz4.zloto,Gracz4.kamien,Gracz4.ludzie);
        }
        else
        {
            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Gracz1.name;
            Gracz1.mozliwosci(Gracz1.kamien,Gracz1.zloto,Gracz1.drewno,Gracz1.koszary,Gracz1.zolnierze,Gracz1.ludzie);
            Gracz1.zasoby(Gracz1.drewno,Gracz1.zloto,Gracz1.kamien,Gracz1.ludzie);
        }
    }
}



