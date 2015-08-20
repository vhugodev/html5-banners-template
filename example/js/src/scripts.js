/**
* Banner Definitions
*
* @author FCB Brasil (Developer -> Victor Hugo Odo)
* @section All
*/
var FCB_banner = {
	_vars : {
		_banner_format : 'superLeaderBoard3', //superLeaderBoard3, retanguloMedio, superBanner, sky
		_assets : {
			_loaded : false,
			_folder : 'img/',
			_images : ['ator1.png','ceu.jpg','data.png','estrada.gif','estrada.png','explode.gif','girl.png','montanha.png','moto_caida.png','motorista_caido.png','nome_tom.png','people_tom.png','tit_completo.png','titulo.png','titulo_2.png','tom.png']
		},
		_timeOut : null
	},
	_boilerplateCode : {
		PRELOAD : {
			loadStart : function(){
				console.log('loadStart');
				_this = this;
				clearTimeout(FCB_banner._vars._timeOut);
				FCB_banner._vars._timeOut = setTimeout(function(){
					console.log('FCB_banner._vars._timeOut = setTimeo');
					_this.minimumAssets();
				},500);
			},
			minimumAssets : function(){
				console.log('minimumAssets');
				if(!FCB_banner._vars._assets._loaded){
					this.loadImages(FCB_banner._vars._assets);
				}
			},
			loadImages : function(assets,current){
				var _this = this,
					current = current || 0,
					mImage = new Image();
					console.log('loading image: ' + assets._images[current]);
					

				mImage.onload = function(){
					console.log('mImage.onload');
					if(assets._images.length-1 != current){
						current++;
						_this.loadImages(assets,current);
					}else{
						FCB_banner._vars._assets._loaded = true;
						_this.removeLoading();
					}
				}
				mImage.src = FCB_banner._vars._assets._folder + assets._images[current];
			},
			removeLoading:function(pgRef){
				var parent = document.getElementById("FCB_canvas"),
					preloader = document.getElementById("FCB_preloader");
				parent.removeChild(preloader);

				FCB_banner._boilerplateCode.ANIMATION.init();

			}

		},
		ANIMATION : {
			init : function(){
				console.log('init');
				FCB_banner._boilerplateCode.SANDBOX.customContentAnimation();
			}
		},
		CALLTOACTION :{
			init : function(){
				console.log('init');
				var actionElement = document.getElementById("FCB_action");
				if (actionElement.addEventListener) {                    // For all major browsers, except IE 8 and earlier
					actionElement.addEventListener("click", FCB_banner._boilerplateCode.SANDBOX.clickTag);
					actionElement.addEventListener("mouseenter", FCB_banner._boilerplateCode.SANDBOX.mouseoverTrigger);
					actionElement.addEventListener("mouseout", FCB_banner._boilerplateCode.SANDBOX.mouseoutTrigger);
				} else if (actionElement.attachEvent) {                  // For IE 8 and earlier versions
					actionElement.attachEvent("onclick", FCB_banner._boilerplateCode.SANDBOX.clickTag);
					actionElement.attachEvent("onmouseover", FCB_banner._boilerplateCode.SANDBOX.mouseoverTrigger);
					actionElement.attachEvent("onmouseout", FCB_banner._boilerplateCode.SANDBOX.mouseoutTrigger);
				}
			}
		},

		SANDBOX : {
			clickTag : function(){
				console.log('clickTag');
				//Put here your clicktag action
			},
			mouseoverTrigger : function(){
				console.log('mouseoverTrigger');
				//Put here your hover event if exists
			},
			mouseoutTrigger : function(){
				console.log('mouseoutTrigger');
				//Put here your blur action
			},
			customContentAnimation : function(){
				console.log('customContentAnimation');
				render = Cq.combine(
				Cq.sequence(
					Cq.combine(
						Cq.combine(
							Cq.easeOut('frame1', 2000, { left: 0 }, { left: -75}),
							Cq.easeOut('frame1', 2000, { top: 200 }, { top: 150})
						),
						Cq.combine(
							Cq.linear('frame1_b', 10000, { left: -625 }, { left: 300}),
							Cq.linear('frame1_b', 10000, { top: 115 }, { top: 165}),
							Cq.linear('frame9', 300, { top: -50 }, { top: 50})
						),
						Cq.sequence(
							Cq.combine(
								Cq.linear('frame2', 1500, { right: -150 }, { right: 80}),
								Cq.easeOut('frame2', 2000, { top: 110 }, { top: 120})
							),
							Cq.linear('frame9', 500, { opacity: 1 }, { opacity: 0}),
							Cq.sequence(
								Cq.easeOut('frame10', 300, { left: 300 }, { left: 50}),
								Cq.easeOut('frame11', 500, { opacity: 0 }, { opacity: 1})
							),
							Cq.combine(
								Cq.easeOut('frame2', 700, { right: 80 }, { right: 20}),
								Cq.easeOut('frame2', 700, { top: 120 }, { top: 140}),
								Cq.easeIn('frame3', 700, { left: -70 }, { left: 70}),
								Cq.easeIn('frame3', 700, { top: 230 }, { top: 80})
							),
							Cq.combine(
								Cq.easeOut('frame3', 10, { opacity: 1 }, { opacity: 0}),
								Cq.easeOut('frame4', 10, { opacity: 0 }, { opacity: 1}),
								Cq.easeOut('frame5', 10, { opacity: 0 }, { opacity: 1}),
								Cq.sequence(
									Cq.combine(
										Cq.easeOut('frame5', 300, { top: 110 }, { top: -30}),
										Cq.linear('frame5', 300, { left: 110 }, { left: 500})
									),
									Cq.easeOut('frame6', 4000, { top: -250 }, { top: -50}),
									Cq.combine(
										Cq.easeOut('frame10', 500, { opacity: 1 }, { opacity: 0}),
										Cq.easeOut('frame11', 500, { opacity: 1 }, { opacity: 0})
									)
								),
								Cq.easeIn('frame4', 1400, { opacity: 1 }, { opacity: 0}),
								Cq.sequence(
									Cq.combine(
										Cq.easeOut('frame2', 4000, { right: 20 }, { right: 120}),
										Cq.easeOut('frame2', 4000, { top: 140 }, { top: 120})
									),
									Cq.combine(
										Cq.easeOut('frame2', 5000, { right: 120 }, { right: -30}),
										Cq.easeOut('frame2', 5000, { top: 120 }, { top: 280}),
										Cq.easeOut('frame7', 5000, { opacity: 0 }, { opacity: 1}),
										Cq.easeOut('frame12', 5000, { left: 300 }, { left: 195}),
										Cq.easeOut('frame13', 5000, { top: 200 }, { top: 100}),
										Cq.easeOut('frame8', 3000, { top: 220 }, { top: 23}),
										Cq.easeIn('frame14', 2000, { opacity: 0 }, { opacity: 1}),
										Cq.easeIn('frame15', 3000, { opacity: 0 }, { opacity: 1})
									),
									Cq.easeIn('frame1', 10, { opacity: 1 }, { opacity: 0})
								)
							)
						)
					)
				)
			);
			Cq.renderloop();
			}
		},
		INIT : function(){
			console.log('INIT');
			this.CALLTOACTION.init();
			this.PRELOAD.loadStart();
			console.log('INIT');
		}
	}
};
FCB_banner._boilerplateCode.INIT();