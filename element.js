function Element(tag,options) {
	this.tag = tag;
	this.attrs = {};
	this.classes = [];
	this.styles = {};
	this.inner = [];
	if (typeof options !== 'undefined') {
		if (typeof options.attrs !== 'undefined') {
			for (var item in options.attrs) {
				this.attrs[item] = options.attrs[item];
			};
		}
		if (typeof options.inner !== 'undefined') {
			for (var i=0;i<options.inner.length;i++) {
				this.inner.push(options.inner[i]);
			}
		}
		if (typeof options.classes !== 'undefined') {
			this.classes = options.classes;
		}
		if (typeof options.styeles !== 'undefined') {
			this.styles = options.styles;
		}
	}
	
	this.addClass = function(c) {
		if (Array.isArray(c)) {
			this.classes = this.classes.concat(c).unique();
		} else {
			this.classes.push(c);
			this.classes.unique();
		}
	};

	this.append = function(el) {
		this.inner.push(el);
	};

	this.attr = function(attr,value) {
		if (typeof value !== 'undefined') {
			this.attrs[attr] = value;
		} else {
			return this.attrs[key];
		}
	};

	this.css = function(style,value) {
		if (typeof value !== 'undefined') {
			this.styles[style] = value;
		} else {
			return this.styles[style];
		}
	};

	this.find = function(query) {
		if (typeof query == 'object') {
			return this.findByAttr(query);
		} else {
			switch (query.substring(0,1)) {
				case '.': return this.findByClass(query.substring(1)); break;
				case '#': return this.findById(query.substring(1)); break;
				default: return this.findByTag(query); break;
			}
		}
	};

	this.findByAttr = function(query) {
		var retarray = [];
		for (var key in query) {
			for (var i=0; i<this.inner.length; i++) {
				if (this.inner[i].attrs[key] == query[key]) {
					retarray.push(this.inner[i]);
				}
				retarray = retarray.concat(this.inner[i].findByAttr(query));
			}
		}
		return retarray;
	};

	this.findByClass = function(query) {
		var retarray = [];
		for (var i=0; i<this.inner.length; i++) {
			if (this.inner[i].classes.indexOf(query) !== -1) {
				retarray.push(this.inner[i]);
			}
			retarray = retarray.concat(this.inner[i].findByClass(query));
		}
		return retarray;
	};

	this.findById = function(query) {
		return this.findByAttr({id: query});
	};
	
	this.findByTag = function(query) {
		var retarray = [];
		for (var i=0;i<this.inner.length; i++){
			if (this.inner[i].tag == query) {
				retarray.push(this.inner[i]);
			}
			retarray = retarray.concat(this.inner[i].findByTag(query));
		}
		return retarray;
	};

	this.hasClass = function(c) {
		return (this.classes.indexOf(c) !== -1);
	};

	this.removeAttr = function(attr) {
		delete this.attrs[attr];
	};

	this.removeClass = function(c) {
		if (this.hasClass(c)) {
			var i = this.classes.indexOf(c);
			this.classes.splice(i,1);
		}
	};

	this.wrap = function(wrapper) {
		wrapper.append(this);
		return wrapper;
	};
	
	this.render = function () {
		var htmlarr = [this.tag];
		if (this.attrs !== {}) {
			var attrs = [];
			for (var key in this.attrs) {
				attrs.push(key+'="'+this.attrs[key]+'"');
			}
			htmlarr.push(attrs.join(' '));
		}
		if (this.classes.length > 0) {
			htmlarr.push('class="'+this.classes.join(' ')+'"');
		}
		if (this.styles !== {}) {
			var styles = [];
			for (var key in this.styles) {
				styles.push(key+': '+this.attrs.style[key]+';');
			}
			htmlarr.push(styles.join(' '));
		}
		var inner = [];
		for (var i=0; i<this.inner.length; i++) {
			if (typeof this.inner[i] == 'object') {
				inner.push(this.inner[i].render());
			} else {
				inner.push(this.inner[i]);
			}
		}
		return '<'+htmlarr.join(' ')+'>'+inner+'</'+this.tag+'>';
	};
	
	this.toString = function () {
		this.render();
	};
}

Array.prototype.unique = function() {
	var a = this.concat();
	for(var i=0; i<a.length; ++i) {
		for(var j=i+1; j<a.length; ++j) {
			if(a[i] === a[j])
				a.splice(j--, 1);
		}
	}
	return a;
};

exports.Element = Element;
