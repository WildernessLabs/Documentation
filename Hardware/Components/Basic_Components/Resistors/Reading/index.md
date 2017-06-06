---
title: Reading a Resistor's Value
---

## Through Hole (PTH)
![4-band resistor color chart](Reading_4_Band_Resistors.svg)

## Surface Mount (SMD)
There are 2 primary methods of labeling SMD resistors.

The first uses 3 numbers such as 424, this can be understood as 42 * 10^4 = 42x10,000 = 420k Ohms.  If the resistor were labeled as 420 it would be 42 * 10^0 = 42 * 1 = 42 Ohms.

The second method, EIA Standard, uses 2 numbers and a letter such as 66B using the tables below we can decode that to mean  475*10 = 4,750 Ohms.

The numbers are a lookup code
CODE	|	Value	|	 		|	CODE	|	Value	|	 		|	CODE	|	Value	|	 		|	CODE	|	Value
-----	|	-----	|	-----	|	-----	|	-----	|	-----	|	-----	|	-----	|	-----	|	-----	|	-----
01		|	100		|	  		|	25		|	178		|	 		|	49		|	316		|	 		|	73		|	562
02		|	102		|	 		|	26		|	182		|	 		|	50		|	324		|	 		|	74		|	576
03		|	105		|	 		|	27		|	187		|	 		|	51		|	332		|	 		|	75		|	590
04		|	107		|	 		|	28		|	191		|	 		|	52		|	340		|	 		|	76		|	604
05		|	110		|	 		|	29		|	196		|	 		|	53		|	348		|	 		|	77		|	619
06		|	113		|	 		|	30		|	200		|	 		|	54		|	357		|	 		|	78		|	634
07		|	115		|	 		|	31		|	205		|	 		|	55		|	365		|	 		|	79		|	649
08		|	118		|	 		|	32		|	210		|	 		|	56		|	374		|	 		|	80		|	665
09		|	121		|	 		|	33		|	215		|	 		|	57		|	383		|	 		|	81		|	681
10		|	124		|	 		|	34		|	221		|	 		|	58		|	392		|	 		|	82		|	698
11		|	127		|	 		|	35		|	226		|	 		|	59		|	402		|	 		|	83		|	715
12		|	130		|	 		|	36		|	232		|	 		|	60		|	412		|	 		|	84		|	732
13		|	133		|	 		|	37		|	237		|	 		|	61		|	422		|	 		|	85		|	750
14		|	137		|	 		|	38		|	243		|	 		|	62		|	432		|	 		|	86		|	768
15		|	140		|	 		|	39		|	249		|	 		|	63		|	442		|	 		|	87		|	787
16		|	143		|	 		|	40		|	255		|	 		|	64		|	453		|	 		|	88		|	806
17		|	147		|	 		|	41		|	261		|	 		|	65		|	464		|	 		|	89		|	825
18		|	150		|	 		|	42		|	267		|	 		|	66		|	475		|	 		|	90		|	845
19		|	154		|	 		|	43		|	274		|	 		|	67		|	487		|	 		|	91		|	866
20		|	158		|	 		|	44		|	280		|	 		|	68		|	499		|	 		|	92		|	887
21		|	162		|	 		|	45		|	287		|	 		|	69		|	511		|	 		|	93		|	909
22		|	165		|	 		|	46		|	294		|	 		|	70		|	523		|	 		|	94		|	931
23		|	169		|	 		|	47		|	301		|	 		|	71		|	536		|	 		|	95		|	953
24		|	174		|	 		|	48		|	309		|	 		|	72		|	549		|	 		|	96		|	976

The letter serves as a multiplier against the values above.
Letter	|	Multiplier
-----	| -----
Z	|	0.001
Y/R	|	0.01
X/S	|	0.1
A	|	1
B/H	|	10
C	|	100
D	|	1 000
E	|	10 000
F	|	100 000