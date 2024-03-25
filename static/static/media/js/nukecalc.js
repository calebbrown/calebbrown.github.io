/*
    nukecalc.js
    version: 0.2
    Copyright 2004 Caleb Brown.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

function rangeCalc(yeild, power, multiplier) {
    return Math.pow(yeild, power) * multiplier;
}

function yeildCalc(range, power, multiplier) {
    return Math.pow((range / multiplier),(1.0/power));
}

function feildChange(field, power, multiplier) {
    if(field != document.forms.nuke.yeild) {
        range = parseFloat(field.value) + 0.0;    
        document.forms.nuke.yeild.value = yeildCalc(range, power, multiplier);
    }

     yeild = parseFloat(document.forms.nuke.yeild.value) + 0.0;

    if(field != document.forms.nuke.range_psi1) {
        document.forms.nuke.range_psi1.value = rangeCalc(yeild, 0.33, 2.2);
    }
    if(field != document.forms.nuke.range_psi3) {
        document.forms.nuke.range_psi3.value = rangeCalc(yeild, 0.33, 1.0);
    }
    if(field != document.forms.nuke.range_psi5) {
        document.forms.nuke.range_psi5.value = rangeCalc(yeild, 0.33, 0.71);
    }
    if(field != document.forms.nuke.range_psi10) {
        document.forms.nuke.range_psi10.value = rangeCalc(yeild, 0.33, 0.45);
    }
    if(field != document.forms.nuke.range_psi20) {
        document.forms.nuke.range_psi20.value = rangeCalc(yeild, 0.33, 0.28);
    }

    if(field != document.forms.nuke.range_1st) {
        document.forms.nuke.range_1st.value = rangeCalc(yeild, 0.38, 1.20);
    }
    if(field != document.forms.nuke.range_2nd) {
        document.forms.nuke.range_2nd.value = rangeCalc(yeild, 0.40, 0.87);
    }
    if(field != document.forms.nuke.range_3rd) {
        document.forms.nuke.range_3rd.value = rangeCalc(yeild, 0.41, 0.67);
    }
}

function formHandler() {
    return False;
}



function buildCalculator() {
    calculator = "\
<form name=\"nuke\" onSubmit=\"formHandler()\">\
<table style=\"font-family: Helvetica, sans-serif; background-color:#DDDDFF; border: thin solid #333366\" cellspacing=\"0\">\
<tr style=\"background-color:#AAAAFF\" >\
    <td style=\"padding: 4px\" colspan=\"4\">yeild (kilotons)</td>\
    <td style=\"padding: 4px\" colspan=\"2\" align=\"right\"><input type=\"text\" name=\"yeild\" value=\"20000\" size=\"8\" onKeyUp=\"feildChange(document.forms.nuke.yeild,0,0)\" /></td>\
</tr>\
<tr>\
    <td style=\"padding: 5px\" colspan=\"6\"></td>\
</tr>\
<tr>\
    <td style=\"background-color:#4444FF; color:white; padding: 4px\" colspan=\"6\" align=\"center\">ranges (kms)</td>\
</tr>\
<tr>\
    <td style=\"background-color:#8888FF; padding: 4px\" rowspan=\"5\" valign=\"top\">psi</td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >1</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_psi1\" onKeyUp=\"feildChange(document.forms.nuke.range_psi1,0.33,2.2)\"/></td>\
    <td style=\"background-color:#8888FF; padding: 4px\" rowspan=\"5\" valign=\"top\">burns</td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >1st</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_1st\" onKeyUp=\"feildChange(document.forms.nuke.range_1st,0.38,1.20)\"/></td>\
</tr>\
<tr>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >3</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_psi3\" onKeyUp=\"feildChange(document.forms.nuke.range_psi3,0.33,1.0)\"/></td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >2nd</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_2nd\" onKeyUp=\"feildChange(document.forms.nuke.range_2nd,0.40,0.87)\"/></td>\
</tr>\
<tr>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >5</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_psi5\" onKeyUp=\"feildChange(document.forms.nuke.range_psi5,0.33,0.71)\"/></td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >3rd</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_3rd\" onKeyUp=\"feildChange(document.forms.nuke.range_3rd,0.41,0.67)\"/></td>\
</tr>\
<tr>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >10</td>\
    <td style=\"padding: 4px 4px 0px 4px\"><input type=\"text\" size=\"5\" name=\"range_psi10\" onKeyUp=\"feildChange(document.forms.nuke.range_psi10,0.33,0.45)\"/></td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\">&nbsp;</td><td>&nbsp;</td>\
</tr>\
<tr>\
    <td style=\"background-color:#AAAAFF; padding: 4px\" >20</td>\
    <td style=\"padding: 4px 4px 4px 4px\"><input type=\"text\" size=\"5\" name=\"range_psi20\" onKeyUp=\"feildChange(document.forms.nuke.range_psi20,0.33,0.28)\"/></td>\
    <td style=\"background-color:#AAAAFF; padding: 4px\">&nbsp;</td><td style=\"padding: 4px; text-align:right\" >v0.2</td>\
</tr>\
</table>\
</form>";

    return calculator;
}

function startCalculator() {
    feildChange(document.forms.nuke.yeild,0,0);
}