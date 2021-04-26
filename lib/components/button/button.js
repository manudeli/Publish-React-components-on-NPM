var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { StyledButton } from "./styled";
var Button = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? "default" : _a, icon = props.icon, _b = props.size, size = _b === void 0 ? "default" : _b, _c = props.className, className = _c === void 0 ? "" : _c, children = props.children, _d = props.disabled, disabled = _d === void 0 ? false : _d, _e = props.loading, loading = _e === void 0 ? false : _e, onClick = props.onClick, href = props.href, as = props.as, to = props.to;
    var styles = {
        innerType: type,
        size: size,
        disabled: disabled,
        withText: children !== null,
    };
    if (as) {
        return (_jsx(StyledButton, __assign({ as: as, to: to, ref: ref, className: className }, styles, { children: loading ? "Loading..." : children }), void 0));
    }
    if (href) {
        return (_jsx(StyledButton, __assign({ as: "a", href: href, ref: ref, className: className }, styles, { children: loading ? "Loading..." : children }), void 0));
    }
    return (_jsx(StyledButton, __assign({ as: "button", type: "button", onClick: onClick, ref: ref, className: className }, styles, { children: loading ? "Loading..." : children }), void 0));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map