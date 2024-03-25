---
slug: "exception-handling"
title: Exception handling
date: 2007-05-11 00:25:03+10:00
tags:
- legacy
aliases:
- /blog/2007/05/exception-handling
- /blog/exception-handling
---

The digital age, with its intanets, computamigies and webs is now truly apart of our lives and we seem to be dealing alright with it. We do our homework on computers, we talk to friends on our mobile phones, and we cook our bread in computerised toasters.

But despite our hard work digital doesn't really fit with humans. I think this comes down to two facts:

 1. the digital age is inherently <a href="http://en.wikipedia.org/wiki/Discrete_mathematics">discrete</a> (mathematically) in its representation of things - it doesn't deal very well with <a href="http://en.wikipedia.org/wiki/Fuzzy_set">fuzzy areas</a>. e.g. when describing the <a href="http://www.bom.gov.au/weather/">weather</a> at what temperature does it go from being 'warm' to being 'cold'?
 2. it depends on software to be written thoroughly, with every possible exceptional circumstance taken into account, or failing nicely when something goes wrong - something rarely acheived. Every crash, or lost Word document is proof that this is the case

Because there is this disharmony between man and machine, there exist points where things can go wrong. As the digital machines are pushed to fit into a human world, all the exceptional circumstances that we happily tolerate need to be precisely defined and programmed into the machines. But there are many exceptions, and programmers really aren't that smart, so quite often these exceptions aren't handled correctly everywhere. These <i>bugs</i> usually sit dormant, waiting for an unsuspecting person to come along and enter the piece of information that causes the beast to fail.

These exceptions are fairly common. For example <a href="http://en.wikipedia.org/wiki/Leap_year">some years</a> have more days than other years, some months have more days than others. Midnight in <a href="http://en.wikipedia.org/wiki/Greenwich">Greenwich</a>, England is not the same time as Midnight in Sydney, Australia. Some postcodes have letters in them. Entering a zero into a form can often mean the same thing as entering nothing. They are everywhere.

For the mischievous amongst us this disharmony can be exploited. One simple thing to do is to only ever subscribe to a service on the 31st day of any month that has one. The good companies will process your bill sensibly, the bad companies might behave like the monthly recurring events in <a href="http://www.apple.com/macosx/features/ical/">iCal</a> where they don't appear at all in months with fewer than 31 days. You could also have fun at work and after having a meeting on the 31st of May say that you'll have another exactly a month from today.

The challenge is to find the everyday exceptions and start messing around with them. Test the boundary values. Try and break systems by feeding them seemingly normal data they cannot cope with. Stuff around a bit and break it. In the end the machines that deal with your mischief may cope as well as humans do, but every now and then you'll hit the jackpot and make someone a little red faced.<!--more-->
