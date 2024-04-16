import { Modal, Form, Input, Select, Button, Card, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartSlice";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch("http://localhost:5000/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          tax: ((cart.total * cart.tax) / 100).toFixed(2),
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (res.status === 200) {
        message.success("Fatura başarıyla oluşturuldu.");
        dispatch(reset());
        navigate("/bills");
      }
    } catch (error) {
      message.danger("Bir şeyler yanlış gitti.");
      console.log(error);
    }
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
          name={"customerName"}
          rules={[
            { required: true, message: "Müşteri adı alanı boş geçilemez" },
          ]}
        >
          <Input placeholder="Müşteri Adını yazın" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Tel No: "
          name={"customerPhoneNumber"}
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
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
          </div>
          <div className="flex justify-between my-2">
          <span>KDV %{cart.tax}</span>
            <span className="text-red-600">
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>
          <div className="flex justify-between font-bold">
          <b>Genel Toplam</b>
            <b>
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺
            </b>
          </div>
          <div className="flex justify-end">
            <Button
              className=" mt-4 "
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
              disabled={cart.cartItems.length === 0}
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
