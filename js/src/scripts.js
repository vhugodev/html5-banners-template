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
			_folder : '', //Your image's folder
			_images : [] //Your images
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
				//Put your custom Animations
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