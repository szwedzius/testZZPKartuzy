#include <iostream>
#include <cstdlib>
#include <windows.h>
using namespace std;

int wypisz()
{
	cout<<"[1]-zbuduj dom (20000 E)"<<endl;
	cout<<"[2]-zbuduj farme (50000 E)"<<endl;
	cout<<"[3]-zbuduj sklep (80000 E)"<<endl;
	cout<<"[4]-zbuduj baze wojskowa (500000 E)"<<endl;
	cout<<"[5]-atakuj(od 10 rundy)"<<endl;
	cout<<"[6]-nic"<<endl;
}

int main()
{
	HANDLE hOut;
	hOut = GetStdHandle( STD_OUTPUT_HANDLE );
	SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED | FOREGROUND_INTENSITY );
	int wybor;
	int a;
	int runda = 1;
	//gracz 1
	int jedzenie1 = 100000;
	int pieniadze1 = 100000;
	int domy1 = 2;
	int farmy1 = 0;
	int sklepy1 = 0;
	int bazy_wojskowe1 = 0;
	int ludzie1 = 8;
	int zolnierze1 = 0;
	//gracz 2
	int jedzenie2 = 100000;
	int pieniadze2 = 100000;
	int domy2 = 2;
	int farmy2 = 0;
	int sklepy2 = 0;
	int bazy_wojskowe2 = 0;
	int ludzie2 = 8;
	int zolnierze2 = 0;
	do
	{
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_RED | FOREGROUND_INTENSITY );
		cout<<"Runda:"<<runda<<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED | 4);
		cout<<"-------------------------------"<<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_RED | FOREGROUND_INTENSITY );
		cout<<"Gracz 1:"<<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE);
		cout<<"Jedzenie:" << jedzenie1 <<endl;
		cout<<"Pieniadze:" << pieniadze1  << " E" << endl;
		cout<<"Domy:" << domy1 <<endl;
		cout<<"Farmy:" << farmy1 << endl;
		cout<<"Sklepy:" << sklepy1 << endl;
		cout<<"Bazy wojakowe:" << bazy_wojskowe1 <<endl;
		cout<<"Ludzie:" <<ludzie1 << endl;
		cout<<"Zolnierze:" <<zolnierze1 <<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED | FOREGROUND_INTENSITY );
		cout<<"-------------------------------"<<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_RED | FOREGROUND_INTENSITY );
		cout<<"Gracz 2:"<<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE);
		cout<<"Jedzenie:" << jedzenie2 <<endl;
		cout<<"Pieniadze:" << pieniadze2  << " E" << endl;
		cout<<"Domy:" << domy2 <<endl;
		cout<<"Farmy:" << farmy2 << endl;
		cout<<"Sklepy:" << sklepy2 << endl;
		cout<<"Bazy wojakowe:" << bazy_wojskowe2 <<endl;
		cout<<"Ludzie:" <<ludzie2 << endl;
		cout<<"Zolnierze:" <<zolnierze2 <<endl;
		SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_BLUE | FOREGROUND_RED | FOREGROUND_INTENSITY );
		cout<<"-------------------------------"<<endl;
		if(runda % 2 != 0)
		{
			cout<<"Gra gracz 1:"<<endl;
			SetConsoleTextAttribute( hOut, FOREGROUND_RED | FOREGROUND_BLUE);
			wypisz();
			SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_RED | FOREGROUND_INTENSITY );
			cout<<">>:";
			cin>> wybor;
			switch(wybor)
			{
				case 1:
					if(pieniadze1 >= 20000)
					{
						domy1++;
						ludzie1 = ludzie1 + 4;
						pieniadze1 = pieniadze1 - 20000;
					}
					break;
				case 2:
					if(pieniadze1 >= 50000 && ludzie1 >= 5)
					{
						farmy1++;
						ludzie1 = ludzie1 - 5;
						pieniadze1 = pieniadze1 - 50000;
					}
					break;
				case 3:
					if(pieniadze1 >= 80000 && ludzie1 >= 6)
					{
						sklepy1++;
						ludzie1 = ludzie1 - 6;
						pieniadze1 = pieniadze1 - 80000;
					}
					break;
				case 4:
					if(pieniadze1 >= 500000)
					{
						bazy_wojskowe1++;
						pieniadze1 = pieniadze1 - 500000;
					}
					break;
				case 5:
					break;
			}
		}
		else
		{
			cout<<"Gra gracz 2:"<<endl;
			SetConsoleTextAttribute( hOut, FOREGROUND_RED | FOREGROUND_BLUE );
			wypisz();
			SetConsoleTextAttribute( hOut, FOREGROUND_GREEN | FOREGROUND_RED );
			cout<<">>:";
			cin>> wybor;
			switch(wybor)
			{
				case 1:
					if(pieniadze2 >= 20000)
					{
						domy2++;
						ludzie2 = ludzie2 + 4;
						pieniadze2 = pieniadze2 - 20000;
					}
					break;
				case 2:
					if(pieniadze2 >= 50000 && ludzie1 >= 5)
					{
						farmy2++;
						ludzie2 = ludzie2 - 5;
						pieniadze2 = pieniadze2 - 50000;
					}
					break;
				case 3:
					if(pieniadze2 >= 80000 && ludzie1 >= 6)
					{
						sklepy2++;
						ludzie2 = ludzie2 - 6;
						pieniadze2 = pieniadze2 - 80000;
					}
					break;
				case 4:
					if(pieniadze2 >= 500000)
					{
						bazy_wojskowe2++;
						pieniadze1 = pieniadze2 - 500000;
					}
					break;
				case 5:
					break;
			}
		}
		if(runda % 2 == 0)
		{
			pieniadze1 = pieniadze1 + domy1 * 1000 - farmy1 * 2000 + sklepy1 * 2500;
			jedzenie1 = jedzenie1 - ludzie1 * 2000 + farmy1 * 20000;
			pieniadze2 = pieniadze2 + domy2 * 1000 - farmy2 * 2000 + sklepy2 * 2500;
			jedzenie2 = jedzenie2 - ludzie2 * 2000 + farmy2 * 20000;
			system("cls");
		}
		runda++;
	}while(true);
}
