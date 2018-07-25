---
title: "while i'm at it"
date: 2004-07-29 18:09:29 +1000
tags: legacy
redirect_from:
 - /blog/2004/07/while-im-it
 - /blog/while-im-it
---

Before I say what I'm about to say, I will point out for my uninformed readers - i am a computer geek.



Now that you have placed me into a box based on my personality, let me share with you, for a moment (well technically I have already shared, your just wasting your own time now), the joy of tricking stupid parsers.



A <a href="http://en.wikipedia.org/wiki/Parser">parser</a> is basically a computer program that uses a formal grammar (language rules) to break up some input to get something useful from it.



<a href="http://www.blogger.com">www.blogger.com</a> uses a parser to dump this blog in a pretty format. It parses a template page and replaces particular keywords with useful content. For example, &lt;$BlogPageTitle$&gt; will be replaced with the title 'inference'.



Every website has a &lt;body&gt; html tag in it, and the parser for this website uses this tag to insert an advert at the top of the page. It does it by placing its banner straight after it sees the &lt;body&gt; tag.



Now, I don't really want to see the ad. So I tricked the parser. What I did was add another &lt;body&gt; tag inside a comment tag before the original one like so:

&lt;!--

&lt;body&gt;

--&gt;

&lt;body&gt;



When the parser got to the first &lt;body&gt; tag it placed the banner ad code straight after it. But because this is inside a comment tag the browser ignores it - blocking the advert.



So now I don't have to cluter my blog with useless ads, and neither do you.



If the <em>powers that be</em> really wanted their advert to be shown they would add their code next to all &lt;body&gt; tags, or even check to make sure the one they are using isn't in a comment.



Weak grammars are fun to exploit. Exploiting weak grandmothers is probably illegal.

