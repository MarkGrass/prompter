import { useState } from 'react';

import type {
    TabProps as OzenTabProps,
    TabsProps as OzenTabsProps,
} from '@ozen-ui/kit/Tabs';
import { Tab, Tabs as OzenTabs } from '@ozen-ui/kit/Tabs';

export type TabProps = Pick<OzenTabProps, 'onClick' | 'value' | 'label' | 'iconRight'>;

type TabData<T> = {
    value: T;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    hide?: boolean;
} & TabProps;

type CommonProps<T> = Omit<OzenTabsProps, 'children' | 'onChange' | 'value'> & {
    tabs: [...TabData<T>[]];
    onChange?: ({ value }: { value: T }) => void;
};

export type TabsUncontrolledProps<T> = CommonProps<T> & {
    initialValue: T;
    value?: never;
};

export type TabsControlledProps<T> = CommonProps<T> & {
    initialValue?: never;
    value: T;
};

export type TabValueBase = OzenTabsProps['value'];

export type TabsProps<T extends TabValueBase = string> =
    | TabsUncontrolledProps<T>
    | TabsControlledProps<T>;

export const Tabs = <T extends TabValueBase = string>({
    tabs,
    initialValue,
    value,
    onChange,
    ...rest
}: TabsProps<T>) => {
    const firstValue = Object.values<TabData<T>>(tabs)[0].value;

    const [uncontrolledValue, setUncontrolledValue] = useState<T>(
        initialValue || firstValue,
    );

    const tabsValue = value || uncontrolledValue;

    const onChangeTab: OzenTabsProps['onChange'] = (_, val) => {
        onChange?.({ value: val as T });

        if (!value) {
            setUncontrolledValue(val as T);
        }
    };
    const displayedTabs = tabs.filter((tab) => !tab.hide);

    return (
        <OzenTabs {...rest} value={tabsValue} onChange={onChangeTab}>
            {displayedTabs.map((tab) => (
                // eslint-disable-next-line react/jsx-key
                <Tab {...tab} key={tab.value} label={tab.label} value={tab.value} />
            ))}
        </OzenTabs>
    );
};
