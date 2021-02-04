type FooterProps = {
    info: string;
    icons: {
        name: string;
        color: string;
    }[];
    note: {
        text: string;
        link: string;
        linkText: string;
    };
};

type SectionHeader = {
    text: string;
    icon: string;
};

type SectionItem = {
    icon?: string;
    text: string;
    progress: {
        value: string | number;
        showValue?: boolean;
        size: 'sm' | 'lg';
    };
};

type SideBarProps = {
    image: {
        src: string;
        name: string;
    };
    info: {
        section: {
            header?: SectionHeader;
            items: SectionItem[];
        }[];
    };
};

type SectionRow = {
    info: {
        title: string;
        entity: string;
    };
    date: {
        start: string;
        end?: string;
        active?: boolean;
    };
    text: string;
};

type ContentProps = {
    sections: {
        header: SectionHeader;
        rows: SectionRow[];
    }[];
};

type Props = {
    main: {
        sidebar: SideBarProps;
        content: ContentProps;
    };
    footer: FooterProps;
};