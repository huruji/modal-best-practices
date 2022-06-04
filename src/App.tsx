import { Toast, Button } from "@douyinfe/semi-ui";
import DataModalWrapper from "./components/dataModalWrapper";
import EmptyInfo from './components/emptyInfo';
import './App.css';

const initValues = {
  name: 'huruji',
  role: 'software developer engineer'
};

export default function App() {
  return (
    <div className="App">
      <h4>默认按钮</h4>
      <DataModalWrapper afterSubmitCallback={() => {
        Toast.success('添加成功');
      }} />
      <h4>编辑按钮</h4>
      <DataModalWrapper
        buttonElement={<Button type="primary" theme="solid">
          编辑业务
        </Button>}
        initValue={initValues}
        afterSubmitCallback={() => {
          Toast.success('保存成功');
        }}
      />
      <div>
        <h4>空状态：</h4>
        <DataModalWrapper
          buttonElement={(
            <EmptyInfo
              emptyTitle={'还没有业务'}
              btnText={'添加业务'}
            />
          )}
          clickKey="onAdd"
          afterSubmitCallback={() => {
            Toast.success('添加成功');
          }}
        />
      </div>
    </div>
  );
}