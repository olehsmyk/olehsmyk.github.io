function e(t){var e="https://stats.nba.com/stats/leaguestandingsv3?LeagueID=00&Season="+t+"&SeasonType=Regular+Season&callback=?";$.ajax({url:e,type:"GET",dataType:"json",data:{param1:"value1"}}).done(function(){$.getJSON(e,function(t){var l=0,o=0;$.each(t,function(t,e){"resource"==t||("parameters"==t?$.each(e,function(t,e){}):"resultSets"==t&&$.each(e,function(t,e){$.each(e,function(t,e){"name"==t||("headers"==t?$.each(e,function(t,e){}):"rowSet"==t&&$.each(e,function(t,e){var a="",n="",d="",s="",i="",c="";new Array;$.each(e,function(t,e){3==t&&(a=e),4==t&&(n=e),12==t&&(d=e),13==t&&(s=e),14==t&&(i=e),5==t&&(c=e),14==t&&("East"==c?(document.getElementById(l+"_e").innerHTML="<td>"+(l+1)+'</td><td class="td__team"><img src="./img/team/'+n+'.svg">'+a+" "+n+"</td><td>"+d+"</td><td>"+s+"</td><td>"+i+"</td>",l++):"West"==c&&(document.getElementById(o+"_w").innerHTML="<td>"+(o+1)+'</td><td class="td__team"><img src="./img/team/'+n+'.svg">'+a+" "+n+"</td><td>"+d+"</td><td>"+s+"</td><td>"+i+"</td>",o++))})}))})}))})})})}var a="2019-20";e(a),$(document).ready(function(){$(".years-btn").click(function(t){t.preventDefault(),a!==""+t.target.id&&($(".years-btn").removeClass("btn-active"),$("#"+t.target.id).addClass("btn-active"),a=t.target.id,function(){for(i=0;i<15;i++)document.getElementById(i+"_e").innerHTML="<td>"+(i+1)+'</td><td class="td__team"></td><td></td><td></td><td></td>',document.getElementById(i+"_w").innerHTML="<td>"+(i+1)+'</td><td class="td__team"></td><td></td><td></td><td></td>'}(),e(a))}),$("#west_table").show(),$("#east_table").hide(),$("#west_btn").click(function(t){t.preventDefault(),$("#west_table").is(":visible")||($("#east_table").hide(),$("#west_table").show(),$("#east_btn").removeClass("btn-active"),$("#west_btn").addClass("btn-active"))}),$("#east_btn").click(function(t){t.preventDefault(),$("#east_table").is(":visible")||($("#west_table").hide(),$("#east_table").show(),$("#west_btn").removeClass("btn-active"),$("#east_btn").addClass("btn-active"))})});