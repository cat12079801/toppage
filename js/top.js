var fadeIned = false;
// adjustX,Y はイニシャルの位置調整用
var adjustX = {
	12: -1.3,
	34: -0.8,
	56: -0.65,
	78: -0.8
};
var adjustY = {
	12: -1.3,
	34: -1.2,
	56: -1.2,
	78: -1.3
}
// adjustX2,Y2 はテキストの位置調整用
var adjustX2 = {
	12: 1,
	34: 0.75,
	56: 0.7,
	78: 1
};
var adjustY2 = {
	12: -0.8,
	34: -0.6,
	56: -0.6,
	78: -0.85
}

$(function(){
	var height = $("#wrapper").height();
	var width = $("#wrapper").width();
	var shorter = height < width ? height : width;

	//初期化
	ballResize();
	$(".ball").offset({top:-1*$(this).height(), left:-1*$(this).width()})
	$("#mainBall").offset({top:-1*$(this).height(), left:-1*$(this).width()})
	init();
	$(window).resize(function(){
		ballResize();
	});

	// マウスオーバー時の処理
	$(".chunk").hover(function(){
		if(fadeIned == true){
			$(".chunk").hover(function(){
				switch($(this).children(".ball").attr("id")){
					case "firstBall":
						mouse_on($(this).children(".ball"), 12);
						break;
					case "secondBall":
						mouse_on($(this).children(".ball"), 34);
						break;
					case "thirdBall":
						mouse_on($(this).children(".ball"), 56);
						break;
					case "fourthBall":
						mouse_on($(this).children(".ball"), 78);
						break;
				}
			},function(){
				switch($(this).children(".ball").attr("id")){
					case "firstBall":
						mouse_off($(this).children(".ball"), 12);
						break;
					case "secondBall":
						mouse_off($(this).children(".ball"), 34);
						break;
					case "thirdBall":
						mouse_off($(this).children(".ball"), 56);
						break;
					case "fourthBall":
						mouse_off($(this).children(".ball"), 78);
						break;
				}
			});
		}
	});

	// クリック時の処理
	$(".chunk").click(function(){
		console.log($(this).attr("id"));
		switch($(this).attr("id")){
			case "first":
				clicked($(this), 12);
				break;
			case "second":
				clicked($(this), 34);
				break;
			case "third":
				clicked($(this), 56);
				break;
			case "fourth":
				clicked($(this), 78);
				break;
		}
	});
});

function init(){
	fadeTime = 1500;
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
			$(".ball").fadeTo(fadeTime, 1);
			$(".initial").fadeTo(fadeTime, 1);
			ballResize();
			setTimeout(function(){
				fadeIned = true;
			},fadeTime);
		}
	});
}

function ballResize(){
	height = $("#wrapper").height();
	width = $("#wrapper").width();
	shorter = height < width ? height : width;
	$(".initial").css("fontSize", shorter/8+"px");
	$(".text").css("fontSize", shorter/8+"px");

	$("#mainBall").each(function(){
		// 大きさの調整はなんとなく好みで
		$(this).height(shorter*1.2);
		$(this).width(shorter*1.2);
		// 大きさの半分を引いて左上を中心に
		$(this).offset({top:-1*shorter*0.6, left:-1*shorter*0.6});
	});
	// 小さいボールとその上の文字をリサイズ、リプレース
	// 3,4引数はX,Yの位置調整の倍率なのでデフォルトが1
	resize($("#firstBall"), 12, 1, 0.9);
	resize($("#secondBall"), 34, 0.8, 0.8);
	resize($("#thirdBall"), 56, 0.9, 0.9);
	resize($("#fourthBall"), 78, 0.7, 1);
}

//リサイズ、リプレースする関数
function resize(this_obj, rad){
	this_obj.each(function(){
		// イニシャルを置く
		$(this).siblings(".initial").each(function(){
			$(this).offset({
				top:shorter*0.8*sin(rad)+$(this).css("font-size").replace("px","")/2*adjustY[rad],
				left:shorter*0.8*cos(rad)+$(this).css("font-size").replace("px","")/2*adjustX[rad],
			});
		});
		$(this).siblings(".text").each(function(){
			$(this).offset({
				top: -99999,
				left: -99999,
			});
		});
		this_obj.height(shorter*0.2);
		this_obj.width(shorter*0.2);
		this_obj.offset({
			// sin()までで円弧上の座標、そこから画像の半分を引く
			top:shorter*0.8*sin(rad)-shorter*0.2/2,
			left:shorter*0.8*cos(rad)-shorter*0.2/2
		});
	});
}

function sin(x){
	return Math.sin(x*Math.PI/180);
}
function cos(x){
	return Math.cos(x*Math.PI/180);
}
