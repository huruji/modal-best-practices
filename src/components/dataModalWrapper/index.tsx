import * as React from "react";
import { Button, Toast, Modal, Form, useFormApi } from "@douyinfe/semi-ui";
import { IconPlus } from '@douyinfe/semi-icons'


const { Input } = Form;

interface AddBusinessButtonProps {
  buttonElement?: React.ReactNode;
  clickKey?: string;
  productInfo?: any;
  initValue?: any;
  // 添加完成后的 callback，一般可以认为是刷新数据
  afterSubmitCallback?(toast?: boolean): void;
}

let dataFormApi: ReturnType<typeof useFormApi<{name: string, role: string}>>

const setDataFormApi = (formApi: any) => {
  dataFormApi = formApi;
};

const ButtonDefaultElement: React.ReactNode = (
  <Button icon={<IconPlus/>} type="primary" theme="solid">
    添加业务
  </Button>
);

const AddBusinessButton: React.FC<AddBusinessButtonProps> = ({
  buttonElement,
  clickKey,
  initValue,
  afterSubmitCallback
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onCancel = React.useCallback(() => {
    setModalShow(false);
  }, [setModalShow]);

  const handleClick = React.useCallback(async () => {
    setModalShow(true);
  }, [setModalShow]);

  const addKeyProps = clickKey || "onClick";
  const element = React.cloneElement(
    (buttonElement || ButtonDefaultElement) as any,
    {
      [addKeyProps]: handleClick
    }
  );

  const onOk = React.useCallback(async () => {
    // 校验数据，发送请求
    dataFormApi
      .validate()
      .then((values: any) => {
        console.log('data: ', values)
      })
      .then(() => {
        afterSubmitCallback?.()
        onCancel()
      })
      .catch((err: any) => {
        // console.log(err);
      });
  }, [afterSubmitCallback, onCancel])

  return (
    <>
      {element}
      <Modal
        visible={modalShow}
        closable={true}
        maskClosable={false}
        okText="保存"
        onCancel={onCancel}
        width={520}
        onOk={onOk}
      >
        <Form initValues={initValue} getFormApi={setDataFormApi}>
          <Input
            field="name"
            label="姓名"
            trigger="blur"
            rules={[{ required: true, message: "required error" }]}
          />
          <Input
            field="role"
            label="角色"
            trigger="blur"
            rules={[{ required: true, message: "required error" }]}
          />
        </Form>
      </Modal>
    </>
  );
};

export default AddBusinessButton;
