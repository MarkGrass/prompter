import { useState } from 'react';

import { Grid, GridItem } from 'shared/ui';
import { Dialogs } from 'widgets/Dialogs';
import { Messenger } from 'widgets/Messenger';
import { Prompter } from 'widgets/Prompter';

const DialogsPage = () => {
    const [activeDialog, setActiveDialog] = useState<string | null>(null);

    return (
        <Grid fullHeight fullWidth gap="0">
            <GridItem col={3}>
                <Dialogs activeDialog={activeDialog} onSelect={setActiveDialog} />
            </GridItem>
            <GridItem col={6}>
                <Messenger activeDialog={activeDialog} />
            </GridItem>
            <GridItem col={3}>
                <Prompter />
            </GridItem>
        </Grid>
    );
};

export default DialogsPage;
