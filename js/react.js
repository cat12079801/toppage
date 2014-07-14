// マウスオーバーon時の処理関数
function mouse_on(this_obj, rad){
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
function mouse_off(this_obj, rad){
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
	clicked = true;
	this_obj.find(".ball").stop().animate({
		top: 0,
		left: 0,
	}, 1500);
}
