var fs = require('fs');

var data = 
`Building	321 S. Oxford Ave	321 S. Oxford Ave	Los Angeles	YM Homes	Bryan Miller	8/6/2020
Building	338 Mariposa Ave	338 Mariposa Ave	Los Angeles	BH Construction	Nathan	8/6/2020
Building	11502 Cumpston St	11502 Cumpston St	North Hollywood	Jonathan Alnazzal	Jonathan Alnazzal	8/6/2020
House	172 E Wilson St	172 E Wilson St	Costa Mesa	RBD	Joey Martinez	8/5/2020
Building	6363 Tyrone Ave	6363 Tyrone Ave	Van Nuys	Design Construction	Michael Omranian	8/4/2020
Building	1825 New Hampshire Ave	1825 New Hampshire Ave	Los Angeles	Cambridge Homes	George Schneider	8/4/2020
Building	626 Wilton Pl	626 Wilton Pl	Los Angeles	Schaffel Development	Sharon Kass	8/4/2020
Building	336 Oakhurst Dr	336 Oakhurst Dr	Beverly Hills	ETCO Homes	Erik Sie	7/31/2020
House	211 Boeseke Pkwy	211 Boeseke Pkwy	Montecito	RDS Architecture	Rick Starnes	7/30/2020
Building	642-636 Juanita Ave	642-636 Juanita Ave	Los Angeles	KCC Design & Build	Erik Danielson	7/30/2020
Building	Naval Expeditionary Medical Training Institute	Cristianitos Rd (BLDG 632044)	Camp Pendleton	EQUIPTO	Tim Malolepsy	7/29/2020
Building	665 Baldwin Park Blvd	665 Baldwin Park Blvd	City of Industry	Inter-Plan West	Summer Taylor	7/29/2020
Building	Homewood Suites (Santa Clarita)	28700 Newhalle Ranch Rd	Santa Clarita	Troon	Patrick McBride	7/28/2020
House	11753 Wetherby Ln	11753 Wetherby Ln	Los Angeles	M&E Builders	Juan Manuel	7/28/2020
House	3900 Via Palomino	3900 Via Palomino	Palos Verdes Estates	The Thermal Club	Kerry Olson	7/28/2020
House	129 Rockingham Ave	129 Rockingham Ave	Los Angeles	Shain Development	Jeff Whiteman 	7/28/2020
House	1655 Clark Ave	1655 Clark Ave	Long Beach	Plumbline Construction	Plumbline Construction	7/27/2020
House	982 Stone Canyon Rd	982 Stone Canyon Rd	Bel Air	Silverston & Associates	Derrick Coffield	7/24/2020
House	9638 Olive St	9638 Olive St	Temple City	Via Home	Tammy	7/24/2020
Building	4847 Beverly Blvd	4847 Beverly Blvd	Los Angeles	Proper Devlopment	Matt Mehdizadeh	7/23/2020
Building	917 Berendo St	917 Berendo St	Los Angeles	AVCAD	Matt Vahedi	7/23/2020
House	871 Leonard Place	871 Leonard Place	Los Angeles	Montgomery Construction	Tom Montgomery 	7/22/2020
Building	2645 Ulric St	2645 Ulric St	San Diego	Sun Country Builders	Saul Barrera	7/21/2020
House	10375 Wilshire Blvd	10375 Wilshire Blvd	Beverly Hills	Prime Interiors	Sergio Munoz	7/21/2020
Building	11259 Washington Blvd 	11259 Washington Blvd 	Culver City	Centre Builders	Ronnie Denina	7/20/2020
House	5180 Avenida Hacienda	5180 Avenida Hacienda	Tarzana	National Construction	Emry Hadad	7/16/2020
House	4406 Richard Circle Dr	4406 Richard Circle Dr	Los Angeles	Innovative Layout	Marlon Barillas	7/15/2020
Building	1241 Laurel Lane	1241 Laurel Lane	San Luis Obispo	Montage Development	Danetta Brunelli 	7/15/2020
House	1640 Stradella Rd	1640 Stradella Rd	Los Angeles	SoCal Home Builders	Ziva Yehuda	7/15/2020
House	850 Roosevelt Ave	850 Roosevelt Ave	Irvine	Wilfredo Ramirez	Wilfredo Ramirez	7/15/2020
Hotel	Home 2 Hilton (Watsonville)	1 Western Drive	Watsonville	E.H. Butland	Ken Becker	7/14/2020
House	12350 Viewcrest Rd	12350 Viewcrest Rd	North Hollywood	IMT	Fred Mazewski	7/14/2020
House	10045 Riverside Dr	10045 Riverside Dr	Toluca Lake	Brian Construction	Daniel Bryce	7/14/2020
Building	6515 Crenshaw Blvd	6515 Crenshaw Blvd	Los Angeles	Foundational Builders	Andrew Robles	7/13/2020
House	1254 Roberto Ln	1254 Roberto Ln	Los Angeles	Shiraz Construction	Amin Sadeghiyan	7/13/2020
Building	Worthington (Phase II)	W. Worthington Rd	Imperial	Duggins Construction	Ruben Partida	7/13/2020
Building	Inspire Echo Park	355 Glendale Blvd	Los Angeles	Milender White	Aaron Castillo	7/10/2020
House	33712 Calle Miramar	33712 Calle Miramar	San Juan Capistrano	Nathan Krantz	Nathan Krantz	7/10/2020
Building	The Court St Housing	1411 & 1415 Court St	Los Angeles	Milender White	Aaron Castillo	7/10/2020
Building	4433 N Cartwright 	4433 N Cartwright ave	North Hollywood	Ramcliff Construction	Sean Cannon	7/9/2020
House	16930 Mulholland Dr	16930 Mulholland Dr	Los Angeles	Goed Construction	Arthur .	7/9/2020
Building	1708 N. Alexandria	1708 N. Alexandria	Los Angeles	Duke Development	Manny Labranche	7/8/2020
House	6325 Sea Star Dr	6325 Sea Star Dr	Malibu	Bevy House Construction	Evan Warren	7/8/2020
Building	1219 N. Main Street	1219 N. Main Street	Los Angeles	Progressive Commercial Builders	Cenovio Cuevas	7/7/2020
House	33731 Shackleton Isle	33731 Shackleton IsleDana	Dana Point	Oligino Laux Construction	Steven MacDonough	7/7/2020
Unit	19431 Rue De Valore #22D	19431 Rue De Valore 	Foothill Ranch	DC Construction	Chris Jensen	7/7/2020
Hotel	Holiday Inn (San Jose)	2660 Monterey Rd	San Jose	Calwest Construction	Tirth Patel	7/6/2020
House	3835 Eddingham Ave	3835 Eddingham Ave	Calabasas	Current Trend Contractors	Randy Lawrence	7/6/2020
School	CWC Classroom (Pico)	11518 W Pico 	Los Angeles	Del Amo Construction	Matthew Cureg	7/2/2020
Townhome	2405-2423 Hauser Blvd	2405-2423 Hauser Blvd	Los Angeles	Westside Contractors	Andy Berthold	7/2/2020
House	625 Mountain Dr	625 Mountain Dr	Beverly Hills	JRC Group	Eli Daniel	7/1/2020
House	5145 Collett Ave	5145 Collett Ave	Encino	G.L Construction	Oren Ohana	7/1/2020
Building	939 Ardmore Ave	939 Ardmore Ave	Los Angeles	Ketter Construction	Dalal Saadi	6/30/2020
Building	4409 Saugus Ave	4409 Saugus Ave	Sherman Oaks	Giraffe Construction	Joe Sharaf	6/29/2020
House	15147 Hartsook St	15147 Hartsook St	Sherman Oaks	Innovative Layout	Marlon Barillas	6/29/2020
House	825 S Sierra Vista Ave	825 S Sierra Vista Ave	Alhambra	Al Lee Development	Dennis Perez	6/29/2020
House	155 Greenfield Ave	155 Greenfield Ave	Los Angeles	Hamid Farkhondeh	Hamid Farkhondeh	6/29/2020
House	6310 Mirror Lake	6310 Mirror Lake	Los Angeles	Nork Construction	David Basentsyan	6/26/2020
House	5421 Hoback Glen Rd	5421 Hoback Glen Rd	Hidden Hills	Metro Development	Jeff Aviezer	6/26/2020
Unit	1703 California St. unit 5	1703 California St	Huntington Beach	Tadas Jusionis	Tadas Jusionis	6/25/2020
House	12255 Richwood	12255 Richwood	Los Angeles	On Time Homes	Brian Lombardi	6/25/2020
Building	1410 Highland	1410 Highland	Los Angeles	West Builders	Brian Chan	6/25/2020
Building	Wire-Waterman Crossings	Wire and Waterman	San Bernardino	Wier Holdings	Luis Medina	6/24/2020
Building	Sovereign At The Ballpark		Houston	T.B. Penick & Sons	Larry Ingram	6/24/2020
House	724 Hampden Pl	724 Hampden Pl	Pacific Palisades	Ecogreen Construction	AJ	6/23/2020
Warehouse	5005 McConnell Ave	5005 McConnell Ave	Los Angeles	Mccormick	Alan Hartley	6/23/2020
House	13028 Central Ave	13028 Central Ave	Hawthorne	Blue Sky 	Matt Kimura	6/23/2020
House	720 N Juanita Ave	720 N Juanita Ave	Redondo Beach	Lightning Construction & Design	Barak	6/22/2020
Car Dealrship	Glendale Toyota	1260 S Brand Blvd	Glendale	Morris Inc	Severin Elste	6/19/2020
Building	1707 Cloverfield Blvd	1707 Cloverfield Blvd	Santa Monica	James Kennedy Construction	Danielle Mace	6/19/2020
House	15301 Whitfield Ave	15301 Whitfield Ave	Pacific Palisades	Allied Restoration	Guillermo Aguilar	6/16/2020
House	600 W 3rd Street	600 W 3rd Street	Santa Ana	Colins Builders	Paul Stream	6/12/2020
House	1118 E 223rd St	1118 E 223rd St	Carson	Ramin Jaafarian	Ramin Jaafarian	6/11/2020
Building	12128 Idaho Ave	12128 Idaho Ave	Los Angeles	Nesbou Development	Amir Khajehmogahi	6/11/2020
House	34315 Shore Lantern	34315 Shore Lantern	Dana Point	Ollar Construction	Bob Ollar	6/10/2020
Building	2525 Wilshire Blvd	2525 Wilshire Blvd	Santa Monica	IMG Construction	Ken O’Leary	6/10/2020
Building	The Courtyards at Kimball	1105 National City Blvd	National City	Sinanian	Wilfredo Rey	6/9/2020
Building	1333 Sierra Bonita Ave	1333 Sierra Bonita Ave	Los Angeles	Hanna Engineering Construction	Max Sadeghian	6/9/2020
House	579 Venice Blvd	579 Venice Blvd	Venice	GHBW	Ryan Rifkin	6/9/2020
Building	10352 W Riverside Dr	10352 W Riverside Dr	Toluca lake	Mccormick	Mina Tulpo	6/8/2020
House	13049 Droxford Ave	13049 Droxford Ave	Cerritos	New Era Builders	Ricky Sevilla	6/8/2020
Unit	5625 Crescent Park #414	5625 Crescent Park 	Playa Vista	Playa Construction	Kevin Chikarber	6/8/2020
Building	Torrance Memory Care	2455 PCH 	Torrance	Dominion Construction	Steve Rodgers	6/8/2020
Building	1400 Long Beach Blvd	1400 Long Beach Blvd	Long Beach	Urban Community Builders	Natalie Diaz	6/8/2020
Building	Sony Adjacent	10375 W Washington Blvd	Los Angeles	T.B. Penick & Sons	Amanda Ivans	6/5/2020
House	714 Alpine Dr	714 Alpine Dr	Beverly Hills	Craig R Williams Construction	Charles Nappi	6/5/2020
House	10348 Brookshire Ave	10348 Brookshire Ave	Downey	Western Allied Construction	Carmina .	6/4/2020
Building	2812 W Temple St	2812 W Temple St	Los Angeles	Schon Tepler Construction	Cindy Erdene	6/4/2020
House	4006 Calle Louisa	4006 Calle Louisa	San Clemente	C.H. Anderson	Trent Anderson	6/4/2020
Warehouse	10234 4th Street	10234 4th Street	Rancho Cucamonga	The Alliance Group	Joseph Freeno	6/3/2020
Building	Hillsborough Phase III	11930 Central Ave	Chino	Dreyfuss Construction	Billy Valencia	6/3/2020
Building	Rexford House	356 22nd St	Santa Monica	RCI Builders	Nathan Wendt	6/2/2020
House	415 23rd St	415 23rd St	Santa Monica	Primary Homes	Vinnie Sasson	6/1/2020
House	16103 Sandy Lane	16103 Sandy Lane	Encino	Sam Dan	Sam Dan 	6/1/2020
Building	400 West Colorado St	400 West Colorado St	Glendale	Jaden and Son Construction	Allen Fang	6/1/2020
House	5865 El Montevideo	5865 El Montevideo	Rancho Santa Fe	SoCal Hydronics	Jacob Gooze	5/29/2020
Building	2340 Venice Blvd	2340 Venice Blvd	Los Angeles	Fassberg Construction	Tracey Lund	5/28/2020
House	900 Vista St	900 Vista St	Los Angeles	Gino Buccola Construction	Gino Buccola	5/28/2020
House	183 Saddlebow Rd	183 Saddlebow Rd	Bel Canyon	Milan Construction	Michael Tanaka	5/27/2020
House	20877 Apache Way	20877 Apache Way	Walnut	FP Construction	Franklin Pineda	5/27/2020
House	952 N Tigertail Rd	952 N Tigertail Rd	Los Angeles	The Construction and Development	Ziva Yehuda	5/27/2020
Unit	200 PCH #131	200 Pacific Coast Hwy	Huntington Beach	General Building Contractor	John Vengoechea	5/26/2020
House	1440 Tigertail Rd	1440 Tigertail Rd	Los Angeles	Emma Corporation	Jens Mansilla	5/26/2020
House	24 Arcadia Terrace	24 Arcadia Terrace	Santa Monica	Greenbuild Construction Services	Doron Ben	5/26/2020
Industrial Building	Holt Industrial	1451 W Holt Blvd	Ontario	Donlon Builders	Danielle Escobar	5/22/2020
House	320 Truesdale Place	320 Truesdale Place	Beverly Hills	Ceilbright Services	Mimi Guevarra	5/22/2020
Hotel	Home2 Camarillo	623 E Ventura Blvd	Camarillo	Staples Construction	Bianca Burton	5/21/2020
House	2109 Redrock Court	2109 Redrock Court	Los Angeles	FB Construction	Franklin Pineda	5/21/2020
House	20076 Marina In	20076 Marina In	Huntington Beach	Frank Miranda Construction	Frank Miranda	5/20/2020
House	848 N Curson Ave	848 N Curson Ave	Los Angeles	CRAFT Contracting	Jack Weems	5/20/2020
House	17605 Belinda St	17605 Belinda St	Encino	Advance HIC	Amnon Edri	5/20/2020
Building	432 Normandie Ave	432 Normandie Ave	Los Angeles	Apex GBC	Nick .	5/20/2020
Building	Spaulding Court	1041-1047 Spaulding Ave	West Hollywood	Guild GC	Isaac Posadas	5/15/2020
House	547 7th St	547 7th St	Santa Monica	RT Abbott Construction	Steven Guerra	5/15/2020
Buildings	17350 Humphreys Parkway	17350 Humphreys Parkway	Santa Clarita	JPI	Kale Lorntzen	5/15/2020
Hotel	La Quinta Inn	701 E Imperial Highway	La habra	Klassen Corporation	Jason Reneau	5/15/2020
House	1712 Burnell Dr	1712 Burnell Dr	Los Angeles	Speed Boat Projects	Chad Karty	5/14/2020
School	Patterson High School	200 N 7th Street	Patterson	Acme Construction	Ron Kettelman	5/13/2020
House	5460 White Oak Ave	5460 White Oak Ave	Encino	State Restoration	Fernando Carrillo	5/13/2020
House	307 Mccadden Pl	307 Mccadden Pl	Los Angeles	David Elliot Builders	Miguel Leon	5/13/2020
Building	901 E South Street	901 E South Street	Anaheim	Anton	Fawaz Ammari	5/12/2020
House	3712 Broadlawn Dr	3712 Broadlawn Dr	Los Angeles	Imperial Enterprises	Sweeny Tamraz	5/12/2020
Building	950 Hilgard Ave	950 Hilgard Ave	Los Angeles	McShane Construction	Greg Fogg	5/11/2020
House	11751 San Vicente Blvd	11751 San Vicente Blvd	Los Angeles	All Construct	Dan Fortuna	5/11/2020
House	3340 Clerendon Rd	3340 Clerendon Rd	Beverly Hills	Lightning Construction & Design	Barak	5/7/2020
House	300 San Juan Ave	300 San Juan Ave	Venice	Gemini Property Solutions	Marc Sabido	5/7/2020
House	83 Fremont Pl 	83 Fremont Pl 	Los Angeles	Wilshire Construction	Matt Cheesebro	5/6/2020
Building	Cherokee Ave Apartments	1301-1307 Cherokee Ave	Los Angeles	Uncommon Developers	Leora Feldman	5/6/2020
Building	13444 Bali Way	13444 Bali Way	Marina Del Rey	Sinanian	Wilfredo Rey	5/5/2020
Buildings	Worthington (Phase I)	W. Worthington Rd	Imperial	Duggins Construction	Ruben Partida	5/4/2020
House	15965 W Alcima Ave	15965 W Alcima Ave	Los Angeles	Building Solutions and Design	David Rokach	5/4/2020
House	960 19th St	960 19th St	Santa Monica	Apex GBC	Nick Rasekhi	5/1/2020
House	3858 Hayvenhurst Ave	3858 Hayvenhurst Ave	Encino	Astro Construction	Sean Szilagi	5/1/2020
House	4364 N Latona Ave	4364 N Latona Ave	Los Angeles	Israel Gamburd	Israel Gamburd	5/1/2020
Building	1260 Patricia Ave	1260 Patricia Ave	Semi Valley	RCI Builders	Nathan Wendt	4/30/2020
Building	13300 N Valley Heart	13300 N Valley Heart	Sherman Oaks	Foundational Builders	Andrew Robles	4/30/2020
House	1332 Laurel Way	1332 Laurel Way	Beverly Hills	Zamir Investment	Zion Zamir	4/29/2020
Hotel	TRU by Hilton (Oxnard)	180 W Esplanade	Oxnard	E.H. Butland	Adrian Umana	4/29/2020
House	31831 Cottontail Ln	31831 Cottontail Ln	Malibu	Circa Development	Jarrett White	4/29/2020
Building	Mar Vista	12767 Mitchell Ave	Los Angeles	T.B. Penick & Sons	Amanda Ivens	4/28/2020
House	322 S Oakhurst	322 S Oakhurst	Beverly Hills	A1 Construction	Roni .	4/28/2020
House	15921 Royal Oak Rd	15921 Royal Oak Rd	Encino	AMG EXPERIENCE	Amit	4/28/2020
Building	609 Jasmine Ave	609 Jasmine Ave	Corona Del Mar	Devco Homes LLC	Jeff Nelson	4/27/2020
Building	546 N Harvard Blvd	546 N Harvard Blvd	Los Angeles	West Hills Development	Ross Gorgone	4/27/2020
Building	101 N Broadway Ave	101 N Broadway Ave	Santa Maria	Robert Brothers Construction	Brian Roberts	4/27/2020
House	33018 Pacific Coast Hwy	33018 Pacific Coast Hwy	Malibu	Fischer Construction	Jerry Luza	4/24/2020
House	108 Avenida Fernando	108 Avenida Fernando	San Dimas	Habitant Classique Inc	Habitant Classique	4/24/2020
House	29140 Cliffside Dr	29140 Cliffside Dr	Malibu	Lyons Development	Jonathan Deason	4/24/2020
House	1725 S Wooster St	1725 S Wooster St	Los Angeles	GNL Development	Gary Kleinman	4/23/2020
House	Value Charter Everest	240 N Madison Ave	Los Angeles	Del Amo Construction	Isabel Gomez	4/23/2020
Building	8th and Gramercy	743 & 749 Gramercy Dr	Los Angeles	Cambridge Homes	Wayne Dollarhide	4/23/2020
Building	Clearwater Glendora	333 W Dawson Ave	333 W Dawson Ave	KPRS	Jose Cruz	4/23/2020
House	8577 Franklin Ave	8577 Franklin Ave	Los Angeles	Peddicord Const Inc	Mitch Woldman	4/22/2020
Building	1017 N Croft Ave	1017 N Croft Ave	Los Angeles	Baypost Builders	Ben Bayan	4/21/2020
House	414 Lorraine Blvd	414 Lorraine Blvd	Los Angeles	Bar Design and Construction	Manny Mata	4/21/2020
Building	11500 Culver Blvd	11500 Culver Blvd	Los Angeles	Michael Walker Build	Michael Walker 	4/20/2020
House	4545 Encino Ave	4545 Encino Ave	Encino	Lightning Construction & Design	Barak	4/17/2020
House	1633 Amalfi Dr	1633 Amalfi Dr	Pacific Palisades	M Group Enterprise	Fred Magid	4/16/2020
Building	7951 Beverly Blvd	7951 Beverly Blvd	Los Angeles	Uncommon Developers	Leora Feldman	4/16/2020
Building	1010 S Kenmore Ave	1010 S Kenmore Ave	Los Angeles	Angeles Contractor	Luis Ramirez	4/16/2020
Hotel	Hilton Garden (Fresno)	5318 N Blackstone Ave	Fresno	Klassen Corporation	Jason Reneau	4/15/2020
House	99 Lake Sherwood Dr	99 Lake Sherwood Dr	Lake Sherwood	Rhino Construction	Eric Moser	4/15/2020
House	900 S Arroyo Pkwy	900 S Arroyo Pkwy	Pasadena	Redesign Group	Ladan Naragh	4/15/2020
Hotel	Hilton Garden (Visalia)	8715 Hillsdale Ave	Visalia	Klassen Corporation	Jason Reneau	4/15/2020
Buildings	6830 Cortona Dr	6830 Cortona Dr	Goleta	Wallace & Smith Contractors	Russel Sherman	4/14/2020
Building	609 N Dillon	609 N Dillon	Los Angeles	CIM	Jeffrey Aguilar	4/14/2020
Building	5801 W Pico Blvd	5801 W Pico Blvd	Los Angeles	Wiseman Construction	Navid	4/13/2020
House	16401 S Pacific Ave	16401 S Pacific Ave	Sunset Beach	SGB	Kevin Morrison	4/13/2020
Building	26520 Cactus Ave	26520 Cactus Ave	Moreno Valley	HJ Construction	Steve Kwak	4/10/2020
Building	838 S La Brea Ave	838 S La Brea Ave	Los Angeles	Wiseman Construction	Navid	4/10/2020
Building	Heber Del Sol	Pitzer Road	Heber	Duggins Construction	Karla Be	4/8/2020
Building	Alta Monrovia Station	123 W Pomona Ave	Monrovia	Wood Partners	Mark Roberts	4/8/2020
House	6438 Drexel Ave	6438 Drexel Ave	Los Angeles	Stephen Bloom Construction	Stephen Bloom	4/8/2020
Building	6600 Van Nuys Blvd	6600 Van Nuys Blvd	Los Angeles	Ramcliff Construction	Mauricio Anaya	4/6/2020
House	1507 Old Oak Rd	1507 Old Oak Rd	Los Angeles	Ellis Gelman Architects	Dean Gelman	4/6/2020
Building	833 N Martel	833 N Martel	Los Angeles	Ketter Construction	Dalal Saadi	4/3/2020
House	6912 Coldwater Canyon Ave	6912 Coldwater Canyon Ave	North Hollywood	National Construction	Isaac Almany	4/3/2020
House	18 Oakmont Dr	18 Oakmont Dr	Los Angeles	Design And Build	Tancerd	4/3/2020
Building	Etiwanda & Collins	18300 Collins	Tarzana	MLN Builders	Dan Kaplan	4/3/2020
Hotel	Fairfield Inn (Palmdale)	1052 W Avenue O-8	Palmdale	M-13 Construction	Chloe Karren	4/2/2020
Building	970 Fedora St	970 Fedora St	Los Angeles	Jamison Properties	Jonathan Braun	4/2/2020
Building	1264 N Harper Ave	1264 N Harper Ave	West Hollywood	Fassberg Construction	Tracey Lund	4/2/2020
Hotel	Four Points (Bakersfield)	5101 California Ave	Bakersfield	Ace Building Company	Rosy Corr	4/1/2020
Hotel	Everhome Suites	1961 Foothill Parkway	Corona	CSI Construction	Steve Ahmad	4/1/2020
Building	1245 New Hampshire Ave	1245 New Hampshire Ave	Los Angeles	AGM Development	John Kang	4/1/2020
Building	4214 Fulton Ave	4214 Fulton Ave	Studio City	4214 Fulton Builders	Anna Vee	3/31/2020
School	Vista Charter	2609 W 5th	Santa Ana	Del Amo Construction	Trisha Elliott	3/31/2020
Building	K Street Apartments	310-316 K Street	Chula Vista	RQL Construction	Dawn Partin	3/31/2020
Building	4353 Park Blvd	4353 Park Blvd	San Diego	LMC	Carson Webb	3/30/2020
House	1159 Formosa Ave	1159 Formosa Ave	West Hollywood	Executive Real Estate Services	Tony Bagramyan	3/30/2020
Unit	1101 Rexford Dr	1101 Rexford Dr	Los Angeles	Daniel Suissa	Daniel Suissa	3/27/2020
House	1224 E 45th St	1224 E 45th St	Los Angeles	National Construction	Mark Clayton	3/27/2020
Townhomes	4180 Duquesne Ave	4180 Duquesne Ave	Culver City	Modative Build	Steve Knight	3/26/2020
Building	Artesia Live	17600-17618 Pioneer Blvd	Artesia	A & R Corporation	Dean Sanchez	3/26/2020
House	517 14th Street	517 14th Street	Santa Monica	Structure Home	Bob Kleiman	3/26/2020
House	2020 Cummings lane	2020 Cummings lane	Los Angeles	COLLABORATIVE CONSTRUCTION	PETER TERPINSKI 	3/25/2020
House	430 Trousdale	430 Trousdale place	Beverly Hills	Development Solutions	Sean Dignam	3/25/2020
House	345 Rockingham Ave	345 Rockingham Ave	Los Angeles	MG Partners	Tobin Hammock	3/25/2020
House	422 Lincoln Blvd	422 Lincoln Blvd	Santa Monica	ACG	Abbas Safii	3/24/2020
House	1227 Georgina Ave	1227 Georgina Ave	Calabasas	ACG	Abbas Safii	3/24/2020
House	548 15th St	548 15th St	Santa Monica	ACG	Abbas Safii	3/23/2020
Building	24 E Santa Clara St	24 E Snta Clara St	Ventura	Greystar Construction	Carlos Cordova	3/20/2020
Building	Centerpointe Level III	505 W Crowther Ave	Placentia	JPI	Stephan Kirby	3/19/2020
Hotel	6021 Lankershim Blvd	6021 Lankershim Blvd	North Hollywood	Noho Hotel	Mike Patel	3/18/2020
House	9632 Lockford St	9632 Lockford St	Los Angeles	David Elliot Builders	Yoni Bloch	3/18/2020
Building	Berendo Sage	1035 S Berendo St	Los Angeles	Dreyfuss Construction	Micko Caluag	3/17/2020
House	1719 Ambassador Ave	1719 Ambassador Ave	Beverly Hills	Lawrence Investment	Freddy Faridnia	3/16/2020
Building	850 S La Brea Ave	850 S La Brea Ave	Los Angeles	EDT	Shahin Shirvani	3/16/2020
House	110 Rockingham Ave	110 Rockingham Ave	Los Angeles	Zac Taylor Development	Nick Oshana	3/16/2020
House	3180 Lindo St	3180 Lindo St	Los Angeles	LaCa	Kevin Locsin	3/13/2020
Guest House	8 Crest Road East	8 Crest Road East	Rolling Hills Estates	CJS Construction	Tino Arteaga	3/13/2020
House	397 Fordyce Rd	397 Fordyce Rd	Los Angeles	Stephen Bloom Construction	Stephen Bloom	3/12/2020
Building	1221 Myra Ave	1221 Myra Ave	Los Angeles	CLG Construction	David Harman	3/12/2020
House	616 N Alexandria Ave	616 N Alexandria Ave	Los Angeles	Lord and Sons Builders	John Choi	3/12/2020
Building	Yaya Vanowen	21121 Vanowen St	Los Angeles	Alpa Construction	Ilya Kleinman	3/11/2020
Building	Staybridge Suites	27500 Jefferson Ave	Temecula	Dakota Legacy Group	Paul Anderson	3/11/2020
House	3950 Royal Oak Pl	3950 Royal Oak Pl	Encino	DS1 Construction Inc	Hodaya G	3/11/2020
House	1809 Stearns Dr	1809 Stearns Dr	Los Angeles	Araj Construction	Araj Voski	3/11/2020
House	738 Cavanagh Rd	728 Cavanagh Rd	Glendale	Demico Construction	Roger	3/10/2020
Building	1130-1134 Orange Dr	1130-1134 Orange Dr	Los Angeles	Ketter Construction	Dalal Saadi	3/10/2020
House	10126 Angelo View	10126 Angelo View	Los Angeles	SoCal Hydronics	Jacob Gooze	3/10/2020
House	17860 Vía Vallarta	17860 Vía Vallarta	Encino	MD Construction	Attn Hajee	3/10/2020
Building	621 Huntley Dr	621 Huntley Dr	West Hollywood	Goed Construction	Arthur .	3/9/2020
Unit	575 S Barrington Ave	575 S Barrington Ave	Los Angeles	Valle Reinis Builders	Yaniv Eliezer	3/9/2020
House	264 Sarah Ave	264 Sarah Ave	Moorpark	Hptn Construction	Thang Nguyen 	3/9/2020
Industrial Building	Ontario Industrial	1261 E Airport Dr	Ontario	Pacific Coast Asset Management	Mike Bastani	3/4/2020
Building	Campanile & Montezuma Apartments	"5750,5742,5734 Montezuma Rd"	San Diego	Cannon Construction	Mike Remensperger	3/4/2020
House	818 N Hill St	818 N Hill St	Los Angeles	Ni-Glory Development	George Zhang	3/4/2020
Building	399 E Del Mar Blvd	399 E Del Mar Blvd	Pasadena	Giantech Construction	Mickey Wu	3/4/2020
Building	1141 Sapphire St	1141 Sapphire St	San Diego	Armstrong Builders	Tom Armstrong	3/3/2020
House	489 Willaman Drive	489 Willaman Drive	Beverly Hills	Crownwell Construction	Roni Efron	3/3/2020
House	330 Deerfield Ave	330 Deerfield Ave	Irvine	Tracey Ho	Tracy Ho	3/2/2020
House	306 W Bellevue Dr	306 W Bellevue Dr	Pasadena	Mensch Company	Ludo	3/2/2020
House	1543 S Rexford Dr	1543 S Rexford Dr	Los Angeles	LE Construction	Eliyahu Ankave	3/2/2020
Building	4604 Western Blvd	4604 Western Blvd	Los Angeles	Oakhill Construction	Ben Salisbury	3/2/2020
Building	11280 Peach Grove St	11280 Peach Grove St	Los Angeles	EHM Capital	Elie Maalouf	2/28/2020
Unit #204	10110 Empyrean Way	10110 Empyrean Way	Los Angeles	Rock Construction	Conor Clancy	2/28/2020
Building	1139 Turnbull Canyon Rd	1139 Turnbull Canyon Rd	Hacienda Heights	Angeles Contractor	Luis Ramirez	2/28/2020
House	2208 Duxbury Circle	2208 Duxbury Circle	Los Angeles	Sbc global	Harvey Plax	2/26/2020
House	1721 Chevy Chase	1721 Chevy Chase	Beverly Hills	Design Built	Avry Mizrahi	2/26/2020
Building	Spinghill Suites By Marriot	23632 Rockfield Blvd 	Lake Forest	Tharaldson Hospitality	Paul Bolton	2/26/2020
House	497 Calle Amigo	497 Calle Amigo	San Clemente	Goliath Tech West	David Benitez	2/21/2020
House	725 Newcastle Ave	725 Newcastle Ave	Los Angeles	Ramin Jaafarian	Ramin Jaafarian	2/21/2020
Building	10 W Walnut St	10 W Walnut St	Pasadena	Benchmark Constractors	Allen McKinley	2/20/2020
Unit	17735 Kinzie St #303	17735 Kinzie St 	Northridge	Mc Master & Hill Construction	Jon Hill	2/20/2020
House	310 Marguerita Ave	310 Marguerita Ave	Santa Monica	Shawmut Design and Construction	dong Suh	2/19/2020
Building	Orange Flats	1130-1134 Orange Dr	Los Angeles	RCI Builders	Nathan Wendt	2/19/2020
House	307 N Citrus Ave	307 N Citrus Ave	Los Angeles	LE Construction	Eliyahu Ankave	2/19/2020
Building	6753 W Selma Ave	6753 W Selma Ave	Los Angeles	HBCS	Salih Eroglu	2/18/2020
Building	2528 S. Grand Ave	2528 S. Grand Ave	Los Angeles	CBG Building Company	Keith Leonard	2/18/2020
House	272 S Maple Dr	272 S Maple Dr	Beverly Hills	Razbannia Consulting	Mike Razbannia	2/18/2020
Building	1640 W 218th	1640 W 218th	Torrance	Diditan Group	Maya Atzlan	2/17/2020
House	2720 N Harbor Blvd	2720 N Harbor Blvd	Fullerton	Brodies Construction	William Main	2/17/2020
House	11870 Beach Club Way	11870 Beach Club Way	Malibu	Wilstein & Associate	Gary Wilstein	2/14/2020
Building	14731-14761 Burbank Blvd	14731-14761 Burbank Blvd	Los Angeles	Hy-Max Building	Jennifer Prizer	2/13/2020
Building	14536 Burbank Blvd	14536 Burbank Blvd	Los Angeles	Dreyfuss Construction	Kyle Benzen	2/13/2020
House	821 Raymundo Ave	821 Raymundo Ave	Los Altos	Genuine Construction	Al Hui	2/12/2020
House	829 N Ogden Dr	829 N Ogden Dr	Los Angeles	Sky Remodeling	Yoni Shalev	2/12/2020
House	3881 Puerco Canyon Rd	3881 Puerco Canyon Rd	Malibu	Real Executive Real Estate	Guy Etziony	2/12/2020
House	1248 Anacapa	1248 Anacapa	Laguna Beach	Hiebsch Custom Homes	Wayne Shumaker	2/12/2020
Building	6535 Melrose Ave	6535 Melrose Ave	Los Angeles	Hy-Max Building	Jennifer Prizer	2/11/2020
Office Building	SpeedWash (Santa Ana)	10801 National Blvd	Los Angeles	Del Amo Construction	Zack Strobel	2/11/2020
House	8765 Hollywood Blvd	8765 Hollywood Blvd	Los Angeles	Eskan Builders	Mike Tehrani	2/10/2020
House	8777 Hollywood Blvd	8777 Hollywood Blvd	Los Angeles	Eskan Builders	Mike Tehrani	2/10/2020
Building	1709-1717 6th St	1709-1717 6th St	Los Angeles	Taltech Construction	Jennifer Wing	2/10/2020
House	371 21st Place	371 21st Place	Santa Monica	SoCal Hydronics	Jacob Gooze	2/7/2020
Building	410 E. Florence Ave	410 E. Florence Ave	Los Angeles	Unique Construction	Chong Lee	2/7/2020
Restaurant	Jinya Ramen Bar	17237 Ventura Blvd	Encino	SD Design Construction	Kim Davila	2/7/2020
House	16342 Rambla De Las Flores	16342 Rambla De Las Flores	Rancho Santa Fe	Landmark Ranch LLC	Mark Gadbois	2/6/2020
House	243 Riverdale Ct	243 Riverdale Ct	Camarillo	Ridge Wood Construction	Scott Moncourtois	2/6/2020
Building	1421 W. Adams Blvd	1421 W. Adams Blvd	Los Angeles	Ketter Construction	dalal saadi	2/5/2020
House	8111 Beverly Blvd	8111 Beverly Blvd	Los Angeles	Uncommon Developers	Greg Stillman	2/4/2020
Building	1301 S Westgate Ave	1301 S Westgate Ave	Los Angeles	Gold One Inc	Reza Sarafzadeh	2/3/2020
Office	561 Birch St	561 Birch St	Lake Elsinore	GBC	Lonnie Herrell	2/3/2020
House	5016 Bakman Ave	5016 Bakman Ave	North Hollywood	State Restoration	Paul Stauch	1/31/2020
House	1635 Casale Rd	1635 Casale Rd	Los Angeles	Bugaise Development	John Judge	1/31/2020
House	1037 Stradella Rd 	1037 Stradella Rd 	Los Angeles	Roman James Design Build	Richard Roberto 	1/30/2020
Building	4207 W Jefferson Blvd	4207 W Jefferson Blvd	Los Angeles	Cook Construction	Corin Blair	1/29/2020
Buildings	The Resort	6th St	Rancho Cucamonga	Western National Group	Jon Bowthorpe	1/28/2020
House	2708 Krim Dr	2708 Krim Dr	Los Angeles	Drexel Construction	Ilan Douek	1/28/2020
House	444 Via Lido Nord	444 Via Lido Nord	Newport Beach	The Stonehill	Jenna Sinclair	1/27/2020
Building	Bryson II	2721 Wilshire Blvd	Los Angeles	Staples Construction	Bianca Burton	1/27/2020
Building	3617 Venice Blvd	3617 Venice Blvd	Los Angeles	Schon Tepler Construction	Cindy Erdene	1/24/2020
House	1036 Carolyn Way	1036 Carolyn Way	Beverly Hills	Taz Construction	Robert Taslimi	1/24/2020
House	24350 Bridle Trail Rd	24350 Bridle Trail Rd	Hidden Hills	BB West Coast Development	Erika Lopez	1/23/2020
Building	Courtyard by Marriott (Fresno)	808 'M' Street	Fresno	Klassen Corporation	Jason Reneau	1/23/2020
Building	3565 Harbor Blvd	3565 Harbor Blvd	Costa Mesa	RS Hagland Construction	Steve Haglund	1/22/2020
Building	1325 New Hampshire	1325 N New Hampshire Ave	Los Angeles	Milender White	Brian Kim	1/22/2020
House	201 N Carmelina	201 N Carmelina	Los Angeles	TMC General Contractors	Mariann Claggett	1/21/2020
Building	Palisades Drive RCFE	17310 Vereda De La Montura	Los Angeles	McGuire Builders	Jeffrey Jones	1/21/2020
House	9400 Corbin Ave	9400 Corbin Ave	Northridge	Design By Touch	Marco Huerta	1/21/2020
Building	1221 Myra Ave	1221 Myra Ave	Los Angeles	Ketter Construction	Dalal Saadi	1/20/2020
House	2413 Pacific Coast Hwy	2413 Pacific Coast Hwy	Lomita	South Bay Design Construction	JR	1/17/2020
Building	1846 Cherokee Ave	1846 Cherokee Ave	Los Angeles	The Madison Group	Dennis Guevara	1/17/2020
Building	11147 N Woodley 	11147 N Woodley Ave	Los Angeles	Frymer Construction	Eric Spicer	1/16/2020
House	631 Crescent Drive	631 Crescent Drive	Beverly Hills	RT Abbott Construction	James Barry	1/16/2020
Building	601-615 E. Cedar Ave	601-615 E. Cedar Ave	Burbank	Struct-Tech Builders	Art Gomez	1/15/2020
Building	Palmdale Senior Living	3850 Rancho Vista Blvd	Palmdale	Pacific West	Javier Alonzo	1/14/2020
Building	7673 Melrose Ave	7673 Melrose Ave	Los Angeles	Jamison Properties	Jonathan Braun	1/13/2020
Building	11612 Culver Blvd	11612 Culver Blvd	Los Angeles	P & N Construction	Sam Rashidi	1/13/2020
House	12945 Mulholland Dr	12945 Mulholland Dr	Beverly Hills	Boswell Construction	Tim Kiser	1/13/2020
Building	Pacific Landing	2120 Lincoln Blvd	Santa Monica	Alpha Construction	Bhaskar Dasari	1/10/2020
Industrial Building	360 N Bedford Dr	360 N Bedford Dr	Beverly Hills	Baypost Builders	Jacob Cohan	1/10/2020
Building	141 Badillo St	141 Badillo St	Covina	Cambridge Homes	Wayne	1/10/2020
Building	520 Lighthouse	520 Lighthouse Ave	Pacific Groove	Stillwater Construction	Rene Diaz	1/10/2020
Building	6559 Brynhurst	6559 Brynhurst	Los Angeles	Howard CDM	Felipe Cardenas	1/9/2020
Building	13724 Victory Blvd	13724 Victory Blvd	Van Nuys	Summer Land Partners Group	Liat Kozar	1/8/2020
House	838 Michigan Ave	838 Michigan Ave	Pasadena	Wilkins Investment	Boyet Feliciano	1/7/2020
House	8718 St Ives Dr	8718 St Ives Dr	Los Angeles	COLLABORATIVE CONSTRUCTION	PETER TERPINSKI 	1/6/2020
Building	2900 Wilshire	2900 Wilshire Blvd	Santa Monica	Jamison Properties	Andrew Esmailian	1/3/2020
Building	107 Hewitt	107 S Hewitt At	Los Angeles	West Builders	Brian C	1/2/2020
Hotel	Sanctity Hotel (Cucamonga)	12255 Baseline Rd	Rancho Cucamonga	Cantilever Construction	Hitesh Patel	1/2/2020
Building	Watts Works	9502 Compton Ave	Los Angeles	Howard CDM	Felipe Cardenas	12/31/2019
Building	2501 State St	2501 State St	Carlsbad	R&R Construction	Rod Andrew	12/31/2019
Building	4320 Inglewood Blvd	4320 Ingelwood Blvd	Los Angeles	Mercury Construction	Adi Cohen	12/30/2019
Building	1275 Sunset Blvd	1275 Sunset Blvd	Los Angeles	CRAFT Contracting	Jack Weems	12/27/2019
Commercial Building	Roscoewood Plaza	13755 Roscoe Blvd	Panorama City	Art Magpantay	Art Magpantay	12/27/2019
Building	708 & 712 New Depot St	708 & 712 New Depot St	Los Angeles	Ramcliff Construction	Justin Moore	12/26/2019
Building	Schafer II	3516 Schafer St	Culver City	KPRS	Rene Li Wang	12/26/2019
House	5433 Royer Ave	5433 Royer Ave	Woodland Hills	Pearl Remodeling	Jacob 	12/20/2019
Building	1434 Poinsettia Pl	1434 Poinsettia Pl	Los Angeles	Executive Real Estate Services	Tony Bagramyan	12/20/2019
Building	7026 Lexington Ave	7026 Lexington Ave	Los Angeles	Ramcliff Construction	Justin Moore	12/18/2019
Hotel	Ayres Hotel Rialto	1495 Renaissance Pkwy	Rialto	Ayres Hotels	Heidi Szabo	12/18/2019
Building	2055 Main Street	2055 Main Street	Irvine	A & R Corporation	Kris Mariano	12/18/2019
Building	4965 Centinela Ave	4965 Centinela Ave	Los Angeles	4965 Centinela LLC	Doug Paul	12/17/2019
Building	Westview Village (Phase 2)	995 Riverside St	Ventura	Cannon Constructors	Mark Ninteman	12/17/2019
Building	Holiday Inn Express (Chino Hills)	15851 Pomona Rincon Rd	Chino Hills	MCC Inc	Ross Fleming	12/16/2019
Building	11055 Fruitland Dr	11049-11055 Fruitland Dr	Studio City	National Construction	Emry Hadad	12/16/2019
House	1455 Claridge Dr	1455 Claridge Dr	Beverly Hills	Ramcliff Construction	Justin Moore	12/16/2019
House	913 Santa Anita	913 S Santa Anita Ave	San Marino	Alec Construction	Eric Con	12/13/2019
House	9575 W Pico Blvd	9575 W Pico Blvd	Los Angeles	Greenbuild Construction Services	Doron Ben	12/13/2019
House	218 Goldenrod 	218 Goldenrod Ave	Corona Del Mar	Hiebsch Custom Homes	Silvia Vargas	12/12/2019
School	Ojai Valley School	10820 Reeves Rd	Ojai	McGillivray Construction	Greg Aragon	12/12/2019
Building	USC Michelson Lab	1002 Childs Way University Park Campus	Los Angeles	Del Amo Construction	Matthew Cureg	12/11/2019
Unit	10345 Wilkins Ave #401	10345 Wilkins Ave 	Los Angeles	South Land Remodeling	Mickey	12/11/2019
House	1038 Palisades Beach Rd	1038 Palisades Beach Rd	Santa Monica	SoCal Hydronics	Jacob Gooze	12/10/2019
Building	3670 W. Imperial Hwy	3670 W. Imperial Hwy	Hawthorne	Mohamad Construction Inc	Amir Ramadan	12/10/2019
Building	Amaya Village	1525 Park Blvd	Orange Cove	Pacific West	Kassi Brown	12/9/2019
House	521 Norwich Dr	521 Norwich Dr	West Hollywood	Ocean Construction	Mike Smith	12/9/2019
House	527 Norwich Dr	527 Norwich Dr	West Hollywood	Ocean Construction	Mike Smith	12/9/2019
House	540 Norwich Dr	540 Norwich Dr	West Hollywood	Ocean Construction	Mike Smith	12/9/2019
Office Building	USC - Track & Field 	3550 McClintock Ave	Los Angeles	Del Amo Construction	Sam Haythorn	12/9/2019
Building	3768 Colorado Blvd	3768 Colorado Blvd	Pasadena	A & R Corporation	Kris Mariano	12/6/2019
Building	2903 Lincoln Blvd	2903 Lincoln Blvd	Santa Monica	CIM	Jeffrey Aguilar	12/6/2019
Building	Home2 by Hilton (Los Angeles)	685 S Bixel St	Los Angeles	Arc City	John Stin	12/5/2019
House	955 Hartzell St	955 Hartzell St	Pacific Palisades	Mansur Investment	shahar	12/5/2019
House	14411 Villa Woods Pl	14411 Villa Woods Pl	Pacific Palisades	Fischer Construction	Jerry Luza	12/4/2019
Building	1735-1737 Westgate Ave	1735-1737 Westgate Ave	Los Angeles	Eco Green Construction	Dulce	12/4/2019
House	16670 Linda Terrace	16670 Linda Terrace	Pacific Palisades	Century West Associates	Jim Kermani	12/4/2019
House	489 S. Willaman Dr	489 S. Willaman Dr	Los Angeles	Crownwell Construction	Roni Efron	12/3/2019
Townhomes	1239 Beachwood	1239 N. Beachwood dr	Hollywood	Crownwell Construction	Roni Efron	12/2/2019
Townhomes	1245 Beachwood	1245 N. Beachwood Dr	Hollywood	Crownwell Construction	Roni Efron	12/2/2019
House	288 Canon Dr	288 Canon Dr	Santa Barbara	Lynx Management	Wayne Labrie	11/27/2019
Building	Manzanita Apartments	2951 Soscol Ave	Napa	Sunseri Construction		11/27/2019
Building	716 The Strand	716 The Strand	Manhattan Beach	Onni Group	Kack Khodr	11/26/2019
House	2200 Duxbury Circle	2200 Duxbury Circle	Los Angeles	SBC Global 	Harvey Plax	11/25/2019
Building	1811 Nordhoff St	1811 Nordhoff St	Northridge	Gilbane Building Company	Josh Hung	11/25/2019
Industrial Building	2221 Park Place	2221 Park Place	El Segundo	Cardinal Investments	Yagnik Petel	11/25/2019
House	12534 W. Fielding Cir	12534 W. Fielding Cir	Los Angeles	Solid Works Group	Almog Amir	11/25/2019
Building	4302-4312 Troost Ave	4302-4312 Troost Ave	Studio City	SMA Builders	Andrew Sedaghatpour	11/22/2019
Building	4712-4728 Vantage Ave	4712-4728 Vantage Ave	Valley Village	SMA Builders	Andrew Sedaghatpour	11/22/2019
Building	9001 Santa Monica Blvd	9001 Santa Monica Blvd	West Hollywood	Build Group	Chase Mordy	11/21/2019
House	210 Calle Lasuen	210 Calle Lasuen	San Clemente	C.H. Anderson	Trent Anderson	11/21/2019
House	111 Crescent Ave	111 Crescent Ave	Avalon	Fine Line Construction 	Brian Tucker	11/21/2019
Building	1120 Larrabee St	1120 Larrabeee St	West Hollywood	West Builders	Lucas Nozick	11/21/2019
House	3 Ritz Cove Dr	3 Ritz Cove Dr	Dana Point	Hiebsch Custom Homes	Katie Crehan	11/20/2019
House	17241 Parthenia St	17241 Parthenia St	Northridge	Ocean 7 Builders	Sam Shoshana	11/20/2019
House	5191 Round Meadow Rd	5191 Round Meadow Rd	Hidden Hills	Goed Construction	Arthur Dilovyan	11/20/2019
Building	San Gabriel Senior Living	824 Gladys Ave	San Gabriel	Sundt	Tom Van Aken	11/20/2019
Building	Ramsgate Ave Apartments	8900 & 8904 Ramsgate Ave	Los Angeles	Struct-Tech Builders	Art Gomez	11/19/2019
House	1859 Bel Air Rd	1859 Bel Air Rd	Los Angeles	Current Trend Contractors	Randy Lawrence	11/19/2019
House	5505 Hoback Glen Rd	5505 Hoback Glen Rd	Hidden Hills	BB West Coast Development	Erika Lopez	11/18/2019
Building	Courtyard Marriot (Bakersfield)	8821 Spectrum Park Way	Bakersfield	Klassen Corporation	Jason Reneau	11/18/2019
Building	1830 Pennsylvania Ave	1830 Pennsylvania Ave	Los Angeles	Century West Associates	Jim Kermani	11/15/2019
Building	Julie 88	11246 Otsego St	North Hollywood	LJ Construction	Arthur	11/15/2019
Building	Lakeview Senior Living (Yorba Linda)	18222 Mariposa Ave	Yorba Linda	ETCO Homes	Rhea Smith	11/14/2019
House	1301 San Remo Dr	1301 San Remo Dr	Pacific Palisades	Mansur Investment	shahar	11/14/2019
Building	1807 17th St	1807 17th St	Santa Monica	168 Builder	Tony Zeng	11/13/2019
House	408 Calle Gomez	408 Calle Gomez	San Clemente	C.H. Anderson	Trent Anderson	11/13/2019
Building	634 Huntley Dr	634 Huntley Dr	West Hollywood	Century West Associates	Jim Kermani	11/13/2019
Building	1305 2nd Street	1305 2nd Street	Santa Monica	King's Arch	Jason Spencer	11/13/2019
Building	919 Harvard Blvd	919 Harvard Blvd	Los Angeles	Century West Associates	Jim Kermani	11/12/2019
Building	La Guadalupe	110 Boyle Ave	Los Angeles	Dreyfuss Construction	David Sanchez	11/12/2019
House	31100 Broad Beach Rd	31100 Broad Beach Rd	Malibu	Related Construction	Howard Smuckler	11/12/2019
Building	Sun King Apartments	9190 Telfair Ave	Sun Valley	Dreyfuss Construction	David Sanchez	11/12/2019
Building	Hawaii Plaza	300 E. Valley Blvd	San Gabriel	Primus Contracting Group	Billy Mariscal	11/11/2019
Building	Los Alamitos Luxury Apartments	3342 Cerritos Ave	Los Almitos	A & R Corporation	Dean Sanchez	11/11/2019
Building	13654 Bassett St	13654 Bassett St	Van Nuys	Alpa Construction	Ilya Kleinman	11/8/2019
House	556 Flores St	556 Flores St	West Hollywood	Roy Livyatan	Roy Livyatan	11/8/2019
Building	806 W. ADAMS	806 W Adams Blvd	Los Angeles	Mccormick	Seth Smith	11/7/2019
Building	Monarch Scripps Mesa	10380 Spring Canyon Rd	San Diego	A & R Corporation	Dean Sanchez	11/7/2019
Building	Woodspring Suites (Bellflower)	8827 Artesia Blvd	Bellflower	CSI Construction	Irvine Estimator	11/5/2019
Building	Comfort Inn (Bellflower)	8800 Palm St	Bellflower	CSI Construction	Irvine Estimator	11/5/2019
Building	Magnolia Villas	1445-1453 10th St	Santa Monica	Dreyfuss Construction	David Sanchez	11/4/2019
Building	Ocean Hills II	4500 Cannon Rd	Oceanside	Pacific West	Javier Alonzo	11/4/2019
Building	10140 Hillhaven Ave	10140 Hillhaven Ave	Tujunga	MARB Construction	Vincent Reynoso	11/4/2019
Building	900 S Vermont	900 S Vermont Ave	Los Angeles	Jamison Properties	Andrew Esmailian	11/1/2019
Building	1946 Overland 	1946 Overland Ave	Los Angeles	James Kennedy Construction	Monica Friel	11/1/2019
Building	500 Balboa Blvd	500 Balboa Blvd	Newport Beach	Uprite Construction	Jimi Sepulveda	11/1/2019
Building	6226 Colfax Ave	6226 Colfax Ave	Los Angeles	AFCO Construction	Renne Laws	11/1/2019
Building	4830 Terrace Ave	4830 Terrace Ave	Oxnard	Mackey Construction	Michael Wallen	10/31/2019
Building	1055 Mariposa 	1055 Mariposa Ave	Los Angeles	Dreyfuss Construction	Kyle Benzen	10/30/2019
Building	Nexen	2968 7th St	Los Angeles	Jamison Properties	Jonathan Braun	10/30/2019
Building	PATH Villas at South Gate	5610 Imperial Highway	South Gate	Dreyfuss Construction	David Sanchez	10/29/2019
Building	11620 W Chenault St	11620 W Chenault St	Los Angeles	SMA Builders	Andrew Sedaghatpour	10/29/2019
Building	1650-1654 S Sawtelle Blvd	1650-1654 S Sawtelle Blvd	Los Angeles	SMA Builders	Andrew Sedaghatpour	10/29/2019
House	1156 Fiske St	1156 Fiske St	Pacific Palisades	Mansur Investment	shahar	10/29/2019
Building	Makers Quarter	15th & Broadway	San Diego	JPI	Stephan Kirby	10/29/2019
Building	1340 S Hill St	1340 S Hill St	Los Angeles	CBG Building Company	Crosby Simms	10/28/2019
House	991 Bel Air Rd	991 Bel Air Rd	Los Angeles	Bel Air LLC	Patrick Kennedys	10/28/2019
Building	1136 La Cienega	1136 N La Cienega Blvd	West Hollywood	KCS West	Kenneth Zhu	10/28/2019
Building	1813 - 1821 Pandora Ave	1813 - 1821 Pandora Ave	Los Angeles	Supreme Construction	Robin Nahouray	10/28/2019
Building	4707 Fulton Ave	4707 Fulton Ave	Studio City	Dayan Industries	Ofer Dayan	10/25/2019
Building	5100 N. Whitsett Ave	5100 N. Whitsett Ave	Valley Village	5108 Valley Village LLC	Josephine Shafaee	10/25/2019
House	707 11Th St	707 11Th St	Santa Monica	Mr. Build	Michael Senecal	10/25/2019
House	3221 Glenhurst Ave	3221 Glenhurst Ave	Los Angeles	JNO Construction	Oren Yohanan	10/25/2019
Building	321 Fickett St	321 Fickett St	Los Angeles	Burrell Construction	David Robles	10/24/2019
Building	Woodlake Retail_Office Shell Building	101 N. Naranjo Blvd	Woodlake	Klassen Corporation	Jason Reneau	10/24/2019
Building	Garvey Earle Plaza	8449 Garvey Ave	Rosemead	Primus Contracting Group	Billy Mariscal	10/24/2019
House	153 Junipero Serra Dr. #A	153 Junipero Serra Dr	San Gabriel	Back Gold Construction	Dave Huang	10/24/2019
Building	Colorado 77 (Block D)	300 E. Colorado Blvd	Pasadena	Adept Building & Construction	Alex Yang	10/24/2019
House	True Jesus Church (Lakewood)	21225 Bloomfield Ave	Lakewood	Cal-City Construction	Soin Yun	10/23/2019
Building	336-350 7th St	336-350 7th St	San Pedro	ARK Construction	Kambiz Kamdar	10/23/2019
Building	857 N Hayworth Ave	857 N Hayworth Ave	Los Angeles	ARK Construction	Kambiz Kamdar	10/23/2019
House	839 N Ogden Dr	839 N Ogden Dr	Los Angeles	Giant Construction	Leon Perez	10/23/2019
House	101 N Westlake Blvd	101 N Westlake Blvd	Thousand Oaks	Tunney Land	John	10/18/2019
House	1852 Bel Air Rd	1852 Bel Air Rd	Los Angeles	Greenworks Construction	Itay	10/18/2019
House	8710 Delgany Ave	8710 Delgany Ave	Playa Del Rey	Personnal	Bryce Richards	10/18/2019
House	11532 Dilling St	11532 Dilling St	North Hollywood	Giant Construction	Leon Perez	10/18/2019
House	623 Elm St	623 Elm St	Los Angeles	Citywall Construction	Paul Bahari	10/17/2019
House	22917 Oxnard St	22917 Oxnard St	Woodland Hills	Weiss Management	Yakov Weiss	10/17/2019
Building	5300 Adams Blvd	5300 Adams Blvd	Los Angeles	CIM	Jeffrey Aguilar	10/16/2019
House	2071 N Beverly Dr	2071 N Beverly Dr	Los Angeles	KLPM	Ernest Ramirez	10/16/2019
House	611 Moreno Ave	611 Moreno Ave	Los Angeles	Callaborative Construction	Tom Johnson	10/16/2019
House	285 N Ventura Ave	285 N Ventura Ave	Ventura	Tom Harkin Const	Tom Harkin	10/16/2019
House	143 S Lucerne Blvd	143 S Lucerne Blvd	Los Angeles	CJ Construction	John Kim	10/16/2019
House	2331 Chislehurst Dr	2331 Chislehurst Dr	Los Angeles	Elite Remodeling	Oren Tayler	10/16/2019
Building	5460 Fountain Ave	5460 Fountain Ave	Los Angeles	Wiseman Construction	Navid	10/11/2019
Building	751 Burlingame Condos	751 S. Burlingame Ave	Los Angeles	Unique Caspian	Babak Mirdamadi	10/11/2019
House	507 Moreno Ave	507 Moreno Ave	Los Angeles	Agata Terpinski Tidwell	Agata Tidwell	10/11/2019
House	26542 Wild View Terrace	26542 Wild View Terrace	Laguna Beach	DDCM Incorporated	Jonathan May	10/11/2019
Building	5832 Virginia Ave	5832 Virginia Ave	Los Angeles	Burrell Construction	David Robles	10/10/2019
Building	401 Westren Ave & 4th St	401 Westren Ave & 4th St	Los Angeles	Icon West	Ridwan Tirtatunggal	10/10/2019
House	5512 Tampa Ave	5512 Tampa Ave	Tarzana	Design Build DOTZ	Pedram Rad	10/10/2019
Building	12444 Chandler Blvd	12444 Chandler Blvd	Los Angeles	Hy-Max Building	Jennifer Prizer	10/10/2019
Building	1806 Gramercy Pl	1806 Gramercy Pl	Los Angeles	Rony Shram	Rony Shram	10/10/2019
House	356 E Carlisle Rd	356 E Carlisle Rd	Thousand Oaks	MK Farms Inc	Chris & Megan	10/8/2019
House	5518 Tampa Ave.	5518 Tampa Avenue	Tarzana 	Design Build DOTZ	Pedram Rad	10/8/2019
Building	1940 Bedford	1940 s Bedford Street	Los Angeles	GME Development	Isaac Abrahams	10/8/2019
Building	321-325 Florence	321-321 Florence Ave	Los Angeles	Aster Construction	Gustavo Torres	10/7/2019
Building	11821 Texas Ave	11821 Texas Ave	Los Angeles	Wiseman Construction	Navid	10/7/2019
Building	Broadway Block	200-232 Long Beach Blvd	Long Beach	Onni Group	Ryan Sangalang	10/4/2019
House	15601 Meadowgate Rd	15601 Meadowgate Rd	Encino	CDH Builders	Sharon Ohana	10/4/2019
Building	La Mesa Quarry 2 Apartments	4400 Palm Ave	La Mesa	La Mesa Quarry 2	Steve Penner	10/3/2019
Building	Beach Village Life 1	300 Christiansen Ave	Carlsbad	Watkins Landmark Construction	Chris Mireles	10/3/2019
Building	Jefferson La Mesa	4949-4999 Baltimore Dr	La Mesa	JPI	Keith Estes	10/2/2019
Building	test	test	Tarzana	Test	test	10/2/2019
Building	I.G Britannia Park	2335 Siempre Viva Court	San Diego	Lusardi Construction	Preconstruction Department	9/27/2019
House	356 E Colorado Rd	356 E Colorado Rd	Thousand Oaks	Chris & Megan Construction	Chris Megan	9/27/2019
House	218 Alta Ave	218 Alta Ave	Santa Monica	Adobe Construction	Peyman Taheri	9/27/2019
House	417 W Oak Ave	417 W Oak Ave	El Segundo	Mr. Build Construction	Mikahaila Bellenbaum	9/27/2019
Building	206 Chevy Chase	206 Chevy Chase Dr	Glendale	Icon West	Ridwan Tirtatunggal	9/27/2019
Building	Compass Bible Church	15272 Jason Circle	Huntington Beach	Tovey-Shultz Construction	Aubrie Gray	9/26/2019
Building	Tru By Hilton (Norco)	3481 Hamner Ave	Norco	Buffalo Construction	Chris French	9/26/2019
Building	68555 Ramon Rd	68555 Ramon Rd	Cathedral City	Primus Contracting Group	Fred East	9/26/2019
Building	11701 Santa Monica Blvd	11701 Santa Monica Blvd	Los Angeles	Frymer Construction	Eric Spicer	9/25/2019
Building	8548 Reseda Blvd	8548 Reseda Blvd	Los Angeles	Arc City	Estimating	9/24/2019
Building	The Jagger	3630 Overland Ave	Los Angeles	Integrated Development	Noyan Uras	9/24/2019
Building	854 Westmount Dr	854 Westmount Dr	West Hollywood	Kook & Associates Construction	Gabriel Caoile	9/24/2019
House	670 Moulton Ave	670 Moulton Ave	Los Angeles	Aster Construction	Shiva Prasad	9/23/2019
Building	10563 Ashton Ave	10563 Ashton Ave	Los Angeles	Ashton LLC	Freddy Martinez	9/23/2019
House	4634 Halbrent Ave	4634 Halbrent Ave	Sherman Oaks	Kook & Associates Construction	Gabriel Caoile	9/20/2019
House	29757 Mulholland Hwy	29757 Mulholland Hwy	Agoura Hills	Dion Pierskalla	Dion Pierskalla	9/20/2019
House	1700 Ensley ave	1700 Ensley ave	Los Angeles	Arbib Construction	Itsik Arbib	9/19/2019
House	3073 Lakeview Dr	3073 Lakeview Dr	Fullerton	Prov163 LLC	Robert Woods	9/18/2019
Building	Hollister Village Apartments	7000 Hollister Ave	Goleta	Frank Schipper Construction	Erwin Villegas	9/18/2019
House	3624 Grayburn Rd	3624 Grayburn Rd	Pasadena	Z Construction	Alon Zimhi	9/17/2019
Building	5843 W. Pico Blvd	5843 W. Pico Blvd	Los Angeles	King Young Construction	Ray Ky	9/16/2019
Building	Lynwood Villas	12021 Atlantic Ave	Lynwood	Kondor Builders	John Stinson	9/13/2019
Building	5022 Whitsett Ave	5022 Whitsett Ave	Valley Village	MON-ERO Construction	Roy Monette	9/13/2019
Building	10757 Palms Blvd	10757 Palms Blvd	Los Angeles	Schon Tepler Construction	Cindy Erdene	9/12/2019
Building	Early Childhood Center	1600 Hillcrest Dr	Thousand Oaks	EPI Construction	Darren Van Velzer	9/11/2019
Building	Wave Medical Group	720 Paularino Ave	Costa Mesa	Morris Inc	Cyndi Boeker	9/11/2019
House	27234 Pacific Coast Hwy	27234 Pacific Coast Hwy	Malibu	ARTES Design Build	Diana Drake	9/10/2019
Building	29th Street	464 29th Street	Manhattan Beach	Kassabian 	Diko Kassabian	9/10/2019
Building	1159 37th Street	1159 37th Street	Los Angeles	Countrywide Development	Amy Angeles	9/10/2019
Building	502 Harvard Blvd	502 Harvard Blvd	Los Angeles	Cambridge Homes	Wayne Dollarhide	9/10/2019
House	2015 charlie St	2015 charlie St	Costa Mesa	Platinum F Plus Inc	Keli Slade	9/9/2019
House	601 Hanley Way	601 Hanley Way	Los Angeles	Skyson Construction	Amir	9/6/2019
Building	North Madison Apartments	417 North Madison Ave	Pasadena	W.L. Butler Construction	Marco Marmolejo	9/6/2019
House	2943 Virginia Ave	2943 Virginia Ave	Santa Monica	Mark Wong	Mark Wong	9/5/2019
Building	1820 Brand Blvd	1820 Brand Blvd	Glendale	Linde Construction	Nick Jacobs	9/5/2019
Building	10717 Ohio Blvd	10717 Ohio Blvd	Los Angeles	Skyson Construction	Joe Iacobsohn	9/5/2019
House	9260 Monte Mar Dr	9260 Monte Mar Dr	Los Angeles	Drexel Construction	Ilan.	9/5/2019
Warehouse	ARTESIA INDUSTRIAL	745 W Artesia Blvd	Compton	Oltmans	Brad Kollar	9/4/2019
House	319 11th St	319 11th St	Santa Monica	Cyrus Pacific	Daniel Galdjie	9/4/2019
House	19253 Berclair Ln	19253 Berclair Ln	Tarzana	Susan Tepanyande	Susan Tepanyande	9/4/2019
Building	Dual Brand Hotel	3000 W Chapman Ave	Orange	Hensel Phelps	Glenn Shiihara	9/4/2019
House	10870 Vicenza Way	10870 Vicenza Way	Los Angeles	Villa Vicenza LLC	Alexis	9/4/2019
House	1304 Palos Verdes Dr	1304 Palos Verdes Dr	Palos Verdes Estates	Lydia Tracy	Lydia Tracy	9/3/2019
Building	Protea Memory Care	31451 Avenida Los Cerritos	San Juan Capistrano	Pacific West	Javier Alonzo	9/3/2019
Building	Overland Apartments	1822 Overland Ave	Los Angeles	Burrell Construction	David Robles	8/30/2019
Building	904 Normandie Ave	904 Normandie Ave	Los Angeles	Pub Construction	Dennis Frietze	8/30/2019
Building	Hi Point Apartments	1556 S Hi Point St	Los Angeles	Ketter Construction	Andrea Palma	8/30/2019
Industrial Building	San Fernando Industrial Center	510 Park Ave	San Fernando	KPRS	Court Lewis	8/29/2019
House	9828 Bothwell Rd	9828 Bothwell Rd	Northridge	South Land Remodeling	Oren Taylor	8/29/2019
House	1690 Dohney Dr	1690 Dohney Dr	Los Angeles	SoCal Hydronics	Jacob Gooze	8/29/2019
Office Building	Bellflower Exchange	17434 Bellflower Blvd	Bellflower	Howard CDM	Raymond Ramos	8/29/2019
House	1237 Allen Ave 	1237 Allen Ave 	Glendale	DTD Builders	Derik	8/29/2019
House	1002 El Medio	1002 El Medio	Pacific Palisades	Structure Home	Karyn Clark	8/28/2019
Building	Staybridge Suites (San Bernardino)	1911 S Commercenter	San Bernardino	Rexco Development	Kathy Acosta	8/28/2019
Commercial Remodeling	1187 Coast Village Rd	1187 Coast Village Rd	Montecito	Skye McGinnes	Skye McGinnes	8/28/2019
House	430 N Oakhurst Dr	430 N Oakhurst Dr	Beverly Hills	DLN Construction	David Newey	8/28/2019
House	4064 Sunny Slope Ave	4064 Sunny Slope Ave	Sherman Oaks	My Home Builders	sharon Weingarten	8/27/2019
Building	11360 Warner Ave	11360 Warner Ave	Fountain Valley	USS CAL BUILDERS	Sharon Espinosa	8/26/2019
House	28332 Rey De Copas Ln	28332 Rey De Copas Ln	Malibu	Abode LLC	Zachary Singerman	8/26/2019
House	496 N Coast Hwy	496 N Coast Hwy	Laguna Beach	Oligino Laux Construction	Michael Laux	8/26/2019
Building	3800 S. Menton Ave	3800 S. Menton Ave	Culver City	CLG Construction	Wil Davis	8/26/2019
Building	16340 Lasselle St	16340 Lasselle St	Moreno Valley	Contiental East Development	Brennan Riddle	8/23/2019
Building	2783-2801 Francis	2783-2801 Francis	Los Angeles	ARK Construction	Kambiz Kamdar	8/23/2019
Building	718 Rose Ave	718 Rose Ave	Venice	Dreyfuss Construction	Ken Yang	8/22/2019
House	217 Saltair Ave	217 Saltair Ave	Los Angeles	Ed Bercow	Ed Bercow	8/22/2019
Building	2919-2923 Waverly Dr	2919-2923 Waverly Dr	Los Angeles	Hy-Max Building	Jennifer Prizer	8/22/2019
House	10542 Vestone Way	10542 Vestone Way	Los Angeles	Taltect Construction	Jennifer	8/21/2019
House	575 Palmerstone Dr	575 Palmerstone Dr	La Canada Flintridge	Premier General Contractors	Marty Perry	8/21/2019
Building	Adams 5788	5788 Adams Blvd	Los Angeles	KPRS	Rene Li Wang	8/21/2019
House	1415 Club View Dr	1415 Club View Dr	Los Angeles	Jh Development	Jonathan Hanassab	8/20/2019
House	9705 Oak Pass Rd	9705 Oak Pass Rd	Beverly Hills	California Dream Home Builders	sharon Ohana	8/20/2019
Navigation Center	Buena Park Navigation Center	6494 Caballero Blvd	Buena Park	MZT	Daniel Duarte	8/20/2019
Building	1051 Corning St	1051 Corning St	Los Angeles	Mar Mar Group	Cesar Svidler	8/19/2019
Building	1212-1216 N. Sycamore	1212-1216 N. Sycamore	Hollywood	Noesis	Elie Abitbol	8/19/2019
House	219 Homewood Rd	219 Homewood Rd	Los Angeles	Fahad Vakil	Fahad Vakil	8/19/2019
Building	Spaulding Condos	939 Spaulding Ave	West Hollywood	Struct-Tech Builders	Alex Gomez	8/19/2019
House	204 S Plymouth Blvd	204 S Plymouth Blvd	Los Angeles	Home Remodeling and Design	Alex Cruz	8/16/2019
Building	3766 Motor Ave	3766 Motor Ave	Los Angeles	Regency Midland Construction	Mike Darvish	8/16/2019
House	428 Homewood Rd	428 Homewood Rd	Los Angeles	Sbc global	Oscar Morris	8/15/2019
Building	Arboleda Senior Apartments	1040 N. Unruh Ave	La Puente	RAAM Construction	Richard Lara	8/15/2019
House	1040 Lavander Ln	1040 Lavander Ln	La Canada Flintridge	C.H. Anderson Construction	Chris Wilding	8/14/2019
House	191 Normandy Ln	191 Normandy Ln	La Canada Flintridge	C.H. Anderson	Chris Wilding	8/14/2019
Building	552 N Hobart Blvd	552 N Hobart Blvd	Los Angeles	Schon Tepler Construction	Cindy Erdene	8/14/2019
House	Casa Victoria Triplex	136 Avenida Victoria	San Clemente	C.H. Anderson	Trent Anderson	8/14/2019
House	1130 Georgina St	1130 Georgina St	Santa Monica	Santos Lopes	Santos Lopes	8/14/2019
House	21045 Stoney Brook Dr	21045 Stoney Brook Dr	Wallnut	Add Zero	Angie Davis	8/14/2019
Building	Tru By Hilton - San Bernardino	215 E. Hospitality Lane	San Bernardino	SPJ Construction	Prakash Patel	8/13/2019
Building	AVID AN IHG HOTEL	Mariposa Rd	Victorville	SPJ Construction	Prakash Patel	8/13/2019
Building	12147 Magnolia Blvd	12147 Magnolia Blvd	Valley Village	BEC Construction	Kevin Yazdi	8/12/2019
House	1508 Lexington 	1508 Lexington Rd	Beverly Hills	Ral Design	Jason Aguirre	8/12/2019
House	2239 Century Hill	2239 Century Hill	Los Angeles	DKI RestoTech	Bahaur Sepher	8/12/2019
Building	Rowland Town Center	18800 Gale Ave	Rowland Heights	KCS West	Paul Dempsey	8/12/2019
Building	Dairy Office Building	3101 W. Exposition Blvd	Los Angeles	Essey Construction	Steve Hong	8/12/2019
Building	Tru By Hilton	11111 Prairie Ave & 4026 11th St 	Inglewood	MCC Inc	Ross Fleming	8/12/2019
House	6721 W Drexel Ave	6721 W Drexel Ave	Los Angeles	Life Style Remodeling	Michael Cohen	8/9/2019
Building	ADAMS	2600 Catalina St	Los Angeles	CJ Construction	John Kim	8/9/2019
House	347 N Las Palmas Ave	347 N Las Palmas Ave	Los Angeles	David Elliot Builders	David Elliot	8/9/2019
House	2705 Krim Dr	2705 Krim Dr	Los Angeles	Drexel Construction	Ilan Douek	8/9/2019
Building	521 N. Gramercy Place	521 N. Gramercy Place	Los Angeles	Kooklan Builders	Peymon Kooklan	8/8/2019
Building	Westminster Crossing	7122 Westminster Blvd	Westminster	Westport	Kristen Patterson	8/8/2019
House	Hendos Brewing & Spirits	27901 Jefferson Ave	Temecula	CWC	Jeff Whiting	8/7/2019
House	6494 Caballero Blvd	6494 Caballero Blvd	Buena Park	Crate	Brad Rushing	8/7/2019
Building	Mesivta Of Greater	25115 Mureau Rd	Calabasas	Premier Pharmacy	Maggie Vasquez	8/6/2019
Building	11241 Otsego St	11241 W.Otsego St	North Hollywood	Premier Pharmacy	Maggie Vasquez	8/6/2019
Building	Motor Apartments	3638-3642 S Motor Ave	Los Angeles	Premier Pharmacy	Maggie Vasquez	8/6/2019
Building	De Anza Court	1995 N. Ventura Way	Ventura	Valley State Builders	Greg Meneshian	8/5/2019
House	1731 Rising Glen 	1731 Rising Glen 	Los Angeles	Advanced Builders & Contractors	Nick Yahoodain	8/5/2019
House	4411 Stern Ave	4411 Stern Ave	Sherman Oaks	Vision Remodeling	Asher	8/2/2019
House	6309 Ocean Front Walk	6309 Ocean Front Walk	Playa Del Rey	EA Surfaces LLC	Andy Terarutyunyan	8/1/2019
Building	1300 Colton St	1301 Colton St	Los Angeles	Burrell Construction	David Robles	8/1/2019
Building	4209 S Western Ave	4209 S Western Ave	Los Angeles	Aster Construction	Shiva Prasad	8/1/2019
House	3020 Lakeridge Dr	3020 Lakeridge Dr	Los Angeles	Stephen Bloom Construction	Stephen Bloom	8/1/2019
House	9364 Beverly Crest	9364 Beverly Crest	Beverly Hills	Dazzle Construction Group	Shah Sepehr	7/31/2019
Building	Innovation Lab & Classroom Building	1005 Armada Dr	Pasadena	Illig Construction	Sarah Tarby	7/31/2019
Building	CWV - Alfred	"713,721-723,725 Croft Ave & 714-716,718 Alfred St"	Los Angeles	ETCO Homes	Mimi Henderson	7/30/2019
Building	5731 Lexington Ave	5731 Lexington Ave	Los Angeles	Softwood Constractors	Ildefonso Ramirez	7/29/2019
Building	990 Pier View Way	990 Pier View Way	Oceanside	Design And Construction	Brian Leahey	7/29/2019
Building	TownePlace Irvine	2652 White Rd 	Irvine	Bayley Construction	George Perez	7/26/2019
Building	3063 W Pico Blvd	3063 W Pico Blvd	Los Angeles	Ketter Construction	Andrea Palma	7/25/2019
Building	800 West 3rd St	800 West 3rd St	Los Angeles	RCI Builders	Victor Huizar	7/25/2019
Building	5405 Hermitage Ave	5405 Hermitage Ave	Los Angeles	Hassan  Arzy	Hassan  Arzy	7/25/2019
House	Regal Mission	431 College Blvd	Oceanside	Wellbrock Builders	Jeff Wellbrock	7/24/2019
House	17004 Oakview Dr	17004 Oakview Dr	Encino	Ocean Even Builders	Ron	7/24/2019
Building	Westmont At Cypress	4889 & 4775 Katella Ave	Cypress	SRM Construction	Andrew Bernard	7/24/2019
Building	4864 Melrose Ave	4864 Melrose Ave	Los Angeles	Regency Midland Construction	Mike Darvish	7/23/2019
Building	The Hub at LA	3800 S. Figueroa St	Los Angeles	A & R Corporation	Dean Sanchez	7/22/2019
Building	Ashley Willowbrook	11739 Holmes Ave	Los Angeles	RAAM Construction	Nick Wilson	7/22/2019
Building	Valleyheart Apartments	4114 Vantage Ave	Los Angeles	Aram Construction	Judith Guerrero	7/22/2019
Building	546 Harvard	546 Harvard	Los Angeles	Burrell Construction	David Robles	7/19/2019
Building	La Cienega	1056 S. LA Cienega Blvd	Los Angeles	RCI Builders	Victor Huizar	7/19/2019
House	10710 Chalon Rd	10710 Chalon Rd	Los Angeles	Elite IMG	Meir	7/19/2019
Building	KIPP Ignite Academy	1628 E. 81St  Street	Los Angeles	Del Amo Construction	Joe Liberto	7/18/2019
Building	5506 Thornburn St	5506 Thornburn St	Los Angeles	Burrell Construction	David Robles	7/18/2019
House	Condo Remodel #131	200 PCH #131	Huntington Beach	General Building Contractor	John Vengoechea	7/18/2019
Building	Garvey Del Mar Plaza	7801 Garvey Ave	Rosemead	Burrell Construction	David Robles	7/18/2019
House	Flora	33732 Shackleton Osle	Dana Point	Oligino Laux Construction	Al Oligino	7/17/2019
Building	Melrose Residences	4660 Melrose Ave	Los Angeles	Westport	Kristen Patterson	7/17/2019
House	1325 & 1327 State St	1325 & 1327 State St	Santa Barbara	Frank Schipper Construction	Erwin Villegas	7/17/2019
Building	Riverglen II	2600-2750 Riverside Dr	Los Angeles	Consoritum West	Edward Gorman	7/16/2019
Building	Lux Apartments	2277 Harbor Blvd	Costa Mesa 	Consoritum West	Edward Gorman	7/16/2019
Building	651 Sunflower	651 Sunflower Ave	Santa Ana	Consoritum West	Edward Gorman	7/16/2019
Building	11671 Erwin St	11671 Erwin St	North Hollywood	Razbannia Consulting	Mike Razbannia	7/15/2019
Building	arTESIA INDUSTRIAL	5935 W. Pico Blvd	Los Angeles	Westport	Kristen Patterson	7/15/2019
House	5195 Dobson Way	5195 Dobson Way	Culver City	LB Contractors	Leslie Barton	7/15/2019
House	1448 Bradbury Rd	1448 Bradbury Rd	San Marino	Greenworks Construction	David Ross	7/15/2019
House	1274 & 1274 A Bond St	1274 & 1274 A Bond St	San Luis Obispo	Quincon	Pedro Diaz	7/15/2019
House	2124 Century Park Lane	2124 Century Park Lane	Century City	Sisu Construction	Eric Ahola	7/12/2019
Building	Vista Del Mar	34175 Pacific Coast Highway	Dana Point	Uprita Construction	Jimi Sepulveda	7/12/2019
Building	Kipp Compton Community	1240 Airport Way	Compton	Del Amo Construction	Isabel Gomez	7/12/2019
House	17115 Brimhall Rd	17115 Brimhall Rd	Bakersfield	Auburn Oak Builder	Brent Harmon	7/12/2019
House	568 Chautauqua 	568 Chautauqua Blvd	Los Angeles	Building Solutions and Design	Eliana Rokach	7/11/2019
Building	8th & B (National City)	8th St & B Ave	National City	Lusardi Construction	Preconstruction Department	7/10/2019
House	2632 Lincoln Blvd	2632 Lincoln Blvd	Santa Monica	Ed Grush	Ed Grush	7/10/2019
House	3142 Helms Ave	3142 Helms Ave	Los Angeles	Bo Jennings Construction	Bo Jennings 	7/10/2019
House	1943 Estes Road	1943 Estes Road	Eagle Rock	Greenworks Construction	David	7/9/2019
Building	San Vicente Preschool	972-974 N San Vicente Blvd	West Hollywood	Aster Construction	Shiva Prasad	7/9/2019
Building	39th Place	1249 W 39th Place	Los Angeles	Schaffel Development	Sharon Kass	7/8/2019
House	12045 hoffman Street unit 205	12045 hoffman Street 	Studio City	Ilya Gorbonos	Ilya Gorbonos	7/8/2019
Room	Chick-fil-A	400 S Baldwin Ave	Arcadia	On-Site Builders	Jody Harris	7/8/2019
Building	Mission Heritage Plaza	3933 Mission Inn Ave	Riverside	Sun Country Builders	Carol Lang	7/3/2019
Building	Holiday Inn Express (Ridgecrest)	1010 Omega Ave	Ridgecrest	E.H. Butland	 Jeffrey Nowaczyk	7/3/2019
Building	14Th & Commercial	1-14th St	San Diego	Level 10 Construction	Gina Toledo	7/2/2019
Building	Aloft Hotel (Buena Park)	7851 Beach Blvd	Buena Park	Cal-City Construction	Soin Yun	7/1/2019
Building	Laguna Niguel	27930 Cabot Rd	Laguna Niguel	Consoritum West	Fatima Ocampo	7/1/2019
Building	Holiday Inn Express	3361 Hammer Ave	Norco	Jaco	Kevin Heier	7/1/2019
House	3444 Laurelvale Dr	3444 Laurelvale Drive	Studio City	Snow Lion COnstruction	Correy of Snow Lion Construction	6/28/2019
House	3207 Fryman rd	3207 Fryman rd	Studio City	Regal Construction	Sean Aichel	6/28/2019
House	226 Linden drve	226 Linden drve	Beverly Hills	RJS Construction	Sam Saidfar	6/28/2019
Building	Parklands Apartments	Telegraph Rd And Wells Rd	Ventura	PHC   	Patrick Honodel	6/27/2019
Building	1013 Genesee Ave	1013 Genesee Ave	West Hollywood	CCIM	Tony Bagramyan	6/26/2019
Building	1100 N Brand Blvd	1100 N Brand Blvd	Glendale	Planetworks	Michael Majian	6/26/2019
Building	Harbor View Villas	333 N Kalorama St	Ventura	Staples Construction	Eric Prieto	6/26/2019
Building	Los Olivos II (Phase 3)	6100-6486/7100-7479 Miramonte	Irvine	Western National Group	Julie Hung	6/25/2019
Building	La Maison (Serrano)	944 S Serrano Ave	Los Angeles	Pacific Construction	Ken Yoon	6/24/2019
Building	Residence Inn (Lancaster)	Lancaster & Gadsden	Lancaster	STORIE and SEVERSON CONSTRUCTION	Rob Fawcett	6/24/2019
House	3180 Lindo St	3180 Lindo St	Los Angeles	Simon & Simon Construction	Michel Benasra	6/24/2019
House	Alessandro Service Station	2624 E Alessandro Blvd	Riverside	Near-Cal Corp	Jose Murillo	6/21/2019
Building	Birkdale Residential	2434 Birkdale St	Los Angeles	RCI Builders	Nathan Wendt	6/21/2019
House	13910 Peach Groove St	13910 Peach Groove St	Sherman Oaks	Pure Restoration Inc	Cathy	6/21/2019
House	838 Warner Ave	838 Warner Ave	Los Angeles	B.Raeen Construction	Ara Miranda	6/20/2019
Building	1235 5Th. St	1235 5Th. St	Santa Monica	Hy-Max Building	Jennifer Prizer	6/20/2019
Building	3500 Chesapeake Ave	3500 Chesapeake Ave	Los Angeles	Schaffel Development	Sharon Kass	6/20/2019
Building	3524 Chesapeake Ave	3524 Chesapeake Ave	Los Angeles	Schaffel Development	Sharon Kass	6/20/2019
House	5002-5004 Cahuenga Blvd	5002-5004 Cahuenga Blvd	Los Angeles	Moe Building	Mostafa Ghanem	6/20/2019
Building	Boston Lakeview Court	913 Boston Court	Pasadena	MSB Constructors	Vicki Ohanian	6/19/2019
Building	11115 McCormick St	11115 McCormick St	Los Angeles	MGAM	Josh Manevich	6/19/2019
House	2321 Kelton Avenue	2321 Kelton Avenue	Los Angeles	Rio Yasay	Rio Yasay	6/18/2019
House	2271 Duane Street	2271 Duane Street	Los Angeles	DDCM Incorporated	Todd Alden	6/18/2019
Building	1800 Beverly	1800 Beverly Blvd	Los Angeles	CBG Building Company	Jeremy Brenner	6/18/2019
House	1274 Lago Vista	1274 Lago Vista Dr	Beverly Hills	Yishai Kohen	Yishai Kohen	6/18/2019
House	31841 Monarch Crest 	31841 Monarch Crest 	Laguna niguel	StI General & Electric	Steve Turcotte	6/18/2019
Building	Euclid Commerce Center	15881 Euclid Center	Chino	Culp Construction	Matt Wellesley	6/17/2019
House	1616 Rising Glen Road	1616 Rising Glen Road	Los Angeles	All coast Construction	Laura Minor	6/17/2019
Building	Palm Senior Living	4800 Palm Ave	Riverside	Inland Corp	Tom Bilek	6/17/2019
Building	1226 S Bedford St	1226 S Bedford St	Los Angeles	Mar Mar Group	Cesar Svidler	6/17/2019
House	"203,223,237 Cannon Ave"	"203,223,237 Cannon Ave"	San Dimas	Diversified Construction	Denise Wyrick	6/14/2019
Building	4971 Centinela Ave	4971 Centinela Ave	Los Angeles	Project Delivery Group	John Carlo Gallo	6/13/2019
Building	Halcyon House (A)	585 Anton Blvd	Costa Mesa	LMC	Christian Lam	6/13/2019
Building	Halcyon House (B)	565 Anton Blvd	Costa Mesa	LMC	Christian Lam	6/13/2019
House	1 Ironside St	1 Ironside St	Marina Del Rey	Pacific Grand Builders	Steve & James	6/11/2019
Building	6933 Santa Monica	6933 Santa Monica blvd	Los Angeles	Onni Group	Ryan Sangalang	6/11/2019
Building	10986 Telegrapgh Road	10986 Telegrapgh Road	Ventura	PhC Pacific Heritage Communities	Patricia Jane	6/11/2019
House	647 Enchanted Way	647 Enchanted Way	Pacific Palisades	"SOS Enteprises, Inc."	Doug Staples	6/10/2019
House	1014 El Medio Ave	1014 El Medio Ave	Pacific Palisades	RT Abbott Construction	Christopher Bernal	6/10/2019
Building	31st Street	505 W 31st Street	Los Angeles	Westside Contractors	Gabriel Cielak	6/10/2019
Building	947 Wilcox	947 Wilcox	Los Angeles	Wilcox LLC	Allan Martia	6/7/2019
House	1580 Chelsea Rd	1580 Chelsea Rd	San Marino	Frank Pineda Construction	Frank Pineda	6/7/2019
Building	750 Kingsley Dr	750 Kingsley Dr	Los Angeles	Regency Midland Construction	Mike Darvish	6/7/2019
House	318 Medio	318 S Medio Dr	Los Angeles	B.Raeen Construction	Ara Miranda	6/7/2019
Building	495 The Promenade	495 The Promenade N	Long Beach	B.Raeen Construction	Ara Miranda	6/6/2019
House	1226 Keel Drive	1226 Keel Drive	Corona Del Mar	Devco Homes LLC	Jon Deverian	6/6/2019
House	3424 Troy Drive 	3424 Troy Drive 	Los Angeles	Williams	William	6/6/2019
House	3042 Penney Drive	3042 Penney Drive	Simi Valley	Mc Master & Hill Construction	Jon Hill	6/5/2019
Building	Home2 - Turlock	Lander Crossing	Turlock	Construction Developers	Chad Story	6/5/2019
Building	Arminta Square (New Folder)	11050 W Arminta St	Sun Valley	Westport	Kristen Patterson	6/4/2019
Building	Reseda Clark	18525 Clark St	Tarzana	Westport	Kristen Patterson	6/4/2019
Building	1415 Reeves	1415 Reeves St	Los Angeles	Westside Contractors	Andy Berthold	6/4/2019
House	249 Homewood road 	249 Homewood road 	Los Angeles	Sbc global	Oscar Morris	6/3/2019
Building	El Prado Hotel	1601 State St	Santa Barbara	Vernon Construction	Michael Banks	6/3/2019
Building	Skyway Airport Office building 	3200 Skyway Drive	Santa Maria	Palacios Architects	Anson Gaona 	6/3/2019
House	1210 Laurel Way	1210 Laurel Way	Beverly Hills	Craig R Williams Construction	Ryan Braun	6/3/2019
House	545 8th Street 	545 8th Street 	Hermosa Beach	National Council of Architectural Registration Boards	Gerardo Somers NCARB	6/3/2019
House	1574 N Roxbury Drive	1574 N Roxbury Drive	Beverly Hills	Avi Ashkenazi	Avi Ashkenazi	5/31/2019
Building	6th St	4000 W 6th St	Los Angeles	Cal-City Construction	Soin Yun	5/31/2019
Building	Romeria Pointe Apartments	Romeria And Gibraltar	Carlsbad	Watkins Landmark Construction	Chris Mireles	5/31/2019
Building	Sierra Creek Apartments	Rosamond	Rosamond	Westport	Kristen Patterson	5/30/2019
House	2337 Ridgeview Ave	2337 Ridgeview Ave	Los Angeles	TNT Simmonds	Trevor Rick	5/29/2019
Building	Virginia Apartments	5533 Virginia Ave	Los Angeles	Lolark Contractors	Josua Dauzat	5/29/2019
Building	22040 E Valley	22040 E Valley Blvd	Walnut	L & L Construction	Matthew Rzonca	5/29/2019
Building	Canter Uptown Lofts	3740 5Th Ave	San Diego	Stillwater Construction	Rene Diaz	5/28/2019
House	1229 S McBride Ave	1229 S McBride Ave	Los Angeles	Harry H. Joh Construction	Steve Kwak	5/28/2019
Building	Residence Inn Marriott	121 Wilmar Place	Paso Robles	Construction Developers	Chad Story	5/28/2019
Building	Palm Ave	236 - 238 Palm Ave	Imperial Beach	Watkins Landmark Construction	Mark Faessel	5/28/2019
House	624 Harbor Island Drive	624 Harbor Island Drive	Newport Beach	Devco Homes LLC	Jon Deverian	5/24/2019
House	224 Pearl Ave	224 Pearl Ave	Newport Beach	Devco Homes LLC	Jon Deverian	5/24/2019
Building	5525 Case Ave	5525 Case Ave	North Hollywood	Ari Rashti	Ari Rashti	5/24/2019
Building	14540 Erwin St	14540 Erwin St	Van Nuys	Ari Rashti	Ari Rashti	5/24/2019
Building	414 Chapala St	414 Chapala St	Santa Barbara	Vernon Construction	Michael Banks	5/24/2019
Building	1030 Celis St Phase 2	1030 Celis St 	San Fernando	Pueblo Contracting	Servyn .	5/24/2019
Building	Alexan Noho West	11950 W Erwin St / 6151 Radford Ave	North Hollywood	Trammell Crow Residential 	Jason Adams	5/23/2019
Building	Hotel Westwood	10740 Santa Monica Blvd	Los Angeles	Westport	Kristen Patterson	5/22/2019
House	2307 Stratford Circle	2307 Stratford Circle	Los Angeles	Primary Homes	Vinnie Sasson	5/22/2019
Building	Villas At Park La Brea	5555 W 6th St	Los Angeles	Milender White	Aaron Castillo	5/22/2019
House	325 N Mt Holyoak Ave	325 N Mt Holyoak Ave	Pacific Palisades	Building Soulution & Design Inc	David Rokach	5/22/2019
House	333 N Mt Holyoak Ave	333 N Mt Holyoak Ave	Pacific Palisades	Building Soulution & Design Inc	David Rokach	5/22/2019
Building	Elmwood Row	4807 Elmwood Ave	Los Angeles	Ceilbright Services	Mimi Guevarra	5/22/2019
Building	Hampton Inn & Homewood Suites	28650 Newhall Ranch Rd	Santa Clarita	E.H. Butland	 David Reynolds	5/22/2019
Building	707 Berendo St	707 Berendo St	Los Angeles	Baypost Builders	Luis Galvan	5/17/2019
Building	El Cap Milpas Mixed Use	711 N Milpas & Ortega St	Santa Barbara	Frank Schipper Construction	phil orr	5/17/2019
House	990 N Hill Street	990 N Hill Street	Los Angeles	COLLABORATIVE CONSTRUCTION	PETER TERPINSKI 	5/17/2019
Building	Holiday Inn Express	74777 Technology Dr & Gerald Ford	Palm Desert	Primus Contracting Group	Fred East	5/17/2019
Building	855 W Colgate Ave	855 W Colgate Ave.	Los Angeles	Hy-Max Building  corp	Jennnifer	5/17/2019
Building	800 Santa Barbara	800 Santa Barbara Street	Santa Barbara	John Donaldson Construction	Dave McWhirter	5/16/2019
Building	5570 Melrose Ave	747 Beachwood/5570 Melrose Ave	Los Angeles	Fassberg Construction	Sean Pedersen	5/16/2019
Building	Salvation Army 22	1100 Hamal	Irvine	Portrait Construction	Bob Pitsenberger	5/16/2019
Building	10635 Woodman Ave	10635 Woodman Ave	Mission hills	Southern California	Alex Khader	5/16/2019
Building	Marriott Residence Inn	18839 Gale Ave	Rowland Heights	KCS West	Aham Nwede	5/16/2019
Building	510 Oxford Ave	510 Oxford Ave	Los Angeles	Inland Development	Sean Potts	5/16/2019
Building	Avenir Memory Care	7420 La Tijera Blvd	Los Angeles	Avenir 	John Dyess	5/16/2019
Building	915 Anapamu	915 E. Anapamu	Santa Barbara	Vernon Construction	Michael Banks	5/15/2019
Building	6733 Sepulveda	6733 Sepulveda Blvd	Los Angeles	KCS West	Aham Nwede	5/14/2019
Building	Legado Redondo	1700 S Pacific Coast Highway	Redondo Beach	Build Group	Steve Tenold	5/14/2019
Building	5628 Sepulveda Blvd	5628 Sepulveda Blvd	Sherman Oaks	George C. Hopkins	Catherine Austin 	5/14/2019
Building	18040 Sherman Way	18040 Sherman Way	Reseda 	Madison Medical Construction	Eleanor DeGuzman	5/13/2019
Building	10947 Hartsook St	10947 Hartsook St	Los Angeles	SMA Builders	Andrew Sedaghatpour	5/13/2019
Building	Breeze Townhomes	Nevada St & Oceanside Blvd	Oceanside	Design And Construction	Brian Leahey	5/10/2019
Building	Jordan Downs Area H	2062 99th Place	Los Angeles	Westport	Kristen Patterson	5/10/2019
Building	433 Vermont	433 S Vermont Ave	Los Angeles	Westport	Kristen Patterson	5/10/2019
Building	1947 Glencoe Way	1947 Glencoe Way	Los Angeles	Goed Construction	Arthur .	5/9/2019
House	8634 Franklin	8634 Franklin	Los Angeles	Legacy Construction	Richard Jacoby	5/9/2019
House	854 Napoli Dr	854 Napoli Dr	Pacific Palisades	Kyle Nasman	Kyle Nasman	5/9/2019
House	830 Sarbonne Rd	830 Sarbonne Rd	Los Angeles	Hampel Construction	Liane Davis	5/9/2019
House	702 East Bay Avenue	702 East Bay Avenue	Newport Beach	TouchStone Construction	Adam Feliz	5/8/2019
House	100 E Chapman Ave	100 E Chapman Ave	Placentia	TouchStone Construction	Adam Feliz	5/8/2019
Building	520 Central (521 Orange)	521 N Orange Ave	Glendale	Adept Building & Construction	Alex Torosian	5/8/2019
Building	520 Central (520 Central)	520 N Central Ave	Glendale	Adept Building & Construction	Alex Torosian	5/8/2019
Building	101 West Valley Blvd	101 West Valley Blvd	San Gabriel	Landwin Corp	John Jeon	5/8/2019
Building	731 Fairfax ave	731 Fairfax ave	Los Angeles	731 Fairfax Development 	David Safai	5/7/2019
House	724 Oceanpark Blvd	724 Oceanpark Blvd	Sta Monica	Taylor Architecture	Bob Taylor	5/7/2019
House	16621 Linda Terrace	16621 Linda Terrace	Pacific Palisades	Simon & Simon Construction	Michel Benasra	5/6/2019
House	1124 N Las Pulgas	1124 N Las Pulgas Rd	Los Angeles	Accel Builders	Carlen Lyle	5/6/2019
Building	4400 Palm (Phase I)	4400 Palm Ave	La Mesa	La Mesa Quarry 2	Steve Penner	5/6/2019
House	8542 Hollywood Blvd	8542 Hollywood Blvd	Los Angeles	Housed Inc	Riko Camacho	5/6/2019
Building	19235 Shoreline Ln	19235 Shoreline Ln	Huntington Beach	Marca Construction Inc	Teodoro Sanchez	5/6/2019
Building	Mountain View Village	11316 Weedpatch St	Lamont	Wallace & Smith Contractors	Justin Huang	5/6/2019
Building	5820-26 La Mirada	5820-26 La Mirada Ave	Los Angeles	J Rezai Construction	Joe Rezai	5/3/2019
Building	10718 W Acama St	10718 W Acama St	North Hollywood	J Rezai Construction	Joe Rezai	5/3/2019
Building	Hampton Inn	42-261 Spectrum St	Indio	Cantilever Construction	Hitesh Patel	5/2/2019
House	333 Crown Drive	333 Crwon Drive 	Los Angeles	John Andrews Architects	Luke Thompson	5/2/2019
Building	Chadwick School	26800 S. Academy Drive 	Palos Verdes Estates	Concrete Asphalt Especialist	Rolly Balolong	5/2/2019
House	11050 Alto Drive	11050 Alto Drive	Oak view	Kling Family Construction	Jason	5/2/2019
Building	Lief Organics	28903 N Ave Paine	Valencia	Menco	Ian Fitzsimmons	5/1/2019
Building	Santee Townhomes	Carlton Oaks 	Santee	La Mesa Quarry 2	Steve Penner	5/1/2019
House	1973 Van Ness 	1973 Van Ness	Los Angeles	Resonne Building and Design	Santos Resendiz	4/30/2019
Building	Jefferson & Ivy	Ivy St	Murrieta	Westport	Kristen Patterson	4/30/2019
Building	7401 Lankershim	7401 Lankershim Blvd	North Hollywood	Jasco Enterprise	David Asiss	4/30/2019
Building	The Reserve Apartments	11200 Harris Rd	Bakersfield	S.C. Anderson	Sandra Munoz	4/30/2019
House	2322 Orange Cove	2322 Orange Cove avenue	La Crescenta	Goed Construction	Arthur .	4/25/2019
Building	Holiday Inn Express-Lost Hills	Lost Hills	Lost Hills	Klassen Corporation	Jason Reneau	4/25/2019
Building	Towneplace Suites Marriot	701 Town Center Dr	Oxnard	Aldana & Sons Construction	Sergio Aldana	4/25/2019
Building	747 Lafayette park place	747 Lafayette park place	Los Angeles	Western Horizon	Jim Keltner	4/25/2019
Building	Elizabeth Apartments	4302 And 4312 Elizabeth	Cudahy	Harpco Construction	Sean Harper	4/25/2019
Building	Holiday Inn	Hwy 86 & Neckel Rd	City Of Imperial	DLD Construction	Jason Christopher	4/25/2019
Building	1105 Long Beach Blvd	1105 Long Beach Blvd	Long Beach	McShane Construction	Steven Finkelberg	4/24/2019
Building	4322 N Gentry Ave	4322 N Gentry Ave	Los Angeles	Steve Bayat	Steve Bayat	4/24/2019
Building	13445 12th St	13445 12th St	Chino	Able design & Construction	Tim Law	4/23/2019
Building	West Pomona Transit District	123 West Pamona Ave	Monrovia	Milender White	Larry Erps	4/23/2019
	9445 Eden Drive	9445 Eden Drive	Beverly Hills	COLLABORATIVE CONSTRUCTION	PETER TERPINSKI 	4/23/2019
Building	Villa Hermosa III	83801-83825 Dr Carreon Blvd	Indio	Sun Country Builders	Carol Lang	4/22/2019
House	516 Erskine	516 Erskine Dr	Pacific Palisades	Devonshire Homes	Rob Levin	4/22/2019
Building	Apartments At 6195	6195 Montezuma Rd	San Diego	The edward Group	Sandi Rouse	4/22/2019
Building	299 Thousand Oaks Blvd	299 Thousand Oaks Blvd	Thousand Oaks	RCI Builders	George Corry	4/22/2019
House	A new Residence	11721 Chaparal Street	Los Angeles	Star Construction Experts	Christopher Lemus	4/19/2019
House	1030 Somera	1030 Somera Rd	Los Angeles	BB West Coast Development	Lola Griffin	4/19/2019
Building	Carroll Canyon - Total	9850 Carroll Canyon Rd	San Diego	Wermers	Richard Wood	4/18/2019
Building	Cahuenga Blvd Apartments	4400 N Cahuenga Blvd	Toluca Lake	The 4400	Fred Mazewski 	4/18/2019
Building	Delano Hotel  	Indian Wells	Indian Wells	Watkins Landmark Construction	Mark Faessel	4/18/2019
House	1164 Napoli	1164 Napoli Dr	Pacific Palisades	Craig R Williams Construction	John Minniss	4/18/2019
Building	Tova Hotel	1875 N Palm Canyon Dr	Palm Springs	Primus Contracting Group	Fred East	4/17/2019
Building	Carroll Canyon (Building 4)	9850 Carroll Canyon Rd	San Diego	Wermers	Richard Wood	4/17/2019
Building	Holiday Inn 	Monroe & Las Alamos Murrieta	Murrieta	Primus Contracting Group	Billy	4/17/2019
House	3029 Castle heights	3029 Castle Heights Ave	Los Angeles	A1 Construction	Roni .	4/16/2019
Building	Carroll Canyon (building 1)	9850 Carroll Canyon Rd	San Diego	Wermers	Richard Wood	4/16/2019
Building	Carroll Canyon (Building 2)	9850 Carroll Canyon Rd	San Diego	Wermers	Richard Wood	4/16/2019
Building	Carroll Canyon (Building 3)	9850 Carroll Canyon Rd	San Diego	Wermers	Richard Wood	4/16/2019
Building	Park West at Stockdale River Ranch	250 S Heath Rd	Bakersfield	Wallace & Smith Contractors	Kelley Eden	4/15/2019
House	1146 Tower Rd	1146 Tower Rd	Beverly Hills	Kambur Construction Group	Yuko Takenaka	4/15/2019
Building	15230 Parthenia St	15230 Parthenia St	North Hills	GNL Development	Gary Kleinman	4/15/2019
Building	25915 Barton Rd	25915 Barton Rd	Loma Linda	E.H. Butland	 Jeffrey Nowaczyk	4/12/2019
House	2547 Walnut Ave	2547 Walnut Ave	Venice	Vertex Design Studio	Pooya Goudarzi	4/12/2019
Building	Home2 Suites Hotel	4556 Temescal Canyon Rd	Corona 	Rexco Development	Kathy Acosta	4/12/2019
House	15 Gale Place	15 Gale Place	Santa Monica	John Andrews Architects	john	4/12/2019
Building	Whittier Downey Northwest	4164-419 Whittier Blvd	Los Angeles	Westport	Kristen Patterson	4/11/2019
Building	7043 Jordan Ave	7043 Jordan Ave	Canoga Park	ASA CRETE	Mehrdad Mehran	4/11/2019
Building	744 S Mariposa Ave	744 S Mariposa Ave	Los Angeles	RAAM Construction	Nick Wilson	4/11/2019
House	Newton Residence	1555 N Amalfi Dr	Pacific Palisades	Legacy Construction	Rich Jacoby	4/11/2019
Building	Missouri Place	11998 W Missouri Ave	Los Angeles	KPRS	Michael Fabian	4/10/2019
Building	Corsica Apartments Building D	9128 Burke St	Pico Rivera	John Donaldson Construction	Dave McWhirter	4/9/2019
Building	Holiday Inn Express & Suites	5089 E Mckinley	Fresno	Klassen Corporation	Ross Hough	4/8/2019
Building	Courtyard By Marriott	1450 Shaw Ave	Clovis	Klassen Corporation	Ross Hough	4/8/2019
Building	WoodSpring Suites	Spectrum Park Way	Bakersfield	Klassen Corporation	Ross Hough	4/8/2019
Building	7000 Vassar Ave	7000 Vassar Ave	Canoga Park	Ari Perez construction	Ari Perez	4/8/2019
Building	University Campus Hotel (phase II)	1277 University Ave	Riverside	Build Group	Mike Bradwell	4/8/2019
House	9230 Nightingale	9230 Nightingale Dr	Los Angeles	ARTES Design Build	Puria R	4/8/2019
Building	FairField Inn And Suites 	4345 Mission Bay Dr	San Diego	Tofel Dent Construction	Lynn Catalfamo	4/8/2019
House	503 poinsetia	503 Poinsettia	Los Angeles	Giant Construction	Leon Perez	4/5/2019
House	12031 Moundview pl	12031 Moundview place	Studio City	Giant Construction	Leon Perez	4/5/2019
House	11564 Dona Pepita	11564 Dona Pepita	Studio City	Ten Eyck & Keegan	Kevin Keegan	4/5/2019
Building	Best Western Inn & Suites	"9800 & 9804 Compagnoni St, Hwy 119"	Bakersfield	Klassen Corporation	Ross Hough	4/5/2019
Building	Glenoaks Apartments	8405 N Glenoaks Blvd	Sun Valley	John Donaldson Construction	Dave McWhirter	4/3/2019
Building	Inglewood Market Gateway	213 E Regent St 	Inglewood	Milender White	Larry Erps	4/2/2019
House	327 Marguerita	327 Marguerita	Santa Monica	Kia & Kia	Ali Kia	4/1/2019
House	Residence and Grace Lamay Trail	2284 Grace Lamay Trail	El Cajon	All Trade	Terry Dickson	4/1/2019
Building	Red Rock Townhomes-Phase 1	850-900 S Downs Street	Ridgecrest	Klassen Corporation	Jason Reneau	4/1/2019
House	7153 Woodrow Wilson	7153 Woodrow Wilson	Los Angeles	7153 Woodrow Wilson	Micah Belliston	4/1/2019
House	7157 Woodrow Wilson	7157 Woodrow Wilson	Los Angeles	7157 Woodrow Wilson	Micah Belliston	4/1/2019
Building	The Kimball	1126 E 8th St	National City	The Angelucci Group	Jesse Galanis	4/1/2019
House	4801 La Villa Marina	4801 La Villa Marina	Marina Del Rey	Greenbuild Construction Services	Doron Ben	3/29/2019
House	1900 Penmar Avenue	1900 Penmar Avenue	Venice	Jensen Construction		5/13/2019
Building	Towne Place Suites	Magellan Dr	Tehachapi	Klassen Corporation	Jason Reneau	3/29/2019
House	4212 Lemp Ave	4212 Lemp Ave	Studio City	LB Contractors	Louis Bourassa	3/29/2019
Building	602 S Westlake Ave	602 S Westlake Ave	Los Angeles	W.L. Butler Construction	Marco Marmolejo	3/28/2019
Building	All Suites Hotel	26501 McBean Parkway	Santa Clarita	Aster Construction	Shiva Prasad	3/27/2019
House	8108 W 4th St	8108 W 4th St	Los Angeles	FEI Enterprises	Gabriel Fedida	3/27/2019
Building	3268 Rosemead Blvd	3268 Rosemead Blvd	El Monte	Inmac	Sean Lee	3/26/2019
Building	809 N Bunker Hill Ave	809 N Bunker Hill Ave	Los Angeles	Ramin Construction	Ramin Youssefzedeh	3/26/2019
Building	1515 Palmetto Ave	1515 Palmetto Ave	Ontario	Uniglory	George Zhang	3/26/2019
Building	1127 S Spaulding Ave	1127 S Spaulding Ave	Los Angeles	Dan	Dan Nafisi	3/25/2019
Building	Citrus III	11101 Carlos St	Ventura	Westport	Kristen Patterson	3/25/2019
Building	178 S Euclid Ave	178 S Euclid Ave	Pasadena	MSB Constructors	Vicki Ohanian	3/25/2019
Building	518 E Windsor Road	518 E Windsor Road	Glendale	MSB Constructors	Vicki Ohanian	3/25/2019
Building	10842 Victory	10842 Victory Blvd	North Hollywood	Baypost Builders	t	3/25/2019
Building	1838 S Brand Blvd	1838 S Brand Blvd	Glendale	MSB Constructors	Vicki Ohanian	3/22/2019
Building	Citrus II	11156 - 11172 Citrus Dr	Ventura	Westport	Kristen Patterson	3/22/2019
Building	Springhill Suites	380 S Placentia Ave	Placentia	Tofel Dent Construction	Lynn Catalfamo	3/21/2019
Building	5th Street Apartments	425 East 5th Street	Long Beach	Arris Builders	Elisa Kuhn	3/21/2019
Building	18605 Gale	18605 Gale	City Of Industry	Uniglory	George .	3/21/2019
Building	Fair Oaks Revival	842 / 840/ 834 N Fair Oaks Ave	Pasadena	MSB Constructors	Vicki Ohanian	3/20/2019
Building	Miramonte Apartments	7321 Miramonte Blvd	Los Angeles	Westport	Kristen Patterson	3/20/2019
House	1023 Chevy Chase	1023 Chevy Chase	Beverly Hills	Structure Home	Jeff Honigsberg	3/19/2019
Building	1518 Spring St	"Paso Robles, CA 93446"	Paso Robles	ProBilt	Reggie Brard	3/19/2019
Building	Summit View	11681 Foothill Blvd	Sylmar	Alpha Construction	Ed Goldman	3/18/2019
Building	MAG Seniors	Magnet & Hamel Irvine CA 92618	Irvine	Portrait Construction	Christian Vidrio	3/18/2019
Building	1545 Alexis Pl	1545 Alexis Pl	Beverly Hills	Shawmut Design and Construction	Mohammad Sabha	3/15/2019
Building	1751 Malcolm Ave	1751 S Malcolm Ave	Los Angeles	Sinanian	Florenz Marasigan	3/15/2019
Building	Fulcher Apartment	5536 Fulcher Ave	Los Angeles	Sinanian	Yang Zhu	3/14/2019
Building	Glendale Holiday Inn	1001 E Colorado St	Glendale	Sinanian	Florenz Marasigan	3/14/2019
Building	Geneva At Pacific and Frances	3827 Frances Ave	Los Angeles	Pacific Empire Builders	Matthew Hernandez	3/13/2019
House	6708 Wildlife Rd	6708 Wildlife Rd	Malibu	GHBW	RJ Korah	3/12/2019
Building	Regency Palms - Oxnard	1020 Bismark Way	Oxnard	Urban Community Builders	Jaime Rangel	3/12/2019
House	1148 San Fernando Rd	1148 San Fernando Rd	San Fernando	Pueblo Contracting	Servyn .	3/12/2019
House	19333 Rosita St	19333 Rosita St	Tarzana	Troy Builder	Avi Chakon	3/12/2019
Building	Nest On 3rd	3115 W 3rd St	Los Angeles	New Creation Builders	Rod Cayabyab	3/12/2019
House	6648 Langdon Ave	6648 Langdon Ave	Van Nuys	Paul Carey	Paul Carey	3/11/2019
Building	3503 - 3517 Indiana St	3503 – 3517 Indiana St	Los Angeles	Creative Builds	John Gonzalez	3/11/2019
Building	Temecula Village Apartments	30063 - 30135 Rancho CA Road	Temecula	Pacific West	Diane Dean	3/11/2019
House	4729 Noeline Ave	4729 Noeline Ave	Encino	Kohen Investments	David .	3/8/2019
House	340 N Poinsettia Pl	340 N Poinsettia Pl	Los Angeles	David Elliot Builders	David Elliot	3/8/2019
Building	Revel Palm Desert	74300 Country Club	Palm Desert	Katerra	George Reinmann	3/8/2019
House	9509 Heather Rd	9509 Heather Rd	Los Angeles	Charles Infante	Charles Infante	3/8/2019
House	100 N Gunston Drive	100 N Gunston Drive	Los Angeles	Bonomo Development	Nicholas Bonomo	3/7/2019
Building	11460 Gateway Apartments	11460 - 11484 Gateway Blvd	Los Angeles	James Kennedy Construction	Steven Rea	3/7/2019
House	25085 Ashley Ridge	25085 Ashley Ridge	Hidden Hills	Metro Development	Victor Brown	3/7/2019
Building	846 S Mariposa Ave	846 S Mariposa Ave	Los Angeles	Cal-City Construction	Soin Yun	3/7/2019
Building	18 Unit Condominium	1525 S Euclid St	Anaheim	Pacific Coast Asset Management	Mike Bastani	3/6/2019
Building	Motor Apartments	10325 W. Tabor St	Los Angeles	Hy-Max Building	Jennifer Prizer	3/6/2019
House	11 La Sierra Dr	11 La Sierra Dr	Pomona	Kru	Kru .	3/6/2019
Building	Emporia Place	Emporia Place	Ontario	Portrait Construction	Christian Vidrio	3/6/2019
Building	Olivewood Village	54 N Oakland	Pasadena	Westport	Kristen Patterson	3/5/2019
Building	Jefferson Stadium Park	1910 S Union St	Anaheim	JPI	Mark Ortiz	3/5/2019
Building	3550 Overland	3550 Overland Ave	Los Angeles	Focus Builders	Jonathan Garrett	3/5/2019
Building	Olive Condos	3805 West Olive Ave	Burbank	Westport	Kristen Patterson	3/4/2019
Building	3647 S. Hughes Ave	3647 S. Hughes Ave	Los Angeles	Allied Design and Remodeling	Isaac Abrams	3/4/2019
Building	Mansfield Hotel	2545 S. Mansfield Ave	Los Angeles	CIM	Jeffrey Aguilar	3/4/2019
Building	5103 W. Adams Blvd	5103 W Adams Blvd	Los Angeles	CIM	Jeffrey Aguilar	3/4/2019
Building	1006 Hancock Ave	1006 Hancock Ave	West Hollywood	Century West Associates	Jim Kermani	3/1/2019
Building	1621 North Mccadden	1621 North Mccadden	Los Angeles	STS Construction	Kayte Edson	2/28/2019
Building	1901 Blake Ave	1901 Blake Ave	Los Angeles	Uncommon Developers	Opher Benrimon	2/28/2019
Building	St. Marys Housing	"17361,17431,17455 Rosco Blvd"	Northhridge	Aster Construction	Eddie Daher	2/28/2019
Building	Regency Palms Palmdale	38722 Orchid View Place	Palmdale	Urban Community Builders	Jaime Rangel	2/27/2019
Building	Fedora West	"826,834,840 S. Mariposa"	Los Angeles	Frymer Construction	Larry Rhodes	2/27/2019
House	2185 Outpost Dr	2185 Outpost Dr	Los Angeles	SoCal Hydronics	Jacob Gooze	2/26/2019
Building	1180 La Brea	1180 La Brea	Los Angeles	Hy-Max Building	Jennifer Prizer	2/26/2019
Building	Home2 Bakersfield	8227 Brimhall Rd	Bakersfield	Tharaldson Hospitality	Joey Blagg	2/26/2019
Building	1301 W Sunset Echo Park	1301 W Sunset Echo Park	Los Angeles	Hopkins Construction	Catherine Austin	2/26/2019
House	535 N. Bundy Drive	535 N. Bundy Drive	Los Angeles	Eco Green Construction	Navid Ben	2/26/2019
Building	2451 Colorado Blvd	2451 Colorado Blvd	Los Angeles	DDCM Incorporated	Todd Alden	2/22/2019
Building	11600 Dunstan Way	11600 Dunstan Way	Los Angeles	James Kennedy Construction	Steven Rea	2/22/2019
House	436 Levering Ave	436 Levering Ave	Los Angeles	Ali	Ali .	2/22/2019
Building	The Spark	1900 Long Beach Boulevard	Long Beach	Alpha Construction	Ed Goldman	2/22/2019
Building	El Verano  Apartments	1248 E. Lincoln Ave	Anaheim	Westport	Kristen Patterson	2/21/2019
House	611 N Geneva St	611 N Geneva St	Glendale	Stronghouse	Paul Strader	2/21/2019
Building	The Bora 3170	3170 Olympic Blvd	Los Angeles	Angeles Contractor	Amir Markazi	2/21/2019
Building	11938 Dorothy St	11938 Dorothy St	Los Angeles	Kooklan Builders	Peymon Kooklan	2/21/2019
Building	Villa De Vida	12341 Oak Knoll Road	Poway	Sun Country Builders	Carol Lang	2/21/2019
House	2727 Roscomare Rd	2727 Roscomare Rd	Los Angeles	Old World Construction	Mark .	2/20/2019
Building	8549 Graves Ave	8549 Graves Ave	Santee	Development Contractors	Will McNulty	2/18/2019
Building	8775 Magnolia Ave	8775 Magnolia Ave	Riverside	Tilden-Coil Constructors	CJ Viola	2/18/2019
Building	2600 W San Marino St	2600 W San Marino St	Los Angeles	Baypost Builders	Ben Bayan	2/15/2019
Building	1524 Cassil	1522-1538 N.Cassil	Los Angeles	Essey Construction	Richard Tyndall	2/15/2019
House	120 N Glenroy	120 N Glenroy	Los Angeles	120 N Glenroy LLC	David Wiseman	2/15/2019
House	90 Fremont Pl	90 Fremont Pl	Los Angeles	Karma	Sharon Malka	2/15/2019
House	2050 Rambla Pacifico	2050 Rambla Pacifico	Malibu	2050 Rambla Pacifico LLC	Wolfgang Aichholz	2/14/2019
House	2282 Mandeville Canyon Rd	2282 Mandeville Canyon Rd	Los Angeles	Minardo's Group	Rick Tharp	2/14/2019
	Mission Vantage	902 E Mission Rd	San Gabriel	Via Home	Cindy Shao	2/13/2019
Building	8449 Garvey Ave	8449 Garvey Ave	Rosemead	Cal-City Construction	Amy Lee	2/13/2019
Building	Cambria Hotel	26300 Rondell St	Calabasas CA	KPRS	Yun Wang	2/13/2019
House	65 Malibu Colony Rd	65 Malibu Colony Rd	Malibu	LB Contractors	Tom .	2/13/2019
Building	11436 W Hatteras	11436 W Hatteras	Los Angeles	Build 4 U	Cherene Toscano	2/13/2019
House	Kohn Fordyce Residence	375 Fordyce Road	Los Angeles	Stephen Bloom Construction	David Hardie	2/12/2019
Building	Rayen 15528-15532	Rayen 15528-15532 St	Los Angeles	Legacy Construction	Richard Jacoby	2/12/2019
Building	Anaheim Townhouses	2726 W.Lincoln Ave	Los Angeles	Sinanian	Yang Zhu	2/12/2019
Building	Arminta Square Apartments	11050 west Arminta St	Sun Valley	KPRS	Michael Fabian	2/12/2019
Building	545 & 547 N Sweetzer Ave	545 & 547 N Sweetzer Ave	West Hollywood	Design Built	Avry Mizrahi	2/12/2019
Building	4749 Elmwood Ave	4749 Elmwood Ave	Los Angeles	Wiseman Construction	Vee Sinum	2/11/2019
Building	Emerald Apartments	Emerald 215 W. 14th ST	Los Angeles	T.B. Penick & Sons	Carlie Harries	2/11/2019
Building	2115 18th Bakersfield	2115 18th Street Bakersfield	.	Struct-Tech Builders	Art Gomez	2/11/2019
House	500 Iowa St	500 Iowa St	Redlands	Procraft Construction	Tim .	2/11/2019
Building	2957-2963 Allesandro St	2957-2963 Allesandro St	Los Angeles	Jb Contractors	Mike Moder	2/11/2019
Building	2923-2927 Allesandro (2)	2923-2927 Allesandro	Los Angeles	Jb Contractors	Mike Moder	2/11/2019
House	1289 Beverly Green Dr	1289 Beverly Green Dr	Los Angeles	William Horgan Construction	Bill Horgan	2/11/2019
Building	2910 Allesandro (4)	2910 N. Allesandro St	Los Angeles	Jb Contractors	Mike Moder	2/11/2019
Building	2938 N. Allesandro (3)	2938 N. Allesandro St	Los Angeles	Jb Contractors	Mike Moder	2/11/2019
Building	30Th & C St	30Th & C St	San Diego	Armstrong Builders	Tom Armstrong	2/11/2019
House	12980 Blairwood Dr	12980 Blairwood Dr	Studio City	Brockert Construction	Greg Brockert	2/11/2019
Building	1225 Wellesley Ave	1225 Wellesley Ave	Los Angeles	Wiseman Construction	Vee Sinum	2/8/2019
Building	24930 Ave Standford	24930 Ave Standford	Santa Clarita	Karnak Developments	Mamdo Mina	2/8/2019
Building	900 Ardmore Ave	900 Ardmore Ave	Los Angeles	T.B. Penick & Sons	Carlie Harries	2/8/2019
Building	706 N Alverado	706 N Alverado	Los Angeles	Schaffel Development	Sharon Kass	2/8/2019
Building	11628 La Mirada	11628 La Mirada	La Mirada	R&R	Antonio Parra	2/8/2019
Building	MGA 24 Campus - Bldg D	20060 Praire St	Los Angeles	Uncommon Developers	Mila Amparo	2/6/2019
Building	Alta Upland	1160 E. 19Th St	Upland	Wood Partners	Mark Roberts	2/6/2019
Building	3400 Sunset	3400 Sunset Blvd	Los Angeles	TNT Simmonds	Trevor Rick	2/5/2019
House	11631 Poema Pl	11631 Poema Pl	Chatsworth	Michael Hashim	Michael Hashim	2/1/2019
Building	7130 Sunset Blvd	7130 Sunset Blvd	Los Angeles	Wiseman Construction	Vee Sinum	2/1/2019
House	1543 Calle Patricia	1543 Calle Patricia	Pacific Palisades	Alex Magur	Alex Magur	2/1/2019
Building	2966 Kelton Ave	2966 Kelton Ave	Los Angeles	Legacy Construction	Richard Jacoby	2/1/2019
Building	1819 9th St Apartments	1819 9th St Apartments	Santa Monica	Level 3 Construction	Jason Kenney	2/1/2019
Building	106 S Kings Road	106 S Kings Road	Los Angeles	Wiseman Construction	Vee Sinum	1/31/2019
House	8 Lagunita Dr	8 Lagunita Dr	Laguna Beach	Chris Campbell	Chris Campbell	1/30/2019
House	Anaheim	Anaheim	 	Cabinets OC	Jeff Ong	1/30/2019
Building	True Jesus Church in Lakewood	21225 Bloomfield Ave	Lakewood	TA Construction	Jay Torgelson	1/30/2019
Building	5501 Laurel Canyon Blvd	5501 Laurel Canyon Blvd	North Hollywood	Pacific West Builders	Irene Trujillo	1/29/2019
Building	Ramp Art Mint	"8616 La Tijera Blvd., Suite 212"	Los Angeles	Dreyfuss Construction	Shohreh Nikravesh	1/28/2019
Building	1439 Armacost Ave	1439 Armacost Ave	Los Angeles	Wiseman Construction	Vee Sinum	1/28/2019
Building	11401 Santa Monica	11401 Santa Monica	Los Angeles	Wiseman Construction	Vee Sinum	1/28/2019
Building	Kiddie Academy	7220 Victoria Park Lane	Rancho Cucamonga	Alegis construction	Lance Leonard	1/28/2019
House	1355 Berea Place	1355 Berea Place	Los Angeles	Primary Homes	Vinnie Sasson	1/25/2019
Building	Perris Apartments	19700 Fairchild Road	Irvine	A & R Corporation	Dean Sanchez	1/25/2019
House	926 Somera Road	926 Somera Road	Los Angeles	DS Homebuilder	Darioush Siamak	1/25/2019
Building	Marriott - Residence Inn	788 South Seaward Avenue	Ventura	Pacifica Companies	Tom Bell	1/25/2019
Building	5600 Adams Blvd	5600 West Adams Blvd	Los Angeles	CIM	Catherine Randall	1/25/2019
Building	Grapevine Villa Apartments	Woollomes Ave	Delano	Contractors USA Group	Ed Felicidario	1/24/2019
Building	Garfield Apartments	10920 Garfield Ave	South Gate	JPI	Lawrence Alkema	1/23/2019
Building	Paseo Mews	875 Garnet Ave	San Diego	Murfey Company	Scott Murfey	1/23/2019
House	16305 Meadow Ridge	16305 Meadow Ridge rd	Encino	ASI Contractors	Alan Asi	1/23/2019
Building	126 N Kings Rd	126 N Kings Rd	Los Angeles	Wiseman Construction	Don Tolentino	1/22/2019
Building	1450 Barrington Ave	1450 Barrington Ave	Los Angeles	Wiseman Construction	Don Tolentino	1/22/2019
Building	11813 Dorothy St	11813 Dorothy St	Los Angeles	Wiseman Construction	Don Tolentino	1/22/2019
Building	Mt Acadia Residential	3560 Mt. Acadia Blvd	San Diego	T.B. Penick & Sons	Larry Ingram	1/22/2019
Building	3815 West Avenue 43	3815 West Avenue 43	Eagle Rock	Schon Tepler Construction	Cindy Erdene	1/22/2019
Building	4575 Santa Monica Blvd	4575 Santa Monica Blvd	Los Angeles	TNT Simmonds	Trevor Rick	1/18/2019
Building	3618 Dunn Dr	3618 Dunn Dr	Los Angeles	Wiseman Construction	Don Tolentino	1/18/2019
Building	Birch	21809-21811 Figueroa Street	Carson	Laufer Investments	Isaac Laufer	1/18/2019
Building	10240 Commerce	10240 Commerce	.	Schaffel Development	Sharon Kass	1/18/2019
Building	429 Hayworth Ave	429 Hayworth Ave	Los Angeles	Wiseman Construction	Don Tolentino	1/18/2019
Building	5639 Lexington Ave	5639 Lexington Ave	Los Angeles	Wiseman Construction	Don Tolentino	1/18/2019
House	1176 Corsica Dr	1176 Corsica Dr	Pacific Palisades	Eco Green Construction	Shawn .	1/18/2019
Building	Chase Knolls - Bldg 4D	4824 Sunnyslope Ave	Sherman Oaks	Snyder Langston	Isaac Ayala	1/17/2019
Building	Chase Knolls - Bldg 5E	4827 N Fulton Ave	Sherman Oaks	Snyder Langston	Isaac Ayala	1/17/2019
House	2112 Bristow Dr	2112 Bristow Dr	La Canada Flintridge	Behr Construction	David .	1/17/2019
Building	966 S Kenmore Ave	966 S Kenmore Ave	Los Angeles	Jamison Properties	Andrew Esmailian	1/16/2019
Building	2847 Leeward Ave	2847 Leeward Ave	Los Angeles	Jamison Properties	Andrew Esmailian	1/16/2019
Building	Towneplace Suites by Marriott	  	Lake Forest	Tharaldson Hospitality	Airalea Newman	1/16/2019
Building	Bishop Amat High School	14301 Fairgrove Ave	La Puente	EPI Construction	Martha Guzman	1/16/2019
Building	Patton Apartments	330-332 N Patton St	Los Angeles	Pacific West Builders	Irene Trujillo	1/15/2019
House	740 Washington Blvd	740 Washington Blvd	Marina Del Rey	Massaro Construction	Jon Massaro	1/15/2019
Building	Regency Palms Colton	839 Fairway Dr	Colton	Badraun Builders	Carrie Wittman	1/15/2019
Building	1001 N Fairfax Ave	1001 N Fairfax Ave	West Hollywood	Empire	Craig Berberian	1/15/2019
Building	5170 W Adams Blvd	5170 W Adams Blvd	Los Angeles	CIM	Jeffrey Aguilar	1/15/2019
Building	Franklin Condominium	4718 W.Franklin Ave	Los Angeles	AGM Development	John Kang	1/14/2019
House	192 Crescent Dr	192 Crescent Dr	Beverly Hills	My Home Builders	Yaron .	1/14/2019
House	17173 Strawberry Dr	17173 Strawberry Dr	Encino	Giant Construction	Leon Perez	1/14/2019
Building	1320 W Jefferson Blvd	1320 W Jefferson Blvd	Los Angeles	Prime Place	Bryan Elsey	1/14/2019
Building	11007 Hesby St	11007 Hesby St	Los Angeles	GMX Construction	Joanne Dupuy	1/14/2019
Building	21010 Pacific Coast Hwy	21010 Pacific Coast Hwy	Huntington Beach	Pinhero	Lauren Tutill	1/11/2019
House	1917 Stradella Rd	1917 Stradella Rd	Los Angeles	4 Corners Remodeling	Raffy Titizian	1/11/2019
House	168 S Alta Vista	168 S Alta Vista	Los Angeles	David Elliot Builders	David .	1/11/2019
Building	1833 N Garey Ave	1833 N Garey Ave	Pomona	Atlantis Construction Services	Azad .	1/11/2019
House	94 Sandra Ave	94 Sandra Ave	Arcadia	Anokia Inc	Boyet .	1/9/2019
Building	10231 Woodbine St	10231 Woodbine St	Los Angeles	Woodbine	Kevin Rahimian	1/8/2019
House	1616 Nelson Ave	1616 Nelson Ave	Manhattan Beach	Nam Nguyen	Nam Nguyen	1/8/2019
Building	Chadwick Center	26800 South Academy Dr	Palos Verdes Peninsula	Del Amo Construction	Stephanie Pham	1/7/2019
House	3958 N Goodland Ave	3958 N Goodland Ave	Studio City	John Rance	John Rance	1/4/2019
House	929 Stone Canyon Rd	929 Stone Canyon Rd	Los Angeles	Taltech Construction	Jennifer Wing	1/4/2019
House	3388 S Halderman St	3388 S Halderman St	Los Angeles	Steven Knotz	Victor .	1/3/2019
House	1710 Tropical Ave	1710 Tropical Ave	Beverly Hills	Charles Infante	Charles Infante	1/1/2019
House	1141 Via De La Paz	1141 Via De La Paz	Los Angeles	Fischer Construction	Anthony Tissera	1/1/2019
Building	McCadden Senior Apartments	1125 N Las Palmas Ave	Los Angeles	Alpha Construction	Ed Goldman	1/1/2019
Building	1227 N Formosa Ave	1227 N Formosa Ave	West Hollywood	Breakform Design	Csaba Oszkay	1/1/2019
Building	Echo Park Morra	1516 Echo Park Ave	Los Angeles	Planet Home Living	Tracie Thompson	1/1/2019
Building	Homecoming At The Preserve	16379 E Preserve Loop Rd	Chino	Western National Group	Jon Bowthorpe	1/1/2019
Building	Gramercy Place Apartments	1856 S Wilton Pl	Los Angeles	Dreyfuss Construction	Ken Yang	1/1/2019
Building	KT & KT New Office Building	2214 N Windsoe Ave	Altadena	Centre Builders	Jordan Steedly	1/1/2019
House	228 S McCadden Pl	228 S McCadden Pl	Los Angeles	Go Green Remodeling	Mier .	1/1/2019
Building	Murrieta Senior Living	27100 Clinton Keith Rd	Murrieta	KBE Building Corporation	Clovis Jones	1/1/2019
Building	2801 Sunset Pl	2801 Sunset Pl	Los Angeles	Wilshire Construction	John Yuhas	1/1/2019
Building	Yale	2822 Santa Monica Blvd	Santa Monica	Hy-Max Building	Jennifer Prizer	1/1/2019
House	Coldwater Residence	4049 Coldwater Canyon Ave	Studio City	Supreme Remodeling	Patrick Doan	1/1/2019
Building	Los Olivos II - Phase 2	4101-5463 Molino	Irvine	Western National Group	Quinn Harper	1/1/2019
Building	La Jolla Del Rey Phase 1	6340 Gullstrand St	San Diego	WM Builders	Jason Blankenship	1/1/2019
Building	6901 S Main St	6901 S Main St	Los Angeles	Dreyfuss Construction	Ken Yang	1/1/2019
Building	760-788 Hyperion Ave	760-788 Hyperion Ave	Los Angeles	TNT Simmonds	Trevor Rick	1/1/2019
House	8405 Beverly Blvd	8405 Beverly Blvd	Los Angeles	Jensen Zigman	Robert Zigman	1/1/2019
House	848 N Gardner St	848 N Gardner St	Los Angeles	Alon	Ensa Investments	1/1/2019
Building	Hydroponics TI	8832 Ramona St	Bellflower	Excel Construction	Ralph .	1/1/2019
Building	900 Gayley Ave	900 Gayley Ave	Los Angeles	T.B. Penick & Sons	Carlie Harries	1/1/2019
Building	Son Land Apartments	Bataan Ave & Sunland St	Ridgecrest	Wallace & Smith Contractors	Kelley Eden	1/1/2019
Building	415 S Le Doux Rd	415 S Le Doux Rd	Los Angeles	Hy-Max Building	Jennifer Prizer	1/1/2019
Building	411-439 S Hamel Road	411-439 S Hamel Road	Los Angeles	ETCO Homes	Jim Bynum	1/1/2019
Building	505 Silver Lake Blvd	505 Silver Lake Blvd	Los Angeles	Aj Khair	Amir Amiranfar	1/1/2019
Building	The Link	17th & G St	San Diego	JP&K Construction Management	Zack Peterson	1/1/2019
Building	Villas Mont Clair	4220 W. Mont Clair Street	Los Angeles	Alpha Construction	Ed Goldman	1/1/2019
Building	Missouri Place	11950 W Missouri Ave	Los	Alpha Construction	Ed Goldman	1/1/2019
House	2986 Passmore Dr	2986 Passmore Dr	Los Angeles	Julio Carta	Julio Carta	12/28/2018
Building	8735 Ramona St	8735 Ramona St	Bellflower	AAC Management	Stephen .	12/28/2018
Building	4170 W 5th St	4170 W 5th St	Los Angeles	Con'Struc'Ture	Michael Ramos	12/27/2018
House	11232 Stevens Ave	11232 Stevens Ave	Culver City	Tony	Tony .	12/27/2018
Building	1991 Del Amo Blvd	1991 Del Amo Blvd	Torrance	Riat Construction	Larry Russo	12/26/2018
Building	Kingsley Apartment	1229 S Kingsley Dr	Los Angeles	Orum Construction Group	Wolney Ferreira	12/26/2018
Building	Margan Apartments Redevelopment	885 Levering Ave	Los Angeles	Alameda Construction Services	Daniel Rodriguez	12/26/2018
Building	5300 W Adams Blvd	5300 W Adams Blvd	Los Angeles	CIM	Catherine Randall	12/26/2018
Building	Adams	2602 S Orange	Los Angeles	CIM	Catherine Randall	12/26/2018
Building	4807 Elmwood Ave	4807 Elmwood Ave	Los Angeles	Ceilbright Services	Mimi Guevarra	12/26/2018
House	4235 Woodleigh Ln	4235 Woodleigh Ln	La Canada Flintridge	Grandway Construction	Vanessa Amigon	12/26/2018
Building	2700 Manhattan Ave	2700 Manhattan Ave	Hermosa Beach	R.G. West Corporation	Kemal Ramezani	12/20/2018
Building	Branch West	1725 W Katella Ave	Orange	KPRS	Michael Fabian	12/19/2018
House	23 S Sur	23 S Sur	Newport Beach	Wesley	Wesley .	12/19/2018
Building	Marriott Residence Inn La Quinta	79523 Highway 111	Highway	Porter Brothers	Veronica Dickens	12/19/2018
Building	Union Court	635 E Union St	Pasadena	Regency Midland Construction	Mike Darvish	12/18/2018
House	1406 Sunset Plaza Dr	1406 Sunset Plaza Dr	Los Angeles	Hagop Sargisian	Hagop Sargisian	12/18/2018
Building	3400 Keystone Ave	3400 Keystone Ave	Los Angeles	Hy-Max Building	Jennifer Prizer	12/18/2018
Building	The Orchard	626 N Azusa Ave	Azusa	Pacific Empire Builders	Abel Soriano	12/18/2018
House	154-168 N Lapeer Dr	154-168 N Lapeer Dr	Beverly Hills	Patrick McLean	Patrick McLean	12/17/2018
Building	823-831 N Croft Ave	823-831 N Croft Ave	Los Angeles	Dwelling Construction	Freddie .	12/14/2018
Building	Vassar Apartment Building	7057 N Vassar Ave	Canoga Park	THB Development	Tom Bell	12/14/2018
House	22224 Philiprimm St	22224 Philiprimm St	Woodland Hills	Kirk Thompson	Kirk Thompson	12/14/2018
House	716 The Strand	716 The Strand	Manhattan Beach	Onni Contracting	Steven Cram	12/14/2018
Building	Coldwater Villas	12905 W Landale St	Studio City	KLPM	Ernest Ramirez	12/13/2018
House	2967 Beverly Glen Cir	2967 Beverly Glen Cir	Los Angeles	Alta Verde Builders	Art .	12/11/2018
Building	502 Harvard Apartments	502 S Harvard Blvd	Los Angeles	Con'Struc'Ture	Michael Ramos	12/11/2018
Building	919 Harvard Apartments	919 Harvard Blvd	Los Angeles	Century West Associates	Jim Kermani	12/11/2018
House	145 N Mapleton Dr	145 N Mapleton Dr	Los Angeles	Mapleton Resort	Ryan .	12/7/2018
Building	15566 W Rayen St	15566 W Rayen St	Los Angeles	Legacy Construction	Greg Kenney	12/7/2018
Building	Candlewood Suites	1818 E Holt Blvd	Ontario	Momeni Construction	Paul Olszewski	12/7/2018
House	1010 Lexington Rd	1010 Lexington Rd	Beverly Hills	Kambur Construction Group	Yuko Takenaka	12/7/2018
Building	Modera East Village	1400 K St	San Diego	Mill Creek Residential	Travis O'neal	12/7/2018
Building	Cloverfield	1450 Cloverfield Blvd	Santa Monica	Hy-Max Building	Jennifer Prizer	12/6/2018
Building	Broadway	2225 Broadway	Santa Monica	Hy-Max Building	Jennifer Prizer	12/6/2018
Building	12431 Rochester	12431 Rochester	Los Angeles	Oakmont Capital	Adrine Davtyan	12/6/2018
Building	11837 W Mayfield Ave	11837 W Mayfield Ave	Los Angeles	Oakmont Capital	Adrine Davtyan	12/6/2018
Building	5550 N Bonner Ave	5550 N Bonner Ave	North Hollywood	P & N Construction	Bijan Shahmoradi	12/5/2018
Building	678 S Ardmore Ave	678 S Ardmore Ave	Los Angeles	Jamison Services	Jonathan Braun	12/5/2018
Building	Chadwick School	26800 S Academy Dr	Palos Verdes Peninsula	EPI Construction	Darren Van Velzer	12/4/2018
Building	Mesivta Of Greater Los Angeles	25115 Mureau Rd	Calabasas	Good Health	Stephen Samuel	12/4/2018
Building	2525 Main St Apartments	2525 Main St	Irvine	A & R Corporation	Dean Sanchez	12/4/2018
Building	5122 W Maplewood Ave	5122 W Maplewood Ave	Los Angeles	Ketter Construction	Kathy Kim	12/3/2018
House	5326 Sylmar Ave	5326 Sylmar Ave	Sherman Oaks	Goed Construction	Arthur .	11/30/2018
Building	Couteau Apartments	14104 Coteau Dr	Whittier	Sauer & Associates	Marcos Sauer	11/30/2018
Building	1128 Truxtun Ave	1128 Truxtun Ave	Bakersfield	Pyramid Construction	Brad Thompson	11/30/2018
Building	1532 S Brockton Ave	1532 S Brockton Ave	Los Angeles	Arrian Torkian	Arrian Torkian	11/29/2018
Building	1550 S Brockton Ave	1550 S Brockton Ave	Los Angeles	Arrian Torkian	Arrian Torkian	11/29/2018
Building	Pico-Robertson Senior Community	8862 & 8876 West Pico Blvd	Los Angeles	Dreyfuss Construction	Shohreh Nikravesh	11/29/2018
Building	Las Palmas Apartments	1718 N Las Palmas Ave	Los Angeles	Wilshire Construction	-	11/29/2018
Building	University Glen Market Rate & Senior Affordable Apartments	45 Rincon Dr	Camarillo	A & R Corporation	Dean Sanchez	11/29/2018
House	101 Fremont Pl	101 Fremont Pl	Los Angeles	Home Remodeling and Design	Alex Cruz	11/28/2018
House	2968 Nicada Dr	2968 Nicada Dr	Los Angeles	Sequoia Flooring	Josef Bitaz	11/27/2018
House	1383 Londonderry Pl	1383 Londonderry Pl	Los Angeles	BB West Coast Development	Lola Griffin	11/27/2018
House	1324 Monument St	1324 Monument St	Pacific Palisades	Housed	Rico Camacho	11/27/2018
House	50 Stagecoach Rd	50 Stagecoach Rd	Bell Canyon	Sam's Electro	Sam Khristo	11/26/2018
Building	Fairfield Inn And Suites Marriott	14350 White Sage Rd	Moorpark	Moorpark Hospitality	Peter Bhakta	11/21/2018
House	3387 N Eagle Rock Blvd	3387 N Eagle Rock Blvd	Los Angeles	Verticon	Todd Norell	11/21/2018
House	1737 Temple Hills Dr	1737 Temple Hills Dr	Laguna Beach	Unique Design	Juan .	11/20/2018
House	9528 Oakmore Rd	9528 Oakmore Rd	Los Angeles	Drexel Construction	Juan .	11/20/2018
Building	13209 Moorpark St	13209 Moorpark St	Sherman Oaks	Dayan Industries	Ofer Dayan	11/20/2018
Building	7115 W Waring Ave	7115 W Waring Ave	Los Angeles	800 N Detroit LLC	Josef .	11/15/2018
House	1110 S Carmelina Ave	1110 S Carmelina Ave	Los Angeles	Ferguson Custom Builders	Joe Ferguson	11/15/2018
Building	4201 W Sunset Blvd	4201 W Sunset Blvd	Los Angeles	Coast 2 Coast Restoration	Michael May	11/14/2018
Building	Thousand Oaks	Thousand Oaks	Thousand Oaks	12 Bravo Development Inc	Jay Woo	11/14/2018
Building	15115 Atkinson Ave	15115 Atkinson Ave	Gardena	MKH	Mo .	11/13/2018
Building	The Source Apartments	6555 Beach Blvd	Buena Park	Project Delivery Group	Carolyn Watson	11/12/2018
Building	Milani Apartments	18831 Von Karman	Irvine	A & R Corporation	Dean Sanchez	11/12/2018
Building	11740 West Vanowen St	11740 West Vanowen St	North Hollywood	Jack	Jack .	11/12/2018
House	1245 Hillside Rd	1245 Hillside Rd	South Pasadena	NOTT Construction	Jeff Nott	11/9/2018
Building	Orange Apartments	1522 Orange Grove Ave	Los Angeles	David Maman Design	Adam Rubin	11/9/2018
House	17292 Zedier Ave	17292 Zedier Ave	Huntington Beach	Morelli Construction	Michael .	11/9/2018
Building	Revel South Bay Senior Living	21507 Hawthorne Blvd	Torrance	Western National Group	Chris Kennedy	11/9/2018
House	723 Westmount Dr	723 Westmount Dr	West Hollywood	Shlomi Simsolo	Shlomi Simsolo	11/7/2018
Building	Chaparral South	28475 Old Town Front St	Temecula	Hamel Contracting	Christopher Mireles	11/6/2018
Building	43980 Margarita Rd	43980 Margarita Rd	Temecula	Hamel Contracting	Christopher Mireles	11/6/2018
House	2415 W Chandler Blvd	2415 W Chandler Blvd	Burbank	DTD Builders	Teni .	11/6/2018
Building	Alexandria	1708 & 1712 N Alexandria Ave	Los Angeles	Duke Development	Gracie Thompson	11/2/2018
House	2038 E Ocean Front	2038 E Ocean Front	Newport Beach	Coastline Heating and Air	Brian Lombardi	11/2/2018
House	15154 Burbank Blvd	15154 Burbank Blvd	Sherman Oaks	Danny Matian	Danny Matian	11/2/2018
House	1429 Via Cataluna	1429 Via Cataluna	Palos Verdes Estates	Calhams	John .	11/2/2018
House	1361 Timberpond Dr	1361 Timberpond Dr	El Cajon	Saad	Saad .	11/2/2018
Building	269 Mariposa Ave	269 Mariposa Ave	Los Angeles	Page Construction	Hessam Zarbakhsh	11/2/2018
Building	Petra Professional Plaza	Silica Dr	Victorville	Desert Design Builders	James Schroeder	11/2/2018
Building	370 Salem St	370 Salem St	Glendale	Atlantis Construction Services	Azad .	10/31/2018
Building	Valleyheart Apartments	12012 & 12020 Valleyheart Dr	Studio City	Hy-Max Building	Jennifer Prizer	10/31/2018
Building	Sage Glendale Senior Living	525 & 509 Elk Ave	Glendale	KPRS	Michael Fabian	10/31/2018
Building	67 D St	67 D St	Fillmore	Caribou Industries	Mike Harrah	10/31/2018
Building	Picasso Apartments	Townsend Pl	Pasadena	Essey Construction	Michelle Morales	10/30/2018
Building	Aloft Hotel	7851 Beach Blvd	Buena Park	New Creation Builders	Jason Kim	10/29/2018
House	12112 W Marine	12112 W Marine	Los Angeles	SoCal Hydronics	Jacob Gooze	10/29/2018
Building	Nebraska Apartments	11272 W Nebraska Ave	Los Angeles	Regency Midland Construction	Mike Darvish	10/29/2018
Building	Magnolia Hill	11700 Magnolia Blvd	Los Angeles	Focus Builders Inc	Jonathan Garrett	10/26/2018
Building	1363 Colton St	1363 Colton St	Los Angeles	Essey Construction	Michelle Morales	10/26/2018
House	147 S Almont Dr	147 S Almont Dr	Los Angeles	Resonne Building and Design	Santos Resendiz	10/23/2018
Building	Otsego Apartments	11241 W Otsego St	North Hollywood	Evolve Realty and Development	Stefania Cozmiuc	10/23/2018
House	936 Via Del Monte	936 Via Del Monte	Palos Verdes Estates	Shimiben International	Reneza .	10/23/2018
House	2868 Shadow Canyon Dr	2868 Shadow Canyon Dr	Diamond Bar	Shimiben International	Reneza .	10/23/2018
House	916 Via Del Monte	916 Via Del Monte	Palos Verdes Estates	Shimiben International	Reneza .	10/23/2018
House	2163 Indian Creek Rd	2163 Indian Creek Rd	Diamond Bar	Shimiben International	Reneza .	10/23/2018
Building	Home Of Christians	400 N Garfield Ave	Monterey Park	General Legend Construction	Mae Wong	10/22/2018
Building	8443 Clinton St	8443 Clinton St	West Hollywood	Hillel Nachum	Hillel Nachum	10/22/2018
Building	Rampart Apartments	329 Rampart Blvd	Los Angeles	Elite Investment Management Group	Pinny Rosenbaum	10/22/2018
Building	MW Lofts	709 E Walnut St	Pasadena	T.B. Penick & Sons	Carlie Harries	10/22/2018
Building	Women's Fitness Basement	310 3rd Ave - Bldg. A	Chula Vista	TCE Constructors	Scott VanArsdale	10/22/2018
Building	1754 N Berendo St	1754 N Berendo St	Los Angeles	12 Bravo Development Inc	Jay Woo	10/22/2018
House	2065 Carson Mesa Rd	2065 Carson Mesa Rd	Palmdale	California Fencing	Jared Queen	10/19/2018
Building	Old Farmer's Market	6333 W 3rd St	Los Angeles	Totum Consulting	Rick Casillas	10/16/2018
House	3380 Scadlock Ln	3380 Scadlock Ln	Sherman Oaks	Azi	Azi .	10/16/2018
Building	1826 Canyon Dr	1826 Canyon Dr	Los Angeles	Sapphire Construction	Matt Feehan	10/12/2018
Building	40355 La Quinta Ln	40355 La Quinta Ln	Palmdale	THB Development	Tom Bell	10/12/2018
Building	3636 Bronson Ave	3636 Bronson Ave	Los Angeles	Essey Construction	Steve Hong	10/11/2018
Building	36330 Hidden Springs Rd	36330 Hidden Springs Rd	Wildomar	Primus Contracting Group	Juan .	10/11/2018
House	25354 Prado De La Felicidad	25354 Prado De La Felicidad	Calabasas	Elite Investment Management Group	Eran Hafner	10/10/2018
Building	18435 Napa St	18435 Napa St	Northridge	DPT Construction	Dory Daoud	10/10/2018
Building	124 S Croft Ave	124 S Croft Ave	Los Angeles	Sapphire Construction	Matt Feehan	10/9/2018
Building	133 S La Brea Ave	133 S La Brea Ave	Los Angeles	Hancock Real Estate	Matthew .	10/9/2018
House	1690 W Ramsey St	1690 W Ramsey St	Banning	Kenneth Group	Jose .	10/8/2018
House	35245 Camino Capistrano	35245 Camino Capistrano	Dana Point	South Coast Building	Terry .	10/5/2018
House	267 Bridge St	267 Bridge St	San Luis Obispo	GC Company	Chris Allen	10/5/2018
House	202 S Main St	202 S Main St	Los Angeles	Builder Direct Design & Build	Dan Grossman	10/5/2018
Building	Rampart Apartment	152 N Rampart St	Los Angeles	Cal-City Construction	Irene Yoo	10/5/2018
Building	11408 W Sarah St	11408 W Sarah St	Studio City	Apex GBC	Nick .	10/5/2018
Building	509 N Fairfax Ave Suite 200	"509 N Fairfax Ave, Suite 200"	Los Angeles	Amin Saleh LLC	Amin Saleh	10/4/2018
Building	8273 Clinton St	8273 Clinton St	Los Angeles	BPC	Brent Hanratty	10/4/2018
House	5416 Donna Ave	5416 Donna Ave	Tarzana	Goed Construction	Michael .	9/27/2018
Building	4240 E La Palma Ave	4240 E La Palma Ave	Anaheim	Infosend	Rose Misquez	9/26/2018
Building	Hotel 220 Monterey Park	220 N Atlantic Blvd	Monterey Park	Angeles Contractor	Jay Kwon	9/26/2018
Building	1601 Lincoln Blvd	1601 Lincoln Blvd	Santa Monica	Milender White	Johnny Davis	9/26/2018
Building	10740 Ventura Blvd	10740 Ventura Blvd	North Hollywood	Angeles Contractor	Amir Markazi	9/24/2018
Building	Fairfield Inn & Suites Chino	14705 Ramona Ave	Chino	Tofel Dent Construction	Carl McElhaney	9/20/2018
Building	1906 & 1914 Overland Ave	1906 & 1914 Overland Ave	Los Angeles	Solex Construction	Amir Movafegh	9/20/2018
Building	849 N Bunker Hill Ave	849 N Bunker Hill Ave	Los Angeles	Ramcliff Construction	Sean Cannon	9/20/2018
Building	18535 Burbank Blvd	18535 Burbank Blvd	Tarzana	John Donaldson Construction	David McWhirter	9/20/2018
Building	Vistas Del Puerto	1836 Locust Ave	Long Beach	Dreyfuss Construction	Ken Yang	9/18/2018
Building	Sunset Lux Apartments	1492 Sunset Blvd	Los Angeles	Ivory Construction & Design	Guy Sharabi	9/18/2018
Building	Hampton Inn & Suites Rancho Cucamonga	11669 Foothill Blvd	Rancho Cucamonga	Ace Design and Construction	Jas Khaira	9/18/2018
Building	L.A. Lofts Chinatown	1101 N Main St	Los Angeles	T.B. Penick & Sons	Carlie Harries	9/18/2018
House	7038 Grasswood Ave	7038 Grasswood Ave	Malibu	LB Contractors	Louis Bourassa	9/17/2018
Building	740 Ridgeley Dr	740 Ridgeley Dr	Los Angeles	Hy-Max Building	Jennifer Prizer	9/14/2018
Building	16150 Vanowen St	16150 Vanowen St	Van Nuys	CDH Builders	Sharon Ohana	9/14/2018
Building	1030 Celis St	1030 Celis St	San Fernando	Pueblo Contracting	Servyn .	9/14/2018
House	1118 Olive Ln	1118 Olive Ln	La Canada Flintridge	C.H. Anderson	Chris Wilding	9/13/2018
Building	4th and J Apartments	4th Avenue	San Diego	T.B. Penick & Sons	Aaron Luecht	9/13/2018
Building	Canoga Warner Apartments	21401 Vanowen St	Canoga Park	A & R Corporation	Dean Sanchez	9/13/2018
Building	5254 Denny Ave	5254 Denny Ave	North Hollywood	Alpa Construction	5254	8/14/2019
Building	Merill Gardens At West Covina	1400 West Covina Parkway	West Covina	SRM Construction	Erik Benzel	9/13/2018
Building	Fairfield Inn & Suites	30140 Town Center Dr	Menifee	Primus Contracting Group	Fred East	9/13/2018
Building	Korean American National Museum	605 S Vermont Ave	Los Angeles	Milender White	Aaron Castillo	9/13/2018
Building	31st Street Apartments	505 W 31st St	Los Angeles	Westside Contractors	Andy Berthold	9/13/2018
Building	Florence Mills Apartments	3501 S Central Ave	Los Angeles	Alpha Construction	Ed Goldman	9/13/2018
Building	1265 S Barry Ave	1265 S Barry Ave	Los Angeles	Wiseman Construction	Ben .	9/13/2018
Building	801 S Berendo St	801 S Berendo St	Los Angeles	Philmont Management	Yong Hahn	9/13/2018
Building	5054 S Vermont Ave	5054 S Vermont Ave	Los Angeles	Menco	Joseph Martinez	9/12/2018
Building	411 S Normandie Ave	411 S Normandie Ave	Los Angeles	Wilshire Construction	Oleg Sultseng	9/12/2018
Building	6318 Pacific Blvd	6318 Pacific Blvd	Huntington Park	Arsalan Construction	Jacob Azizollahi	9/11/2018
Building	5301 N Ventura Ave	5301 N Ventura Ave	Ventura	McGillivray Construction	Russell Trozera	9/5/2018
House	15347 Sutton St	15347 Sutton St	Los Angeles	LA World Construction	Avraham Farzan	9/4/2018
House	15350 W Sutton St	15350 W Sutton St	Los Angeles	LA World Construction	Avraham Farzan	9/4/2018
House	15367 Valley Vista Blvd	15367 Valley Vista Blvd	Los Angeles	LA World Construction	Avraham Farzan	9/4/2018
House	175 N June St	175 N June St	Los Angeles	David Elliot Builders	David .	8/29/2018
House	8514 Franklin Ave	8514 Franklin Ave	Los Angeles	Buildwell Construction	Nick .	8/29/2018
Building	Element Westin	900 N Via Piemonte	Ontario	Primus Contracting Group	Dave Coyle	8/29/2018
House	524 N Redondo Ave	524 N Redondo Ave	Manhattan Beach	Western Allied Construction	Carmina .	8/29/2018
Building	719 & 723 St Andrews Pl	719 & 723 St Andrews Pl	Los Angeles	New Creation Builders	Jason Kim	8/29/2018
House	7501 Ogelsby Ave	7501 Ogelsby Ave	Los Angeles	Kreik Concrete	Ara Tchobankrikorian	8/29/2018
House	3630 Northland Rd	3630 Northland Rd	Los Angeles	Marques Owens	Marques Owens	8/27/2018
Building	Artesia At Menifee Town Center	30414 Town Center Dr	Menifee	A & R Corporation	Dean Sanchez	8/27/2018
Building	1055 Town and Country Rd	1055 Town and Country Rd	Orange	CBG Building Company	Jeremy Brenner	8/27/2018
House	17145 Gault St	17145 Gault St	Van Nuys	True Source	Aren .	8/27/2018
Building	250 N Crescent Dr	250 N Crescent Dr	Beverly Hills	Maxxam Enterprises	David Weinstock	8/27/2018
Building	Luxury Condominiums	Landau Blvd	Cathedral City	South Gate Development	Martin Lozano	8/24/2018
Building	Evolve South Bay Apartments	Evolve South Bay Apartments	Carson	A & R Corporation	Dean Sanchez	8/23/2018
Building	Palmdale Aerospace Academy	3300 E Palmdale Blvd	Palmdale	Bouma USA	Rob Green	8/22/2018
Building	1250 N Fairfax Ave	1250 N Fairfax Ave	West Hollywood	KPRS	Cesar Hernandez	8/22/2018
Building	3008 Santa Monica Blvd	3008 Santa Monica Blvd	Santa Monica	Essey Construction	Greg White	8/21/2018
House	1000 Laurel Way	1000 Laurel Way	Beverly Hills	Sen Construction	Wallace Clavelle	8/20/2018
Building	1426 S Hayworth Ave	1426 S Hayworth Ave	Los Angeles	Noah Stangby	Noah Stangby	8/16/2018
Building	20944 Vanowen St	20944 Vanowen St	Canoga Park	The Quillin Group	Meredith Frolio	8/15/2018
House	483 Lake Sherwood Dr	483 Lake Sherwood Dr	Westlake Village	Rhino Construction	Eric Moser	8/15/2018
Building	1223 N Edgemont St	1223 N Edgemont St	Los Angeles	Schon Tepler Construction	Cindy Erdene	8/15/2018
Building	161 S Normandie Ave	161 S Normandie Ave	Los Angeles	Schon Tepler Construction	Cindy Erdene	8/15/2018
Building	519 N Normandie Ave	519 N Normandie Ave	Los Angeles	Schon Tepler Construction	Cindy Erdene	8/15/2018
Building	8th St Garden Apartments	715 S V Avenue	National City	Enping	John Costello	8/15/2018
House	936 Kenter Way	936 Kenter Way	Los Angeles	Westside Realty Ventures	Dan Beaney	8/14/2018
House	16401 S Pacific Ave	16401 S Pacific Ave	Sunset Beach	Lawrence Residence	Jeff .	8/14/2018
Building	7914 Norton Ave	7914 Norton Ave	West Hollywood	Kia & Kia	Ali Kia	8/14/2018
House	5151 N Veloz Ave	5151 N Veloz Ave	Tarzana	Gabai Construction	Glenda .	8/9/2018
Building	Monterey Park Mixed-Use	420 N Atlantic Blvd	Monterey Park	New Creation Builders	Jason Kim	8/9/2018
House	10832 58th St	10832 58th St	Jurupa Valley	United Construction	Omar Magana	8/7/2018
Building	9821-9823 Hannum Dr	9821-9823 Hannum Dr	Los Angeles	Modative Build	Sam Stewart	8/3/2018
House	601 N Foothill Rd	601 N Foothill Rd	Beverly Hills	Ashai Design	Oscar .	8/2/2018
Building	1415 Reeves St	1415 Reeves St	Los Angeles	Westside Contractors	Tom Hinerfeld	8/1/2018
Building	5957 Variel Ave	5957 Variel Ave	Woodland Hills	EBCO General Contractor	Donna Courtney	8/1/2018
Building	6500 Sepulveda Blvd	6500 Sepulveda Blvd	Van Nuys	IMT Residential	Jeff Fawcett	8/1/2018
Building	435 N Roxbury Dr	435 N Roxbury Dr	Beverly Hills	Madison Medical Construction	Cesar Molina	7/31/2018
Building	10925 Hartsook St	10925 Hartsook St	North Hollywood	Done-Rite Construction	Rebecca Mansfield	7/31/2018
Building	4302-4312 Troost Ave	4302-4312 Troost Ave	Studio City	Done-Rite Construction	Rebecca Mansfield	7/31/2018
Building	4172-4728 Vantage Ave	4172-4728 Vantage Ave	Studio City	Done-Rite Construction	Rebecca Mansfield	7/31/2018
House	427 17th St	427 17th St	Santa Monica	Pacific Southwest Builders	Jennifer Cruz	7/30/2018
Building	1021 Grant St	1021 Grant St	Santa Monica	Greenbuilt Development	Steve Green	7/30/2018
House	1207 Dolphin Terrace	1207 Dolphin Terrace	Corona Del Mar	Kaz Investment Management	Ahmed Shoukry	7/25/2018
House	1215 Dolphin Terrace	1215 Dolphin Terrace	Corona Del Mar	Kaz Investment Management	Ahmed Shoukry	7/25/2018
House	31681 Via Cervantes	31681 Via Cervantes	San Juan Capistrano	Kurt Bertuzzi	Kurt Bertuzzi	7/25/2018
Building	12005 Jack Benny Dr Suite 101	12005 Jack Benny Dr Suite 101	Rancho Cucamonga	Steve Lounsbury	Steve Lounsbury	7/25/2018
House	220 N Bristol Ave	220 N Bristol Ave	Los Angeles	Valle Reinis Builders	Yaniv Eliezer	7/23/2018
House	3157 Ivy Glen Way	3157 Ivy Glen Way	Los Angeles	Sharp	Reuven Alush	7/23/2018
Building	388 S Los Robles Ave	388 S Los Robles Ave	Pasadena	Prime Construction & Development	Haro Behesnilian	7/23/2018
House	156 N Wetherly Dr	156 N Wetherly Dr	Beverly Hills	Ben Yadegari	Ben Yadegari	7/19/2018
House	604 Walden Dr	604 Walden Dr	Beverly Hills	Citywall Construction	Gal .	7/19/2018
House	467 S Swall Dr	467 S Swall Dr	Beverly Hills	Citywall Construction	Gal .	7/19/2018
Building	9200 Wilshire Blvd	9200 Wilshire Blvd	Beverly Hills	Swinerton Builders	Ray Dendy	7/19/2018
Building	8700 Chalmers Dr	8700 Chalmers Dr	Los Angeles	Chalmers Investment	Danny Rabbanian	7/19/2018
House	4221 Beck Ave	4221 Beck Ave	Studio City	Giant Construction	Leon Perez	7/18/2018
Building	11671-77 National Blvd	11671-77 National Blvd	Los Angeles	Frymer Construction	Kevin Tominaga	7/18/2018
House	7974 Woodrow Wilson Dr	7974 Woodrow Wilson Dr	Los Angeles	Fischer Construction	Sergio Garcia	7/18/2018
House	4416 Sherman Oaks Cir	4416 Sherman Oaks Cir	Sherman Oaks	Champion Remodeling	David .	7/18/2018
House	9110 Monte Mar Dr	9110 Monte Mar Dr	Los Angeles	A1 Construction	Roni .	7/18/2018
House	2500 Beverwil Dr	2500 Beverwil Dr	Los Angeles	A1 Construction	Roni .	7/18/2018
Building	4121 Santa Monica Blvd	4121 Santa Monica Blvd	Los Angeles	CIM	Jeffrey Aguilar	7/17/2018
Building	Cypress Court	21034 E Cypress St	Covina	Via Home	Cindy Shao	7/17/2018
Building	1415 Huntington Dr	1415 Huntington Dr	Duarte	Milender White	-	7/17/2018
House	519 N Wilcox Ave	519 N Wilcox Ave	Los Angeles	24 Construction and Design	Noam Baram	7/12/2018
House	Wimer Ranch	4240 Esperanza Ln	San Luis Obispo	Schaefer Construction	Erich Schaefer	7/12/2018
House	2182 Century Hill	2182 Century Hill	Los Angeles	12 Bravo Development Inc	Jay Woo	7/12/2018
Building	1273 W 36th St	1273 W 36th St	Los Angeles	LA Build	Daniel Gispan	7/10/2018
Building	Albers	11433-11443 W Albers St	North Hollywood	ASI Contractors	Alan Asi	7/6/2018
Building	1641 Lincoln Blvd	1641 Lincoln Blvd	Santa Monica	West Builders	Alex Plair	7/6/2018
Building	15 S Hope Ave	15 S Hope Ave	Santa Barbara	T.B. Penick & Sons	Carlie Harries	7/6/2018
Building	Camellia Court Apts	5610 Camellia Ave	North Hollywood	ASI Contractors	Darren Wyre	7/5/2018
Building	Liv'Art Dance School	11044 Weddington St	North Hollywood	Zeiler Construction Inc	Pete Zeiler	7/5/2018
Building	7000 Melrose Ave	7000 Melrose Ave	Los Angeles	Hy-Max Building	Jennifer Prizer	7/5/2018
Building	901 Vine St	901 Vine St	Los Angeles	Hy-Max Building	Jennifer Prizer	7/5/2018
Building	8521 S Sepulveda Blvd	8521 S Sepulveda Blvd	Los Angeles	ASI Contractors	Darren Wyre	7/3/2018
Building	Artesia Live 1 - Twin Tower	17600-17618 Pioneer Blvd	Artesisa	Gangi Builders	Albert Han	7/3/2018
House	921 N Rexford Dr	921 N Rexford Dr	Beverly Hills	HP Group GC	Nick Oshana	7/3/2018
Building	1070 S Bedford Ave	1070 S Bedford Ave	Los Angeles	P & N Construction	Sam Rashidi	7/3/2018
Building	Aster Apartments	1708 E 61st St	Los Angeles	AGM Development	John Kang	7/3/2018
Building	1952-1954 Corinth Ave	1952-1954 Corinth Ave	Los Angeles	Hy-Max Building	Jennifer Prizer	7/2/2018
House	8758 Skyline Dr	8758 Skyline Dr	Los Angeles	Aek Construction	Abdo El Kassouf	6/28/2018
House	1816 Laurel Canyon Blvd	1816 Laurel Canyon Blvd	Los Angeles	Utopia Development	Joseph Levy	6/25/2018
House	265 W Duarte Rd	265 W Duarte Rd	Arcadia	US Longton	Jun Chen	6/22/2018
Building	118 N Allen Ave	118 N Allen Ave	Pasadena	Project X Construction	Kang Wang	6/22/2018
House	602 N Canon Dr	602 N Canon Dr	Beverly Hills	Afhai Design	Oscar .	6/22/2018
House	Cuesta Cala House	19455 Cuesta Cala Rd	Topanga	Topanga Center	Scott Vineberg	6/22/2018
Building	Pacific Plaza Arcadia	56 E Duarte Rd	Arcadia	King Young Construction	Ray Ky	6/22/2018
Building	Woodspring Suites	2050 W Valley Blvd	Colton	Interstate Construction	Jim Sideris	6/22/2018
House	729 N Rodeo Dr	729 N Rodeo Dr	Beverly Hills	RT Abbott Construction	Jeff Mochrie	6/21/2018
House	345 St Pierre Rd	345 St Pierre Rd	Los Angeles	Zac Taylor Development	Moshe Pinhas	6/21/2018
House	524 N Ardmore Ave	524 N Ardmore Ave	Los Angeles	Potkin Group	Bryan Potkin	6/20/2018
House	807 Cinthia St	807 Cinthia St	Beverly Hills	Craig R Williams Construction	Ryan Braun	6/18/2018
House	315 S Hudson Ave	315 S Hudson Ave	Los Angeles	Go Green Remodeling	Eli .	6/15/2018
House	Palm Residence	527 N Palm Dr	Beverly Hills	Current Trend Contractors	Randy Lawrence	6/8/2018
House	12326 Laurel Terrace Dr	12326 Laurel Terrace Dr	North Hollywood	Jerar Karsyam	Jerar Karsyam	6/8/2018
House	605 N Arden Dr	605 N Arden Dr	Beverly Hills	Vision Construction	Sam .	6/8/2018
Building	Stalder Plaza	3777 Mission Inn Ave	Riverside	T.B. Penick & Sons	Carlie Harries	6/8/2018
Building	2239 W Washington Blvd	2239 W Washington Blvd	Los Angeles	Group S	Saman Zandkarimi	6/8/2018
Building	Centinela Apartments	417 Centinela Ave	Inglewood	Alpha Construction	Ed Goldman	6/7/2018
House	8365 Sunset View Dr	8365 Sunset View Dr	Los Angeles	Roman James Design Build	Alan Plascencia	6/7/2018
Building	Pinnacle 360	235 N Hoover St	Los Angeles	Milender White	Morgan Lysohir	6/7/2018
Building	1361 Kelton	1361 Kelton Ave	Westwood	Ketter Construction	Kathy Kim	6/7/2018
Building	7223 Tyrone Ave	7223 Tyrone Ave	Van Nuys	Tyrone Villas at Van Nuys	Alex Kurian	6/7/2018
House	47596 Lake Canyon Dr	47596 Lake Canyon Dr	Aguanga	Sweig Construction	Bruce Miller	6/7/2018
House	245 S Wetherly Dr	245 S Wetherly Dr	Beverly Hills	Mr. Build	Michael Senecal	6/6/2018
House	913 N Bedford Dr	913 N Bedford Dr	Beverly Hills	Ceilbright Services	Fara .	6/6/2018
House	5057 Princess Anne Rd	5057 Princess Anne Rd	La Canada Flintridge	Bellwest Properties	Rafik .	6/6/2018
House	17010 Rancho St	17010 Rancho St	Encino	Aluriel Inc	Jose Perez	6/6/2018
Building	105 S Doheny Dr	105 S Doheny Dr	Los Angeles	Duke Development	Gracie Thompson	5/30/2018
House	4200 Mesa Vista Dr	4200 Mesa Vista	La Canada Flintridge	Grandway Construction	Nathan Garay	5/30/2018
Building	Hollywood Blvd 5750 Apartments	5750 Hollywood Blvd	Los Angeles	Wood Partners	Mark Roberts	5/30/2018
Building	Best Western Inn Suites	9800 & 9804 Compagnoni St	Bakersfield	Ace Design and Construction	Jas Khaira	5/30/2018
Building	Gramercy Apartment	850 S Gramercy Pl	Los Angeles	JS Design & Construction	William Moon	5/30/2018
House	1952 N Beverly Dr	1925 N Beverly Dr	Beverly Hills	ANA Plastery	Alex .	5/30/2018
House	22 Latimer Rd	22 Latimer Rd	Santa Monica	Bar Design and Construction	Asher Alfasi	5/30/2018
House	600 Perugia Way	600 Perugia Way	Los Angeles	Greenbuild Construction Services	Doron Ben	5/30/2018
Building	Broadway and Magnolia	500 W Broadway	Long Beach	Wood Partners	Mark Roberts	5/25/2018
Building	1621 Malcolm Ave	1621 Malcolm Ave	Los Angeles	Baypost Builders	Luis Galvan	5/25/2018
House	Oak Pass Residence	9551 Oak Pass Rd	Los Angeles	Fischer Construction	Joel Fischer	5/24/2018
Building	Best Western Plus	31450 Bob Hope Dr	Cathedral City	M-13 Construction	Oaks Morley	5/24/2018
House	Marshall Residence	162 & 162 1/2 Saint Joseph Ave	Long Beach	West Construction	Rick Marshall	5/24/2018
Building	Newhall Crossings	24450 & 24480 Main St	Santa Clarita	Pacific Empire Builders	Dalton Breitkreutz	5/23/2018
Building	1019 S Catalina St	1019 S Catalina St	Los Angeles	AGM Development	John Kang	5/18/2018
Building	11830 & 11836 Courtleigh Dr	Courtleigh Dr 11830 & 11836	Los Angeles	Hy-Max Building	Jennifer Prizer	5/18/2018
House	Roth Residence	305 S. Roxbury Drive	Beverly Hills	T.B. Penick & Sons	David Anvar	5/17/2018
Building	1236 N Fairfax Ave	1236 N Fairfax Ave	West Hollywood	Build 4 U	Melissa Gonzalez	5/17/2018
Building	Hyatt House Hotel	1550 San Pablo St	Los Angeles	T.B. Penick & Sons	Donald Grinnell	5/16/2018
House	Olson Residence	10 San Juan Bautista St	Ladera Ranch	Trivest Builders	Kevin Schilling	5/16/2018
Building	12300 Pico Blvd	12300 Pico Blvd	Los Angeles	Cal-City Construction	Soin Yun	5/16/2018
Building	Vanowen St Apartments	12555 Vanowen St	North Hollywood	JJP Construction	Gary Petrocio	5/16/2018
Building	Berendo Villas	1025 S Berendo St	Los Angeles	Sunway Construction	Chung Pak	5/16/2018
Building	1315 W Florence Ave	1315 W Florence Ave	Los Angeles	Sunway Construction	Chung Pak	5/16/2018
Building	832 St Andrews Pl	832 St Andrews Pl	Los Angeles	Build 4 U	Melissa Gonzalez	5/15/2018
Building	Kling Street Townhomes	10839 Kling St	North Hollywood	Valley State Builders	Garen Boyajian	5/15/2018
House	8650 Hollywood Blvd	8650 Hollywood Blvd	Los Angeles	Hillel Nachum	Hillel Nachum	5/15/2018
Building	Moorpark 6-Unit	11611 Moorkpark St	Studio City	Resonne Building and Design	Santos Resendiz	5/14/2018
Building	107 Long Beach Blvd	107 Long Beach Blvd	Long Beach	Angeles Contractor	Amir Markazi	5/14/2018
Building	Catalina Apartments	400 S Catalina St	Los Angeles	All Site Construction	Sassan Arefi	5/14/2018
Building	474 Lilian Way	474 Lilian Way	Los Angeles	Jahz Properties	Antonio Hidalgo	5/14/2018
Building	5750 Lexington Ave	5750 Lexington Ave	Los Angeles	EdenRock	Yoni Chriqui	5/14/2018
House	20540 Rancho La Floresta Rd	20540 Rancho La Floresta Rd	Covina	BPC Holdings	Paul Chen	5/14/2018
House	315 24th St	315 24th St	Santa Monica	LA Build	Ryan Ritchie	5/14/2018
Building	1317 Hope St	1317 Hope St	Los Angeles	Build 4 U	Melissa Gonzalez	5/14/2018
House	2319 Penmar Ave	2319 Penmar Ave	Venice	Dudu Noudel	Dudu Nudel	5/11/2018
Building	22769 Del Valle St	22769 Del Valle St	Woodland Hills	Processing	Paul Valles	5/7/2018
House	1001 Gayley Ave	1001 Gayley Ave	Los Angeles	Pacific Westline	Tim Sperry	5/7/2018
House	Norwich Residence	541 Norwich Dr	West Hollywood	Kia & Kia	Ali Kia	5/4/2018
Building	14846 Friar St	14846 Friar St	Van Nuys	Design Construction	Michael Omranian	5/4/2018
Building	14606 Calvert St	14606 Calvert St	Van Nuys	Design Construction	Michael Omranian	5/3/2018
Building	Ross Dress For Less 2152	2224 E. Lincoln Ave	Anaheim	U.S. Builders	Katie Lucas	5/3/2018
Building	NOHO Apartments	5401 N Lankershim Blvd	North Hollywood	Staples Construction	Eric Prieto	5/2/2018
Building	Stadium Villas	959 Stadium Way	Los Angeles	T.B. Penick & Sons	Donald Grinnell	5/2/2018
Building	Inclave	4065 Glencoe Ave	Marina Del Rey	West Builders	Mehmet Cankiri	5/1/2018
Building	1745 N Western Ave	1745 N Western Ave	Los Angeles	Pac Bell	Joe Sams	5/1/2018
Building	Chinatown Lofts	957 Figueroa Terrace	Los Angeles	Frost Chaddock Developers	Hovik .	4/27/2018
Building	11036 W Moorkpark St	11036 W Moorpark St	North Hollywood	Frost Chaddock Developers	Hovik .	4/27/2018
Building	Wilton Place	525 N Wilton Pl	Los Angeles	Frost Chaddock Developers	Hovik .	4/27/2018
Building	9440 S Santa Monica	9440 S Santa Monica Blvd	Beverly Hills	Mr. Build	Calin Keeley	4/27/2018
Building	1613-1637 Lincoln Blvd	1613/1637 Lincoln Blvd	Santa Monica	Milender White	Morgan Lysohir	4/27/2018
House	688 Nimes Rd	688 Nimes Rd	Beverly Hills	RAM Construction Services	Ami Farkash	4/27/2018
House	666 Navy St	17422 Derian Ave	Santa Monica	Bercow Construction	Ed Bercow	4/26/2018
Building	1048-1050 Manzanita St	1048 Manzanita St	Los Angeles	CIM	Jeffrey Aguilar	4/24/2018
House	621 N Canon	621 N Canon	Beverly Hills	Roman James Design Build	Baltazar .	4/24/2018
House	4441 La Barca Dr	4441 N La Barca Dr	Tarzana	TNB Studio	Tal .	4/24/2018
Building	22425 W Del Valle St	22425 W Del Valle St	Woodland Hills	Green Concept Construction	Mike Rashidi	4/23/2018
Building	4847 W Oakwood Ave	4847 W Oakwood Ave	Los Angeles	Arrian Torkian	Arrian Torkian	4/23/2018
Building	Grandview Apartments	4025 Grand View Blvd	Culver City	Arrian Torkian	Arrian Torkian	4/23/2018
House	Silva Residence	12733 Sunset Blvd	Los Angeles	Voshall Construction	Jeff Borges	4/23/2018
Building	Little Tokyo	118 S Astronaut Ellison	Los Angeles	ETCO Homes	Heather Michaels	4/20/2018
Building	West LA Apartments	714 N Sweetzer Ave	Los Angeles	ETCO Homes	David Nisbett	4/20/2018
House	625 N Maple Dr	625 N Maple Dr	Beverly Hills	GHBW	Stewart Swatosh	4/20/2018
Building	Kemper + Kenyon Apartments	Kemper and Kenyon St	San Diego	Murfey Company	Scott Murfey	4/19/2018
Building	647 N Beachwood Dr	647 N Beachwood Dr	Los Angeles	Cambridge Homes	Dawn Dowler	4/19/2018
House	San Clemente Residence	860 Avenida Salvador	San Clemente	C.H. Anderson	Trent Anderson	4/18/2018
House	9108 Alanda Pl	9108 Alanda Pl	Beverly Hills	Design Built	Avry Mizrahi	4/18/2018
Building	Nordhoff Apartments	18401 Nordhoff Apartments	Los Angeles	Frymer Construction	Kevin Tominaga	4/18/2018
Building	11616 Burbank Blvd	11616 Burbank Blvd	North Hollywood	Summer Land Partners Group	Liat Kozar	4/18/2018
Building	11525 Chandler Blvd	11525 Chandler Blvd	North Hollywood	Summer Land Partners Group	Liat Kozar	4/18/2018
Building	8314 Willoughby Ave	8314 Willoughby Ave	West Hollywood	Bynum & Associates	Trisha Herwald	4/18/2018
Building	California Pak	17706 S Main St	Gardena	Riat Construction	Larry Russo	4/18/2018
Building	1825 Las Palmas Ave	1825 Las Palmas Ave	Hollywood	Frymer Construction	Alan Bacon	4/18/2018
House	414 Lorraine Blvd	414 Lorraine Blvd	Los Angeles	Allen Construction	Charles Lee	4/16/2018
Building	Homewood Suites	Newhall Ranch Rd	Santa Clarita	Premier Construction Management	Victoria Harrison	4/16/2018
Building	3981 S Moore St	3981 Moore S St	Los Angeles	Mercury Construction	Adi Cohen	4/13/2018
House	556 Homewood Rd	556 Homewood Rd	Los Angeles	Stephen Bloom Construction	Stephen Bloom	4/13/2018
Building	Ventura Triangle	Ash Street and Sanjon Rd	Ventura	Staples Construction	Chris Reeder	4/13/2018
Building	Croft Ave Residence	724 N Croft Ave	Los Angeles	ETCO Homes	David Nisbett	4/12/2018
Building	Plaza Mexico Residences	3000 E Imperial Hwy	Lynwood	T.B. Penick & Sons	Fernando .	4/12/2018
Building	Portside Ventura Harbor	13190 Marquesas Way	Marina Del Rey	MTH Construction	Thomas DiGiuseppe	4/12/2018
Building	Landfair Apartment	626 S Landfair Ave	Los Angeles	AGM Development	John Kang	4/12/2018
House	224 S Linden Dr	224 S Linden Dr	Beverly Hills	RJS Construction	Sam Saidfar	4/11/2018
House	2053 Kerwood Ave	2053 Kerwood Ave	Los Angeles	DNN Capital	Jerry Levy	4/11/2018
House	23461 Palm Dr	23461 Palm Dr	Calabasas	TNB Studio	Tal .	4/9/2018
House	755 Sarbonne Rd	755 Sarbonne Rd	Bel Air	Allied Design and Remodeling	Isaac Abrams	4/5/2018
House	Horizon Gardens	67670 Carey Rd	Cathedral City	Asaro Builders	Josh Williams	4/2/2018
Building	MGA Campus Building C	9254 N Winnetka Ave	Los Angeles	Uncommon Developers	Sam Shakeri	3/29/2018
Building	11110 Hartsook St	11110 Hartsook St	Los Angeles	B Raeen Construction	Ara .	3/29/2018
Building	22 Student Rooms	611 Gayle Ave	Los Angeles	B Raeen Construction	Ara .	3/29/2018
House	1411 Capri Dr	1411 Capri Dr	Los Angeles	B Raeen Construction	Ara .	3/29/2018
Building	The Beacon	1235 Long Beach Blvd	Long Beach	KPRS	Cesar Hernandez	3/29/2018
Building	1323 S Orange Grove Ave	1323 S Orange Grove Ave	Los Angeles	Westside Contractors	Tzemach Yemini	3/29/2018
House	518 Sunderland Court	518 Sunderland Court	Arrowhead Farms	Michael Coufal	Michael Coufal	3/26/2018
Building	18 Unit Condominium	6800-6812 Variel St	Canoga Park	California Home Builders	Kathryn Rudnick	3/26/2018
Building	1115 Georgina Ave	1115 Georgina Ave	Santa Monica	Minardo's Group	Rick Tharp	3/26/2018
House	3245 Amber Hill Dr	3245 Amber Hill Dr	Highland	Preston Prestige Design	Bobbi Preston	3/21/2018
House	4125 Troost Ave	4125 Troost Ave	Studio City	My Home Builders	Emma Maitrea	3/16/2018
Building	5012 S Slauson Ave	5012 S Slauson Ave	Los Angeles	Ketter Construction	Andrea .	3/15/2018
Building	2301 S Cloverdale Blvd	2301 S Cloverdale Blvd	Los Angeles	Plan-Build	Joey Meller	3/15/2018
Building	1237 S Holt Ave	1237 S Holt Ave	Los Angeles	P & N Construction	Sam Rashidi	3/15/2018
Building	Vista at Simi Valley	1236 Erringer Rd	Simi Valley	Staples Construction	Chris Reeder	3/12/2018
Building	Fedora Apartments	1053 S Fedora St	Los Angeles	Angeles Contractor	Amir Markazi	3/9/2018
Building	Mariposa Apartments	744 S Mariposa	Los Angeles	Angeles Contractor	Amir Markazi	3/8/2018
Building	Hotel Live	1700 W Olympic Blvd	Los Angeles	Cal-City Construction	Soin Yun	3/8/2018
Building	Riverside Medical Plaza	18876 Van Buren Blvd	Carson	KPRS	Cesar Hernandez	3/8/2018
Building	3601 Calle Tecate	3601 Calle Tecate	Camarillo	Artner West Construction	Mark Artner	3/2/2018
Building	1450 N Benson Ave	1450 N Benson Ave	Upland	P Marty Enterprises	Peter Marty	3/2/2018
Building	Hampton Inn Riverside	3505 Market St	Riverside	Angeles Contractor	Amir Markazi	3/2/2018
Building	Staybridge Suites Long Beach	2640 Lakewood Blvd	Long Beach	Angeles Contractor	Amir Markazi	3/2/2018
Building	14931 Califa St	14931 Califa St	Van Nuys	Cannon	Magaly Sanchez	3/2/2018
Building	Warner Center	6200 Variel Ave	Woodland Hills	California Home Builders	John Severino	3/1/2018
Building	Topanga Canyon	6263 Topanga Canyon Blvd	Woodland Hills	California Home Builders	John Severino	3/1/2018
Building	Martel Apartments	1016 N Martel Ave	West Hollywood	Regency Midland Construction	Mike Darvish	3/1/2018
Building	Santa Monica Blvd Apartments	10534 W Santa Monica Blvd	Los Angeles	Regency Midland Construction	Mike Darvish	3/1/2018
Building	Hampton Inn Santa Maria	2190 N Preisker Lane	Santa Maria	Angeles Contractor	Amir Markazi	3/1/2018
House	803 N Linden Dr	803 N Linden Dr	Beverly Hills	Dominium Management	Alex .	2/28/2018
Building	Riverglen II	2600-2750 Riverside Dr	Los Angeles	Fassberg Construction	John Oneal	2/28/2018
Building	Carlton Treehouse Project	5842 Carlton Way	Los Angeles	Fassberg Construction	Athmaja Edirisinghe	2/28/2018
Building	Vineyards at Porter Ranch	11401 N Porter Ranch Dr	Los Angeles	Fassberg Construction	Larry Hoffman	2/28/2018
Building	4909 W Rosewood Ave	4909 W Rosewood Ave	Los Angeles	Wiseman Construction	Ben .	2/28/2018
House	601 Perugia Way	601 Perugia Way	Los Angeles	Craig R Williams Construction	Charles Nappi	2/28/2018
House	1932 Stradella Rd	1932 Stradella Rd	Los Angeles	4 Corners Remodeling	Raffy Titizian	2/22/2018
Building	M-Apartments	982 S Catalina St	Los Angeles	AY Development	Stephen Ma	2/16/2018
Building	7032 S Ramsgate Pl	7032 S Ramsgate Pl	Los Angeles	Agile Development	Kamyar .	2/16/2018
House	16254 Mandalay Dr	16254 Mandalay Dr	Encino	Gili Construction	Itamar Azuly	2/16/2018
House	1410 Tanager Way	1410 Tanager Way	Los Angeles	Roman James Design Build	Dillon Silver	2/16/2018
House	2185 Stratford Circle	2185 Stratford Cicrcle	Los Angeles	AGM Development	John Kang	2/15/2018
House	549 Westminster Ave	549 Westminster Ave	Venice	Utopia Development	Gerry Martinez	2/15/2018
House	518 7th St	518 7th St	Huntington Beach	Tony Murguia Construction	Tony Murguia	2/15/2018
Building	6240 N Fulton Ave	6240 N Fulton Ave	Van Nuys	AFCO Construction	Rocky Spadaro	2/14/2018
House	1148 N Detroit St	1148 N Detroit St	West Hollywood	Crescenta Valley Engineering	Mark .	2/14/2018
Building	5645-5651 N Farmdale Ave	5645-5651 N Farmdale Ave	North Hollywood	ASI Contractors	Alan Asi	2/9/2018
Building	12803 W Washington Blvd	12803 W Washington Blvd	Los Angeles	James Kennedy Construction	Steven Rea	2/9/2018
Building	700 S Manhattan Pl	700 S Manhattan Pl	Los Angeles	Jamison Properties	Jonathan Braun	2/8/2018
Building	21117-12123 Valleyheart Dr	21117-12123 Valleyheart Dr	Studio City	Hy-Max Building	Ryan Schauer	2/8/2018
Building	1330 S Federal Ave	1330 S Federal Ave	Los Angeles	Hy-Max Building	Ryan Schauer	2/8/2018
Building	2140 S Butler Ave	2140 S Butler Ave	Los Angeles	Hy-Max Building	Ryan Schauer	2/8/2018
Building	150-154 N Berendo St	150-154 N Berendo St	Los Angeles	Hy-Max Building	Ryan Schauer	2/8/2018
Building	18334 Malden St	18334 Malden St	Northridge	National Construction	Emry Hadad	2/7/2018
Building	8017 Norton Ave	8017 Norton Ave	West Hollywood	Empire	Jeero Habeshian	2/7/2018
Building	Stevenson Ranch - Bldg C	24797 Constitution Ave	Stevenson Ranch	Katerra	Stephen Byrd	2/7/2018
House	24723 Mulholland Hwy	24723 Mulholland Hwy	Calabasas	Graystone Builders	Steve Lazlos	2/7/2018
House	665 Walther Way	665 Walther Way	Los Angeles	Walther Partners	Mazi Mosh	2/6/2018
Building	Occidental Gardens	224 S Occidental Blvd	Los Angeles	Park Lane Projects	Deepak Chintala	2/5/2018
Building	Carson Colony	"21201, 21205, 21209 Main St"	Carson	Angeles Contractor	Luis Ramirez	2/5/2018
Building	MG Rolling Hills Estates	627 Silver Spur Rd	Rolling Hills Estates	SRM Construction	Bill Robinson	2/1/2018
House	606 Foothill Rd	606 Foothill Rd	Beverly Hills	Accel Builders	Alex Vasquez	2/1/2018
Building	905 Westminster Ave	905 Westminster Ave	Alhambra	Donlon Builders	Danielle Escobar	2/1/2018
House	165 S Anita Ave	165 S Anita Ave	Los Angeles	Fountainhead Homes	Sarah Rock	1/31/2018
House	333 Carmelina Ave	333 Carmelina Ave	Los Angeles	Fountainhead Homes	Sarah Rock	1/31/2018
House	13232 Jonesboro Pl	13232 Jonesboro Pl	Los Angeles	Fountainhead Homes	Sarah Rock	1/31/2018
House	873 Ridgecrest St	873 Ridgecrest St	Monterey Park	B & K	Nick Wang	1/31/2018
Building	1947 Sawtelle Blvd	1947 Sawtelle Blvd	Los Angeles	Hy-Max Building	David Harman	1/30/2018
Building	4040 Del Rey Ave	4040 Del Rey Ave	Los Angeles	Hy-Max Building	Mike Blaha	1/30/2018
House	19454 Shirley Ct	19454 Shirley Ct	Tarzana	MIR Construction	Gene Mirov	1/30/2018`


var listOfProjects = data.split('\n').map(project => {
    var arr = project.split('\t');
    return {
        type: arr[0],
        projectName: arr[1],
        street: arr[2],
        city: arr[3],
        companyName: arr[4],
        contactName: arr[5]
    }
})

console.log(listOfProjects);

fs.writeFileSync('listOfProjects.js', JSON.stringify(listOfProjects));