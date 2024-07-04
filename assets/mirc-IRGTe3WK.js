import{b as h}from"./antd-BmrhB3rb.js";import{r as g}from"./index-Byl3IXer.js";function v(s,l){for(var o=0;o<l.length;o++){const t=l[o];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in s)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(s,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}};(function(s,l){(function(o){o(g())})(function(o){o.defineMIME("text/mirc","mirc"),o.defineMode("mirc",function(){function t(e){for(var r={},$=e.split(" "),i=0;i<$.length;++i)r[$[i]]=!0;return r}var n=t("$! $$ $& $? $+ $abook $abs $active $activecid $activewid $address $addtok $agent $agentname $agentstat $agentver $alias $and $anick $ansi2mirc $aop $appactive $appstate $asc $asctime $asin $atan $avoice $away $awaymsg $awaytime $banmask $base $bfind $binoff $biton $bnick $bvar $bytes $calc $cb $cd $ceil $chan $chanmodes $chantypes $chat $chr $cid $clevel $click $cmdbox $cmdline $cnick $color $com $comcall $comchan $comerr $compact $compress $comval $cos $count $cr $crc $creq $crlf $ctime $ctimer $ctrlenter $date $day $daylight $dbuh $dbuw $dccignore $dccport $dde $ddename $debug $decode $decompress $deltok $devent $dialog $did $didreg $didtok $didwm $disk $dlevel $dll $dllcall $dname $dns $duration $ebeeps $editbox $emailaddr $encode $error $eval $event $exist $feof $ferr $fgetc $file $filename $filtered $finddir $finddirn $findfile $findfilen $findtok $fline $floor $fopen $fread $fserve $fulladdress $fulldate $fullname $fullscreen $get $getdir $getdot $gettok $gmt $group $halted $hash $height $hfind $hget $highlight $hnick $hotline $hotlinepos $ial $ialchan $ibl $idle $iel $ifmatch $ignore $iif $iil $inelipse $ini $inmidi $inpaste $inpoly $input $inrect $inroundrect $insong $instok $int $inwave $ip $isalias $isbit $isdde $isdir $isfile $isid $islower $istok $isupper $keychar $keyrpt $keyval $knick $lactive $lactivecid $lactivewid $left $len $level $lf $line $lines $link $lock $lock $locked $log $logstamp $logstampfmt $longfn $longip $lower $ltimer $maddress $mask $matchkey $matchtok $md5 $me $menu $menubar $menucontext $menutype $mid $middir $mircdir $mircexe $mircini $mklogfn $mnick $mode $modefirst $modelast $modespl $mouse $msfile $network $newnick $nick $nofile $nopath $noqt $not $notags $notify $null $numeric $numok $oline $onpoly $opnick $or $ord $os $passivedcc $pic $play $pnick $port $portable $portfree $pos $prefix $prop $protect $puttok $qt $query $rand $r $rawmsg $read $readomo $readn $regex $regml $regsub $regsubex $remove $remtok $replace $replacex $reptok $result $rgb $right $round $scid $scon $script $scriptdir $scriptline $sdir $send $server $serverip $sfile $sha1 $shortfn $show $signal $sin $site $sline $snick $snicks $snotify $sock $sockbr $sockerr $sockname $sorttok $sound $sqrt $ssl $sreq $sslready $status $strip $str $stripped $syle $submenu $switchbar $tan $target $ticks $time $timer $timestamp $timestampfmt $timezone $tip $titlebar $toolbar $treebar $trust $ulevel $ulist $upper $uptime $url $usermode $v1 $v2 $var $vcmd $vcmdstat $vcmdver $version $vnick $vol $wid $width $wildsite $wildtok $window $wrap $xor"),a=t("abook ajinvite alias aline ame amsg anick aop auser autojoin avoice away background ban bcopy beep bread break breplace bset btrunc bunset bwrite channel clear clearall cline clipboard close cnick color comclose comopen comreg continue copy creq ctcpreply ctcps dcc dccserver dde ddeserver debug dec describe dialog did didtok disable disconnect dlevel dline dll dns dqwindow drawcopy drawdot drawfill drawline drawpic drawrect drawreplace drawrot drawsave drawscroll drawtext ebeeps echo editbox emailaddr enable events exit fclose filter findtext finger firewall flash flist flood flush flushini font fopen fseek fsend fserve fullname fwrite ghide gload gmove gopts goto gplay gpoint gqreq groups gshow gsize gstop gtalk gunload hadd halt haltdef hdec hdel help hfree hinc hload hmake hop hsave ial ialclear ialmark identd if ignore iline inc invite iuser join kick linesep links list load loadbuf localinfo log mdi me menubar mkdir mnick mode msg nick noop notice notify omsg onotice part partall pdcc perform play playctrl pop protect pvoice qme qmsg query queryn quit raw reload remini remote remove rename renwin reseterror resetidle return rlevel rline rmdir run ruser save savebuf saveini say scid scon server set showmirc signam sline sockaccept sockclose socklist socklisten sockmark sockopen sockpause sockread sockrename sockudp sockwrite sound speak splay sreq strip switchbar timer timestamp titlebar tnick tokenize toolbar topic tray treebar ulist unload unset unsetall updatenl url uwho var vcadd vcmd vcrem vol while whois window winhelp write writeint if isalnum isalpha isaop isavoice isban ischan ishop isignore isin isincs isletter islower isnotify isnum ison isop isprotect isreg isupper isvoice iswm iswmcs elseif else goto menu nicklist status title icon size option text edit button check radio box scroll list combo link tab item"),d=t("if elseif else and not or eq ne in ni for foreach while switch"),m=/[+\-*&%=<>!?^\/\|]/;function p(e,r,$){return r.tokenize=$,$(e,r)}function c(e,r){var $=r.beforeParams;r.beforeParams=!1;var i=e.next();if(/[\[\]{}\(\),\.]/.test(i))return i=="("&&$?r.inParams=!0:i==")"&&(r.inParams=!1),null;if(/\d/.test(i))return e.eatWhile(/[\w\.]/),"number";if(i=="\\")return e.eat("\\"),e.eat(/./),"number";if(i=="/"&&e.eat("*"))return p(e,r,k);if(i==";"&&e.match(/ *\( *\(/))return p(e,r,b);if(i==";"&&!r.inParams)return e.skipToEnd(),"comment";if(i=='"')return e.eat(/"/),"keyword";if(i=="$")return e.eatWhile(/[$_a-z0-9A-Z\.:]/),n&&n.propertyIsEnumerable(e.current().toLowerCase())?"keyword":(r.beforeParams=!0,"builtin");if(i=="%")return e.eatWhile(/[^,\s()]/),r.beforeParams=!0,"string";if(m.test(i))return e.eatWhile(m),"operator";e.eatWhile(/[\w\$_{}]/);var f=e.current().toLowerCase();return a&&a.propertyIsEnumerable(f)?"keyword":d&&d.propertyIsEnumerable(f)?(r.beforeParams=!0,"keyword"):null}function k(e,r){for(var $=!1,i;i=e.next();){if(i=="/"&&$){r.tokenize=c;break}$=i=="*"}return"comment"}function b(e,r){for(var $=0,i;i=e.next();){if(i==";"&&$==2){r.tokenize=c;break}i==")"?$++:i!=" "&&($=0)}return"meta"}return{startState:function(){return{tokenize:c,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)}}})})})();var u=w.exports;const y=h(u),P=v({__proto__:null,default:y},[u]);export{P as m};
