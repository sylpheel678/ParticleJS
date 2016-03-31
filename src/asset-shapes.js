(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGkVIFGIkIp/AHg");
	this.shape.setTransform(0,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-34.8,64,55.7);
p.frameBounds = [rect];


(lib.star_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqC2IibBvIA5i/IizAAIB7hfIhzhcICggCIhAivICiBkIA1iaIAsCOICGhjIgwC9ICtAFIhpBQIB6BTIjBAKIA2DLIiFhiIgiB2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-31.7,64,63.6);
p.frameBounds = [rect];


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACsIjICPIBIjyIi/iYIDygDIBPjtIBODvIDwAIIjBCSIBCD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("Ak/k/IJ/AAIAAJ/Ip/AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect];


(lib.sakura = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3C9QgzhbAAiAQAAh/AzhcIATgfIBlBaIBnhVQAJAMAIANQAyBdAAB/QAACAgzBbQg0BbhEABQhFAAgyhcg");
	this.shape.setTransform(0.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-25.3,34.3,56.3);
p.frameBounds = [rect];


(lib.reverse_blur_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AFAAAQAACEhfBdQhcBfiFAAQiDAAhfhfQhdhdAAiEQAAiEBdheQBfhdCDAAQCFAABcBdQBfBeAACEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect];


(lib.kirakira2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBfQgmhfg5AAQA5gBAmhhQAmhcAAiBQABCBAmBcQAoBhA3ABQg3AAgoBfQgmBegBCDQAAiDgmheg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.4,-32,26.8,64);
p.frameBounds = [rect];


(lib.kirakira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfBcQhdhciDAAQCDgBBdheQBeheABiCQAACCBeBeQBeBeCEABQiEAAheBcQheBgAACEQgBiEhehgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIBjIgvhAQgWgigPgeQgPghgKgfQgKgjAAgfQAAglAQgdQANgcAagTQAagSAegJQAdgKAeAAQAhAAAdAMQAZAJASAQQAPAOANAVIAQAfIARgfQANgVAPgOQAUgSAXgHQAcgMAkAAQAgAAAdAKQAcAJAaAUQAXASAPAcQAPAdAAAjQAAAdgKAjQgIAggRAhQgPAfgVAhIguBAQhFBQglAnIhhBeQiGiAhChTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-31,64,62.1);
p.frameBounds = [rect];


(lib.flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnERQgigkAAgwIAAgmIgJAAIgCAmQgBAzghAkQghAiguAAQgyAAglgkQgnglAAgvQgBglAZghQAZghAkgLIAkgMIgBgGIgDgFIgjANIglAEQg0AAgigfQghghAAguQAAg1AhgkQAgglAxAAQAcAAAcAOQAcAOARAXIAWAeIADgCIAHgEIgXgeQgKgRgHgTQgGgUAAgUQAAgxAjggQAggfAzAAQAzAAAhAfQAhAgAAAxQAAAWgFAUQgGASgLAQIgWAeIAFADIADADIAYgeQAQgXAbgOQAcgOAcAAQAxAAAgAlQAjAkAAA1QAAAwgjAfQggAfg2AAIgkgEIgjgLQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIgBAFIAiAMQAlAOAZAgQAYAfgBAlQAAAvglAlQgmAkgzAAQgtAAgiglgAhMg5QgfAfAAArQAAAtAfAgQAgAfAsAAQAsAAAfgfQAfggAAgtQAAgrgfgfQgfgfgsAAQgsAAggAfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-31,64,62.2);
p.frameBounds = [rect];


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().de(-10.8,-10.8,21.7,21.7);
	this.shape.setTransform(0,0,2.949,2.949);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.blur_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,11).s().de(-10.8,-10.8,21.7,21.7);
	this.shape.setTransform(0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-32.5,65.1,65.1);
p.frameBounds = [rect];


// stage content:
(lib.assetshapes = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.sakura();
	this.instance.setTransform(29,261.3);

	this.instance_1 = new lib.triangle();
	this.instance_1.setTransform(323.6,39.6);

	this.instance_2 = new lib.square();
	this.instance_2.setTransform(493.2,151.5);

	this.instance_3 = new lib.kirakira2();
	this.instance_3.setTransform(420.8,32.6);

	this.instance_4 = new lib.kirakira();
	this.instance_4.setTransform(32,151.5);

	this.instance_5 = new lib.flower();
	this.instance_5.setTransform(371.7,151.5);

	this.instance_6 = new lib.star_10();
	this.instance_6.setTransform(518,32.6);

	this.instance_7 = new lib.star();
	this.instance_7.setTransform(250.2,151.5);

	this.instance_8 = new lib.circle();
	this.instance_8.setTransform(226.4,32.6);

	this.instance_9 = new lib.reverse_blur_circle();
	this.instance_9.setTransform(128.7,151.5);

	this.instance_10 = new lib.blur_circle();
	this.instance_10.setTransform(129.2,32.6);

	this.instance_11 = new lib.heart();
	this.instance_11.setTransform(32,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(275,200,550,292.3);
p.frameBounds = [rect];

})( (particlejs = particlejs||{}).assets = particlejs.assets || {} , images = images||{}, createjs = createjs||{}, ss = ss||{});
var particlejs, images, createjs, ss;