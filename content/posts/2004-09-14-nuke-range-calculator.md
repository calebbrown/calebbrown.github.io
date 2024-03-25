---
slug: "nuke-range-calculator"
title: nuke range calculator.
date: 2004-09-14 21:33:59+10:00
tags:
- legacy
aliases:
- /blog/2004/09/nuke-range-calculator
- /blog/nuke-range-calculator
---

The nuke calculator as promised. I'm not sure what range the values are reasonably accurate within, but when I do figure it out. I'll post em.

<div id="nukeInsert">[nuke calculator loading...]</div>
<!-- nuclear calculator -->
<script src="/static/media/js/nukecalc.js" language="JavaScript"></script>
<!-- hack to get nuke calculator working -->
<script language="JavaScript" type="text/javascript">
<!--
calc = buildCalculator();
document.getElementById('nukeInsert').innerHTML = calc;
startCalculator();
//-->
</script>

Just in case you were wondering here are the different effects of the different pressures (from <a href="http://nuclearweaponarchive.org/Nwfaq/Nfaq5.html">this</a> site mention previously):
<ul><li>1 psi - Window glass shatters<br/>Light injuries from fragments occur.</li>
<li>3 psi - Residential structures collapse.<br/> Serious injuries are common, fatalities may occur.</li>
<li>5 psi   -  Most buildings collapse.<br/>Injuries are universal, fatalities are widespread.</li>
<li>10 psi  -   Reinforced concrete buildings are severely damaged or demolished.<br/>Most people are killed.</li>
<li>20 psi  -   Heavily built concrete buildings are severely damaged or demolished.<br/>Fatalities approach 100%.</li>
</ul>

<!--more--><br />[update]<br />I've revamped the js a bit so now it works much better. This app is used for calculating either the ranges in kilometers of the effects of a nuclear blast of a particular yeild in kilotons OR calculating the yeild necessary to acheive the range for a particular effect.
