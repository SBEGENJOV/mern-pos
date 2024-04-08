import { Modal, Form, Input, Select, Button, Card } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı: "
          name={"curtomerName"}
          rules={[
            { required: true, message: "Müşteri adı alanı boş geçilemez" },
          ]}
        >
          <Input placeholder="Müşteri Adını yazın" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Tel No: "
          name={"phoneNumber"}
          rules={[{ required: true }]}
        >
          <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Şekli: "
          name={"paymentmode"}
          rules={[{ required: true }]}
        >
          <Select placeholder="Ödeme Şeklini seçin">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-600">43.00₺</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Toplam</span>
            <span>592.92₺</span>
          </div>
          <div className="flex justify-end">
            <Button
              className=" mt-4 "
              type="primary"
              htmlType="submit"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
