# Fiskur Translator
by xela

assisted by  qerionx

Hi! This is a translator for a secret language that I made... Maybe I will explain
how the language works in the future but for now you can make guesses hehe.

## How to use / What it does

To run the **web version** of the translators, simply navigate to the `html-version` directory and type this in your terminal:
```
npx http-server . -p 8080
```
Then, visit `localhost:8080` in your browser. **Node.js must be installed for this to work.**

When using the Yukoshi tab, if you want to translate something from Latin characters and/or symbols, use the `use normal yukoshi` button. Otherwise if you're translating from Yukoshi back to Latin characters and/or symbols use the `reverse yukoshi` button.
<hr></hr>

If you want to run this in **VS code**, use Node.js and run `node fiskur.js`, `node yukoshi.js`, or 
`node reverseYukos.js` in your terminal depending on which version you want to use.

<hr></hr>

**NOTE:** You can only use Latin characters and the following symbols: , . ! ? ' " = - _ ( ) : ; / \ > < and <3 

This project asks the user to type in text they'd like to translate
and then it returns a translated text. Fiskur only goes one way and can
NOT translate from Fiskur -> English/Latin characters. I'm going to work on that but for now it only
goes one way. Yukoshi can go back and forth, though it does not include capitalization.


**Special cases:** "i love you", "i love u"*, "ily", "fiskur" 

**When translating from Yukoshi back to Latin characters and symbols "i love u" will be*
 *translated to "i love you" instead.*

These are just words/phrases that
don't follow the pattern of the language. They have their own special meanings, which
lead me to giving them their own "words" that you wouldn't be able to translate using
the normal pattern of the language.


## Less Important Remarks / Background

<p>I initially made this language because I wanted a cool way to write things down without
anyone else being able to read it. Once I had an idea on how I wanted the language to
work, I started practice writing it down on paper. Once I was comfortable with writing
in the language, I realized that it takes awhile to write down. At the time I was in 
the middle of learning Java, so I decided I'd try making a translator. It didn't take
that long to make, but it was because technically it only followed half of the language. 
In the script you can see that there's a randomOrder function. Basically, without trying
to reveal how the language works, the randomization wasn't *needed* but it played a  
big role in the language and I didn't include it in the program. At the time I wasn't  
really sure how to add that to the program, so I had just left it at that. The Java
program I made also worked in a super inefficient/tedious way, so I wasn't really
in the mood to try making the program messier than it already was.</p>

Some time passed and I decided I wanted to continue programming stuff for fun, so
I thought I'd finally learn HTML, CSS, and JS since they all go together.
(Note that I also mainly learned it because I wanted to be able to do web design and
development with my friend)

Since I didn't really want to do a course or just take notes and stuff, I decided I
would just start learning by making my translator in JS. Lemme just say, coding in
JS felt like a blessing after making stuff in Java for so long LOL. But yeah, that's
pretty much how I got here.

Technically only 3 people who know the language can test to see if there's any
inaccuracies (like 3 people know how it works but I'm
pretty much the only one that **KNOWS** it ...lol) but if you see anything wrong or worth pointing out feel free to let
me know :D

Thanks for reading/checking this out!! 
-*xela*