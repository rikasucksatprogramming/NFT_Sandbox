import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ObjectOther18.module.css';

interface Props {
  className?: string;
}
/* @figmaId 13:25 */
export const ObjectOther18: FC<Props> = memo(function ObjectOther18(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.objectOther18}></div>
    </div>
  );
});
