var Element = require('./element.js').Element;
var ia = Array.isArray;
var defaults = function (arg,val) { return typeof a !== 'undefined' ? arg : val; }

exports.helpers = {
	//Expected: a(text,href,{--default Element options--});
	a: function (text, href, opts) {
		opts = defaults(opts, {});
		var self = new Element('a',opts);
		self.attr('href',href);
		if (ia(text)) { 
			self.inner = text; 
		} else { 
			self.append(text); 
		}
		return self;
	},
	//Expected: abbr(text,definition,{--default Element options--});
	abbr: function (text, title, opts) {
		opts = defaults(opts, {});
		var self = new Element('abbr', opts);
		self.attr('title', title);
		if (ia(text)) { 
			self.inner = text; 
		} else { 
			self.append(text);
		}
		return self;
	},
	//Expected: address(text, {--default Element options--});
	address: function (text, opts) {
		opts = defaults(opts, {});
		var self = new Element('address', opts);
		if (ia(text)) {
			self.inner = text;
		} else {
			self.append(text);
		}
	},
	area: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('area', opts);
		return self;
	},
	//TODO expand
	article: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('article', opts);
		return self;
	},
	//TODO expand
	aside: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('aside', opts);
		return self;
	},
	//TODO expand
	audio: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('audio', opts);
		return self;
	},
	//TODO expand
	b: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('b', opts);
		return self;
	},
	//TODO expand
	base: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('base', opts);
		return self;
	},
	//TODO expand
	bdi: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('bdi', opts);
		return self;
	},
	//TODO expand
	bdo: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('bdo', opts);
		return self;
	},
	//TODO expand
	blockquote: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('blockquote', opts);
		return self;
	},
	//TODO expand
	body: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('body', opts);
		return self;
	},
	//TODO expand
	br: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('br', opts);
		return self;
	},
	//TODO expand
	button: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('button', opts);
		return self;
	},
	//TODO expand
	canvas: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('canvas', opts);
		return self;
	},
	//TODO expand
	caption: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('caption', opts);
		return self;
	},
	//TODO expand
	cite: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('cite', opts);
		return self;
	},
	//TODO expand
	code: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('code', opts);
		return self;
	},
	//TODO expand
	col: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('col', opts);
		return self;
	},
	//TODO expand
	colgroup: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('colgroup', opts);
		return self;
	},
	//TODO expand
	data: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('data', opts);
		return self;
	},
	//TODO expand
	datalist: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('datalist', opts);
		return self;
	},
	//TODO expand
	dd: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('dd', opts);
		return self;
	},
	//TODO expand
	del: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('del', opts);
		return self;
	},
	//TODO expand
	details: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('details', opts);
		return self;
	},
	//TODO expand
	dfn: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('dfn', opts);
		return self;
	},
	//TODO expand
	div: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('div', opts);
		return self;
	},
	//TODO expand
	dl: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('dl', opts);
		return self;
	},
	//TODO expand
	dt: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('dt', opts);
		return self;
	},
	//TODO expand
	em: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('em', opts);
		return self;
	},
	//TODO expand
	embed: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('embed', opts);
		return self;
	},
	//TODO expand
	fieldset: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('fieldset', opts);
		return self;
	},
	//TODO expand
	figcaption: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('figcaption', opts);
		return self;
	},
	//TODO expand
	figure: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('figure', opts);
		return self;
	},
	//TODO expand
	footer: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('footer', opts);
		return self;
	},
	//TODO expand
	form: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('form', opts);
		return self;
	},
	//TODO expand
	h1: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h1', opts);
		return self;
	},
	//TODO expand
	h2: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h2', opts);
		return self;
	},
	//TODO expand
	h3: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h3', opts);
		return self;
	},
	//TODO expand
	h4: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h4', opts);
		return self;
	},
	//TODO expand
	h5: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h5', opts);
		return self;
	},
	//TODO expand
	h6: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('h6', opts);
		return self;
	},
	//TODO expand
	head: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('head', opts);
		return self;
	},
	//TODO expand
	header: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('header', opts);
		return self;
	},
	//TODO expand
	hr: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('hr', opts);
		return self;
	},
	//TODO expand
	html: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('html', opts);
		return self;
	},
	//TODO expand
	i: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('i', opts);
		return self;
	},
	//TODO expand
	iframe: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('iframe', opts);
		return self;
	},
	//TODO expand
	img: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('img', opts);
		return self;
	},
	//TODO expand
	input: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('input', opts);
		return self;
	},
	//TODO expand
	ins: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('ins', opts);
		return self;
	},
	//TODO expand
	kbd: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('kbd', opts);
		return self;
	},
	//TODO expand
	keygen: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('keygen', opts);
		return self;
	},
	//TODO expand
	label: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('label', opts);
		return self;
	},
	//TODO expand
	legend: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('legend', opts);
		return self;
	},
	//TODO expand
	li: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('li', opts);
		return self;
	},
	//TODO expand
	link: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('link', opts);
		return self;
	},
	//TODO expand
	main: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('main', opts);
		return self;
	},
	//TODO expand
	map: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('map', opts);
		return self;
	},
	//TODO expand
	mark: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('mark', opts);
		return self;
	},
	//TODO expand
	menuitem: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('menuitem', opts);
		return self;
	},
	//TODO expand
	meta: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('meta', opts);
		return self;
	},
	//TODO expand
	meter: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('meter', opts);
		return self;
	},
	//TODO expand
	nav: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('nav', opts);
		return self;
	},
	//TODO expand
	noscript: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('noscript', opts);
		return self;
	},
	//TODO expand
	object: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('object', opts);
		return self;
	},
	//TODO expand
	ol: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('ol', opts);
		return self;
	},
	//TODO expand
	optgroup: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('optgroup', opts);
		return self;
	},
	//TODO expand
	option: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('option', opts);
		return self;
	},
	//TODO expand
	output: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('output', opts);
		return self;
	},
	//TODO expand
	p: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('p', opts);
		return self;
	},
	//TODO expand
	param: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('param', opts);
		return self;
	},
	//TODO expand
	pre: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('pre', opts);
		return self;
	},
	//TODO expand
	progress: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('progress', opts);
		return self;
	},
	//TODO expand
	q: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('q', opts);
		return self;
	},
	//TODO expand
	rp: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('rp', opts);
		return self;
	},
	//TODO expand
	rt: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('rt', opts);
		return self;
	},
	//TODO expand
	ruby: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('ruby', opts);
		return self;
	},
	//TODO expand
	s: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('s', opts);
		return self;
	},
	//TODO expand
	samp: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('samp', opts);
		return self;
	},
	//TODO expand
	script: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('script', opts);
		return self;
	},
	//TODO expand
	section: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('section', opts);
		return self;
	},
	//TODO expand
	select: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('select', opts);
		return self;
	},
	//TODO expand
	small: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('small', opts);
		return self;
	},
	//TODO expand
	source: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('source', opts);
		return self;
	},
	//TODO expand
	span: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('span', opts);
		return self;
	},
	//TODO expand
	strong: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('strong', opts);
		return self;
	},
	//TODO expand
	style: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('style', opts);
		return self;
	},
	//TODO expand
	sub: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('sub', opts);
		return self;
	},
	//TODO expand
	summary: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('summary', opts);
		return self;
	},
	//TODO expand
	sup: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('sup', opts);
		return self;
	},
	//TODO expand
	table: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('table', opts);
		return self;
	},
	//TODO expand
	tbody: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('tbody', opts);
		return self;
	},
	//TODO expand
	td: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('td', opts);
		return self;
	},
	//TODO expand
	template: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('template', opts);
		return self;
	},
	//TODO expand
	textarea: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('textarea', opts);
		return self;
	},
	//TODO expand
	tfoot: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('tfoot', opts);
		return self;
	},
	//TODO expand
	th: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('th', opts);
		return self;
	},
	//TODO expand
	thead: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('thead', opts);
		return self;
	},
	//TODO expand
	time: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('time', opts);
		return self;
	},
	//TODO expand
	title: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('title', opts);
		return self;
	},
	//TODO expand
	tr: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('tr', opts);
		return self;
	},
	//TODO expand
	var: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('var', opts);
		return self;
	},
	//TODO expand
	video: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('video', opts);
		return self;
	},
	//TODO expand
	wbr: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('wbr', opts);
		return self;
	},
	//TODO expand
	track: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('track', opts);
		return self;
	},
	//TODO expand
	u: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('u', opts);
		return self;
	},
	//TODO expand
	ul: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('ul', opts);
		return self;
	},
	//TODO expand
	"var": function (opts) {
		opts = defaults(opts, {});
		var self = new Element('var', opts);
		return self;
	},
	//TODO expand
	video: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('video', opts);
		return self;
	},
	//TODO expand
	wbr: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('wbr', opts);
		return self;
	},
};
