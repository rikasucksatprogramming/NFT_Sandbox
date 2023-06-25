import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ObjectOther7.module.css';

interface Props {
  className?: string;
}
/* @figmaId 12:5 */
export const ObjectOther7: FC<Props> = memo(function ObjectOther7(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.objectOther7}></div>
    </div>
  );
});
