var Element = require('./element.js').Element;
var clone = require('clone');
var ia = Array.isArray;
function defaults(arg, val) { return (arg == null || typeof arg === 'undefined') ? val : arg; }

var helpers = {
	//Expected: a(text,href,{--default Element options--});
	a: function (text, href, opts) {
		text = defaults(text, false);
		href = defaults(href, '#');
		opts = defaults(opts, {});
		var self = new Element('a',opts);
		self.attr('href',href);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//Expected: abbr(text,definition,{--default Element options--});
	abbr: function (text, title, opts) {
		text = defaults(text, false);
		title = defaults(title, '');
		opts = defaults(opts, {});
		var self = new Element('abbr', opts);
		self.attr('title', title);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//Expected: address(text, {--default Element options--});
	address: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('address', opts);
		if (text !== false) {
			self.append(text);
		}
	},
	area: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('area', opts);
		return self;
	},
	article: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('article', opts);
		self.append(inner);
		return self;
	},
	aside: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('aside', opts);
		self.append(inner);
		return self;
	},
	//TODO expand someday
	audio: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('audio', opts);
		return self;
	},
	b: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('b', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	base: function (href, target, opts) {
		href = defaults(href, false);
		target = defaults(target, false);
		opts = defaults(opts, {});
		var self = new Element('base', opts);
		if (href !== false) {
			self.attr('href',href);
		}
		if (target !== false) {
			self.attr('target',target);
		}
		return self;
	},
	bdi: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('bdi', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	bdo: function (text, dir, opts) {
		text = defaults(text, false);
		dir = defaults(dir, 'ltr');
		opts = defaults(opts, {});
		var self = new Element('bdo', opts);
		self.attr('dir',dir);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	blockquote: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('blockquote', opts);
		self.append(inner);
		return self;
	},
	body: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('body', opts);
		self.append(inner);
		return self;
	},
	br: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('br', opts);
		return self;
	},
	button: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('button', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand someday
	canvas: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('canvas', opts);
		return self;
	},
	cite: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('cite', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	code: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('code', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand someday
	col: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('col', opts);
		return self;
	},
	//TODO expand someday
	colgroup: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('colgroup', opts);
		return self;
	},
	data: function (text, value, opts) {
		text = defaults(text, false);
		value = defaults(value, false);
		opts = defaults(opts, {});
		var self = new Element('data', opts);
		if (text !== false) {
			self.append(text);
		}
		if (value !== false) {
			self.attr('value', value);
		}
		return self;
	},
	//TODO expand someday
	datalist: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('datalist', opts);
		return self;
	},
	dd: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('dd', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand someday
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
	div: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('div', opts);
		self.append(inner);
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
	em: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('em', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	embed: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('embed', opts);
		return self;
	},
	fieldset: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('fieldset', opts);
		self.append(inner);
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
	h1: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h1', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	h2: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h2', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	h3: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h3', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	h4: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h4', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	h5: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h5', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	h6: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('h6', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	head: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('head', opts);
		self.addCSS = function (src) {
			self.append(new Element('link', {
				attrs: {
					href: src,
					rel: 'stylesheet',
					type: 'text/css'
				}
			}));
		};
		self.addScript = function (src) {
			self.append(new Element('script', {
				attrs: {
					src: src,
					type: 'text/javascript'
				}
			}));
		};
		self.setTitle = function (text) {
			var titleElement = self.find('title');
			if (titleElement.length > 0) {
				if (ia(text)) {
					titleElement[0].inner = text;
				} else {
					titleElement[0].inner = [text];
				}
			}
		};
		return self;
	},
	//TODO expand
	header: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('header', opts);
		return self;
	},
	hr: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('hr', opts);
		return self;
	},
	html: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('html', opts);
		self.append(inner);
		self.origRender = clone(self.render);
		self.render = function () {
			return '<!DOCTYPE html>' + self.origRender();
		}
		return self;
	},
	i: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('i', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	iframe: function (src, opts) {
		src = defaults(src, false);
		opts = defaults(opts, {});
		var self = new Element('iframe', opts);
		if (src !== false) {
			self.attrs.src = src;
		}
		return self;
	},
	img: function (src, opts) {
		src = defaults(src, false);
		opts = defaults(opts, {});
		var self = new Element('img', opts);
		if (src !== false) {
			self.attrs.src = src;
		}
		return self;
	},
	input: function (type, opts) {
		type = defaults(type, false);
		opts = defaults(opts, {});
		var self = new Element('input', opts);
		if (type !== false) {
			self.attrs.type = type;
		}
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
	label: function (text, f, opts) {
		text = defaults(text, false);
		f = defaults(f, false);
		opts = defaults(opts, {});
		var self = new Element('label', opts);
		if (text !== false) {
			self.append(text);
		}
		if (f !== false) {
			self.attrs.for = f;
		}
		return self;
	},
	//TODO expand
	legend: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('legend', opts);
		return self;
	},
	li: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('li', opts);
		self.append(inner);
		return self;
	},
	link: function (src, opts, ss) {
		src = defaults(src, false);
		opts = defaults(opts, {});
		ss = (ss !== false);
		var self = new Element('link', opts);
		if (src !== false) {
			self.attrs.href = src;
		}
		if (ss) {
			self.attrs.type = 'text/css';
			self.attrs.rel = 'stylesheet';
		}
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
	ol: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('ol', opts);
		self.append(inner);
		
		self.addItem = function (item) {
			var li = new Element('li');
			li.append(item);
			self.append(li);
		}
		
		return self;
	},
	//TODO expand
	optgroup: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('optgroup', opts);
		return self;
	},
	option: function (text, value, opts) {
		text = defaults(text, false);
		value = defaults(value, false);
		opts = defaults(opts, {});
		var self = new Element('option', opts);
		if (text !== false) {
			self.append(text);
		}
		if (value !== false) {
			self.attrs.value = value;
		}
		return self;
	},
	//TODO expand
	output: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('output', opts);
		return self;
	},
	p: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('p', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	param: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('param', opts);
		return self;
	},
	pre: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('pre', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	progress: function (value, opts) {
		value = defaults(value, '0');
		opts = defaults(opts, {});
		var self = new Element('progress', opts);
		self.attrs.value = value;
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
	s: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('s', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	samp: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('samp', opts);
		return self;
	},
	script: function (value, opts, inline) {
		value = defaults(value, false);
		inline = defaults(inline, true);
		opts = defaults(opts, {});
		var self = new Element('script', opts);
		if (inline) {
			if (value !== false) {
				self.append(value);
			}
		} else {
			if (value !== false) {
				self.attrs.src = value;
			}
		}
		return self;
	},
	//TODO expand
	section: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('section', opts);
		return self;
	},
	select: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('select', opts);
		self.append(inner);
		return self;
	},
	small: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('small', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	source: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('source', opts);
		return self;
	},
	span: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('span', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	strong: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('strong', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	style: function (value, opts, inline) {
		value = defaults(value, false);
		inline = defaults(inline, true);
		opts = defaults(opts, {});
		var self = new Element('style', opts);
		if (inline) {
			if (value !== false) {
				self.append(value);
			}
		} else {
			if (value !== false) {
				self.attrs.href = value;
			}
		}
		return self;
	},
	sub: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('sub', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	summary: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('summary', opts);
		return self;
	},
	sup: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('sup', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	table: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('table', opts);
		return self;
	},
	tbody: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('tbody', opts);
		return self;
	},
	td: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('td', opts);
		self.append(inner);
		return self;
	},
	//TODO expand
	template: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('template', opts);
		return self;
	},
	textarea: function (text, rows, opts) {
		text = defaults(text, false);
		rows = defaults(rows, false);
		opts = defaults(opts, {});
		var self = new Element('textarea', opts);
		if (text !== false) {
			self.append(text);
		}
		if (rows !== false) {
			self.attrs.rows = rows;
		}
		return self;
	},
	tfoot: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('tfoot', opts);
		return self;
	},
	th: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('th', opts);
		self.append(inner);
		return self;
	},
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
	title: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('title', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	tr: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('tr', opts);
		self.append(inner);
		return self;
	},
	//TODO expand
	"var": function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('var', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	//TODO expand
	track: function (opts) {
		opts = defaults(opts, {});
		var self = new Element('track', opts);
		return self;
	},
	u: function (text, opts) {
		text = defaults(text, false);
		opts = defaults(opts, {});
		var self = new Element('u', opts);
		if (text !== false) {
			self.append(text);
		}
		return self;
	},
	ul: function (inner, opts) {
		inner = defaults(inner, []);
		opts = defaults(opts, {});
		var self = new Element('ul', opts);
		self.append(inner);
		
		self.addItem = function (item) {
			var li = new Element('li');
			li.append(item);
			self.append(li);
		}
		
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

exports.helpers = helpers;
