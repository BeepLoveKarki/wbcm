/*!
 * @license
 *
 * Scandit Barcode Scanner SDK for the Web
 *
 * Copyright © 2018 Scandit AG. All Rights Reserved.
 *
 * The use of this software is governed by the Scandit Terms and Conditions.
 * https://ssl.scandit.com/terms/test.pdf
 */
function ___$insertStyle(css) {
  if (!css) return;
  if ("undefined" === typeof window) return;
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}
var commonjsGlobal =
  "undefined" !== typeof window
    ? window
    : "undefined" !== typeof global
      ? global
      : "undefined" !== typeof self
        ? self
        : {};
function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it) {
  return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
};
var _defined = function(it) {
  if (void 0 == it) throw TypeError("Can't call method on  " + it);
  return it;
};
var _stringAt = function(TO_STRING) {
  return function(that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
    a = s.charCodeAt(i);
    return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343
      ? TO_STRING
        ? s.charAt(i)
        : a
      : TO_STRING
        ? s.slice(i, i + 2)
        : ((a - 55296) << 10) + (b - 56320) + 65536;
  };
};
var _library = true;
var _global = createCommonjsModule(function(module) {
  var global = (module.exports =
    "undefined" != typeof window && window.Math == Math
      ? window
      : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
  if ("number" == typeof __g) __g = global;
});
var _core = createCommonjsModule(function(module) {
  var core = (module.exports = { version: "2.5.1" });
  if ("number" == typeof __e) __e = core;
});
var _core_1 = _core.version;
var _aFunction = function(it) {
  if ("function" != typeof it) throw TypeError(it + " is not a function!");
  return it;
};
var _ctx = function(fn, that, length) {
  _aFunction(fn);
  if (void 0 === that) return fn;
  switch (length) {
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function() {
    return fn.apply(that, arguments);
  };
};
var _isObject = function(it) {
  return "object" === typeof it ? null !== it : "function" === typeof it;
};
var _anObject = function(it) {
  if (!_isObject(it)) throw TypeError(it + " is not an object!");
  return it;
};
var _fails = function(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
var _descriptors = !_fails(function() {
  return (
    7 !=
    Object.defineProperty({}, "a", {
      get: function() {
        return 7;
      }
    }).a
  );
});
var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function(it) {
  return is ? document$1.createElement(it) : {};
};
var _ie8DomDefine =
  !_descriptors &&
  !_fails(function() {
    return (
      7 !=
      Object.defineProperty(_domCreate("div"), "a", {
        get: function() {
          return 7;
        }
      }).a
    );
  });
var _toPrimitive = function(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && "function" == typeof (fn = it.toString) && !_isObject((val = fn.call(it)))) return val;
  if ("function" == typeof (fn = it.valueOf) && !_isObject((val = fn.call(it)))) return val;
  if (!S && "function" == typeof (fn = it.toString) && !_isObject((val = fn.call(it)))) return val;
  throw TypeError("Can't convert object to primitive value");
};
var dP = Object.defineProperty;
var f = _descriptors
  ? Object.defineProperty
  : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine)
        try {
          return dP(O, P, Attributes);
        } catch (e) {}
      if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
var _objectDp = { f: f };
var _propertyDesc = function(bitmap, value) {
  return { enumerable: !(1 & bitmap), configurable: !(2 & bitmap), writable: !(4 & bitmap), value: value };
};
var _hide = _descriptors
  ? function(object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    }
  : function(object, key, value) {
      object[key] = value;
      return object;
    };
var PROTOTYPE = "prototype";
var $export = function(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && void 0 !== target[key];
    if (own && key in exports) continue;
    out = own ? target[key] : source[key];
    exports[key] =
      IS_GLOBAL && "function" != typeof target[key]
        ? source[key]
        : IS_BIND && own
          ? _ctx(out, _global)
          : IS_WRAP && target[key] == out
            ? (function(C) {
                var F = function(a, b, c) {
                  if (this instanceof C) {
                    switch (arguments.length) {
                      case 0:
                        return new C();
                      case 1:
                        return new C(a);
                      case 2:
                        return new C(a, b);
                    }
                    return new C(a, b, c);
                  }
                  return C.apply(this, arguments);
                };
                F[PROTOTYPE] = C[PROTOTYPE];
                return F;
              })(out)
            : IS_PROTO && "function" == typeof out
              ? _ctx(Function.call, out)
              : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
var _export = $export;
var _redefine = _hide;
var hasOwnProperty$1 = {}.hasOwnProperty;
var _has = function(it, key) {
  return hasOwnProperty$1.call(it, key);
};
var _iterators = {};
var toString = {}.toString;
var _cof = function(it) {
  return toString.call(it).slice(8, -1);
};
var _iobject = Object("z").propertyIsEnumerable(0)
  ? Object
  : function(it) {
      return "String" == _cof(it) ? it.split("") : Object(it);
    };
var _toIobject = function(it) {
  return _iobject(_defined(it));
};
var min = Math.min;
var _toLength = function(it) {
  return it > 0 ? min(_toInteger(it), 9007199254740991) : 0;
};
var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};
var _arrayIncludes = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        if (value != value) return true;
      }
    else
      for (; length > index; index++)
        if (IS_INCLUDES || index in O) if (O[index] === el) return IS_INCLUDES || index || 0;
    return !IS_INCLUDES && -1;
  };
};
var SHARED = "__core-js_shared__";
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function(key) {
  return store[key] || (store[key] = {});
};
var id = 0;
var px = Math.random();
var _uid = function(key) {
  return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
};
var shared = _shared("keys");
var _sharedKey = function(key) {
  return shared[key] || (shared[key] = _uid(key));
};
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey("IE_PROTO");
var _objectKeysInternal = function(object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  while (names.length > i) if (_has(O, (key = names[i++]))) ~arrayIndexOf(result, key) || result.push(key);
  return result;
};
var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
  ","
);
var _objectKeys =
  Object.keys ||
  function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };
var _objectDps = _descriptors
  ? Object.defineProperties
  : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, (P = keys[i++]), Properties[P]);
      return O;
    };
var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;
var IE_PROTO$1 = _sharedKey("IE_PROTO");
var Empty = function() {};
var PROTOTYPE$1 = "prototype";
var createDict = function() {
  var iframe = _domCreate("iframe");
  var i = _enumBugKeys.length;
  var lt = "<";
  var gt = ">";
  var iframeDocument;
  iframe.style.display = "none";
  _html.appendChild(iframe);
  iframe.src = "javascript:";
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};
var _objectCreate =
  Object.create ||
  function create(O, Properties) {
    var result;
    if (null !== O) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return void 0 === Properties ? result : _objectDps(result, Properties);
  };
var _wks = createCommonjsModule(function(module) {
  var store = _shared("wks");
  var Symbol = _global.Symbol;
  var USE_SYMBOL = "function" == typeof Symbol;
  var $exports = (module.exports = function(name) {
    return (
      store[name] || (store[name] = (USE_SYMBOL && Symbol[name]) || (USE_SYMBOL ? Symbol : _uid)("Symbol." + name))
    );
  });
  $exports.store = store;
});
var def = _objectDp.f;
var TAG = _wks("toStringTag");
var _setToStringTag = function(it, tag, stat) {
  if (it && !_has((it = stat ? it : it.prototype), TAG)) def(it, TAG, { configurable: true, value: tag });
};
var IteratorPrototype = {};
_hide(IteratorPrototype, _wks("iterator"), function() {
  return this;
});
var _iterCreate = function(Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + " Iterator");
};
var _toObject = function(it) {
  return Object(_defined(it));
};
var IE_PROTO$2 = _sharedKey("IE_PROTO");
var ObjectProto = Object.prototype;
var _objectGpo =
  Object.getPrototypeOf ||
  function(O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if ("function" == typeof O.constructor && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectProto : null;
  };
var ITERATOR = _wks("iterator");
var BUGGY = !([].keys && "next" in [].keys());
var FF_ITERATOR = "@@iterator";
var KEYS = "keys";
var VALUES = "values";
var returnThis = function() {
  return this;
};
var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + " Iterator";
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod("entries")) : void 0;
  var $anyNative = "Array" == NAME ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) _setToStringTag(IteratorPrototype, TAG, true);
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  if (FORCED && (BUGGY || VALUES_BUG || !proto[ITERATOR])) _hide(proto, ITERATOR, $default);
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) {
      for (key in methods) if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
var $at = _stringAt(true);
_iterDefine(
  String,
  "String",
  function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  },
  function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: void 0, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  }
);
var _iterStep = function(done, value) {
  return { value: value, done: !!done };
};
var es6_array_iterator = _iterDefine(
  Array,
  "Array",
  function(iterated, kind) {
    this._t = _toIobject(iterated);
    this._i = 0;
    this._k = kind;
  },
  function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = void 0;
      return _iterStep(1);
    }
    if ("keys" == kind) return _iterStep(0, index);
    if ("values" == kind) return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  },
  "values"
);
_iterators.Arguments = _iterators.Array;
var TO_STRING_TAG = _wks("toStringTag");
var DOMIterables = (
  "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," +
  "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," +
  "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," +
  "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," +
  "TextTrackList,TouchList"
).split(",");
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}
var TAG$1 = _wks("toStringTag");
var ARG =
  "Arguments" ==
  _cof(
    (function() {
      return arguments;
    })()
  );
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (e) {}
};
var _classof = function(it) {
  var O, T, B;
  return void 0 === it
    ? "Undefined"
    : null === it
      ? "Null"
      : "string" == typeof (T = tryGet((O = Object(it)), TAG$1))
        ? T
        : ARG
          ? _cof(O)
          : "Object" == (B = _cof(O)) && "function" == typeof O.callee
            ? "Arguments"
            : B;
};
var _anInstance = function(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (void 0 !== forbiddenField && forbiddenField in it))
    throw TypeError(name + ": incorrect invocation!");
  return it;
};
var _iterCall = function(iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator["return"];
    if (void 0 !== ret) _anObject(ret.call(iterator));
    throw e;
  }
};
var ITERATOR$1 = _wks("iterator");
var ArrayProto = Array.prototype;
var _isArrayIter = function(it) {
  return void 0 !== it && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};
var ITERATOR$2 = _wks("iterator");
var core_getIteratorMethod = (_core.getIteratorMethod = function(it) {
  if (void 0 != it) return it[ITERATOR$2] || it["@@iterator"] || _iterators[_classof(it)];
});
var _forOf = createCommonjsModule(function(module) {
  var BREAK = {};
  var RETURN = {};
  var exports = (module.exports = function(iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR
      ? function() {
          return iterable;
        }
      : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
    if (_isArrayIter(iterFn))
      for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject((step = iterable[index]))[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
  });
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});
var SPECIES = _wks("species");
var _speciesConstructor = function(O, D) {
  var C = _anObject(O).constructor;
  var S;
  return void 0 === C || void 0 == (S = _anObject(C)[SPECIES]) ? D : _aFunction(S);
};
var _invoke = function(fn, args, that) {
  var un = void 0 === that;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};
var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;
var run = function() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function() {
      _invoke("function" == typeof fn ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if ("process" == _cof(process))
    defer = function(id) {
      process.nextTick(_ctx(run, id, 1));
    };
  else if (Dispatch && Dispatch.now)
    defer = function(id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  } else if (_global.addEventListener && "function" == typeof postMessage && !_global.importScripts) {
    defer = function(id) {
      _global.postMessage(id + "", "*");
    };
    _global.addEventListener("message", listener, false);
  } else if (ONREADYSTATECHANGE in _domCreate("script"))
    defer = function(id) {
      _html.appendChild(_domCreate("script"))[ONREADYSTATECHANGE] = function() {
        _html.removeChild(this);
        run.call(id);
      };
    };
  else
    defer = function(id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
}
var _task = { set: setTask, clear: clearTask };
var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode = "process" == _cof(process$1);
var _microtask = function() {
  var head, last, notify;
  var flush = function() {
    var parent, fn;
    if (isNode && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = void 0;
        throw e;
      }
    }
    last = void 0;
    if (parent) parent.enter();
  };
  if (isNode)
    notify = function() {
      process$1.nextTick(flush);
    };
  else if (Observer) {
    var toggle = true;
    var node = document.createTextNode("");
    new Observer(flush).observe(node, { characterData: true });
    notify = function() {
      node.data = toggle = !toggle;
    };
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function() {
      promise.then(flush);
    };
  } else
    notify = function() {
      macrotask.call(_global, flush);
    };
  return function(fn) {
    var task = { fn: fn, next: void 0 };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject) {
    if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}
var f$1 = function(C) {
  return new PromiseCapability(C);
};
var _newPromiseCapability = { f: f$1 };
var _perform = function(exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};
var _promiseResolve = function(C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};
var _redefineAll = function(target, src, safe) {
  for (var key in src)
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  return target;
};
var SPECIES$1 = _wks("species");
var _setSpecies = function(KEY) {
  var C = "function" == typeof _core[KEY] ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$1])
    _objectDp.f(C, SPECIES$1, {
      configurable: true,
      get: function() {
        return this;
      }
    });
};
var ITERATOR$3 = _wks("iterator");
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR$3]();
  riter["return"] = function() {
    SAFE_CLOSING = true;
  };
} catch (e) {}
var _iterDetect = function(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function() {
      return { done: (safe = true) };
    };
    arr[ITERATOR$3] = function() {
      return iter;
    };
    exec(arr);
  } catch (e) {}
  return safe;
};
var task = _task.set;
var microtask = _microtask();
var PROMISE = "Promise";
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var $Promise = _global[PROMISE];
var isNode$1 = "process" == _classof(process$2);
var empty = function() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = (newGenericPromiseCapability = _newPromiseCapability.f);
var USE_NATIVE = !!(function() {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = ((promise.constructor = {})[_wks("species")] = function(exec) {
      exec(empty, empty);
    });
    return (isNode$1 || "function" == typeof PromiseRejectionEvent) && promise.then(empty) instanceof FakePromise;
  } catch (e) {}
})();
var isThenable = function(it) {
  var then;
  return _isObject(it) && "function" == typeof (then = it.then) ? then : false;
};
var notify = function(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function() {
    var value = promise._v;
    var ok = 1 == promise._s;
    var i = 0;
    var run = function(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (2 == promise._h) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (true === handler) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) reject(TypeError$1("Promise-chain cycle"));
          else if ((then = isThenable(result))) then.call(result, resolve, reject);
          else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]);
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function(promise) {
  task.call(_global, function() {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function() {
        if (isNode$1) process$2.emit("unhandledRejection", value, promise);
        else if ((handler = _global.onunhandledrejection)) handler({ promise: promise, reason: value });
        else if ((console = _global.console) && console.error) console.error("Unhandled promise rejection", value);
      });
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = void 0;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function(promise) {
  if (1 == promise._h) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  }
  return true;
};
var onHandleUnhandled = function(promise) {
  task.call(_global, function() {
    var handler;
    if (isNode$1) process$2.emit("rejectionHandled", promise);
    else if ((handler = _global.onrejectionhandled)) handler({ promise: promise, reason: promise._v });
  });
};
var $reject = function(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if ((then = isThenable(value)))
      microtask(function() {
        var wrapper = { _w: promise, _d: false };
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, "_h");
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];
    this._a = void 0;
    this._s = 0;
    this._d = false;
    this._v = void 0;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = "function" == typeof onFulfilled ? onFulfilled : true;
      reaction.fail = "function" == typeof onRejected && onRejected;
      reaction.domain = isNode$1 ? process$2.domain : void 0;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    catch: function(onRejected) {
      return this.then(void 0, onRejected);
    }
  });
  OwnPromiseCapability = function() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];
_export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * _library, PROMISE, {
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(
  _export.S +
    _export.F *
      !(
        USE_NATIVE &&
        _iterDetect(function(iter) {
          $Promise.all(iter)["catch"](empty);
        })
      ),
  PROMISE,
  {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function() {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function(promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(void 0);
          remaining++;
          C.resolve(promise).then(function(value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function() {
        _forOf(iterable, false, function(promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  }
);
_export(_export.P + _export.R, "Promise", {
  finally: function(onFinally) {
    var C = _speciesConstructor(this, _core.Promise || _global.Promise);
    var isFunction = "function" == typeof onFinally;
    return this.then(
      isFunction
        ? function(x) {
            return _promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          }
        : onFinally,
      isFunction
        ? function(e) {
            return _promiseResolve(C, onFinally()).then(function() {
              throw e;
            });
          }
        : onFinally
    );
  }
});
_export(_export.S, "Promise", {
  try: function(callbackfn) {
    var promiseCapability = _newPromiseCapability.f(this);
    var result = _perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  }
});
var promise = _core.Promise;
var promise$1 = createCommonjsModule(function(module) {
  module.exports = { default: promise, __esModule: true };
});
var _Promise = unwrapExports(promise$1);
!(function() {
  if ("undefined" != typeof window) {
    var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
      e = !!t && parseInt(t[1], 10) >= 16;
    if ("objectFit" in document.documentElement.style != !1 && !e)
      return void (window.objectFitPolyfill = function() {
        return !1;
      });
    var i = function(t) {
        var e = window.getComputedStyle(t, null),
          i = e.getPropertyValue("position"),
          n = e.getPropertyValue("overflow"),
          o = e.getPropertyValue("display");
        (i && "static" !== i) || (t.style.position = "relative"),
          "hidden" !== n && (t.style.overflow = "hidden"),
          (o && "inline" !== o) || (t.style.display = "block"),
          0 === t.clientHeight && (t.style.height = "100%"),
          -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill");
      },
      n = function(t) {
        var e = window.getComputedStyle(t, null),
          i = {
            "max-width": "none",
            "max-height": "none",
            "min-width": "0px",
            "min-height": "0px",
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-bottom": "0px",
            "margin-left": "0px"
          };
        for (var n in i) e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n]);
      },
      o = function(t, e, i) {
        var n, o, l, a, d;
        if (((i = i.split(" ")), i.length < 2 && (i[1] = i[0]), "x" === t))
          (n = i[0]), (o = i[1]), (l = "left"), (a = "right"), (d = e.clientWidth);
        else {
          if ("y" !== t) return;
          (n = i[1]), (o = i[0]), (l = "top"), (a = "bottom"), (d = e.clientHeight);
        }
        return n === l || o === l
          ? void (e.style[l] = "0")
          : n === a || o === a
            ? void (e.style[a] = "0")
            : "center" === n || "50%" === n
              ? ((e.style[l] = "50%"), void (e.style["margin-" + l] = d / -2 + "px"))
              : n.indexOf("%") >= 0
                ? ((n = parseInt(n)),
                  void (n < 50
                    ? ((e.style[l] = n + "%"), (e.style["margin-" + l] = d * (n / -100) + "px"))
                    : ((n = 100 - n), (e.style[a] = n + "%"), (e.style["margin-" + a] = d * (n / -100) + "px"))))
                : void (e.style[l] = n);
      },
      l = function(t) {
        var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit"),
          l = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
        (e = e || "cover"), (l = l || "50% 50%");
        var a = t.parentNode;
        i(a),
          n(t),
          (t.style.position = "absolute"),
          (t.style.height = "100%"),
          (t.style.width = "auto"),
          "scale-down" === e &&
            ((t.style.height = "auto"),
            t.clientWidth < a.clientWidth && t.clientHeight < a.clientHeight
              ? (o("x", t, l), o("y", t, l))
              : ((e = "contain"), (t.style.height = "100%"))),
          "none" === e
            ? ((t.style.width = "auto"), (t.style.height = "auto"), o("x", t, l), o("y", t, l))
            : ("cover" === e && t.clientWidth > a.clientWidth) || ("contain" === e && t.clientWidth < a.clientWidth)
              ? ((t.style.top = "0"), (t.style.marginTop = "0"), o("x", t, l))
              : "scale-down" !== e &&
                ((t.style.width = "100%"),
                (t.style.height = "auto"),
                (t.style.left = "0"),
                (t.style.marginLeft = "0"),
                o("y", t, l));
      },
      a = function(t) {
        if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
        else if (t && t.nodeName) t = [t];
        else {
          if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
          t = t;
        }
        for (var i = 0; i < t.length; i++)
          if (t[i].nodeName) {
            var n = t[i].nodeName.toLowerCase();
            "img" !== n || e
              ? "video" === n &&
                (t[i].readyState > 0
                  ? l(t[i])
                  : t[i].addEventListener("loadedmetadata", function() {
                      l(this);
                    }))
              : t[i].complete
                ? l(t[i])
                : t[i].addEventListener("load", function() {
                    l(this);
                  });
          }
        return !0;
      };
    document.addEventListener("DOMContentLoaded", function() {
      a();
    }),
      window.addEventListener("resize", function() {
        a();
      }),
      (window.objectFitPolyfill = a);
  }
})();
var logDisabled_ = true;
var deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) return;
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
    var wrappedCallback = function(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) cb(modifiedEvent);
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };
  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb])
      return nativeRemoveEventListener.apply(this, arguments);
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };
  Object.defineProperty(proto, "on" + eventNameToWrap, {
    get: function() {
      return this["_on" + eventNameToWrap];
    },
    set: function(cb) {
      if (this["_on" + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this["_on" + eventNameToWrap]);
        delete this["_on" + eventNameToWrap];
      }
      if (cb) this.addEventListener(eventNameToWrap, (this["_on" + eventNameToWrap] = cb));
    },
    enumerable: true,
    configurable: true
  });
}
var utils = {
  extractVersion: extractVersion,
  wrapPeerConnectionEvent: wrapPeerConnectionEvent,
  disableLog: function(bool) {
    if ("boolean" !== typeof bool) return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    logDisabled_ = bool;
    return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
  },
  disableWarnings: function(bool) {
    if ("boolean" !== typeof bool) return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    deprecationWarnings_ = !bool;
    return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
  },
  log: function() {
    if ("object" === typeof window) {
      if (logDisabled_) return;
      if ("undefined" !== typeof console && "function" === typeof console.log) console.log.apply(console, arguments);
    }
  },
  deprecated: function(oldMethod, newMethod) {
    if (!deprecationWarnings_) return;
    console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
  },
  detectBrowser: function(window) {
    var navigator = window && window.navigator;
    var result = {};
    result.browser = null;
    result.version = null;
    if ("undefined" === typeof window || !window.navigator) {
      result.browser = "Not a browser.";
      return result;
    }
    if (navigator.mozGetUserMedia) {
      result.browser = "firefox";
      result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      result.browser = "chrome";
      result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      result.browser = "edge";
      result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
      result.browser = "safari";
      result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    } else {
      result.browser = "Not a supported browser.";
      return result;
    }
    return result;
  }
};
var logging = utils.log;
var getusermedia = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var constraintsToChrome_ = function(c) {
    if ("object" !== typeof c || c.mandatory || c.optional) return c;
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if ("require" === key || "advanced" === key || "mediaSource" === key) return;
      var r = "object" === typeof c[key] ? c[key] : { ideal: c[key] };
      if (void 0 !== r.exact && "number" === typeof r.exact) r.min = r.max = r.exact;
      var oldname_ = function(prefix, name) {
        if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        return "deviceId" === name ? "sourceId" : name;
      };
      if (void 0 !== r.ideal) {
        cc.optional = cc.optional || [];
        var oc = {};
        if ("number" === typeof r.ideal) {
          oc[oldname_("min", key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_("max", key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_("", key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (void 0 !== r.exact && "number" !== typeof r.exact) {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_("", key)] = r.exact;
      } else
        ["min", "max"].forEach(function(mix) {
          if (void 0 !== r[mix]) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
    });
    if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
    return cc;
  };
  var shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) return func(constraints);
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && "object" === typeof constraints.audio) {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, "autoGainControl", "googAutoGainControl");
      remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && "object" === typeof constraints.video) {
      var face = constraints.video.facingMode;
      face = face && ("object" === typeof face ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;
      if (
        face &&
        ("user" === face.exact ||
          "environment" === face.exact ||
          "user" === face.ideal ||
          "environment" === face.ideal) &&
        !(
          navigator.mediaDevices.getSupportedConstraints &&
          navigator.mediaDevices.getSupportedConstraints().facingMode &&
          !getSupportedFacingModeLies
        )
      ) {
        delete constraints.video.facingMode;
        var matches;
        if ("environment" === face.exact || "environment" === face.ideal) matches = ["back", "rear"];
        else if ("user" === face.exact || "user" === face.ideal) matches = ["front"];
        if (matches)
          return navigator.mediaDevices.enumerateDevices().then(function(devices) {
            devices = devices.filter(function(d) {
              return "videoinput" === d.kind;
            });
            var dev = devices.find(function(d) {
              return matches.some(function(match) {
                return -1 !== d.label.toLowerCase().indexOf(match);
              });
            });
            if (!dev && devices.length && -1 !== matches.indexOf("back")) dev = devices[devices.length - 1];
            if (dev) constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            constraints.video = constraintsToChrome_(constraints.video);
            logging("chrome: " + JSON.stringify(constraints));
            return func(constraints);
          });
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging("chrome: " + JSON.stringify(constraints));
    return func(constraints);
  };
  var shimError_ = function(e) {
    return {
      name:
        {
          PermissionDeniedError: "NotAllowedError",
          PermissionDismissedError: "NotAllowedError",
          InvalidStateError: "NotAllowedError",
          DevicesNotFoundError: "NotFoundError",
          ConstraintNotSatisfiedError: "OverconstrainedError",
          TrackStartError: "NotReadableError",
          MediaDeviceFailedDueToShutdown: "NotAllowedError",
          MediaDeviceKillSwitchOn: "NotAllowedError",
          TabCaptureError: "AbortError",
          ScreenCaptureError: "AbortError",
          DeviceCaptureError: "AbortError"
        }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function() {
        return this.name + (this.message && ": ") + this.message;
      }
    };
  };
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        if (onError) onError(shimError_(e));
      });
    });
  };
  navigator.getUserMedia = getUserMedia_;
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };
  if (!navigator.mediaDevices)
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = { audio: "audioinput", video: "videoinput" };
          return window.MediaStreamTrack.getSources(function(devices) {
            resolve(
              devices.map(function(device) {
                return { label: device.label, kind: kinds[device.kind], deviceId: device.id, groupId: "" };
              })
            );
          });
        });
      },
      getSupportedConstraints: function() {
        return { deviceId: true, echoCancellation: true, facingMode: true, frameRate: true, height: true, width: true };
      }
    };
  if (!navigator.mediaDevices.getUserMedia)
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  else {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(
          function(stream) {
            if ((c.audio && !stream.getAudioTracks().length) || (c.video && !stream.getVideoTracks().length)) {
              stream.getTracks().forEach(function(track) {
                track.stop();
              });
              throw new DOMException("", "NotFoundError");
            }
            return stream;
          },
          function(e) {
            return Promise.reject(shimError_(e));
          }
        );
      });
    };
  }
  if ("undefined" === typeof navigator.mediaDevices.addEventListener)
    navigator.mediaDevices.addEventListener = function() {
      logging("Dummy mediaDevices.addEventListener called.");
    };
  if ("undefined" === typeof navigator.mediaDevices.removeEventListener)
    navigator.mediaDevices.removeEventListener = function() {
      logging("Dummy mediaDevices.removeEventListener called.");
    };
};
var logging$1 = utils.log;
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) return;
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function(name) {
    if (name.endsWith("Id")) walkStats(stats, stats.get(base[name]), resultSet);
    else if (name.endsWith("Ids"))
      base[name].forEach(function(id) {
        walkStats(stats, stats.get(id), resultSet);
      });
  });
}
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
  var filteredResult = new Map();
  if (null === track) return filteredResult;
  var trackStats = [];
  result.forEach(function(value) {
    if ("track" === value.type && value.trackIdentifier === track.id) trackStats.push(value);
  });
  trackStats.forEach(function(trackStat) {
    result.forEach(function(stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
    });
  });
  return filteredResult;
}
var chrome_shim = {
  shimGetUserMedia: getusermedia,
  shimMediaStream: function(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },
  shimOnTrack: function(window) {
    if ("object" === typeof window && window.RTCPeerConnection && !("ontrack" in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) this.removeEventListener("track", this._ontrack);
          this.addEventListener("track", (this._ontrack = f));
        },
        enumerable: true,
        configurable: true
      });
      var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function(e) {
            e.stream.addEventListener("addtrack", function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers)
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === te.track.id;
                });
              else receiver = { track: te.track };
              var event = new Event("track");
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers)
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === track.id;
                });
              else receiver = { track: track };
              var event = new Event("track");
              event.track = track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener("addstream", pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    } else if (!("RTCRtpTransceiver" in window))
      utils.wrapPeerConnectionEvent(window, "track", function(e) {
        if (!e.transceiver) e.transceiver = { receiver: e.receiver };
        return e;
      });
  },
  shimGetSendersWithDtmf: function(window) {
    if (
      "object" === typeof window &&
      window.RTCPeerConnection &&
      !("getSenders" in window.RTCPeerConnection.prototype) &&
      "createDTMFSender" in window.RTCPeerConnection.prototype
    ) {
      var shimSenderWithDtmf = function(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (void 0 === this._dtmf)
              if ("audio" === track.kind) this._dtmf = pc.createDTMFSender(track);
              else this._dtmf = null;
            return this._dtmf;
          },
          _pc: pc
        };
      };
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          this._senders = this._senders || [];
          return this._senders.slice();
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };
        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (-1 !== idx) pc._senders.splice(idx, 1);
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };
      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          var sender = pc._senders.find(function(s) {
            return s.track === track;
          });
          if (sender) pc._senders.splice(pc._senders.indexOf(sender), 1);
        });
      };
    } else if (
      "object" === typeof window &&
      window.RTCPeerConnection &&
      "getSenders" in window.RTCPeerConnection.prototype &&
      "createDTMFSender" in window.RTCPeerConnection.prototype &&
      window.RTCRtpSender &&
      !("dtmf" in window.RTCRtpSender.prototype)
    ) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };
      Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
        get: function() {
          if (void 0 === this._dtmf)
            if ("audio" === this.track.kind) this._dtmf = this._pc.createDTMFSender(this.track);
            else this._dtmf = null;
          return this._dtmf;
        }
      });
    }
  },
  shimSenderReceiverGetStats: function(window) {
    if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver))
      return;
    if (!("getStats" in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders)
        window.RTCPeerConnection.prototype.getSenders = function() {
          var pc = this;
          var senders = origGetSenders.apply(pc, []);
          senders.forEach(function(sender) {
            sender._pc = pc;
          });
          return senders;
        };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack)
        window.RTCPeerConnection.prototype.addTrack = function() {
          var sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      window.RTCRtpSender.prototype.getStats = function() {
        var sender = this;
        return this._pc.getStats().then(function(result) {
          return filterStats(result, sender.track, true);
        });
      };
    }
    if (!("getStats" in window.RTCRtpReceiver.prototype)) {
      var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers)
        window.RTCPeerConnection.prototype.getReceivers = function() {
          var pc = this;
          var receivers = origGetReceivers.apply(pc, []);
          receivers.forEach(function(receiver) {
            receiver._pc = pc;
          });
          return receivers;
        };
      utils.wrapPeerConnectionEvent(window, "track", function(e) {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window.RTCRtpReceiver.prototype.getStats = function() {
        var receiver = this;
        return this._pc.getStats().then(function(result) {
          return filterStats(result, receiver.track, false);
        });
      };
    }
    if (!("getStats" in window.RTCRtpSender.prototype && "getStats" in window.RTCRtpReceiver.prototype)) return;
    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function() {
      var pc = this;
      if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
        var track = arguments[0];
        var sender;
        var receiver;
        var err;
        pc.getSenders().forEach(function(s) {
          if (s.track === track)
            if (sender) err = true;
            else sender = s;
        });
        pc.getReceivers().forEach(function(r) {
          if (r.track === track)
            if (receiver) err = true;
            else receiver = r;
          return r.track === track;
        });
        if (err || (sender && receiver))
          return Promise.reject(
            new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")
          );
        else if (sender) return sender.getStats();
        else if (receiver) return receiver.getStats();
        return Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
      }
      return origGetStats.apply(pc, arguments);
    };
  },
  shimSourceObject: function(window) {
    var URL = window && window.URL;
    if ("object" === typeof window)
      if (window.HTMLMediaElement && !("srcObject" in window.HTMLMediaElement.prototype))
        Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            this._srcObject = stream;
            if (this.src) URL.revokeObjectURL(this.src);
            if (!stream) {
              this.src = "";
              return;
            }
            this.src = URL.createObjectURL(stream);
            stream.addEventListener("addtrack", function() {
              if (self.src) URL.revokeObjectURL(self.src);
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener("removetrack", function() {
              if (self.src) URL.revokeObjectURL(self.src);
              self.src = URL.createObjectURL(stream);
            });
          }
        });
  },
  shimAddTrackRemoveTrackWithNative: function(window) {
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams).map(function(streamId) {
        return pc._shimmedLocalStreams[streamId][0];
      });
    };
    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (!stream) return origAddTrack.apply(this, arguments);
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      var sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [stream, sender];
      else if (-1 === this._shimmedLocalStreams[stream.id].indexOf(sender))
        this._shimmedLocalStreams[stream.id].push(sender);
      return sender;
    };
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
      });
      var existingSenders = pc.getSenders();
      origAddStream.apply(this, arguments);
      var newSenders = pc.getSenders().filter(function(newSender) {
        return -1 === existingSenders.indexOf(newSender);
      });
      this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
    };
    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };
    var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender)
        Object.keys(this._shimmedLocalStreams).forEach(function(streamId) {
          var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
          if (-1 !== idx) pc._shimmedLocalStreams[streamId].splice(idx, 1);
          if (1 === pc._shimmedLocalStreams[streamId].length) delete pc._shimmedLocalStreams[streamId];
        });
      return origRemoveTrack.apply(this, arguments);
    };
  },
  shimAddTrackRemoveTrack: function(window) {
    var browserDetails = utils.detectBrowser(window);
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65)
      return this.shimAddTrackRemoveTrackWithNative(window);
    var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var pc = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      pc._reverseStreams = pc._reverseStreams || {};
      return nativeStreams.map(function(stream) {
        return pc._reverseStreams[stream.id];
      });
    };
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
      });
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };
    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
      delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
      delete pc._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      var pc = this;
      if ("closed" === pc.signalingState)
        throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      var streams = [].slice.call(arguments, 1);
      if (
        1 !== streams.length ||
        !streams[0].getTracks().find(function(t) {
          return t === track;
        })
      )
        throw new DOMException(
          "The adapter.js addTrack polyfill only supports a single " +
            " stream which is associated with the specified track.",
          "NotSupportedError"
        );
      var alreadyExists = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        oldStream.addTrack(track);
        Promise.resolve().then(function() {
          pc.dispatchEvent(new Event("negotiationneeded"));
        });
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function(s) {
        return s.track === track;
      });
    };
    function replaceInternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(internalStream.id, "g"), externalStream.id);
      });
      return new RTCSessionDescription({ type: description.type, sdp: sdp });
    }
    function replaceExternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(externalStream.id, "g"), internalStream.id);
      });
      return new RTCSessionDescription({ type: description.type, sdp: sdp });
    }
    ["createOffer", "createAnswer"].forEach(function(method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function() {
        var pc = this;
        var args = arguments;
        var isLegacyCall = arguments.length && "function" === typeof arguments[0];
        if (isLegacyCall)
          return nativeMethod.apply(pc, [
            function(description) {
              var desc = replaceInternalStreamId(pc, description);
              args[0].apply(null, [desc]);
            },
            function(err) {
              if (args[1]) args[1].apply(null, err);
            },
            arguments[2]
          ]);
        return nativeMethod.apply(pc, arguments).then(function(description) {
          return replaceInternalStreamId(pc, description);
        });
      };
    });
    var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function() {
      var pc = this;
      if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(pc, arguments);
      arguments[0] = replaceExternalStreamId(pc, arguments[0]);
      return origSetLocalDescription.apply(pc, arguments);
    };
    var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(window.RTCPeerConnection.prototype, "localDescription", {
      get: function() {
        var pc = this;
        var description = origLocalDescription.get.apply(this);
        if ("" === description.type) return description;
        return replaceInternalStreamId(pc, description);
      }
    });
    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      if ("closed" === pc.signalingState)
        throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      if (!sender._pc)
        throw new DOMException(
          "Argument 1 of RTCPeerConnection.removeTrack " + "does not implement interface RTCRtpSender.",
          "TypeError"
        );
      var isLocal = sender._pc === pc;
      if (!isLocal) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function(streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
          return sender.track === track;
        });
        if (hasTrack) stream = pc._streams[streamid];
      });
      if (stream) {
        if (1 === stream.getTracks().length) pc.removeStream(pc._reverseStreams[stream.id]);
        else stream.removeTrack(sender.track);
        pc.dispatchEvent(new Event("negotiationneeded"));
      }
    };
  },
  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        logging$1("PeerConnection");
        if (pcConfig && pcConfig.iceTransportPolicy) pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
      if (window.webkitRTCPeerConnection.generateCertificate)
        Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
          get: function() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
    } else {
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty("urls") && server.hasOwnProperty("url")) {
              utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              newIceServers.push(server);
            } else newIceServers.push(pcConfig.iceServers[i]);
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector, successCallback, errorCallback) {
      var pc = this;
      var args = arguments;
      if (arguments.length > 0 && "function" === typeof selector) return origGetStats.apply(this, arguments);
      if (0 === origGetStats.length && (0 === arguments.length || "function" !== typeof arguments[0]))
        return origGetStats.apply(this, []);
      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });
        return standardReport;
      };
      var makeMapStats = function(stats) {
        return new Map(
          Object.keys(stats).map(function(key) {
            return [key, stats[key]];
          })
        );
      };
      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };
        return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
      }
      return new Promise(function(resolve, reject) {
        origGetStats.apply(pc, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          },
          reject
        ]);
      }).then(successCallback, errorCallback);
    };
    if (browserDetails.version < 51)
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var args = arguments;
          var pc = this;
          var promise = new Promise(function(resolve, reject) {
            nativeMethod.apply(pc, [args[0], resolve, reject]);
          });
          if (args.length < 2) return promise;
          return promise.then(
            function() {
              args[1].apply(null, []);
            },
            function(err) {
              if (args.length >= 3) args[2].apply(null, [err]);
            }
          );
        };
      });
    if (browserDetails.version < 52)
      ["createOffer", "createAnswer"].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var pc = this;
          if (arguments.length < 1 || (1 === arguments.length && "object" === typeof arguments[0])) {
            var opts = 1 === arguments.length ? arguments[0] : void 0;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(pc, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function() {
        arguments[0] = new ("addIceCandidate" === method ? window.RTCIceCandidate : window.RTCSessionDescription)(
          arguments[0]
        );
        return nativeMethod.apply(this, arguments);
      };
    });
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) arguments[1].apply(null);
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  },
  fixNegotiationNeeded: function(window) {
    utils.wrapPeerConnectionEvent(window, "negotiationneeded", function(e) {
      var pc = e.target;
      if ("stable" !== pc.signalingState) return;
      return e;
    });
  },
  shimGetDisplayMedia: function(window, getSourceId) {
    if ("getDisplayMedia" in window.navigator) return;
    if ("function" !== typeof getSourceId) {
      console.error("shimGetDisplayMedia: getSourceId argument is not " + "a function");
      return;
    }
    navigator.getDisplayMedia = function(constraints) {
      return getSourceId(constraints).then(function(sourceId) {
        constraints.video = {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: sourceId,
            maxFrameRate: constraints.video.frameRate || 3
          }
        };
        return navigator.mediaDevices.getUserMedia(constraints);
      });
    };
  }
};
var filtericeservers = function(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
      var isString = "string" === typeof urls;
      if (isString) urls = [urls];
      urls = urls.filter(function(url) {
        var validTurn =
          0 === url.indexOf("turn:") && -1 !== url.indexOf("transport=udp") && -1 === url.indexOf("turn:[") && !hasTurn;
        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return 0 === url.indexOf("stun:") && edgeVersion >= 14393 && -1 === url.indexOf("?transport=udp");
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
};
var sdp = createCommonjsModule(function(module) {
  var SDPUtils = {};
  SDPUtils.generateIdentifier = function() {
    return Math.random()
      .toString(36)
      .substr(2, 10);
  };
  SDPUtils.localCName = SDPUtils.generateIdentifier();
  SDPUtils.splitLines = function(blob) {
    return blob
      .trim()
      .split("\n")
      .map(function(line) {
        return line.trim();
      });
  };
  SDPUtils.splitSections = function(blob) {
    var parts = blob.split("\nm=");
    return parts.map(function(part, index) {
      return (index > 0 ? "m=" + part : part).trim() + "\r\n";
    });
  };
  SDPUtils.getDescription = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
  };
  SDPUtils.getMediaSections = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
  };
  SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter(function(line) {
      return 0 === line.indexOf(prefix);
    });
  };
  SDPUtils.parseCandidate = function(line) {
    var parts;
    if (0 === line.indexOf("a=candidate:")) parts = line.substring(12).split(" ");
    else parts = line.substring(10).split(" ");
    var candidate = {
      foundation: parts[0],
      component: parseInt(parts[1], 10),
      protocol: parts[2].toLowerCase(),
      priority: parseInt(parts[3], 10),
      ip: parts[4],
      port: parseInt(parts[5], 10),
      type: parts[7]
    };
    for (var i = 8; i < parts.length; i += 2)
      switch (parts[i]) {
        case "raddr":
          candidate.relatedAddress = parts[i + 1];
          break;
        case "rport":
          candidate.relatedPort = parseInt(parts[i + 1], 10);
          break;
        case "tcptype":
          candidate.tcpType = parts[i + 1];
          break;
        case "ufrag":
          candidate.ufrag = parts[i + 1];
          candidate.usernameFragment = parts[i + 1];
          break;
        default:
          candidate[parts[i]] = parts[i + 1];
      }
    return candidate;
  };
  SDPUtils.writeCandidate = function(candidate) {
    var sdp = [];
    sdp.push(candidate.foundation);
    sdp.push(candidate.component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.ip);
    sdp.push(candidate.port);
    var type = candidate.type;
    sdp.push("typ");
    sdp.push(type);
    if ("host" !== type && candidate.relatedAddress && candidate.relatedPort) {
      sdp.push("raddr");
      sdp.push(candidate.relatedAddress);
      sdp.push("rport");
      sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && "tcp" === candidate.protocol.toLowerCase()) {
      sdp.push("tcptype");
      sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
      sdp.push("ufrag");
      sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return "candidate:" + sdp.join(" ");
  };
  SDPUtils.parseIceOptions = function(line) {
    return line.substr(14).split(" ");
  };
  SDPUtils.parseRtpMap = function(line) {
    var parts = line.substr(9).split(" ");
    var parsed = { payloadType: parseInt(parts.shift(), 10) };
    parts = parts[0].split("/");
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10);
    parsed.numChannels = 3 === parts.length ? parseInt(parts[2], 10) : 1;
    return parsed;
  };
  SDPUtils.writeRtpMap = function(codec) {
    var pt = codec.payloadType;
    if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
    return (
      "a=rtpmap:" +
      pt +
      " " +
      codec.name +
      "/" +
      codec.clockRate +
      (1 !== codec.numChannels ? "/" + codec.numChannels : "") +
      "\r\n"
    );
  };
  SDPUtils.parseExtmap = function(line) {
    var parts = line.substr(9).split(" ");
    return {
      id: parseInt(parts[0], 10),
      direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
      uri: parts[1]
    };
  };
  SDPUtils.writeExtmap = function(headerExtension) {
    return (
      "a=extmap:" +
      (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && "sendrecv" !== headerExtension.direction ? "/" + headerExtension.direction : "") +
      " " +
      headerExtension.uri +
      "\r\n"
    );
  };
  SDPUtils.parseFmtp = function(line) {
    var parsed = {};
    var kv;
    var parts = line.substr(line.indexOf(" ") + 1).split(";");
    for (var j = 0; j < parts.length; j++) {
      kv = parts[j].trim().split("=");
      parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
  };
  SDPUtils.writeFmtp = function(codec) {
    var line = "";
    var pt = codec.payloadType;
    if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
    if (codec.parameters && Object.keys(codec.parameters).length) {
      var params = [];
      Object.keys(codec.parameters).forEach(function(param) {
        params.push(param + "=" + codec.parameters[param]);
      });
      line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
    }
    return line;
  };
  SDPUtils.parseRtcpFb = function(line) {
    var parts = line.substr(line.indexOf(" ") + 1).split(" ");
    return { type: parts.shift(), parameter: parts.join(" ") };
  };
  SDPUtils.writeRtcpFb = function(codec) {
    var lines = "";
    var pt = codec.payloadType;
    if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
    if (codec.rtcpFeedback && codec.rtcpFeedback.length)
      codec.rtcpFeedback.forEach(function(fb) {
        lines +=
          "a=rtcp-fb:" + pt + " " + fb.type + (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") + "\r\n";
      });
    return lines;
  };
  SDPUtils.parseSsrcMedia = function(line) {
    var sp = line.indexOf(" ");
    var parts = { ssrc: parseInt(line.substr(7, sp - 7), 10) };
    var colon = line.indexOf(":", sp);
    if (colon > -1) {
      parts.attribute = line.substr(sp + 1, colon - sp - 1);
      parts.value = line.substr(colon + 1);
    } else parts.attribute = line.substr(sp + 1);
    return parts;
  };
  SDPUtils.getMid = function(mediaSection) {
    var mid = SDPUtils.matchPrefix(mediaSection, "a=mid:")[0];
    if (mid) return mid.substr(6);
  };
  SDPUtils.parseFingerprint = function(line) {
    var parts = line.substr(14).split(" ");
    return { algorithm: parts[0].toLowerCase(), value: parts[1] };
  };
  SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=fingerprint:");
    return { role: "auto", fingerprints: lines.map(SDPUtils.parseFingerprint) };
  };
  SDPUtils.writeDtlsParameters = function(params, setupType) {
    var sdp = "a=setup:" + setupType + "\r\n";
    params.fingerprints.forEach(function(fp) {
      sdp += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
    });
    return sdp;
  };
  SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.splitLines(mediaSection);
    lines = lines.concat(SDPUtils.splitLines(sessionpart));
    var iceParameters = {
      usernameFragment: lines
        .filter(function(line) {
          return 0 === line.indexOf("a=ice-ufrag:");
        })[0]
        .substr(12),
      password: lines
        .filter(function(line) {
          return 0 === line.indexOf("a=ice-pwd:");
        })[0]
        .substr(10)
    };
    return iceParameters;
  };
  SDPUtils.writeIceParameters = function(params) {
    return "a=ice-ufrag:" + params.usernameFragment + "\r\n" + "a=ice-pwd:" + params.password + "\r\n";
  };
  SDPUtils.parseRtpParameters = function(mediaSection) {
    var description = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] };
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    for (var i = 3; i < mline.length; i++) {
      var pt = mline[i];
      var rtpmapline = SDPUtils.matchPrefix(mediaSection, "a=rtpmap:" + pt + " ")[0];
      if (rtpmapline) {
        var codec = SDPUtils.parseRtpMap(rtpmapline);
        var fmtps = SDPUtils.matchPrefix(mediaSection, "a=fmtp:" + pt + " ");
        codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
        codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:" + pt + " ").map(SDPUtils.parseRtcpFb);
        description.codecs.push(codec);
        switch (codec.name.toUpperCase()) {
          case "RED":
          case "ULPFEC":
            description.fecMechanisms.push(codec.name.toUpperCase());
        }
      }
    }
    SDPUtils.matchPrefix(mediaSection, "a=extmap:").forEach(function(line) {
      description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    return description;
  };
  SDPUtils.writeRtpDescription = function(kind, caps) {
    var sdp = "";
    sdp += "m=" + kind + " ";
    sdp += caps.codecs.length > 0 ? "9" : "0";
    sdp += " UDP/TLS/RTP/SAVPF ";
    sdp +=
      caps.codecs
        .map(function(codec) {
          if (void 0 !== codec.preferredPayloadType) return codec.preferredPayloadType;
          return codec.payloadType;
        })
        .join(" ") + "\r\n";
    sdp += "c=IN IP4 0.0.0.0\r\n";
    sdp += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
    caps.codecs.forEach(function(codec) {
      sdp += SDPUtils.writeRtpMap(codec);
      sdp += SDPUtils.writeFmtp(codec);
      sdp += SDPUtils.writeRtcpFb(codec);
    });
    var maxptime = 0;
    caps.codecs.forEach(function(codec) {
      if (codec.maxptime > maxptime) maxptime = codec.maxptime;
    });
    if (maxptime > 0) sdp += "a=maxptime:" + maxptime + "\r\n";
    sdp += "a=rtcp-mux\r\n";
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
    return sdp;
  };
  SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    var encodingParameters = [];
    var description = SDPUtils.parseRtpParameters(mediaSection);
    var hasRed = -1 !== description.fecMechanisms.indexOf("RED");
    var hasUlpfec = -1 !== description.fecMechanisms.indexOf("ULPFEC");
    var ssrcs = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(parts) {
        return "cname" === parts.attribute;
      });
    var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    var secondarySsrc;
    var flows = SDPUtils.matchPrefix(mediaSection, "a=ssrc-group:FID").map(function(line) {
      var parts = line.split(" ");
      parts.shift();
      return parts.map(function(part) {
        return parseInt(part, 10);
      });
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
    description.codecs.forEach(function(codec) {
      if ("RTX" === codec.name.toUpperCase() && codec.parameters.apt) {
        var encParam = {
          ssrc: primarySsrc,
          codecPayloadType: parseInt(codec.parameters.apt, 10),
          rtx: { ssrc: secondarySsrc }
        };
        encodingParameters.push(encParam);
        if (hasRed) {
          encParam = JSON.parse(JSON.stringify(encParam));
          encParam.fec = { ssrc: secondarySsrc, mechanism: hasUlpfec ? "red+ulpfec" : "red" };
          encodingParameters.push(encParam);
        }
      }
    });
    if (0 === encodingParameters.length && primarySsrc) encodingParameters.push({ ssrc: primarySsrc });
    var bandwidth = SDPUtils.matchPrefix(mediaSection, "b=");
    if (bandwidth.length) {
      if (0 === bandwidth[0].indexOf("b=TIAS:")) bandwidth = parseInt(bandwidth[0].substr(7), 10);
      else if (0 === bandwidth[0].indexOf("b=AS:"))
        bandwidth = 1e3 * parseInt(bandwidth[0].substr(5), 10) * 0.95 - 50 * 40 * 8;
      else bandwidth = void 0;
      encodingParameters.forEach(function(params) {
        params.maxBitrate = bandwidth;
      });
    }
    return encodingParameters;
  };
  SDPUtils.parseRtcpParameters = function(mediaSection) {
    var rtcpParameters = {};
    var remoteSsrc = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return "cname" === obj.attribute;
      })[0];
    if (remoteSsrc) {
      rtcpParameters.cname = remoteSsrc.value;
      rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    var rsize = SDPUtils.matchPrefix(mediaSection, "a=rtcp-rsize");
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = 0 === rsize.length;
    var mux = SDPUtils.matchPrefix(mediaSection, "a=rtcp-mux");
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
  };
  SDPUtils.parseMsid = function(mediaSection) {
    var parts;
    var spec = SDPUtils.matchPrefix(mediaSection, "a=msid:");
    if (1 === spec.length) {
      parts = spec[0].substr(7).split(" ");
      return { stream: parts[0], track: parts[1] };
    }
    var planB = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(parts) {
        return "msid" === parts.attribute;
      });
    if (planB.length > 0) {
      parts = planB[0].value.split(" ");
      return { stream: parts[0], track: parts[1] };
    }
  };
  SDPUtils.generateSessionId = function() {
    return Math.random()
      .toString()
      .substr(2, 21);
  };
  SDPUtils.writeSessionBoilerplate = function(sessId, sessVer) {
    var sessionId;
    var version = void 0 !== sessVer ? sessVer : 2;
    if (sessId) sessionId = sessId;
    else sessionId = SDPUtils.generateSessionId();
    return (
      "v=0\r\n" + "o=thisisadapterortc " + sessionId + " " + version + " IN IP4 127.0.0.1\r\n" + "s=-\r\n" + "t=0 0\r\n"
    );
  };
  SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
    var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
    sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      "offer" === type ? "actpass" : "active"
    );
    sdp += "a=mid:" + transceiver.mid + "\r\n";
    if (transceiver.direction) sdp += "a=" + transceiver.direction + "\r\n";
    else if (transceiver.rtpSender && transceiver.rtpReceiver) sdp += "a=sendrecv\r\n";
    else if (transceiver.rtpSender) sdp += "a=sendonly\r\n";
    else if (transceiver.rtpReceiver) sdp += "a=recvonly\r\n";
    else sdp += "a=inactive\r\n";
    if (transceiver.rtpSender) {
      var msid = "msid:" + stream.id + " " + transceiver.rtpSender.track.id + "\r\n";
      sdp += "a=" + msid;
      sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
      if (transceiver.sendEncodingParameters[0].rtx) {
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
        sdp +=
          "a=ssrc-group:FID " +
          transceiver.sendEncodingParameters[0].ssrc +
          " " +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          "\r\n";
      }
    }
    sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx)
      sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    return sdp;
  };
  SDPUtils.getDirection = function(mediaSection, sessionpart) {
    var lines = SDPUtils.splitLines(mediaSection);
    for (var i = 0; i < lines.length; i++)
      switch (lines[i]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return lines[i].substr(2);
      }
    if (sessionpart) return SDPUtils.getDirection(sessionpart);
    return "sendrecv";
  };
  SDPUtils.getKind = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    return mline[0].substr(2);
  };
  SDPUtils.isRejected = function(mediaSection) {
    return "0" === mediaSection.split(" ", 2)[1];
  };
  SDPUtils.parseMLine = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var parts = lines[0].substr(2).split(" ");
    return { kind: parts[0], port: parseInt(parts[1], 10), protocol: parts[2], fmt: parts.slice(3).join(" ") };
  };
  SDPUtils.parseOLine = function(mediaSection) {
    var line = SDPUtils.matchPrefix(mediaSection, "o=")[0];
    var parts = line.substr(2).split(" ");
    return {
      username: parts[0],
      sessionId: parts[1],
      sessionVersion: parseInt(parts[2], 10),
      netType: parts[3],
      addressType: parts[4],
      address: parts[5]
    };
  };
  module.exports = SDPUtils;
});
function fixStatsType(stat) {
  return (
    {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate"
    }[stat.type] || stat.type
  );
}
function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp$$1 = sdp.writeRtpDescription(transceiver.kind, caps);
  sdp$$1 += sdp.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
  sdp$$1 += sdp.writeDtlsParameters(
    transceiver.dtlsTransport.getLocalParameters(),
    "offer" === type ? "actpass" : dtlsRole || "active"
  );
  sdp$$1 += "a=mid:" + transceiver.mid + "\r\n";
  if (transceiver.rtpSender && transceiver.rtpReceiver) sdp$$1 += "a=sendrecv\r\n";
  else if (transceiver.rtpSender) sdp$$1 += "a=sendonly\r\n";
  else if (transceiver.rtpReceiver) sdp$$1 += "a=recvonly\r\n";
  else sdp$$1 += "a=inactive\r\n";
  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    var msid = "msid:" + (stream ? stream.id : "-") + " " + trackId + "\r\n";
    sdp$$1 += "a=" + msid;
    sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
      sdp$$1 +=
        "a=ssrc-group:FID " +
        transceiver.sendEncodingParameters[0].ssrc +
        " " +
        transceiver.sendEncodingParameters[0].rtx.ssrc +
        "\r\n";
    }
  }
  sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + sdp.localCName + "\r\n";
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx)
    sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + sdp.localCName + "\r\n";
  return sdp$$1;
}
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) console.warn("RTCIceServer.url is deprecated! Use urls instead.");
      var isString = "string" === typeof urls;
      if (isString) urls = [urls];
      urls = urls.filter(function(url) {
        var validTurn =
          0 === url.indexOf("turn:") && -1 !== url.indexOf("transport=udp") && -1 === url.indexOf("turn:[") && !hasTurn;
        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return 0 === url.indexOf("stun:") && edgeVersion >= 14393 && -1 === url.indexOf("?transport=udp");
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = { codecs: [], headerExtensions: [], fecMechanisms: [] };
  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++)
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) return codecs[i];
  };
  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };
  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if ("rtx" === lCodec.name.toLowerCase() && lCodec.parameters && rCodec.parameters.apt)
          if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) continue;
        rCodec = JSON.parse(JSON.stringify(rCodec));
        rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
        commonCapabilities.codecs.push(rCodec);
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++)
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter)
              return true;
          return false;
        });
        break;
      }
    }
  });
  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });
  return commonCapabilities;
}
function isActionAllowedInSignalingState(action, type, signalingState) {
  return (
    -1 !==
    {
      offer: {
        setLocalDescription: ["stable", "have-local-offer"],
        setRemoteDescription: ["stable", "have-remote-offer"]
      },
      answer: {
        setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
        setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
      }
    }[type][action].indexOf(signalingState)
  );
}
function maybeAddCandidate(iceTransport, candidate) {
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function(remoteCandidate) {
    return (
      candidate.foundation === remoteCandidate.foundation &&
      candidate.ip === remoteCandidate.ip &&
      candidate.port === remoteCandidate.port &&
      candidate.priority === remoteCandidate.priority &&
      candidate.protocol === remoteCandidate.protocol &&
      candidate.type === remoteCandidate.type
    );
  });
  if (!alreadyAdded) iceTransport.addRemoteCandidate(candidate);
  return !alreadyAdded;
}
function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: void 0,
    OperationError: void 0
  }[name];
  return e;
}
var rtcpeerconnection = function(window, edgeVersion) {
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent("addtrack", { track: track }));
  }
  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent("removetrack", { track: track }));
  }
  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event("track");
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = { receiver: receiver };
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent("track", trackEvent);
    });
  }
  var RTCPeerConnection = function(config) {
    var pc = this;
    var _eventTarget = document.createDocumentFragment();
    ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });
    this.canTrickleIceCandidates = null;
    this.needNegotiation = false;
    this.localStreams = [];
    this.remoteStreams = [];
    this.localDescription = null;
    this.remoteDescription = null;
    this.signalingState = "stable";
    this.iceConnectionState = "new";
    this.connectionState = "new";
    this.iceGatheringState = "new";
    config = JSON.parse(JSON.stringify(config || {}));
    this.usingBundle = "max-bundle" === config.bundlePolicy;
    if ("negotiate" === config.rtcpMuxPolicy)
      throw makeError("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
    else if (!config.rtcpMuxPolicy) config.rtcpMuxPolicy = "require";
    switch (config.iceTransportPolicy) {
      case "all":
      case "relay":
        break;
      default:
        config.iceTransportPolicy = "all";
    }
    switch (config.bundlePolicy) {
      case "balanced":
      case "max-compat":
      case "max-bundle":
        break;
      default:
        config.bundlePolicy = "balanced";
    }
    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    this._iceGatherers = [];
    if (config.iceCandidatePoolSize)
      for (var i = config.iceCandidatePoolSize; i > 0; i--)
        this._iceGatherers.push(
          new window.RTCIceGatherer({ iceServers: config.iceServers, gatherPolicy: config.iceTransportPolicy })
        );
    else config.iceCandidatePoolSize = 0;
    this._config = config;
    this.transceivers = [];
    this._sdpSessionId = sdp.generateSessionId();
    this._sdpSessionVersion = 0;
    this._dtlsRole = void 0;
    this._isClosed = false;
  };
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;
  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) return;
    this.dispatchEvent(event);
    if ("function" === typeof this["on" + name]) this["on" + name](event);
  };
  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event("icegatheringstatechange");
    this._dispatchEvent("icegatheringstatechange", event);
  };
  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };
  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };
  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) this.transceivers.push(transceiver);
    return transceiver;
  };
  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) throw makeError("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });
    if (alreadyExists) throw makeError("InvalidAccessError", "Track already exists.");
    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++)
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) transceiver = this.transceivers[i];
    if (!transceiver) transceiver = this._createTransceiver(track.kind);
    this._maybeFireNegotiationNeeded();
    if (-1 === this.localStreams.indexOf(stream)) this.localStreams.push(stream);
    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };
  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025)
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    else {
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener("enabled", function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };
  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed)
      throw makeError("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
    if (!(sender instanceof window.RTCRtpSender))
      throw new TypeError(
        "Argument 1 of RTCPeerConnection.removeTrack " + "does not implement interface RTCRtpSender."
      );
    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });
    if (!transceiver) throw makeError("InvalidAccessError", "Sender was not created by this connection.");
    var stream = transceiver.stream;
    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (-1 === localStreams.indexOf(stream) && this.localStreams.indexOf(stream) > -1)
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    this._maybeFireNegotiationNeeded();
  };
  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) pc.removeTrack(sender);
    });
  };
  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers
      .filter(function(transceiver) {
        return !!transceiver.rtpSender;
      })
      .map(function(transceiver) {
        return transceiver.rtpSender;
      });
  };
  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers
      .filter(function(transceiver) {
        return !!transceiver.rtpReceiver;
      })
      .map(function(transceiver) {
        return transceiver.rtpReceiver;
      });
  };
  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex, usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) return this.transceivers[0].iceGatherer;
    else if (this._iceGatherers.length) return this._iceGatherers.shift();
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, "state", { value: "new", writable: true });
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || 0 === Object.keys(event.candidate).length;
      iceGatherer.state = end ? "completed" : "gathering";
      if (null !== pc.transceivers[sdpMLineIndex].bufferedCandidateEvents)
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
    };
    iceGatherer.addEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) return;
    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) return;
      var event = new Event("icecandidate");
      event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };
      var cand = evt.candidate;
      var end = !cand || 0 === Object.keys(cand).length;
      if (end) {
        if ("new" === iceGatherer.state || "gathering" === iceGatherer.state) iceGatherer.state = "completed";
      } else {
        if ("new" === iceGatherer.state) iceGatherer.state = "gathering";
        cand.component = 1;
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
        var serializedCandidate = sdp.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate, sdp.parseCandidate(serializedCandidate));
        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }
      var sections = sdp.getMediaSections(pc.localDescription.sdp);
      if (!end) sections[event.candidate.sdpMLineIndex] += "a=" + event.candidate.candidate + "\r\n";
      else sections[event.candidate.sdpMLineIndex] += "a=end-of-candidates\r\n";
      pc.localDescription.sdp = sdp.getDescription(pc.localDescription.sdp) + sections.join("");
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer && "completed" === transceiver.iceGatherer.state;
      });
      if ("gathering" !== pc.iceGatheringState) {
        pc.iceGatheringState = "gathering";
        pc._emitGatheringStateChange();
      }
      if (!end) pc._dispatchEvent("icecandidate", event);
      if (complete) {
        pc._dispatchEvent("icecandidate", new Event("icecandidate"));
        pc.iceGatheringState = "complete";
        pc._emitGatheringStateChange();
      }
    };
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };
    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      Object.defineProperty(dtlsTransport, "state", { value: "failed", writable: true });
      pc._updateConnectionState();
    };
    return { iceTransport: iceTransport, dtlsTransport: dtlsTransport };
  };
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };
  RTCPeerConnection.prototype._transceive = function(transceiver, send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = { cname: sdp.localCName, compound: transceiver.rtcpParameters.compound };
      if (transceiver.recvEncodingParameters.length) params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      if ("video" === transceiver.kind && transceiver.recvEncodingParameters && edgeVersion < 15019)
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      if (transceiver.recvEncodingParameters.length) params.encodings = transceiver.recvEncodingParameters;
      else params.encodings = [{}];
      params.rtcp = { compound: transceiver.rtcpParameters.compound };
      if (transceiver.rtcpParameters.cname) params.rtcp.cname = transceiver.rtcpParameters.cname;
      if (transceiver.sendEncodingParameters.length) params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      transceiver.rtpReceiver.receive(params);
    }
  };
  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;
    if (-1 === ["offer", "answer"].indexOf(description.type))
      return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
    if (!isActionAllowedInSignalingState("setLocalDescription", description.type, pc.signalingState) || pc._isClosed)
      return Promise.reject(
        makeError("InvalidStateError", "Can not set local " + description.type + " in state " + pc.signalingState)
      );
    var sections;
    var sessionpart;
    if ("offer" === description.type) {
      sections = sdp.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = sdp.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if ("answer" === description.type) {
      sections = sdp.splitSections(pc.remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = sdp.matchPrefix(sessionpart, "a=ice-lite").length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;
        var rejected = sdp.isRejected(mediaSection) && 0 === sdp.matchPrefix(mediaSection, "a=bundle-only").length;
        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = sdp.getIceParameters(mediaSection, sessionpart);
          var remoteDtlsParameters = sdp.getDtlsParameters(mediaSection, sessionpart);
          if (isIceLite) remoteDtlsParameters.role = "server";
          if (!pc.usingBundle || 0 === sdpMLineIndex) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if ("new" === iceTransport.state)
              iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? "controlling" : "controlled");
            if ("new" === dtlsTransport.state) dtlsTransport.start(remoteDtlsParameters);
          }
          var params = getCommonCapabilities(localCapabilities, remoteCapabilities);
          pc._transceive(transceiver, params.codecs.length > 0, false);
        }
      });
    }
    pc.localDescription = { type: description.type, sdp: description.sdp };
    if ("offer" === description.type) pc._updateSignalingState("have-local-offer");
    else pc._updateSignalingState("stable");
    return Promise.resolve();
  };
  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;
    if (-1 === ["offer", "answer"].indexOf(description.type))
      return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
    if (!isActionAllowedInSignalingState("setRemoteDescription", description.type, pc.signalingState) || pc._isClosed)
      return Promise.reject(
        makeError("InvalidStateError", "Can not set remote " + description.type + " in state " + pc.signalingState)
      );
    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = sdp.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = sdp.matchPrefix(sessionpart, "a=ice-lite").length > 0;
    var usingBundle = sdp.matchPrefix(sessionpart, "a=group:BUNDLE ").length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = sdp.matchPrefix(sessionpart, "a=ice-options:")[0];
    if (iceOptions)
      pc.canTrickleIceCandidates =
        iceOptions
          .substr(14)
          .split(" ")
          .indexOf("trickle") >= 0;
    else pc.canTrickleIceCandidates = false;
    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = sdp.splitLines(mediaSection);
      var kind = sdp.getKind(mediaSection);
      var rejected = sdp.isRejected(mediaSection) && 0 === sdp.matchPrefix(mediaSection, "a=bundle-only").length;
      var protocol = lines[0].substr(2).split(" ")[2];
      var direction = sdp.getDirection(mediaSection, sessionpart);
      var remoteMsid = sdp.parseMsid(mediaSection);
      var mid = sdp.getMid(mediaSection) || sdp.generateIdentifier();
      if (("application" === kind && "DTLS/SCTP" === protocol) || rejected) {
        pc.transceivers[sdpMLineIndex] = { mid: mid, kind: kind, rejected: true };
        return;
      }
      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected)
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;
      var track;
      var remoteCapabilities = sdp.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = sdp.getIceParameters(mediaSection, sessionpart);
        remoteDtlsParameters = sdp.getDtlsParameters(mediaSection, sessionpart);
        remoteDtlsParameters.role = "client";
      }
      recvEncodingParameters = sdp.parseRtpEncodingParameters(mediaSection);
      var rtcpParameters = sdp.parseRtcpParameters(mediaSection);
      var isComplete = sdp.matchPrefix(mediaSection, "a=end-of-candidates", sessionpart).length > 0;
      var cands = sdp
        .matchPrefix(mediaSection, "a=candidate:")
        .map(function(cand) {
          return sdp.parseCandidate(cand);
        })
        .filter(function(cand) {
          return 1 === cand.component;
        });
      if (
        ("offer" === description.type || "answer" === description.type) &&
        !rejected &&
        usingBundle &&
        sdpMLineIndex > 0 &&
        pc.transceivers[sdpMLineIndex]
      ) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender)
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
        if (pc.transceivers[sdpMLineIndex].rtpReceiver)
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
      }
      if ("offer" === description.type && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;
        if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
        if (cands.length && "new" === transceiver.iceTransport.state)
          if (isComplete && (!usingBundle || 0 === sdpMLineIndex)) transceiver.iceTransport.setRemoteCandidates(cands);
          else
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);
        if (edgeVersion < 15019)
          localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
            return "rtx" !== codec.name;
          });
        sendEncodingParameters = transceiver.sendEncodingParameters || [{ ssrc: 1001 * (2 * sdpMLineIndex + 2) }];
        var isNewTrack = false;
        if ("sendrecv" === direction || "sendonly" === direction) {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            if (remoteMsid && "-" === remoteMsid.stream);
            else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], "id", {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, "id", {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) streams.default = new window.MediaStream();
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) removeTrackFromStreamAndFireEvent(nativeTrack, s);
          });
          transceiver.associatedRemoteMediaStreams = [];
        }
        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;
        pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
      } else if ("answer" === description.type && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;
        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
        if (cands.length && "new" === iceTransport.state)
          if ((isIceLite || isComplete) && (!usingBundle || 0 === sdpMLineIndex))
            iceTransport.setRemoteCandidates(cands);
          else
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
        if (!usingBundle || 0 === sdpMLineIndex) {
          if ("new" === iceTransport.state) iceTransport.start(iceGatherer, remoteIceParameters, "controlling");
          if ("new" === dtlsTransport.state) dtlsTransport.start(remoteDtlsParameters);
        }
        pc._transceive(
          transceiver,
          "sendrecv" === direction || "recvonly" === direction,
          "sendrecv" === direction || "sendonly" === direction
        );
        if (rtpReceiver && ("sendrecv" === direction || "sendonly" === direction)) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) streams[remoteMsid.stream] = new window.MediaStream();
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) streams.default = new window.MediaStream();
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else delete transceiver.rtpReceiver;
      }
    });
    if (void 0 === pc._dtlsRole) pc._dtlsRole = "offer" === description.type ? "active" : "passive";
    pc.remoteDescription = { type: description.type, sdp: description.sdp };
    if ("offer" === description.type) pc._updateSignalingState("have-remote-offer");
    else pc._updateSignalingState("stable");
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (-1 === pc.remoteStreams.indexOf(stream)) {
          pc.remoteStreams.push(stream);
          var event = new Event("addstream");
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent("addstream", event);
          });
        }
        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) return;
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) return;
      fireAddTrack(pc, item[0], item[1], []);
    });
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) return;
      pc.transceivers.forEach(function(transceiver) {
        if (
          transceiver.iceTransport &&
          "new" === transceiver.iceTransport.state &&
          transceiver.iceTransport.getRemoteCandidates().length > 0
        ) {
          console.warn("Timeout for addRemoteCandidate. Consider sending " + "an end-of-candidates notification");
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4e3);
    return Promise.resolve();
  };
  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport) transceiver.iceTransport.stop();
      if (transceiver.dtlsTransport) transceiver.dtlsTransport.stop();
      if (transceiver.rtpSender) transceiver.rtpSender.stop();
      if (transceiver.rtpReceiver) transceiver.rtpReceiver.stop();
    });
    this._isClosed = true;
    this._updateSignalingState("closed");
  };
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event("signalingstatechange");
    this._dispatchEvent("signalingstatechange", event);
  };
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if ("stable" !== this.signalingState || true === this.needNegotiation) return;
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event("negotiationneeded");
        pc._dispatchEvent("negotiationneeded", event);
      }
    }, 0);
  };
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = { new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
    this.transceivers.forEach(function(transceiver) {
      states[transceiver.iceTransport.state]++;
    });
    newState = "new";
    if (states.failed > 0) newState = "failed";
    else if (states.checking > 0) newState = "checking";
    else if (states.disconnected > 0) newState = "disconnected";
    else if (states.new > 0) newState = "new";
    else if (states.connected > 0) newState = "connected";
    else if (states.completed > 0) newState = "completed";
    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event("iceconnectionstatechange");
      this._dispatchEvent("iceconnectionstatechange", event);
    }
  };
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = { new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
    this.transceivers.forEach(function(transceiver) {
      states[transceiver.iceTransport.state]++;
      states[transceiver.dtlsTransport.state]++;
    });
    states.connected += states.completed;
    newState = "new";
    if (states.failed > 0) newState = "failed";
    else if (states.connecting > 0) newState = "connecting";
    else if (states.disconnected > 0) newState = "disconnected";
    else if (states.new > 0) newState = "new";
    else if (states.connected > 0) newState = "connected";
    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event("connectionstatechange");
      this._dispatchEvent("connectionstatechange", event);
    }
  };
  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;
    if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createOffer after close"));
    var numAudioTracks = pc.transceivers.filter(function(t) {
      return "audio" === t.kind;
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return "video" === t.kind;
    }).length;
    var offerOptions = arguments[0];
    if (offerOptions) {
      if (offerOptions.mandatory || offerOptions.optional)
        throw new TypeError("Legacy mandatory/optional constraints not supported.");
      if (void 0 !== offerOptions.offerToReceiveAudio)
        if (true === offerOptions.offerToReceiveAudio) numAudioTracks = 1;
        else if (false === offerOptions.offerToReceiveAudio) numAudioTracks = 0;
        else numAudioTracks = offerOptions.offerToReceiveAudio;
      if (void 0 !== offerOptions.offerToReceiveVideo)
        if (true === offerOptions.offerToReceiveVideo) numVideoTracks = 1;
        else if (false === offerOptions.offerToReceiveVideo) numVideoTracks = 0;
        else numVideoTracks = offerOptions.offerToReceiveVideo;
    }
    pc.transceivers.forEach(function(transceiver) {
      if ("audio" === transceiver.kind) {
        numAudioTracks--;
        if (numAudioTracks < 0) transceiver.wantReceive = false;
      } else if ("video" === transceiver.kind) {
        numVideoTracks--;
        if (numVideoTracks < 0) transceiver.wantReceive = false;
      }
    });
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver("audio");
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver("video");
        numVideoTracks--;
      }
    }
    var sdp$$1 = sdp.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || sdp.generateIdentifier();
      transceiver.mid = mid;
      if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      if (edgeVersion < 15019)
        localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
          return "rtx" !== codec.name;
        });
      localCapabilities.codecs.forEach(function(codec) {
        if ("H264" === codec.name && void 0 === codec.parameters["level-asymmetry-allowed"])
          codec.parameters["level-asymmetry-allowed"] = "1";
        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs)
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (
              codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
              codec.clockRate === remoteCodec.clockRate
            )
              codec.preferredPayloadType = remoteCodec.payloadType;
          });
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions =
          (transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions) || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) hdrExt.id = rHdrExt.id;
        });
      });
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{ ssrc: 1001 * (2 * sdpMLineIndex + 1) }];
      if (track)
        if (edgeVersion >= 15019 && "video" === kind && !sendEncodingParameters[0].rtx)
          sendEncodingParameters[0].rtx = { ssrc: sendEncodingParameters[0].ssrc + 1 };
      if (transceiver.wantReceive) transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });
    if ("max-compat" !== pc._config.bundlePolicy)
      sdp$$1 +=
        "a=group:BUNDLE " +
        pc.transceivers
          .map(function(t) {
            return t.mid;
          })
          .join(" ") +
        "\r\n";
    sdp$$1 += "a=ice-options:trickle\r\n";
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp$$1 += writeMediaSection(
        transceiver,
        transceiver.localCapabilities,
        "offer",
        transceiver.stream,
        pc._dtlsRole
      );
      sdp$$1 += "a=rtcp-rsize\r\n";
      if (transceiver.iceGatherer && "new" !== pc.iceGatheringState && (0 === sdpMLineIndex || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp$$1 += "a=" + sdp.writeCandidate(cand) + "\r\n";
        });
        if ("completed" === transceiver.iceGatherer.state) sdp$$1 += "a=end-of-candidates\r\n";
      }
    });
    var desc = new window.RTCSessionDescription({ type: "offer", sdp: sdp$$1 });
    return Promise.resolve(desc);
  };
  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;
    if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createAnswer after close"));
    if (!("have-remote-offer" === pc.signalingState || "have-local-pranswer" === pc.signalingState))
      return Promise.reject(
        makeError("InvalidStateError", "Can not call createAnswer in signalingState " + pc.signalingState)
      );
    var sdp$$1 = sdp.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    if (pc.usingBundle)
      sdp$$1 +=
        "a=group:BUNDLE " +
        pc.transceivers
          .map(function(t) {
            return t.mid;
          })
          .join(" ") +
        "\r\n";
    var mediaSectionsInOffer = sdp.getMediaSections(pc.remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) return;
      if (transceiver.rejected) {
        if ("application" === transceiver.kind) sdp$$1 += "m=application 0 DTLS/SCTP 5000\r\n";
        else if ("audio" === transceiver.kind)
          sdp$$1 += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\n" + "a=rtpmap:0 PCMU/8000\r\n";
        else if ("video" === transceiver.kind)
          sdp$$1 += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\n" + "a=rtpmap:120 VP8/90000\r\n";
        sdp$$1 += "c=IN IP4 0.0.0.0\r\n" + "a=inactive\r\n" + "a=mid:" + transceiver.mid + "\r\n";
        return;
      }
      if (transceiver.stream) {
        var localTrack;
        if ("audio" === transceiver.kind) localTrack = transceiver.stream.getAudioTracks()[0];
        else if ("video" === transceiver.kind) localTrack = transceiver.stream.getVideoTracks()[0];
        if (localTrack)
          if (edgeVersion >= 15019 && "video" === transceiver.kind && !transceiver.sendEncodingParameters[0].rtx)
            transceiver.sendEncodingParameters[0].rtx = { ssrc: transceiver.sendEncodingParameters[0].ssrc + 1 };
      }
      var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return "rtx" === c.name.toLowerCase();
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) delete transceiver.sendEncodingParameters[0].rtx;
      sdp$$1 += writeMediaSection(transceiver, commonCapabilities, "answer", transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) sdp$$1 += "a=rtcp-rsize\r\n";
    });
    var desc = new window.RTCSessionDescription({ type: "answer", sdp: sdp$$1 });
    return Promise.resolve(desc);
  };
  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(void 0 !== candidate.sdpMLineIndex || candidate.sdpMid))
      return Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"));
    return new Promise(function(resolve, reject) {
      if (!pc.remoteDescription)
        return reject(makeError("InvalidStateError", "Can not add ICE candidate without a remote description"));
      else if (!candidate || "" === candidate.candidate)
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) continue;
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = sdp.getMediaSections(pc.remoteDescription.sdp);
          sections[j] += "a=end-of-candidates\r\n";
          pc.remoteDescription.sdp = sdp.getDescription(pc.remoteDescription.sdp) + sections.join("");
          if (pc.usingBundle) break;
        }
      else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid)
          for (var i = 0; i < pc.transceivers.length; i++)
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) return resolve();
          var cand = Object.keys(candidate.candidate).length > 0 ? sdp.parseCandidate(candidate.candidate) : {};
          if ("tcp" === cand.protocol && (0 === cand.port || 9 === cand.port)) return resolve();
          if (cand.component && 1 !== cand.component) return resolve();
          if (
            0 === sdpMLineIndex ||
            (sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport)
          )
            if (!maybeAddCandidate(transceiver.iceTransport, cand))
              return reject(makeError("OperationError", "Can not add ICE candidate"));
          var candidateString = candidate.candidate.trim();
          if (0 === candidateString.indexOf("a=")) candidateString = candidateString.substr(2);
          sections = sdp.getMediaSections(pc.remoteDescription.sdp);
          sections[sdpMLineIndex] += "a=" + (cand.type ? candidateString : "end-of-candidates") + "\r\n";
          pc.remoteDescription.sdp = sdp.getDescription(pc.remoteDescription.sdp) + sections.join("");
        } else return reject(makeError("OperationError", "Can not add ICE candidate"));
      }
      resolve();
    });
  };
  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) senderOrReceiver = transceiver.rtpSender;
        else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector)
          senderOrReceiver = transceiver.rtpReceiver;
      });
      if (!senderOrReceiver) throw makeError("InvalidAccessError", "Invalid selector.");
      return senderOrReceiver.getStats();
    }
    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(method) {
        if (transceiver[method]) promises.push(transceiver[method].getStats());
      });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };
  var ortcObjects = ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this).then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });
  var methods = ["createOffer", "createAnswer"];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if ("function" === typeof args[0] || "function" === typeof args[1])
        return nativeMethod.apply(this, [arguments[2]]).then(
          function(description) {
            if ("function" === typeof args[0]) args[0].apply(null, [description]);
          },
          function(error) {
            if ("function" === typeof args[1]) args[1].apply(null, [error]);
          }
        );
      return nativeMethod.apply(this, arguments);
    };
  });
  methods = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if ("function" === typeof args[1] || "function" === typeof args[2])
        return nativeMethod.apply(this, arguments).then(
          function() {
            if ("function" === typeof args[1]) args[1].apply(null);
          },
          function(error) {
            if ("function" === typeof args[2]) args[2].apply(null, [error]);
          }
        );
      return nativeMethod.apply(this, arguments);
    };
  });
  ["getStats"].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if ("function" === typeof args[1])
        return nativeMethod.apply(this, arguments).then(function() {
          if ("function" === typeof args[1]) args[1].apply(null);
        });
      return nativeMethod.apply(this, arguments);
    };
  });
  return RTCPeerConnection;
};
var getusermedia$1 = function(window) {
  var navigator = window && window.navigator;
  var shimError_ = function(e) {
    return {
      name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name;
      }
    };
  };
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(function(e) {
      return Promise.reject(shimError_(e));
    });
  };
};
var edge_shim = {
  shimGetUserMedia: getusermedia$1,
  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);
    if (window.RTCIceGatherer) {
      if (!window.RTCIceCandidate)
        window.RTCIceCandidate = function(args) {
          return args;
        };
      if (!window.RTCSessionDescription)
        window.RTCSessionDescription = function(args) {
          return args;
        };
      if (browserDetails.version < 15025) {
        var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, "enabled");
        Object.defineProperty(window.MediaStreamTrack.prototype, "enabled", {
          set: function(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event("enabled");
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }
    if (window.RTCRtpSender && !("dtmf" in window.RTCRtpSender.prototype))
      Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
        get: function() {
          if (void 0 === this._dtmf)
            if ("audio" === this.track.kind) this._dtmf = new window.RTCDtmfSender(this);
            else if ("video" === this.track.kind) this._dtmf = null;
          return this._dtmf;
        }
      });
    if (window.RTCDtmfSender && !window.RTCDTMFSender) window.RTCDTMFSender = window.RTCDtmfSender;
    var RTCPeerConnectionShim = rtcpeerconnection(window, browserDetails.version);
    window.RTCPeerConnection = function(config) {
      if (config && config.iceServers) config.iceServers = filtericeservers(config.iceServers);
      return new RTCPeerConnectionShim(config);
    };
    window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
  },
  shimReplaceTrack: function(window) {
    if (window.RTCRtpSender && !("replaceTrack" in window.RTCRtpSender.prototype))
      window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
};
var logging$2 = utils.log;
var getusermedia$2 = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;
  var shimError_ = function(e) {
    return {
      name:
        {
          InternalError: "NotReadableError",
          NotSupportedError: "TypeError",
          PermissionDeniedError: "NotAllowedError",
          SecurityError: "NotAllowedError"
        }[e.name] || e.name,
      message:
        {
          "The operation is insecure.":
            "The request is not allowed by the " + "user agent or the platform in the current context."
        }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ": ") + this.message;
      }
    };
  };
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if ("object" !== typeof c || c.require) return c;
      var require = [];
      Object.keys(c).forEach(function(key) {
        if ("require" === key || "advanced" === key || "mediaSource" === key) return;
        var r = (c[key] = "object" === typeof c[key] ? c[key] : { ideal: c[key] });
        if (void 0 !== r.min || void 0 !== r.max || void 0 !== r.exact) require.push(key);
        if (void 0 !== r.exact) {
          if ("number" === typeof r.exact) r.min = r.max = r.exact;
          else c[key] = r.exact;
          delete r.exact;
        }
        if (void 0 !== r.ideal) {
          c.advanced = c.advanced || [];
          var oc = {};
          if ("number" === typeof r.ideal) oc[key] = { min: r.ideal, max: r.ideal };
          else oc[key] = r.ideal;
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) delete c[key];
        }
      });
      if (require.length) c.require = require;
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging$2("spec: " + JSON.stringify(constraints));
      if (constraints.audio) constraints.audio = constraintsToFF37_(constraints.audio);
      if (constraints.video) constraints.video = constraintsToFF37_(constraints.video);
      logging$2("ff37: " + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };
  if (!navigator.mediaDevices)
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      addEventListener: function() {},
      removeEventListener: function() {}
    };
  navigator.mediaDevices.enumerateDevices =
    navigator.mediaDevices.enumerateDevices ||
    function() {
      return new Promise(function(resolve) {
        var infos = [
          { kind: "audioinput", deviceId: "default", label: "", groupId: "" },
          { kind: "videoinput", deviceId: "default", label: "", groupId: "" }
        ];
        resolve(infos);
      });
    };
  if (browserDetails.version < 41) {
    var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(void 0, function(e) {
        if ("NotFoundError" === e.name) return [];
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(
        function(stream) {
          if ((c.audio && !stream.getAudioTracks().length) || (c.video && !stream.getVideoTracks().length)) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException("The object can not be found here.", "NotFoundError");
          }
          return stream;
        },
        function(e) {
          return Promise.reject(shimError_(e));
        }
      );
    };
  }
  if (!(browserDetails.version > 55 && "autoGainControl" in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };
    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if ("object" === typeof c && "object" === typeof c.audio) {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, "autoGainControl", "mozAutoGainControl");
        remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
      }
      return nativeGetUserMedia(c);
    };
    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, "mozAutoGainControl", "autoGainControl");
        remap(obj, "mozNoiseSuppression", "noiseSuppression");
        return obj;
      };
    }
    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if ("audio" === this.kind && "object" === typeof c) {
          c = JSON.parse(JSON.stringify(c));
          remap(c, "autoGainControl", "mozAutoGainControl");
          remap(c, "noiseSuppression", "mozNoiseSuppression");
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) return getUserMedia_(constraints, onSuccess, onError);
    utils.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia");
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};
var firefox_shim = {
  shimGetUserMedia: getusermedia$2,
  shimOnTrack: function(window) {
    if ("object" === typeof window && window.RTCPeerConnection && !("ontrack" in window.RTCPeerConnection.prototype))
      Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener("track", this._ontrack);
            this.removeEventListener("addstream", this._ontrackpoly);
          }
          this.addEventListener("track", (this._ontrack = f));
          this.addEventListener(
            "addstream",
            (this._ontrackpoly = function(e) {
              e.stream.getTracks().forEach(
                function(track) {
                  var event = new Event("track");
                  event.track = track;
                  event.receiver = { track: track };
                  event.transceiver = { receiver: event.receiver };
                  event.streams = [e.stream];
                  this.dispatchEvent(event);
                }.bind(this)
              );
            }.bind(this))
          );
        }
      });
    if (
      "object" === typeof window &&
      window.RTCTrackEvent &&
      "receiver" in window.RTCTrackEvent.prototype &&
      !("transceiver" in window.RTCTrackEvent.prototype)
    )
      Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get: function() {
          return { receiver: this.receiver };
        }
      });
  },
  shimSourceObject: function(window) {
    if ("object" === typeof window)
      if (window.HTMLMediaElement && !("srcObject" in window.HTMLMediaElement.prototype))
        Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
  },
  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);
    if ("object" !== typeof window || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return;
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38)
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty("urls"))
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = { url: server.urls[j] };
                  if (0 === server.urls[j].indexOf("turn")) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              else newIceServers.push(pcConfig.iceServers[i]);
            }
            pcConfig.iceServers = newIceServers;
          }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;
      if (window.mozRTCPeerConnection.generateCertificate)
        Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
          get: function() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }
    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function() {
        arguments[0] = new ("addIceCandidate" === method ? window.RTCIceCandidate : window.RTCSessionDescription)(
          arguments[0]
        );
        return nativeMethod.apply(this, arguments);
      };
    });
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) arguments[1].apply(null);
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };
    var modernStatsTypes = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate"
    };
    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
      return nativeGetStats
        .apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) stats = makeMapStats(stats);
          if (browserDetails.version < 53 && !onSucc)
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if ("TypeError" !== e.name) throw e;
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, { type: modernStatsTypes[stat.type] || stat.type }));
              });
            }
          return stats;
        })
        .then(onSucc, onErr);
    };
  },
  shimSenderGetStats: function(window) {
    if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpSender.prototype) return;
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders)
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };
    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack)
      window.RTCPeerConnection.prototype.addTrack = function() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    window.RTCRtpSender.prototype.getStats = function() {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
  },
  shimReceiverGetStats: function(window) {
    if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpReceiver.prototype) return;
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers)
      window.RTCPeerConnection.prototype.getReceivers = function() {
        var pc = this;
        var receivers = origGetReceivers.apply(pc, []);
        receivers.forEach(function(receiver) {
          receiver._pc = pc;
        });
        return receivers;
      };
    utils.wrapPeerConnectionEvent(window, "track", function(e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function() {
      return this._pc.getStats(this.track);
    };
  },
  shimRemoveStream: function(window) {
    if (!window.RTCPeerConnection || "removeStream" in window.RTCPeerConnection.prototype) return;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      utils.deprecated("removeStream", "removeTrack");
      this.getSenders().forEach(function(sender) {
        if (sender.track && -1 !== stream.getTracks().indexOf(sender.track)) pc.removeTrack(sender);
      });
    };
  },
  shimRTCDataChannel: function(window) {
    if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
  },
  shimGetDisplayMedia: function(window, preferredMediaSource) {
    if ("getDisplayMedia" in window.navigator) return;
    navigator.getDisplayMedia = function(constraints) {
      if (!(constraints && constraints.video)) {
        var err = new DOMException("getDisplayMedia without video " + "constraints is undefined");
        err.name = "NotFoundError";
        err.code = 8;
        return Promise.reject(err);
      }
      if (true === constraints.video) constraints.video = { mediaSource: preferredMediaSource };
      else constraints.video.mediaSource = preferredMediaSource;
      return navigator.mediaDevices.getUserMedia(constraints);
    };
  }
};
var safari_shim = {
  shimLocalStreamsAPI: function(window) {
    if ("object" !== typeof window || !window.RTCPeerConnection) return;
    if (!("getLocalStreams" in window.RTCPeerConnection.prototype))
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        if (!this._localStreams) this._localStreams = [];
        return this._localStreams;
      };
    if (!("getStreamById" in window.RTCPeerConnection.prototype))
      window.RTCPeerConnection.prototype.getStreamById = function(id) {
        var result = null;
        if (this._localStreams)
          this._localStreams.forEach(function(stream) {
            if (stream.id === id) result = stream;
          });
        if (this._remoteStreams)
          this._remoteStreams.forEach(function(stream) {
            if (stream.id === id) result = stream;
          });
        return result;
      };
    if (!("addStream" in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        if (!this._localStreams) this._localStreams = [];
        if (-1 === this._localStreams.indexOf(stream)) this._localStreams.push(stream);
        var pc = this;
        stream.getTracks().forEach(function(track) {
          _addTrack.call(pc, track, stream);
        });
      };
      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (stream)
          if (!this._localStreams) this._localStreams = [stream];
          else if (-1 === this._localStreams.indexOf(stream)) this._localStreams.push(stream);
        return _addTrack.call(this, track, stream);
      };
    }
    if (!("removeStream" in window.RTCPeerConnection.prototype))
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        if (!this._localStreams) this._localStreams = [];
        var index = this._localStreams.indexOf(stream);
        if (-1 === index) return;
        this._localStreams.splice(index, 1);
        var pc = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function(sender) {
          if (-1 !== tracks.indexOf(sender.track)) pc.removeTrack(sender);
        });
      };
  },
  shimRemoteStreamsAPI: function(window) {
    if ("object" !== typeof window || !window.RTCPeerConnection) return;
    if (!("getRemoteStreams" in window.RTCPeerConnection.prototype))
      window.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    if (!("onaddstream" in window.RTCPeerConnection.prototype))
      Object.defineProperty(window.RTCPeerConnection.prototype, "onaddstream", {
        get: function() {
          return this._onaddstream;
        },
        set: function(f) {
          var pc = this;
          if (this._onaddstream) {
            this.removeEventListener("addstream", this._onaddstream);
            this.removeEventListener("track", this._onaddstreampoly);
          }
          this.addEventListener("addstream", (this._onaddstream = f));
          this.addEventListener(
            "track",
            (this._onaddstreampoly = function(e) {
              e.streams.forEach(function(stream) {
                if (!pc._remoteStreams) pc._remoteStreams = [];
                if (pc._remoteStreams.indexOf(stream) >= 0) return;
                pc._remoteStreams.push(stream);
                var event = new Event("addstream");
                event.stream = stream;
                pc.dispatchEvent(event);
              });
            })
          );
        }
      });
  },
  shimCallbacksAPI: function(window) {
    if ("object" !== typeof window || !window.RTCPeerConnection) return;
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function(successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) return promise;
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.createAnswer = function(successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) return promise;
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    var withCallback = function(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) return promise;
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) return promise;
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) return promise;
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function(window) {
    var navigator = window && window.navigator;
    if (!navigator.getUserMedia)
      if (navigator.webkitGetUserMedia) navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
        navigator.getUserMedia = function(constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
        }.bind(navigator);
  },
  shimRTCIceServerUrls: function(window) {
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty("urls") && server.hasOwnProperty("url")) {
            utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else newIceServers.push(pcConfig.iceServers[i]);
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    if ("generateCertificate" in window.RTCPeerConnection)
      Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
  },
  shimTrackEventTransceiver: function(window) {
    if (
      "object" === typeof window &&
      window.RTCPeerConnection &&
      "receiver" in window.RTCTrackEvent.prototype &&
      !window.RTCTransceiver
    )
      Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get: function() {
          return { receiver: this.receiver };
        }
      });
  },
  shimCreateOfferLegacy: function(window) {
    var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
      var pc = this;
      if (offerOptions) {
        if ("undefined" !== typeof offerOptions.offerToReceiveAudio)
          offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
        var audioTransceiver = pc.getTransceivers().find(function(transceiver) {
          return transceiver.sender.track && "audio" === transceiver.sender.track.kind;
        });
        if (false === offerOptions.offerToReceiveAudio && audioTransceiver) {
          if ("sendrecv" === audioTransceiver.direction)
            if (audioTransceiver.setDirection) audioTransceiver.setDirection("sendonly");
            else audioTransceiver.direction = "sendonly";
          else if ("recvonly" === audioTransceiver.direction)
            if (audioTransceiver.setDirection) audioTransceiver.setDirection("inactive");
            else audioTransceiver.direction = "inactive";
        } else if (true === offerOptions.offerToReceiveAudio && !audioTransceiver) pc.addTransceiver("audio");
        if ("undefined" !== typeof offerOptions.offerToReceiveAudio)
          offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
        var videoTransceiver = pc.getTransceivers().find(function(transceiver) {
          return transceiver.sender.track && "video" === transceiver.sender.track.kind;
        });
        if (false === offerOptions.offerToReceiveVideo && videoTransceiver) {
          if ("sendrecv" === videoTransceiver.direction) videoTransceiver.setDirection("sendonly");
          else if ("recvonly" === videoTransceiver.direction) videoTransceiver.setDirection("inactive");
        } else if (true === offerOptions.offerToReceiveVideo && !videoTransceiver) pc.addTransceiver("video");
      }
      return origCreateOffer.apply(pc, arguments);
    };
  }
};
var common_shim = {
  shimRTCIceCandidate: function(window) {
    if (!window.RTCIceCandidate || (window.RTCIceCandidate && "foundation" in window.RTCIceCandidate.prototype)) return;
    var NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function(args) {
      if ("object" === typeof args && args.candidate && 0 === args.candidate.indexOf("a=")) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substr(2);
      }
      if (args.candidate && args.candidate.length) {
        var nativeCandidate = new NativeRTCIceCandidate(args);
        var parsedCandidate = sdp.parseCandidate(args.candidate);
        var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);
        augmentedCandidate.toJSON = function() {
          return {
            candidate: augmentedCandidate.candidate,
            sdpMid: augmentedCandidate.sdpMid,
            sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
            usernameFragment: augmentedCandidate.usernameFragment
          };
        };
        return augmentedCandidate;
      }
      return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    utils.wrapPeerConnectionEvent(window, "icecandidate", function(e) {
      if (e.candidate)
        Object.defineProperty(e, "candidate", { value: new window.RTCIceCandidate(e.candidate), writable: "false" });
      return e;
    });
  },
  shimCreateObjectURL: function(window) {
    var URL = window && window.URL;
    if (
      !(
        "object" === typeof window &&
        window.HTMLMediaElement &&
        "srcObject" in window.HTMLMediaElement.prototype &&
        URL.createObjectURL &&
        URL.revokeObjectURL
      )
    )
      return;
    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(),
      newId = 0;
    URL.createObjectURL = function(stream) {
      if ("getTracks" in stream) {
        var url = "polyblob:" + ++newId;
        streams.set(url, stream);
        utils.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream");
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };
    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, "src");
    Object.defineProperty(window.HTMLMediaElement.prototype, "src", {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });
    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function() {
      if (2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase())
        this.srcObject = streams.get(arguments[1]) || null;
      return nativeSetAttribute.apply(this, arguments);
    };
  },
  shimMaxMessageSize: function(window) {
    if (window.RTCSctpTransport || !window.RTCPeerConnection) return;
    var browserDetails = utils.detectBrowser(window);
    if (!("sctp" in window.RTCPeerConnection.prototype))
      Object.defineProperty(window.RTCPeerConnection.prototype, "sctp", {
        get: function() {
          return "undefined" === typeof this._sctp ? null : this._sctp;
        }
      });
    var sctpInDescription = function(description) {
      var sections = sdp.splitSections(description.sdp);
      sections.shift();
      return sections.some(function(mediaSection) {
        var mLine = sdp.parseMLine(mediaSection);
        return mLine && "application" === mLine.kind && -1 !== mLine.protocol.indexOf("SCTP");
      });
    };
    var getRemoteFirefoxVersion = function(description) {
      var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (null === match || match.length < 2) return -1;
      var version = parseInt(match[1], 10);
      return version !== version ? -1 : version;
    };
    var getCanSendMaxMessageSize = function(remoteIsFirefox) {
      var canSendMaxMessageSize = 65536;
      if ("firefox" === browserDetails.browser)
        if (browserDetails.version < 57)
          if (-1 === remoteIsFirefox) canSendMaxMessageSize = 16384;
          else canSendMaxMessageSize = 2147483637;
        else if (browserDetails.version < 60) canSendMaxMessageSize = 57 === browserDetails.version ? 65535 : 65536;
        else canSendMaxMessageSize = 2147483637;
      return canSendMaxMessageSize;
    };
    var getMaxMessageSize = function(description, remoteIsFirefox) {
      var maxMessageSize = 65536;
      if ("firefox" === browserDetails.browser && 57 === browserDetails.version) maxMessageSize = 65535;
      var match = sdp.matchPrefix(description.sdp, "a=max-message-size:");
      if (match.length > 0) maxMessageSize = parseInt(match[0].substr(19), 10);
      else if ("firefox" === browserDetails.browser && -1 !== remoteIsFirefox) maxMessageSize = 2147483637;
      return maxMessageSize;
    };
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      var pc = this;
      pc._sctp = null;
      if (sctpInDescription(arguments[0])) {
        var isFirefox = getRemoteFirefoxVersion(arguments[0]);
        var canSendMMS = getCanSendMaxMessageSize(isFirefox);
        var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
        var maxMessageSize;
        if (0 === canSendMMS && 0 === remoteMMS) maxMessageSize = Number.POSITIVE_INFINITY;
        else if (0 === canSendMMS || 0 === remoteMMS) maxMessageSize = Math.max(canSendMMS, remoteMMS);
        else maxMessageSize = Math.min(canSendMMS, remoteMMS);
        var sctp = {};
        Object.defineProperty(sctp, "maxMessageSize", {
          get: function() {
            return maxMessageSize;
          }
        });
        pc._sctp = sctp;
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  },
  shimSendThrowTypeError: function(window) {
    if (!(window.RTCPeerConnection && "createDataChannel" in window.RTCPeerConnection.prototype)) return;
    function wrapDcSend(dc, pc) {
      var origDataChannelSend = dc.send;
      dc.send = function() {
        var data = arguments[0];
        var length = data.length || data.size || data.byteLength;
        if ("open" === dc.readyState && pc.sctp && length > pc.sctp.maxMessageSize)
          throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
        return origDataChannelSend.apply(dc, arguments);
      };
    }
    var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function() {
      var pc = this;
      var dataChannel = origCreateDataChannel.apply(pc, arguments);
      wrapDcSend(dataChannel, pc);
      return dataChannel;
    };
    utils.wrapPeerConnectionEvent(window, "datachannel", function(e) {
      wrapDcSend(e.channel, e.target);
      return e;
    });
  }
};
var adapter_factory = function(dependencies, opts) {
  var window = dependencies && dependencies.window;
  var options = { shimChrome: true, shimFirefox: true, shimEdge: true, shimSafari: true };
  for (var key in opts) if (hasOwnProperty.call(opts, key)) options[key] = opts[key];
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);
  var chromeShim = chrome_shim || null;
  var edgeShim = edge_shim || null;
  var firefoxShim = firefox_shim || null;
  var safariShim = safari_shim || null;
  var commonShim = common_shim || null;
  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };
  switch (browserDetails.browser) {
    case "chrome":
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging("Chrome shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming chrome.");
      adapter.browserShim = chromeShim;
      commonShim.shimCreateObjectURL(window);
      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);
      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case "firefox":
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging("Firefox shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming firefox.");
      adapter.browserShim = firefoxShim;
      commonShim.shimCreateObjectURL(window);
      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);
      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case "edge":
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging("MS edge shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming edge.");
      adapter.browserShim = edgeShim;
      commonShim.shimCreateObjectURL(window);
      edgeShim.shimGetUserMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case "safari":
      if (!safariShim || !options.shimSafari) {
        logging("Safari shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming safari.");
      adapter.browserShim = safariShim;
      commonShim.shimCreateObjectURL(window);
      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);
      safariShim.shimCreateOfferLegacy(window);
      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    default:
      logging("Unsupported browser!");
  }
  return adapter;
};
var adapter_core = adapter_factory({ window: commonjsGlobal.window });
var f$2 = _wks;
var _wksExt = { f: f$2 };
var iterator = _wksExt.f("iterator");
var iterator$1 = createCommonjsModule(function(module) {
  module.exports = { default: iterator, __esModule: true };
});
unwrapExports(iterator$1);
var _meta = createCommonjsModule(function(module) {
  var META = _uid("meta");
  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible =
    Object.isExtensible ||
    function() {
      return true;
    };
  var FREEZE = !_fails(function() {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function(it) {
    setDesc(it, META, { value: { i: "O" + ++id, w: {} } });
  };
  var fastKey = function(it, create) {
    if (!_isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
    if (!_has(it, META)) {
      if (!isExtensible(it)) return "F";
      if (!create) return "E";
      setMeta(it);
    }
    return it[META].i;
  };
  var getWeak = function(it, create) {
    if (!_has(it, META)) {
      if (!isExtensible(it)) return true;
      if (!create) return false;
      setMeta(it);
    }
    return it[META].w;
  };
  var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = (module.exports = { KEY: META, NEED: false, fastKey: fastKey, getWeak: getWeak, onFreeze: onFreeze });
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;
var defineProperty = _objectDp.f;
var _wksDefine = function(name) {
  var $Symbol = _core.Symbol || (_core.Symbol = {});
  if ("_" != name.charAt(0) && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};
var f$3 = Object.getOwnPropertySymbols;
var _objectGops = { f: f$3 };
var f$4 = {}.propertyIsEnumerable;
var _objectPie = { f: f$4 };
var _enumKeys = function(it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
  }
  return result;
};
var _isArray =
  Array.isArray ||
  function isArray(arg) {
    return "Array" == _cof(arg);
  };
var hiddenKeys = _enumBugKeys.concat("length", "prototype");
var f$5 =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };
var _objectGopn = { f: f$5 };
var gOPN = _objectGopn.f;
var toString$1 = {}.toString;
var windowNames =
  "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};
var f$6 = function getOwnPropertyNames(it) {
  return windowNames && "[object Window]" == toString$1.call(it) ? getWindowNames(it) : gOPN(_toIobject(it));
};
var _objectGopnExt = { f: f$6 };
var gOPD = Object.getOwnPropertyDescriptor;
var f$7 = _descriptors
  ? gOPD
  : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine)
        try {
          return gOPD(O, P);
        } catch (e) {}
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };
var _objectGopd = { f: f$7 };
var META = _meta.KEY;
var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = "prototype";
var HIDDEN = _wks("_hidden");
var TO_PRIMITIVE = _wks("toPrimitive");
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared("symbol-registry");
var AllSymbols = _shared("symbols");
var OPSymbols = _shared("op-symbols");
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE$1 = "function" == typeof $Symbol;
var QObject = _global.QObject;
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
var setSymbolDesc =
  _descriptors &&
  _fails(function() {
    return (
      7 !=
      _objectCreate(
        dP$1({}, "a", {
          get: function() {
            return dP$1(this, "a", { value: 7 }).a;
          }
        })
      ).a
    );
  })
    ? function(it, key, D) {
        var protoDesc = gOPD$1(ObjectProto$1, key);
        if (protoDesc) delete ObjectProto$1[key];
        dP$1(it, key, D);
        if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
      }
    : dP$1;
var wrap = function(tag) {
  var sym = (AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]));
  sym._k = tag;
  return sym;
};
var isSymbol =
  USE_NATIVE$1 && "symbol" == typeof $Symbol.iterator
    ? function(it) {
        return "symbol" == typeof it;
      }
    : function(it) {
        return it instanceof $Symbol;
      };
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys((P = _toIobject(P)));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
  return it;
};
var $create = function create(it, P) {
  return void 0 === P ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, (key = _toPrimitive(key, true)));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || (_has(this, HIDDEN) && this[HIDDEN][key]) ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) if (!_has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META) result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i)
    if (_has(AllSymbols, (key = names[i++])) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  return result;
};
if (!USE_NATIVE$1) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
    var tag = _uid(arguments.length > 0 ? arguments[0] : void 0);
    var $set = function(value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], "toString", function toString() {
    return this._k;
  });
  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;
  if (_descriptors && !_library) _redefine(ObjectProto$1, "propertyIsEnumerable", $propertyIsEnumerable, true);
  _wksExt.f = function(name) {
    return wrap(_wks(name));
  };
}
_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Symbol: $Symbol });
for (
  var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
      ","
    ),
    j = 0;
  es6Symbols.length > j;

)
  _wks(es6Symbols[j++]);
for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k; )
  _wksDefine(wellKnownSymbols[k++]);
_export(_export.S + _export.F * !USE_NATIVE$1, "Symbol", {
  for: function(key) {
    return _has(SymbolRegistry, (key += "")) ? SymbolRegistry[key] : (SymbolRegistry[key] = $Symbol(key));
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function() {
    setter = true;
  },
  useSimple: function() {
    setter = false;
  }
});
_export(_export.S + _export.F * !USE_NATIVE$1, "Object", {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
$JSON &&
  _export(
    _export.S +
      _export.F *
        (!USE_NATIVE$1 ||
          _fails(function() {
            var S = $Symbol();
            return "[null]" != _stringify([S]) || "{}" != _stringify({ a: S }) || "{}" != _stringify(Object(S));
          })),
    "JSON",
    {
      stringify: function stringify(it) {
        if (void 0 === it || isSymbol(it)) return;
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        replacer = args[1];
        if ("function" == typeof replacer) $replacer = replacer;
        if ($replacer || !_isArray(replacer))
          replacer = function(key, value) {
            if ($replacer) value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    }
  );
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
_setToStringTag($Symbol, "Symbol");
_setToStringTag(Math, "Math", true);
_setToStringTag(_global.JSON, "JSON", true);
_wksDefine("asyncIterator");
_wksDefine("observable");
var symbol = _core.Symbol;
var symbol$1 = createCommonjsModule(function(module) {
  module.exports = { default: symbol, __esModule: true };
});
unwrapExports(symbol$1);
var _typeof_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  var _iterator2 = _interopRequireDefault(iterator$1);
  var _symbol2 = _interopRequireDefault(symbol$1);
  var _typeof =
    "function" === typeof _symbol2.default && "symbol" === typeof _iterator2.default
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
            "function" === typeof _symbol2.default &&
            obj.constructor === _symbol2.default &&
            obj !== _symbol2.default.prototype
            ? "symbol"
            : typeof obj;
        };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default =
    "function" === typeof _symbol2.default && "symbol" === _typeof(_iterator2.default)
      ? function(obj) {
          return "undefined" === typeof obj ? "undefined" : _typeof(obj);
        }
      : function(obj) {
          return obj &&
            "function" === typeof _symbol2.default &&
            obj.constructor === _symbol2.default &&
            obj !== _symbol2.default.prototype
            ? "symbol"
            : "undefined" === typeof obj
              ? "undefined"
              : _typeof(obj);
        };
});
var _typeof = unwrapExports(_typeof_1);
var uaParser = createCommonjsModule(function(module, exports) {
  /*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
  (function(window, undefined) {
    var LIBVERSION = "0.7.18",
      EMPTY = "",
      UNKNOWN = "?",
      FUNC_TYPE = "function",
      UNDEF_TYPE = "undefined",
      OBJ_TYPE = "object",
      STR_TYPE = "string",
      MAJOR = "major",
      MODEL = "model",
      NAME = "name",
      TYPE = "type",
      VENDOR = "vendor",
      VERSION = "version",
      ARCHITECTURE = "architecture",
      CONSOLE = "console",
      MOBILE = "mobile",
      TABLET = "tablet",
      SMARTTV = "smarttv",
      WEARABLE = "wearable",
      EMBEDDED = "embedded";
    var util = {
      extend: function(regexes, extensions) {
        var margedRegexes = {};
        for (var i in regexes)
          if (extensions[i] && extensions[i].length % 2 === 0) margedRegexes[i] = extensions[i].concat(regexes[i]);
          else margedRegexes[i] = regexes[i];
        return margedRegexes;
      },
      has: function(str1, str2) {
        if ("string" === typeof str1) return -1 !== str2.toLowerCase().indexOf(str1.toLowerCase());
        else return false;
      },
      lowerize: function(str) {
        return str.toLowerCase();
      },
      major: function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined;
      },
      trim: function(str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    };
    var mapper = {
      rgx: function(ua, arrays) {
        var j,
          k,
          p,
          q,
          matches,
          match,
          i = 0;
        while (i < arrays.length && !matches) {
          var regex = arrays[i],
            props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            matches = regex[j++].exec(ua);
            if (!!matches)
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (2 == q.length)
                    if (typeof q[1] == FUNC_TYPE) this[q[0]] = q[1].call(this, match);
                    else this[q[0]] = q[1];
                  else if (3 == q.length)
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test))
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                    else this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                  else if (4 == q.length) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                } else this[q] = match ? match : undefined;
              }
          }
          i += 2;
        }
      },
      str: function(str, map) {
        for (var i in map)
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) if (util.has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
          } else if (util.has(map[i], str)) return i === UNKNOWN ? undefined : i;
        return str;
      }
    };
    var maps = {
      browser: {
        oldsafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }
        }
      },
      device: {
        amazon: { model: { "Fire Phone": ["SD", "KF"] } },
        sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } }
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2000: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          }
        }
      }
    };
    var regexes = {
      browser: [
        [
          /(opera\smini)\/([\w\.-]+)/i,
          /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
          /(opera).+version\/([\w\.]+)/i,
          /(opera)[\/\s]+([\w\.]+)/i
        ],
        [NAME, VERSION],
        [/(opios)[\/\s]+([\w\.]+)/i],
        [[NAME, "Opera Mini"], VERSION],
        [/\s(opr)\/([\w\.]+)/i],
        [[NAME, "Opera"], VERSION],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
          /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
          /(?:ms|\()(ie)\s([\w\.]+)/i,
          /(rekonq)\/([\w\.]*)/i,
          /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i
        ],
        [NAME, VERSION],
        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
        [[NAME, "IE"], VERSION],
        [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
        [[NAME, "Edge"], VERSION],
        [/(yabrowser)\/([\w\.]+)/i],
        [[NAME, "Yandex"], VERSION],
        [/(puffin)\/([\w\.]+)/i],
        [[NAME, "Puffin"], VERSION],
        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
        [[NAME, "UCBrowser"], VERSION],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [[NAME, /_/g, " "], VERSION],
        [/(micromessenger)\/([\w\.]+)/i],
        [[NAME, "WeChat"], VERSION],
        [/(qqbrowserlite)\/([\w\.]+)/i],
        [NAME, VERSION],
        [/(QQ)\/([\d\.]+)/i],
        [NAME, VERSION],
        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
        [NAME, VERSION],
        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
        [NAME, VERSION],
        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
        [NAME, VERSION],
        [/(MetaSr)[\/\s]?([\w\.]+)/i],
        [NAME],
        [/(LBBROWSER)/i],
        [NAME],
        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
        [VERSION, [NAME, "MIUI Browser"]],
        [/;fbav\/([\w\.]+);/i],
        [VERSION, [NAME, "Facebook"]],
        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
        [VERSION, [NAME, "Chrome Headless"]],
        [/\swv\).+(chrome)\/([\w\.]+)/i],
        [[NAME, /(.+)/, "$1 WebView"], VERSION],
        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
        [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION],
        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
        [VERSION, [NAME, "Android Browser"]],
        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
        [NAME, VERSION],
        [/(dolfin)\/([\w\.]+)/i],
        [[NAME, "Dolphin"], VERSION],
        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
        [[NAME, "Chrome"], VERSION],
        [/(coast)\/([\w\.]+)/i],
        [[NAME, "Opera Coast"], VERSION],
        [/fxios\/([\w\.-]+)/i],
        [VERSION, [NAME, "Firefox"]],
        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
        [VERSION, [NAME, "Mobile Safari"]],
        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
        [VERSION, NAME],
        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [[NAME, "GSA"], VERSION],
        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
        [NAME, VERSION],
        [/(navigator|netscape)\/([\w\.-]+)/i],
        [[NAME, "Netscape"], VERSION],
        [
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
          /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
          /(links)\s\(([\w\.]+)/i,
          /(gobrowser)\/?([\w\.]*)/i,
          /(ice\s?browser)\/v?([\w\._]+)/i,
          /(mosaic)[\/\s]([\w\.]+)/i
        ],
        [NAME, VERSION]
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
        [[ARCHITECTURE, "amd64"]],
        [/(ia32(?=;))/i],
        [[ARCHITECTURE, util.lowerize]],
        [/((?:i[346]|x)86)[;\)]/i],
        [[ARCHITECTURE, "ia32"]],
        [/windows\s(ce|mobile);\sppc;/i],
        [[ARCHITECTURE, "arm"]],
        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
        [[ARCHITECTURE, /ower/, "", util.lowerize]],
        [/(sun4\w)[;\)]/i],
        [[ARCHITECTURE, "sparc"]],
        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
        [[ARCHITECTURE, util.lowerize]]
      ],
      device: [
        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
        [MODEL, VENDOR, [TYPE, TABLET]],
        [/applecoremedia\/[\w\.]+ \((ipad)/],
        [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]],
        [/(apple\s{0,1}tv)/i],
        [[MODEL, "Apple TV"], [VENDOR, "Apple"]],
        [
          /(archos)\s(gamepad2?)/i,
          /(hp).+(touchpad)/i,
          /(hp).+(tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /\s(nook)[\w\s]+build\/(\w+)/i,
          /(dell)\s(strea[kpr\s\d]*[\dko])/i
        ],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [/(kf[A-z]+)\sbuild\/.+silk\//i],
        [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
        [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [TYPE, MOBILE]],
        [/\((ip[honed|\s\w*]+);.+(apple)/i],
        [MODEL, VENDOR, [TYPE, MOBILE]],
        [/\((ip[honed|\s\w*]+);/i],
        [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]],
        [
          /(blackberry)[\s-]?(\w+)/i,
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
          /(hp)\s([\w\s]+\w)/i,
          /(asus)-?(\w+)/i
        ],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [/\(bb10;\s(\w+)/i],
        [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]],
        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
        [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]],
        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
        [[VENDOR, "Sony"], [MODEL, "Xperia Tablet"], [TYPE, TABLET]],
        [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
        [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]],
        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
        [VENDOR, MODEL, [TYPE, CONSOLE]],
        [/android.+;\s(shield)\sbuild/i],
        [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
        [/(playstation\s[34portablevi]+)/i],
        [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]],
        [/(sprint\s(\w+))/i],
        [
          [VENDOR, mapper.str, maps.device.sprint.vendor],
          [MODEL, mapper.str, maps.device.sprint.model],
          [TYPE, MOBILE]
        ],
        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [
          /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
          /(zte)-(\w*)/i,
          /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
        ],
        [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
        [/(nexus\s9)/i],
        [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
        [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]],
        [/(microsoft);\s(lumia[\s\w]+)/i],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
        [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]],
        [/(kin\.[onetw]{3})/i],
        [[MODEL, /\./g, " "], [VENDOR, "Microsoft"], [TYPE, MOBILE]],
        [
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
          /mot[\s-]?(\w*)/i,
          /(XT\d{3,4}) build\//i,
          /(nexus\s6)/i
        ],
        [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]],
        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
        [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]],
        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
        [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]],
        [/hbbtv.+maple;(\d+)/i],
        [[MODEL, /^/, "SmartTV"], [VENDOR, "Samsung"], [TYPE, SMARTTV]],
        [/\(dtv[\);].+(aquos)/i],
        [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
        [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]],
        [/smart-tv.+(samsung)/i],
        [VENDOR, [TYPE, SMARTTV], MODEL],
        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
        [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]],
        [/sie-(\w*)/i],
        [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
        [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]],
        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
        [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
        [/android.+([vl]k\-?\d{3})\s+build/i],
        [MODEL, [VENDOR, "LG"], [TYPE, TABLET]],
        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
        [[VENDOR, "LG"], MODEL, [TYPE, TABLET]],
        [/(lg) netcast\.tv/i],
        [VENDOR, MODEL, [TYPE, SMARTTV]],
        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
        [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]],
        [/android.+(ideatab[a-z0-9\-\s]+)/i],
        [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
        [/linux;.+((jolla));/i],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [/((pebble))app\/[\d\.]+\s/i],
        [VENDOR, MODEL, [TYPE, WEARABLE]],
        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [/crkey/i],
        [[MODEL, "Chromecast"], [VENDOR, "Google"]],
        [/android.+;\s(glass)\s\d/i],
        [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]],
        [/android.+;\s(pixel c)\s/i],
        [MODEL, [VENDOR, "Google"], [TYPE, TABLET]],
        [/android.+;\s(pixel xl|pixel)\s/i],
        [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]],
        [
          /android.+;\s(\w+)\s+build\/hm\1/i,
          /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
          /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
          /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
        ],
        [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, MOBILE]],
        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
        [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, TABLET]],
        [/android.+;\s(m[1-5]\snote)\sbuild/i],
        [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]],
        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
        [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
        [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
        [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
        [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
        [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]],
        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
        [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
        [/android.+;\s(k88)\sbuild/i],
        [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
        [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
        [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
        [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
        [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
        [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
        [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
        [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
        [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
        [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
        [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [/android.+[;\/]\s*TU_(1491)\s+build/i],
        [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
        [/android.+(KS(.+))\s+build/i],
        [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
        [[TYPE, util.lowerize], VENDOR, MODEL],
        [/(android[\w\.\s\-]{0,9});.+build/i],
        [MODEL, [VENDOR, "Generic"]]
      ],
      engine: [
        [/windows.+\sedge\/([\w\.]+)/i],
        [VERSION, [NAME, "EdgeHTML"]],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
          /(icab)[\/\s]([23]\.[\d\.]+)/i
        ],
        [NAME, VERSION],
        [/rv\:([\w\.]{1,9}).+(gecko)/i],
        [VERSION, NAME]
      ],
      os: [
        [/microsoft\s(windows)\s(vista|xp)/i],
        [NAME, VERSION],
        [
          /(windows)\snt\s6\.2;\s(arm)/i,
          /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
          /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
        ],
        [NAME, [VERSION, mapper.str, maps.os.windows.version]],
        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
        [[NAME, "Windows"], [VERSION, mapper.str, maps.os.windows.version]],
        [/\((bb)(10);/i],
        [[NAME, "BlackBerry"], VERSION],
        [
          /(blackberry)\w*\/?([\w\.]*)/i,
          /(tizen)[\/\s]([\w\.]+)/i,
          /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
          /linux;.+(sailfish);/i
        ],
        [NAME, VERSION],
        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
        [[NAME, "Symbian"], VERSION],
        [/\((series40);/i],
        [NAME],
        [/mozilla.+\(mobile;.+gecko.+firefox/i],
        [[NAME, "Firefox OS"], VERSION],
        [
          /(nintendo|playstation)\s([wids34portablevu]+)/i,
          /(mint)[\/\s\(]?(\w*)/i,
          /(mageia|vectorlinux)[;\s]/i,
          /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
          /(hurd|linux)\s?([\w\.]*)/i,
          /(gnu)\s?([\w\.]*)/i
        ],
        [NAME, VERSION],
        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
        [[NAME, "Chromium OS"], VERSION],
        [/(sunos)\s?([\w\.\d]*)/i],
        [[NAME, "Solaris"], VERSION],
        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
        [NAME, VERSION],
        [/(haiku)\s(\w+)/i],
        [NAME, VERSION],
        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
        [[VERSION, /_/g, "."], [NAME, "iOS"]],
        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
        [[NAME, "Mac OS"], [VERSION, /_/g, "."]],
        [
          /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
          /(unix)\s?([\w\.]*)/i
        ],
        [NAME, VERSION]
      ]
    };
    var UAParser = function(uastring, extensions) {
      if ("object" === typeof uastring) {
        extensions = uastring;
        uastring = undefined;
      }
      if (!(this instanceof UAParser)) return new UAParser(uastring, extensions).getResult();
      var ua =
        uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
      var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
      this.getBrowser = function() {
        var browser = { name: undefined, version: undefined };
        mapper.rgx.call(browser, ua, rgxmap.browser);
        browser.major = util.major(browser.version);
        return browser;
      };
      this.getCPU = function() {
        var cpu = { architecture: undefined };
        mapper.rgx.call(cpu, ua, rgxmap.cpu);
        return cpu;
      };
      this.getDevice = function() {
        var device = { vendor: undefined, model: undefined, type: undefined };
        mapper.rgx.call(device, ua, rgxmap.device);
        return device;
      };
      this.getEngine = function() {
        var engine = { name: undefined, version: undefined };
        mapper.rgx.call(engine, ua, rgxmap.engine);
        return engine;
      };
      this.getOS = function() {
        var os = { name: undefined, version: undefined };
        mapper.rgx.call(os, ua, rgxmap.os);
        return os;
      };
      this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      };
      this.getUA = function() {
        return ua;
      };
      this.setUA = function(uastring) {
        ua = uastring;
        return this;
      };
      return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = { NAME: NAME, MAJOR: MAJOR, VERSION: VERSION };
    UAParser.CPU = { ARCHITECTURE: ARCHITECTURE };
    UAParser.DEVICE = {
      MODEL: MODEL,
      VENDOR: VENDOR,
      TYPE: TYPE,
      CONSOLE: CONSOLE,
      MOBILE: MOBILE,
      SMARTTV: SMARTTV,
      TABLET: TABLET,
      WEARABLE: WEARABLE,
      EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = { NAME: NAME, VERSION: VERSION };
    UAParser.OS = { NAME: NAME, VERSION: VERSION };
    if (module.exports) exports = module.exports = UAParser;
    exports.UAParser = UAParser;
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE) {
      var parser = new UAParser();
      $.ua = parser.getResult();
      $.ua.get = function() {
        return parser.getUA();
      };
      $.ua.set = function(uastring) {
        parser.setUA(uastring);
        var result = parser.getResult();
        for (var prop in result) $.ua[prop] = result[prop];
      };
    }
  })("object" === typeof window ? window : commonjsGlobal);
});
var uaParser_1 = uaParser.UAParser;
var BrowserCompatibility;
(function(BrowserCompatibility) {
  (function(Feature) {
    Feature["BLOB"] = "blob";
    Feature["MEDIA_DEVICES"] = "mediaDevices";
    Feature["URL_OBJECT"] = "urlObject";
    Feature["WEB_WORKERS"] = "webWorkers";
    Feature["WEB_ASSEMBLY"] = "webAssembly";
    Feature["WEB_ASSEMBLY_ERROR_FREE"] = "webAssemblyErrorFree";
  })(BrowserCompatibility.Feature || (BrowserCompatibility.Feature = {}));
})(BrowserCompatibility || (BrowserCompatibility = {}));
var BrowserHelper;
(function(BrowserHelper) {
  BrowserHelper.userAgentInfo = new uaParser_1(navigator.userAgent);
  function checkBrowserCompatibility() {
    var fullSupport = true;
    var scannerSupport = true;
    var missingFeatures = [];
    if (null == navigator.mediaDevices || "function" !== typeof navigator.mediaDevices.getUserMedia) {
      missingFeatures.push(BrowserCompatibility.Feature.MEDIA_DEVICES);
      fullSupport = false;
    }
    if (!window.hasOwnProperty("Worker") || "function" !== typeof window.Worker) {
      missingFeatures.push(BrowserCompatibility.Feature.WEB_WORKERS);
      fullSupport = scannerSupport = false;
    }
    if (!window.hasOwnProperty("WebAssembly") || "object" !== _typeof(window.WebAssembly)) {
      missingFeatures.push(BrowserCompatibility.Feature.WEB_ASSEMBLY);
      fullSupport = scannerSupport = false;
    }
    if (!window.hasOwnProperty("Blob") || "function" !== typeof window.Blob) {
      missingFeatures.push(BrowserCompatibility.Feature.BLOB);
      fullSupport = scannerSupport = false;
    }
    if (
      !window.hasOwnProperty("URL") ||
      ("function" !== typeof window.URL && "object" !== _typeof(window.URL)) ||
      "function" !== typeof window.URL.createObjectURL
    ) {
      missingFeatures.push(BrowserCompatibility.Feature.URL_OBJECT);
      fullSupport = scannerSupport = false;
    }
    var os = BrowserHelper.userAgentInfo.getOS();
    if ("iOS" === os.name && null != os.version)
      if (-1 !== ["11.2.2", "11.2.5", "11.2.6"].indexOf(os.version)) {
        missingFeatures.push(BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE);
        fullSupport = scannerSupport = false;
      }
    return { fullSupport: fullSupport, scannerSupport: scannerSupport, missingFeatures: missingFeatures };
  }
  BrowserHelper.checkBrowserCompatibility = checkBrowserCompatibility;
  function getCookieValue(key) {
    var cookieMatch = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    if (null == cookieMatch) return "";
    else {
      var cookieValue = cookieMatch.pop();
      return null == cookieValue ? "" : cookieValue;
    }
  }
  function setCookieValue(key, value, expirationDays) {
    var date = new Date();
    date.setTime(date.getTime() + 24 * expirationDays * 60 * 60 * 1e3);
    document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
  }
  function getDeviceId() {
    var cookieKey = "scandit-device-id";
    var storedDeviceId = getCookieValue(cookieKey);
    if ("" !== storedDeviceId) return storedDeviceId;
    var hexCharacters = "0123456789abcdef";
    var randomDeviceId = "";
    for (var i = 0; i < 40; ++i) randomDeviceId += hexCharacters.charAt(Math.floor(16 * Math.random()));
    setCookieValue(cookieKey, randomDeviceId, 3650);
    return randomDeviceId;
  }
  BrowserHelper.getDeviceId = getDeviceId;
})(BrowserHelper || (BrowserHelper = {}));
var _createProperty = function(object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};
_export(_export.S + _export.F * !_iterDetect(function(iter) {}), "Array", {
  from: function from(arrayLike) {
    var O = _toObject(arrayLike);
    var C = "function" == typeof this ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : void 0;
    var mapping = void 0 !== mapfn;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
    if (void 0 != iterFn && !(C == Array && _isArrayIter(iterFn)))
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++)
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
    else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++)
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
    result.length = index;
    return result;
  }
});
var from = _core.Array.from;
var from$1 = createCommonjsModule(function(module) {
  module.exports = { default: from, __esModule: true };
});
var _Array$from = unwrapExports(from$1);
var toConsumableArray = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  var _from2 = _interopRequireDefault(from$1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else return (0, _from2.default)(arr);
  };
});
var _toConsumableArray = unwrapExports(toConsumableArray);
var _validateCollection = function(it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
  return it;
};
var dP$2 = _objectDp.f;
var fastKey = _meta.fastKey;
var SIZE = _descriptors ? "_s" : "size";
var getEntry = function(that, key) {
  var index = fastKey(key);
  var entry;
  if ("F" !== index) return that._i[index];
  for (entry = that._f; entry; entry = entry.n) if (entry.k == key) return entry;
};
var _collectionStrong = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function(that, iterable) {
      _anInstance(that, C, NAME, "_i");
      that._t = NAME;
      that._i = _objectCreate(null);
      that._f = void 0;
      that._l = void 0;
      that[SIZE] = 0;
      if (void 0 != iterable) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = void 0;
          delete data[entry.i];
        }
        that._f = that._l = void 0;
        that[SIZE] = 0;
      },
      delete: function(key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }
        return !!entry;
      },
      forEach: function forEach(callbackfn) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
        var entry;
        while ((entry = entry ? entry.n : this._f)) {
          f(entry.v, entry.k, this);
          while (entry && entry.r) entry = entry.p;
        }
      },
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors)
      dP$2(C.prototype, "size", {
        get: function() {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
    return C;
  },
  def: function(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    if (entry) entry.v = value;
    else {
      that._l = entry = { i: (index = fastKey(key, true)), k: key, v: value, p: (prev = that._l), n: void 0, r: false };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      if ("F" !== index) that._i[index] = entry;
    }
    return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP) {
    _iterDefine(
      C,
      NAME,
      function(iterated, kind) {
        this._t = _validateCollection(iterated, NAME);
        this._k = kind;
        this._l = void 0;
      },
      function() {
        var that = this;
        var kind = that._k;
        var entry = that._l;
        while (entry && entry.r) entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = void 0;
          return _iterStep(1);
        }
        if ("keys" == kind) return _iterStep(0, entry.k);
        if ("values" == kind) return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      },
      IS_MAP ? "entries" : "values",
      !IS_MAP,
      true
    );
    _setSpecies(NAME);
  }
};
var SPECIES$2 = _wks("species");
var _arraySpeciesConstructor = function(original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    if ("function" == typeof C && (C === Array || _isArray(C.prototype))) C = void 0;
    if (_isObject(C)) {
      C = C[SPECIES$2];
      if (null === C) C = void 0;
    }
  }
  return void 0 === C ? Array : C;
};
var _arraySpeciesCreate = function(original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};
var _arrayMethods = function(TYPE, $create) {
  var IS_MAP = 1 == TYPE;
  var IS_FILTER = 2 == TYPE;
  var IS_SOME = 3 == TYPE;
  var IS_EVERY = 4 == TYPE;
  var IS_FIND_INDEX = 6 == TYPE;
  var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
    var val, res;
    for (; length > index; index++)
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE)
          if (IS_MAP) result[index] = res;
          else if (res)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return val;
              case 6:
                return index;
              case 2:
                result.push(val);
            }
          else if (IS_EVERY) return false;
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
var dP$3 = _objectDp.f;
var each = _arrayMethods(0);
var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? "set" : "add";
  var proto = C && C.prototype;
  var O = {};
  if (
    !_descriptors ||
    "function" != typeof C ||
    !(
      IS_WEAK ||
      (proto.forEach &&
        !_fails(function() {
          new C().entries().next();
        }))
    )
  ) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable) {
      _anInstance(target, C, NAME, "_c");
      target._c = new Base();
      if (void 0 != iterable) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(KEY) {
      var IS_ADDER = "add" == KEY || "set" == KEY;
      if (KEY in proto && !(IS_WEAK && "clear" == KEY))
        _hide(C.prototype, KEY, function(a, b) {
          _anInstance(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !_isObject(a)) return "get" == KEY ? void 0 : false;
          var result = this._c[KEY](0 === a ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
    });
    IS_WEAK ||
      dP$3(C.prototype, "size", {
        get: function() {
          return this._c.size;
        }
      });
  }
  _setToStringTag(C, NAME);
  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};
var MAP = "Map";
var es6_map = _collection(
  MAP,
  function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  },
  {
    get: function get(key) {
      var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return _collectionStrong.def(_validateCollection(this, MAP), 0 === key ? 0 : key, value);
    }
  },
  _collectionStrong,
  true
);
var _arrayFromIterable = function(iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};
var _collectionToJson = function(NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};
_export(_export.P + _export.R, "Map", { toJSON: _collectionToJson("Map") });
var _setCollectionOf = function(COLLECTION) {
  _export(_export.S, COLLECTION, {
    of: function of() {
      var length = arguments.length;
      var A = Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    }
  });
};
_setCollectionOf("Map");
var _setCollectionFrom = function(COLLECTION) {
  _export(_export.S, COLLECTION, {
    from: function from(source) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      _aFunction(this);
      mapping = void 0 !== mapFn;
      if (mapping) _aFunction(mapFn);
      if (void 0 == source) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = _ctx(mapFn, arguments[2], 2);
        _forOf(source, false, function(nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else _forOf(source, false, A.push, A);
      return new this(A);
    }
  });
};
_setCollectionFrom("Map");
var map = _core.Map;
var map$1 = createCommonjsModule(function(module) {
  module.exports = { default: map, __esModule: true };
});
var _Map = unwrapExports(map$1);
var Camera;
(function(Camera) {
  (function(Type) {
    Type["FRONT"] = "front";
    Type["BACK"] = "back";
  })(Camera.Type || (Camera.Type = {}));
})(Camera || (Camera = {}));
var check = function(O, proto) {
  _anObject(O);
  if (!_isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set:
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function(test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, "__proto__").set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        })({}, false)
      : void 0),
  check: check
};
_export(_export.S, "Object", { setPrototypeOf: _setProto.set });
var setPrototypeOf = _core.Object.setPrototypeOf;
var setPrototypeOf$1 = createCommonjsModule(function(module) {
  module.exports = { default: setPrototypeOf, __esModule: true };
});
var _Object$setPrototypeOf = unwrapExports(setPrototypeOf$1);
var _objectSap = function(KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(
    _export.S +
      _export.F *
        _fails(function() {
          fn(1);
        }),
    "Object",
    exp
  );
};
_objectSap("getPrototypeOf", function() {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});
var getPrototypeOf = _core.Object.getPrototypeOf;
var getPrototypeOf$1 = createCommonjsModule(function(module) {
  module.exports = { default: getPrototypeOf, __esModule: true };
});
var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$1);
var classCallCheck = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  };
});
var _classCallCheck = unwrapExports(classCallCheck);
var possibleConstructorReturn = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  var _typeof3 = _interopRequireDefault(_typeof_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = function(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call &&
      ("object" === ("undefined" === typeof call ? "undefined" : (0, _typeof3.default)(call)) ||
        "function" === typeof call)
      ? call
      : self;
  };
});
var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);
_export(_export.S, "Object", { create: _objectCreate });
var $Object = _core.Object;
var create = function create(P, D) {
  return $Object.create(P, D);
};
var create$1 = createCommonjsModule(function(module) {
  module.exports = { default: create, __esModule: true };
});
unwrapExports(create$1);
var inherits = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);
  var _create2 = _interopRequireDefault(create$1);
  var _typeof3 = _interopRequireDefault(_typeof_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = function(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass)
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          ("undefined" === typeof superClass ? "undefined" : (0, _typeof3.default)(superClass))
      );
    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
    });
    if (superClass)
      _setPrototypeOf2.default
        ? (0, _setPrototypeOf2.default)(subClass, superClass)
        : (subClass.__proto__ = superClass);
  };
});
var _inherits = unwrapExports(inherits);
var CustomError = (function(_Error) {
  _inherits(CustomError, _Error);
  function CustomError() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _ref$name = _ref.name,
      name = void 0 === _ref$name ? "" : _ref$name,
      _ref$message = _ref.message,
      message = void 0 === _ref$message ? "" : _ref$message,
      data = _ref.data;
    _classCallCheck(this, CustomError);
    var _this = _possibleConstructorReturn(
      this,
      (CustomError.__proto__ || _Object$getPrototypeOf(CustomError)).call(this, message)
    );
    _Object$setPrototypeOf(_this, CustomError.prototype);
    _this.name = name;
    _this.data = data;
    return _this;
  }
  return CustomError;
})(Error);
var CameraAccess;
(function(CameraAccess) {
  var backCameraKeywords = [
    "rear",
    "back",
    "rück",
    "arrière",
    "trasera",
    "trás",
    "traseira",
    "posteriore",
    "后面",
    "後面",
    "背面",
    "后置",
    "後置",
    "背置",
    "задней",
    "الخلفية",
    "후",
    "arka",
    "achterzijde",
    "หลัง",
    "baksidan",
    "bagside",
    "sau",
    "bak",
    "tylny",
    "takakamera",
    "belakang",
    "אחורית",
    "πίσω",
    "spate",
    "hátsó",
    "zadní",
    "darrere",
    "zadná",
    "задня",
    "stražnja",
    "belakang",
    "बैक"
  ];
  var cameraObjects = new _Map();
  function getCameras() {
    return new _Promise(function(resolve, reject) {
      var browserCompatibility = BrowserHelper.checkBrowserCompatibility();
      if (!browserCompatibility.fullSupport)
        return reject(
          new CustomError({
            name: "UnsupportedBrowserError",
            message: "This OS / Browser has one or more missing features preventing it from working correctly",
            data: browserCompatibility
          })
        );
      var accessPermissionPromise = _Promise.resolve();
      if (null == CameraAccess.mediaStream)
        accessPermissionPromise = navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      accessPermissionPromise
        .then(function(stream) {
          if (null != stream) CameraAccess.mediaStream = stream;
          return enumerateDevices()
            .then(function(devices) {
              var _console;
              var cameras = devices
                .filter(function(device) {
                  return "videoinput" === device.kind;
                })
                .map(function(videoDevice) {
                  if (cameraObjects.has(videoDevice.deviceId)) return cameraObjects.get(videoDevice.deviceId);
                  var label = null != videoDevice.label ? videoDevice.label : "";
                  var lowercaseLabel = label.toLowerCase();
                  var camera = {
                    deviceId: videoDevice.deviceId,
                    label: label,
                    cameraType: backCameraKeywords.some(function(keyword) {
                      return -1 !== lowercaseLabel.indexOf(keyword);
                    })
                      ? Camera.Type.BACK
                      : Camera.Type.FRONT
                  };
                  if ("" !== label) cameraObjects.set(videoDevice.deviceId, camera);
                  return camera;
                });
              if (
                cameras.length > 1 &&
                !cameras.some(function(camera) {
                  return camera.cameraType === Camera.Type.BACK;
                })
              ) {
                var camera = cameras.slice(-1)[0];
                cameras[cameras.length - 1] = {
                  deviceId: camera.deviceId,
                  label: camera.label,
                  cameraType: Camera.Type.BACK
                };
              }
              CameraAccess.mediaStream.getVideoTracks().forEach(function(track) {
                track.stop();
              });
              (_console = console).debug.apply(_console, ["Camera list: "].concat(_toConsumableArray(cameras)));
              return resolve(cameras);
            })
            .catch(function(error) {
              CameraAccess.mediaStream.getVideoTracks().forEach(function(track) {
                track.stop();
              });
              return reject(error);
            });
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  }
  CameraAccess.getCameras = getCameras;
  function accessCameraStream(resolutionFallbackLevel, camera) {
    var getUserMediaParams = { audio: false, video: {} };
    if (0 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 1400, ideal: 1920, max: 1920 },
        height: { min: 900, ideal: 1440, max: 1440 }
      };
    else if (1 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 1200, ideal: 1920, max: 1920 },
        height: { min: 900, ideal: 1200, max: 1200 }
      };
    else if (2 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 1080, ideal: 1920, max: 1920 },
        height: { min: 900, ideal: 1080, max: 1080 }
      };
    else if (3 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 960, ideal: 1280, max: 1440 },
        height: { min: 480, ideal: 960, max: 960 }
      };
    else if (4 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 720, ideal: 1280, max: 1440 },
        height: { min: 480, ideal: 720, max: 768 }
      };
    else if (5 === resolutionFallbackLevel)
      getUserMediaParams.video = {
        width: { min: 640, ideal: 960, max: 1440 },
        height: { min: 480, ideal: 720, max: 720 }
      };
    if (void 0 === camera) getUserMediaParams.video = true;
    else getUserMediaParams.video.deviceId = { exact: camera.deviceId };
    console.debug("Camera access:", camera);
    return navigator.mediaDevices.getUserMedia(getUserMediaParams);
  }
  CameraAccess.accessCameraStream = accessCameraStream;
  function enumerateDevices() {
    if ("function" === typeof navigator.enumerateDevices) return navigator.enumerateDevices();
    else if (
      "object" === _typeof(navigator.mediaDevices) &&
      "function" === typeof navigator.mediaDevices.enumerateDevices
    )
      return navigator.mediaDevices.enumerateDevices();
    else
      return new _Promise(function(resolve, reject) {
        try {
          window.MediaStreamTrack.getSources(function(devices) {
            resolve(
              devices
                .filter(function(device) {
                  return "video" === device.kind.toLowerCase() || "videoinput" === device.kind.toLowerCase();
                })
                .map(function(device) {
                  return {
                    deviceId: null != device.deviceId ? device.deviceId : "",
                    groupId: device.groupId,
                    kind: "videoinput",
                    label: device.label
                  };
                })
            );
          });
        } catch (error) {
          var browserCompatiblity = {
            fullSupport: false,
            scannerSupport: true,
            missingFeatures: [BrowserCompatibility.Feature.MEDIA_DEVICES]
          };
          return reject(
            new CustomError({
              name: "UnsupportedBrowserError",
              message: "This OS / Browser has one or more missing features preventing it from working correctly",
              data: browserCompatiblity
            })
          );
        }
      });
  }
})(CameraAccess || (CameraAccess = {}));
var ImageSettings;
(function(ImageSettings) {
  (function(Format) {
    Format[(Format["GRAY_8U"] = 0)] = "GRAY_8U";
    Format[(Format["RGB_8U"] = 1)] = "RGB_8U";
    Format[(Format["RGBA_8U"] = 2)] = "RGBA_8U";
  })(ImageSettings.Format || (ImageSettings.Format = {}));
})(ImageSettings || (ImageSettings = {}));
var $JSON$1 = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) {
  return $JSON$1.stringify.apply($JSON$1, arguments);
};
var stringify$1 = createCommonjsModule(function(module) {
  module.exports = { default: stringify, __esModule: true };
});
var _JSON$stringify = unwrapExports(stringify$1);
_export(_export.S + _export.F * !_descriptors, "Object", { defineProperty: _objectDp.f });
var $Object$1 = _core.Object;
var defineProperty$1 = function defineProperty(it, key, desc) {
  return $Object$1.defineProperty(it, key, desc);
};
var defineProperty$2 = createCommonjsModule(function(module) {
  module.exports = { default: defineProperty$1, __esModule: true };
});
unwrapExports(defineProperty$2);
var createClass = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  var _defineProperty2 = _interopRequireDefault(defineProperty$2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
});
var _createClass = unwrapExports(createClass);
var eventemitter3 = createCommonjsModule(function(module) {
  var has = Object.prototype.hasOwnProperty,
    prefix = "~";
  function Events() {}
  if (Object.create) {
    Events.prototype = Object.create(null);
    if (!new Events().__proto__) prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if ("function" !== typeof fn) throw new TypeError("The listener must be a function");
    var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) (emitter._events[evt] = listener), emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (0 === --emitter._eventsCount) emitter._events = new Events();
    else delete emitter._events[evt];
  }
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    var events,
      name,
      names = [];
    if (0 === this._eventsCount) return names;
    for (name in (events = this._events)) if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
  };
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
    return ee;
  };
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var args,
      i,
      listeners = this._events[evt],
      len = arguments.length;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
      listeners.fn.apply(listeners.context, args);
    } else {
      var j,
        length = listeners.length;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context))
        clearEvent(this, evt);
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++)
        if (listeners[i].fn !== fn || (once && !listeners[i].once) || (context && listeners[i].context !== context))
          events.push(listeners[i]);
      if (events.length) this._events[evt] = 1 === events.length ? events[0] : events;
      else clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  EventEmitter.prefixed = prefix;
  EventEmitter.EventEmitter = EventEmitter;
  module.exports = EventEmitter;
});
var eventemitter3_1 = eventemitter3.EventEmitter;
function engineSDKWorkerFunction() {
  var imageBufferPointer = void 0;
  var licenseKey = void 0;
  var settings = void 0;
  var imageSettings = void 0;
  var wasmLoaded = false;
  var scannerSettingsReady = false;
  var scannerImageSettingsReady = false;
  var scanQueue = [];
  var parseQueue = [];
  var contextAvailable = false;
  var scanWorkSubmitted = false;
  var parseWorkSubmitted = false;
  var blurryDecodingEnabled = false;
  function instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback) {
    var dbName = "scandit_wasm_cache";
    var storeName = "scandit_wasm_cache";
    var key = "wasm";
    var db = void 0;
    function loadDatabase(resolve, reject) {
      var openDBRequest = void 0;
      try {
        openDBRequest = indexedDB.open(dbName, wasmVersion);
      } catch (error) {
        return reject("Failed to open scandit-sdk WebAssembly cache database: " + error);
      }
      openDBRequest.onerror = function() {
        return reject("Failed to open scandit-sdk WebAssembly cache database");
      };
      openDBRequest.onsuccess = function() {
        db = openDBRequest.result;
        var store = db.transaction([storeName]).objectStore(storeName);
        var request = store.get(key);
        request.onerror = function() {
          return reject("Failed to open scandit-sdk WebAssembly cache database");
        };
        request.onsuccess = function() {
          if (null != request.result) return resolve(request.result);
          else return reject("No cached version of the scandit-sdk WebAssembly code has been found");
        };
      };
      openDBRequest.onupgradeneeded = function() {
        db = openDBRequest.result;
        if (db.objectStoreNames.contains(storeName)) db.deleteObjectStore(storeName);
        db.createObjectStore(storeName);
      };
    }
    function storeInDatabase(moduleObject) {
      try {
        var store = db.transaction([storeName], "readwrite").objectStore(storeName);
        var request = store.put(moduleObject, key);
        request.onerror = function(error) {
          console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
        };
        request.onsuccess = function() {
          console.debug("Successfully cached scandit-sdk WebAssembly code");
        };
      } catch (error) {
        if ("DataCloneError" === error.name)
          console.debug("Failed to cache scandit-sdk WebAssembly code: This browser doesn't support this feature yet");
        else console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
      }
    }
    loadDatabase(
      function(moduleObject) {
        console.debug("Found cached scandit-sdk WebAssembly code");
        self.WebAssembly.instantiate(moduleObject, importObject).then(function(instance) {
          successCallback(instance);
        });
      },
      function(errMsg) {
        console.debug(errMsg);
        function instantiate() {
          fetch(wasmURI)
            .then(function(response) {
              return response.arrayBuffer();
            })
            .then(function(bytes) {
              self.WebAssembly.instantiate(bytes, importObject).then(function(results) {
                if (null != db) storeInDatabase(results.module);
                successCallback(results.instance);
              });
            });
        }
        function instantiateStreaming() {
          self.WebAssembly.instantiateStreaming(fetch(wasmURI), importObject)
            .then(function(results) {
              if (null != db) storeInDatabase(results.module);
              successCallback(results.instance);
            })
            .catch(function(error) {
              console.warn("wasm streaming compile failed: " + error + ", falling back to ArrayBuffer instantiation");
              instantiate();
            });
        }
        if ("function" === typeof self.WebAssembly.instantiateStreaming) instantiateStreaming();
        else instantiate();
      }
    );
  }
  function loadLibrary(deviceId, libraryLocation) {
    var customModule = {
      arguments: [deviceId],
      instantiateWasm: function instantiateWasm(importObject, successCallback) {
        var wasmURI = libraryLocation + "scandit-engine-sdk.wasm?v=3.1.2";
        var wasmVersion = "3.1.2"
          .split(".")
          .map(function(n, i) {
            return parseInt(n, 10) * Math.pow(10, 6 - 3 * i);
          })
          .reduce(function(a, b) {
            return a + b;
          });
        instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback);
        return {};
      },
      noInitialRun: true,
      preRun: function preRun() {
        try {
          FS.mkdir("/scandit_sync_folder");
        } catch (error) {
          if ("EEXIST" !== error.code) throw error;
        }
        FS.mount(IDBFS, {}, "/scandit_sync_folder");
        FS.syncfs(true, function() {
          Module.callMain();
          wasmLoaded = true;
          postMessage(["status", "ready"]);
          workOnScanQueue();
          workOnParseQueue();
        });
      }
    };
    self.Module = customModule;
    if ("function" === typeof importScripts)
      try {
        importScripts(libraryLocation + "scandit-engine-sdk.min.js?v=3.1.2");
      } catch (error) {
        console.warn(error);
        console.error(
          "Couldn't retrieve Scandit SDK Engine library at " +
            libraryLocation +
            "scandit-engine-sdk.min.js, " +
            "did you configure the path for it correctly?"
        );
      }
  }
  function createContext() {
    if (contextAvailable || null == licenseKey || !wasmLoaded) return;
    var licenseKeyLength = Module.lengthBytesUTF8(licenseKey) + 1;
    var licenseKeyPointer = Module._malloc(licenseKeyLength);
    Module.stringToUTF8(licenseKey, licenseKeyPointer, licenseKeyLength);
    Module.asm._create_context(licenseKeyPointer, false);
    Module._free(licenseKeyPointer);
    contextAvailable = true;
  }
  function setupSettings() {
    var highQualitySingleFrameMode = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
    if (null == settings || !contextAvailable || !wasmLoaded) return;
    scannerSettingsReady = false;
    if (null == licenseKey) {
      console.error("No license key found, the library must be set up before the scanning engine can be used");
      return;
    }
    var parsedSettings = JSON.parse(settings);
    var settingsLength = Module.lengthBytesUTF8(settings) + 1;
    var settingsPointer = Module._malloc(settingsLength);
    Module.stringToUTF8(settings, settingsPointer, settingsLength);
    var resultPointer = Module.asm._scanner_settings_new_from_json(
      settingsPointer,
      blurryDecodingEnabled ? 1 : 0,
      parsedSettings.matrixScanEnabled ? 1 : 0,
      highQualitySingleFrameMode
    );
    Module._free(settingsPointer);
    var result = Module.UTF8ToString(resultPointer);
    if ("" !== result) {
      scannerSettingsReady = true;
      postMessage(["status", "scan-settings-updated"]);
      console.debug(JSON.parse(result));
    }
  }
  function setupImageSettings() {
    if (null == imageSettings || !wasmLoaded) return;
    scannerImageSettingsReady = false;
    Module.asm._scanner_image_settings_new(imageSettings.width, imageSettings.height, 1);
    if (null != imageBufferPointer) {
      Module._free(imageBufferPointer);
      imageBufferPointer = void 0;
    }
    imageBufferPointer = Module._malloc(imageSettings.width * imageSettings.height);
    scannerImageSettingsReady = true;
  }
  function scanImage(imageData) {
    Module.HEAPU8.set(imageData, imageBufferPointer);
    return Module.UTF8ToString(Module.asm._scanner_scan(imageBufferPointer));
  }
  function parseString(dataFormat, dataString, options) {
    var dataStringLength = Module.lengthBytesUTF8(dataString) + 1;
    var dataStringPointer = Module._malloc(dataStringLength);
    Module.stringToUTF8(dataString, dataStringPointer, dataStringLength);
    var optionsLength = Module.lengthBytesUTF8(options) + 1;
    var optionsPointer = Module._malloc(optionsLength);
    Module.stringToUTF8(options, optionsPointer, optionsLength);
    var resultPointer = Module.asm._parser_parse_string(
      dataFormat.valueOf(),
      dataStringPointer,
      dataStringLength - 1,
      optionsPointer
    );
    Module._free(dataStringPointer);
    Module._free(optionsPointer);
    return Module.UTF8ToString(resultPointer);
  }
  function workOnScanQueue() {
    if ((!scannerSettingsReady || !scannerImageSettingsReady) && 0 !== scanQueue.length) {
      createContext();
      setupSettings();
      setupImageSettings();
    }
    if (!scannerSettingsReady || !scannerImageSettingsReady) return;
    var currentScanWorkUnit = void 0;
    var resultData = void 0;
    while (0 !== scanQueue.length) {
      currentScanWorkUnit = scanQueue.shift();
      if (currentScanWorkUnit.highQualitySingleFrameMode) setupSettings(true);
      if (1 === imageSettings.format.valueOf())
        resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 3));
      else if (2 === imageSettings.format.valueOf())
        resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 4));
      else resultData = scanImage(currentScanWorkUnit.data);
      if (currentScanWorkUnit.highQualitySingleFrameMode) setupSettings(false);
      var result = JSON.parse(resultData);
      if (null != result.error)
        postMessage(["work-error", { requestId: currentScanWorkUnit.requestId, error: result.error }]);
      else if (null != result.scanResult)
        postMessage(["work-result", { requestId: currentScanWorkUnit.requestId, result: result }]);
      else {
        console.error("Unrecognized Scandit Engine result:", result);
        postMessage([""], [currentScanWorkUnit.data.buffer]);
      }
    }
  }
  function workOnParseQueue() {
    if (!contextAvailable && 0 !== parseQueue.length) createContext();
    if (!contextAvailable || !wasmLoaded) return;
    var currentParseWorkUnit = void 0;
    var resultData = void 0;
    while (0 !== parseQueue.length) {
      currentParseWorkUnit = parseQueue.shift();
      resultData = parseString(
        currentParseWorkUnit.dataFormat,
        currentParseWorkUnit.dataString,
        currentParseWorkUnit.options
      );
      var result = JSON.parse(resultData);
      if (null != result.error)
        postMessage(["parse-string-error", { requestId: currentParseWorkUnit.requestId, error: result.error }]);
      else if (null != result.result)
        postMessage(["parse-string-result", { requestId: currentParseWorkUnit.requestId, result: result.result }]);
      else {
        console.error("Unrecognized Scandit Parser result:", result);
        postMessage([
          "parse-string-error",
          {
            requestId: currentParseWorkUnit.requestId,
            error: { errorCode: -1, errorMessage: "Unknown Scandit Parser error" }
          }
        ]);
      }
    }
  }
  function convertImageDataToGrayscale(imageData, channels) {
    var grayscaleImageData = new Uint8ClampedArray(imageData.length / channels);
    var grayscaleImageDataIndex = imageData.length / channels - 1;
    var imageDataIndex = imageData.length - channels;
    while (imageDataIndex >= 0) {
      grayscaleImageData[grayscaleImageDataIndex--] =
        0.299 * imageData[imageDataIndex] +
        0.587 * imageData[imageDataIndex + 1] +
        0.114 * imageData[imageDataIndex + 2];
      imageDataIndex -= channels;
    }
    return grayscaleImageData;
  }
  onmessage = function onmessage(e) {
    var data = e.data;
    switch (data.type) {
      case "enable-blurry-decoding":
        blurryDecodingEnabled = true;
        if (scanWorkSubmitted) {
          setupSettings();
          workOnScanQueue();
        }
        break;
      case "load-library":
        loadLibrary(data.deviceId, data.libraryLocation);
        self.path = data.path;
        break;
      case "license-key":
        licenseKey = data.licenseKey;
        createContext();
        if (parseWorkSubmitted) workOnParseQueue();
        break;
      case "settings":
        settings = data.settings;
        if (scanWorkSubmitted) {
          setupSettings();
          workOnScanQueue();
        }
        break;
      case "image-settings":
        imageSettings = data.imageSettings;
        if (scanWorkSubmitted) {
          setupImageSettings();
          workOnScanQueue();
        }
        break;
      case "work":
        scanWorkSubmitted = true;
        scanQueue.push({
          requestId: data.requestId,
          data: data.data,
          highQualitySingleFrameMode: data.highQualitySingleFrameMode
        });
        workOnScanQueue();
        break;
      case "parse-string":
        parseWorkSubmitted = true;
        parseQueue.push({
          requestId: data.requestId,
          dataFormat: data.dataFormat,
          dataString: data.dataString,
          options: data.options
        });
        workOnParseQueue();
    }
  };
}
var engineSDKWorker = new Blob(["(" + engineSDKWorkerFunction.toString() + ")()"], { type: "text/javascript" });
var Barcode;
(function(Barcode) {
  function createFromWASMResult(result) {
    var decodedData = void 0;
    try {
      decodedData = decodeURIComponent(escape(String.fromCharCode.apply(null, result.rawData)));
    } catch (error) {
      decodedData = "";
    }
    return {
      symbology: result.symbology,
      data: decodedData,
      rawData: new Uint8Array(result.rawData),
      location: {
        topLeft: { x: result.location[0][0], y: result.location[0][1] },
        topRight: { x: result.location[1][0], y: result.location[1][1] },
        bottomRight: { x: result.location[2][0], y: result.location[2][1] },
        bottomLeft: { x: result.location[3][0], y: result.location[3][1] }
      },
      compositeFlag: result.compositeFlag,
      isGs1DataCarrier: result.isGs1DataCarrier,
      encodingArray: result.encodingArray
    };
  }
  Barcode.createFromWASMResult = createFromWASMResult;
  (function(Symbology) {
    Symbology["EAN13"] = "ean13";
    Symbology["EAN8"] = "ean8";
    Symbology["UPCA"] = "upca";
    Symbology["UPCE"] = "upce";
    Symbology["CODE128"] = "code128";
    Symbology["CODE39"] = "code39";
    Symbology["CODE93"] = "code93";
    Symbology["INTERLEAVED_2_OF_5"] = "itf";
    Symbology["QR"] = "qr";
    Symbology["DATA_MATRIX"] = "data-matrix";
    Symbology["PDF417"] = "pdf417";
    Symbology["MSI_PLESSEY"] = "msi-plessey";
    Symbology["GS1_DATABAR"] = "databar";
    Symbology["GS1_DATABAR_EXPANDED"] = "databar-expanded";
    Symbology["CODABAR"] = "codabar";
    Symbology["AZTEC"] = "aztec";
    Symbology["TWO_DIGIT_ADD_ON"] = "two-digit-add-on";
    Symbology["FIVE_DIGIT_ADD_ON"] = "five-digit-add-on";
    Symbology["MAXICODE"] = "maxicode";
    Symbology["CODE11"] = "code11";
    Symbology["GS1_DATABAR_LIMITED"] = "databar-limited";
    Symbology["CODE25"] = "code25";
    Symbology["MICRO_PDF417"] = "micropdf417";
    Symbology["RM4SCC"] = "rm4scc";
    Symbology["KIX"] = "kix";
    Symbology["DOTCODE"] = "dotcode";
  })(Barcode.Symbology || (Barcode.Symbology = {}));
  (function(CompositeFlag) {
    CompositeFlag[(CompositeFlag["NONE"] = 0)] = "NONE";
    CompositeFlag[(CompositeFlag["UNKNOWN"] = 1)] = "UNKNOWN";
    CompositeFlag[(CompositeFlag["LINKED"] = 2)] = "LINKED";
    CompositeFlag[(CompositeFlag["GS1_A"] = 4)] = "GS1_A";
    CompositeFlag[(CompositeFlag["GS1_B"] = 8)] = "GS1_B";
    CompositeFlag[(CompositeFlag["GS1_C"] = 16)] = "GS1_C";
  })(Barcode.CompositeFlag || (Barcode.CompositeFlag = {}));
  (function(Symbology) {
    function toHumanizedName(symbology) {
      switch (symbology.toLowerCase()) {
        case Symbology.EAN13:
          return "EAN-13";
        case Symbology.EAN8:
          return "EAN-8";
        case Symbology.UPCA:
          return "UPC-A";
        case Symbology.UPCE:
          return "UPC-E";
        case Symbology.CODE128:
          return "Code 128";
        case Symbology.CODE39:
          return "Code 39";
        case Symbology.CODE93:
          return "Code 93";
        case Symbology.INTERLEAVED_2_OF_5:
          return "Interleaved Two of Five";
        case Symbology.QR:
          return "QR";
        case Symbology.DATA_MATRIX:
          return "Data Matrix";
        case Symbology.PDF417:
          return "PDF417";
        case Symbology.MSI_PLESSEY:
          return "MSI-Plessey";
        case Symbology.GS1_DATABAR:
          return "GS1 DataBar 14";
        case Symbology.GS1_DATABAR_EXPANDED:
          return "GS1 DataBar Expanded";
        case Symbology.CODABAR:
          return "Codabar";
        case Symbology.AZTEC:
          return "Aztec";
        case Symbology.TWO_DIGIT_ADD_ON:
          return "Two-Digit Add-On";
        case Symbology.FIVE_DIGIT_ADD_ON:
          return "Five-Digit Add-On";
        case Symbology.MAXICODE:
          return "MaxiCode";
        case Symbology.CODE11:
          return "Code 11";
        case Symbology.GS1_DATABAR_LIMITED:
          return "GS1 DataBar Limited";
        case Symbology.CODE25:
          return "Code 25";
        case Symbology.MICRO_PDF417:
          return "MicroPDF417";
        case Symbology.RM4SCC:
          return "RM4SCC";
        case Symbology.KIX:
          return "KIX";
        case Symbology.DOTCODE:
          return "DotCode";
        default:
          return "Unknown";
      }
    }
    Symbology.toHumanizedName = toHumanizedName;
    function toJSONName(symbology) {
      switch (symbology.toLowerCase()) {
        case Symbology.EAN13:
          return "ean13";
        case Symbology.EAN8:
          return "ean8";
        case Symbology.UPCA:
          return "upca";
        case Symbology.UPCE:
          return "upce";
        case Symbology.CODE128:
          return "code128";
        case Symbology.CODE39:
          return "code39";
        case Symbology.CODE93:
          return "code93";
        case Symbology.INTERLEAVED_2_OF_5:
          return "itf";
        case Symbology.QR:
          return "qr";
        case Symbology.DATA_MATRIX:
          return "data-matrix";
        case Symbology.PDF417:
          return "pdf417";
        case Symbology.MSI_PLESSEY:
          return "msi-plessey";
        case Symbology.GS1_DATABAR:
          return "databar";
        case Symbology.GS1_DATABAR_EXPANDED:
          return "databar-expanded";
        case Symbology.CODABAR:
          return "codabar";
        case Symbology.AZTEC:
          return "aztec";
        case Symbology.TWO_DIGIT_ADD_ON:
          return "two-digit-add-on";
        case Symbology.FIVE_DIGIT_ADD_ON:
          return "five-digit-add-on";
        case Symbology.MAXICODE:
          return "maxicode";
        case Symbology.CODE11:
          return "code11";
        case Symbology.GS1_DATABAR_LIMITED:
          return "databar-limited";
        case Symbology.CODE25:
          return "code25";
        case Symbology.MICRO_PDF417:
          return "micropdf417";
        case Symbology.RM4SCC:
          return "rm4scc";
        case Symbology.KIX:
          return "kix";
        case Symbology.DOTCODE:
          return "dotcode";
        default:
          return "unknown";
      }
    }
    Symbology.toJSONName = toJSONName;
  })(Barcode.Symbology || (Barcode.Symbology = {}));
})(Barcode || (Barcode = {}));
var Parser = (function() {
  function Parser(scanner, dataFormat) {
    _classCallCheck(this, Parser);
    this.scanner = scanner;
    this.dataFormat = dataFormat;
  }
  _createClass(Parser, [
    {
      key: "setOptions",
      value: function setOptions(options) {
        this.options = options;
      }
    },
    {
      key: "parseRawData",
      value: function parseRawData(dataRaw) {
        var dataString = void 0;
        try {
          dataString = decodeURIComponent(escape(String.fromCharCode.apply(null, dataRaw)));
        } catch (error) {
          dataString = "";
        }
        return this.scanner.parseString(this.dataFormat, dataString, this.options);
      }
    },
    {
      key: "parseString",
      value: function parseString(dataString) {
        return this.scanner.parseString(this.dataFormat, dataString, this.options);
      }
    }
  ]);
  return Parser;
})();
(function(Parser) {
  (function(DataFormat) {
    DataFormat[(DataFormat["GS1_AI"] = 1)] = "GS1_AI";
    DataFormat[(DataFormat["HIBC"] = 2)] = "HIBC";
    DataFormat[(DataFormat["DLID"] = 3)] = "DLID";
    DataFormat[(DataFormat["MRTD"] = 4)] = "MRTD";
    DataFormat[(DataFormat["SWISSQR"] = 5)] = "SWISSQR";
  })(Parser.DataFormat || (Parser.DataFormat = {}));
})(Parser || (Parser = {}));
var core_getIterator = (_core.getIterator = function(it) {
  var iterFn = core_getIteratorMethod(it);
  if ("function" != typeof iterFn) throw TypeError(it + " is not iterable!");
  return _anObject(iterFn.call(it));
});
var getIterator = core_getIterator;
var getIterator$1 = createCommonjsModule(function(module) {
  module.exports = { default: getIterator, __esModule: true };
});
var _getIterator = unwrapExports(getIterator$1);
var isEnum$1 = _objectPie.f;
var _objectToArray = function(isEntries) {
  return function(it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum$1.call(O, (key = keys[i++]))) result.push(isEntries ? [key, O[key]] : O[key]);
    return result;
  };
};
var $values = _objectToArray(false);
_export(_export.S, "Object", {
  values: function values(it) {
    return $values(it);
  }
});
var values = _core.Object.values;
var values$1 = createCommonjsModule(function(module) {
  module.exports = { default: values, __esModule: true };
});
var _Object$values = unwrapExports(values$1);
var SET = "Set";
var es6_set = _collection(
  SET,
  function(get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  },
  {
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), (value = 0 === value ? 0 : value), value);
    }
  },
  _collectionStrong
);
_export(_export.P + _export.R, "Set", { toJSON: _collectionToJson("Set") });
_setCollectionOf("Set");
_setCollectionFrom("Set");
var set = _core.Set;
var set$1 = createCommonjsModule(function(module) {
  module.exports = { default: set, __esModule: true };
});
var _Set = unwrapExports(set$1);
var SymbologySettings = (function() {
  function SymbologySettings() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _ref$enabled = _ref.enabled,
      enabled = void 0 === _ref$enabled ? false : _ref$enabled,
      _ref$colorInvertedEna = _ref.colorInvertedEnabled,
      colorInvertedEnabled = void 0 === _ref$colorInvertedEna ? false : _ref$colorInvertedEna,
      _ref$activeSymbolCoun = _ref.activeSymbolCounts,
      activeSymbolCounts = void 0 === _ref$activeSymbolCoun ? [] : _ref$activeSymbolCoun,
      _ref$extensions = _ref.extensions,
      extensions = void 0 === _ref$extensions ? null : _ref$extensions,
      _ref$checksums = _ref.checksums,
      checksums = void 0 === _ref$checksums ? null : _ref$checksums;
    _classCallCheck(this, SymbologySettings);
    this.enabled = enabled;
    this.colorInvertedEnabled = colorInvertedEnabled;
    this.activeSymbolCounts = activeSymbolCounts;
    this.customExtensions = null != extensions;
    this.customChecksums = null != checksums;
    if (null == extensions) extensions = [];
    if (null == checksums) checksums = [];
    this.extensions = new _Set(
      _Array$from(extensions).filter(function(e) {
        return (
          e in SymbologySettings.Extension ||
          -1 !== _Object$values(SymbologySettings.Extension).indexOf(e.toLowerCase())
        );
      })
    );
    this.checksums = new _Set(
      _Array$from(checksums).filter(function(c) {
        return (
          c in SymbologySettings.Checksum || -1 !== _Object$values(SymbologySettings.Checksum).indexOf(c.toLowerCase())
        );
      })
    );
  }
  _createClass(SymbologySettings, [
    {
      key: "isEnabled",
      value: function isEnabled() {
        return this.enabled;
      }
    },
    {
      key: "setEnabled",
      value: function setEnabled(enabled) {
        this.enabled = enabled;
        return this;
      }
    },
    {
      key: "isColorInvertedEnabled",
      value: function isColorInvertedEnabled() {
        return this.colorInvertedEnabled;
      }
    },
    {
      key: "setColorInvertedEnabled",
      value: function setColorInvertedEnabled(enabled) {
        this.colorInvertedEnabled = enabled;
        return this;
      }
    },
    {
      key: "getActiveSymbolCounts",
      value: function getActiveSymbolCounts() {
        return this.activeSymbolCounts;
      }
    },
    {
      key: "setActiveSymbolCounts",
      value: function setActiveSymbolCounts(activeSymbolCounts) {
        this.activeSymbolCounts = activeSymbolCounts;
        return this;
      }
    },
    {
      key: "setActiveSymbolCountsRange",
      value: function setActiveSymbolCountsRange(minCount, maxCount) {
        this.activeSymbolCounts = _Array$from({ length: maxCount - minCount + 1 }, function(_, k) {
          return k + minCount;
        });
        return this;
      }
    },
    {
      key: "getEnabledExtensions",
      value: function getEnabledExtensions() {
        return this.extensions;
      }
    },
    {
      key: "enableExtensions",
      value: function enableExtensions(extension) {
        this.customExtensions = true;
        if ("object" === ("undefined" === typeof extension ? "undefined" : _typeof(extension)))
          this.extensions = new _Set(
            [].concat(
              _toConsumableArray(this.extensions),
              _toConsumableArray(
                _Array$from(extension).filter(function(e) {
                  return (
                    e in SymbologySettings.Extension ||
                    -1 !== _Object$values(SymbologySettings.Extension).indexOf(e.toLowerCase())
                  );
                })
              )
            )
          );
        else if (
          extension in SymbologySettings.Extension ||
          -1 !== _Object$values(SymbologySettings.Extension).indexOf(extension.toLowerCase())
        )
          this.extensions.add(extension);
        return this;
      }
    },
    {
      key: "disableExtensions",
      value: function disableExtensions(extension) {
        if ("object" === ("undefined" === typeof extension ? "undefined" : _typeof(extension)))
          this.extensions = new _Set(
            [].concat(_toConsumableArray(this.extensions)).filter(function(x) {
              return extension instanceof Array ? -1 === extension.indexOf(x) : !extension.has(x);
            })
          );
        else this.extensions.delete(extension);
        return this;
      }
    },
    {
      key: "getEnabledChecksums",
      value: function getEnabledChecksums() {
        return this.checksums;
      }
    },
    {
      key: "enableChecksums",
      value: function enableChecksums(checksum) {
        this.customChecksums = true;
        if ("object" === ("undefined" === typeof checksum ? "undefined" : _typeof(checksum)))
          this.checksums = new _Set(
            [].concat(
              _toConsumableArray(this.checksums),
              _toConsumableArray(
                _Array$from(checksum).filter(function(c) {
                  return (
                    c in SymbologySettings.Checksum ||
                    -1 !== _Object$values(SymbologySettings.Checksum).indexOf(c.toLowerCase())
                  );
                })
              )
            )
          );
        else if (
          checksum in SymbologySettings.Checksum ||
          -1 !== _Object$values(SymbologySettings.Checksum).indexOf(checksum.toLowerCase())
        )
          this.checksums.add(checksum);
        return this;
      }
    },
    {
      key: "disableChecksums",
      value: function disableChecksums(checksum) {
        if ("object" === ("undefined" === typeof checksum ? "undefined" : _typeof(checksum)))
          this.checksums = new _Set(
            [].concat(_toConsumableArray(this.checksums)).filter(function(x) {
              return checksum instanceof Array ? -1 === checksum.indexOf(x) : !checksum.has(x);
            })
          );
        else this.checksums.delete(checksum);
        return this;
      }
    },
    {
      key: "toJSON",
      value: function toJSON() {
        return {
          enabled: this.enabled,
          colorInvertedEnabled: this.colorInvertedEnabled,
          activeSymbolCounts: 0 === this.activeSymbolCounts.length ? void 0 : this.activeSymbolCounts,
          extensions: this.customExtensions ? _Array$from(this.extensions) : void 0,
          checksums: this.customChecksums ? _Array$from(this.checksums) : void 0
        };
      }
    }
  ]);
  return SymbologySettings;
})();
(function(SymbologySettings) {
  (function(Extension) {
    Extension["DIRECT_PART_MARKING_MODE"] = "direct_part_marking_mode";
    Extension["FULL_ASCII"] = "full_ascii";
    Extension["RELAXED_SHARP_QUIET_ZONE_CHECK"] = "relaxed_sharp_quiet_zone_check";
    Extension["REMOVE_LEADING_ZERO"] = "remove_leading_zero";
    Extension["REMOVE_LEADING_UPCA_ZERO"] = "remove_leading_upca_zero";
    Extension["RETURN_AS_UPCA"] = "return_as_upca";
    Extension["STRIP_LEADING_FNC1"] = "strip_leading_fnc1";
  })(SymbologySettings.Extension || (SymbologySettings.Extension = {}));
  (function(Checksum) {
    Checksum["MOD_10"] = "mod10";
    Checksum["MOD_11"] = "mod11";
    Checksum["MOD_16"] = "mod16";
    Checksum["MOD_43"] = "mod43";
    Checksum["MOD_47"] = "mod47";
    Checksum["MOD_103"] = "mod103";
    Checksum["MOD_1010"] = "mod1010";
    Checksum["MOD_1110"] = "mod1110";
  })(SymbologySettings.Checksum || (SymbologySettings.Checksum = {}));
})(SymbologySettings || (SymbologySettings = {}));
var ScanSettings = (function() {
  function ScanSettings() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _ref$enabledSymbologi = _ref.enabledSymbologies,
      enabledSymbologies = void 0 === _ref$enabledSymbologi ? [] : _ref$enabledSymbologi,
      _ref$codeDuplicateFil = _ref.codeDuplicateFilter,
      codeDuplicateFilter = void 0 === _ref$codeDuplicateFil ? 0 : _ref$codeDuplicateFil,
      _ref$maxNumberOfCodes = _ref.maxNumberOfCodesPerFrame,
      maxNumberOfCodesPerFrame = void 0 === _ref$maxNumberOfCodes ? 1 : _ref$maxNumberOfCodes,
      _ref$searchArea = _ref.searchArea,
      searchArea = void 0 === _ref$searchArea ? { x: 0, y: 0, width: 1, height: 1 } : _ref$searchArea;
    _classCallCheck(this, ScanSettings);
    this.symbologySettings = new _Map();
    this.enableSymbologies(enabledSymbologies);
    this.codeDuplicateFilter = codeDuplicateFilter;
    this.maxNumberOfCodesPerFrame = maxNumberOfCodesPerFrame;
    this.baseSearchArea = { x: 0, y: 0, width: 1, height: 1 };
    this.searchArea = searchArea;
  }
  _createClass(ScanSettings, [
    {
      key: "toJSONString",
      value: function toJSONString() {
        var symbologies = {};
        this.symbologySettings.forEach(function(symbologySettings, symbology) {
          symbologies[Barcode.Symbology.toJSONName(symbology)] = symbologySettings;
        });
        var combinedSearchArea = {
          x: Math.min(1, this.baseSearchArea.x + this.searchArea.x * this.baseSearchArea.width),
          y: Math.min(1, this.baseSearchArea.y + this.searchArea.y * this.baseSearchArea.height),
          width: Math.min(1, this.baseSearchArea.width * this.searchArea.width),
          height: Math.min(1, this.baseSearchArea.height * this.searchArea.height)
        };
        var isFullSearchArea =
          0 === Math.round(100 * combinedSearchArea.x) &&
          0 === Math.round(100 * combinedSearchArea.y) &&
          100 === Math.round(100 * combinedSearchArea.width) &&
          100 === Math.round(100 * combinedSearchArea.height);
        return _JSON$stringify({
          symbologies: symbologies,
          codeDuplicateFilter: this.codeDuplicateFilter,
          maxNumberOfCodesPerFrame: this.maxNumberOfCodesPerFrame,
          searchArea: combinedSearchArea,
          codeLocation1d: isFullSearchArea
            ? void 0
            : {
                area: {
                  x: combinedSearchArea.x,
                  y: combinedSearchArea.y + (0.75 * combinedSearchArea.height) / 2,
                  width: combinedSearchArea.width,
                  height: 0.25 * combinedSearchArea.height
                }
              },
          codeLocation2d: isFullSearchArea ? void 0 : { area: combinedSearchArea }
        });
      }
    },
    {
      key: "getSymbologySettings",
      value: function getSymbologySettings(symbology) {
        if (this.symbologySettings.has(symbology)) return this.symbologySettings.get(symbology);
        else if (symbology in Barcode.Symbology || -1 !== _Object$values(Barcode.Symbology).indexOf(symbology)) {
          this.symbologySettings.set(symbology, new SymbologySettings());
          return this.symbologySettings.get(symbology);
        } else throw new TypeError('Invalid symbology "' + symbology + '"');
      }
    },
    {
      key: "isSymbologyEnabled",
      value: function isSymbologyEnabled(symbology) {
        return this.getSymbologySettings(symbology).isEnabled();
      }
    },
    {
      key: "enableSymbologies",
      value: function enableSymbologies(symbology) {
        return this.setSymbologiesEnabled(symbology, true);
      }
    },
    {
      key: "disableSymbologies",
      value: function disableSymbologies(symbology) {
        return this.setSymbologiesEnabled(symbology, false);
      }
    },
    {
      key: "getCodeDuplicateFilter",
      value: function getCodeDuplicateFilter() {
        return this.codeDuplicateFilter;
      }
    },
    {
      key: "setCodeDuplicateFilter",
      value: function setCodeDuplicateFilter(durationMilliseconds) {
        this.codeDuplicateFilter = durationMilliseconds;
        return this;
      }
    },
    {
      key: "getMaxNumberOfCodesPerFrame",
      value: function getMaxNumberOfCodesPerFrame() {
        return this.maxNumberOfCodesPerFrame;
      }
    },
    {
      key: "setMaxNumberOfCodesPerFrame",
      value: function setMaxNumberOfCodesPerFrame(limit) {
        this.maxNumberOfCodesPerFrame = limit;
        return this;
      }
    },
    {
      key: "getSearchArea",
      value: function getSearchArea() {
        return this.searchArea;
      }
    },
    {
      key: "setSearchArea",
      value: function setSearchArea(searchArea) {
        this.searchArea = searchArea;
        return this;
      }
    },
    {
      key: "getBaseSearchArea",
      value: function getBaseSearchArea() {
        return this.baseSearchArea;
      }
    },
    {
      key: "setBaseSearchArea",
      value: function setBaseSearchArea(baseSearchArea) {
        this.baseSearchArea = baseSearchArea;
        return this;
      }
    },
    {
      key: "setSymbologiesEnabled",
      value: function setSymbologiesEnabled(symbology, enabled) {
        if ("object" === ("undefined" === typeof symbology ? "undefined" : _typeof(symbology))) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (
              var _step, _iterator = _getIterator(symbology);
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var s = _step.value;
              if (!(s in Barcode.Symbology || -1 !== _Object$values(Barcode.Symbology).indexOf(s)))
                throw new TypeError('Invalid symbology "' + s + '"');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) _iterator.return();
            } finally {
              if (_didIteratorError) throw _iteratorError;
            }
          }
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (
              var _step2, _iterator2 = _getIterator(symbology);
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              var _s = _step2.value;
              if (this.symbologySettings.has(_s)) this.symbologySettings.get(_s).setEnabled(enabled);
              else this.symbologySettings.set(_s, new SymbologySettings({ enabled: enabled }));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) _iterator2.return();
            } finally {
              if (_didIteratorError2) throw _iteratorError2;
            }
          }
        } else if (symbology in Barcode.Symbology || -1 !== _Object$values(Barcode.Symbology).indexOf(symbology))
          if (this.symbologySettings.has(symbology)) this.symbologySettings.get(symbology).setEnabled(enabled);
          else this.symbologySettings.set(symbology, new SymbologySettings({ enabled: enabled }));
        else throw new TypeError('Invalid symbology "' + symbology + '"');
        return this;
      }
    }
  ]);
  return ScanSettings;
})();
var ScannerEventEmitter = (function(_EventEmitter) {
  _inherits(ScannerEventEmitter, _EventEmitter);
  function ScannerEventEmitter() {
    _classCallCheck(this, ScannerEventEmitter);
    return _possibleConstructorReturn(
      this,
      (ScannerEventEmitter.__proto__ || _Object$getPrototypeOf(ScannerEventEmitter)).apply(this, arguments)
    );
  }
  return ScannerEventEmitter;
})(eventemitter3_1);
var Scanner$$1 = (function() {
  function Scanner$$1() {
    var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _ref$scanSettings = _ref.scanSettings,
      scanSettings = void 0 === _ref$scanSettings ? new ScanSettings() : _ref$scanSettings,
      imageSettings = _ref.imageSettings;
    _classCallCheck(this, Scanner$$1);
    var browserCompatibility = BrowserHelper.checkBrowserCompatibility();
    if (!browserCompatibility.scannerSupport)
      throw new CustomError({
        name: "UnsupportedBrowserError",
        message: "This OS / Browser has one or more missing features preventing it from working correctly",
        data: browserCompatibility
      });
    if (null == userLicenseKey || "" === userLicenseKey.trim())
      throw new CustomError({
        name: "LibraryNotConfiguredError",
        message: "The library has not correctly been configured yet, please call 'configure' with valid parameters"
      });
    this.isReadyToWork = false;
    this.workerScanQueueLength = 0;
    this.engineSDKWorker = new Worker(URL.createObjectURL(engineSDKWorker));
    this.engineSDKWorker.onmessage = this.engineWorkerOnMessage.bind(this);
    this.engineSDKWorker.postMessage({
      type: "load-library",
      deviceId: deviceId,
      libraryLocation: scanditEngineLocation,
      path: self.location.pathname
    });
    this.eventEmitter = new eventemitter3_1();
    this.workerParseRequestId = 0;
    this.workerScanRequestId = 0;
    this.applyLicenseKey(userLicenseKey);
    this.applyScanSettings(scanSettings);
    if (null != imageSettings) this.applyImageSettings(imageSettings);
  }
  _createClass(Scanner$$1, [
    {
      key: "destroy",
      value: function destroy() {
        if (null != this.engineSDKWorker) this.engineSDKWorker.terminate();
        this.eventEmitter.removeAllListeners();
      }
    },
    {
      key: "applyScanSettings",
      value: function applyScanSettings(scanSettings) {
        this.scanSettings = scanSettings;
        this.engineSDKWorker.postMessage({ type: "settings", settings: this.scanSettings.toJSONString() });
        return this;
      }
    },
    {
      key: "applyImageSettings",
      value: function applyImageSettings(imageSettings) {
        this.imageSettings = imageSettings;
        this.engineSDKWorker.postMessage({ type: "image-settings", imageSettings: imageSettings });
        return this;
      }
    },
    {
      key: "processImage",
      value: function processImage(imageData) {
        var _this2 = this;
        var highQualitySingleFrameMode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
        if (null == this.imageSettings)
          return _Promise.reject(
            new CustomError({ name: "NoImageSettings", message: "No image settings set up in the scanner" })
          );
        var channels = void 0;
        switch (this.imageSettings.format.valueOf()) {
          case ImageSettings.Format.GRAY_8U:
            channels = 1;
            break;
          case ImageSettings.Format.RGB_8U:
            channels = 3;
            break;
          case ImageSettings.Format.RGBA_8U:
            channels = 4;
            break;
          default:
            channels = 1;
        }
        if (this.imageSettings.width * this.imageSettings.height * channels !== imageData.length)
          return _Promise.reject(
            new CustomError({
              name: "ImageSettingsDataMismatch",
              message: "The provided image data doesn't match the previously set image settings"
            })
          );
        this.workerScanRequestId++;
        this.workerScanQueueLength++;
        return new _Promise(function(resolve, reject) {
          var workResultEvent = "work-result-" + _this2.workerScanRequestId;
          var workErrorEvent = "work-error-" + _this2.workerScanRequestId;
          _this2.eventEmitter.once(workResultEvent, function(workResult) {
            _this2.eventEmitter.removeAllListeners(workErrorEvent);
            resolve({
              barcodes: workResult.scanResult.map(Barcode.createFromWASMResult),
              imageData: imageData,
              imageSettings: _this2.imageSettings
            });
          });
          _this2.eventEmitter.once(workErrorEvent, function(error) {
            console.error("Scandit Engine error (" + error.errorCode + "):", error.errorMessage);
            _this2.eventEmitter.removeAllListeners(workResultEvent);
            var errorObject = new CustomError({
              name: "ScanditEngineError",
              message: error.errorMessage + " (" + error.errorCode + ")"
            });
            reject(errorObject);
          });
          _this2.engineSDKWorker.postMessage({
            type: "work",
            requestId: _this2.workerScanRequestId,
            data: imageData,
            highQualitySingleFrameMode: highQualitySingleFrameMode
          });
        });
      }
    },
    {
      key: "isBusyProcessing",
      value: function isBusyProcessing() {
        return 0 !== this.workerScanQueueLength;
      }
    },
    {
      key: "isReady",
      value: function isReady() {
        return this.isReadyToWork;
      }
    },
    {
      key: "onReady",
      value: function onReady(listener) {
        if (this.isReadyToWork) listener();
        else this.eventEmitter.once("ready", listener, this);
        return this;
      }
    },
    {
      key: "createParserForFormat",
      value: function createParserForFormat(dataFormat) {
        return new Parser(this, dataFormat);
      }
    },
    {
      key: "getImageSettings",
      value: function getImageSettings() {
        return this.imageSettings;
      }
    },
    {
      key: "getScanSettings",
      value: function getScanSettings() {
        return this.scanSettings;
      }
    },
    {
      key: "parseString",
      value: function parseString(dataFormat, dataString, options) {
        var _this3 = this;
        this.workerParseRequestId++;
        return new _Promise(function(resolve, reject) {
          var parseStringResultEvent = "parse-string-result-" + _this3.workerParseRequestId;
          var parseStringErrorEvent = "parse-string-error-" + _this3.workerParseRequestId;
          _this3.eventEmitter.once(parseStringResultEvent, function(result) {
            _this3.eventEmitter.removeAllListeners(parseStringErrorEvent);
            var parserResult = { jsonString: result, fields: [], fieldsByName: {} };
            JSON.parse(result).forEach(function(parserField) {
              parserResult.fields.push(parserField);
              parserResult.fieldsByName[parserField.name] = parserField;
            });
            resolve(parserResult);
          });
          _this3.eventEmitter.once(parseStringErrorEvent, function(error) {
            console.error("Scandit Engine error (" + error.errorCode + "):", error.errorMessage);
            _this3.eventEmitter.removeAllListeners(parseStringResultEvent);
            var errorObject = new CustomError({
              name: "ScanditEngineError",
              message: error.errorMessage + " (" + error.errorCode + ")"
            });
            reject(errorObject);
          });
          _this3.engineSDKWorker.postMessage({
            type: "parse-string",
            requestId: _this3.workerParseRequestId,
            dataFormat: dataFormat,
            dataString: dataString,
            options: null == options ? "{}" : _JSON$stringify(options)
          });
        });
      }
    },
    {
      key: "applyLicenseKey",
      value: function applyLicenseKey(licenseKey) {
        this.engineSDKWorker.postMessage({ type: "license-key", licenseKey: licenseKey });
        return this;
      }
    },
    {
      key: "engineWorkerOnMessage",
      value: function engineWorkerOnMessage(ev) {
        var messageType = ev.data[0];
        var messageData = ev.data[1];
        if ("status" === messageType) {
          if ("ready" === messageData) {
            this.isReadyToWork = true;
            this.eventEmitter.emit("ready");
          }
        } else if ("work-result" === messageType && null != messageData) {
          this.eventEmitter.emit("work-result-" + messageData.requestId, messageData.result);
          this.workerScanQueueLength--;
        } else if ("work-error" === messageType && null != messageData) {
          this.eventEmitter.emit("work-error-" + messageData.requestId, messageData.error);
          this.workerScanQueueLength--;
        } else if ("parse-string-result" === messageType && null != messageData)
          this.eventEmitter.emit("parse-string-result-" + messageData.requestId, messageData.result);
        else if ("parse-string-error" === messageType && null != messageData)
          this.eventEmitter.emit("parse-string-error-" + messageData.requestId, messageData.error);
      }
    }
  ]);
  return Scanner$$1;
})();
___$insertStyle(
  '.scandit.scandit-container{align-items:center;display:flex;height:100%;justify-content:center;overflow:hidden;width:100%}.scandit.scandit-barcode-picker{background-color:#000;height:100%;position:relative;width:100%}.scandit .scandit-video{display:block;height:100%;position:relative;width:100%}.scandit .scandit-video.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.scandit .scandit-logo{-webkit-transform:translateZ(0);bottom:5%;max-height:12.5%;max-width:35%;pointer-events:none;position:absolute;right:5%;transform:translateZ(0)}.scandit .scandit-laser{max-height:10%;max-width:75%}.scandit .scandit-laser,.scandit .scandit-viewfinder{-webkit-animation-duration:.25s;-webkit-transform:translateZ(0);animation-duration:.25s;bottom:0;left:0;margin:auto;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);transition:opacity .25s ease;z-index:10}.scandit .scandit-viewfinder{border:2px solid #fff;border-radius:10px;box-sizing:border-box;height:60%;width:90%}.scandit .scandit-viewfinder.paused{opacity:.4}.scandit .scandit-camera-switcher,.scandit .scandit-torch-toggle{-webkit-filter:drop-shadow(0 2px 0 grey);-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-transform:translateZ(0);cursor:pointer;filter:drop-shadow(0 2px 0 #808080);max-height:15%;max-width:15%;position:absolute;top:5%;transform:translateZ(0);z-index:10}.scandit .scandit-camera-switcher{left:5%}.scandit .scandit-torch-toggle{right:5%}.scandit .scandit-camera-upload{-webkit-tap-highlight-color:rgba(255,255,255,0);align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%;z-index:5}.scandit .scandit-camera-upload label{-webkit-filter:drop-shadow(0 0 .15rem #000);border-radius:50%;box-sizing:border-box;cursor:pointer;filter:drop-shadow(0 0 .15rem #000);height:224px;margin:4px;min-height:224px;min-width:224px;padding:20px;text-align:center;width:224px;z-index:10}.scandit .scandit-camera-upload label input[type=file]{position:absolute;top:-9999px}.scandit .scandit-camera-upload label img{height:60%;width:60%}.scandit .scandit-camera-upload label div{color:#fff;font-family:sans-serif;font-size:16pt}.scandit .radial-progress{-webkit-animation-duration:.25s;animation-duration:.25s;background-color:transparent;border:4px solid #fff;border-radius:50%;box-shadow:0 0 .3rem #000,inset 0 0 .3rem #000;height:224px;position:absolute;transition:opacity 1s ease,border-color .5s;width:224px;z-index:7}.scandit .radial-progress[data-progress="0"]{border-color:hsla(0,0%,100%,.2)}.scandit .radial-progress[data-progress="5"]{border-color:hsla(0,0%,100%,.24)}.scandit .radial-progress[data-progress="10"]{border-color:hsla(0,0%,100%,.28)}.scandit .radial-progress[data-progress="15"]{border-color:hsla(0,0%,100%,.32)}.scandit .radial-progress[data-progress="20"]{border-color:hsla(0,0%,100%,.36)}.scandit .radial-progress[data-progress="25"]{border-color:hsla(0,0%,100%,.4)}.scandit .radial-progress[data-progress="30"]{border-color:hsla(0,0%,100%,.44)}.scandit .radial-progress[data-progress="35"]{border-color:hsla(0,0%,100%,.48)}.scandit .radial-progress[data-progress="40"]{border-color:hsla(0,0%,100%,.52)}.scandit .radial-progress[data-progress="45"]{border-color:hsla(0,0%,100%,.56)}.scandit .radial-progress[data-progress="50"]{border-color:hsla(0,0%,100%,.6)}.scandit .radial-progress[data-progress="55"]{border-color:hsla(0,0%,100%,.64)}.scandit .radial-progress[data-progress="60"]{border-color:hsla(0,0%,100%,.68)}.scandit .radial-progress[data-progress="65"]{border-color:hsla(0,0%,100%,.72)}.scandit .radial-progress[data-progress="70"]{border-color:hsla(0,0%,100%,.76)}.scandit .radial-progress[data-progress="75"]{border-color:hsla(0,0%,100%,.8)}.scandit .radial-progress[data-progress="80"]{border-color:hsla(0,0%,100%,.84)}.scandit .radial-progress[data-progress="85"]{border-color:hsla(0,0%,100%,.88)}.scandit .radial-progress[data-progress="90"]{border-color:hsla(0,0%,100%,.92)}.scandit .radial-progress[data-progress="95"]{border-color:hsla(0,0%,100%,.96)}.scandit .radial-progress[data-progress="100"]{border-color:#fff}.scandit .scandit-flash-color{-webkit-animation-name:scandit-flash-color;animation-name:scandit-flash-color}.scandit .scandit-flash-white{-webkit-animation-name:scandit-flash-white;animation-name:scandit-flash-white}.scandit .scandit-flash-white-inset{-webkit-animation-name:scandit-flash-white-inset;animation-name:scandit-flash-white-inset}.scandit .scandit-opacity-pulse{-webkit-animation-delay:0s,.333s;-webkit-animation-duration:.333s,1s;-webkit-animation-iteration-count:1,infinite;-webkit-animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;-webkit-animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);animation-delay:0s,.333s;animation-duration:.333s,1s;animation-iteration-count:1,infinite;animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1)}.scandit .scandit-hidden-opacity{opacity:0}.scandit-hidden{display:none!important}@-webkit-keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@-webkit-keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}@keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}'
);
var howler_core_min = createCommonjsModule(function(module, exports) {
  /*! howler.js v2.0.13 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
  !(function() {
    var e = function() {
      this.init();
    };
    e.prototype = {
      init: function() {
        var e = this || n;
        return (
          (e._counter = 1e3),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !0),
          (e.ctx = null),
          (e.mobileAutoEnable = !0),
          e._setup(),
          e
        );
      },
      volume: function(e) {
        var t = this || n;
        if (((e = parseFloat(e)), t.ctx || _(), void 0 !== e && e >= 0 && e <= 1)) {
          if (((t._volume = e), t._muted)) return t;
          t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);
          for (var o = 0; o < t._howls.length; o++)
            if (!t._howls[o]._webAudio)
              for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                var u = t._howls[o]._soundById(r[a]);
                u && u._node && (u._node.volume = u._volume * e);
              }
          return t;
        }
        return t._volume;
      },
      mute: function(e) {
        var t = this || n;
        t.ctx || _(),
          (t._muted = e),
          t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, n.ctx.currentTime);
        for (var o = 0; o < t._howls.length; o++)
          if (!t._howls[o]._webAudio)
            for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
              var u = t._howls[o]._soundById(r[a]);
              u && u._node && (u._node.muted = !!e || u._muted);
            }
        return t;
      },
      unload: function() {
        for (var e = this || n, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
        return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), (e.ctx = null), _()), e;
      },
      codecs: function(e) {
        return (this || n)._codecs[e.replace(/^x-/, "")];
      },
      _setup: function() {
        var e = this || n;
        if (((e.state = e.ctx ? e.ctx.state || "running" : "running"), e._autoSuspend(), !e.usingWebAudio))
          if ("undefined" != typeof Audio)
            try {
              var t = new Audio();
              void 0 === t.oncanplaythrough && (e._canPlayEvent = "canplay");
            } catch (n) {
              e.noAudio = !0;
            }
          else e.noAudio = !0;
        try {
          t = new Audio();
          t.muted && (e.noAudio = !0);
        } catch (e) {}
        return e.noAudio || e._setupCodecs(), e;
      },
      _setupCodecs: function() {
        var e = this || n,
          t = null;
        try {
          t = "undefined" != typeof Audio ? new Audio() : null;
        } catch (n) {
          return e;
        }
        if (!t || "function" != typeof t.canPlayType) return e;
        var o = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
          a = r && parseInt(r[0].split("/")[1], 10) < 33;
        return (
          (e._codecs = {
            mp3: !(a || (!o && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!o,
            opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              t.canPlayType("audio/x-m4a;") ||
              t.canPlayType("audio/m4a;") ||
              t.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              t.canPlayType("audio/x-mp4;") ||
              t.canPlayType("audio/mp4;") ||
              t.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
            webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
            dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
          }),
          e
        );
      },
      _enableMobileAudio: function() {
        var e = this || n,
          t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
          o = !!(
            "ontouchend" in window ||
            (e._navigator && e._navigator.maxTouchPoints > 0) ||
            (e._navigator && e._navigator.msMaxTouchPoints > 0)
          );
        if (!e._mobileEnabled && e.ctx && (t || o)) {
          (e._mobileEnabled = !1),
            e._mobileUnloaded || 44100 === e.ctx.sampleRate || ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
          var r = function() {
            n._autoResume();
            var t = e.ctx.createBufferSource();
            (t.buffer = e._scratchBuffer),
              t.connect(e.ctx.destination),
              void 0 === t.start ? t.noteOn(0) : t.start(0),
              "function" == typeof e.ctx.resume && e.ctx.resume(),
              (t.onended = function() {
                t.disconnect(0),
                  (e._mobileEnabled = !0),
                  (e.mobileAutoEnable = !1),
                  document.removeEventListener("touchstart", r, !0),
                  document.removeEventListener("touchend", r, !0);
              });
          };
          return document.addEventListener("touchstart", r, !0), document.addEventListener("touchend", r, !0), e;
        }
      },
      _autoSuspend: function() {
        var e = this;
        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
          for (var t = 0; t < e._howls.length; t++)
            if (e._howls[t]._webAudio)
              for (var o = 0; o < e._howls[t]._sounds.length; o++) if (!e._howls[t]._sounds[o]._paused) return e;
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function() {
              e.autoSuspend &&
                ((e._suspendTimer = null),
                (e.state = "suspending"),
                e.ctx.suspend().then(function() {
                  (e.state = "suspended"), e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                }));
            }, 3e4)),
            e
          );
        }
      },
      _autoResume: function() {
        var e = this;
        if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio)
          return (
            "running" === e.state && e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : "suspended" === e.state
                ? (e.ctx.resume().then(function() {
                    e.state = "running";
                    for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume");
                  }),
                  e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                : "suspending" === e.state && (e._resumeAfterSuspend = !0),
            e
          );
      }
    };
    var n = new e(),
      t = function(e) {
        var n = this;
        if (!e.src || 0 === e.src.length)
          return void console.error("An array of source files must be passed with any new Howl.");
        n.init(e);
      };
    t.prototype = {
      init: function(e) {
        var t = this;
        return (
          n.ctx || _(),
          (t._autoplay = e.autoplay || !1),
          (t._format = "string" != typeof e.format ? e.format : [e.format]),
          (t._html5 = e.html5 || !1),
          (t._muted = e.mute || !1),
          (t._loop = e.loop || !1),
          (t._pool = e.pool || 5),
          (t._preload = "boolean" != typeof e.preload || e.preload),
          (t._rate = e.rate || 1),
          (t._sprite = e.sprite || {}),
          (t._src = "string" != typeof e.src ? e.src : [e.src]),
          (t._volume = void 0 !== e.volume ? e.volume : 1),
          (t._xhrWithCredentials = e.xhrWithCredentials || !1),
          (t._duration = 0),
          (t._state = "unloaded"),
          (t._sounds = []),
          (t._endTimers = {}),
          (t._queue = []),
          (t._playLock = !1),
          (t._onend = e.onend ? [{ fn: e.onend }] : []),
          (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
          (t._onload = e.onload ? [{ fn: e.onload }] : []),
          (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
          (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
          (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
          (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
          (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
          (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
          (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
          (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
          (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
          (t._onresume = []),
          (t._webAudio = n.usingWebAudio && !t._html5),
          void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(),
          n._howls.push(t),
          t._autoplay &&
            t._queue.push({
              event: "play",
              action: function() {
                t.play();
              }
            }),
          t._preload && t.load(),
          t
        );
      },
      load: function() {
        var e = this,
          t = null;
        if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
        "string" == typeof e._src && (e._src = [e._src]);
        for (var r = 0; r < e._src.length; r++) {
          var u, i;
          if (e._format && e._format[r]) u = e._format[r];
          else {
            if ("string" != typeof (i = e._src[r])) {
              e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            (u = /^data:audio\/([^;,]+);/i.exec(i)),
              u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
              u && (u = u[1].toLowerCase());
          }
          if (
            (u ||
              console.warn(
                'No file extension was found. Consider using the "format" property or specify an extension.'
              ),
            u && n.codecs(u))
          ) {
            t = e._src[r];
            break;
          }
        }
        return t
          ? ((e._src = t),
            (e._state = "loading"),
            "https:" === window.location.protocol && "http:" === t.slice(0, 5) && ((e._html5 = !0), (e._webAudio = !1)),
            new o(e),
            e._webAudio && a(e),
            e)
          : void e._emit("loaderror", null, "No codec support for selected audio sources.");
      },
      play: function(e, t) {
        var o = this,
          r = null;
        if ("number" == typeof e) (r = e), (e = null);
        else {
          if ("string" == typeof e && "loaded" === o._state && !o._sprite[e]) return null;
          if (void 0 === e) {
            e = "__default";
            for (var a = 0, u = 0; u < o._sounds.length; u++)
              o._sounds[u]._paused && !o._sounds[u]._ended && (a++, (r = o._sounds[u]._id));
            1 === a ? (e = null) : (r = null);
          }
        }
        var i = r ? o._soundById(r) : o._inactiveSound();
        if (!i) return null;
        if ((r && !e && (e = i._sprite || "__default"), "loaded" !== o._state)) {
          (i._sprite = e), (i._ended = !1);
          var d = i._id;
          return (
            o._queue.push({
              event: "play",
              action: function() {
                o.play(d);
              }
            }),
            d
          );
        }
        if (r && !i._paused) return t || o._loadQueue("play"), i._id;
        o._webAudio && n._autoResume();
        var _ = Math.max(0, i._seek > 0 ? i._seek : o._sprite[e][0] / 1e3),
          s = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - _),
          l = (1e3 * s) / Math.abs(i._rate);
        (i._paused = !1),
          (i._ended = !1),
          (i._sprite = e),
          (i._seek = _),
          (i._start = o._sprite[e][0] / 1e3),
          (i._stop = (o._sprite[e][0] + o._sprite[e][1]) / 1e3),
          (i._loop = !(!i._loop && !o._sprite[e][2]));
        var c = i._node;
        if (o._webAudio) {
          var f = function() {
            o._refreshBuffer(i);
            var e = i._muted || o._muted ? 0 : i._volume;
            c.gain.setValueAtTime(e, n.ctx.currentTime),
              (i._playStart = n.ctx.currentTime),
              void 0 === c.bufferSource.start
                ? i._loop
                  ? c.bufferSource.noteGrainOn(0, _, 86400)
                  : c.bufferSource.noteGrainOn(0, _, s)
                : i._loop
                  ? c.bufferSource.start(0, _, 86400)
                  : c.bufferSource.start(0, _, s),
              l !== 1 / 0 && (o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l)),
              t ||
                setTimeout(function() {
                  o._emit("play", i._id);
                }, 0);
          };
          "running" === n.state ? f() : (o.once("resume", f), o._clearTimer(i._id));
        } else {
          var p = function() {
              (c.currentTime = _),
                (c.muted = i._muted || o._muted || n._muted || c.muted),
                (c.volume = i._volume * n.volume()),
                (c.playbackRate = i._rate);
              try {
                var r = c.play();
                if ("undefined" != typeof Promise && r instanceof Promise) {
                  o._playLock = !0;
                  var a = function() {
                    (o._playLock = !1), t || o._emit("play", i._id);
                  };
                  r.then(a, a);
                } else t || o._emit("play", i._id);
                if (((c.playbackRate = i._rate), c.paused))
                  return void o._emit(
                    "playerror",
                    i._id,
                    "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction."
                  );
                "__default" !== e || i._loop
                  ? (o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l))
                  : ((o._endTimers[i._id] = function() {
                      o._ended(i), c.removeEventListener("ended", o._endTimers[i._id], !1);
                    }),
                    c.addEventListener("ended", o._endTimers[i._id], !1));
              } catch (e) {
                o._emit("playerror", i._id, e);
              }
            },
            m = (window && window.ejecta) || (!c.readyState && n._navigator.isCocoonJS);
          if (c.readyState >= 3 || m) p();
          else {
            var v = function() {
              p(), c.removeEventListener(n._canPlayEvent, v, !1);
            };
            c.addEventListener(n._canPlayEvent, v, !1), o._clearTimer(i._id);
          }
        }
        return i._id;
      },
      pause: function(e) {
        var n = this;
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "pause",
              action: function() {
                n.pause(e);
              }
            }),
            n
          );
        for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
          n._clearTimer(t[o]);
          var r = n._soundById(t[o]);
          if (
            r &&
            !r._paused &&
            ((r._seek = n.seek(t[o])), (r._rateSeek = 0), (r._paused = !0), n._stopFade(t[o]), r._node)
          )
            if (n._webAudio) {
              if (!r._node.bufferSource) continue;
              void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                n._cleanBuffer(r._node);
            } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
          arguments[1] || n._emit("pause", r ? r._id : null);
        }
        return n;
      },
      stop: function(e, n) {
        var t = this;
        if ("loaded" !== t._state)
          return (
            t._queue.push({
              event: "stop",
              action: function() {
                t.stop(e);
              }
            }),
            t
          );
        for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
          t._clearTimer(o[r]);
          var a = t._soundById(o[r]);
          a &&
            ((a._seek = a._start || 0),
            (a._rateSeek = 0),
            (a._paused = !0),
            (a._ended = !0),
            t._stopFade(o[r]),
            a._node &&
              (t._webAudio
                ? a._node.bufferSource &&
                  (void 0 === a._node.bufferSource.stop
                    ? a._node.bufferSource.noteOff(0)
                    : a._node.bufferSource.stop(0),
                  t._cleanBuffer(a._node))
                : (isNaN(a._node.duration) && a._node.duration !== 1 / 0) ||
                  ((a._node.currentTime = a._start || 0), a._node.pause())),
            n || t._emit("stop", a._id));
        }
        return t;
      },
      mute: function(e, t) {
        var o = this;
        if ("loaded" !== o._state)
          return (
            o._queue.push({
              event: "mute",
              action: function() {
                o.mute(e, t);
              }
            }),
            o
          );
        if (void 0 === t) {
          if ("boolean" != typeof e) return o._muted;
          o._muted = e;
        }
        for (var r = o._getSoundIds(t), a = 0; a < r.length; a++) {
          var u = o._soundById(r[a]);
          u &&
            ((u._muted = e),
            u._interval && o._stopFade(u._id),
            o._webAudio && u._node
              ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime)
              : u._node && (u._node.muted = !!n._muted || e),
            o._emit("mute", u._id));
        }
        return o;
      },
      volume: function() {
        var e,
          t,
          o = this,
          r = arguments;
        if (0 === r.length) return o._volume;
        if (1 === r.length || (2 === r.length && void 0 === r[1]))
          o._getSoundIds().indexOf(r[0]) >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
        else r.length >= 2 && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
        var a;
        if (!(void 0 !== e && e >= 0 && e <= 1)) return (a = t ? o._soundById(t) : o._sounds[0]), a ? a._volume : 0;
        if ("loaded" !== o._state)
          return (
            o._queue.push({
              event: "volume",
              action: function() {
                o.volume.apply(o, r);
              }
            }),
            o
          );
        void 0 === t && (o._volume = e), (t = o._getSoundIds(t));
        for (var u = 0; u < t.length; u++)
          (a = o._soundById(t[u])) &&
            ((a._volume = e),
            r[2] || o._stopFade(t[u]),
            o._webAudio && a._node && !a._muted
              ? a._node.gain.setValueAtTime(e, n.ctx.currentTime)
              : a._node && !a._muted && (a._node.volume = e * n.volume()),
            o._emit("volume", a._id));
        return o;
      },
      fade: function(e, t, o, r) {
        var a = this;
        if ("loaded" !== a._state)
          return (
            a._queue.push({
              event: "fade",
              action: function() {
                a.fade(e, t, o, r);
              }
            }),
            a
          );
        a.volume(e, r);
        for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
          var d = a._soundById(u[i]);
          if (d) {
            if ((r || a._stopFade(u[i]), a._webAudio && !d._muted)) {
              var _ = n.ctx.currentTime,
                s = _ + o / 1e3;
              (d._volume = e), d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(t, s);
            }
            a._startFadeInterval(d, e, t, o, u[i], void 0 === r);
          }
        }
        return a;
      },
      _startFadeInterval: function(e, n, t, o, r, a) {
        var u = this,
          i = n,
          d = t - n,
          _ = Math.abs(d / 0.01),
          s = Math.max(4, _ > 0 ? o / _ : o),
          l = Date.now();
        (e._fadeTo = t),
          (e._interval = setInterval(function() {
            var r = (Date.now() - l) / o;
            (l = Date.now()),
              (i += d * r),
              (i = Math.max(0, i)),
              (i = Math.min(1, i)),
              (i = Math.round(100 * i) / 100),
              u._webAudio ? (e._volume = i) : u.volume(i, e._id, !0),
              a && (u._volume = i),
              ((t < n && i <= t) || (t > n && i >= t)) &&
                (clearInterval(e._interval),
                (e._interval = null),
                (e._fadeTo = null),
                u.volume(t, e._id),
                u._emit("fade", e._id));
          }, s));
      },
      _stopFade: function(e) {
        var t = this,
          o = t._soundById(e);
        return (
          o &&
            o._interval &&
            (t._webAudio && o._node.gain.cancelScheduledValues(n.ctx.currentTime),
            clearInterval(o._interval),
            (o._interval = null),
            t.volume(o._fadeTo, e),
            (o._fadeTo = null),
            t._emit("fade", e)),
          t
        );
      },
      loop: function() {
        var e,
          n,
          t,
          o = this,
          r = arguments;
        if (0 === r.length) return o._loop;
        if (1 === r.length) {
          if ("boolean" != typeof r[0]) return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
          (e = r[0]), (o._loop = e);
        } else 2 === r.length && ((e = r[0]), (n = parseInt(r[1], 10)));
        for (var a = o._getSoundIds(n), u = 0; u < a.length; u++)
          (t = o._soundById(a[u])) &&
            ((t._loop = e),
            o._webAudio &&
              t._node &&
              t._node.bufferSource &&
              ((t._node.bufferSource.loop = e),
              e && ((t._node.bufferSource.loopStart = t._start || 0), (t._node.bufferSource.loopEnd = t._stop))));
        return o;
      },
      rate: function() {
        var e,
          t,
          o = this,
          r = arguments;
        if (0 === r.length) t = o._sounds[0]._id;
        else if (1 === r.length) {
          var a = o._getSoundIds(),
            u = a.indexOf(r[0]);
          u >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
        } else 2 === r.length && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
        var i;
        if ("number" != typeof e) return (i = o._soundById(t)), i ? i._rate : o._rate;
        if ("loaded" !== o._state)
          return (
            o._queue.push({
              event: "rate",
              action: function() {
                o.rate.apply(o, r);
              }
            }),
            o
          );
        void 0 === t && (o._rate = e), (t = o._getSoundIds(t));
        for (var d = 0; d < t.length; d++)
          if ((i = o._soundById(t[d]))) {
            (i._rateSeek = o.seek(t[d])),
              (i._playStart = o._webAudio ? n.ctx.currentTime : i._playStart),
              (i._rate = e),
              o._webAudio && i._node && i._node.bufferSource
                ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime)
                : i._node && (i._node.playbackRate = e);
            var _ = o.seek(t[d]),
              s = (o._sprite[i._sprite][0] + o._sprite[i._sprite][1]) / 1e3 - _,
              l = (1e3 * s) / Math.abs(i._rate);
            (!o._endTimers[t[d]] && i._paused) ||
              (o._clearTimer(t[d]), (o._endTimers[t[d]] = setTimeout(o._ended.bind(o, i), l))),
              o._emit("rate", i._id);
          }
        return o;
      },
      seek: function() {
        var e,
          t,
          o = this,
          r = arguments;
        if (0 === r.length) t = o._sounds[0]._id;
        else if (1 === r.length) {
          var a = o._getSoundIds(),
            u = a.indexOf(r[0]);
          u >= 0 ? (t = parseInt(r[0], 10)) : o._sounds.length && ((t = o._sounds[0]._id), (e = parseFloat(r[0])));
        } else 2 === r.length && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
        if (void 0 === t) return o;
        if ("loaded" !== o._state)
          return (
            o._queue.push({
              event: "seek",
              action: function() {
                o.seek.apply(o, r);
              }
            }),
            o
          );
        var i = o._soundById(t);
        if (i) {
          if (!("number" == typeof e && e >= 0)) {
            if (o._webAudio) {
              var d = o.playing(t) ? n.ctx.currentTime - i._playStart : 0,
                _ = i._rateSeek ? i._rateSeek - i._seek : 0;
              return i._seek + (_ + d * Math.abs(i._rate));
            }
            return i._node.currentTime;
          }
          var s = o.playing(t);
          if (
            (s && o.pause(t, !0),
            (i._seek = e),
            (i._ended = !1),
            o._clearTimer(t),
            s && o.play(t, !0),
            !o._webAudio && i._node && (i._node.currentTime = e),
            s && !o._webAudio)
          ) {
            var l = function() {
              o._playLock ? setTimeout(l, 0) : o._emit("seek", t);
            };
            setTimeout(l, 0);
          } else o._emit("seek", t);
        }
        return o;
      },
      playing: function(e) {
        var n = this;
        if ("number" == typeof e) {
          var t = n._soundById(e);
          return !!t && !t._paused;
        }
        for (var o = 0; o < n._sounds.length; o++) if (!n._sounds[o]._paused) return !0;
        return !1;
      },
      duration: function(e) {
        var n = this,
          t = n._duration,
          o = n._soundById(e);
        return o && (t = n._sprite[o._sprite][1] / 1e3), t;
      },
      state: function() {
        return this._state;
      },
      unload: function() {
        for (var e = this, t = e._sounds, o = 0; o < t.length; o++) {
          if ((t[o]._paused || e.stop(t[o]._id), !e._webAudio))
            /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) ||
              (t[o]._node.src =
                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
              t[o]._node.removeEventListener("error", t[o]._errorFn, !1),
              t[o]._node.removeEventListener(n._canPlayEvent, t[o]._loadFn, !1);
          delete t[o]._node, e._clearTimer(t[o]._id);
        }
        var a = n._howls.indexOf(e);
        a >= 0 && n._howls.splice(a, 1);
        var u = !0;
        for (o = 0; o < n._howls.length; o++)
          if (n._howls[o]._src === e._src) {
            u = !1;
            break;
          }
        return (
          r && u && delete r[e._src], (n.noAudio = !1), (e._state = "unloaded"), (e._sounds = []), (e = null), null
        );
      },
      on: function(e, n, t, o) {
        var r = this,
          a = r["_on" + e];
        return "function" == typeof n && a.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }), r;
      },
      off: function(e, n, t) {
        var o = this,
          r = o["_on" + e],
          a = 0;
        if (("number" == typeof n && ((t = n), (n = null)), n || t))
          for (a = 0; a < r.length; a++) {
            var u = t === r[a].id;
            if ((n === r[a].fn && u) || (!n && u)) {
              r.splice(a, 1);
              break;
            }
          }
        else if (e) o["_on" + e] = [];
        else {
          var i = Object.keys(o);
          for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(o[i[a]]) && (o[i[a]] = []);
        }
        return o;
      },
      once: function(e, n, t) {
        var o = this;
        return o.on(e, n, t, 1), o;
      },
      _emit: function(e, n, t) {
        for (var o = this, r = o["_on" + e], a = r.length - 1; a >= 0; a--)
          (r[a].id && r[a].id !== n && "load" !== e) ||
            (setTimeout(
              function(e) {
                e.call(this, n, t);
              }.bind(o, r[a].fn),
              0
            ),
            r[a].once && o.off(e, r[a].fn, r[a].id));
        return o._loadQueue(e), o;
      },
      _loadQueue: function(e) {
        var n = this;
        if (n._queue.length > 0) {
          var t = n._queue[0];
          t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
        }
        return n;
      },
      _ended: function(e) {
        var t = this,
          o = e._sprite;
        if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
          return setTimeout(t._ended.bind(t, e), 100), t;
        var r = !(!e._loop && !t._sprite[o][2]);
        if ((t._emit("end", e._id), !t._webAudio && r && t.stop(e._id, !0).play(e._id), t._webAudio && r)) {
          t._emit("play", e._id), (e._seek = e._start || 0), (e._rateSeek = 0), (e._playStart = n.ctx.currentTime);
          var a = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
          t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a);
        }
        return (
          t._webAudio &&
            !r &&
            ((e._paused = !0),
            (e._ended = !0),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            t._clearTimer(e._id),
            t._cleanBuffer(e._node),
            n._autoSuspend()),
          t._webAudio || r || t.stop(e._id, !0),
          t
        );
      },
      _clearTimer: function(e) {
        var n = this;
        if (n._endTimers[e]) {
          if ("function" != typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
          else {
            var t = n._soundById(e);
            t && t._node && t._node.removeEventListener("ended", n._endTimers[e], !1);
          }
          delete n._endTimers[e];
        }
        return n;
      },
      _soundById: function(e) {
        for (var n = this, t = 0; t < n._sounds.length; t++) if (e === n._sounds[t]._id) return n._sounds[t];
        return null;
      },
      _inactiveSound: function() {
        var e = this;
        e._drain();
        for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
        return new o(e);
      },
      _drain: function() {
        var e = this,
          n = e._pool,
          t = 0,
          o = 0;
        if (!(e._sounds.length < n)) {
          for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
          for (o = e._sounds.length - 1; o >= 0; o--) {
            if (t <= n) return;
            e._sounds[o]._ended &&
              (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), t--);
          }
        }
      },
      _getSoundIds: function(e) {
        var n = this;
        if (void 0 === e) {
          for (var t = [], o = 0; o < n._sounds.length; o++) t.push(n._sounds[o]._id);
          return t;
        }
        return [e];
      },
      _refreshBuffer: function(e) {
        var t = this;
        return (
          (e._node.bufferSource = n.ctx.createBufferSource()),
          (e._node.bufferSource.buffer = r[t._src]),
          e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
          (e._node.bufferSource.loop = e._loop),
          e._loop && ((e._node.bufferSource.loopStart = e._start || 0), (e._node.bufferSource.loopEnd = e._stop)),
          e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime),
          t
        );
      },
      _cleanBuffer: function(e) {
        var t = this;
        if (n._scratchBuffer && e.bufferSource) {
          (e.bufferSource.onended = null), e.bufferSource.disconnect(0);
          try {
            e.bufferSource.buffer = n._scratchBuffer;
          } catch (e) {}
        }
        return (e.bufferSource = null), t;
      }
    };
    var o = function(e) {
      (this._parent = e), this.init();
    };
    o.prototype = {
      init: function() {
        var e = this,
          t = e._parent;
        return (
          (e._muted = t._muted),
          (e._loop = t._loop),
          (e._volume = t._volume),
          (e._rate = t._rate),
          (e._seek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++n._counter),
          t._sounds.push(e),
          e.create(),
          e
        );
      },
      create: function() {
        var e = this,
          t = e._parent,
          o = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
        return (
          t._webAudio
            ? ((e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain()),
              e._node.gain.setValueAtTime(o, n.ctx.currentTime),
              (e._node.paused = !0),
              e._node.connect(n.masterGain))
            : ((e._node = new Audio()),
              (e._errorFn = e._errorListener.bind(e)),
              e._node.addEventListener("error", e._errorFn, !1),
              (e._loadFn = e._loadListener.bind(e)),
              e._node.addEventListener(n._canPlayEvent, e._loadFn, !1),
              (e._node.src = t._src),
              (e._node.preload = "auto"),
              (e._node.volume = o * n.volume()),
              e._node.load()),
          e
        );
      },
      reset: function() {
        var e = this,
          t = e._parent;
        return (
          (e._muted = t._muted),
          (e._loop = t._loop),
          (e._volume = t._volume),
          (e._rate = t._rate),
          (e._seek = 0),
          (e._rateSeek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++n._counter),
          e
        );
      },
      _errorListener: function() {
        var e = this;
        e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
          e._node.removeEventListener("error", e._errorFn, !1);
      },
      _loadListener: function() {
        var e = this,
          t = e._parent;
        (t._duration = Math.ceil(10 * e._node.duration) / 10),
          0 === Object.keys(t._sprite).length && (t._sprite = { __default: [0, 1e3 * t._duration] }),
          "loaded" !== t._state && ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
          e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1);
      }
    };
    var r = {},
      a = function(e) {
        var n = e._src;
        if (r[n]) return (e._duration = r[n].duration), void d(e);
        if (/^data:[^;]+;base64,/.test(n)) {
          for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), a = 0; a < t.length; ++a)
            o[a] = t.charCodeAt(a);
          i(o.buffer, e);
        } else {
          var _ = new XMLHttpRequest();
          _.open("GET", n, !0),
            (_.withCredentials = e._xhrWithCredentials),
            (_.responseType = "arraybuffer"),
            (_.onload = function() {
              var n = (_.status + "")[0];
              if ("0" !== n && "2" !== n && "3" !== n)
                return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
              i(_.response, e);
            }),
            (_.onerror = function() {
              e._webAudio && ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete r[n], e.load());
            }),
            u(_);
        }
      },
      u = function(e) {
        try {
          e.send();
        } catch (n) {
          e.onerror();
        }
      },
      i = function(e, t) {
        n.ctx.decodeAudioData(
          e,
          function(e) {
            e && t._sounds.length > 0 && ((r[t._src] = e), d(t, e));
          },
          function() {
            t._emit("loaderror", null, "Decoding audio data failed.");
          }
        );
      },
      d = function(e, n) {
        n && !e._duration && (e._duration = n.duration),
          0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state && ((e._state = "loaded"), e._emit("load"), e._loadQueue());
      },
      _ = function() {
        try {
          "undefined" != typeof AudioContext
            ? (n.ctx = new AudioContext())
            : "undefined" != typeof webkitAudioContext
              ? (n.ctx = new webkitAudioContext())
              : (n.usingWebAudio = !1);
        } catch (e) {
          n.usingWebAudio = !1;
        }
        var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
          t = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          o = t ? parseInt(t[1], 10) : null;
        if (e && o && o < 9) {
          var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
          ((n._navigator && n._navigator.standalone && !r) || (n._navigator && !n._navigator.standalone && !r)) &&
            (n.usingWebAudio = !1);
        }
        n.usingWebAudio &&
          ((n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain()),
          n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime),
          n.masterGain.connect(n.ctx.destination)),
          n._setup();
      };
    (exports.Howler = n),
      (exports.Howl = t),
      "undefined" != typeof window
        ? ((window.HowlerGlobal = e), (window.Howler = n), (window.Howl = t), (window.Sound = o))
        : "undefined" != typeof commonjsGlobal &&
          ((commonjsGlobal.HowlerGlobal = e),
          (commonjsGlobal.Howler = n),
          (commonjsGlobal.Howl = t),
          (commonjsGlobal.Sound = o));
  })();
});
var howler_core_min_1 = howler_core_min.Howler;
var howler_core_min_2 = howler_core_min.Howl;
var beepSound =
  "data:audio/mp3;base64,//uwAAAAA8ROTJVigAB4icmSrFAAE/IjVfj6gAJ+RGq/H1AAADEN55555509PSUkYjEMQ5DCaBiMBmSoGPBh6QGGJAZo8BoDwGYJADEBmQbAAbMBcAJ0IIRQuFwuF8vm6aaaaaaCCH/9RcIubDkCgBQAzBOLL5cLhog3p////6BgTBFC4yZfTah/////WmYFwuBgTh///5cEDgnB8AMQ3nnnnnnT09JSRiMQxDkMJoGIwGZKgY8GHpAYYkBmjwGgPAZgkAMQGZBsABswFwAnQghFC4XC4Xy+bppppppoIIf/1Fwi5sOQKAFADME4svlwuGiDen////oGBMEULjJl9NqH////9aZgXC4GBOH///lwQOCcH7usq4IwABEoZUkABBACSAH6LQxWQ1ekTmN4ZafMA1wANy7UyDUPgZzK4WdA1sdhHQGm0eAcG0Uwxsang94vpi3jMEgeLBTM1nUEFdDatet8mwsLJddIZ0CIGTVYoADBkuf9NrJ1f3UsUMJtLy/dMOCTfrUURBBm/6mKA7P6lkcLj/z5mI2/+plE5/9TFgqrf/qYpFf/9v///9Z7////Weu6yrgjAAEShlSQAEEAJIAfotDFZDV6ROY3hlp8wDXAA3LtTINQ+BnMrhZ0DWx2EdAabR4BwbRTDGxqeD3i+mLeMwSB4sFMzWdQQV0Nq163ybCwsl10hnQIgZNVigAMGS5/02snV/dSxQwm0vL90w4JN+tRREEGb/qYoDs/qWRwuP/PmYjb/6mUTn/1MWCqt/+pikV//2////1nv///9Z57qrtSAAaAEOPo6q0VkVoBSMfBmZVHFMomra/sFv//+7IADwAEcXjR92KgAo4vGj7sVABRJeNFzHKLAiS8aLmOUWARYQFAEDoGXFeBv7iAZHHAGKwQLnD0RkkCKmpzOKUjUjUiy0nUlpOh2UUjSoc4VsAaFAMkgspOZb1de+/222v3lN9ikN8FBKOaa0lI/b/+32+TGsxIaGIRJknav9///1fSInqSWHRKS6v///6/nCEJvdVdqQADQAhx9HVWisitAKRj4MzKo4plE1bX9gt/iLCAoAgdAy4rwN/cQDI44AxWCBc4eiMkgRU1OZxSkakakWWk6ktJ0OyikaVDnCtgDQoBkkFlJzLerr33+221+8pvsUhvgoJRzTWkpH7f/2+3yY1mJDQxCJMk7V/v//+r6RE9SSw6JSXV////X84QhNqq9yGAAtDIPgN54cGQ0s4MLUdIZgz1qumUxddqEpWGZfQdAYAOR0btmDgYpm3SG6ec7wnc1aVs2dj+1bbTnyweolsigCR4Bd4UcqIoKbf1mlbVoekvRo/NT+yIW3Ci11PUfr6dTaC7b2fe/yLtUspAgFDuR53///+pvOkM14YR+pvt/+v6/koSLVV7kMABaGQfAbzw4MhpZwYWo6QzBnrVdMpi67UJSsMy+g6AwAcjo3bMHAxTNukN0853hO5q0rZs7H9q22nPlg9RLZFAEjwC7wo5URQU2/rNK2rQ9JejR+an9kQtuFFrqeo/X06m0F23s+9/kXapZSBAKHcjzv///9TedIZrwwj9Tfb/9f1/JQkVi7zplQAFIAgwMk9GmLaGUorLwS8iIOIgIHDACBpGPGPIQTeb9Ig1+zoNGAMN6Ijtv5KI3h0rZfrLVE0dZ6n/+7IAHwAEk3jRez2kEJJvGi9ntIIT3eU/7PqwQnu8p/2fVgg7IPUzJfLB65iPwTcgPIEeWDqpvvvo6N2qSs9T1fIxKtlg1Fg5Kkp6z7nWWdSqqUulspS3s9vkhqoBb8Kg7POv6///9vUQVqqgx7Xmf7f//rbyUN1Rd50yoACkAQYGSejTFtDKUVl4JeREHEQEDhgBA0jHjHkIJvN+kQa/Z0GjAGG9ER238lEbw6Vsv1lqiaOs9SdkHqZkvlg9cxH4JuQHkCPLB1U3330dG7VJWep6vkYlWywaiwclSU9Z9zrLOpVVKXS2Upb2e3yQ1UAt+FQdnnX9f//+3qIK1VQY9rzP9v//1t5KG6jmYd0IAA0gIAD4Llq2gAnFo8YQd9sJd67dV09LYmltad5GkSGPh80IAtg4NUiAWeV15W6FXRpnnczdM46C/SvZzut0SUNUjYiIywAAvA1QCg40iSbnTJdtr85/P3fO63YhxpWgiDUWgsOUjjzp+tq2+r+++jtYd2dURoFQ+LhSOZ0/Xrb/9T9Sz21xU3rrCIH1Zi9ev9/1atZ7aRwqb1nMw7oQABpAQAHwXLVtABOLR4wg77YS7126rp6WxNLa07yNIkMfD5oQBbBwapEAs8rryt0KujTPO5m6Zx0F+lezndbokoapGxERlgABeBqgFBxpEk3OmS7bX5z+fu+d1uxDjStBEGotBYcpHHnT9bVt9X999Haw7s6ojQKh8XCkczp+vW3/6n6lntripvXWEQPqzF69f7/q1az20jhU3rV7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//In/+7IAFQAEsHlRe4mkoJYPKi9xNJQSUeVF7hqSwko8qL3DUliIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfd7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//ImIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfdpycyVAATgBDA1ALqbMHAeBrYsAWWvHH2AywaA7BHvZmwaGmklUBEh5MPfAYCKjjZQRAGyw/4fwM8hGdB9J4CJscei+u5YLTImQ+QavAASY+iycWpPbNd999Hba+rMXrrCZ0W1StZar1utXOa91mj1O3XkCZ1SkCRAiy16n9Tfq//P+onVdYcXq02/9f9bf+P47nacnMlQAE4AQwNQC6mzBwHga2LAFlrxx9gMsGgOwR72ZsGhppJVARIeTD3wGAio42UEQBssP+H8DPIRnQfSeAibHHovruWC0yJkPkGrwAEmPosnFqT2zXfffR22vqzF66wmdFtUrWWq9brVzmvdZo9Tt15AmdUpAkQIstep/U36v/z/qJ1XWHF6tNv/X/W3/j+O543/+6UACbAYaztA4tsHCcKBx5S8EJ48ScsKkEaV3wtIwd45ACAQBij/+7IAFAAEt3hUfWKgApbvCo+sVABSgV9f+YoAAlAr6/8xQAAgAbKYoGDwWBIDlhrJuWqzTL9SbKMay9NzZaZstX1Hqz6AYYCxHFLl9Pf+tVapulmK7UWt9B61l8Neg3tQSZCrztaV88yFfW7oCbU6RmLPAOCwEggQQ0TqfapGrV//Uf9RC6EzDAiSHKL/////nREb//dKABNgMNZ2gcW2DhOFA48peCE8eJOWFSCNK74WkYO8cgBAIAxQQANlMUDB4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
var scanditLogoImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAGF005WixOocIq1mt1eerrw/BT6/L8cu69C3Hfb+EY3NkJ/tINHOU4Vl/VORxGiTOQ9DOTVjGugrVGwmdn/Zxkcv0qds/gOS9rOa6isM+Zc3TaRUsmvhQw2WDO0Z+mNoRnpEnurgjs8RLVPeD3vNkNhMz+2h1PgZP6anrxkTT69d4hhI8IHzCpX8Eb8gyrU1qOxIHJ/A0c5XqHwL7flCOL9GdK2NMR4JRv7LJmnYQvoF2OEHcsqEpY/s1YzK1JYJy7WRu8KoeGo75iMea7iWMxdncYb6CXLBq8I5jhSd7s1YBnnxzjMqLjSDv8kb6Do8+L6556OXYCpYR41RFdbWXx2NwfBrCRYU+jOO4FgBfjEsn+8EpxZBjAHHsX9Y4Tm+3EtKLFV10CPA73SrjfwPFgA0C8KlIOusILtVmHq1pil1HOsC548YcKgMpWUOHJCtbJrJZjwwi2eu7gaGnHdlu6To4DgHdIugwQIi2+GRvwogJgRByxzwF4+vqos5uNY8EBl/Cfrad6Ry3PGCoGHYCLqr94Nxx6joceeIWqfSLzNVQkQptATE0sBk+rXU9rDJ4IKZtxnMAOCQWB0byO46YNqwN3cIzRv+U6OQauAfSNd9KJ+qMkx1SUY3M2cVIFFiQl6xqaTSQW55hkpWy8Q9zs83EgY+pQOBorDiUT9gMbYOCIjWl7YmDBI2nrFmCaxURFS2YG+JlpoRYrWpT5ewlvN+MYp4Gapbm0dV7H0dKN9ak7OAaB8+U6OXaQkihgPX3jsY5yQkqJS05BWkQ+SbN14FGbkIe+ApvC/8dAZxP18IMYsZg5ngP/MPPHgD9C9K9zBXis5+j9FhL6fCMmu2R0kAV/BaWs9h3eqclf20RQntInkjLD6IYtRAKU2WQbp+NY9KK0eDtHH3CWqpNjmieRz2vDAABHjEVTiU6Izqr3pbgiruydET6Vip6yMHuMV07SluLJJfotZg6Fo9Y/gieERFNREnlm5PiIF6uSdZH5/DXinCQsRxM6OB8vtx6/evXKBWyM1Rb5T2TeXG06hEBtwSBJ6DjSMkGM38axCJxH6uRoyRFCUl0fMmthwNYpvVKjTtpPQ5YQq1Cjh0QD6WBn+6DMcbKNSgx77hqvLCYOTuGorVihOSLAWfzl6JWR498hGh1+K3+JPmG5GZVE2DiuQoaskuNrSvl7ks3fRabMOK5hh1AwPhvOcnqO/iVcBG7lOA2Qtno5WqziS8ununY8GKbL5AIKKTFL+UNSo87zR3PDAFwyngsxH3HvGA294/kNFV0oSYmsfGHkOCohyZcQFm6JbGFClDmrVhOBmlueorZvw1d7bSFrMtP3w/iDCDuefpQa9Ryp5Cvs+2/jeEDDvN54PDhwp/NNIkryUsyNhyiw5Jbo6hHerT/D8DjoOcY3Gc9LqfyRzFHjUMWj1m/DOza/SSPHI1b0Djah055V4aE2Y5BP3iwmd3GdZenktNGkPAZXRNQg7diKpvUcKd0r620cZ/CT1Ls+VsTHzi3mm6LkTEzQfwIDTH0HBS0edGEuaEl25H7IeB7pOWodz2+o+ATHrNfvRo4f2OUxnoh6jB/EEE0QF/O3iPIFXPED0so7GTEpb0c/ifpFoAWm6dQcm4GvJzdz9HvxhkzVyXECGyyTpXtOgRaR41BtGC6fEN04mhcCtrdOjtxNHK/wTOoraDNyPGSXn7Al/s5fYI2L4yxwC8cqXksCrxOF0QFjeT8FIULyu9DbZeBI8W9/uZnjAsIhYq2T4+eauhZDoUAfWm4d0jGn7wXWRJoFKlWWc4Hde8YjtwqssPmb6J4iGx1axd4DZx5bC7Yj/lvOOV9QTlL+6MNWzlhuw0diZQnnOmXkOBbGxY0cm13YIaShTo6hLWBElLxjM8Ak7TWwCqwVhT0c0MlZuCFgj65RxRkAT+8Vj6lteDJFy2YVg0aOWKKj4IbC2JYStJBp4mjtugXjGuIptuGYtmHLsDlvQTwqbca5DLblhVbhSOVA4QaO/swwlt6qovMOjsvnTwDEHf1LAK6ERWSRXILKcscwcCEsLuV1YGNuyePZGUR84T7rY9PoNoBhYK5k5HgMvOinZetnbEWkmQaFc/3BUay7ZmteeN4TnhEZssE2Mt4uGdubd2OXtNWOx2znASPHohdajp7J1xOC9dOCjSOiUp13cCwT8qbCDunfED4typ2/Kh4AG19FcZs72wLgWWpZvgBm7hOPHYTfcYRRqWav8d2gezJxAN7dc8LmK2SaSacxdSjmfR+R8wD3YVspcFnYy/5Gnmkcq8tGjpYMUFBzVMy2+5aQrKVejtw8IVPPYysrnSdZQpbZeUVTsjkWzBK+Q/p7FIv57LT47AMnngazl62Hhb3eUTs3M1RsJHw+WaQCf7KmiJgtEkJCs+7OzUBUURpvCzg1nIV1zhz/U7KXexFCInJ24QK915evWdGUsFhy1eq+fJiW2V0NmXDkltQcgzPHl5OvBXu5N0p4MsXVzdFiTwnbWmdjiCeE3ZcVZLmTpmjxZMkeIiREi/muCIlY78Nx+nCPtkzbfevCnp7jMh1FY5uAU0mB64roU0z+fEAHPK+e2WKjUiChsfNKnlCug+6owrH45YyopGde9W0ipJEKY8+JlqPffaTZz3DlkHRfY7mGPyBAldtpmBfGFuqgOMRA//c5Al+cUT6UnVG+M8kcB/I0vEjblDxW3xJKyybppcNas7J+8Wwo14qkoSfzqnjOW2WmbUQRSemImuOs3HhA33iS53VP1Up0m6iBRLncodFf6cWEah+RTCTEJhpmuXt9cHAgXG3pzPQDJbM8PKsaQ7W9D4PniYfP9Sa2mPsJAMBwyfQjgNqGgfBp6IGZKUfCf1vonmkfWiZt9ru+r1bb9++E/f9qThLNBhL5RkKsd1XN9qRIJP2AzNTSTdLJYVv+znWWZu7ow+p4ow1Ys3Snnry7Yj5rHfjfmda/AA1uqYyEPVX6AAAAAElFTkSuQmCC";
var laserActiveImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAwFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFVydJUyNFUyNFUyNFUyNH8/v5UyNFUyNFUyNFVydJUyNFUyNFUyNFVydJUyNFVydL3/f1YytNUyNFUyNFUyNHx+/ve9fbp+PnR8fNUyNGF2N9009q15+uW3ePD7O+l4+dv0dlv0dj///9Ujp4pAAAAP3RSTlMAiXJnBFsIARM5oA1+UKsuG5W3JEULBishQj5iAm0QkTQZ/h5MF3snWISbSHb8plMFjfjv9Oeyua3Ww9/Nn4y/IgemAAAIrElEQVR42u2da1saOxCAq8jRVuql0qOVIgcvgHhBrBbUYv//vzpzySSTZBeWqo8fOm+E9Vv3eXxnOptNJh8+vD3rhvFC3lHR73/GmmEsxdKKVY+N3ONFN3OT8O+S/GMYnmXtid0rCJAy7b3nrPDyQn5dnk3DiFnaoeJ4Ife98ZnqTnTSPHZ38R0ezWPDMF6BeY6lseK0F+Ej3Vl1MJ1EZ78rmXrmBvxWTLcCO4axU8WUEsk2nIMhJsh6Et75HnQn10l1NB093xB9F9p4UsBBKXuGsQSlIuXSScSQ/Og8Ch9097aT66I6mo6S74i1c++mn7G/v4+fQrYNYymKPWLBEvEkOtD7LhoPvmN+R93R9sR1UR1FR8n7/cqS/oejjI+G8UIyqbb9NQ4NtB6MJ99J99j2deU6q35AnrPDFew99FcY+MN8K6VpGHMpVecwQL5p/1h+dL6/Bwm+i9k92M6yY2IPrpPqaLqT2omrR7hk9l4ETvEHRuAzD8OogNNFgUpd8DeRhgYGACkPvqPuO5jc2XZM7SGxK9dRdRSdknNicIy+Ey/xyDMYDRR1dzGMaihrHKCUxweFhALpD8qj76Q71jLOdknt6y6xB9dZdRCddU4ibpSgdA606q2cWqtWq7VqfDWMUpwk8BVRd99xPHAYkP6oPPkOurPtVMlwaneyU2KHZ1NxHVVvXqDm3uXC0GuR1Nrr+J7bODyr9IGByNUwYtr+wrYEgcClJCZ0FJD6YDz5Drqz7Vi3U2oX2amKgcR+1nWuk+okelmOrmVWB6XxVi9xBHpFNHoNw0gpUkU8WsUfCYoQBLW2uA/Cj0aQ353tBydcyHAdQ8+na5TYsYg52GPXUXUwnbXW2TnC/atKbO+x47xxnrFiGBXIxEGbkoCQAHD2k/CgO2T3JtkOT6ldl9q17JtUxOz1xXXM6WC6N5qVVtm6B2ZfRmrnPo9Xxkxn3InYlWEYGudFDOjDpHEAyin7UXoQnnVn27mQodQusksVw0UMuj6CrM6mU7ZO/6ehIFNZ28uNXjudFUPNJxz8ZRgxw09eDbgEQCEdERwCSn+X+EF48B11B9uxkqFCZmNjk4t2/3xKFTsl9m9Ndh1N7zUa5eWHZO1Y7qFzW+7/GgZ+AVvXW1v0RR/DKMGZgldAFJKAcP7vDhP30fkG6I7ZnWynQoZS+9ev/ISKz6euioHEDkWMdx1UJ8Wdz+NOqEZU1vaJW9ntxBZ+5nzhYRgJJEYBKhQoAjL3wXr0nXRH20+bnNpdHQNPqCQ7VzGS2C9GXnUQncQe+nyNZcjsegZMZ1NgMp0Aj8Av5AF5Qu6RH8wdcctcBY49v42/m6CC8oN8YXnu2CSyivwi01A5dO8RJZxMp+jl8/Pzee+yXasPJLV3pWj3slMVgxV78xTyunN93KG8HWoqjKkZfKZb06A6u462P4DtTyT7Pdn+g3S/I9tvyfYrHInpJPvxbzP+79Qc//BBddEdPLm9cvmRZCfd78t0d7ZP2fbn3mq7VcfU7uqYWPYjnnekKmYAiV1cZ9W5MnGmo+jadQotSuwPvySxR64H1dl2dh1/LLMbLHyku8/sV2z6rU/tJPvTvbhO1cSjtx2E5NzeoNT++SLUMaWy1yPZOZ+L7VtTlP3ndPqFbJ9M0irmKVQxktddYpfMTrofp5ndMNlF9WNnep7ZXWIH2x+C7uT6Y5zaWfZvy8o+lPIF8/oW6z5F3Sec2UNiDxX7vS7Z7+6KqhjU3TK7kVTsKrOz7XeuaM/KGK5iojpmSmU7uT43s0c1Oz2fNs7P8elUlewzrGJwkO6+Yp/oil1ndl2ySxnjXD9OUrv9vU12pzqNUMWEZ9TwiPoUinYpYySzu0dUKmNKa3Y9G0MTj5doO0/G4BzMDAZ+fZrRXEw0FePLmHQu5l5l9rRmvzLZjeLUfhW7ns3GJM+nfj5mqlzHB9Ti2Zh8nr2l5tnjF/67qL9+PxomJYd6ziZ6bVQwz24Y5XPt2SQ7jvDGiebZr7Np9irz7Okb1IvsDeqKjNIXqJ3s/elQvWOS6Rz1psneoRrlL1D16yN+gxpeoPplBLslb1BXy9+ghrUx3cK1Mb2CtTGN4oWMWv6Ol1/nfnkvRStkeJmMrZExooUxTo4E8kjWioXFYdHSsEZj0dqYSqseLwuQNY9h0WMjW0Yz9sTrHnnFY0fu3jCcCR2vc77ocbwyztf/hmWPbtVjbf6qR1nP3o3Xs9fdevaa3yeithz5bRpxMMT6Fy1o53vlj61tN+I17JEX2Xr282SDh9/TIbs5eD37YDRvPXvpTqV6vcI+Jdou5f1XWzr0fwL5ZiW+a9uZY0T7lBpzNioFsfVOJdr9WXGnkt+DulG+B7Vk+3eyZa+m4qCdbEBVwWCbT41Ke1H1/tOgdbtoE6reg3qa7kHd1HtQo+4Ce2l3gfLeAoO4X0YSBfWstUAr7Bo3jMXtBdiatMGA7i5Qj3pshO4C4rokdtVdwPeNOYv7xnD7o6W6xnzWoTBIWsdwRFjrGGNBw5ikT4YyelDaN+ZU+sYcUp+k4r4xlTqCHc7radcsagiWBINvCGYdwYxqHcFO855g1BWMWs2VtwRTHcHQ9aOoI9jcXo/S3NEP/3tOHBSuRV4WGNbq0ajW7DFr+Mg9F2Oy5qfS6/Eg9HpUib2ki+8ed/HtL27iK91PS9ugWhtf4zW6+H7MO/lux518ky6+2vWsZ3VRf/ZqzdnD70l39m1rz268eoN2TML9/Vi90J/9ZE5/9kUnbyx77gYOfdqGHbxhvPLRGycFZ2+EkzfO+LQZOXnjZi0/Z6boTKVFJyrJLy84UcmOVDJefqhSctDYnDOVotPy3GGQ1Q7LO8JhZ+UZ731cHoqojsuT0/Ju1uYeDpmfg/pmp6DaMajGWx2EOvcc1OTg32oHXN+89HxrO+DaeNMjrqsd7M5Huxfy/Y9ZM4wlWVoyZ+mHd2LdMF7Ma5j4P+hE04Z78rHKAAAAAElFTkSuQmCC";
var laserPausedImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAYFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFTyNFUyNE9ws1UyNFUyNFUyNFTyNFCxM5UyNFHxc9RyNE5wcwd5ZO7AAAAH3RSTlMAZ35yAQgbBAwTI4lbRDmUoKtQLrc080osVZvhKMyyq5oARwAAB8JJREFUeNrtnYtS4koQhhUENRFRRBQRff+3PNP3nktCRHbPqTr9T5jErdrVrfr6t5PMdF9d/XndhEK/1H8T0dtQ6K/ol7FxAWIX+Veh0AVVoLaYEAojoP8C1btQ6O8KmBsPiSbwnvSfsHvPB4w7ucBhRyh0EQlROgw5/kKjwDNf4G6ke8yngrrkaYmDr+hIk35CoXPlOKJTAZxQSCHhiK9xV9aFdKN3BNNOJ5w7nTs60tR1PIdCZ2pp52VHXC3lBMh1SqEGBjHPvJe056gj6UsFt6HPdMAH5s9K73zQ9I6Tnlp6CYVqGSCf/hK4+pQTq6OJg4KQF+AVdzV2Yt2jjlDjP1ux2cLzFUZTj3A8hkLn6JXn1yEReRofSD0gT7wb7WLtjnVGHTkHpo3YbIxrBccKjlDoskKucLQiA+lPzAPw7O6OdoNdWGfUCXSBtxhyKnh+g5GEU0sbGqHQKb1tGJYBlFY854EgyL+8GO5CO8HOxm6sA+oIOsEsDBffqODYaZ+OfTpMD6HQWdrLKQ0T8JWFhqIJzAPviHuDdjV2ZZ1RB9ALjgXmzd7jDD/S/qFG+pqGnUKhn+iBJkUojToaLAwIe+Q94f5utJewo7Ej68nWkXTkfIov489AP5PTPA0+zfmY21eh0KgEE4GHh2DlwsFHAQAvuCvtYO0edjV29HVgnUh3/vxwPeLOAnGB8awcIrsKhXLNGY+5Xs95QqJ8PABzHn5kHnh3tDtrB9idsad7U2adSDeY9eCpsueZwV2r7+lInxme+15OoVCtmcwzZgYpqoOCsWP6EXjAHdw90Y53qWbtBjsbO7KebF1QL3Cm06yJdT9jlBXjNQ1/QvEpFCrUu6t+vc4B8rEAmOX0E6CKO3q7WbvBTlmMJOyJdUad4B6U0t0b3X2J8sdHOgo9PcGUBkyhEIphIELwYK1pAph8LHj6e3Z/wZ1p50SG8pgbn7KzsaccZg+oK+gDCcea4e6N7g+Hdv4feYYRCv1IT8/PRE4WExYEAr/aPvGutIu1Ux6T7lARdjV2TGI2zDom2y4d6UvTZr4rujOwv56/vvQj2tIIhTIxGIUSRIkeHwQV/Agj8Q7unmgvrL2GHZMY9nVCvfDrD8k8GGTgFnQUHY4H067SN4xv/IRCA9p9IyeAS6bDzthKpJG2RwqTFAxA/pp4v0bazdqHYSfWGfXCs51tM+nHLX5LZZ1x38kwzr9tootQqME5kQFnYl5QJ6CYdcOdgUfchfaUyoC1D8LedZTFJGNnX/eoU9b95HMTJn0rpAPqauye853EKYNunAfvoYx0vVJ3d/Z+8N5+VNq3Ge2QzaC1b+DxI+Qxbdg/4fZ0442dWLc7BYe6ZNyKumd9dyh8fWesh7OHTno7o54lM4ec92OWyhydtc+asN82nV1gtyTm+Snz9crYt01nrzj3pLfiOfQ/t/WdT9kbeXuGepbFHC1td87+yrDfD+bslsb0RcpON8HFvamzdkvZd2buyrsDPjtCoTx/cfeombET621nB9iJ9fWUnL28QeU71LU+hDHuFXez9/phzO7QeBKzC7xDU4DftY39MJTDoK9Lyi6wjz6NyZ6zu/dJ/Oq2krzcGnvOrnGhj9jtcvu1jSfuoS8/CIniYXv1tql6zN54zr5qP2fP36Bu9rJYYKbvlXgZV/0a1cVA/TRen+M82Q1uvEkNTXt7ys9F+Jax8Qb1w1bU9PIGdT72BvXU2pjB9bi6irGIgew3QGthDK16gGiIpTEhvzYGgfjQ1TFea8d2c21MP2VtzPCqx2LRY75GvV726NaEzZr+H2sdQ+csg2xxravF3YrfYtXjamDV4/B69odsb4Yuma83G7UX/orzZxexkj00bU27QqMI5dt/5oJ4vqB9bD37lJ1KugHK9gaWW/Aa2zlm/heBj4LYqRQa36k0L7ZoCNSzYqOS36pEG5XGdypN2YO69xtc29uqiyiY2xanYkfhtW0zDIXG9qEaN5JdtPZku53Y+/3pPagj1QVaVT2stMCD1hfgKgMaAdmmcPndEAqdridwnW13tu3PVYGBPeKt9QVcdYHHkeoCi2bdGKuB9DasRuWjfVYzBn4U/o3gym5w0YIoKRNqFYmRCyOmVF43hsopcbEkrJPUrhszXBFMC4LVFcHa4npKqywWaJKIeMvLPoVCw0XB+PxWFwdbYTmwt6o4nlQEex+oCCbWPlbr0RcqxWqTUgGyVebRRUUodPFqj4JYWfDxNav1WLBusOdVfJdVFd/091/k896q4Gs1VduFfF1J1KjoG5pUvZeReR2u4fviSvm6Mr6uii+zvrAqvpzHtOqzj8nXZu/qQu3D9dijPHvoRGn2F/XUkpbPrDC7VWdnyLVA+1B99qrzhnaPmdwehnsgVO0Lou9G6A904ei6svdG1XhDSF8M95nJeyqdbKR0r81tfI8buaBQuY+OSqFLNVVSsvyF76zkQB/oqZThzt3ysPHeYqRDnmtTZh3yrK0Zf+7sD0KhczvkOYQyohyM2jAvsbsY65ZX9UFd/KAP6p2c7vwVd6ksm1ZG787Q+V1P2X4BOYKNDfzOMETKF+N9UH/V4XpRNB1e6BdFM1b+hEKT+lkLLbd5P1+meZGBVzZX/0Fjdwf+dN3+pg98KPRDjbF49S/pJhT6tS5B4j8UFQCShr1YqAAAAABJRU5ErkJggg==";
var cameraImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xNyA1Yy0uOCAwLTEuNC41LTEuOCAxLS40LjUtLjcgMS0xLjEgMS41cy0uNiAxLS44IDEuM2wtLjMuM0gzYy0xLjYgMC0zIDEuNC0zIDN2MjdjMCAxLjYgMS40IDMgMyAzaDQ0YzEuNiAwIDMtMS40IDMtM3YtMjdjMC0xLjYtMS40LTMtMy0zSDM3bC0uMy0uM2MtLjItLjMtLjUtLjctLjgtMS4ycy0uNi0xLTEuMS0xLjVjLS40LS41LTEtMS0xLjgtMXptMCAyaDE2Yy0uMSAwIC4xIDAgLjMuM3MuNS44LjggMS4zLjcgMSAxLjEgMS41IDEgMSAxLjggMWgxMGMuNiAwIDEgLjQgMSAxdjI3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMXYtMjdjMC0uNi40LTEgMS0xaDEwYy44IDAgMS40LS41IDEuOC0xcy44LTEgMS4xLTEuNS42LTEgLjgtMS4yLjQtLjMuMy0uM3ptOCA0Yy03LjIgMC0xMyA1LjgtMTMgMTNzNS44IDEzIDEzIDEzIDEzLTUuOCAxMy0xMy01LjgtMTMtMTMtMTN6bTAgMmM2LjEgMCAxMSA0LjkgMTEgMTFzLTQuOSAxMS0xMSAxMS0xMS00LjktMTEtMTEgNC45LTExIDExLTExek04IDE0Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMnptMTcgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMmMzLjkgMCA3IDMuMSA3IDdzLTMuMSA3LTcgNy03LTMuMS03LTcgMy4xLTcgNy03eiIgY2xhc3M9ImEiLz48L3N2Zz4K";
var switchCameraImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg==";
var toggleTorchImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg==";
_objectSap("keys", function() {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});
var keys = _core.Object.keys;
var keys$1 = createCommonjsModule(function(module) {
  module.exports = { default: keys, __esModule: true };
});
var _Object$keys = unwrapExports(keys$1);
var abs = Math.abs;
_export(_export.S, "Math", {
  hypot: function hypot(value1, value2) {
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return Infinity === larg ? Infinity : larg * Math.sqrt(sum);
  }
});
var hypot = _core.Math.hypot;
var hypot$1 = createCommonjsModule(function(module) {
  module.exports = { default: hypot, __esModule: true };
});
var _Math$hypot = unwrapExports(hypot$1);
var CameraManager = function CameraManager() {
  _classCallCheck(this, CameraManager);
};
var CameraSettings;
(function(CameraSettings) {
  (function(ResolutionPreference) {
    ResolutionPreference[(ResolutionPreference["FULL_HD"] = 0)] = "FULL_HD";
    ResolutionPreference[(ResolutionPreference["HD"] = 1)] = "HD";
  })(CameraSettings.ResolutionPreference || (CameraSettings.ResolutionPreference = {}));
})(CameraSettings || (CameraSettings = {}));
var BarcodePickerCameraManager = (function(_CameraManager) {
  _inherits(BarcodePickerCameraManager, _CameraManager);
  function BarcodePickerCameraManager(triggerFatalError, barcodePickerGui) {
    _classCallCheck(this, BarcodePickerCameraManager);
    var _this = _possibleConstructorReturn(
      this,
      (BarcodePickerCameraManager.__proto__ || _Object$getPrototypeOf(BarcodePickerCameraManager)).call(this)
    );
    _this.postStreamInitializationListener = _this.postStreamInitialization.bind(_this);
    _this.videoTrackUnmuteListener = _this.videoTrackUnmuteRecovery.bind(_this);
    _this.triggerManualFocusListener = _this.triggerManualFocus.bind(_this);
    _this.triggerZoomStartListener = _this.triggerZoomStart.bind(_this);
    _this.triggerZoomMoveListener = _this.triggerZoomMove.bind(_this);
    _this.triggerFatalError = triggerFatalError;
    _this.barcodePickerGui = barcodePickerGui;
    return _this;
  }
  _createClass(BarcodePickerCameraManager, [
    {
      key: "setInteractionOptions",
      value: function setInteractionOptions(
        cameraSwitcherEnabled,
        torchToggleEnabled,
        tapToFocusEnabled,
        pinchToZoomEnabled
      ) {
        this.cameraSwitcherEnabled = cameraSwitcherEnabled;
        this.torchToggleEnabled = torchToggleEnabled;
        this.tapToFocusEnabled = tapToFocusEnabled;
        this.pinchToZoomEnabled = pinchToZoomEnabled;
      }
    },
    {
      key: "isCameraSwitcherEnabled",
      value: function isCameraSwitcherEnabled() {
        return this.cameraSwitcherEnabled;
      }
    },
    {
      key: "setCameraSwitcherEnabled",
      value: function setCameraSwitcherEnabled(enabled) {
        var _this2 = this;
        this.cameraSwitcherEnabled = enabled;
        if (this.cameraSwitcherEnabled)
          CameraAccess.getCameras().then(function(cameras) {
            if (cameras.length > 1) _this2.barcodePickerGui.setCameraSwitcherVisible(true);
          });
        else this.barcodePickerGui.setCameraSwitcherVisible(false);
      }
    },
    {
      key: "isTorchToggleEnabled",
      value: function isTorchToggleEnabled() {
        return this.torchToggleEnabled;
      }
    },
    {
      key: "setTorchToggleEnabled",
      value: function setTorchToggleEnabled(enabled) {
        this.torchToggleEnabled = enabled;
        if (this.torchToggleEnabled) {
          if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch)
            this.barcodePickerGui.setTorchTogglerVisible(true);
        } else this.barcodePickerGui.setTorchTogglerVisible(false);
      }
    },
    {
      key: "isTapToFocusEnabled",
      value: function isTapToFocusEnabled() {
        return this.tapToFocusEnabled;
      }
    },
    {
      key: "setTapToFocusEnabled",
      value: function setTapToFocusEnabled(enabled) {
        this.tapToFocusEnabled = enabled;
        if (null != this.mediaStream)
          if (this.tapToFocusEnabled) this.enableTapToFocusListeners();
          else this.disableTapToFocusListeners();
      }
    },
    {
      key: "isPinchToZoomEnabled",
      value: function isPinchToZoomEnabled() {
        return this.pinchToZoomEnabled;
      }
    },
    {
      key: "setPinchToZoomEnabled",
      value: function setPinchToZoomEnabled(enabled) {
        this.pinchToZoomEnabled = enabled;
        if (null != this.mediaStream)
          if (this.pinchToZoomEnabled) this.enablePinchToZoomListeners();
          else this.disablePinchToZoomListeners();
      }
    },
    {
      key: "setSelectedCamera",
      value: function setSelectedCamera(camera) {
        this.selectedCamera = camera;
      }
    },
    {
      key: "setSelectedCameraSettings",
      value: function setSelectedCameraSettings(cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
      }
    },
    {
      key: "setupCameras",
      value: function setupCameras() {
        var _this3 = this;
        return CameraAccess.getCameras().then(function(cameras) {
          if (_this3.cameraSwitcherEnabled && cameras.length > 1)
            _this3.barcodePickerGui.setCameraSwitcherVisible(true);
          if (null == _this3.selectedCamera) {
            var autoselectedCamera = cameras.find(function(currentCamera) {
              return currentCamera.cameraType === Camera.Type.BACK;
            });
            if (void 0 === autoselectedCamera) autoselectedCamera = cameras[0];
            if (void 0 === autoselectedCamera)
              return _Promise.reject(
                new CustomError({ name: "NoCameraAvailableError", message: "No camera available" })
              );
            return _this3.initializeCameraWithSettings(autoselectedCamera, _this3.selectedCameraSettings);
          } else return _this3.initializeCameraWithSettings(_this3.selectedCamera, _this3.selectedCameraSettings);
        });
      }
    },
    {
      key: "stopStream",
      value: function stopStream() {
        if (null != this.activeCamera) this.activeCamera.currentResolution = void 0;
        this.activeCamera = void 0;
        if (null != this.mediaStream) {
          window.clearTimeout(this.cameraAccessTimeout);
          window.clearInterval(this.cameraMetadataCheckInterval);
          window.clearTimeout(this.getCapabilitiesTimeout);
          window.clearTimeout(this.manualFocusWaitTimeout);
          window.clearTimeout(this.manualToAutofocusResumeTimeout);
          window.clearInterval(this.autofocusInterval);
          this.mediaStream.getVideoTracks().forEach(function(track) {
            track.stop();
          });
          this.mediaStream = void 0;
          this.mediaTrackCapabilities = void 0;
        }
      }
    },
    {
      key: "applyCameraSettings",
      value: function applyCameraSettings(cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
        if (null == this.activeCamera)
          return _Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        return this.initializeCameraWithSettings(this.activeCamera, cameraSettings);
      }
    },
    {
      key: "reinitializeCamera",
      value: function reinitializeCamera(camera) {
        if (null == this.activeCamera && null == camera)
          return _Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        return this.initializeCameraWithSettings(
          null == camera ? this.activeCamera : camera,
          this.activeCameraSettings
        ).catch(this.triggerFatalError);
      }
    },
    {
      key: "initializeCameraWithSettings",
      value: function initializeCameraWithSettings(camera, cameraSettings) {
        this.selectedCamera = camera;
        this.selectedCameraSettings = this.activeCameraSettings = cameraSettings;
        if (
          null != cameraSettings &&
          cameraSettings.resolutionPreference === CameraSettings.ResolutionPreference.FULL_HD
        )
          return this.initializeCameraAndCheckUpdatedSettings(camera);
        else return this.initializeCameraAndCheckUpdatedSettings(camera, 3);
      }
    },
    {
      key: "setTorchEnabled",
      value: function setTorchEnabled(enabled) {
        if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch) {
          this.torchEnabled = enabled;
          var videoTracks = this.mediaStream.getVideoTracks();
          if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints)
            videoTracks[0].applyConstraints({ advanced: [{ torch: enabled }] });
        }
      }
    },
    {
      key: "toggleTorch",
      value: function toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
        this.setTorchEnabled(this.torchEnabled);
      }
    },
    {
      key: "setZoom",
      value: function setZoom(zoomPercentage, currentZoom) {
        if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom) {
          var videoTracks = this.mediaStream.getVideoTracks();
          if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints) {
            var zoomRange = this.mediaTrackCapabilities.zoom.max - this.mediaTrackCapabilities.zoom.min;
            if (null == currentZoom) currentZoom = this.mediaTrackCapabilities.zoom.min;
            var targetZoom = Math.max(
              this.mediaTrackCapabilities.zoom.min,
              Math.min(currentZoom + zoomRange * zoomPercentage, this.mediaTrackCapabilities.zoom.max)
            );
            videoTracks[0].applyConstraints({ advanced: [{ zoom: targetZoom }] });
          }
        }
      }
    },
    {
      key: "postStreamInitialization",
      value: function postStreamInitialization() {
        var _this4 = this;
        window.clearTimeout(this.getCapabilitiesTimeout);
        this.getCapabilitiesTimeout = window.setTimeout(function() {
          _this4.storeStreamCapabilities();
          _this4.setupAutofocus();
          if (
            _this4.torchToggleEnabled &&
            null != _this4.mediaStream &&
            null != _this4.mediaTrackCapabilities &&
            _this4.mediaTrackCapabilities.torch
          )
            _this4.barcodePickerGui.setTorchTogglerVisible(true);
        }, BarcodePickerCameraManager.getCapabilitiesTimeoutMs);
      }
    },
    {
      key: "videoTrackUnmuteRecovery",
      value: function videoTrackUnmuteRecovery() {
        this.reinitializeCamera();
      }
    },
    {
      key: "triggerManualFocus",
      value: function triggerManualFocus(event) {
        var _this5 = this;
        if (null != event) {
          event.preventDefault();
          if ("touchend" === event.type && 0 !== event.touches.length) return;
          if (null != this.pinchToZoomDistance) {
            this.pinchToZoomDistance = void 0;
            return;
          }
        }
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (null != this.mediaStream && null != this.mediaTrackCapabilities) {
          var focusModeCapability = this.mediaTrackCapabilities.focusMode;
          if (focusModeCapability instanceof Array && -1 !== focusModeCapability.indexOf("single-shot"))
            if (-1 !== focusModeCapability.indexOf("continuous") && -1 !== focusModeCapability.indexOf("manual")) {
              this.triggerFocusMode("continuous")
                .then(function() {
                  _this5.manualFocusWaitTimeout = window.setTimeout(function() {
                    _this5.triggerFocusMode("manual");
                  }, BarcodePickerCameraManager.manualFocusWaitTimeoutMs);
                })
                .catch(function() {});
              this.manualToAutofocusResumeTimeout = window.setTimeout(function() {
                _this5.triggerFocusMode("continuous");
              }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
            } else if (-1 === focusModeCapability.indexOf("continuous")) {
              window.clearInterval(this.autofocusInterval);
              this.triggerFocusMode("single-shot").catch(function() {});
              this.manualToAutofocusResumeTimeout = window.setTimeout(function() {
                _this5.autofocusInterval = window.setInterval(
                  _this5.triggerAutoFocus.bind(_this5),
                  BarcodePickerCameraManager.autofocusIntervalMs
                );
              }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
            }
        }
      }
    },
    {
      key: "triggerZoomStart",
      value: function triggerZoomStart(event) {
        if (null == event || 2 !== event.touches.length) return;
        event.preventDefault();
        this.pinchToZoomDistance = _Math$hypot(
          (event.touches[1].screenX - event.touches[0].screenX) / screen.width,
          (event.touches[1].screenY - event.touches[0].screenY) / screen.height
        );
        if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom) {
          var videoTracks = this.mediaStream.getVideoTracks();
          if (0 !== videoTracks.length && "function" === typeof videoTracks[0].getConstraints) {
            this.pinchToZoomInitialZoom = this.mediaTrackCapabilities.zoom.min;
            var currentConstraints = videoTracks[0].getConstraints();
            if (null != currentConstraints.advanced) {
              var currentZoomConstraint = currentConstraints.advanced.find(function(constraint) {
                return "zoom" in constraint;
              });
              if (null != currentZoomConstraint) this.pinchToZoomInitialZoom = currentZoomConstraint.zoom;
            }
          }
        }
      }
    },
    {
      key: "triggerZoomMove",
      value: function triggerZoomMove(event) {
        if (null == this.pinchToZoomDistance || null == event || 2 !== event.touches.length) return;
        event.preventDefault();
        this.setZoom(
          2 *
            (_Math$hypot(
              (event.touches[1].screenX - event.touches[0].screenX) / screen.width,
              (event.touches[1].screenY - event.touches[0].screenY) / screen.height
            ) -
              this.pinchToZoomDistance),
          this.pinchToZoomInitialZoom
        );
      }
    },
    {
      key: "storeStreamCapabilities",
      value: function storeStreamCapabilities() {
        if (null != this.mediaStream) {
          var videoTracks = this.mediaStream.getVideoTracks();
          if (0 !== videoTracks.length && "function" === typeof videoTracks[0].getCapabilities)
            this.mediaTrackCapabilities = videoTracks[0].getCapabilities();
        }
      }
    },
    {
      key: "setupAutofocus",
      value: function setupAutofocus() {
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (null != this.mediaStream && null != this.mediaTrackCapabilities) {
          var focusModeCapability = this.mediaTrackCapabilities.focusMode;
          if (
            focusModeCapability instanceof Array &&
            -1 === focusModeCapability.indexOf("continuous") &&
            -1 !== focusModeCapability.indexOf("single-shot")
          ) {
            window.clearInterval(this.autofocusInterval);
            this.autofocusInterval = window.setInterval(
              this.triggerAutoFocus.bind(this),
              BarcodePickerCameraManager.autofocusIntervalMs
            );
          }
        }
      }
    },
    {
      key: "triggerAutoFocus",
      value: function triggerAutoFocus() {
        this.triggerFocusMode("single-shot").catch(function() {});
      }
    },
    {
      key: "triggerFocusMode",
      value: function triggerFocusMode(focusMode) {
        if (null != this.mediaStream) {
          var videoTracks = this.mediaStream.getVideoTracks();
          if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints)
            return videoTracks[0].applyConstraints({ advanced: [{ focusMode: focusMode }] });
        }
        return _Promise.reject(void 0);
      }
    },
    {
      key: "enableTapToFocusListeners",
      value: function enableTapToFocusListeners() {
        var _this6 = this;
        ["touchend", "mousedown"].forEach(function(eventName) {
          _this6.barcodePickerGui.videoElement.addEventListener(eventName, _this6.triggerManualFocusListener);
        });
      }
    },
    {
      key: "enablePinchToZoomListeners",
      value: function enablePinchToZoomListeners() {
        this.barcodePickerGui.videoElement.addEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener);
      }
    },
    {
      key: "disableTapToFocusListeners",
      value: function disableTapToFocusListeners() {
        var _this7 = this;
        ["touchend", "mousedown"].forEach(function(eventName) {
          _this7.barcodePickerGui.videoElement.removeEventListener(eventName, _this7.triggerManualFocusListener);
        });
      }
    },
    {
      key: "disablePinchToZoomListeners",
      value: function disablePinchToZoomListeners() {
        this.barcodePickerGui.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener);
      }
    },
    {
      key: "initializeCameraAndCheckUpdatedSettings",
      value: function initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel) {
        var _this8 = this;
        return this.initializeCamera(camera, resolutionFallbackLevel)
          .then(function() {
            if (
              _this8.selectedCameraSettings !== _this8.activeCameraSettings &&
              (null == _this8.selectedCameraSettings ||
                null == _this8.activeCameraSettings ||
                _Object$keys(_this8.selectedCameraSettings).some(function(cameraSettingsProperty) {
                  return (
                    _this8.selectedCameraSettings[cameraSettingsProperty] !==
                    _this8.activeCameraSettings[cameraSettingsProperty]
                  );
                }))
            ) {
              _this8.activeCameraSettings = _this8.selectedCameraSettings;
              return _this8.initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel);
            }
            return _Promise.resolve();
          })
          .catch(function(error) {
            return _Promise.reject(error);
          });
      }
    },
    {
      key: "retryInitializeCameraIfNeeded",
      value: function retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error) {
        if (resolutionFallbackLevel < 6)
          return this.initializeCamera(camera, resolutionFallbackLevel + 1)
            .then(resolve)
            .catch(reject);
        else return reject(error);
      }
    },
    {
      key: "initializeCamera",
      value: function initializeCamera(camera) {
        var _this9 = this;
        var resolutionFallbackLevel = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (null == camera)
          return _Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        this.stopStream();
        this.torchEnabled = false;
        this.barcodePickerGui.setTorchTogglerVisible(false);
        return new _Promise(function(resolve, reject) {
          CameraAccess.accessCameraStream(resolutionFallbackLevel, camera)
            .then(function(stream) {
              if ("function" === typeof stream.getTracks()[0].getSettings) {
                var mediaTrackSettings = stream.getTracks()[0].getSettings();
                if (
                  null != mediaTrackSettings.width &&
                  null != mediaTrackSettings.height &&
                  (2 === mediaTrackSettings.width || 2 === mediaTrackSettings.height)
                )
                  if (6 === resolutionFallbackLevel)
                    return reject(
                      new CustomError({ name: "NotReadableError", message: "Could not initialize camera correctly" })
                    );
                  else
                    return _this9
                      .initializeCamera(camera, resolutionFallbackLevel + 1)
                      .then(resolve)
                      .catch(reject);
              }
              _this9.mediaStream = stream;
              _this9.mediaStream.getVideoTracks().forEach(function(track) {
                track.addEventListener("unmute", _this9.videoTrackUnmuteListener);
              });
              _this9.barcodePickerGui.videoElement.addEventListener(
                "loadedmetadata",
                _this9.postStreamInitializationListener
              );
              if (_this9.tapToFocusEnabled) _this9.enableTapToFocusListeners();
              if (_this9.pinchToZoomEnabled) _this9.enablePinchToZoomListeners();
              _this9.resolveInitializeCamera(camera, resolve, reject);
              _this9.barcodePickerGui.videoElement.srcObject = stream;
              _this9.barcodePickerGui.videoElement.load();
              var playPromise = _this9.barcodePickerGui.videoElement.play();
              if (null != playPromise) playPromise.catch(function() {});
            })
            .catch(function(error) {
              if ("SourceUnavailableError" === error.name) error.name = "NotReadableError";
              if (
                "Invalid constraint" === error.message ||
                ("OverconstrainedError" === error.name && "deviceId" === error.constraint)
              )
                return CameraAccess.getCameras().then(function(cameras) {
                  var newCamera = cameras.find(function(currentCamera) {
                    return (
                      currentCamera.label === camera.label &&
                      currentCamera.cameraType === camera.cameraType &&
                      currentCamera.deviceId !== camera.deviceId
                    );
                  });
                  if (null == newCamera)
                    return _this9.retryInitializeCameraIfNeeded(
                      camera,
                      resolutionFallbackLevel,
                      resolve,
                      reject,
                      error
                    );
                  else
                    return _this9
                      .initializeCamera(newCamera, resolutionFallbackLevel)
                      .then(resolve)
                      .catch(reject);
                });
              if (
                "PermissionDeniedError" === error.name ||
                "PermissionDismissedError" === error.name ||
                "NotAllowedError" === error.name ||
                "NotFoundError" === error.name ||
                "AbortError" === error.name ||
                "NotReadableError" === error.name
              )
                return reject(error);
              return _this9.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
            });
        });
      }
    },
    {
      key: "resolveInitializeCamera",
      value: function resolveInitializeCamera(camera, resolve, reject) {
        var _this10 = this;
        var cameraNotReadableError = new CustomError({
          name: "NotReadableError",
          message: "Could not initialize camera correctly"
        });
        window.clearTimeout(this.cameraAccessTimeout);
        this.cameraAccessTimeout = window.setTimeout(function() {
          _this10.stopStream();
          reject(cameraNotReadableError);
        }, BarcodePickerCameraManager.cameraAccessTimeoutMs);
        if ("iOS" === BrowserHelper.userAgentInfo.getOS().name)
          this.barcodePickerGui.videoElement.onloadstart = function() {
            _this10.barcodePickerGui.videoElement.onloadstart = null;
            window.clearTimeout(_this10.cameraAccessTimeout);
            _this10.activeCamera = camera;
            _this10.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
            resolve();
          };
        else
          this.barcodePickerGui.videoElement.onloadeddata = function() {
            _this10.barcodePickerGui.videoElement.onloadeddata = null;
            window.clearTimeout(_this10.cameraAccessTimeout);
            if (
              _this10.barcodePickerGui.videoElement.videoWidth > 2 &&
              _this10.barcodePickerGui.videoElement.videoHeight > 2 &&
              _this10.barcodePickerGui.videoElement.currentTime > 0
            ) {
              _this10.activeCamera = camera;
              _this10.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
              return resolve();
            }
            var cameraMetadataCheckStartTime = performance.now();
            window.clearInterval(_this10.cameraMetadataCheckInterval);
            _this10.cameraMetadataCheckInterval = window.setInterval(function() {
              if (
                2 === _this10.barcodePickerGui.videoElement.videoWidth ||
                2 === _this10.barcodePickerGui.videoElement.videoHeight ||
                0 === _this10.barcodePickerGui.videoElement.currentTime
              ) {
                if (
                  performance.now() - cameraMetadataCheckStartTime >
                  BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs
                ) {
                  window.clearInterval(_this10.cameraMetadataCheckInterval);
                  _this10.stopStream();
                  return reject(cameraNotReadableError);
                }
                return;
              }
              window.clearInterval(_this10.cameraMetadataCheckInterval);
              _this10.activeCamera = camera;
              _this10.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
              return resolve();
            }, BarcodePickerCameraManager.cameraMetadataCheckIntervalMs);
          };
      }
    }
  ]);
  return BarcodePickerCameraManager;
})(CameraManager);
BarcodePickerCameraManager.cameraAccessTimeoutMs = 4e3;
BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs = 4e3;
BarcodePickerCameraManager.cameraMetadataCheckIntervalMs = 50;
BarcodePickerCameraManager.getCapabilitiesTimeoutMs = 500;
BarcodePickerCameraManager.autofocusIntervalMs = 1500;
BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs = 5e3;
BarcodePickerCameraManager.manualFocusWaitTimeoutMs = 400;
var BarcodePickerGui = (function() {
  function BarcodePickerGui(
    scanner,
    originElement,
    singleImageMode,
    scanningPaused,
    visible,
    guiStyle,
    videoFit,
    cameraUploadCallback
  ) {
    var _this = this;
    _classCallCheck(this, BarcodePickerGui);
    this.scanner = scanner;
    this.originElement = originElement;
    this.singleImageMode = singleImageMode;
    this.scanningPaused = scanningPaused;
    this.cameraUploadCallback = cameraUploadCallback;
    this.grandParentElement = document.createElement("div");
    this.grandParentElement.className = BarcodePickerGui.grandParentElementClassName;
    this.originElement.appendChild(this.grandParentElement);
    this.parentElement = document.createElement("div");
    this.parentElement.className = BarcodePickerGui.parentElementClassName;
    this.grandParentElement.appendChild(this.parentElement);
    this.videoImageCanvasContext = document.createElement("canvas").getContext("2d");
    this.videoElement = document.createElement("video");
    this.cameraSwitcherElement = document.createElement("img");
    this.torchTogglerElement = document.createElement("img");
    this.laserActiveImageElement = document.createElement("img");
    this.laserPausedImageElement = document.createElement("img");
    this.viewfinderElement = document.createElement("div");
    if (singleImageMode) {
      this.cameraUploadElement = document.createElement("div");
      this.cameraUploadInputElement = document.createElement("input");
      this.cameraUploadLabelElement = document.createElement("label");
      this.cameraUploadProgressElement = document.createElement("div");
      this.setupCameraUploadGuiAssets();
      this.guiStyle = BarcodePicker.GuiStyle.NONE;
    } else {
      this.setupVideoElement();
      this.setupCameraSwitcher();
      this.setupTorchToggler();
      this.setupFullGuiAssets();
      this.setGuiStyle(guiStyle);
      this.setVideoFit(videoFit);
      this.visibilityListener = this.checkAndRecoverPlayback.bind(this);
      document.addEventListener("visibilitychange", this.visibilityListener);
    }
    this.resizeInterval = window.setInterval(function() {
      _this.resizeIfNeeded();
    }, 250);
    this.setupSharedAssets();
    this.setVisible(visible);
  }
  _createClass(BarcodePickerGui, [
    {
      key: "destroy",
      value: function destroy() {
        if (null != this.visibilityListener) document.removeEventListener("visibilitychange", this.visibilityListener);
        window.clearInterval(this.resizeInterval);
        this.grandParentElement.remove();
        this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
      }
    },
    {
      key: "setCameraManager",
      value: function setCameraManager(cameraManager) {
        this.cameraManager = cameraManager;
      }
    },
    {
      key: "pauseScanning",
      value: function pauseScanning() {
        this.scanningPaused = true;
        this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
      }
    },
    {
      key: "resumeScanning",
      value: function resumeScanning() {
        this.scanningPaused = false;
        this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.remove(BarcodePickerGui.pausedClassName);
      }
    },
    {
      key: "isVisible",
      value: function isVisible() {
        return this.visible;
      }
    },
    {
      key: "setVisible",
      value: function setVisible(visible) {
        this.visible = visible;
        if (visible) this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
        else this.originElement.classList.add(BarcodePickerGui.hiddenClassName);
      }
    },
    {
      key: "isMirrorImageEnabled",
      value: function isMirrorImageEnabled() {
        return this.mirrorImage;
      }
    },
    {
      key: "setMirrorImageEnabled",
      value: function setMirrorImageEnabled(enabled) {
        this.mirrorImage = enabled;
        if (enabled) this.videoElement.classList.add(BarcodePickerGui.mirroredClassName);
        else this.videoElement.classList.remove(BarcodePickerGui.mirroredClassName);
      }
    },
    {
      key: "setGuiStyle",
      value: function setGuiStyle(guiStyle) {
        if (this.singleImageMode) return;
        this.guiStyle = guiStyle;
        switch (this.guiStyle) {
          case BarcodePicker.GuiStyle.NONE:
            this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
            this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
            this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
            break;
          case BarcodePicker.GuiStyle.LASER:
            this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
            this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
            this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
            break;
          case BarcodePicker.GuiStyle.VIEWFINDER:
            this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
            this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
            this.viewfinderElement.classList.remove(BarcodePickerGui.hiddenClassName);
        }
      }
    },
    {
      key: "setVideoFit",
      value: function setVideoFit(objectFit) {
        if (this.singleImageMode) return;
        this.videoFit = objectFit;
        if (objectFit === BarcodePicker.ObjectFit.COVER) {
          this.videoElement.style.objectFit = "cover";
          this.videoElement.dataset.objectFit = "cover";
        } else {
          this.videoElement.style.objectFit = "contain";
          this.videoElement.dataset.objectFit = "contain";
          this.scanner.applyScanSettings(
            this.scanner.getScanSettings().setBaseSearchArea({ x: 0, y: 0, width: 1, height: 1 })
          );
        }
        this.lastKnownElementWidth = 0;
        this.lastKnownElementHeight = 0;
        this.resizeIfNeeded();
        window.objectFitPolyfill(this.videoElement);
      }
    },
    {
      key: "reassignOriginElement",
      value: function reassignOriginElement(originElement) {
        if (!this.visible) {
          this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
          originElement.classList.add(BarcodePickerGui.hiddenClassName);
        }
        originElement.appendChild(this.grandParentElement);
        this.checkAndRecoverPlayback();
        this.resizeIfNeeded();
        this.originElement = originElement;
      }
    },
    {
      key: "flashGUI",
      value: function flashGUI() {
        if (this.guiStyle === BarcodePicker.GuiStyle.LASER) this.flashLaser();
        else if (this.guiStyle === BarcodePicker.GuiStyle.VIEWFINDER) this.flashViewfinder();
      }
    },
    {
      key: "getVideoImageData",
      value: function getVideoImageData() {
        if (!this.singleImageMode) this.videoImageCanvasContext.drawImage(this.videoElement, 0, 0);
        if (this.videoImageCanvasContext.canvas.width <= 2 || this.videoImageCanvasContext.canvas.height <= 2) return;
        return this.videoImageCanvasContext.getImageData(
          0,
          0,
          this.videoImageCanvasContext.canvas.width,
          this.videoImageCanvasContext.canvas.height
        ).data;
      }
    },
    {
      key: "getVideoCurrentTime",
      value: function getVideoCurrentTime() {
        return this.videoElement.currentTime;
      }
    },
    {
      key: "setCameraSwitcherVisible",
      value: function setCameraSwitcherVisible(visible) {
        if (visible) this.cameraSwitcherElement.classList.remove(BarcodePickerGui.hiddenClassName);
        else this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
      }
    },
    {
      key: "setTorchTogglerVisible",
      value: function setTorchTogglerVisible(visible) {
        if (visible) this.torchTogglerElement.classList.remove(BarcodePickerGui.hiddenClassName);
        else this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
      }
    },
    {
      key: "setCameraUploadGuiAvailable",
      value: function setCameraUploadGuiAvailable(available) {
        if (available) {
          this.cameraUploadProgressElement.classList.add(BarcodePickerGui.flashWhiteInsetClassName);
          this.cameraUploadElement.classList.remove(BarcodePickerGui.opacityPulseClassName);
        } else {
          this.cameraUploadProgressElement.classList.remove(BarcodePickerGui.flashWhiteInsetClassName);
          this.cameraUploadElement.classList.add(BarcodePickerGui.opacityPulseClassName);
        }
      }
    },
    {
      key: "setupVideoElement",
      value: function setupVideoElement() {
        var _this2 = this;
        this.videoElement.setAttribute("autoplay", "autoplay");
        this.videoElement.setAttribute("playsinline", "true");
        this.videoElement.setAttribute("muted", "muted");
        this.videoElement.className = BarcodePickerGui.videoElementClassName;
        this.parentElement.appendChild(this.videoElement);
        this.videoElement.addEventListener("canplay", function() {
          if (null != _this2.cameraManager && null != _this2.cameraManager.activeCamera) {
            _this2.lastKnownElementWidth = 0;
            _this2.lastKnownElementHeight = 0;
            _this2.resizeIfNeeded();
            _this2.cameraManager.activeCamera.currentResolution = {
              width: _this2.videoElement.videoWidth,
              height: _this2.videoElement.videoHeight
            };
            _this2.videoImageCanvasContext.canvas.width = _this2.videoElement.videoWidth;
            _this2.videoImageCanvasContext.canvas.height = _this2.videoElement.videoHeight;
            _this2.scanner.applyImageSettings({
              width: _this2.videoElement.videoWidth,
              height: _this2.videoElement.videoHeight,
              format: ImageSettings.Format.RGBA_8U
            });
            _this2.setMirrorImageEnabled(_this2.cameraManager.activeCamera.cameraType === Camera.Type.FRONT);
          }
        });
      }
    },
    {
      key: "setupSharedAssets",
      value: function setupSharedAssets() {
        var scanditLogoImageElement = document.createElement("img");
        scanditLogoImageElement.src = scanditLogoImage;
        scanditLogoImageElement.className = BarcodePickerGui.scanditLogoImageElementClassName;
        this.parentElement.appendChild(scanditLogoImageElement);
      }
    },
    {
      key: "setupCameraUploadGuiAssets",
      value: function setupCameraUploadGuiAssets() {
        var _this3 = this;
        this.cameraUploadElement.className = BarcodePickerGui.cameraUploadElementClassName;
        this.parentElement.appendChild(this.cameraUploadElement);
        this.cameraUploadInputElement.type = "file";
        this.cameraUploadInputElement.accept = "image/*";
        this.cameraUploadInputElement.setAttribute("capture", "environment");
        this.cameraUploadInputElement.addEventListener("change", this.cameraUploadFile.bind(this));
        this.cameraUploadInputElement.addEventListener("click", function(event) {
          if (_this3.scanningPaused || _this3.scanner.isBusyProcessing()) event.preventDefault();
        });
        this.cameraUploadLabelElement.appendChild(this.cameraUploadInputElement);
        this.cameraUploadElement.appendChild(this.cameraUploadLabelElement);
        var cameraUploadImageElement = document.createElement("img");
        cameraUploadImageElement.src = cameraImage;
        this.cameraUploadLabelElement.appendChild(cameraUploadImageElement);
        var cameraUploadTextElement = document.createElement("div");
        cameraUploadTextElement.innerText = "Scan from Camera";
        this.cameraUploadLabelElement.appendChild(cameraUploadTextElement);
        this.cameraUploadProgressElement.classList.add("radial-progress");
        this.cameraUploadElement.appendChild(this.cameraUploadProgressElement);
      }
    },
    {
      key: "setupFullGuiAssets",
      value: function setupFullGuiAssets() {
        this.laserActiveImageElement.src = laserActiveImage;
        this.laserActiveImageElement.className = BarcodePickerGui.laserImageElementClassName;
        this.parentElement.appendChild(this.laserActiveImageElement);
        this.laserPausedImageElement.src = laserPausedImage;
        this.laserPausedImageElement.className = BarcodePickerGui.laserImageElementClassName;
        this.parentElement.appendChild(this.laserPausedImageElement);
        this.viewfinderElement.className = BarcodePickerGui.viewfinderElementClassName;
        this.parentElement.appendChild(this.viewfinderElement);
        this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
      }
    },
    {
      key: "flashLaser",
      value: function flashLaser() {
        this.laserActiveImageElement.classList.remove(BarcodePickerGui.flashColorClassName);
        this.laserActiveImageElement.offsetHeight;
        this.laserActiveImageElement.classList.add(BarcodePickerGui.flashColorClassName);
      }
    },
    {
      key: "flashViewfinder",
      value: function flashViewfinder() {
        this.viewfinderElement.classList.remove(BarcodePickerGui.flashWhiteClassName);
        this.viewfinderElement.offsetHeight;
        this.viewfinderElement.classList.add(BarcodePickerGui.flashWhiteClassName);
      }
    },
    {
      key: "resizeIfNeeded",
      value: function resizeIfNeeded() {
        if (
          this.lastKnownElementWidth === this.originElement.clientWidth &&
          this.lastKnownElementHeight === this.originElement.clientHeight
        )
          return;
        if (this.singleImageMode) this.resizeCameraUploadIfNeeded();
        else this.resizeVideoIfNeeded();
      }
    },
    {
      key: "resizeCameraUploadIfNeeded",
      value: function resizeCameraUploadIfNeeded() {
        var width = this.cameraUploadElement.clientWidth;
        var height = this.cameraUploadElement.clientHeight;
        this.lastKnownElementWidth = width;
        this.lastKnownElementHeight = height;
        this.cameraUploadLabelElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
        this.cameraUploadProgressElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
      }
    },
    {
      key: "resizeVideoIfNeeded",
      value: function resizeVideoIfNeeded() {
        if (
          this.videoElement.videoHeight < 1 ||
          this.originElement.clientHeight < 1 ||
          (this.lastKnownElementWidth === this.originElement.clientWidth &&
            this.lastKnownElementHeight === this.originElement.clientHeight)
        )
          return;
        this.parentElement.style.maxWidth = null;
        this.parentElement.style.maxHeight = null;
        var videoRatio = this.videoElement.videoWidth / this.videoElement.videoHeight;
        var width = this.originElement.clientWidth;
        var height = this.originElement.clientHeight;
        this.lastKnownElementWidth = width;
        this.lastKnownElementHeight = height;
        if (this.videoFit === BarcodePicker.ObjectFit.COVER) {
          var widthPercentage = 1;
          var heightPercentage = 1;
          if (videoRatio < width / height) heightPercentage = Math.min(1, height / (width / videoRatio));
          else widthPercentage = Math.min(1, width / (height * videoRatio));
          this.scanner.applyScanSettings(
            this.scanner
              .getScanSettings()
              .setBaseSearchArea({
                x: (1 - widthPercentage) / 2,
                y: (1 - heightPercentage) / 2,
                width: widthPercentage,
                height: heightPercentage
              })
          );
          return;
        }
        if (videoRatio > width / height) height = width / videoRatio;
        else width = height * videoRatio;
        this.parentElement.style.maxWidth = Math.ceil(width) + "px";
        this.parentElement.style.maxHeight = Math.ceil(height) + "px";
      }
    },
    {
      key: "checkAndRecoverPlayback",
      value: function checkAndRecoverPlayback() {
        if (
          null != this.cameraManager &&
          null != this.cameraManager.activeCamera &&
          null != this.videoElement &&
          null != this.videoElement.srcObject
        )
          if (!this.videoElement.srcObject.active) this.cameraManager.reinitializeCamera();
          else {
            var playPromise = this.videoElement.play();
            if (null != playPromise) playPromise.catch(function() {});
          }
      }
    },
    {
      key: "cameraUploadFileProcess",
      value: function cameraUploadFileProcess(image, width, height) {
        var _this4 = this;
        this.videoImageCanvasContext.canvas.width = width;
        this.videoImageCanvasContext.canvas.height = height;
        this.videoImageCanvasContext.drawImage(image, 0, 0, width, height);
        this.scanner.applyImageSettings({ width: width, height: height, format: ImageSettings.Format.RGBA_8U });
        this.setCameraUploadGuiAvailable(false);
        this.cameraUploadCallback().then(function() {
          _this4.setCameraUploadGuiAvailable(true);
        });
      }
    },
    {
      key: "cameraUploadFile",
      value: function cameraUploadFile() {
        var _this5 = this;
        var files = this.cameraUploadInputElement.files;
        if (null != files && 0 !== files.length) {
          var image = new Image();
          var fileReader = new FileReader();
          fileReader.onload = function(event) {
            _this5.cameraUploadInputElement.value = "";
            if (null != event.target) {
              image.onload = function() {
                _this5.cameraUploadProgressElement.setAttribute("data-progress", "100");
                var resizedImageWidth = void 0;
                var resizedImageHeight = void 0;
                var resizedImageSizeLimit = 1440;
                if (image.naturalWidth <= resizedImageSizeLimit && image.naturalHeight <= resizedImageSizeLimit) {
                  resizedImageWidth = image.naturalWidth;
                  resizedImageHeight = image.naturalHeight;
                } else if (image.naturalWidth > image.naturalHeight) {
                  resizedImageWidth = resizedImageSizeLimit;
                  resizedImageHeight = Math.round((image.naturalHeight / image.naturalWidth) * resizedImageSizeLimit);
                } else {
                  resizedImageWidth = Math.round((image.naturalWidth / image.naturalHeight) * resizedImageSizeLimit);
                  resizedImageHeight = resizedImageSizeLimit;
                }
                _this5.cameraUploadFileProcess(image, resizedImageWidth, resizedImageHeight);
              };
              image.onprogress = function(event2) {
                if (event2.lengthComputable) {
                  var progress = 5 * Math.round((event2.loaded / event2.total) * 20);
                  if (progress <= 100)
                    _this5.cameraUploadProgressElement.setAttribute("data-progress", progress.toString());
                }
              };
              image.src = event.target.result;
            }
          };
          this.cameraUploadProgressElement.setAttribute("data-progress", "0");
          fileReader.readAsDataURL(files[0]);
        }
      }
    },
    {
      key: "setupCameraSwitcher",
      value: function setupCameraSwitcher() {
        var _this6 = this;
        this.cameraSwitcherElement.src = switchCameraImage;
        this.cameraSwitcherElement.className = BarcodePickerGui.cameraSwitcherElementClassName;
        this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
        this.parentElement.appendChild(this.cameraSwitcherElement);
        ["touchstart", "mousedown"].forEach(function(eventName) {
          _this6.cameraSwitcherElement.addEventListener(eventName, function(event) {
            if (null != _this6.cameraManager) {
              var cameraManager = _this6.cameraManager;
              event.preventDefault();
              CameraAccess.getCameras()
                .then(function(cameras) {
                  var newCameraIndex =
                    (cameras.findIndex(function(camera) {
                      return (
                        camera.deviceId ===
                        (null == cameraManager.activeCamera ? camera.deviceId : cameraManager.activeCamera.deviceId)
                      );
                    }) +
                      1) %
                    cameras.length;
                  cameraManager
                    .initializeCameraWithSettings(cameras[newCameraIndex], cameraManager.activeCameraSettings)
                    .catch(console.error);
                })
                .catch(console.error);
            }
          });
        });
      }
    },
    {
      key: "setupTorchToggler",
      value: function setupTorchToggler() {
        var _this7 = this;
        this.torchTogglerElement.src = toggleTorchImage;
        this.torchTogglerElement.className = BarcodePickerGui.torchTogglerElementClassName;
        this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
        this.parentElement.appendChild(this.torchTogglerElement);
        ["touchstart", "mousedown"].forEach(function(eventName) {
          _this7.torchTogglerElement.addEventListener(eventName, function(event) {
            if (null != _this7.cameraManager) {
              event.preventDefault();
              _this7.cameraManager.toggleTorch();
            }
          });
        });
      }
    }
  ]);
  return BarcodePickerGui;
})();
BarcodePickerGui.grandParentElementClassName = "scandit scandit-container";
BarcodePickerGui.parentElementClassName = "scandit scandit-barcode-picker";
BarcodePickerGui.hiddenClassName = "scandit-hidden";
BarcodePickerGui.hiddenOpacityClassName = "scandit-hidden-opacity";
BarcodePickerGui.videoElementClassName = "scandit-video";
BarcodePickerGui.scanditLogoImageElementClassName = "scandit-logo";
BarcodePickerGui.laserImageElementClassName = "scandit-laser";
BarcodePickerGui.viewfinderElementClassName = "scandit-viewfinder";
BarcodePickerGui.cameraSwitcherElementClassName = "scandit-camera-switcher";
BarcodePickerGui.torchTogglerElementClassName = "scandit-torch-toggle";
BarcodePickerGui.cameraUploadElementClassName = "scandit-camera-upload";
BarcodePickerGui.flashColorClassName = "scandit-flash-color";
BarcodePickerGui.flashWhiteClassName = "scandit-flash-white";
BarcodePickerGui.flashWhiteInsetClassName = "scandit-flash-white-inset";
BarcodePickerGui.opacityPulseClassName = "scandit-opacity-pulse";
BarcodePickerGui.mirroredClassName = "mirrored";
BarcodePickerGui.pausedClassName = "paused";
var DummyCameraManager = (function(_CameraManager) {
  _inherits(DummyCameraManager, _CameraManager);
  function DummyCameraManager() {
    _classCallCheck(this, DummyCameraManager);
    return _possibleConstructorReturn(
      this,
      (DummyCameraManager.__proto__ || _Object$getPrototypeOf(DummyCameraManager)).apply(this, arguments)
    );
  }
  _createClass(DummyCameraManager, [
    {
      key: "setInteractionOptions",
      value: function setInteractionOptions(_1, _2, _3, _4) {
        return;
      }
    },
    {
      key: "isCameraSwitcherEnabled",
      value: function isCameraSwitcherEnabled() {
        return false;
      }
    },
    {
      key: "setCameraSwitcherEnabled",
      value: function setCameraSwitcherEnabled(_1) {
        return;
      }
    },
    {
      key: "isTorchToggleEnabled",
      value: function isTorchToggleEnabled() {
        return false;
      }
    },
    {
      key: "setTorchToggleEnabled",
      value: function setTorchToggleEnabled(_1) {
        return;
      }
    },
    {
      key: "isTapToFocusEnabled",
      value: function isTapToFocusEnabled() {
        return false;
      }
    },
    {
      key: "setTapToFocusEnabled",
      value: function setTapToFocusEnabled(_1) {
        return;
      }
    },
    {
      key: "isPinchToZoomEnabled",
      value: function isPinchToZoomEnabled() {
        return false;
      }
    },
    {
      key: "setPinchToZoomEnabled",
      value: function setPinchToZoomEnabled(_1) {
        return;
      }
    },
    {
      key: "setSelectedCamera",
      value: function setSelectedCamera(_1) {
        return;
      }
    },
    {
      key: "setSelectedCameraSettings",
      value: function setSelectedCameraSettings(_1) {
        return;
      }
    },
    {
      key: "setupCameras",
      value: function setupCameras() {
        return _Promise.resolve();
      }
    },
    {
      key: "stopStream",
      value: function stopStream() {
        return;
      }
    },
    {
      key: "applyCameraSettings",
      value: function applyCameraSettings(_1) {
        return _Promise.resolve();
      }
    },
    {
      key: "reinitializeCamera",
      value: function reinitializeCamera(_1) {
        return _Promise.resolve();
      }
    },
    {
      key: "initializeCameraWithSettings",
      value: function initializeCameraWithSettings(_1, _2) {
        return _Promise.resolve();
      }
    },
    {
      key: "setTorchEnabled",
      value: function setTorchEnabled(_1) {
        return;
      }
    },
    {
      key: "toggleTorch",
      value: function toggleTorch() {
        return;
      }
    },
    {
      key: "setZoom",
      value: function setZoom(_1, _2) {
        return;
      }
    }
  ]);
  return DummyCameraManager;
})(CameraManager);
var BarcodePickerEventEmitter = (function(_EventEmitter) {
  _inherits(BarcodePickerEventEmitter, _EventEmitter);
  function BarcodePickerEventEmitter() {
    _classCallCheck(this, BarcodePickerEventEmitter);
    return _possibleConstructorReturn(
      this,
      (BarcodePickerEventEmitter.__proto__ || _Object$getPrototypeOf(BarcodePickerEventEmitter)).apply(this, arguments)
    );
  }
  return BarcodePickerEventEmitter;
})(eventemitter3_1);
var BarcodePicker = (function() {
  function BarcodePicker$$1(originElement) {
    var _this2 = this;
    var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _ref$visible = _ref.visible,
      visible = void 0 === _ref$visible ? true : _ref$visible,
      _ref$singleImageMode = _ref.singleImageMode,
      singleImageMode = void 0 === _ref$singleImageMode ? false : _ref$singleImageMode,
      _ref$playSoundOnScan = _ref.playSoundOnScan,
      playSoundOnScan = void 0 === _ref$playSoundOnScan ? false : _ref$playSoundOnScan,
      _ref$vibrateOnScan = _ref.vibrateOnScan,
      vibrateOnScan = void 0 === _ref$vibrateOnScan ? false : _ref$vibrateOnScan,
      _ref$scanningPaused = _ref.scanningPaused,
      scanningPaused = void 0 === _ref$scanningPaused ? false : _ref$scanningPaused,
      _ref$guiStyle = _ref.guiStyle,
      guiStyle = void 0 === _ref$guiStyle ? BarcodePicker$$1.GuiStyle.LASER : _ref$guiStyle,
      _ref$videoFit = _ref.videoFit,
      videoFit = void 0 === _ref$videoFit ? BarcodePicker$$1.ObjectFit.CONTAIN : _ref$videoFit,
      scanner = _ref.scanner,
      _ref$scanSettings = _ref.scanSettings,
      scanSettings = void 0 === _ref$scanSettings ? new ScanSettings() : _ref$scanSettings,
      _ref$targetScanningFP = _ref.targetScanningFPS,
      targetScanningFPS = void 0 === _ref$targetScanningFP ? 30 : _ref$targetScanningFP;
    _classCallCheck(this, BarcodePicker$$1);
    this.isReadyToWork = false;
    this.destroyed = false;
    this.scanningPaused = scanningPaused;
    howler_core_min_1.autoSuspend = false;
    this.beepSound = new howler_core_min_2({ src: beepSound });
    this.vibrateFunction = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    this.eventEmitter = new eventemitter3_1();
    this.setPlaySoundOnScanEnabled(playSoundOnScan);
    this.setVibrateOnScanEnabled(vibrateOnScan);
    this.setTargetScanningFPS(targetScanningFPS);
    if (null == scanner) this.scanner = new Scanner$$1({ scanSettings: scanSettings });
    else {
      this.scanner = scanner;
      this.scanner.applyScanSettings(scanSettings);
    }
    this.scanner.onReady(function() {
      _this2.isReadyToWork = true;
      _this2.eventEmitter.emit("ready");
    });
    this.barcodePickerGui = new BarcodePickerGui(
      this.scanner,
      originElement,
      singleImageMode,
      scanningPaused,
      visible,
      guiStyle,
      videoFit,
      this.processVideoFrame.bind(this, true)
    );
    if (singleImageMode) this.cameraManager = new DummyCameraManager();
    else {
      this.scheduleVideoProcessing();
      this.cameraManager = new BarcodePickerCameraManager(this.triggerFatalError.bind(this), this.barcodePickerGui);
    }
    this.barcodePickerGui.setCameraManager(this.cameraManager);
  }
  _createClass(
    BarcodePicker$$1,
    [
      {
        key: "destroy",
        value: function destroy() {
          var destroyScanner = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : true;
          this.pauseScanning(true);
          this.destroyed = true;
          if (destroyScanner) this.scanner.destroy();
          this.barcodePickerGui.destroy();
          this.eventEmitter.removeAllListeners();
        }
      },
      {
        key: "applyScanSettings",
        value: function applyScanSettings(scanSettings) {
          this.scanner.applyScanSettings(scanSettings);
          return this;
        }
      },
      {
        key: "isScanningPaused",
        value: function isScanningPaused() {
          return this.scanningPaused;
        }
      },
      {
        key: "pauseScanning",
        value: function pauseScanning() {
          var pauseCamera = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
          this.scanningPaused = true;
          if (pauseCamera) this.cameraManager.stopStream();
          if (this.scanner.isReady()) this.barcodePickerGui.pauseScanning();
          return this;
        }
      },
      {
        key: "resumeScanning",
        value: function resumeScanning() {
          var _this3 = this;
          this.scanningPaused = false;
          if (this.scanner.isReady()) this.barcodePickerGui.resumeScanning();
          if (null == this.cameraManager.activeCamera && this.cameraAccess)
            return this.cameraManager.setupCameras().then(function() {
              return _this3;
            });
          return _Promise.resolve(this);
        }
      },
      {
        key: "getActiveCamera",
        value: function getActiveCamera() {
          return this.cameraManager.activeCamera;
        }
      },
      {
        key: "setActiveCamera",
        value: function setActiveCamera(camera, cameraSettings) {
          var _this4 = this;
          if (null == camera || !this.cameraAccess) {
            this.cameraManager.setSelectedCamera(camera);
            this.cameraManager.setSelectedCameraSettings(cameraSettings);
            if (this.cameraAccess)
              return this.cameraManager.setupCameras().then(function() {
                return _this4;
              });
            else return _Promise.resolve(this);
          } else
            return this.cameraManager.initializeCameraWithSettings(camera, cameraSettings).then(function() {
              return _this4;
            });
        }
      },
      {
        key: "applyCameraSettings",
        value: function applyCameraSettings(cameraSettings) {
          var _this5 = this;
          if (!this.cameraAccess) {
            this.cameraManager.setSelectedCameraSettings(cameraSettings);
            return _Promise.resolve(this);
          }
          return this.cameraManager.applyCameraSettings(cameraSettings).then(function() {
            return _this5;
          });
        }
      },
      {
        key: "isVisible",
        value: function isVisible() {
          return this.barcodePickerGui.isVisible();
        }
      },
      {
        key: "setVisible",
        value: function setVisible(visible) {
          this.barcodePickerGui.setVisible(visible);
          return this;
        }
      },
      {
        key: "isMirrorImageEnabled",
        value: function isMirrorImageEnabled() {
          return this.barcodePickerGui.isMirrorImageEnabled();
        }
      },
      {
        key: "setMirrorImageEnabled",
        value: function setMirrorImageEnabled(enabled) {
          this.barcodePickerGui.setMirrorImageEnabled(enabled);
          return this;
        }
      },
      {
        key: "isPlaySoundOnScanEnabled",
        value: function isPlaySoundOnScanEnabled() {
          return this.playSoundOnScan;
        }
      },
      {
        key: "setPlaySoundOnScanEnabled",
        value: function setPlaySoundOnScanEnabled(enabled) {
          this.playSoundOnScan = enabled;
          return this;
        }
      },
      {
        key: "isVibrateOnScanEnabled",
        value: function isVibrateOnScanEnabled() {
          return this.vibrateOnScan;
        }
      },
      {
        key: "setVibrateOnScanEnabled",
        value: function setVibrateOnScanEnabled(enabled) {
          this.vibrateOnScan = enabled;
          return this;
        }
      },
      {
        key: "isCameraSwitcherEnabled",
        value: function isCameraSwitcherEnabled() {
          return this.cameraManager.isCameraSwitcherEnabled();
        }
      },
      {
        key: "setCameraSwitcherEnabled",
        value: function setCameraSwitcherEnabled(enabled) {
          this.cameraManager.setCameraSwitcherEnabled(enabled);
          return this;
        }
      },
      {
        key: "isTorchToggleEnabled",
        value: function isTorchToggleEnabled() {
          return this.cameraManager.isTorchToggleEnabled();
        }
      },
      {
        key: "setTorchToggleEnabled",
        value: function setTorchToggleEnabled(enabled) {
          this.cameraManager.setTorchToggleEnabled(enabled);
          return this;
        }
      },
      {
        key: "isTapToFocusEnabled",
        value: function isTapToFocusEnabled() {
          return this.cameraManager.isTapToFocusEnabled();
        }
      },
      {
        key: "setTapToFocusEnabled",
        value: function setTapToFocusEnabled(enabled) {
          this.cameraManager.setTapToFocusEnabled(enabled);
          return this;
        }
      },
      {
        key: "isPinchToZoomEnabled",
        value: function isPinchToZoomEnabled() {
          return this.cameraManager.isPinchToZoomEnabled();
        }
      },
      {
        key: "setPinchToZoomEnabled",
        value: function setPinchToZoomEnabled(enabled) {
          this.cameraManager.setPinchToZoomEnabled(enabled);
          return this;
        }
      },
      {
        key: "setTorchEnabled",
        value: function setTorchEnabled(enabled) {
          this.cameraManager.setTorchEnabled(enabled);
          return this;
        }
      },
      {
        key: "setZoom",
        value: function setZoom(zoomPercentage) {
          this.cameraManager.setZoom(zoomPercentage);
          return this;
        }
      },
      {
        key: "isReady",
        value: function isReady() {
          return this.isReadyToWork;
        }
      },
      {
        key: "onReady",
        value: function onReady(listener) {
          if (this.isReadyToWork) listener();
          else this.eventEmitter.once("ready", listener, this);
          return this;
        }
      },
      {
        key: "onScan",
        value: function onScan(listener) {
          var once = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
          if (true === once) this.eventEmitter.once("scan", listener, this);
          else this.eventEmitter.on("scan", listener, this);
          return this;
        }
      },
      {
        key: "removeScanListener",
        value: function removeScanListener(listener) {
          this.eventEmitter.removeListener("scan", listener);
          return this;
        }
      },
      {
        key: "removeScanListeners",
        value: function removeScanListeners() {
          this.eventEmitter.removeAllListeners("scan");
          return this;
        }
      },
      {
        key: "onScanError",
        value: function onScanError(listener) {
          var once = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
          if (true === once) this.eventEmitter.once("scanError", listener, this);
          else this.eventEmitter.on("scanError", listener, this);
          return this;
        }
      },
      {
        key: "removeScanErrorListener",
        value: function removeScanErrorListener(listener) {
          this.eventEmitter.removeListener("scanError", listener);
          return this;
        }
      },
      {
        key: "removeScanErrorListeners",
        value: function removeScanErrorListeners() {
          this.eventEmitter.removeAllListeners("scanError");
          return this;
        }
      },
      {
        key: "onSubmitFrame",
        value: function onSubmitFrame(listener) {
          var once = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
          if (true === once) this.eventEmitter.once("submitFrame", listener, this);
          else this.eventEmitter.on("submitFrame", listener, this);
          return this;
        }
      },
      {
        key: "removeSubmitFrameListener",
        value: function removeSubmitFrameListener(listener) {
          this.eventEmitter.removeListener("submitFrame", listener);
          return this;
        }
      },
      {
        key: "removeSubmitFrameListeners",
        value: function removeSubmitFrameListeners() {
          this.eventEmitter.removeAllListeners("submitFrame");
          return this;
        }
      },
      {
        key: "onProcessFrame",
        value: function onProcessFrame(listener) {
          var once = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
          if (true === once) this.eventEmitter.once("processFrame", listener, this);
          else this.eventEmitter.on("processFrame", listener, this);
          return this;
        }
      },
      {
        key: "removeProcessFrameListener",
        value: function removeProcessFrameListener(listener) {
          this.eventEmitter.removeListener("processFrame", listener);
          return this;
        }
      },
      {
        key: "removeProcessFrameListeners",
        value: function removeProcessFrameListeners() {
          this.eventEmitter.removeAllListeners("processFrame");
          return this;
        }
      },
      {
        key: "setGuiStyle",
        value: function setGuiStyle(guiStyle) {
          this.barcodePickerGui.setGuiStyle(guiStyle);
          return this;
        }
      },
      {
        key: "setVideoFit",
        value: function setVideoFit(objectFit) {
          this.barcodePickerGui.setVideoFit(objectFit);
          return this;
        }
      },
      {
        key: "accessCamera",
        value: function accessCamera() {
          var _this6 = this;
          if (!this.cameraAccess || null == this.cameraManager.activeCamera)
            return new _Promise(function(resolve, reject) {
              _this6.cameraManager
                .setupCameras()
                .then(function() {
                  _this6.cameraAccess = true;
                  return resolve(_this6);
                })
                .catch(reject);
            });
          return _Promise.resolve(this);
        }
      },
      {
        key: "createParserForFormat",
        value: function createParserForFormat(dataFormat) {
          return this.scanner.createParserForFormat(dataFormat);
        }
      },
      {
        key: "reassignOriginElement",
        value: function reassignOriginElement(originElement) {
          this.barcodePickerGui.reassignOriginElement(originElement);
          return this;
        }
      },
      {
        key: "setTargetScanningFPS",
        value: function setTargetScanningFPS(targetScanningFPS) {
          if (targetScanningFPS > 0) this.targetScanningFPS = targetScanningFPS;
          return this;
        }
      },
      {
        key: "getScanner",
        value: function getScanner() {
          return this.scanner;
        }
      },
      {
        key: "triggerFatalError",
        value: function triggerFatalError(error) {
          this.fatalError = error;
          console.error(error);
        }
      },
      {
        key: "handleScanResult",
        value: function handleScanResult(scanResult) {
          this.eventEmitter.emit("processFrame", scanResult);
          if (0 !== scanResult.barcodes.length) {
            this.barcodePickerGui.flashGUI();
            if (this.playSoundOnScan) this.beepSound.play();
            if (this.vibrateOnScan && null != this.vibrateFunction) this.vibrateFunction.call(navigator, 300);
            this.eventEmitter.emit("scan", scanResult);
          }
        }
      },
      {
        key: "scheduleVideoProcessing",
        value: function scheduleVideoProcessing() {
          var _this7 = this;
          var timeout = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          window.setTimeout(function() {
            _this7.videoProcessing();
          }, timeout);
        }
      },
      {
        key: "scheduleNextVideoProcessing",
        value: function scheduleNextVideoProcessing(processingStartTime) {
          if (this.targetScanningFPS < 30) {
            if (null == this.averageProcessingTime)
              this.averageProcessingTime = performance.now() - processingStartTime;
            else
              this.averageProcessingTime =
                0.9 * this.averageProcessingTime + 0.1 * (performance.now() - processingStartTime);
            var nextProcessingCallDelay = 1e3 / this.targetScanningFPS - this.averageProcessingTime;
            if (nextProcessingCallDelay > 16) this.scheduleVideoProcessing(nextProcessingCallDelay);
            else this.scheduleVideoProcessing();
          } else this.scheduleVideoProcessing();
        }
      },
      {
        key: "processVideoFrame",
        value: function processVideoFrame(highQualitySingleFrameMode) {
          var _this8 = this;
          var imageData = this.barcodePickerGui.getVideoImageData();
          if (null == imageData) return _Promise.resolve();
          if (this.eventEmitter.listenerCount("submitFrame") > 0)
            this.eventEmitter.emit("submitFrame", {
              barcodes: [],
              imageData: imageData.slice(),
              imageSettings: this.scanner.getImageSettings()
            });
          return new _Promise(function(resolve) {
            _this8.scanner
              .processImage(imageData, highQualitySingleFrameMode)
              .then(function(scanResult) {
                if (!_this8.scanningPaused) _this8.handleScanResult(scanResult);
                resolve();
              })
              .catch(function(scanError) {
                if (!_this8.scanningPaused) {
                  _this8.pauseScanning();
                  _this8.eventEmitter.emit("scanError", scanError);
                }
                resolve();
              });
          });
        }
      },
      {
        key: "videoProcessing",
        value: function videoProcessing() {
          var _this9 = this;
          if (this.destroyed) return;
          if (
            null == this.cameraManager.activeCamera ||
            null == this.cameraManager.activeCamera.currentResolution ||
            null != this.fatalError ||
            this.scanningPaused ||
            !this.scanner.isReady() ||
            this.scanner.isBusyProcessing() ||
            this.latestVideoTimeProcessed === this.barcodePickerGui.getVideoCurrentTime()
          ) {
            this.scheduleVideoProcessing();
            return;
          }
          if (null == this.latestVideoTimeProcessed) this.resumeScanning();
          var processingStartTime = performance.now();
          this.latestVideoTimeProcessed = this.barcodePickerGui.getVideoCurrentTime();
          try {
            this.processVideoFrame(false).then(function() {
              _this9.scheduleNextVideoProcessing(processingStartTime);
            });
          } catch (error) {
            this.triggerFatalError(error);
          }
        }
      }
    ],
    [
      {
        key: "create",
        value: function create(originElement) {
          var _ref2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            _ref2$visible = _ref2.visible,
            visible = void 0 === _ref2$visible ? true : _ref2$visible,
            _ref2$singleImageMode = _ref2.singleImageMode,
            singleImageMode =
              void 0 === _ref2$singleImageMode
                ? { desktop: { always: false, allowFallback: true }, mobile: { always: false, allowFallback: true } }
                : _ref2$singleImageMode,
            _ref2$playSoundOnScan = _ref2.playSoundOnScan,
            playSoundOnScan = void 0 === _ref2$playSoundOnScan ? false : _ref2$playSoundOnScan,
            _ref2$vibrateOnScan = _ref2.vibrateOnScan,
            vibrateOnScan = void 0 === _ref2$vibrateOnScan ? false : _ref2$vibrateOnScan,
            _ref2$scanningPaused = _ref2.scanningPaused,
            scanningPaused = void 0 === _ref2$scanningPaused ? false : _ref2$scanningPaused,
            _ref2$guiStyle = _ref2.guiStyle,
            guiStyle = void 0 === _ref2$guiStyle ? BarcodePicker$$1.GuiStyle.LASER : _ref2$guiStyle,
            _ref2$videoFit = _ref2.videoFit,
            videoFit = void 0 === _ref2$videoFit ? BarcodePicker$$1.ObjectFit.CONTAIN : _ref2$videoFit,
            scanner = _ref2.scanner,
            _ref2$scanSettings = _ref2.scanSettings,
            scanSettings = void 0 === _ref2$scanSettings ? new ScanSettings() : _ref2$scanSettings,
            _ref2$enableCameraSwi = _ref2.enableCameraSwitcher,
            enableCameraSwitcher = void 0 === _ref2$enableCameraSwi ? true : _ref2$enableCameraSwi,
            _ref2$enableTorchTogg = _ref2.enableTorchToggle,
            enableTorchToggle = void 0 === _ref2$enableTorchTogg ? true : _ref2$enableTorchTogg,
            _ref2$enableTapToFocu = _ref2.enableTapToFocus,
            enableTapToFocus = void 0 === _ref2$enableTapToFocu ? true : _ref2$enableTapToFocu,
            _ref2$enablePinchToZo = _ref2.enablePinchToZoom,
            enablePinchToZoom = void 0 === _ref2$enablePinchToZo ? true : _ref2$enablePinchToZo,
            _ref2$accessCamera = _ref2.accessCamera,
            accessCamera = void 0 === _ref2$accessCamera ? true : _ref2$accessCamera,
            camera = _ref2.camera,
            cameraSettings = _ref2.cameraSettings,
            _ref2$targetScanningF = _ref2.targetScanningFPS,
            targetScanningFPS = void 0 === _ref2$targetScanningF ? 30 : _ref2$targetScanningF;
          var singleImageModeForced = void 0;
          var singleImageModeFallbackAllowed = void 0;
          var deviceType = BrowserHelper.userAgentInfo.getDevice().type;
          if ("mobile" === deviceType || "tablet" === deviceType) {
            singleImageModeForced = singleImageMode.mobile.always;
            singleImageModeFallbackAllowed = singleImageMode.mobile.allowFallback;
          } else {
            singleImageModeForced = singleImageMode.desktop.always;
            singleImageModeFallbackAllowed = singleImageMode.desktop.allowFallback;
          }
          var browserCompatibility = BrowserHelper.checkBrowserCompatibility();
          if (
            !browserCompatibility.scannerSupport ||
            (!singleImageModeForced && !singleImageModeFallbackAllowed && !browserCompatibility.fullSupport)
          )
            return _Promise.reject(
              new CustomError({
                name: "UnsupportedBrowserError",
                message: "This OS / Browser has one or more missing features preventing it from working correctly",
                data: browserCompatibility
              })
            );
          if (null == userLicenseKey || "" === userLicenseKey.trim())
            return _Promise.reject(
              new CustomError({
                name: "LibraryNotConfiguredError",
                message:
                  "The library has not correctly been configured yet, please call 'configure' with valid parameters"
              })
            );
          if (!(originElement instanceof HTMLElement))
            return _Promise.reject(
              new CustomError({ name: "NoOriginElementError", message: "A valid origin HTML element must be given" })
            );
          if (targetScanningFPS <= 0) targetScanningFPS = 30;
          var barcodePicker = new BarcodePicker$$1(originElement, {
            visible: visible,
            singleImageMode: browserCompatibility.fullSupport ? singleImageModeForced : true,
            playSoundOnScan: playSoundOnScan,
            vibrateOnScan: vibrateOnScan,
            scanningPaused: scanningPaused,
            guiStyle: guiStyle,
            videoFit: videoFit,
            scanner: scanner,
            scanSettings: scanSettings,
            targetScanningFPS: targetScanningFPS
          });
          barcodePicker.cameraManager.setInteractionOptions(
            enableCameraSwitcher,
            enableTorchToggle,
            enableTapToFocus,
            enablePinchToZoom
          );
          barcodePicker.cameraManager.setSelectedCamera(camera);
          barcodePicker.cameraManager.setSelectedCameraSettings(cameraSettings);
          barcodePicker.cameraAccess = accessCamera;
          barcodePicker.onScanError(function(error) {
            if (-1 !== ["localhost", "127.0.0.1", ""].indexOf(window.location.hostname)) alert(error);
          });
          if (accessCamera)
            barcodePicker.cameraManager.setupCameras().then(function() {
              return barcodePicker;
            });
          return _Promise.resolve(barcodePicker);
        }
      }
    ]
  );
  return BarcodePicker$$1;
})();
(function(BarcodePicker$$1) {
  (function(GuiStyle) {
    GuiStyle["NONE"] = "none";
    GuiStyle["LASER"] = "laser";
    GuiStyle["VIEWFINDER"] = "viewfinder";
  })(BarcodePicker$$1.GuiStyle || (BarcodePicker$$1.GuiStyle = {}));
  (function(ObjectFit) {
    ObjectFit["CONTAIN"] = "contain";
    ObjectFit["COVER"] = "cover";
  })(BarcodePicker$$1.ObjectFit || (BarcodePicker$$1.ObjectFit = {}));
})(BarcodePicker || (BarcodePicker = {}));
var deviceId = BrowserHelper.getDeviceId();
var userLicenseKey = void 0;
var scanditEngineLocation = void 0;
function configure(licenseKey) {
  var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    _ref$engineLocation = _ref.engineLocation,
    engineLocation = void 0 === _ref$engineLocation ? "/" : _ref$engineLocation,
    _ref$preloadEngineLib = _ref.preloadEngineLibrary,
    preloadEngineLibrary = void 0 === _ref$preloadEngineLib ? false : _ref$preloadEngineLib,
    _ref$preloadCameras = _ref.preloadCameras,
    preloadCameras = void 0 === _ref$preloadCameras ? false : _ref$preloadCameras;
  var browserCompatibility = BrowserHelper.checkBrowserCompatibility();
  if (!browserCompatibility.fullSupport && !browserCompatibility.scannerSupport)
    return _Promise.reject(
      new CustomError({
        name: "UnsupportedBrowserError",
        message: "This OS / Browser has one or more missing features preventing it from working correctly",
        data: browserCompatibility
      })
    );
  if (null == licenseKey || "" === licenseKey.trim())
    return _Promise.reject(new CustomError({ name: "NoLicenseKeyError", message: "No license key provided" }));
  userLicenseKey = licenseKey;
  engineLocation += "/" === engineLocation.slice(-1) ? "" : "/";
  if (/^https?:\/\//.test(engineLocation)) scanditEngineLocation = "" + engineLocation;
  else {
    engineLocation = engineLocation
      .split("/")
      .filter(function(s) {
        return s.length > 0;
      })
      .join("/");
    if ("" === engineLocation) engineLocation = "/";
    else engineLocation = "/" + engineLocation + "/";
    scanditEngineLocation = "" + location.origin + engineLocation;
  }
  var promises = [];
  if (preloadEngineLibrary) promises.push(loadEngineLibrary());
  if (preloadCameras) promises.push(CameraAccess.getCameras());
  return _Promise
    .all(promises)
    .then(function() {
      return;
    })
    .catch(function(error) {
      return _Promise.reject(error);
    });
}
function loadEngineLibrary() {
  try {
    var scanner = new Scanner$$1();
    scanner.applyImageSettings({ width: 2, height: 2, format: ImageSettings.Format.GRAY_8U });
    return scanner.processImage(new Uint8ClampedArray(4)).then(function() {
      return;
    });
  } catch (error) {
    return _Promise.reject(error);
  }
}
export {
  deviceId,
  userLicenseKey,
  scanditEngineLocation,
  configure,
  loadEngineLibrary,
  Barcode,
  BarcodePicker,
  BrowserCompatibility,
  uaParser_1 as UAParser,
  BrowserHelper,
  Camera,
  CameraAccess,
  CameraSettings,
  CustomError,
  ImageSettings,
  Parser,
  Scanner$$1 as Scanner,
  ScanSettings,
  SymbologySettings,
  engineSDKWorkerFunction,
  engineSDKWorker
};
//# sourceMappingURL=index.esm.js.map
