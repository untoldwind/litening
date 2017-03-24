import {h, Component, cloneElement,} from 'preact';
import classnames from 'classnames';

export function Container({
    className,
    size,
    align,
    children,
    ...props,
}) {
    const ctClassNames = classnames(className, `slds-container--${size || 'fluid'}`, align
        ? `slds-container--${align}`
        : null);
    return (
        <div className={ctClassNames} { ...props }>
            {children}
        </div>
    );
}
