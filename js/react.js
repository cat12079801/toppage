// マウスオーバーon時の処理関数
function mouseOn(this_obj, rad){
	// .stop() でアニメーションが狂わなくなる
	this_obj.find(".ball").stop().animate({
		// shorter/10 大きくなる分の半分ずらす
		top: shorter*0.8*sin(rad) - shorter/10 - shorter/10/2 + "px",
		left: shorter*0.8*cos(rad) - shorter/10 - shorter/10/2 + "px",
		width: shorter*0.3 + "px",
		height: shorter*0.3 + "px"
	},300);
	// largeFont サイズになるから位置調整等
	var largeFont = shorter/5;
	this_obj.find(".initial").stop().animate({
		fontSize:largeFont+"px",
		top:shorter*0.8*sin(rad)+largeFont/2*adjustY[rad] + "px",
		left:shorter*0.8*cos(rad)+largeFont/2*adjustX[rad] + "px",
	},300);
	this_obj.find(".text").each(function(){
		$(this).offset({
			top:shorter*0.8*sin(rad)+$(this).css("font-size").replace("px","")/2*adjustY2[rad],
			left:shorter*0.8*cos(rad)-$(this).css("font-size").replace("px","")*adjustX2[rad],
		});
	});
	this_obj.find(".text").stop().animate({
		top:shorter*0.8*sin(rad)+this_obj.find(".text").css("font-size").replace("px","")/2*adjustY2[rad],
		left:shorter*0.8*cos(rad)+this_obj.find(".text").css("font-size").replace("px","")/2*adjustX2[rad],
		opacity: 1
	},300);
}

// マウスオーバーoff時の処理関数
function mouseOff(this_obj, rad){
	this_obj.find(".ball").stop().animate({
		top: shorter*0.8*sin(rad)-shorter*0.2/2 + "px",
		left: shorter*0.8*cos(rad)-shorter*0.2/2 + "px",
		width: shorter*0.2 + "px",
		height: shorter*0.2 + "px"
	},1200);
	this_obj.find(".initial").stop().animate({
		fontSize:shorter/8+"px",
		top:shorter*0.8*sin(rad)+shorter/8/2*adjustY[rad],
		left:shorter*0.8*cos(rad)+shorter/8/2*adjustX[rad],
	},1200);
	this_obj.find(".text").stop().animate({
		top:shorter*0.8*sin(rad)+this_obj.find(".text").css("font-size").replace("px","")/2*adjustY2[rad],
		left:shorter*0.8*cos(rad)-this_obj.find(".text").css("font-size").replace("px","")*adjustX2[rad],
		opacity: 0
	},{
		"duration": 1000,
		"complete": function(){
			this_obj.find(".text").offset({
				top: -99999,
				left: -99999
			});
		}
	});
}

// クリック時の処理関数
function clicked(this_obj, rad){
	clickedFlag = true;
	this_obj.find(".ball").stop().animate({
		"width": shorter*1.2,
		"height": shorter*1.2,
		"top": -1*shorter*0.6,
		"left": -1*shorter*0.6
		/*
		top: shorter/30,
		left: shorter/30,
		*/
	}, 1500);

	var largeFont = shorter / 5;
	this_obj.find(".initial").stop().animate({
		top: shorter/30 + largeFont/2*adjustY[rad] + shorter/10 + shorter/10/2,
		left: shorter/30 + largeFont/2*adjustX[rad] + shorter/10 + shorter/10/2,
	}, 1500);

	this_obj.find(".text").stop().animate({
		top: shorter/30 + this_obj.find(".text").css("font-size").replace("px","")/2*adjustY2[rad] + shorter/10 + shorter/10/2,
		left: shorter/30 + this_obj.find(".text").css("font-size").replace("px","")/2*adjustX2[rad] + shorter/10 + shorter/10/2,
	}, 1500);

	$(".chunk").not(this_obj).stop().animate({
		opacity: 0,
	},{
		"duration": 1500,
		"complete": function(){
			$(".chunk").not(this_obj).offset({
				top: -99999,
				left: -99999
			});
		}
	});
}

// ぬこ画像クリックして元に戻る処理
function catClicked(){
	$("#mainBall").offset({top:-1*shorter*0.6, left:-1*shorter*0.6})
	$("#main").stop().fadeTo(1500, 1);
	mouseOff($("#first"), 12);
	mouseOff($("#second"), 34);
	mouseOff($("#third"), 56);
	mouseOff($("#fourth"), 78);
	$("#first").stop().fadeTo(1500, 1);
	$("#second").stop().fadeTo(1500, 1);
	$("#third").stop().fadeTo(1500, 1);
	$("#fourth").stop().fadeTo(1500, 1);
	fadeInedFlag = false;
	clickedFlag = false;
}
