function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke.prototype.$tag = 1;
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(param0, param1, param2, param3) {
  this.id = param0;
  this.parent = param1;
  this.sub_scopes = param2;
  this.cleanups = param3;
}
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP411moonbitlang5async8internal9coroutine9Scheduler(param0, param1, param2, param3) {
  this.coro_id = param0;
  this.curr_coro = param1;
  this.run_later = param2;
  this.all_coros = param3;
}
function _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHost(param0) {
  this.stores = param0;
}
function _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(param0, param1, param2, param3, param4) {
  this.invoke = param0;
  this.settle = param1;
  this.resume_ = param2;
  this.identify = param3;
  this.debug = param4;
}
function _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $oob() {
  throw new Error("Index out of bounds");
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGRP29moonstudy9moonstudy10TopicTotalE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGdE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0) {
  this.val = param0;
}
function _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set3SetGiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13set5EntryGiE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled() {}
_M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled.prototype.$tag = 12;
function _M0DTPC15error5Error66moonbitlang_2fasync_2finternal_2fcoroutine_2eCancelled_2eCancelled() {}
_M0DTPC15error5Error66moonbitlang_2fasync_2finternal_2fcoroutine_2eCancelled_2eCancelled.prototype.$tag = 11;
const _M0DTPC15error5Error66moonbitlang_2fasync_2finternal_2fcoroutine_2eCancelled_2eCancelled__ = new _M0DTPC15error5Error66moonbitlang_2fasync_2finternal_2fcoroutine_2eCancelled_2eCancelled();
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 10;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 9;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 8;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 7;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 6;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError.prototype.$tag = 5;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled() {}
_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled.prototype.$tag = 3;
const _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__ = new _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled();
function _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled() {}
_M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled.prototype.$tag = 2;
const _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled__ = new _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled();
function _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eFallback() {}
_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eFallback.prototype.$tag = 1;
function _M0DTPC15error5Error55moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eSkip() {}
_M0DTPC15error5Error55moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eSkip.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0DTPC14json8JsonPath4Root() {}
_M0DTPC14json8JsonPath4Root.prototype.$tag = 0;
const _M0DTPC14json8JsonPath4Root__ = new _M0DTPC14json8JsonPath4Root();
function _M0DTPC14json8JsonPath3Key(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json8JsonPath3Key.prototype.$tag = 1;
function _M0DTPC14json8JsonPath5Index(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json8JsonPath5Index.prototype.$tag = 2;
function _M0TPC15deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(param0, param1, param2) {
  this.buf = param0;
  this.len = param1;
  this.head = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(param0, param1, param2) {
  this.screen = param0;
  this.offset = param1;
  this.client = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.key_value = param0;
  this.code_value = param1;
  this.alt_pressed = param2;
  this.ctrl_pressed = param3;
  this.shift_pressed = param4;
  this.meta_pressed = param5;
  this.composing = param6;
  this.repeated = param7;
  this.location_value = param8;
}
function _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(param0, param1, param2) {
  this.scroll_offset = param0;
  this.scroll_width = param1;
  this.scroll_height = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP39moonstudy9moonstudy3app3MsgE(param0) {
  this.value = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(param0, param1, param2) {
  this.slots = param0;
  this.gens = param1;
  this.free = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(param0, param1) {
  this.gen = param0;
  this.idx = param1;
}
function _M0DTP411moonbitlang5async8internal9coroutine5State4Done() {}
_M0DTP411moonbitlang5async8internal9coroutine5State4Done.prototype.$tag = 0;
const _M0DTP411moonbitlang5async8internal9coroutine5State4Done__ = new _M0DTP411moonbitlang5async8internal9coroutine5State4Done();
function _M0DTP411moonbitlang5async8internal9coroutine5State4Fail(param0) {
  this._0 = param0;
}
_M0DTP411moonbitlang5async8internal9coroutine5State4Fail.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine5State7Running() {}
_M0DTP411moonbitlang5async8internal9coroutine5State7Running.prototype.$tag = 2;
const _M0DTP411moonbitlang5async8internal9coroutine5State7Running__ = new _M0DTP411moonbitlang5async8internal9coroutine5State7Running();
function _M0DTP411moonbitlang5async8internal9coroutine5State7Suspend(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine5State7Suspend.prototype.$tag = 3;
function _M0DTPC16result6ResultGOuRPB9CancelledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPB9CancelledE2Ok.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__0.prototype.$tag = 0;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State11_2atry_2f79(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State11_2atry_2f79.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__2.prototype.$tag = 2;
function _M0TP411moonbitlang5async8internal9coroutine9Coroutine(param0, param1, param2, param3, param4, param5, param6) {
  this.coro_id = param0;
  this.state = param1;
  this.shielded = param2;
  this.cancelled = param3;
  this.ready = param4;
  this.downstream = param5;
  this.loc = param6;
}
const _M0FP411moonbitlang5async8internal11event__loop12set__timeout = (duration, f) => setTimeout(f, duration);
const _M0MP311moonbitlang5async9js__async11AbortSignal9on__abort = (signal, f) => signal.addEventListener('abort', f, { once: true });
const _M0MP311moonbitlang5async9js__async7JsValue12abort__error = () => {
   const err = new Error()
   err.name = 'AbortError'
   return err
 };
const _M0MP311moonbitlang5async9js__async7JsValue12new__promise = (f) => new Promise(f);
function _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE12_2atry_2f134(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE12_2atry_2f134.prototype.$tag = 0;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE8State__1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE8State__1.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value4null = () => null;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null = (n) => Object.is(n, null);
const _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined = (n) => Object.is(n, undefined);
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url = (self) => { return self.location.href; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window6origin = (self) => { return self.location.origin; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window16queue__microtask = (self, f) => self.queueMicrotask(f);
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame = (self,f) => self.requestAnimationFrame(f);
const _M0FP319moonbit_2dcommunity7rabbita3dom6window = () => window;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element = (x) => x instanceof SVGElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom10get__style = (self) => self.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value = (x,v) => x.nodeValue = v;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling = (x) => x.nextSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling = (x) => x.previousSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node = (x) => x.parentNode;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node = (x, other) => x === other;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event = (event) => {
   if (typeof MouseEvent === "undefined") {
     return null
   }
   if (event instanceof MouseEvent) {
     return event
   }
   try {
     // Web IDL operations validate the interface brand across realms.
     MouseEvent.prototype.getModifierState.call(event, "")
     return event
   } catch {
     return null
   }
 };
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x = (e) => e.clientX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y = (e) => e.clientY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x = (e) => e.offsetX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y = (e) => e.offsetY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x = (e) => e.screenX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y = (e) => e.screenY;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key = (e) => e.key;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code = (e) => e.code;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key = (e) => e.altKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key = (e) => e.ctrlKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key = (e) => e.shiftKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key = (e) => e.metaKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing = (e) => e.isComposing;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat = (e) => e.repeat;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location = (e) => e.location;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom12console__log = (x) => console.log(x);
const _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target = (self) => self.target;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target = (self) => self.currentTarget;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top = (self) => self.scrollTop;
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left = (self) => self.scrollLeft;
const _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width = (self) => self.scrollWidth;
const _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height = (self) => self.scrollHeight;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP319moonbit_2dcommunity7rabbita3dom8document = () => document;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment = (doc,str) => doc.createComment(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment = (doc) => doc.createDocumentFragment();
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__head = (doc) => doc.head;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__body = (doc) => doc.body;
const _M0FP319moonbit_2dcommunity7rabbita3dom37ffi__document__get__document__element = (doc) => doc.documentElement;
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(param0, param1, param2, param3) {
  this.handlers = param0;
  this.attrs = param1;
  this.props = param2;
  this.styles = param3;
}
function _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(param0, param1) {
  this.props = param0;
  this.slots = param1;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml.prototype.$tag = 2;
function _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE3Map.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml.prototype.$tag = 2;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some.prototype.$tag = 1;
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(param0, param1, param2) {
  this.inode = param0;
  this.target_element = param1;
  this.captured_link_listener = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common3Pos(param0, param1) {
  this.x = param0;
  this.y = param1;
}
const _M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event = (event) => event;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Frag(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode5Thunk.prototype.$tag = 3;
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(param0, param1, param2) {
  this.id = param0;
  this.dirty = param1;
  this.parents = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4None() {}
_M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4None__ = new _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4None();
function _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGORP39moonstudy9moonstudy3app9ViewModelE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP39moonstudy9moonstudy3app9ViewModelE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension62moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyEffect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension62moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyEffect.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension63moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyMessage(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension63moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyMessage.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension55moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eDelay(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension55moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eDelay.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage.prototype.$tag = 3;
function _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0) {
  this.val = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(param0) {
  this.on_update = param0;
}
function _M0TPB9ArrayViewGWERP319moonbit_2dcommunity7rabbita3cmd3CmdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.after_render_queue = param0;
  this.task_queue = param1;
  this.stores = param2;
  this.scope = param3;
  this.graph_output = param4;
  this.drain_scheduled = param5;
  this.paint_scheduled = param6;
  this.document = param7;
  this.url_request = param8;
  this.url_changed = param9;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None() {}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__ = new _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None();
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some.prototype.$tag = 1;
function _M0TP219moonbit_2dcommunity7rabbita3App(param0) {
  this.builder = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP29moonstudy9moonstudy15StorageEnvelope(param0, param1) {
  this.schema_version = param0;
  this.records = param1;
}
function _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP29moonstudy9moonstudy11StudyRecord(param0, param1, param2, param3, param4, param5) {
  this.id = param0;
  this.date = param1;
  this.topic = param2;
  this.minutes = param3;
  this.completed = param4;
  this.note = param5;
}
function _M0TP29moonstudy9moonstudy10TopicTotal(param0, param1, param2, param3) {
  this.topic = param0;
  this.minutes = param1;
  this.record_count = param2;
  this.first_index = param3;
}
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP29moonstudy9moonstudy9TopicStat(param0, param1, param2) {
  this.topic = param0;
  this.minutes = param1;
  this.record_count = param2;
}
function _M0TP29moonstudy9moonstudy11StorageLoad(param0, param1, param2) {
  this.ok = param0;
  this.message = param1;
  this.records = param2;
}
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP29moonstudy9moonstudy13StorageAction(param0, param1, param2) {
  this.ok = param0;
  this.message = param1;
  this.storage_json = param2;
}
const _M0FP39moonstudy9moonstudy3app11read__local = (key) => { const value = window.localStorage.getItem(key); return value === null ? '' : value; };
function _M0TP39moonstudy9moonstudy3app9ViewModel(param0, param1, param2, param3, param4) {
  this.ok = param0;
  this.message = param1;
  this.records = param2;
  this.topics = param3;
  this.history_limit = param4;
}
const _M0FP39moonstudy9moonstudy3app15confirm__delete = () => window.confirm('确定删除这条学习记录吗？删除后无法在本页面撤销。');
const _M0FP39moonstudy9moonstudy3app21notify__data__changed = () => { window.dispatchEvent(new CustomEvent('moonstudy:data-changed')); };
const _M0FP39moonstudy9moonstudy3app12show__notice = (message) => { const node = document.getElementById('notice'); if (node === null) return; node.textContent = message; node.hidden = message === ''; };
const _M0FP39moonstudy9moonstudy3app12write__local = (key, value) => { try { window.localStorage.setItem(key, value); return true; } catch (error) { return false; } };
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0DTP39moonstudy9moonstudy3app3Msg6Delete(param0) {
  this._0 = param0;
}
_M0DTP39moonstudy9moonstudy3app3Msg6Delete.prototype.$tag = 0;
function _M0DTP39moonstudy9moonstudy3app3Msg8ShowMore() {}
_M0DTP39moonstudy9moonstudy3app3Msg8ShowMore.prototype.$tag = 1;
const _M0DTP39moonstudy9moonstudy3app3Msg8ShowMore__ = new _M0DTP39moonstudy9moonstudy3app3Msg8ShowMore();
function _M0DTP39moonstudy9moonstudy3app3Msg15ExternalChanged() {}
_M0DTP39moonstudy9moonstudy3app3Msg15ExternalChanged.prototype.$tag = 2;
const _M0DTP39moonstudy9moonstudy3app3Msg15ExternalChanged__ = new _M0DTP39moonstudy9moonstudy3app3Msg15ExternalChanged();
const _M0FP39moonstudy9moonstudy3app13notify__ready = () => { setTimeout(() => window.dispatchEvent(new CustomEvent('moonstudy:app-ready')), 0); };
const _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: (_x, _x$2) => {
  _x.method_table.method_3(_x.self, _x$2);
}, method_1: (_x, _x$2) => {
  _x.method_table.method_4(_x.self, _x$2);
}, method_2: (_x, _x$2) => {
  _x.method_table.method_5(_x.self, _x$2);
}, method_3: (_x, _x$2) => {
  _x.method_table.method_6(_x.self, _x$2);
}, method_4: (_x) => _x.method_table.method_7(_x.self), method_5: (_x, _x$2) => _x.method_table.method_8(_x.self, _x$2), method_6: (_x, _x$2) => _x.method_table.method_9(_x.self, _x$2) };
const _M0FP0130moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fDummyHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_7: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin, method_8: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_9: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_7: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin, method_8: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_9: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FP0190moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fvdom_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE };
const _M0FP0120moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eContext = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGsE, method_1: _M0IPC16string6StringPB4Show10to__string };
const _M0FP0177moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGORP39moonstudy9moonstudy3app9ViewModelE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGORP39moonstudy9moonstudy3app9ViewModelE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGORP39moonstudy9moonstudy3app9ViewModelE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGORP39moonstudy9moonstudy3app9ViewModelE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGORP39moonstudy9moonstudy3app9ViewModelE };
const _M0FP0174moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP39moonstudy9moonstudy3app9ViewModelE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP39moonstudy9moonstudy3app9ViewModelE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP39moonstudy9moonstudy3app9ViewModelE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP39moonstudy9moonstudy3app9ViewModelE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP39moonstudy9moonstudy3app9ViewModelE };
const _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 1: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Fallback";
    }
    case 5: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json15JsonDecodeErrorE(_e);
    }
    case 8: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 4: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 9: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 10: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 12: {
      return "moonbitlang/core/builtin.Cancelled.Cancelled";
    }
    case 2: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Unhandled";
    }
    case 7: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 3: {
      return "moonbit-community/rabbita/cmd.Unhandled.Unhandled";
    }
    case 6: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 11: {
      return _M0IP016_24default__implPB4Show10to__stringGRP411moonbitlang5async8internal9coroutine9CancelledE(_e);
    }
    default: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Skip";
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6932 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0MPB4Iter4nextN6constrS9909GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter4nextN6constrS9910GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter4nextN6constrS9909GcE = 0;
const _M0MPB4Iter4nextN6constrS9910GcE = 0;
const _M0MPB4Iter3newN6constrS9917GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter3newN6constrS9917GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1163 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0IPC14json8JsonPathPB4Show6outputN7_2abindS1594 = "~/";
const _M0FPC14json12checked__mulN6constrS1890 = 0n;
const _M0FP419moonbit_2dcommunity7rabbita8internal3key3key = undefined;
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch([]);
const _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131 = ";";
const _M0FP39moonstudy9moonstudy3app12storage__key = "moonstudy.records.v1";
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix12dummy__scope = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id) => {
  const _bind = [];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id, undefined, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind, 0, 0), undefined), []);
});
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix12dummy__scope);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock = _M0MPC13ref3Ref3RefGdE(0);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid = _M0MPC13ref3Ref3RefGiE(0);
const _bind = [];
const _tmp = _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind, 0, 0), undefined);
const _bind$2 = [];
const _M0FP411moonbitlang5async8internal9coroutine9scheduler = new _M0TP411moonbitlang5async8internal9coroutine9Scheduler(0, undefined, _tmp, _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$2, 0, 0), undefined));
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE({ self: new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHost(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE()), method_table: _M0FP0130moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fDummyHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost });
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS504 = "记录编号不能为空";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS505 = "日期必须是真实的 YYYY-MM-DD 日期";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS506 = "请填写学习内容";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS507 = "学习内容不能超过 100 个字符";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS508 = "备注不能超过 500 个字符";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS509 = "学习时长必须大于 0 分钟";
const _M0FP29moonstudy9moonstudy16validate__recordN6constrS510 = "单条学习时长不能超过 1440 分钟";
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS54 = "details";
const _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS55 = "row-actions";
const _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS56 = "duration";
const _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS57 = "danger";
const _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS58 = "button";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS59 = "app-refresh";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS60 = true;
const _M0FP39moonstudy9moonstudy3app4viewN6constrS61 = "button";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS62 = "card";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS63 = "card-heading";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS64 = "topics-title";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS65 = "muted";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS66 = "empty-topics";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS67 = "empty";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS68 = "topics";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS69 = "topic-list";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS70 = "card";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS71 = "card-heading";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS72 = "history-title";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS73 = "muted";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS74 = "empty-history";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS75 = "empty";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS76 = "history";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS77 = "history";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS78 = "more-history";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS79 = "secondary";
const _M0FP39moonstudy9moonstudy3app4viewN6constrS80 = "button";
const _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler = new _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(_M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS108, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS101, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS98, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS103, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS105);
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime2op = _M0MP319moonbit_2dcommunity7rabbita3cmd2Op2Op();
function _M0MPB6Logger13write__objectGRPC14json8JsonPathE(self, obj) {
  _M0IPC14json8JsonPathPB4Show6output(obj, self);
}
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, self);
}
function _M0MPB6Logger13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_5642, _x_5643) {
  const _Failure = _x_5642;
  const _$42$arg_5644 = _Failure._0;
  _x_5643.method_table.method_0(_x_5643.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_5643, _$42$arg_5644);
  _x_5643.method_table.method_0(_x_5643.self, ")");
}
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = _M0FPB13consume4__acc(self.acc, input);
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  return new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, lo, lo + count | 0);
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$2 = len - 1 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB18UninitializedArray23make__and__blit_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPB18UninitializedArray23unsafe__make__and__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return $panic();
  }
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038((b / _p | 0) & 255));
  const _p$2 = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  const str = self.str;
  const base = self.start;
  let _tmp$2;
  if (lo > 0) {
    let _tmp$3;
    if (lo < len) {
      let _tmp$4;
      const _p = str.charCodeAt(base + lo | 0);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = str.charCodeAt((base + lo | 0) - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    lo = lo + 1 | 0;
  }
  let _tmp$3;
  if (hi > 0) {
    let _tmp$4;
    if (hi < len) {
      let _tmp$5;
      const _p = str.charCodeAt(base + hi | 0);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = str.charCodeAt((base + hi | 0) - 1 | 0);
        _tmp$5 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$5 = false;
      }
      _tmp$4 = _tmp$5;
    } else {
      _tmp$4 = false;
    }
    _tmp$3 = _tmp$4;
  } else {
    _tmp$3 = false;
  }
  if (_tmp$3) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, value) {
  _M0IP411moonbitlang5async8internal9coroutine9CoroutinePB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0MPB6Hasher14Hasher_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher6Hasher(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher14Hasher_2einner(seed);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB6Hasher8finalize(self) {
  return _M0FPB13finalize__acc(self.acc);
}
function _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP411moonbitlang5async8internal9coroutine9CoroutineE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp$2;
  if (lo > 0) {
    let _tmp$3;
    if (lo < len) {
      let _tmp$4;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    lo = lo + 1 | 0;
  }
  let _tmp$3;
  if (hi > 0) {
    let _tmp$4;
    if (hi < len) {
      let _tmp$5;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$5 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$5 = false;
      }
      _tmp$4 = _tmp$5;
    } else {
      _tmp$4 = false;
    }
    _tmp$3 = _tmp$4;
  } else {
    _tmp$3 = false;
  }
  if (_tmp$3) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14json15JsonDecodeErrorE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14json15JsonDecodeErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14json10ParseErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0IP016_24default__implPB4Show10to__stringGRP411moonbitlang5async8internal9coroutine9CancelledE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger };
  _p.method_table.method_0(_p.self, "Cancelled");
  return logger.val;
}
function _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GcE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
  }
  return new _M0TPB4IterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGkE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$3 = self;
  return new _M0TPB9ArrayViewGkE(_bind$3, lo, lo + count | 0);
}
function _M0MPC16string10StringView11code__units(self) {
  const _p = self.str.length;
  let _tmp$2;
  if (_p <= 0) {
    _tmp$2 = [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, self.str.charCodeAt(_p$2));
    let _tmp$3 = 1;
    while (true) {
      const _p$4 = _tmp$3;
      if (_p$4 < _p) {
        if (_p$4 >>> 0 < _p$3.length) {
          _p$3[_p$4] = self.str.charCodeAt(_p$4);
        } else {
          $oob();
        }
        _tmp$3 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$2 = _p$3;
  }
  return _M0MPC15array10FixedArray21clamped__view_2einnerGkE(_tmp$2, self.start, self.end);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp$2 = start_offset;
  let _tmp$3 = 0;
  while (true) {
    const index = _tmp$2;
    const count = _tmp$3;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          _tmp$2 = index + 2 | 0;
          _tmp$3 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp$2 = index + 1 | 0;
      _tmp$3 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp$2 = start_offset;
  let _tmp$3 = 0;
  while (true) {
    const index = _tmp$2;
    const count = _tmp$3;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          _tmp$2 = index + 2 | 0;
          _tmp$3 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp$2 = index + 1 | 0;
      _tmp$3 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp$2 = end_offset;
  let _tmp$3 = 0;
  while (true) {
    const utf16_offset = _tmp$2;
    const char_count = _tmp$3;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp$2 = utf16_offset - 2 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$2 = utf16_offset - 1 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$2 = start_offset;
    let _tmp$3 = 0;
    while (true) {
      const utf16_offset = _tmp$2;
      const char_count = _tmp$3;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp$2 = utf16_offset + 2 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$2 = utf16_offset + 1 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGjE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$3 = chars.str;
  const _bind$4 = chars.start;
  const _bind$5 = chars.end;
  let _tmp$2 = _bind$4;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$5) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$6 = _bind$3.charCodeAt(_string_index);
        if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
          const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
          if (_bind$7 >= 56320 && _bind$7 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p = _bind$6;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$6 = code >>> 5 | 0;
        switch (_bind$6) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$3 = code >>> 5 | 0;
    switch (_bind$3) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    let _tmp$3;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$3 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = end;
  while (true) {
    const pos = _tmp$2;
    let _tmp$3;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$3 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _tmp$2 = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0MPC16string10StringView27contains__any__ascii__chars(self, bits0, bits1, bits2, bits3) {
  const _bind$3 = self.str;
  const _bind$4 = self.start;
  const _bind$5 = self.end;
  let _tmp$2 = _bind$4;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$5) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$6 = _bind$3.charCodeAt(_string_index);
        if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
          const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
          if (_bind$7 >= 56320 && _bind$7 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p = _bind$6;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _decoded_char)) {
        return true;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__any__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0MPC16string10StringView27contains__any__ascii__chars(new _M0TPC16string10StringView(str, start, end), bits0, bits1, bits2, bits3);
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp$2 = i + 2 | 0;
                  continue;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$3 = x.str;
      const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$4;
      if (_bind$3 === undefined) {
        _tmp$4 = x.end;
      } else {
        const _Some = _bind$3;
        _tmp$4 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$3, _tmp$4, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView13contains__any(self, chars) {
  if ((chars.end - chars.start | 0) === 0) {
    return false;
  } else {
    if (_M0MPC16string6String24char__length__eq_2einner(chars.str, 1, chars.start, chars.end)) {
      const _c = _M0MPC16string6String16unsafe__char__at(chars.str, _M0MPC16string6String29offset__of__nth__char_2einner(chars.str, 0, chars.start, chars.end));
      return _M0MPC16string10StringView14contains__char(self, _c);
    } else {
      const _bind$3 = _M0FPB23build__ascii__char__set(chars);
      if (_bind$3 === undefined) {
        const _bind$4 = self.str;
        const _bind$5 = self.start;
        const _bind$6 = self.end;
        let _tmp$2 = _bind$5;
        while (true) {
          const _string_index = _tmp$2;
          if (_string_index < _bind$6) {
            let _decoded_next_string_index;
            let _decoded_char;
            _L: {
              const _bind$7 = _bind$4.charCodeAt(_string_index);
              if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
                const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
                if (_bind$8 >= 56320 && _bind$8 <= 57343) {
                  const _tmp$3 = _string_index + 2 | 0;
                  const _p = (((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0;
                  _decoded_next_string_index = _tmp$3;
                  _decoded_char = _p;
                  break _L;
                } else {
                  const _tmp$3 = _string_index + 1 | 0;
                  const _p = _bind$7;
                  _decoded_next_string_index = _tmp$3;
                  _decoded_char = _p;
                  break _L;
                }
              } else {
                const _tmp$3 = _string_index + 1 | 0;
                const _p = _bind$7;
                _decoded_next_string_index = _tmp$3;
                _decoded_char = _p;
                break _L;
              }
            }
            if (_M0MPC16string10StringView14contains__char(chars, _decoded_char)) {
              return true;
            }
            _tmp$2 = _decoded_next_string_index;
            continue;
          } else {
            return false;
          }
        }
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _bits0 = _x._0;
        const _bits1 = _x._1;
        const _bits2 = _x._2;
        const _bits3 = _x._3;
        return _M0FPB28string__contains__any__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
      }
    }
  }
}
function _M0MPC16string6String13contains__any(self, chars) {
  return _M0MPC16string10StringView13contains__any(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$3 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$3 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6932, 0, _M0MPC16string6String4trimN7_2abindS6932.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (c >= 55296 && c <= 56319) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return next >= 56320 && next <= 57343 ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return c >= 56320 && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView21clamped__view_2einnerGkE(self, start, end) {
  const len = self.end - self.start | 0;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$3 = self.buf;
  const _bind$4 = self.start + lo | 0;
  return new _M0TPB9ArrayViewGkE(_bind$3, _bind$4, _bind$4 + count | 0);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$3 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$2 = 0;
    let _tmp$3 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$2;
      const size_hint$2 = _tmp$3;
      if (_ < _bind$3) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$2 = _ + 1 | 0;
        const _bind$4 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$3 = (size_hint$2 + (_bind$4.end - _bind$4.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP39moonstudy9moonstudy3app9ViewModelE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IP39moonstudy9moonstudy3app9ViewModelPB2Eq5equal(_x, _y);
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self === undefined) {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  }
}
function _M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsbE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsiE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind$3 = self.entries[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _x, cur);
          _tmp$2 = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, _entry);
        _M0MPB3Map11shift__backGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$3 = curr_entry.val;
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
}
function _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp$2 = self.head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      break;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp$2 = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, f) {
  const _bind$3 = self.capacity;
  const _bind$4 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$5 = self.size;
  const _bind$6 = self.capacity_mask;
  const _bind$7 = self.grow_at;
  const _bind$8 = undefined;
  const _bind$9 = self.tail;
  const other = new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, _bind$3, _bind$6, _bind$7, _bind$8, _bind$9);
  if (self.size === 0) {
    return other;
  }
  const _tmp$2 = self.entries;
  const _tmp$3 = self.tail;
  const _bind$10 = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
  if (_bind$10 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$10;
    const _last = _Some;
    let _tmp$4 = _last;
    let _tmp$5 = self.tail;
    let _tmp$6 = undefined;
    while (true) {
      const entry = _tmp$4;
      const idx = _tmp$5;
      const next = _tmp$6;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_value = f(_key, _value);
      const new_entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_prev, next, _psl, _hash, _key, new_value);
      const _tmp$7 = other.entries;
      if (idx >>> 0 < _tmp$7.length) {
        _tmp$7[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$8 = self.entries;
        const _p = _prev >>> 0 < _tmp$8.length ? _tmp$8[_prev] : $oob();
        if (_p === undefined) {
          _tmp$4 = $panic();
        } else {
          const _p$2 = _p;
          _tmp$4 = _p$2;
        }
        _tmp$5 = _prev;
        _tmp$6 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  if (self) {
    const _p = true;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  } else {
    const _p = false;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  }
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  const _p = self + 0;
  const _p$2 = undefined;
  return new _M0DTPB4Json6Number(_p, _p$2);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP29moonstudy9moonstudy11StudyRecordE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _M0IP29moonstudy9moonstudy11StudyRecordPB6ToJson8to__json(_p$4);
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0IPC14uint4UIntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher13combine__uint(hasher, self);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (55296 <= self$2 && self$2 <= 57343) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_0(logger.self, "}");
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return buf.val;
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGjE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGRP29moonstudy9moonstudy10TopicTotalE(arr, start, end) {
  const _bind$3 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$3)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGRP29moonstudy9moonstudy10TopicTotalE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGRP29moonstudy9moonstudy10TopicTotalE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGjE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP29moonstudy9moonstudy10TopicTotalE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$2 = len;
  let _tmp$3 = 0;
  while (true) {
    const len$2 = _tmp$2;
    const limit = _tmp$3;
    if (len$2 > 0) {
      _tmp$2 = len$2 / 2 | 0;
      _tmp$3 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GRP29moonstudy9moonstudy10TopicTotalE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GRP29moonstudy9moonstudy10TopicTotalE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GRP29moonstudy9moonstudy10TopicTotalE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GRP29moonstudy9moonstudy10TopicTotalE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GRP29moonstudy9moonstudy10TopicTotalE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GRP29moonstudy9moonstudy10TopicTotalE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GRP29moonstudy9moonstudy10TopicTotalE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GRP29moonstudy9moonstudy10TopicTotalE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GRP29moonstudy9moonstudy10TopicTotalE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP29moonstudy9moonstudy10TopicTotalE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP29moonstudy9moonstudy10TopicTotalE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const _bind$3 = len / 2 | 0;
  let _tmp$2 = _bind$3 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP29moonstudy9moonstudy10TopicTotalE(arr, i, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP29moonstudy9moonstudy10TopicTotalE(_M0MPC15array12MutArrayView5sliceGRP29moonstudy9moonstudy10TopicTotalE(arr, 0, i), 0, cmp);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$3 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$3) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$3) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP29moonstudy9moonstudy10TopicTotalE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr, cmp, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr$2, cmp);
      return undefined;
    }
    const _bind$3 = _M0FPB24fixed__choose__pivot__byGRP29moonstudy9moonstudy10TopicTotalE(arr$2, cmp);
    const _pivot_index = _bind$3._0;
    const _likely_sorted = _bind$3._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP29moonstudy9moonstudy10TopicTotalE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$4 = _M0FPB20fixed__partition__byGRP29moonstudy9moonstudy10TopicTotalE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$4._0;
    const _partitioned = _bind$4._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (cmp(_p$2, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p$2, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGRP29moonstudy9moonstudy10TopicTotalE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP29moonstudy9moonstudy10TopicTotalE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP29moonstudy9moonstudy10TopicTotalE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGRP29moonstudy9moonstudy10TopicTotalE(left, cmp, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGRP29moonstudy9moonstudy10TopicTotalE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP29moonstudy9moonstudy10TopicTotalE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP29moonstudy9moonstudy10TopicTotalE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array8sort__byGRP29moonstudy9moonstudy10TopicTotalE(self, cmp) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView8sort__byGRP29moonstudy9moonstudy10TopicTotalE(new _M0TPB12MutArrayViewGRP29moonstudy9moonstudy10TopicTotalE(self, 0, _bind$3), cmp);
}
function _M0IPC15array5ArrayPB2Eq5equalGRP29moonstudy9moonstudy11StudyRecordE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (_M0IP29moonstudy9moonstudy11StudyRecordPB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP29moonstudy9moonstudy9TopicStatE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        const _p = self[i];
        const _p$2 = other[i];
        if (_p.topic === _p$2.topic && _p.minutes === _p$2.minutes && _p.record_count === _p$2.record_count) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, 0);
}
function _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self) {
  const len = self.length;
  const arr = new Array(len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      arr[i] = self[(len - i | 0) - 1 | 0];
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array7flattenGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  const _bind$3 = self.length;
  let len;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const len$2 = _tmp$3;
    if (_ < _bind$3) {
      const x = self[_];
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = len$2 + x.length | 0;
      continue;
    } else {
      len = len$2;
      break;
    }
  }
  const res = new Array(len);
  const _bind$4 = self.length;
  let _tmp$4 = 0;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$4;
    const i = _tmp$5;
    if (_ < _bind$4) {
      const xs = self[_];
      _M0MPC15array5Array12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(res, i, xs, 0, xs.length);
      _tmp$4 = _ + 1 | 0;
      _tmp$5 = i + xs.length | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(x) {
  return new _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(x);
}
function _M0MPC13ref3Ref3RefGdE(x) {
  return new _M0TPC13ref3RefGdE(x);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x) {
  return new _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x);
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_env);
}
function _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPC13set8new__setGiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPC13set3SetGiE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPC13set21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPC13set3Set10set__entryGiE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set10push__awayGiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGiE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set4growGiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGiE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_curr_entry.key, key)) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry);
}
function _M0MPC13set3Set15add__with__hashGiE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGiE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGiE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGiE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry);
}
function _M0MPC13set3Set15add__with__hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        let _tmp$4;
        if (_curr_entry.hash === hash) {
          const _p = _curr_entry.key;
          _tmp$4 = _p.coro_id === key.coro_id;
        } else {
          _tmp$4 = false;
        }
        if (_tmp$4) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry);
}
function _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(key));
}
function _M0MPC13set3Set3addGiE(self, key) {
  _M0MPC13set3Set15add__with__hashGiE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key, _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(key));
}
function _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set3SetGiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGiE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGiE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set8containsGiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind$3 = self.entries[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _x, cur);
          _tmp$2 = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_entry.key, key)) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set6removeGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p.coro_id === key.coro_id;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set5clearGRP411moonbitlang5async8internal9coroutine9CoroutineE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$3 = curr_entry.val;
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp$2 = self;
  let _tmp$3 = init;
  let _tmp$4 = 0;
  while (true) {
    const str = _tmp$2;
    const ret = _tmp$3;
    const len = _tmp$4;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp$2 = _x$2;
          _tmp$3 = f(_x - 48 | 0, ret);
          _tmp$4 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp$2 = s;
  while (true) {
    const s$2 = _tmp$2;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp$2 = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$3 = s$2;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$3 = s$2;
    if ((_bind$3.end - _bind$3.start | 0) >= 1) {
      const _x = _bind$3.str.charCodeAt(_bind$3.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$4 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$4._0;
        const _exp_num = _bind$4._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if ((s$2.end - s$2.start | 0) === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$3._0;
  const _mantissa = _bind$3._1;
  const _consumed = _bind$3._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$4 = s$3;
  if ((_bind$4.end - _bind$4.start | 0) >= 1) {
    const _x = _bind$4.str.charCodeAt(_bind$4.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
      s$3 = _x$2;
      const _bind$5 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$5 = s$3;
      if ((_bind$5.end - _bind$5.start | 0) >= 1) {
        const _x = _bind$5.str.charCodeAt(_bind$5.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$5 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$6;
    if (_bind$5 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$5;
      _bind$6 = _Some;
    }
    const _new_s = _bind$6._0;
    const _exp_number_val = _bind$6._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$5 = s$3;
  if ((_bind$5.end - _bind$5.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp$2 = s.str;
    let _tmp$3 = s.start;
    let _tmp$4 = s.end;
    _L$3: while (true) {
      const s_str = _tmp$2;
      const s_start = _tmp$3;
      const s_end = _tmp$4;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp$2 = rest$2.str;
        _tmp$3 = rest$2.start;
        _tmp$4 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$6._0;
      const _new_mantissa = _bind$6._1;
      const _consumed_digit = _bind$6._2;
      mantissa$2 = _new_mantissa;
      let _tmp$5;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$5 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$6 = _s$2.str;
          const _bind$7 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$7;
          if (_bind$7 === undefined) {
            _tmp$7 = _s$2.end;
          } else {
            const _Some = _bind$7;
            _tmp$7 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$6, _tmp$7, _s$2.end);
          const _bind$8 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$8._1;
          const _consumed_digit$2 = _bind$8._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$5 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$5));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp$2 = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      const _p = _tmp$2 + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
      _state_300 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312[_p];
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _accept_state_298;
  switch (_bind$3) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1163;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp$2 = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          const _p = _tmp$2 + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0;
          _state_218 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230[_p];
          continue;
        } else {
          break;
        }
      }
      const _bind$3 = _accept_state_216;
      switch (_bind$3) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp$2 = rest$2.str;
    let _tmp$3 = rest$2.start;
    let _tmp$4 = rest$2.end;
    let _tmp$5 = allow_underscore;
    let _tmp$6 = false;
    while (true) {
      const rest_str = _tmp$2;
      const rest_start = _tmp$3;
      const rest_end = _tmp$4;
      const allow_underscore$2 = _tmp$5;
      const follow_underscore = _tmp$6;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$7;
                                      if (_bind$3 === undefined) {
                                        _tmp$7 = rest_end;
                                      } else {
                                        const _Some = _bind$3;
                                        _tmp$7 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$7, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$3 = rest_start + 1 | 0;
                          _tmp$3 = _bind$3;
                          _tmp$5 = false;
                          _tmp$6 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$7;
                                      if (_bind$3 === undefined) {
                                        _tmp$7 = rest_end;
                                      } else {
                                        const _Some = _bind$3;
                                        _tmp$7 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$7, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp$2 = rest$6.str;
                _tmp$3 = rest$6.start;
                _tmp$4 = rest$6.end;
                _tmp$5 = true;
                _tmp$6 = false;
                continue;
              }
              _tmp$2 = rest$5.str;
              _tmp$3 = rest$5.start;
              _tmp$4 = rest$5.end;
              _tmp$5 = true;
              _tmp$6 = false;
              continue;
            }
            return false;
          }
          _tmp$2 = rest$4.str;
          _tmp$3 = rest$4.start;
          _tmp$4 = rest$4.end;
          _tmp$5 = false;
          _tmp$6 = false;
          continue;
        }
        return false;
      }
      _tmp$2 = rest$3.str;
      _tmp$3 = rest$3.start;
      _tmp$4 = rest$3.end;
      _tmp$5 = false;
      _tmp$6 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = table_index >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[table_index] : $oob();
  const _p = table_index + 1 | 0;
  const pow_lo = _p >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[_p] : $oob();
  const pow_exp2 = 1 + (Math.imul(exponent$2, 108853) >> 15) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(top_bit + 9 & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp$2;
    if (self.digits_num > 0) {
      const _tmp$3 = self.digits;
      const _tmp$4 = self.digits_num - 1 | 0;
      const _p = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      const _p$2 = 0;
      _tmp$2 = _p === _p$2;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp$2 = rest;
  while (true) {
    const rest$3 = _tmp$2;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp$2 = _x$2;
                continue;
              } else {
                const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp$2 = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$3 = d.digits;
                  const _tmp$4 = d.digits_num;
                  if (_tmp$4 >>> 0 < _tmp$3.length) {
                    _tmp$3[_tmp$4] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp$2 = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$3 = rest$5;
              while (true) {
                const rest$7 = _tmp$3;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$3 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$3 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$3 = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          rest$3 = _ok._0;
        } else {
          return _bind$3;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp$2;
  const _tmp$3 = self.digits;
  if ((d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) === 5) {
    _tmp$2 = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    if (self.truncated) {
      return true;
    }
    let _tmp$4;
    if (d > 0) {
      const _tmp$5 = self.digits;
      const _tmp$6 = d - 1 | 0;
      _tmp$4 = ((_tmp$6 >>> 0 < _tmp$5.length ? _tmp$5[_tmp$6] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$4 = false;
    }
    return _tmp$4;
  }
  const _tmp$4 = self.digits;
  return (d >>> 0 < _tmp$4.length ? _tmp$4[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp$2 = 0n;
  let _tmp$3 = 0;
  while (true) {
    const n = _tmp$2;
    const i = _tmp$3;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$4 = BigInt.asUintN(64, n * 10n);
      const _tmp$5 = self.digits;
      const _p = i >>> 0 < _tmp$5.length ? _tmp$5[i] : $oob();
      _tmp$2 = BigInt.asUintN(64, _tmp$4 + BigInt.asUintN(64, BigInt(_p)));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$4 = n;
      let _tmp$5 = i;
      while (true) {
        const n$3 = _tmp$4;
        const i$2 = _tmp$5;
        if (i$2 < self.decimal_point) {
          _tmp$4 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$5 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._0;
  const cheat_num = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._1;
  const _bind$3 = cheat_num.length;
  let less;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$3 = self.digits;
      if ((i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) !== d) {
        const _tmp$4 = self.digits;
        less = (i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()) < d;
        break;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = read_index;
      const _p = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
      const d = BigInt.asUintN(64, BigInt(_p));
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$4 = self.digits;
        const _tmp$5 = write_index;
        if (_tmp$5 >>> 0 < _tmp$4.length) {
          _tmp$4[_tmp$5] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$2 = self.digits;
        const _tmp$3 = write_index;
        if (_tmp$3 >>> 0 < _tmp$2.length) {
          _tmp$2[_tmp$3] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp$2 = self.digits;
      const _tmp$3 = read_index;
      const d = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp$2 = self.digits;
      const _tmp$3 = write_index;
      if (_tmp$3 >>> 0 < _tmp$2.length) {
        _tmp$2[_tmp$3] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$4 = self.digits;
      const _tmp$5 = read_index;
      const d = _tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp$2 = self.digits;
        const _tmp$3 = write_index;
        if (_tmp$3 >>> 0 < _tmp$2.length) {
          _tmp$2[_tmp$3] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = self.decimal_point;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp$2;
    if (self.decimal_point < 0) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      if (self.decimal_point === 0) {
        const _tmp$4 = self.digits;
        _tmp$3 = (0 >>> 0 < _tmp$4.length ? _tmp$4[0] : $oob()) < 5;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    }
    if (_tmp$2) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = -self.decimal_point | 0;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  const _p = exponent & 31;
  return _p >>> 0 < _M0FPC28internal7strconv5table.length ? _M0FPC28internal7strconv5table[_p] : $oob();
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _tmp$2 = self.mantissa;
      const _p = Number(BigInt.asIntN(32, shift)) | 0;
      const _bind$3 = _M0FPC28internal7strconv12checked__mul(_tmp$2, _p >>> 0 < _M0FPC28internal7strconv10int__pow10.length ? _M0FPC28internal7strconv10int__pow10[_p] : $oob());
      if (_bind$3 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$3;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!((str.end - str.start | 0) === 0)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$3 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$4;
        const _num = _Some;
        const _bind$5 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$5.$tag === 1) {
          const _Some$2 = _bind$5;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (fast !== fast) {
            const _bind$6 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp$2;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$2 = _ok._0;
            } else {
              return _bind$6;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp$2);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0IPC14json15JsonDecodeErrorPB4Show6output(_x_749, _x_750) {
  const _JsonDecodeError = _x_749;
  const _$42$arg_751 = _JsonDecodeError._0;
  _x_750.method_table.method_0(_x_750.self, "JsonDecodeError(");
  const _$42$x0_752 = _$42$arg_751._0;
  const _$42$x1_753 = _$42$arg_751._1;
  _x_750.method_table.method_0(_x_750.self, "(");
  _M0MPB6Logger13write__objectGRPC14json8JsonPathE(_x_750, _$42$x0_752);
  _x_750.method_table.method_0(_x_750.self, ", ");
  _M0MPB6Logger13write__objectGsE(_x_750, _$42$x1_753);
  _x_750.method_table.method_0(_x_750.self, ")");
  _x_750.method_table.method_0(_x_750.self, ")");
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$3 = _M0MPC15array9ArrayView21clamped__view_2einnerGkE(_M0MPC16string10StringView11code__units(input), 0, offset);
  const _bind$4 = _bind$3.end - _bind$3.start | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 1;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$2;
    const line = _tmp$3;
    const column = _tmp$4;
    if (_ < _bind$4) {
      const code_unit = _bind$3.buf[_bind$3.start + _ | 0];
      const _p = 10;
      if (code_unit === _p) {
        _tmp$2 = _ + 1 | 0;
        _tmp$3 = line + 1 | 0;
        _tmp$4 = 0;
        continue;
      } else {
        _tmp$2 = _ + 1 | 0;
        _tmp$4 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0IPC14json10ParseErrorPB4Show6output(self, logger) {
  switch (self.$tag) {
    case 10: {
      const _InvalidChar = self;
      const _x = _InvalidChar._0;
      const _line = _x.line;
      const _column = _x.column;
      const _c = _InvalidChar._1;
      logger.method_table.method_0(logger.self, "Invalid character ");
      logger.method_table.method_4(logger.self, { self: _M0MPC14char4Char14escape_2einner(_c, true), method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 9: {
      logger.method_table.method_0(logger.self, "Unexpected end of file");
      return;
    }
    case 8: {
      const _InvalidNumber = self;
      const _x$2 = _InvalidNumber._0;
      const _line$2 = _x$2.line;
      const _column$2 = _x$2.column;
      const _s = _InvalidNumber._1;
      logger.method_table.method_0(logger.self, "Invalid number ");
      logger.method_table.method_4(logger.self, { self: _s, method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 7: {
      const _InvalidIdentEscape = self;
      const _x$3 = _InvalidIdentEscape._0;
      const _line$3 = _x$3.line;
      const _column$3 = _x$3.column;
      logger.method_table.method_0(logger.self, "Invalid escape sequence in identifier at line ");
      logger.method_table.method_4(logger.self, { self: _line$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    default: {
      logger.method_table.method_0(logger.self, "Depth limit exceeded, please increase the max_nesting_depth parameter");
      return;
    }
  }
}
function _M0FPC14json13decode__errorGiE(path, msg) {
  return new _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGuE(path, msg) {
  return new _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE(path, msg) {
  return new _M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGsE(path, msg) {
  return new _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGbE(path, msg) {
  return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp$2;
  let _tmp$3 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$3;
    if (offset >= end) {
      _tmp$2 = offset;
      break;
    }
    _L$2: {
      const _bind$3 = ctx.input;
      const _bind$4 = _bind$3.str.charCodeAt(_bind$3.start + offset | 0);
      switch (_bind$4) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp$2 = offset;
          break _L;
        }
      }
    }
    _tmp$3 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp$2;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$3 = ctx.input;
    const c1 = _bind$3.str.charCodeAt(_bind$3.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1890;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  const _p = exponent & 31;
  return _p >>> 0 < _M0FPC14json12pow10__table.length ? _M0FPC14json12pow10__table[_p] : $oob();
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _tmp$2 = self.mantissa;
    const _p = Number(BigInt.asIntN(32, shift)) | 0;
    const _bind$3 = _M0FPC14json12checked__mul(_tmp$2, _p >>> 0 < _M0FPC14json17int__pow10__table.length ? _M0FPC14json17int__pow10__table[_p] : $oob());
    if (_bind$3 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$3;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$3 = ctx.input;
  const _p = _bind$3.str.charCodeAt(_bind$3.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp$2 = number_start;
  let _tmp$3 = 0n;
  while (true) {
    const i = _tmp$2;
    const acc = _tmp$3;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$4 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$5 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$5, _bind$4);
    }
    const _bind$4 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$4.str.charCodeAt(_bind$4.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$5 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          value = _ok._0;
        } else {
          const _err = _bind$5;
          _try_err = _err._0;
          break _L;
        }
        const _bind$6 = s;
        return new _M0TPC14json11LexedNumber(_bind$6, value);
      }
      let _tmp$4;
      if (negative) {
        const _bind$5 = s;
        _tmp$4 = new _M0TPC14json11LexedNumber(_bind$5, _M0FPC16double13neg__infinity);
      } else {
        const _bind$5 = s;
        _tmp$4 = new _M0TPC14json11LexedNumber(_bind$5, _M0FPC16double8infinity);
      }
      return _tmp$4;
    }
    _tmp$2 = i + 1 | 0;
    _tmp$3 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$3 = ctx.input;
  const _p = _bind$3.str.charCodeAt(_bind$3.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$4 = negative ? start + 1 | 0 : start;
  let _tmp$2 = _bind$4;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$5 = ctx.input;
          const _bind$6 = _bind$5.str.charCodeAt(_bind$5.start + i | 0);
          if (_bind$6 >= 48 && _bind$6 <= 57) {
            const digit = _bind$6 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$6 === 46) {
              has_decimal = true;
            } else {
              if (_bind$6 === 101) {
                break _L$2;
              } else {
                if (_bind$6 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$5 = ctx.input;
          const next = _bind$5.str.charCodeAt(_bind$5.start + (i + 1 | 0) | 0);
          const _p$3 = 45;
          if (next === _p$3) {
            exponent_negative = true;
          }
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!(fast !== fast)) {
    const _bind$3 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$3, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!(fast$2 !== fast$2)) {
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      d = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _bind$4 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$4, d);
  }
  if (scan.negative) {
    const _bind$3 = s;
    return new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double13neg__infinity);
  } else {
    const _bind$3 = s;
    return new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$3 = ctx.input;
    const c1 = _bind$3.str.charCodeAt(_bind$3.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$4 = ctx.input;
        const c2 = _bind$4.str.charCodeAt(_bind$4.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$3 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$3 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp$2;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$2 = _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$3 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$3 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$3 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x === 46) {
          const _bind$4 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$3 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp$2;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$3;
    const r = _tmp$4;
    if (_ < n) {
      const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$3 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _p = _x;
              const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -(_p <= 65535 ? 1 : 2) | 0);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
      }
      _tmp$3 = _ + 1 | 0;
      _tmp$4 = r << 4 | d;
      continue;
    } else {
      _tmp$2 = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView21clamped__view_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$4 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$4;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$5 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  c = _ok._0;
                } else {
                  return _bind$5;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$6 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$6 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$6;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$7.$tag === 1) {
                        const _ok = _bind$7;
                        _ok._0;
                      } else {
                        return _bind$7;
                      }
                    }
                  }
                  const _bind$7 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$7 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$7;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _ok._0;
                      } else {
                        return _bind$8;
                      }
                    }
                  }
                  const _bind$8 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$8.$tag === 1) {
                    const _ok = _bind$8;
                    c2 = _ok._0;
                  } else {
                    return _bind$8;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$9 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$9.$tag === 1) {
                      const _ok = _bind$9;
                      _ok._0;
                    } else {
                      return _bind$9;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _ok._0;
                    } else {
                      return _bind$6;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _p = _x$2;
                const _bind$6 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -(_p <= 65535 ? 1 : 2) | 0);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(buf.val);
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$3 = ctx.end_offset;
  let _tmp$2 = string_start;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      const _bind$4 = ctx.input;
      const c = _bind$4.str.charCodeAt(_bind$4.start + i | 0);
      const _p = 34;
      if (c === _p) {
        ctx.offset = i + 1 | 0;
        const _p$2 = ctx.input;
        const base = _p$2.start;
        const _p$3 = ctx.input;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_p$3.str.substring(base + string_start | 0, base + i | 0));
      } else {
        const _p$2 = 92;
        if (c === _p$2) {
          const _bind$5 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$3;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$3 = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$3);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
          }
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$3 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$4 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$4;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$5 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$6;
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _bind$6 = _ok._0;
                      } else {
                        return _bind$5;
                      }
                      const _n = _bind$6.value;
                      const _repr = _bind$6.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$5 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$6;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          _bind$6 = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        const _n = _bind$6.value;
                        const _repr = _bind$6.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$4 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$5;
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _bind$5 = _ok._0;
                    } else {
                      return _bind$4;
                    }
                    const _n = _bind$5.value;
                    const _repr = _bind$5.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$4 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$5;
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _bind$5 = _ok._0;
                      } else {
                        return _bind$4;
                      }
                      const _n = _bind$5.value;
                      const _repr = _bind$5.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$4 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          s = _ok._0;
                        } else {
                          return _bind$4;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const _p = _x;
                        const shift = -(_p <= 65535 ? 1 : 2) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$4 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          s = _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$3 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$3 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    if (_x === 34) {
      const _bind$4 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        s = _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$3 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    tok = _ok._0;
  } else {
    return _bind$3;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        const _p = true;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 2: {
        const _p$2 = false;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p$2 ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6Number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6String(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok($panic());
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp$2;
  const _bind$3 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$3;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$3 = _ok._0;
  } else {
    return _bind$3;
  }
  let _tmp$4 = _tmp$3;
  _L: while (true) {
    const x = _tmp$4;
    if (x.$tag === 8) {
      _tmp$2 = new _M0DTPB4Json5Array(vec);
      break;
    } else {
      const _bind$4 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$5 = _ok._0;
      } else {
        return _bind$4;
      }
      _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(vec, _tmp$5);
      const _bind$5 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        tok2 = _ok._0;
      } else {
        return _bind$5;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$6 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$4 = _ok._0;
          } else {
            return _bind$6;
          }
          continue _L;
        }
        case 8: {
          _tmp$2 = new _M0DTPB4Json5Array(vec);
          break _L;
        }
        default: {
          $panic();
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$3 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 0), undefined);
  let _tmp$2;
  const _bind$4 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$3;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$3 = _ok._0;
  } else {
    return _bind$4;
  }
  let _tmp$4 = _tmp$3;
  _L: while (true) {
    const x = _tmp$4;
    switch (x.$tag) {
      case 6: {
        _tmp$2 = new _M0DTPB4Json6Object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$5 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$5;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$5 = _ok._0;
        } else {
          return _bind$6;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$5);
        const _bind$7 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$8;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _bind$8 = _ok._0;
        } else {
          return _bind$7;
        }
        switch (_bind$8.$tag) {
          case 9: {
            const _bind$9 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _tmp$4 = _ok._0;
            } else {
              return _bind$9;
            }
            continue _L;
          }
          case 6: {
            _tmp$2 = new _M0DTPB4Json6Object(map);
            break _L;
          }
          default: {
            $panic();
          }
        }
        break;
      }
      default: {
        $panic();
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$3 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    val = _ok._0;
  } else {
    return _bind$3;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      const code = str.charCodeAt(i);
      let _tmp$3;
      const _p = 34;
      if (code === _p) {
        _tmp$3 = true;
      } else {
        let _tmp$4;
        const _p$2 = 92;
        if (code === _p$2) {
          _tmp$4 = true;
        } else {
          let _tmp$5;
          if (code < 32) {
            _tmp$5 = true;
          } else {
            let _tmp$6;
            if (escape_slash) {
              const _p$3 = 47;
              _tmp$6 = code === _p$3;
            } else {
              _tmp$6 = false;
            }
            _tmp$5 = _tmp$6;
          }
          _tmp$4 = _tmp$5;
        }
        _tmp$3 = _tmp$4;
      }
      if (_tmp$3) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind$3 = str.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, code);
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp$2 = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp$2 = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_iterator);
          if (_bind$3 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp$2 = undefined;
            continue;
          } else {
            const _Some = _bind$3;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$4 = _func(_k, _v);
              if (_bind$4 === undefined) {
                _tmp$2 = undefined;
                continue;
              } else {
                const _Some$3 = _bind$4;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp$2 = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.length === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp$2 = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0IPC14json8JsonPathPB4Show6outputN11build__pathS211(path, logger) {
  switch (path.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _Key = path;
      const _parent = _Key._0;
      const _key = _Key._1;
      _M0IPC14json8JsonPathPB4Show6outputN11build__pathS211(_parent, logger);
      logger.method_table.method_0(logger.self, "/");
      if (!_M0MPC16string6String13contains__any(_key, new _M0TPC16string10StringView(_M0IPC14json8JsonPathPB4Show6outputN7_2abindS1594, 0, _M0IPC14json8JsonPathPB4Show6outputN7_2abindS1594.length))) {
        logger.method_table.method_0(logger.self, _key);
        return;
      }
      const _it = _M0MPC16string6String4iter(_key);
      while (true) {
        const _bind$3 = _M0MPB4Iter4nextGcE(_it);
        if (_bind$3 === -1) {
          return;
        } else {
          const _Some = _bind$3;
          const _ch = _Some;
          switch (_ch) {
            case 126: {
              logger.method_table.method_0(logger.self, "~0");
              break;
            }
            case 47: {
              logger.method_table.method_0(logger.self, "~1");
              break;
            }
            default: {
              logger.method_table.method_3(logger.self, _ch);
            }
          }
          continue;
        }
      }
    }
    default: {
      const _Index = path;
      const _parent$2 = _Index._0;
      const _index = _Index._1;
      _M0IPC14json8JsonPathPB4Show6outputN11build__pathS211(_parent$2, logger);
      logger.method_table.method_0(logger.self, "/");
      _M0MPB6Logger13write__objectGiE(logger, _index);
      return;
    }
  }
}
function _M0IPC14json8JsonPathPB4Show6output(self, logger) {
  _M0IPC14json8JsonPathPB4Show6outputN11build__pathS211(self, logger);
}
function _M0FPC14json18from__json_2einnerGRP29moonstudy9moonstudy15StorageEnvelopeE(json, path) {
  return _M0IP29moonstudy9moonstudy15StorageEnvelopePC14json8FromJson10from__json(json, path);
}
function _M0FPC14json10from__jsonGRP29moonstudy9moonstudy15StorageEnvelopeE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP29moonstudy9moonstudy15StorageEnvelopeE(json, path);
}
function _M0IPC14bool4BoolPC14json8FromJson10from__json(json, path) {
  switch (json.$tag) {
    case 1: {
      return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(true);
    }
    case 2: {
      return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(false);
    }
    default: {
      return _M0FPC14json13decode__errorGbE(path, "Bool::from_json: expected boolean");
    }
  }
}
function _M0IPC13int3IntPC14json8FromJson10from__json(json, path) {
  _L: {
    if (json.$tag === 3) {
      const _Number = json;
      const _n = _Number._0;
      if (_n !== _M0FPC16double8infinity) {
        if (_n !== _M0FPC16double13neg__infinity) {
          if (_n > 2147483647 || _n < -2147483648) {
            const _bind$3 = _M0FPC14json13decode__errorGuE(path, "Int::from_json: overflow");
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          }
          return new _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok(_M0MPC16double6Double7to__int(_n));
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FPC14json13decode__errorGiE(path, "Int::from_json: expected number");
}
function _M0IPC16string6StringPC14json8FromJson10from__json(json, path) {
  if (json.$tag === 4) {
    const _String = json;
    const _a = _String._0;
    return new _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok(_a);
  } else {
    return _M0FPC14json13decode__errorGsE(path, "String::from_json: expected string");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP29moonstudy9moonstudy11StudyRecordE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind$3 = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind$3.$tag === 2) {
      const _Index = _bind$3;
      const _acc = [];
      const _bind$4 = _a.length;
      let _tmp$2;
      let _tmp$3 = 0;
      while (true) {
        const i = _tmp$3;
        if (i < _bind$4) {
          const x = _a[i];
          _Index._1 = i;
          const _bind$5 = _M0IP29moonstudy9moonstudy11StudyRecordPC14json8FromJson10from__json(x, _Index);
          let _tmp$4;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$4 = _ok._0;
          } else {
            return _bind$5;
          }
          _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(_acc, _tmp$4);
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          _tmp$2 = _acc;
          break;
        }
      }
      return new _M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE2Ok(_tmp$2);
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE(path, "Array::from_json: expected array");
  }
}
function _M0MPC15deque5Deque9as__viewsGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  if (self.len !== 0) {
    const _buf = self.buf;
    const _head = self.head;
    const _len = self.len;
    const cap = _buf.length;
    const head_len = cap - _head | 0;
    if (head_len >= _len) {
      const _tmp$2 = _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, _head, _head + _len | 0);
      const _bind$3 = [];
      return { _0: _tmp$2, _1: new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$3, 0, 0) };
    } else {
      return { _0: _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, _head, cap), _1: _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, 0, _len - head_len | 0) };
    }
  } else {
    const _bind$3 = [];
    const _tmp$2 = new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$3, 0, 0);
    const _bind$4 = [];
    return { _0: _tmp$2, _1: new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$4, 0, 0) };
  }
}
function _M0MPC15deque5Deque27unsafe__make__and__blit__toGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, allocate_len, dst_offset) {
  if (self.len !== 0) {
    const _bind$3 = _M0MPC15deque5Deque9as__viewsGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
    const _front = _bind$3._0;
    const _back = _bind$3._1;
    const dst = _M0MPB18UninitializedArray23make__and__blit_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.buf, allocate_len, _front.end - _front.start | 0, _front.start, dst_offset);
    _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset + (_front.end - _front.start | 0) | 0, self.buf, _back.start, _back.end - _back.start | 0);
    return dst;
  } else {
    return new Array(allocate_len);
  }
}
function _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr, capacity) {
  const len = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = len;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _capacity > len ? _capacity : len;
  }
  const buf = new Array(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      const x = arr.buf[arr.start + i | 0];
      if (i >>> 0 < buf.length) {
        buf[i] = x;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TPC15deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(buf, len, 0);
}
function _M0MPC15deque5Deque7reallocGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  const _p = self.buf;
  const old_cap = _p.length;
  const new_cap = old_cap === 0 ? 8 : Math.imul(old_cap, 2) | 0;
  const new_buf = _M0MPC15deque5Deque27unsafe__make__and__blit__toGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, new_cap, 0);
  self.head = 0;
  self.buf = new_buf;
}
function _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, value) {
  const _tmp$2 = self.len;
  const _p = self.buf;
  if (_tmp$2 === _p.length) {
    _M0MPC15deque5Deque7reallocGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
  }
  const _p$2 = self.buf;
  const cap = _p$2.length;
  const write_idx = (self.head + self.len | 0) % cap | 0;
  const _tmp$3 = self.buf;
  if (write_idx >>> 0 < _tmp$3.length) {
    _tmp$3[write_idx] = value;
  } else {
    $oob();
  }
  self.len = self.len + 1 | 0;
}
function _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  if (self.len > 0) {
    const _tmp$2 = self.buf;
    const _tmp$3 = self.head;
    const value = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
    const _p = self.buf;
    const cap = _p.length;
    self.head = (self.head + 1 | 0) % cap | 0;
    self.len = self.len - 1 | 0;
    return value;
  } else {
    return undefined;
  }
}
function _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr) {
  return _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr, undefined);
}
function _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, x) {
  _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, x);
}
function _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  return _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
}
function _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(screen, offset, client) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(screen, offset, client);
}
function _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location);
}
function _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(offset, width, height) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(offset, width, height);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP39moonstudy9moonstudy3app3MsgE(x) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP39moonstudy9moonstudy3app3MsgE(x);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(_x_37, _x_38) {
  _M0IPC14uint4UIntPB4Hash13hash__combine(_x_37.gen, _x_38);
  _M0IPC13int3IntPB4Hash13hash__combine(_x_37.idx, _x_38);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE() {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE([], [], []);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena) {
  const _bind$3 = _M0MPC15array5Array3popGiE(arena.free);
  if (_bind$3 === undefined) {
    const idx = arena.slots.length;
    _M0MPC15array5Array4pushGjE(arena.gens, 0);
    _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(0, idx);
  } else {
    const _Some = _bind$3;
    const _idx = _Some;
    const gen = _M0MPC15array5Array2atGjE(arena.gens, _idx);
    _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(gen, _idx);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, value) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, value);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena);
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, f(id));
  return id;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind$3 = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx);
      if (_bind$3 === undefined) {
        $panic();
        return;
      } else {
        _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
        const _array_1 = arena.gens;
        _M0MPC15array5Array3setGjE(_array_1, _idx, (_M0MPC15array5Array2atGjE(_array_1, _idx) >>> 0) + (1 >>> 0) | 0);
        _M0MPC15array5Array4pushGiE(arena.free, _idx);
        return;
      }
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  return _idx !== -1 ? (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen ? _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx) : undefined) : undefined;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind$3 = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx);
      if (_bind$3 === undefined) {
        return $panic();
      } else {
        const _Some = _bind$3;
        return _Some;
      }
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function _M0FP411moonbitlang5async8internal9coroutine18current__coroutine() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro;
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0FP411moonbitlang5async8internal9coroutine29has__immediately__ready__task() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later;
  return !(_p.len === 0);
}
function _M0FP411moonbitlang5async8internal9coroutine10reschedule() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later;
  const n = _p.len;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < n) {
      const _bind$3 = _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later);
      if (_bind$3 === undefined) {
        return;
      } else {
        const _Some = _bind$3;
        const _coro = _Some;
        _coro.ready = false;
        const _bind$4 = _coro.state;
        if (_bind$4.$tag === 3) {
          const _Suspend = _bind$4;
          const _ok_cont = _Suspend._0;
          const _err_cont = _Suspend._1;
          _coro.state = _M0DTP411moonbitlang5async8internal9coroutine5State7Running__;
          const last_coro = _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro;
          _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro = _coro;
          if (_coro.cancelled && !_coro.shielded) {
            _err_cont(_M0DTPC15error5Error66moonbitlang_2fasync_2finternal_2fcoroutine_2eCancelled_2eCancelled__);
          } else {
            _ok_cont(undefined);
          }
          _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro = last_coro;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP411moonbitlang5async8internal9coroutine9CoroutinePB4Hash13hash__combine(self, hasher) {
  _M0IPC13int3IntPB4Hash13hash__combine(self.coro_id, hasher);
}
function _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(self) {
  if (!self.ready) {
    self.ready = true;
    _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later, self);
    return;
  } else {
    return;
  }
}
function _M0FP411moonbitlang5async8internal9coroutine20is__being__cancelled() {
  const coro = _M0FP411moonbitlang5async8internal9coroutine18current__coroutine();
  return coro.cancelled && !coro.shielded;
}
function _M0MP411moonbitlang5async8internal9coroutine9Coroutine6cancel(self) {
  self.cancelled = true;
  if (!self.shielded) {
    _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(self);
    return;
  } else {
    return;
  }
}
function _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS179(_param) {}
function _M0FP411moonbitlang5async8internal9coroutine5spawnN12_2aerr__contS180(_err) {}
function _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS181(_state) {
  let _tmp$2 = _state;
  _L: while (true) {
    const _state$2 = _tmp$2;
    switch (_state$2.$tag) {
      case 0: {
        const _State_0 = _state$2;
        const coro = _State_0._1;
        const _it = _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(coro.downstream);
        while (true) {
          const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_it);
          if (_bind$3 === undefined) {
            break;
          } else {
            const _Some = _bind$3;
            const _coro = _Some;
            _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(_coro);
            continue;
          }
        }
        _M0MPC13set3Set5clearGRP411moonbitlang5async8internal9coroutine9CoroutineE(coro.downstream);
        return new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(_M0MPC13set3Set6removeGRP411moonbitlang5async8internal9coroutine9CoroutineE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros, coro));
      }
      case 1: {
        const _$42$try$47$79 = _state$2;
        const coro$2 = _$42$try$47$79._1;
        const _try_err = _$42$try$47$79._0;
        if (_try_err.$tag === 12) {
          return new _M0DTPC16result6ResultGOuRPB9CancelledE3Err(_try_err);
        } else {
          coro$2.state = new _M0DTP411moonbitlang5async8internal9coroutine5State4Fail(_try_err);
          _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__0(undefined, coro$2);
          continue _L;
        }
      }
      default: {
        const _State_2 = _state$2;
        const coro$3 = _State_2._1;
        coro$3.state = _M0DTP411moonbitlang5async8internal9coroutine5State4Done__;
        _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__0(undefined, coro$3);
        continue _L;
      }
    }
  }
}
function _M0FP411moonbitlang5async8internal9coroutine5spawn(f, loc) {
  _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id = _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id + 1 | 0;
  const _bind$3 = _M0DTP411moonbitlang5async8internal9coroutine5State7Running__;
  const _bind$4 = [];
  const _bind$5 = _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$4, 0, 0), undefined);
  const _bind$6 = _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id;
  const coro = new _M0TP411moonbitlang5async8internal9coroutine9Coroutine(_bind$6, _bind$3, true, false, true, _bind$5, loc);
  const run = (_discard_) => {
    let _cancel_err;
    _L: {
      coro.shielded = false;
      let _bind$7;
      let _err;
      _L$2: {
        _L$3: {
          const _bind$8 = f((_cont_param) => {
            let _err$2;
            _L$4: {
              const _bind$9 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS181(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__2(_cont_param, coro));
              let _bind$10;
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                _bind$10 = _ok._0;
              } else {
                const _err$3 = _bind$9;
                _err$2 = _err$3._0;
                break _L$4;
              }
              if (_bind$10 === -1) {
                return;
              } else {
                const _Some = _bind$10;
                const _payload = _Some;
                _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS179(_payload);
                return;
              }
            }
            _M0FP411moonbitlang5async8internal9coroutine5spawnN12_2aerr__contS180(_err$2);
          }, (_cont_param) => {
            let _err$2;
            _L$4: {
              const _bind$9 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS181(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State11_2atry_2f79(_cont_param, coro));
              let _bind$10;
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                _bind$10 = _ok._0;
              } else {
                const _err$3 = _bind$9;
                _err$2 = _err$3._0;
                break _L$4;
              }
              if (_bind$10 === -1) {
                return;
              } else {
                const _Some = _bind$10;
                const _payload = _Some;
                _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS179(_payload);
                return;
              }
            }
            _M0FP411moonbitlang5async8internal9coroutine5spawnN12_2aerr__contS180(_err$2);
          });
          let _bind$9;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _bind$9 = _ok._0;
          } else {
            const _err$2 = _bind$8;
            _err = _err$2._0;
            break _L$3;
          }
          if (_bind$9 === -1) {
            _bind$7 = new _M0DTPC16result6ResultGOuRPB9CancelledE2Ok(-1);
          } else {
            const _Some = _bind$9;
            const _payload = _Some;
            _bind$7 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS181(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State8State__2(_payload, coro));
          }
          break _L$2;
        }
        _bind$7 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS181(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f19_2elambda_2f178L5State11_2atry_2f79(_err, coro));
      }
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _ok._0;
      } else {
        const _err$2 = _bind$7;
        _cancel_err = _err$2._0;
        break _L;
      }
      return;
    }
  };
  coro.state = new _M0DTP411moonbitlang5async8internal9coroutine5State7Suspend(run, (_discard_) => {
  });
  _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later, coro);
  _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros, coro);
  return coro;
}
function _M0FP411moonbitlang5async8internal11event__loop10reschedule() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros;
  if (!(_p.size === 0)) {
    _M0FP411moonbitlang5async8internal9coroutine10reschedule();
    if (_M0FP411moonbitlang5async8internal9coroutine29has__immediately__ready__task()) {
      _M0FP411moonbitlang5async8internal11event__loop12set__timeout(0, _M0FP411moonbitlang5async8internal11event__loop10reschedule);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS292GuE(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$134 = _state;
    const reject = _$42$try$47$134._1;
    const _try_err = _$42$try$47$134._0;
    let err;
    _L: {
      switch (_try_err.$tag) {
        case 12: {
          return new _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(_try_err);
        }
        case 11: {
          if (_M0FP411moonbitlang5async8internal9coroutine20is__being__cancelled()) {
            return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(reject(_M0MP311moonbitlang5async9js__async7JsValue12abort__error()));
          } else {
            err = _try_err;
            break _L;
          }
        }
        default: {
          err = _try_err;
          break _L;
        }
      }
    }
    return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(reject(_M0FP15Error10to__string(err)));
  } else {
    const _State_1 = _state;
    const resolve = _State_1._1;
    const _cont_param = _State_1._0;
    return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(resolve(_cont_param));
  }
}
function _M0MP311moonbitlang5async9js__async7Promise11from__asyncGuE(f, abort_signal) {
  const promise = _M0MP311moonbitlang5async9js__async7JsValue12new__promise((resolve, reject) => {
    const coro = _M0FP411moonbitlang5async8internal9coroutine5spawn((_cont, _err_cont) => {
      let _err;
      _L: {
        const _bind$3 = f((_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS292GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE8State__1(_cont_param, resolve));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        }, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS292GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE12_2atry_2f134(_cont_param, reject));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        });
        let _bind$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _bind$4 = _ok._0;
        } else {
          const _err$2 = _bind$3;
          _err = _err$2._0;
          break _L;
        }
        if (_bind$4 === -1) {
          return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
        } else {
          const _Some = _bind$4;
          const _payload = _Some;
          return _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS292GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE8State__1(_payload, resolve));
        }
      }
      return _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS292GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f289L5StateGuE12_2atry_2f134(_err, reject));
    }, "src/js_async/js_async.mbt:205:16-213:7@moonbitlang/async");
    if (abort_signal.$tag === 1) {
      const _Some = abort_signal;
      const _signal = _Some._0;
      _M0MP311moonbitlang5async9js__async11AbortSignal9on__abort(_signal, () => {
        _M0MP411moonbitlang5async8internal9coroutine9Coroutine6cancel(coro);
      });
      return;
    } else {
      return;
    }
  });
  _M0FP411moonbitlang5async8internal11event__loop10reschedule();
  return promise;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(self) {
  return !_M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self) ? new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) : _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None__;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGsE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS98(_discard_, _discard_$2, _discard_$3) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err(_M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS101(_discard_, _discard_$2) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS103(_discard_) {
  return new _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS105(_discard_) {
  return new _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS108(_discard_, _discard_$2) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE(self, cmd) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostE(self, cmd) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
}
function _M0MP319moonbit_2dcommunity7rabbita3cmd2Op2Op() {
  return new _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(_M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.invoke, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.settle, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.resume_, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.identify, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.debug);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd6invoke(_discard_, op, extension, context) {
  const _func = op.invoke;
  return _func(extension, context);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(key, cmd) {
  if (cmd.$tag === 0) {
    const _Batch = cmd;
    const _cmds = _Batch._0;
    const _p = new Array(_cmds.length);
    const _p$2 = _cmds.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$3 = _tmp$2;
      if (_p$3 < _p$2) {
        const _p$4 = _cmds[_p$3];
        _p[_p$3] = _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(key, _p$4);
        _tmp$2 = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPC15array5Array7flattenGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_p);
  } else {
    const _Invoke = cmd;
    const _op = _Invoke._0;
    const _extension = _Invoke._1;
    return [{ _0: _op, _1: _extension }];
  }
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom10get__style(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, v) {
  _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value(s, v);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(s, value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, other) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node(s, other);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s));
}
function _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE(exception) {
  _M0FP319moonbit_2dcommunity7rabbita3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, type_, callback) {
  _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener(s, type_, callback);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute(s, attr, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr) {
  _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute(s, attr);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property(s, prop, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property(s, prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, html) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html(s, html);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__head(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__head(self));
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__body(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__body(self));
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document22get__document__element(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom37ffi__document__get__document__element(self));
}
function _M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(_x_35, _x_36) {
  switch (_x_35.$tag) {
    case 0: {
      const _Boolean = _x_35;
      const _$42$x0_37 = _Boolean._0;
      if (_x_36.$tag === 0) {
        const _Boolean$2 = _x_36;
        const _$42$y0_38 = _Boolean$2._0;
        return _$42$x0_37 === _$42$y0_38;
      } else {
        return false;
      }
    }
    case 1: {
      const _Integer = _x_35;
      const _$42$x0_39 = _Integer._0;
      if (_x_36.$tag === 1) {
        const _Integer$2 = _x_36;
        const _$42$y0_40 = _Integer$2._0;
        return _$42$x0_39 === _$42$y0_40;
      } else {
        return false;
      }
    }
    case 2: {
      const _Floating = _x_35;
      const _$42$x0_41 = _Floating._0;
      if (_x_36.$tag === 2) {
        const _Floating$2 = _x_36;
        const _$42$y0_42 = _Floating$2._0;
        return _$42$x0_41 === _$42$y0_42;
      } else {
        return false;
      }
    }
    default: {
      const _String = _x_35;
      const _$42$x0_43 = _String._0;
      if (_x_36.$tag === 3) {
        const _String$2 = _x_36;
        const _$42$y0_44 = _String$2._0;
        return _$42$x0_43 === _$42$y0_44;
      } else {
        return false;
      }
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom23is__html__void__element(tag) {
  switch (tag) {
    case "area": {
      return true;
    }
    case "base": {
      return true;
    }
    case "br": {
      return true;
    }
    case "col": {
      return true;
    }
    case "embed": {
      return true;
    }
    case "hr": {
      return true;
    }
    case "img": {
      return true;
    }
    case "input": {
      return true;
    }
    case "link": {
      return true;
    }
    case "meta": {
      return true;
    }
    case "param": {
      return true;
    }
    case "source": {
      return true;
    }
    case "track": {
      return true;
    }
    case "wbr": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props3new(attrs, props, styles, handlers) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(handlers, attrs, props, styles);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGssE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props4copy(self) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(_M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(self.attrs), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(self.styles));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGsE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGsE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(value) {
  switch (value.$tag) {
    case 3: {
      const _String = value;
      const _value = _String._0;
      return _value;
    }
    case 2: {
      const _Floating = value;
      const _value$2 = _Floating._0;
      return _value$2;
    }
    case 1: {
      const _Integer = value;
      const _value$3 = _Integer._0;
      return _value$3;
    }
    default: {
      const _Boolean = value;
      const _value$4 = _Boolean._0;
      return _value$4;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element, tag, props, scheduler, captured_link_listener) {
  const _handlers = props.handlers;
  const _attrs = props.attrs;
  const _properties = props.props;
  const _styles = props.styles;
  const _bind$3 = [];
  const slots = _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handlers);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _event = _x._0;
      const _handler = _x._1;
      const slot = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handler);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _event, (event) => {
        const _func = slot.val;
        _func(event, scheduler);
      });
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event, slot);
      continue;
    }
  }
  if (tag === "RABBITA_CAPTURED_LINK") {
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "click", captured_link_listener);
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_attrs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _name, _value);
      continue;
    }
  }
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_properties);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _name, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value));
      continue;
    }
  }
  const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  let sheet;
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _html = _Some._0;
    sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
  } else {
    const _bind$5 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
    if (_bind$5.$tag === 1) {
      const _Some = _bind$5;
      const _svg = _Some._0;
      sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
    } else {
      sheet = $panic();
    }
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_styles);
  while (true) {
    const _bind$5 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
    if (_bind$5 === undefined) {
      break;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(sheet, _name, _value);
      continue;
    }
  }
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(props, slots);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(element, tag, props) {
  if (tag === "select") {
    const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(props.props, "value");
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _value = _Some;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "value", _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value));
      return;
    }
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(self, scheduler, captured_link_listener, parent, before) {
  switch (self.$tag) {
    case 1: {
      const _Text = self;
      const _text = _Text._0;
      const element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), _text);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(_text, element);
    }
    case 3: {
      const _Thunk = self;
      const _hash = _Thunk._0;
      const _render = _Thunk._1;
      const node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_render(), scheduler, captured_link_listener, parent, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(_hash, node);
    }
    case 2: {
      const _Frag = self;
      const _children = _Frag._0;
      const document = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(document);
      const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(document, "[");
      const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(document, "]");
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start));
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_p$4, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const children = _p;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end));
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(children, start, end);
    }
    default: {
      const _Elem = self;
      const _tag = _Elem._0;
      const _props = _Elem._1;
      const _children$2 = _Elem._2;
      const _namespace_uri = _Elem._3;
      const rendered_tag = _tag === "RABBITA_CAPTURED_LINK" ? "a" : _tag;
      const document$2 = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      let element$2;
      if (_namespace_uri === undefined) {
        element$2 = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element(document$2, rendered_tag);
      } else {
        const _Some = _namespace_uri;
        const _namespace_uri$2 = _Some;
        element$2 = _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(document$2, _namespace_uri$2, rendered_tag, undefined, undefined);
      }
      const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element$2, _tag, _props, scheduler, captured_link_listener);
      const node$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element$2);
      const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom23is__html__void__element(_tag) ? new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([]) : _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(node$2, _children$2, scheduler, captured_link_listener);
      _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(element$2, _tag, props.props);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, node$2, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(_tag, props, children$2, _namespace_uri, element$2);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(node, children, scheduler, captured_link_listener) {
  switch (children.$tag) {
    case 2: {
      const _RawHtml = children;
      const _html = _RawHtml._0;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(node)), _html);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_html);
    }
    case 0: {
      const _Array = children;
      const _children = _Array._0;
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_p$4, scheduler, captured_link_listener, node, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_p);
    }
    default: {
      const _Map = children;
      const _children$2 = _Map._0;
      const _bind$3 = [];
      const mounted = _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(_bind$3, 0, 0), undefined);
      const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_children$2);
      while (true) {
        const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
        if (_bind$4 === undefined) {
          break;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _key = _x._0;
          const _child = _x._1;
          _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(mounted, _key, _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_child, scheduler, captured_link_listener, node, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
          continue;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(mounted);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGsE(value) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(value));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _start = _Frag._1;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode3end(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _end = _Frag._2;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode17needs__relocation(self, anchor) {
  const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode3end(self)));
  const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(anchor);
  if (_bind$3.$tag === 0) {
    if (_bind$4.$tag === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    const _Some = _bind$3;
    const _actual = _Some._0;
    if (_bind$4.$tag === 1) {
      const _Some$2 = _bind$4;
      const _expected = _Some$2._0;
      return !_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_actual, _expected);
    } else {
      return true;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(self, parent) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _start = _Frag._1;
          const _end = _Frag._2;
          const start = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
          const end = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
          while (true) {
            const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(start));
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _node$2 = _Some._0;
              if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2, end)) {
                _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _node$2);
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, start);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, end);
          return;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element));
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode8relocate(self, parent, before) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    if (_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode17needs__relocation(self$2, before)) {
      let element;
      _L$2: {
        switch (self$2.$tag) {
          case 0: {
            const _Elem = self$2;
            const _element = _Elem._4;
            element = _element;
            break _L$2;
          }
          case 1: {
            const _Text = self$2;
            const _element$2 = _Text._1;
            element = _element$2;
            break _L$2;
          }
          case 3: {
            const _Thunk = self$2;
            const _node = _Thunk._1;
            _tmp$2 = _node;
            continue _L;
          }
          default: {
            const _Frag = self$2;
            const _start = _Frag._1;
            const _end = _Frag._2;
            const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start));
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _a = _Some._0;
              const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end));
              if (_bind$4.$tag === 1) {
                const _Some$2 = _bind$4;
                const _b = _Some$2._0;
                if (_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_a, _b)) {
                } else {
                  $panic();
                }
              } else {
                $panic();
              }
            } else {
              $panic();
            }
            const start = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
            const end = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
            let anchor = before;
            while (true) {
              const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end));
              if (_bind$4.$tag === 1) {
                const _Some = _bind$4;
                const _node$2 = _Some._0;
                if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2, start)) {
                  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _node$2, anchor);
                  anchor = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2);
                  continue;
                } else {
                  break;
                }
              } else {
                break;
              }
            }
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, start, anchor);
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, end, before);
            return;
          }
        }
      }
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), before);
      return;
    } else {
      return;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom8Children3mapGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, f) {
  switch (self.$tag) {
    case 0: {
      const _Array = self;
      const _children = _Array._0;
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = f(_p$4);
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_p);
    }
    case 1: {
      const _Map = self;
      const _children$2 = _Map._0;
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(_M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_children$2, (_discard_, child) => f(child)));
    }
    default: {
      const _RawHtml = self;
      const _html = _RawHtml._0;
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_html);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(old, new_, scheduler, parent) {
  const slots = old.slots;
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(slots);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _event = _x._0;
      const _slot = _x._1;
      if (!_M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers, _event)) {
        _slot.val = (_discard_, _discard_$2) => {
        };
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _event = _x._0;
      const _handler = _x._1;
      const _bind$4 = _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event);
      if (_bind$4 === undefined) {
        const slot = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handler);
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _event, (event) => {
          const _func = slot.val;
          _func(event, scheduler);
        });
        _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event, slot);
      } else {
        const _Some$2 = _bind$4;
        const _slot = _Some$2;
        _slot.val = _handler;
      }
      continue;
    }
  }
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.attrs);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.attrs, _key)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key);
      }
      continue;
    }
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.attrs);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$4 = _M0MPB3Map3getGssE(old.props.attrs, _key);
      if (_bind$4 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _value2);
      } else {
        const _Some$2 = _bind$4;
        const _value1 = _Some$2;
        if (!(_value1 === _value2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _value2);
        }
      }
      continue;
    }
  }
  const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.props);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$5);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new_.props, _key)) {
        let reset;
        if (_value.$tag === 3) {
          reset = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGsE("");
        } else {
          reset = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGsE();
        }
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, reset);
      }
      continue;
    }
  }
  const _it$6 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.props);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$6);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$4 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(old.props.props, _key);
      if (_bind$4 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value2));
      } else {
        const _Some$2 = _bind$4;
        const _value1 = _Some$2;
        if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(_value1, _value2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value2));
        }
      }
      continue;
    }
  }
  const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
  let stylesheet;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _html = _Some._0;
    stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
  } else {
    const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      const _svg = _Some._0;
      stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
    } else {
      stylesheet = $panic();
    }
  }
  const _it$7 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.styles);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$7);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.styles, _key)) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property(stylesheet, _key);
      }
      continue;
    }
  }
  const _it$8 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.styles);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$8);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$5 = _M0MPB3Map3getGssE(old.props.styles, _key);
      if (_bind$5 === undefined) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _key, _value2);
      } else {
        const _Some$2 = _bind$5;
        const _value1 = _Some$2;
        if (!(_value1 === _value2)) {
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _key, _value2);
        }
      }
      continue;
    }
  }
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(new_, slots);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(old, new_, scheduler, captured_link_listener, parent, anchor) {
  _L: {
    let new$2;
    _L$2: {
      switch (old.$tag) {
        case 0: {
          const _Array = old;
          const _old = _Array._0;
          switch (new_.$tag) {
            case 0: {
              const _Array$2 = new_;
              const _new = _Array$2._0;
              const old_length = _old.length;
              const new_length = _new.length;
              let before = anchor;
              const acc = [];
              let length;
              if (old_length > new_length) {
                let _tmp$2 = old_length - 1 | 0;
                while (true) {
                  const index = _tmp$2;
                  if (index >= new_length) {
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(_M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(_old, index), parent);
                    _tmp$2 = index - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                length = new_length;
              } else {
                let _tmp$2 = new_length - 1 | 0;
                while (true) {
                  const index = _tmp$2;
                  if (index >= old_length) {
                    const node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(_new, index), scheduler, captured_link_listener, parent, before);
                    _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(acc, node);
                    before = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                    _tmp$2 = index - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                length = old_length;
              }
              let _tmp$2 = length - 1 | 0;
              while (true) {
                const index = _tmp$2;
                if (index >= 0) {
                  const node = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(_old, index), _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(_new, index), scheduler, captured_link_listener, parent, before);
                  _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(acc, node);
                  before = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                  _tmp$2 = index - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(acc));
            }
            case 2: {
              const _RawHtml = new_;
              const _new$2 = _RawHtml._0;
              new$2 = _new$2;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        case 1: {
          const _Map = old;
          const _old$2 = _Map._0;
          switch (new_.$tag) {
            case 1: {
              const _Map$2 = new_;
              const _new$3 = _Map$2._0;
              const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_old$2);
              while (true) {
                const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
                if (_bind$3 === undefined) {
                  break;
                } else {
                  const _Some = _bind$3;
                  const _x = _Some;
                  const _key = _x._0;
                  const _node = _x._1;
                  if (!_M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_new$3, _key)) {
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(_node, parent);
                  }
                  continue;
                }
              }
              const order = _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_new$3);
              let before$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
              const reversed = [];
              const _bind$3 = order.length;
              let _tmp$3 = _bind$3 - 1 | 0;
              while (true) {
                const index = _tmp$3;
                if (index >= 0) {
                  const _bind$4 = _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(order, index);
                  const _key = _bind$4._0;
                  const _vnode = _bind$4._1;
                  const _bind$5 = _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_old$2, _key);
                  let node;
                  if (_bind$5 === undefined) {
                    node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_vnode, scheduler, captured_link_listener, parent, before$2);
                  } else {
                    const _Some = _bind$5;
                    const _node = _Some;
                    const node$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_node, _vnode, scheduler, captured_link_listener, parent, before$2);
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode8relocate(node$2, parent, before$2);
                    node = node$2;
                  }
                  _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(reversed, { _0: _key, _1: node });
                  before$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                  _tmp$3 = index - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(_M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(reversed, 0, reversed.length), undefined));
            }
            case 2: {
              const _RawHtml$2 = new_;
              const _new$4 = _RawHtml$2._0;
              new$2 = _new$4;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        default: {
          const _RawHtml$3 = old;
          const _old$3 = _RawHtml$3._0;
          if (new_.$tag === 2) {
            const _RawHtml$4 = new_;
            const _new$5 = _RawHtml$4._0;
            if (!(_old$3 === _new$5)) {
              _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), _new$5);
            }
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_new$5);
          } else {
            break _L;
          }
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), new$2);
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(new$2);
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), "");
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom8Children3mapGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new_, (child) => _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(child, scheduler, captured_link_listener, parent, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(old, new_, scheduler, captured_link_listener, parent, anchor) {
  _L: {
    switch (old.$tag) {
      case 0: {
        const _Elem = old;
        const _tag1 = _Elem._0;
        const _props1 = _Elem._1;
        const _children1 = _Elem._2;
        const _ns1 = _Elem._3;
        const _element = _Elem._4;
        if (new_.$tag === 0) {
          const _Elem$2 = new_;
          const _tag2 = _Elem$2._0;
          const _props2 = _Elem$2._1;
          const _children2 = _Elem$2._2;
          const _ns2 = _Elem$2._3;
          if (!(_tag1 === _tag2) || _M0IP016_24default__implPB2Eq10not__equalGOsE(_ns1, _ns2)) {
            _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(old, parent);
            return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(new_, scheduler, captured_link_listener, parent, anchor);
          } else {
            const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_props1, _props2, scheduler, _element);
            const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_children1, _children2, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
            _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(_element, _tag2, props.props);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(_tag2, props, children, _ns2, _element);
          }
        } else {
          break _L;
        }
      }
      case 1: {
        const _Text = old;
        const _text1 = _Text._0;
        const _element$2 = _Text._1;
        if (new_.$tag === 1) {
          const _Text$2 = new_;
          const _text2 = _Text$2._0;
          if (!(_text1 === _text2)) {
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_element$2, _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(_text2));
          }
          return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(_text2, _element$2);
        } else {
          break _L;
        }
      }
      case 2: {
        const _Frag = old;
        const _children1$2 = _Frag._0;
        const _start = _Frag._1;
        const _end = _Frag._2;
        if (new_.$tag === 2) {
          const _Frag$2 = new_;
          const _children2 = _Frag$2._0;
          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_children1$2), new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(_children2), scheduler, captured_link_listener, parent, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end)));
          if (children.$tag === 0) {
            const _Array = children;
            const _children = _Array._0;
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(_children, _start, _end);
          } else {
            return $panic();
          }
        } else {
          break _L;
        }
      }
      default: {
        const _Thunk = old;
        const _hash1 = _Thunk._0;
        const _node = _Thunk._1;
        if (new_.$tag === 3) {
          const _Thunk$2 = new_;
          const _hash2 = _Thunk$2._0;
          const _render = _Thunk$2._1;
          if (_hash1 === _hash2) {
            return _Thunk;
          } else {
            const vnode = _render();
            const node = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_node, vnode, scheduler, captured_link_listener, parent, anchor);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(_hash2, node);
          }
        } else {
          break _L;
        }
      }
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(old, parent);
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(new_, scheduler, captured_link_listener, parent, anchor);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__document(old, new_, scheduler, container, captured_link_listener) {
  _L: {
    if (container.$tag === 0) {
      if (old.$tag === 0) {
        const _Elem = old;
        const _x = _Elem._0;
        if (_x === "html") {
          const _old_props = _Elem._1;
          const _x$2 = _Elem._2;
          if (_x$2.$tag === 0) {
            const _Array = _x$2;
            const _x$3 = _Array._0;
            if (_x$3.length === 2) {
              const _x$4 = _x$3[0];
              if (_x$4.$tag === 0) {
                const _Elem$2 = _x$4;
                const _x$5 = _Elem$2._0;
                if (_x$5 === "head") {
                  const _old_head_props = _Elem$2._1;
                  const _old_head_children = _Elem$2._2;
                  const _head_element = _Elem$2._4;
                  const _x$6 = _x$3[1];
                  if (_x$6.$tag === 0) {
                    const _Elem$3 = _x$6;
                    const _x$7 = _Elem$3._0;
                    if (_x$7 === "body") {
                      const _old_body_props = _Elem$3._1;
                      const _old_body_children = _Elem$3._2;
                      const _body_element = _Elem$3._4;
                      const _html_element = _Elem._4;
                      const _x$8 = _Elem._3;
                      if (_x$8 === undefined) {
                        if (new_.$tag === 0) {
                          const _Elem$4 = new_;
                          const _x$9 = _Elem$4._0;
                          if (_x$9 === "html") {
                            const _new_props = _Elem$4._1;
                            const _x$10 = _Elem$4._2;
                            if (_x$10.$tag === 0) {
                              const _Array$2 = _x$10;
                              const _x$11 = _Array$2._0;
                              if (_x$11.length === 2) {
                                const _x$12 = _x$11[0];
                                if (_x$12.$tag === 0) {
                                  const _Elem$5 = _x$12;
                                  const _x$13 = _Elem$5._0;
                                  if (_x$13 === "head") {
                                    const _new_head_props = _Elem$5._1;
                                    const _new_head_children = _Elem$5._2;
                                    const _x$14 = _x$11[1];
                                    if (_x$14.$tag === 0) {
                                      const _Elem$6 = _x$14;
                                      const _x$15 = _Elem$6._0;
                                      if (_x$15 === "body") {
                                        const _new_body_props = _Elem$6._1;
                                        const _new_body_children = _Elem$6._2;
                                        const _x$16 = _Elem$4._3;
                                        if (_x$16 === undefined) {
                                          const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_props, _new_props, scheduler, _html_element);
                                          const props$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_head_props, _new_head_props, scheduler, _head_element);
                                          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_old_head_children, _new_head_children, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_head_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
                                          const head = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("head", props$2, children, undefined, _head_element);
                                          const props$3 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_body_props, _new_body_props, scheduler, _body_element);
                                          const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_old_body_children, _new_body_children, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_body_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
                                          const body = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("body", props$3, children$2, undefined, _body_element);
                                          return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("html", props, new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([head, body]), undefined, _html_element);
                                        } else {
                                          break _L;
                                        }
                                      } else {
                                        break _L;
                                      }
                                    } else {
                                      break _L;
                                    }
                                  } else {
                                    break _L;
                                  }
                                } else {
                                  break _L;
                                }
                              } else {
                                break _L;
                              }
                            } else {
                              break _L;
                            }
                          } else {
                            break _L;
                          }
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      const _Some = container;
      const _container = _Some._0;
      return _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(old, new_, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_container), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
    }
  }
  return $panic();
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom6update(self, root, scheduler) {
  self.inode = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__document(self.inode, root, scheduler, self.target_element, self.captured_link_listener);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom29new__captured__link__listener(scheduler) {
  return (event) => {
    const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
    if (_bind$3.$tag === 1) {
      const _Some = _bind$3;
      const _mouse_event = _Some._0;
      if (!(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event) || _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event))) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
        const href = _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event)))), "href"));
        scheduler.method_table.method_0(scheduler.self, scheduler.method_table.method_6(scheduler.self, href));
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom10initialize(vnode, scheduler, target_element_id) {
  const captured_link_listener = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom29new__captured__link__listener(scheduler);
  _L: {
    if (target_element_id === undefined) {
      switch (vnode.$tag) {
        case 0: {
          const _Elem = vnode;
          const _x = _Elem._0;
          if (_x === "html") {
            const _props = _Elem._1;
            const _x$2 = _Elem._2;
            if (_x$2.$tag === 0) {
              const _Array = _x$2;
              const _x$3 = _Array._0;
              if (_x$3.length === 2) {
                const _x$4 = _x$3[0];
                if (_x$4.$tag === 0) {
                  const _Elem$2 = _x$4;
                  const _x$5 = _Elem$2._0;
                  if (_x$5 === "head") {
                    const _head_props = _Elem$2._1;
                    const _head_children = _Elem$2._2;
                    const _x$6 = _x$3[1];
                    if (_x$6.$tag === 0) {
                      const _Elem$3 = _x$6;
                      const _x$7 = _Elem$3._0;
                      if (_x$7 === "body") {
                        const _body_props = _Elem$3._1;
                        const _body_children = _Elem$3._2;
                        const _x$8 = _Elem._3;
                        if (_x$8 === undefined) {
                          const element = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__head(_M0FP319moonbit_2dcommunity7rabbita3dom8document())));
                          const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element, "head", _head_props, scheduler, captured_link_listener);
                          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _head_children, scheduler, captured_link_listener);
                          const head = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("head", props, children, undefined, element);
                          const element$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__body(_M0FP319moonbit_2dcommunity7rabbita3dom8document())));
                          const props$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element$2, "body", _body_props, scheduler, captured_link_listener);
                          const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element$2), _body_children, scheduler, captured_link_listener);
                          const body = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("body", props$2, children$2, undefined, element$2);
                          const html = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document22get__document__element(_M0FP319moonbit_2dcommunity7rabbita3dom8document()));
                          const props$3 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(html, "html", _props, scheduler, captured_link_listener);
                          const inode = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("html", props$3, new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([head, body]), undefined, html);
                          const _bind$3 = _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__;
                          return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(inode, _bind$3, captured_link_listener);
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        }
        case 1: {
          break _L;
        }
        case 2: {
          break _L;
        }
        default: {
          break _L;
        }
      }
    } else {
      const _Some = target_element_id;
      const _id = _Some;
      const container = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), _id));
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(container, "");
      const inode = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(vnode, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(container), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      const _bind$3 = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(container);
      return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(inode, _bind$3, captured_link_listener);
    }
  }
  return $panic();
}
function _M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_x_2126, _x_2127) {
  return _x_2126 === _x_2127;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs) {
  if (style.length > 0) {
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "style", _M0MPC15array5Array4joinGsE(style, new _M0TPC16string10StringView(_M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131, 0, _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131.length)));
    return;
  } else {
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html8push__id(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "id", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__class(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "class", _v);
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, key, value) {
  const _bind$3 = _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key);
  if (_bind$3 === undefined) {
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, value);
  } else {
    const _Some = _bind$3;
    const _previous = _Some;
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, (event, scheduler) => {
      _previous(event, scheduler);
      value(event, scheduler);
    });
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "click", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__click(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(attrs, (_discard_) => _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)));
}
function _M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(_M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location(event));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element) {
  return _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousedown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, "scroll", (event, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(attrs, (event) => {
      const element = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(event)));
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keydown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keyup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html22push__value__attr__int(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "value", _M0MPC13int3Int18to__string_2einner(_v, 10));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "value", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__title(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "title", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__name(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "name", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "disabled", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "hidden", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__type(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "type", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "autofocus", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build() {
  const _bind$3 = [];
  const _tmp$2 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const _tmp$3 = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$4, 0, 0), undefined);
  const _bind$5 = [];
  const _tmp$4 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$5, 0, 0), undefined);
  const _bind$6 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props3new(_tmp$2, _tmp$3, _tmp$4, _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$6, 0, 0), undefined));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(self) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props4copy(self);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children) {
  let attrs$2;
  if (attrs === undefined) {
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(_a);
  }
  let children$2;
  _L: {
    _L$2: {
      const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
      if (_bind$3 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _String = _x;
          const _raw_html = _String._0;
          _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
          children$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(_raw_html);
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    children$2 = _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  }
  return { _0: attrs$2, _1: children$2 };
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children) {
  let attrs$2;
  if (attrs === undefined) {
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(_a);
  }
  let children$2;
  _L: {
    _L$2: {
      const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
      if (_bind$3 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _String = _x;
          const _raw_html = _String._0;
          _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
          children$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(_raw_html);
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    children$2 = _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  }
  return { _0: attrs$2, _1: children$2 };
}
function _M0FP319moonbit_2dcommunity7rabbita4html8fragment(children) {
  const _p = new Array(children.length);
  const _p$2 = children.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = children[_p$3];
      _p[_p$3] = _p$4;
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$3 = _p;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Frag(_p$3);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__type(type_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "button";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(style$46$opt, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h2_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "h2";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html2h2GsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html10h2_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "div";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "p";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15section_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "section";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html7sectionGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html15section_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "span";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13small_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "small";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html5smallGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html13small_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14strong_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "strong";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html6strongGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html14strong_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text(str);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10ul_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "ul";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html2ulGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html10ul_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10li_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, value, id, class_, title, hidden, on_click, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html22push__value__attr__int(value, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "li";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html2liGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, value, id, class_, title, hidden, on_click, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html10li_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, value, id, class_, title, hidden, on_click, attrs, children);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _p$4;
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(_p);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB4Hash13hash__combine(_x_388, _x_389) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(_x_388, _x_389);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_x_384, _x_385) {
  return _x_384.gen === _x_385.gen && _x_384.idx === _x_385.idx;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid() {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val + 1 | 0;
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(childs, compute) {
  const _bind$3 = [];
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$4, true, _bind$3);
  const _bind$5 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$6 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$7 = undefined;
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_bind$5, _bind$7, compute, 0, 0, _bind$6, childs, dirty);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE([{ self: a, method_table: _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }], () => {
    const _p = a.value;
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    return f(_tmp$2);
  });
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP39moonstudy9moonstudy3app9ViewModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, f) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE([{ self: a, method_table: _M0FP0174moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }], () => {
    const _p = a.value;
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    return f(_tmp$2);
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope() {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id$2) => {
    const _tmp$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
    const _bind$3 = [];
    return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id$2, _tmp$2, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$3, 0, 0), undefined), []);
  });
  const result = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, id, () => f(id));
  const _bind$3 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _scope = _Some;
    _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_scope.sub_scopes, id);
  }
  return result;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(f) {
  _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope().cleanups, f);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(self) {
  const _it = _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self.sub_scopes);
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _id = _Some;
      const _bind$4 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _id);
      if (_bind$4 === undefined) {
      } else {
        const _Some$2 = _bind$4;
        const _scope = _Some$2;
        _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_scope);
      }
      continue;
    }
  }
  const _bind$3 = self.cleanups;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const cleanup = _bind$3[_];
      cleanup();
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = self.parent;
  if (_bind$5 === undefined) {
  } else {
    const _Some = _bind$5;
    const _p = _Some;
    _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _p).sub_scopes, self.id);
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, self.id);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeId7cleanup(id) {
  _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, id));
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGORP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGORP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGORP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGORP39moonstudy9moonstudy3app9ViewModelE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP39moonstudy9moonstudy3app9ViewModelE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IP39moonstudy9moonstudy3app9ViewModelPB2Eq5equal(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old === new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGORP39moonstudy9moonstudy3app9ViewModelE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3.$tag === 0) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4Some(new_);
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some._0;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IPC16option6OptionPB2Eq5equalGRP39moonstudy9moonstudy3app9ViewModelE(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4Some(new_);
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty(node) {
  const _bind$3 = [{ _0: node.method_table.method_3(node.self), _1: false }];
  const traverses = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(_bind$3, 0, 1));
  while (true) {
    const _bind$4 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses);
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_expanded) {
        _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(_x$2.parents);
      } else {
        if (!_x$2.dirty) {
          _x$2.dirty = true;
          const _bind$5 = _x$2.parents;
          const _bind$6 = _bind$5.length;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind$6) {
              const p = _bind$5[_];
              _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses, { _0: p, _1: false });
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses, { _0: _x$2, _1: true });
        } else {
          continue;
        }
      }
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGORP39moonstudy9moonstudy3app9ViewModelE(x) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = _M0DTPC16option6OptionGORP39moonstudy9moonstudy3app9ViewModelE4None__;
  const _bind$6 = () => x;
  const _bind$7 = [];
  const _bind$8 = [];
  const _bind$9 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$10 = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$9, true, _bind$8);
  const node = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGORP39moonstudy9moonstudy3app9ViewModelE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, _bind$10);
  const write = (x$2) => {
    node.compute = () => x$2;
    _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty({ self: node, method_table: _M0FP0177moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  };
  return { _0: node, _1: write };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGORP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app9ViewModelE(a, f) {
  const _bind$3 = [];
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$4, true, _bind$3);
  const _bind$5 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$6 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$7 = undefined;
  const _bind$8 = () => f(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(a.value));
  const _bind$9 = [{ self: a, method_table: _M0FP0177moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP39moonstudy9moonstudy3app9ViewModelE(_bind$5, _bind$7, _bind$8, 0, 0, _bind$6, _bind$9, dirty_b);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value(node) {
  const stack = [{ _0: node, _1: false }];
  const _bind$3 = [];
  const seen = _M0MPC13set3Set3SetGiE(new _M0TPB9ArrayViewGiE(_bind$3, 0, 0), undefined);
  const recomputes = [];
  while (true) {
    const _bind$4 = _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(stack);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_x$2.method_table.method_3(_x$2.self).dirty) {
        const id = _x$2.method_table.method_0(_x$2.self);
        if (_expanded) {
          _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(recomputes, _x$2);
        } else {
          if (!_M0MPC13set3Set8containsGiE(seen, id)) {
            _M0MPC13set3Set3addGiE(seen, id);
            _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(stack, { _0: _x$2, _1: true });
            const _bind$5 = _x$2.method_table.method_1(_x$2.self);
            const _bind$6 = _bind$5.length;
            let _tmp$2 = 0;
            while (true) {
              const _ = _tmp$2;
              if (_ < _bind$6) {
                const child = _bind$5[_];
                if (child.method_table.method_3(child.self).dirty) {
                  _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(stack, { _0: child, _1: false });
                }
                _tmp$2 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
  const _bind$4 = recomputes.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const node$2 = recomputes[_];
      const _bind$5 = node$2.method_table.method_1(node$2.self);
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$6) {
          const child = _bind$5[_$2];
          const _p = child.method_table.method_3(child.self).parents;
          let _tmp$4;
          let _p$2;
          _L: {
            _L$2: {
              const _p$3 = _p.length;
              let _tmp$5 = 0;
              while (true) {
                const _p$4 = _tmp$5;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  if (!(_p$5.id !== node$2.method_table.method_3(node$2.self).id)) {
                    _p$2 = false;
                    break _L$2;
                  }
                  _tmp$5 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$4 = true;
              break _L;
            }
            _tmp$4 = _p$2;
          }
          if (_tmp$4) {
            _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(child.method_table.method_3(child.self).parents, node$2.method_table.method_3(node$2.self));
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      node$2.method_table.method_4(node$2.self);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0190moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fvdom_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  const _p = a.value;
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGORP39moonstudy9moonstudy3app9ViewModelE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0177moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonstudy_2fmoonstudy_2fapp_2fViewModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  return _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(a.value);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP39moonstudy9moonstudy3app9ViewModelE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGORP39moonstudy9moonstudy3app9ViewModelE(a);
}
function _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(self, _discard_, filter_global) {
  const _bind$3 = [];
  const map = _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(_bind$3, 0, 0), undefined);
  const go = (s) => {
    let h;
    let k;
    let v;
    _L: {
      if (s.$tag === 0) {
        const _Custom = s;
        const _x = _Custom._0;
        const _x$2 = _Custom._1;
        if (_x$2 === 1) {
          const _x$3 = _Custom._2;
          const _x$4 = _Custom._3;
          if (filter_global) {
            return;
          } else {
            h = _x$3;
            k = _x;
            v = _x$4;
            break _L;
          }
        } else {
          const _h = _Custom._2;
          const _v = _Custom._3;
          h = _h;
          k = _x;
          v = _v;
          break _L;
        }
      } else {
        const _Batch = s;
        const _xs = _Batch._0;
        const _p = _xs.length;
        let _tmp$2 = 0;
        while (true) {
          const _p$2 = _tmp$2;
          if (_p$2 < _p) {
            const _p$3 = _xs[_p$2];
            go(_p$3);
            _tmp$2 = _p$2 + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
    }
    _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(map, k, { _0: h, _1: v });
  };
  go(self);
  return map;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(old_subs, new_subs, scheduler) {
  const _bind$3 = [];
  const sub_map = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old_subs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      const _bind$5 = _M0MPB3Map3getGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_subs, _key);
      if (_bind$5 === undefined) {
        const _func = _sub.unload;
        _func(scheduler);
      } else {
        const _Some$2 = _bind$5;
        const _x$2 = _Some$2;
        const _new_payload = _x$2._0;
        const _func = _sub.update_tagger;
        _func(_new_payload);
        _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _sub);
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_subs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      const _payload = _sub._0;
      const _loader = _sub._1;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(old_subs, _key)) {
        const _func = _loader;
        const _bind$5 = _func(_payload, scheduler);
        if (_bind$5 === undefined) {
        } else {
          const _Some$2 = _bind$5;
          const _running = _Some$2;
          _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _running);
        }
      }
      continue;
    }
  }
  return sub_map;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(stores, id, sub_map, scheduler) {
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores, id);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(sub_map);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _sub = _x._1;
      const _func = _sub.unload;
      _func(scheduler);
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(_env, scheduler, model) {
  const subscriptions = _env._2;
  const emit = _env._1;
  const sub_map = _env._0;
  if (subscriptions === undefined) {
    return;
  } else {
    const _Some = subscriptions;
    const _subscriptions = _Some;
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(_subscriptions(model, emit), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, false);
    sub_map.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(sub_map.val, new_subs, scheduler);
    return;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineGRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(initialize, update, subscriptions) {
  const host = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host.val;
  const stores = host.method_table.method_2(host.self);
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores);
  const emit = (msg) => {
    const _p = new _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage(id, _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP39moonstudy9moonstudy3app3MsgE(msg));
    return new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime2op, _p);
  };
  const _bind$3 = [];
  const sub_map = new _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind$3, 0, 0), undefined));
  const _env = { _0: sub_map, _1: emit, _2: subscriptions };
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGORP39moonstudy9moonstudy3app9ViewModelE(undefined);
  const _model = _bind$4._0;
  const _set_model = _bind$4._1;
  const _bind$5 = initialize(emit);
  const _model_value = _bind$5._0;
  const _init_cmd = _bind$5._1;
  _set_model(_model_value);
  const on_update = (scheduler, msg) => {
    const msg$2 = msg.value;
    const old_model = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP39moonstudy9moonstudy3app9ViewModelE(_model);
    let _tmp$2;
    if (old_model === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p = old_model;
      _tmp$2 = _p;
    }
    const _bind$6 = update(_tmp$2, msg$2, emit);
    const _new_model = _bind$6._0;
    const _cmd = _bind$6._1;
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(_env, scheduler, _new_model);
    _set_model(_new_model);
    return _cmd;
  };
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores, id, new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(on_update));
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(() => {
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(stores, id, sub_map.val, { self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  });
  host.method_table.method_3(host.self, _init_cmd);
  const _tmp$2 = { self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler };
  const _p = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP39moonstudy9moonstudy3app9ViewModelE(_model);
  let _tmp$3;
  if (_p === undefined) {
    _tmp$3 = $panic();
  } else {
    const _p$2 = _p;
    _tmp$3 = _p$2;
  }
  _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(_env, _tmp$2, _tmp$3);
  return { _0: _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGORP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app9ViewModelE(_model, (x) => {
    if (x === undefined) {
      return $panic();
    } else {
      const _p$2 = x;
      return _p$2;
    }
  }), _1: emit };
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime15handle__message(host, extension) {
  if (extension.$tag === 3) {
    const _Message = extension;
    const _id = _Message._0;
    const _erased_msg = _Message._1;
    const _bind$3 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(host.method_table.method_2(host.self), _id);
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _store = _Some;
      const _func = _store.on_update;
      const cmd = _func({ self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, _erased_msg);
      host.method_table.method_4(host.self, cmd);
    }
    return true;
  } else {
    return false;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores(self) {
  return self.stores;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin(_self) {
  return "";
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(_self, _url) {
  return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request(_self, _url) {
  return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(_self, _cmd) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector(_self, _injector) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector(_self, _injector) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(_self) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup(_self) {}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost11BrowserHost(element_id, builder) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE((scope) => {
    const _bind$4 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
    const _bind$5 = [];
    const _bind$6 = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$5, 0, 0));
    const _bind$7 = undefined;
    const _bind$8 = undefined;
    const _bind$9 = (_discard_) => _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
    const _bind$10 = (_discard_) => _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
    const _bind$11 = [];
    const _bind$12 = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGWERP319moonbit_2dcommunity7rabbita3cmd3CmdE(_bind$11, 0, 0));
    const host = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost(_bind$12, _bind$6, _bind$4, scope, _bind$7, true, false, _bind$8, _bind$9, _bind$10);
    return { _0: host, _1: _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: host, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, builder) };
  });
  const _host = _bind$3._0;
  const _output = _bind$3._1;
  _host.graph_output = _output;
  const url = _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window());
  const cmd = _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(_host, url);
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(_host, cmd);
  const root = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: _host, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, () => _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_output));
  _host.document = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom10initialize(root, { self: _host, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, element_id);
  _host.drain_scheduled = false;
  return _host;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost14request__frame(self) {
  if (!self.paint_scheduled) {
    self.paint_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), (_discard_) => {
      const _bind$3 = self.document;
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _document = _Some;
        const _p = self.graph_output;
        let output;
        if (_p === undefined) {
          output = $panic();
        } else {
          const _p$2 = _p;
          output = _p$2;
        }
        const vnode = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: self, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, () => _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(output));
        _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom6update(_document, vnode, { self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
      }
      self.paint_scheduled = false;
      while (true) {
        const _bind$4 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue);
        if (_bind$4 === undefined) {
          return;
        } else {
          const _Some = _bind$4;
          const _f = _Some;
          const cmd = _f();
          _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
          continue;
        }
      }
    });
    return;
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(_state) {
  const _State_0 = _state;
  const self = _State_0._1;
  const _cont_param = _State_0._0;
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(_M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, _cont_param));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self) {
  if (!self.drain_scheduled) {
    self.drain_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window16queue__microtask(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), () => {
      while (true) {
        const _bind$3 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.task_queue);
        if (_bind$3 === undefined) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _op = _x._0;
          const _extension = _x._1;
          if (_M0FP419moonbit_2dcommunity7rabbita8internal7runtime15handle__message({ self: self, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, _extension)) {
            continue;
          }
          let _try_err;
          _L: {
            _L$2: {
              const _bind$4 = _M0FP319moonbit_2dcommunity7rabbita3cmd6invoke(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key, _op, _extension, { self: self, method_table: _M0FP0120moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eContext });
              let _bind$5;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _bind$5 = _ok._0;
              } else {
                const _err = _bind$4;
                _try_err = _err._0;
                break _L$2;
              }
              switch (_bind$5.$tag) {
                case 0: {
                  break;
                }
                case 1: {
                  const _Ready = _bind$5;
                  const _cmd = _Ready._0;
                  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, _cmd);
                  break;
                }
                case 2: {
                  const _Async = _bind$5;
                  const _f = _Async._0;
                  _M0MP311moonbitlang5async9js__async7Promise11from__asyncGuE((_cont, _err_cont) => {
                    const _bind$6 = _f((_cont_param) => {
                      let _err;
                      _L$3: {
                        const _bind$7 = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(_cont_param, self));
                        let _bind$8;
                        if (_bind$7.$tag === 1) {
                          const _ok = _bind$7;
                          _bind$8 = _ok._0;
                        } else {
                          const _err$2 = _bind$7;
                          _err = _err$2._0;
                          break _L$3;
                        }
                        if (_bind$8 === -1) {
                          return;
                        } else {
                          const _Some$2 = _bind$8;
                          const _payload = _Some$2;
                          _cont(_payload);
                          return;
                        }
                      }
                      _err_cont(_err);
                    }, _err_cont);
                    let _bind$7;
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _bind$7 = _ok._0;
                    } else {
                      return _bind$6;
                    }
                    if (_bind$7 === undefined) {
                      return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
                    } else {
                      const _Some$2 = _bind$7;
                      const _payload = _Some$2;
                      return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(_payload, self));
                    }
                  }, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
                  break;
                }
                case 3: {
                  const _AfterLayout = _bind$5;
                  const _f$2 = _AfterLayout._0;
                  _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue, _f$2);
                  break;
                }
                default: {
                  const _LegacyEffect = _bind$5;
                  const _x$2 = _LegacyEffect._0;
                  if (_x$2 === 0) {
                    const _f$3 = _LegacyEffect._1;
                    _f$3({ self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
                  } else {
                    const _f$3 = _LegacyEffect._1;
                    _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue, () => {
                      _f$3({ self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
                      return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
                    });
                  }
                }
              }
              break _L;
            }
          }
          continue;
        }
      }
      self.drain_scheduled = false;
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost14request__frame(self);
    });
    return;
  } else {
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(self) {
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores(self) {
  return self.stores;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup(self) {
  _M0MP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeId7cleanup(self.scope);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd) {
  const tasks = _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key, cmd);
  const _bind$3 = tasks.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const task = tasks[_];
      _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.task_queue, task);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector(self, injector) {
  self.url_changed = injector;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector(self, injector) {
  self.url_request = injector;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context11get__origin(_self) {
  return _M0MP319moonbit_2dcommunity7rabbita3dom6Window6origin(_M0FP319moonbit_2dcommunity7rabbita3dom6window());
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(self, url) {
  const _func = self.url_changed;
  return _func(url);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request(self, url) {
  const _func = self.url_request;
  return _func(url);
}
function _M0FP219moonbit_2dcommunity7rabbita3new(builder) {
  return new _M0TP219moonbit_2dcommunity7rabbita3App(builder);
}
function _M0FP219moonbit_2dcommunity7rabbita13create__stateGRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(model, update, subscriptions) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineGRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE((_discard_) => ({ _0: model, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), update, subscriptions);
  const _node = _bind$3._0;
  const _emit = _bind$3._1;
  return { _0: _node, _1: _emit };
}
function _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f);
}
function _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP39moonstudy9moonstudy3app9ViewModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, f) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP39moonstudy9moonstudy3app9ViewModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, f);
}
function _M0MP219moonbit_2dcommunity7rabbita3App5mount(self, element_id) {
  const host = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost11BrowserHost(element_id, () => {
    const _func = self.builder;
    const output = _func();
    return _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(output, (html) => html);
  });
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(host);
}
function _M0IP29moonstudy9moonstudy15StorageEnvelopePC14json8FromJson10from__json(_x_258, _x_259) {
  let _de_schema_version_261 = undefined;
  let _de_records_260 = _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4None__;
  if (_x_258.$tag === 6) {
    const _Object = _x_258;
    const __map = _Object._0;
    const _bind$3 = _M0MPB3Map3getGsRPB4JsonE(__map, "schema_version");
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const __v = _Some;
      const _p = "schema_version";
      const _bind$4 = _M0IPC13int3IntPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_259, _p));
      let _tmp$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$2 = _ok._0;
      } else {
        return _bind$4;
      }
      _de_schema_version_261 = _tmp$2;
    }
    const _bind$4 = _M0MPB3Map3getGsRPB4JsonE(__map, "records");
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const __v = _Some;
      const _p = "records";
      const _bind$5 = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP29moonstudy9moonstudy11StudyRecordE(__v, new _M0DTPC14json8JsonPath3Key(_x_259, _p));
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      _de_records_260 = new _M0DTPC16option6OptionGRPB5ArrayGRP29moonstudy9moonstudy11StudyRecordEE4Some(_tmp$2);
    }
  } else {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_259, _1: "Expected object to deserialize StorageEnvelope" }));
  }
  const _bind$3 = _de_schema_version_261;
  let _de_schema_version_261$2;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_259, _1: "Missing field schema_version" }));
  } else {
    const _Some = _bind$3;
    _de_schema_version_261$2 = _Some;
  }
  const _bind$4 = _de_records_260;
  let _de_records_260$2;
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    _de_records_260$2 = _Some._0;
  } else {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_259, _1: "Missing field records" }));
  }
  return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy15StorageEnvelopeRPC14json15JsonDecodeErrorE2Ok(new _M0TP29moonstudy9moonstudy15StorageEnvelope(_de_schema_version_261$2, _de_records_260$2));
}
function _M0IP29moonstudy9moonstudy15StorageEnvelopePB6ToJson8to__json(_x_255) {
  const _bind$3 = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "schema_version", _M0IPC13int3IntPB6ToJson8to__json(_x_255.schema_version));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "records", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP29moonstudy9moonstudy11StudyRecordE(_x_255.records));
  return new _M0DTPB4Json6Object($36$map);
}
function _M0IP29moonstudy9moonstudy11StudyRecordPB2Eq5equal(_x_244, _x_245) {
  return _x_244.id === _x_245.id && _x_244.date === _x_245.date && _x_244.topic === _x_245.topic && _x_244.minutes === _x_245.minutes && _x_244.completed === _x_245.completed && _x_244.note === _x_245.note;
}
function _M0IP29moonstudy9moonstudy11StudyRecordPB6ToJson8to__json(_x_239) {
  const _bind$3 = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 0), undefined);
  const _p = _x_239.id;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "id", new _M0DTPB4Json6String(_p));
  const _p$2 = _x_239.date;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "date", new _M0DTPB4Json6String(_p$2));
  const _p$3 = _x_239.topic;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "topic", new _M0DTPB4Json6String(_p$3));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "minutes", _M0IPC13int3IntPB6ToJson8to__json(_x_239.minutes));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "completed", _M0IPC14bool4BoolPB6ToJson8to__json(_x_239.completed));
  const _p$4 = _x_239.note;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "note", new _M0DTPB4Json6String(_p$4));
  return new _M0DTPB4Json6Object($36$map);
}
function _M0IP29moonstudy9moonstudy11StudyRecordPC14json8FromJson10from__json(_x_204, _x_205) {
  let _de_topic_211 = undefined;
  let _de_note_210 = undefined;
  let _de_minutes_209 = undefined;
  let _de_id_208 = undefined;
  let _de_date_207 = undefined;
  let _de_completed_206 = -1;
  if (_x_204.$tag === 6) {
    const _Object = _x_204;
    const __map = _Object._0;
    const _bind$3 = _M0MPB3Map3getGsRPB4JsonE(__map, "id");
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const __v = _Some;
      const _p = "id";
      const _bind$4 = _M0IPC16string6StringPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp$2 = _ok._0;
      } else {
        return _bind$4;
      }
      _de_id_208 = _tmp$2;
    }
    const _bind$4 = _M0MPB3Map3getGsRPB4JsonE(__map, "date");
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const __v = _Some;
      const _p = "date";
      const _bind$5 = _M0IPC16string6StringPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      _de_date_207 = _tmp$2;
    }
    const _bind$5 = _M0MPB3Map3getGsRPB4JsonE(__map, "topic");
    if (_bind$5 === undefined) {
    } else {
      const _Some = _bind$5;
      const __v = _Some;
      const _p = "topic";
      const _bind$6 = _M0IPC16string6StringPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$2 = _ok._0;
      } else {
        return _bind$6;
      }
      _de_topic_211 = _tmp$2;
    }
    const _bind$6 = _M0MPB3Map3getGsRPB4JsonE(__map, "minutes");
    if (_bind$6 === undefined) {
    } else {
      const _Some = _bind$6;
      const __v = _Some;
      const _p = "minutes";
      const _bind$7 = _M0IPC13int3IntPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$2 = _ok._0;
      } else {
        return _bind$7;
      }
      _de_minutes_209 = _tmp$2;
    }
    const _bind$7 = _M0MPB3Map3getGsRPB4JsonE(__map, "completed");
    if (_bind$7 === undefined) {
    } else {
      const _Some = _bind$7;
      const __v = _Some;
      const _p = "completed";
      const _bind$8 = _M0IPC14bool4BoolPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$2 = _ok._0;
      } else {
        return _bind$8;
      }
      _de_completed_206 = _tmp$2;
    }
    const _bind$8 = _M0MPB3Map3getGsRPB4JsonE(__map, "note");
    if (_bind$8 === undefined) {
    } else {
      const _Some = _bind$8;
      const __v = _Some;
      const _p = "note";
      const _bind$9 = _M0IPC16string6StringPC14json8FromJson10from__json(__v, new _M0DTPC14json8JsonPath3Key(_x_205, _p));
      let _tmp$2;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$2 = _ok._0;
      } else {
        return _bind$9;
      }
      _de_note_210 = _tmp$2;
    }
  } else {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Expected object to deserialize StudyRecord" }));
  }
  const _bind$3 = _de_topic_211;
  let _de_topic_211$2;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field topic" }));
  } else {
    const _Some = _bind$3;
    _de_topic_211$2 = _Some;
  }
  const _bind$4 = _de_note_210;
  let _de_note_210$2;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field note" }));
  } else {
    const _Some = _bind$4;
    _de_note_210$2 = _Some;
  }
  const _bind$5 = _de_minutes_209;
  let _de_minutes_209$2;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field minutes" }));
  } else {
    const _Some = _bind$5;
    _de_minutes_209$2 = _Some;
  }
  const _bind$6 = _de_id_208;
  let _de_id_208$2;
  if (_bind$6 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field id" }));
  } else {
    const _Some = _bind$6;
    _de_id_208$2 = _Some;
  }
  const _bind$7 = _de_date_207;
  let _de_date_207$2;
  if (_bind$7 === undefined) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field date" }));
  } else {
    const _Some = _bind$7;
    _de_date_207$2 = _Some;
  }
  const _bind$8 = _de_completed_206;
  let _de_completed_206$2;
  if (_bind$8 === -1) {
    return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_205, _1: "Missing field completed" }));
  } else {
    _de_completed_206$2 = _bind$8;
  }
  return new _M0DTPC16result6ResultGRP29moonstudy9moonstudy11StudyRecordRPC14json15JsonDecodeErrorE2Ok(new _M0TP29moonstudy9moonstudy11StudyRecord(_de_id_208$2, _de_date_207$2, _de_topic_211$2, _de_minutes_209$2, _de_completed_206$2, _de_note_210$2));
}
function _M0FP29moonstudy9moonstudy10date__part(date, start, end) {
  let value = 0;
  let index = start;
  while (true) {
    if (index < end) {
      const _tmp$2 = Math.imul(value, 10) | 0;
      const _tmp$3 = index;
      value = (_tmp$2 + (_tmp$3 >>> 0 < date.length ? date.charCodeAt(_tmp$3) : $oob()) | 0) - 48 | 0;
      index = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return value;
}
function _M0FP29moonstudy9moonstudy16valid__iso__date(date) {
  let _tmp$2;
  if (date.length !== 10) {
    _tmp$2 = true;
  } else {
    let _tmp$3;
    const _p = 4 >>> 0 < date.length ? date.charCodeAt(4) : $oob();
    const _p$2 = 45;
    if (_p !== _p$2) {
      _tmp$3 = true;
    } else {
      const _p$3 = 7 >>> 0 < date.length ? date.charCodeAt(7) : $oob();
      const _p$4 = 45;
      _tmp$3 = _p$3 !== _p$4;
    }
    _tmp$2 = _tmp$3;
  }
  if (_tmp$2) {
    return false;
  }
  let index = 0;
  while (true) {
    if (index < 10) {
      if (index !== 4 && index !== 7) {
        const _tmp$3 = index;
        const code = _tmp$3 >>> 0 < date.length ? date.charCodeAt(_tmp$3) : $oob();
        if (code < 48 || code > 57) {
          return false;
        }
      }
      index = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const year = _M0FP29moonstudy9moonstudy10date__part(date, 0, 4);
  const month = _M0FP29moonstudy9moonstudy10date__part(date, 5, 7);
  const day = _M0FP29moonstudy9moonstudy10date__part(date, 8, 10);
  if (year === 0 || (month < 1 || (month > 12 || day < 1))) {
    return false;
  }
  const leap_year = (year % 4 | 0) === 0 && ((year % 100 | 0) !== 0 || (year % 400 | 0) === 0);
  let days_in_month;
  switch (month) {
    case 2: {
      days_in_month = leap_year ? 29 : 28;
      break;
    }
    case 4: {
      days_in_month = 30;
      break;
    }
    case 6: {
      days_in_month = 30;
      break;
    }
    case 9: {
      days_in_month = 30;
      break;
    }
    case 11: {
      days_in_month = 30;
      break;
    }
    default: {
      days_in_month = 31;
    }
  }
  return day <= days_in_month;
}
function _M0FP29moonstudy9moonstudy16validate__record(record) {
  return record.id.length === 0 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS504 : !_M0FP29moonstudy9moonstudy16valid__iso__date(record.date) ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS505 : _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(record.topic, undefined)).length === 0 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS506 : record.topic.length > 100 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS507 : record.note.length > 500 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS508 : record.minutes <= 0 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS509 : record.minutes > 1440 ? _M0FP29moonstudy9moonstudy16validate__recordN6constrS510 : undefined;
}
function _M0FP29moonstudy9moonstudy19add__topic__minutes(totals, positions, topic, minutes) {
  const _bind$3 = _M0MPB3Map3getGsiE(positions, topic);
  if (_bind$3 === undefined) {
    const index = totals.length;
    _M0MPB3Map3setGsiE(positions, topic, index);
    _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(totals, new _M0TP29moonstudy9moonstudy10TopicTotal(topic, minutes, 1, index));
    return;
  } else {
    const _Some = _bind$3;
    const _index = _Some;
    const current = _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(totals, _index);
    _M0MPC15array5Array3setGRP29moonstudy9moonstudy10TopicTotalE(totals, _index, new _M0TP29moonstudy9moonstudy10TopicTotal(topic, current.minutes + minutes | 0, current.record_count + 1 | 0, current.first_index));
    return;
  }
}
function _M0FP29moonstudy9moonstudy12topic__stats(records) {
  const totals = [];
  const _bind$3 = [];
  const positions = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$3, 0, 0), undefined);
  const _bind$4 = records.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const record = records[_];
      _M0FP29moonstudy9moonstudy19add__topic__minutes(totals, positions, record.topic, record.minutes);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGRP29moonstudy9moonstudy10TopicTotalE(totals, (a, b) => a.minutes > b.minutes ? -1 : a.minutes < b.minutes ? 1 : a.first_index - b.first_index | 0);
  const result = [];
  const _bind$5 = totals.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const total = totals[_];
      _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(result, new _M0TP29moonstudy9moonstudy9TopicStat(total.topic, total.minutes, total.record_count));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP29moonstudy9moonstudy15encode__storage(records) {
  const envelope = new _M0TP29moonstudy9moonstudy15StorageEnvelope(1, records);
  return _M0MPC14json4Json17stringify_2einner(_M0IP29moonstudy9moonstudy15StorageEnvelopePB6ToJson8to__json(envelope), false, 0, undefined);
}
function _M0FP29moonstudy9moonstudy13load__storage(raw) {
  if (raw.length === 0) {
    return new _M0TP29moonstudy9moonstudy11StorageLoad(true, "", []);
  }
  let _try_err;
  _L: {
    const _bind$3 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(raw, 0, raw.length), 1024);
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _bind$4 = _M0FPC14json10from__jsonGRP29moonstudy9moonstudy15StorageEnvelopeE(_tmp$2, undefined);
    let envelope;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      envelope = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    if (envelope.schema_version !== 1) {
      return new _M0TP29moonstudy9moonstudy11StorageLoad(false, "数据版本不兼容，请先备份原始数据", []);
    }
    if (envelope.records.length > 10000) {
      return new _M0TP29moonstudy9moonstudy11StorageLoad(false, "记录超过 10000 条，请先备份原始数据", []);
    }
    const _bind$5 = [];
    const seen = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$5, 0, 0), undefined);
    const _bind$6 = envelope.records;
    const _bind$7 = _bind$6.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$7) {
        const record = _bind$6[_];
        const _bind$8 = _M0FP29moonstudy9moonstudy16validate__record(record);
        if (_bind$8 === undefined) {
        } else {
          return new _M0TP29moonstudy9moonstudy11StorageLoad(false, "已有记录包含无效内容，请先备份原始数据", []);
        }
        if (_M0MPB3Map8containsGsbE(seen, record.id)) {
          return new _M0TP29moonstudy9moonstudy11StorageLoad(false, "已有记录编号重复，请先备份原始数据", []);
        }
        _M0MPB3Map3setGsbE(seen, record.id, true);
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP29moonstudy9moonstudy11StorageLoad(true, "", envelope.records);
  }
  return new _M0TP29moonstudy9moonstudy11StorageLoad(false, "本地记录无法读取，请先备份原始数据", []);
}
function _M0FP29moonstudy9moonstudy21delete__from__storage(raw, id) {
  const loaded = _M0FP29moonstudy9moonstudy13load__storage(raw);
  if (!loaded.ok) {
    return new _M0TP29moonstudy9moonstudy13StorageAction(false, loaded.message, raw);
  }
  const remaining = [];
  let found = false;
  const _bind$3 = loaded.records;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const record = _bind$3[_];
      if (record.id === id) {
        found = true;
      } else {
        _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(remaining, record);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!found) {
    return new _M0TP29moonstudy9moonstudy13StorageAction(false, "未找到要删除的记录，页面可能需要刷新", raw);
  }
  return new _M0TP29moonstudy9moonstudy13StorageAction(true, "记录已删除", _M0FP29moonstudy9moonstudy15encode__storage(remaining));
}
function _M0IP39moonstudy9moonstudy3app9ViewModelPB2Eq5equal(_x_31, _x_32) {
  return _x_31.ok === _x_32.ok && _x_31.message === _x_32.message && _M0IPC15array5ArrayPB2Eq5equalGRP29moonstudy9moonstudy11StudyRecordE(_x_31.records, _x_32.records) && _M0IPC15array5ArrayPB2Eq5equalGRP29moonstudy9moonstudy9TopicStatE(_x_31.topics, _x_32.topics) && _x_31.history_limit === _x_32.history_limit;
}
function _M0FP39moonstudy9moonstudy3app17load__with__limit(history_limit) {
  const loaded = _M0FP29moonstudy9moonstudy13load__storage(_M0FP39moonstudy9moonstudy3app11read__local(_M0FP39moonstudy9moonstudy3app12storage__key));
  if (!loaded.ok) {
    return new _M0TP39moonstudy9moonstudy3app9ViewModel(false, loaded.message, [], [], history_limit);
  }
  return new _M0TP39moonstudy9moonstudy3app9ViewModel(true, "", loaded.records, _M0FP29moonstudy9moonstudy12topic__stats(loaded.records), history_limit);
}
function _M0FP39moonstudy9moonstudy3app14delete__record(model, id) {
  if (!_M0FP39moonstudy9moonstudy3app15confirm__delete()) {
    return model;
  }
  const result = _M0FP29moonstudy9moonstudy21delete__from__storage(_M0FP39moonstudy9moonstudy3app11read__local(_M0FP39moonstudy9moonstudy3app12storage__key), id);
  if (!result.ok) {
    _M0FP39moonstudy9moonstudy3app12show__notice(result.message);
    return model;
  }
  if (!_M0FP39moonstudy9moonstudy3app12write__local(_M0FP39moonstudy9moonstudy3app12storage__key, result.storage_json)) {
    _M0FP39moonstudy9moonstudy3app12show__notice("浏览器存储写入失败，记录没有删除。");
    return model;
  }
  _M0FP39moonstudy9moonstudy3app21notify__data__changed();
  return _M0FP39moonstudy9moonstudy3app17load__with__limit(model.history_limit);
}
function _M0FP39moonstudy9moonstudy3app6update(model, msg, _emit) {
  let next;
  switch (msg.$tag) {
    case 0: {
      const _Delete = msg;
      const _id = _Delete._0;
      next = _M0FP39moonstudy9moonstudy3app14delete__record(model, _id);
      break;
    }
    case 1: {
      next = new _M0TP39moonstudy9moonstudy3app9ViewModel(model.ok, model.message, model.records, model.topics, model.history_limit + 25 | 0);
      break;
    }
    default: {
      next = _M0FP39moonstudy9moonstudy3app17load__with__limit(model.history_limit);
    }
  }
  return { _0: next, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
}
function _M0FP39moonstudy9moonstudy3app16record__subtitle(record) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(buf, record.date);
  _M0IPB13StringBuilderPB6Logger13write__string(buf, " · ");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, record.completed ? "已完成" : "未完成");
  if (record.note.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " · ");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, record.note);
  }
  return buf.val;
}
function _M0FP39moonstudy9moonstudy3app14history__items(model, emit) {
  const items = [];
  const total = model.records.length;
  const first = total > model.history_limit ? total - model.history_limit | 0 : 0;
  let _tmp$2 = total - 1 | 0;
  while (true) {
    const index = _tmp$2;
    if (index >= first) {
      const record = _M0MPC15array5Array2atGRP29moonstudy9moonstudy11StudyRecordE(model.records, index);
      const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS54, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html6strongGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, record.topic), _M0FP319moonbit_2dcommunity7rabbita4html5smallGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, _M0FP39moonstudy9moonstudy3app16record__subtitle(record))]);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, record.minutes);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " 分钟");
      const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS56, undefined, -1, undefined, _string_builder.val);
      const _func = emit;
      _M0MPC15array5Array4pushGRP29moonstudy9moonstudy9TopicStatE(items, _M0FP319moonbit_2dcommunity7rabbita4html2liGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, undefined, -1, undefined, undefined, [_tmp$3, _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS55, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS57, undefined, -1, _M0FP39moonstudy9moonstudy3app14history__itemsN6constrS58, -1, undefined, undefined, -1, _func(new _M0DTP39moonstudy9moonstudy3app3Msg6Delete(record.id)), undefined, "删除")])]));
      _tmp$2 = index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return items;
}
function _M0FP39moonstudy9moonstudy3app4view(model, emit) {
  const _p = model.topics;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html6strongGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, _p$5.topic);
      const _p$6 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
      _M0MPB13StringBuilder13write__objectGiE(_p$6, _p$5.minutes);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$6, " 分钟 · ");
      _M0MPB13StringBuilder13write__objectGiE(_p$6, _p$5.record_count);
      _M0IPB13StringBuilderPB6Logger13write__string(_p$6, " 条");
      _p$2[_p$4] = _M0FP319moonbit_2dcommunity7rabbita4html2liGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, undefined, -1, undefined, undefined, [_tmp$3, _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, _p$6.val)]);
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const topics = _p$2;
  const _func = emit;
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS59, undefined, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS60, _M0FP39moonstudy9moonstudy3app4viewN6constrS61, -1, undefined, undefined, -1, _func(_M0DTP39moonstudy9moonstudy3app3Msg15ExternalChanged__), undefined, "");
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html7sectionGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS62, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS63, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html2h2GsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS64, undefined, undefined, -1, undefined, "学习主题"), _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS65, undefined, -1, undefined, "按累计分钟排序")]), _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS66, _M0FP39moonstudy9moonstudy3app4viewN6constrS67, undefined, model.topics.length > 0, undefined, "保存记录后，这里会显示每个主题的投入时间。"), _M0FP319moonbit_2dcommunity7rabbita4html2ulGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS68, _M0FP39moonstudy9moonstudy3app4viewN6constrS69, undefined, -1, undefined, undefined, topics)]);
  const _tmp$5 = _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS71, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html2h2GsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS72, undefined, undefined, -1, undefined, "历史记录"), _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS73, undefined, -1, undefined, "发现写错的记录，可以删除后重新填写")]);
  const _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS74, _M0FP39moonstudy9moonstudy3app4viewN6constrS75, undefined, model.records.length > 0, undefined, "还没有记录，先写下今天学了什么吧。");
  const _tmp$7 = _M0FP319moonbit_2dcommunity7rabbita4html2ulGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS76, _M0FP39moonstudy9moonstudy3app4viewN6constrS77, undefined, -1, undefined, undefined, _M0FP39moonstudy9moonstudy3app14history__items(model, emit));
  const _tmp$8 = model.records.length <= model.history_limit;
  const _func$2 = emit;
  return _M0FP319moonbit_2dcommunity7rabbita4html8fragment([_tmp$3, _tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html7sectionGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP39moonstudy9moonstudy3app4viewN6constrS70, undefined, -1, undefined, [_tmp$5, _tmp$6, _tmp$7, _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, _M0FP39moonstudy9moonstudy3app4viewN6constrS78, _M0FP39moonstudy9moonstudy3app4viewN6constrS79, undefined, _tmp$8, _M0FP39moonstudy9moonstudy3app4viewN6constrS80, -1, undefined, undefined, -1, _func$2(_M0DTP39moonstudy9moonstudy3app3Msg8ShowMore__), undefined, "显示更多记录")])]);
}
function _M0FP39moonstudy9moonstudy3app12records__app() {
  const _bind$3 = _M0FP219moonbit_2dcommunity7rabbita13create__stateGRP39moonstudy9moonstudy3app9ViewModelRP39moonstudy9moonstudy3app3MsgE(_M0FP39moonstudy9moonstudy3app17load__with__limit(25), _M0FP39moonstudy9moonstudy3app6update, undefined);
  const _model = _bind$3._0;
  const _emit = _bind$3._1;
  return _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP39moonstudy9moonstudy3app9ViewModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(_model, (model) => _M0FP39moonstudy9moonstudy3app4view(model, _emit));
}
(() => {
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(_M0FP219moonbit_2dcommunity7rabbita3new(_M0FP39moonstudy9moonstudy3app12records__app), "app-records");
  _M0FP39moonstudy9moonstudy3app13notify__ready();
})();
