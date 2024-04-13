import { useState } from "react";
import "./style.css";
import { Button, Form, Input, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Categosires = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/category/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi.");
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="flex gap-4 md:flex-col  text-lg ">
      <li className="category-item">
        <span className="bold">Tümü</span>
      </li>
      <li className="category-item !bg-purple-800 hover:opacity-90">
        <PlusOutlined
          className="md:text-2xl"
          onClick={() => setIsAddModalOpen(true)}
        />
      </li>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categosires;
