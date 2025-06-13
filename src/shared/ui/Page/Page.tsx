import styles from './Page.module.css';

type Props = Readonly<{
    children: React.ReactNode;
}>;

export const Page = ({ children }: Props) => (
    <div className={styles.page}>{children}</div>
);
