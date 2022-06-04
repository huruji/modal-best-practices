import * as React from 'react';
import { Button, Empty } from '@douyinfe/semi-ui';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import style from './index.module.scss';


interface IEmptyTableProps {
  onAdd?: () => void;
  emptyTitle?: string;
  btnText?: string;
}

const EmptyInfo: React.FC<IEmptyTableProps> = ({ onAdd, emptyTitle, btnText }) => {
    return (
      <Empty image={<IllustrationNoContent style={{width: 150, height: 150}} />} title={emptyTitle} className={style.empty}>
        <Button icon="plus" className={style.btn} theme="solid" type="primary" onClick={onAdd}>
          {btnText}
        </Button>
      </Empty>
    );
}

export default EmptyInfo;
