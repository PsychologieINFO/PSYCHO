var n = 0;
var otazky = new Array();
var spatneOtazky = new Array();
var odpovezene = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var x = 0;

function start() {
	zalozOtazky();
	document.getElementById('start').remove();

	document.getElementById('otazka').style.visibility = 'visible';
	//document.getElementById('odpoved').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';
	document.getElementById('otazkaCislo').style.visibility = 'visible';

	nactiOtazku();
}

function nactiOtazku() {
	if (otazky.length <= n) {
		document.getElementById("form").style.visibility = 'hidden';
		document.getElementById("otazkaCislo").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'hidden';

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
				'<p>Špatných odpovědí: ' + spatne + '</p>' +
				'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));
		if (odpovezene.indexOf(x) >= 0)
			;
		else
			break;
	}

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	document.getElementById('otazka').innerHTML = '<div id="form">' +
			otazka.otazka + ': <br><input id="id1" type="text" name="question" onkeypress="isEnter()">' +
			'<input id="end" type="button" value="Odpovědět" onclick=check()>' +
			'</div>';

	document.getElementById("id1").focus();
}

function nactiSpatne() {
	document.getElementById("form").style.visibility = 'visible';
	document.getElementById("otazkaCislo").style.visibility = 'visible';
	document.getElementById("dalsi").style.visibility = 'visible';
	document.getElementById('otazka').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';

	otazky = [];
	otazky = spatneOtazky;
	spatneOtazky = [];
	n = 0;
	x = 0;
	spravne = 0;
	spatne = 0;
	odpovezene = [];
	nactiOtazku();
}

function isEnter(e) {
	if ((event.which == 13 || event.keyCode == 13)) {
		if (document.getElementById("dalsi").style.visibility == 'visible') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("id1").value == otazka.odpoved) {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka)
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		document.getElementById("end").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'visible';
	}
	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku(
			"Učení se činnostem, dovednostem motorickým (dítě se učí uchopovat hračku, chodit, kopat do míče...) se nazývá učení .................",
			"senzomotorické");
	pridejOtazku(
			"Interdisciplinární obor, který řeší možnosti a omezení lidských jedinců při řízení strojů, např. dopravních prostředků je psychologie _____ (doplňte slovo).",
			"inženýrská");
	pridejOtazku(
			"V antickém pojetí je temperament dán poměrem čtyř tělesných šťáv jsou to: černá žluč, žlutá žluč, hlen _____ (doplňte slovo).",
			"krev");
	pridejOtazku(
			"Hippokratovu teorii zdraví jako správného poměru - rovnováhy jednotivých kvalit organismu rozpracoval _____ (doplňte slovo).",
			"Galenos");
	pridejOtazku(
			"Existenci předem daných tvarů v myšlenkách, které pak nalézáme a doplňujeme při vnímání předpokládá psychologie _____ (doplňte slovo).",
			"tvarová");
	pridejOtazku(
			"Učení se vnitřním ztotožněním se vzorem, kdy se někdo identifikuje s rodičem stejného pohlaví a učí se přebírat příslušnou roli, se nazývá učení se .........",
			"identifikací");
	pridejOtazku(
			"Podle Freuda mají některé naše činy příčiny ukryty v nevědomí, ale sami pro sebe si je vysvětlujeme společensky přijatelnými motivy. Tento proces se nazývá _____ (doplňte slovo).",
			"racionalizace");
	pridejOtazku(
			"Typ učení, při kterém se dítě snaží naučit se chovat podle toho, co od jedince ostatní v jeho roli očekávají, se nazývá ........ učení.",
			"anticipační");
	pridejOtazku(
			"Jádro představy, osa krystalů, obecně platný dávný skrytý princip, zjevující se ve snech, pohádkách nebo mýtech, se dle C. G. Junga nazývá:",
			"archetyp");
	pridejOtazku(
			"Největší význam pro přizpůsobování jedince lidské společnosti má učení _____ (doplňte slovo).",
			"sociální");
	pridejOtazku(
			"Soubor metod, používaných psychology k měření úrovně jednotlivých schopností či k popisu osobnosti označujeme jako psychologický _____ (doplňte slovo).",
			"test");
	pridejOtazku(
			"Speciálně zaměřená forma řízeného rozhovoru s dítětem, kdy je využíváno dětské fantazie a dítě si hraje na pohádkové postavy v různých situacích, které ho mohou traumatizovat, se nazývá rozhovor ............",
			"projektivní");
	pridejOtazku(
			"Zásadní zkušenost se světem,, kterou by si měl jedinec vytvořit v nejranějším období života je základní _____ (doplňte slovo).",
			"důvěra");
	pridejOtazku(
			"Písemnou, časově úspornější, formou rozhovoru je _____ (doplňte slovo).",
			"dotazník");
	pridejOtazku(
			"Teorie, které ve vývoji jedince rozlišují určitá na sebe navazující období se označují jako pojetí _____ (doplňte slovo).",
			"stadiální");
	pridejOtazku(
			"Pojetí vývoje jedince jako plynulého procesu, kde narůstá postupně složitost struktur a funkcí je pojetí _____ (doplňte slovo).",
			"diferenciační");
	pridejOtazku(
			"Psychologická metoda, která je chápána jako plánovité pozorné vnímání určitého objektu, provázené snahou získat o něm co nejpřesnější a nejrozsáhlejší informace, se nazývá:",
			"pozorování");
	pridejOtazku(
			"C.G. Jung vysvětluje lidské chování pomocí složitého systému. Ženský princip představuje archetyp: _____ (doplňte slovo).",
			"Anima");
	pridejOtazku(
			"Antickým autorem spisů *Peri psyches. De anima.* je Platonův žák _____ (doplňte slovo).",
			"Aristoteles");
	pridejOtazku(
			"Část nevědomí obohacená o pozitivní i negativní zkušenosti mnoha předchozích generací nejen lidských, ale dokonce i zvířecích předchůdců jedince, se dle C. G. Junga nazývá ........... nevědomí (doplňte jedno slovo).",
			"kolektivní");
	pridejOtazku(
			"Jeden z ego-obranných mechanismů dle S. Freuda, který slouží pro útěk od nepřijatelných myšlenek a přání (většinou sexuálních obsahů), se nazývá ............",
			"vytěsnění");
	pridejOtazku(
			"Hlavní metodou zkoumání po léta používanou zvláště behavioristy jsou laboratorní _____ (doplňte slovo).",
			"experimenty");
	pridejOtazku(
			"Období vývoje dítěte od početí do 12. týdne se nazývá ........... období.",
			"embryonální");
	pridejOtazku(
			"Období od počátku puberty se podle Freuda nazývá období _____ (doplňte slovo).",
			"genitální");
	pridejOtazku(
			"Pokud pozorování chování druhého jedince postačí k poučení jde o učení _____ (doplňte slovo).",
			"zástupné");
	pridejOtazku(
			"Vnitřní výbava jedince zahrnuje dědičnou výbavu, genetické mutace, vrozenou výbavu a ........... výbavu, která zahrnuje mimo vrozené výbavy i účinky prostředí na biologické zrání jedince.",
			"konstituční");
	pridejOtazku(
			"Freud označuje sexuální pud pojmem _____ (doplňte slovo).",
			"libido");
	pridejOtazku(
			"Na základě Wundtových experimentů se spojováním jednotlivých prvků duševního dění ve složitější celky byly formulovány zákony, které nazýváme _____ (doplňte slovo).",
			"asociační");
	pridejOtazku(
			"Stadium, kdy je hlavním zdrojem slasti jedince přijímání potravy a kousání předmětů nazývá Freud stadium _____ (doplňte slovo).",
			"orální");
	pridejOtazku(
			"Neurofyziologické objevy 19. století, které potvrdily závislost duševního dění na činnosti mozku, vedly k postupnému opouštění pojmu duše a za vědecký byl pokládán ............. přístup (doplňte jedno slovo).",
			"materialistický");
	pridejOtazku(
			"Obecné zákonitosti pozornosti, paměti, kognitivních procesů zkoumá psychologie _____ (doplňte slovo).",
			"obecná");
	pridejOtazku(
			"Výrazným proudem v psychologii současné doby jsou školy a teorie zaměřené na člověka nazvané psychologie _____ (doplňte slovo).",
			"humanistická");
	pridejOtazku(
			"Přístup C. R. Rogersa se nazývá ''na člověka zaměřená terapie'' nebo .......... přístup a patří k humanistické psychologii (doplňte jedno slovo).",
			"nedirektivní");
	pridejOtazku(
			"Alfred Adler byl zakladatelem druhé vídeňské psychologické školy. Jeho teorie je známá jako psychologie _____ (doplňte slovo).",
			"individuální");
	pridejOtazku(
			"Zakladatelem psychoanalýzy byl vídeňský lékař, který pocházel z Moravy (uveďte příjmení) _____ (doplňte slovo).",
			"Freud");
	pridejOtazku(
			"Škola V. E. Frankla, založená na pomoci lidem uplatnit svou vůli ke smyslu, se nazývá:",
			"logoterapie");
	pridejOtazku(
			"Rozbory písma jako prostředku zkoumání osobnosti jsou předmětem samostatného oboru .......",
			"grafologie");
	pridejOtazku(
			"Pokud pozorování chování druhého jedince postačí k poučení jde o učení _____ (doplňte slovo).",
			"zástupné");
	pridejOtazku(
			"Obecné zákonitosti vztahů mezi lidmi, jejich vzájemné vnímání a ovlivňování, chování lidí ve skupinách zkoumá psychologie _____ (doplňte slovo).",
			"sociální");
	pridejOtazku(
			"Psychologická metoda, která je chápána jako plánovité pozorné vnímání určitého objektu, provázené snahou získat o něm co nejpřesnější a nejrozsáhlejší informace, se nazývá:",
			"pozorování");
	pridejOtazku(
			"Ve stadiu, kdy se dítě učí ovládat konečník, plyne pudové uspokojení z tého činnosti, období je proto nazýváno stadium _____ (doplňte slovo).",
			"anální");
	pridejOtazku(
			"Metody, kdy jsou předkládány zkoumaným jedincům málo strukturované podněty a analyzují se jejich reakce bývají nazývány testy _____ (doplňte slovo).",
			"projekční");

}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}