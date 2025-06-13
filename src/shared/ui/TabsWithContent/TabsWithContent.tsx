import type { ReactNode } from 'react';
import { useState } from 'react';

import type { StackProps } from '../Stack';
import { Stack } from '../Stack';
import type { TabProps, TabsProps, TabValueBase } from '../Tabs';
import { Tabs } from '../Tabs';

type TabData<T extends TabValueBase = string> = {
    value: T;
    label: string;
    tabContent: ReactNode;
    hide?: boolean;
} & TabProps;

export type TabsWithContentProps<T extends TabValueBase = string> = Omit<
    TabsProps<T>,
    'tabs'
> & {
    tabs: { [key in T]: TabData<T> };
    extraTabActions?: ReactNode;
    renderCustomTabsWrapper?: (children: ReactNode) => ReactNode;
} & Omit<StackProps, 'onChange'>;

export const TabsWithContent = <T extends TabValueBase = string>({
    tabs,
    initialValue,
    value,
    onChange,
    extraTabActions,
    renderCustomTabsWrapper = (children) => children,
    variant,
    ...rest
}: TabsWithContentProps<T>) => {
    const firstValue = Object.values<TabData<T>>(tabs)[0].value;

    const [uncontrolledValue, setUncontrolledValue] = useState<T>(
        initialValue || firstValue,
    );

    const tabsValue = value || uncontrolledValue;

    const { tabContent } = tabs?.[tabsValue] || {};

    const onChangeTab: TabsProps<T>['onChange'] = (tabItem) => {
        onChange?.(tabItem);

        if (!value) {
            setUncontrolledValue(tabItem.value);
        }
    };

    const tabsNode = (
        <Stack
            justify="spaceBetween"
            shouldWrapChildren={Boolean(extraTabActions) && variant !== 'scrollable'}
        >
            <Tabs<T>
                size="s"
                tabs={Object.values(tabs)}
                value={tabsValue}
                variant={variant}
                onChange={onChangeTab}
            />
            {extraTabActions}
        </Stack>
    );

    return (
        <Stack fullWidth direction="column" gap="l" {...rest}>
            {renderCustomTabsWrapper(tabsNode)}
            {tabContent}
        </Stack>
    );
};
