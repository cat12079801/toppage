var fadeIned = false;

$(function(){
	var height = $("#wrapper").height();
	var width = $("#wrapper").width();
	var shorter = height < width ? height : width;

	ballResize();
	$(".ball").offset({top:-1*$(this).height(), left:-1*$(this).width()})
	$("#mainBall").offset({top:-1*$(this).height(), left:-1*$(this).width()})
	init();
	$(window).resize(function(){
		ballResize();
	});

	$(".ball").hover(function(){
		if($(this).opacity != 1){
			$(this).fadeTo(300, 1);
		}
		if(fadeIned == true){
			switch($(this).attr("id")){
				case "firstBall":
					mouse_on($(this), 12);
					break;
				case "secondBall":
					mouse_on($(this), 34);
					break;
				case "thirdBall":
					mouse_on($(this), 56);
					break;
				case "fourthBall":
					mouse_on($(this), 78);
					break;
			}
		}
	},function(){
		switch($(this).attr("id")){
			case "firstBall":
				mouse_off($(this), 12);
				break;
			case "secondBall":
				mouse_off($(this), 34);
				break;
			case "thirdBall":
				mouse_off($(this), 56);
				break;
			case "fourthBall":
				mouse_off($(this), 78);
				break;
		}
	});
});

function mouse_on(this_obj, rad){
	// .stop() でアニメーションが狂わなくなる
	this_obj.stop().animate({
		// shorter*0.1 大きくなる分の半分ずらす
		top: shorter*0.8*sin(rad)-shorter*0.2/2 - shorter*0.05 + "px",
		left: shorter*0.8*cos(rad)-shorter*0.2/2 - shorter*0.05 + "px",
		width: shorter*0.3 + "px",
		height: shorter*0.3 + "px"
	},150);
}

function mouse_off(this_obj, rad){
	this_obj.stop().animate({
		top: shorter*0.8*sin(rad)-shorter*0.2/2 + "px",
		left: shorter*0.8*cos(rad)-shorter*0.2/2 + "px",
		width: shorter*0.2 + "px",
		height: shorter*0.2 + "px"
	},150);
}

function init(){
	color = new Array();
	color = {
		0: "vivid/1.png",
		1: "vivid/2.png",
		2: "vivid/3.png",
		3: "vivid/4.png",
		4: "vivid/5.png",
		5: "vivid/6.png",
		6: "vivid/7.png",
		7: "vivid/8.png",
		8: "vivid/9.png",
		9: "vivid/10.png",
		10:"vivid/11.png",
		11:"vivid/12.png"
	};

	var unique = new Array();
	for(var loop = 0 ; loop < 5 ;){
		unique[loop] = Math.floor(Math.random()*12);
		for(var i = 0 ; i < loop ; i++){
			if(unique[loop] == unique[i]){
				loop--;
				break;
			}
		}
		loop++;
	}

	$("#mainBall"  ).attr("src", color[unique[0]]);
	$("#firstBall" ).attr("src", color[unique[1]]);
	$("#secondBall").attr("src", color[unique[2]]);
	$("#thirdBall" ).attr("src", color[unique[3]]);
	$("#fourthBall").attr("src", color[unique[4]]);

	$("#mainBall").fadeTo(0, 1);
	$("#mainBall").animate({
		"top": -1*shorter*0.6,
		"left": -1*shorter*0.6
	},{
		"duration": 1000,
		"easing": "swing",
		"complete": function(){
			$(".ball").fadeTo(1000, 1);
			ballResize();
			setTimeout(function(){
				fadeIned = true;
			},500);
			$(".initial").fadeTo(1000, 1);
			ballResize();
			setTimeout(function(){
				fadeIned = true;
			},500);
		}
	});
}

function ballResize(){
	height = $("#wrapper").height();
	width = $("#wrapper").width();
	shorter = height < width ? height : width;
	$(".initial").css("fontSize", shorter/8+"px");

	$("#mainBall").each(function(){
		// 大きさの調整はなんとなく好みで
		$(this).height(shorter*1.2);
		$(this).width(shorter*1.2);
		// 大きさの半分を引いて左上を中心に
		$(this).offset({top:-1*shorter*0.6, left:-1*shorter*0.6});
	});
	$("#firstBall").each(function(){
		// イニシャルを置く
		$("#A").each(function(){
			$(this).offset({
				top:shorter*0.8*sin(12)-$(this).css("font-size").replace("px","")/2,
				left:shorter*0.8*cos(12)-$(this).css("font-size").replace("px","")/2,
			});
			console.log($(this).css("font-size"));
		});
		$(this).height(shorter*0.2);
		$(this).width(shorter*0.2);
		$(this).offset({
			// sin()までで円弧上の座標、そこから画像の半分を引く
			top:shorter*0.8*sin(12)-shorter*0.2/2,
			left:shorter*0.8*cos(12)-shorter*0.2/2
		});
	});
	$("#secondBall").each(function(){
		$("#C").each(function(){
			$(this).offset({
				top:shorter*0.8*sin(34)-$(this).css("font-size").replace("px","")/2,
				left:shorter*0.8*cos(34)-$(this).css("font-size").replace("px","")/2*0.8,
			});
			console.log($(this).css("font-size"));
		});
		$(this).height(shorter*0.2);
		$(this).width(shorter*0.2);
		$(this).offset({
			top:shorter*0.8*sin(34)-shorter*0.2/2,
			left:shorter*0.8*cos(34)-shorter*0.2/2
		});
	});
	$("#thirdBall").each(function(){
		$("#P").each(function(){
			$(this).offset({
				top:shorter*0.8*sin(56)-$(this).css("font-size").replace("px","")/2,
				left:shorter*0.8*cos(56)-$(this).css("font-size").replace("px","")/2,
			});
			console.log($(this).css("font-size"));
		});
		$(this).height(shorter*0.2);
		$(this).width(shorter*0.2);
		$(this).offset({
			top:shorter*0.8*sin(56)-shorter*0.2/2,
			left:shorter*0.8*cos(56)-shorter*0.2/2
		});
	});
	$("#fourthBall").each(function(){
		$("#N").each(function(){
			$(this).offset({
				top:shorter*0.8*sin(78)-$(this).css("font-size").replace("px","")/2,
				left:shorter*0.8*cos(78)-$(this).css("font-size").replace("px","")/2*0.7,
			});
			console.log($(this).css("font-size"));
		});
		$(this).height(shorter*0.2);
		$(this).width(shorter*0.2);
		$(this).offset({
			top:shorter*0.8*sin(78)-shorter*0.2/2,
			left:shorter*0.8*cos(78)-shorter*0.2/2
		});
	});

}

function sin(x){
	return Math.sin(x*Math.PI/180);
}
function cos(x){
	return Math.cos(x*Math.PI/180);
}
